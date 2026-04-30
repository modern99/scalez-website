import {
  ALLOWED_ATTACHMENT_EXTENSIONS,
  ALLOWED_ATTACHMENT_MIME_TYPES,
  isSubmissionType,
  MAX_ATTACHMENT_COUNT,
  MAX_TOTAL_ATTACHMENT_BYTES,
  type SubmissionType,
} from "../../src/lib/contact-contract";

interface Env {
  BREVO_API_KEY: string;
  CONTACT_RECIPIENT_EMAIL?: string;
  CONTACT_SENDER_EMAIL?: string;
  CONTACT_SENDER_NAME?: string;
  PUBLIC_SITE_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

const MAX_TEXT_LENGTH = 4000;
const allowedAttachmentMimeTypes = new Set(ALLOWED_ATTACHMENT_MIME_TYPES);

type FieldConfig = {
  name: string;
  label: string;
  required?: boolean;
  maxLength?: number;
};

type NormalizedSubmission = {
  submissionType: SubmissionType;
  replyTo: string;
  subject: string;
  intro: string;
  fields: Array<{ label: string; value: string }>;
  attachments: File[];
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const { BREVO_API_KEY, CONTACT_RECIPIENT_EMAIL, CONTACT_SENDER_EMAIL, CONTACT_SENDER_NAME, TURNSTILE_SECRET_KEY } = env;

  if (!BREVO_API_KEY || !CONTACT_RECIPIENT_EMAIL || !CONTACT_SENDER_EMAIL) {
    console.error("[contact] missing env vars:", {
      BREVO_API_KEY: !!BREVO_API_KEY,
      CONTACT_RECIPIENT_EMAIL: !!CONTACT_RECIPIENT_EMAIL,
      CONTACT_SENDER_EMAIL: !!CONTACT_SENDER_EMAIL,
    });
    return jsonResponse({ error: "Der Mailversand ist noch nicht konfiguriert." }, 500);
  }

  if (!isAllowedOrigin(request, env)) {
    return jsonResponse({ error: "Ungültige Anfragequelle." }, 403);
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ error: "Ungültige Formulardaten." }, 400);
  }

  if (readText(formData, "website")) {
    return jsonResponse({ ok: true }, 200);
  }

  if (TURNSTILE_SECRET_KEY) {
    const turnstileToken = readText(formData, "cf-turnstile-response");
    const turnstileValid = await verifyTurnstile(turnstileToken, TURNSTILE_SECRET_KEY, request);

    if (!turnstileValid) {
      return jsonResponse({ error: "Sicherheitsprüfung fehlgeschlagen. Bitte Seite neu laden und erneut versuchen." }, 403);
    }
  }

  let normalized: NormalizedSubmission;

  try {
    normalized = await normalizeSubmission(formData);
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Formular konnte nicht validiert werden." },
      400,
    );
  }

  const payload = await buildBrevoPayload(normalized, { CONTACT_RECIPIENT_EMAIL, CONTACT_SENDER_EMAIL, CONTACT_SENDER_NAME });
  const mailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!mailResponse.ok) {
    return jsonResponse(
      { error: "Die Nachricht konnte nicht versendet werden. Bitte versuche es später erneut." },
      502,
    );
  }

  return jsonResponse({ ok: true }, 200);
};

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
    },
  });
}

const ALLOWED_ORIGIN_HOSTNAMES = new Set([
  "www.scale-z.ch",
  "scale-z.ch",
  "scalez-demo.pages.dev",
]);

function isAllowedOrigin(request: Request, env: Env) {
  const origin = request.headers.get("Origin");
  const secFetchSite = request.headers.get("Sec-Fetch-Site");

  if (!origin) {
    return false;
  }

  if (secFetchSite && secFetchSite !== "same-origin") {
    return false;
  }

  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    const allowedHosts = new Set(ALLOWED_ORIGIN_HOSTNAMES);

    allowedHosts.add(requestUrl.hostname);

    if (env.PUBLIC_SITE_URL) {
      allowedHosts.add(new URL(env.PUBLIC_SITE_URL).hostname);
    }

    return allowedHosts.has(originUrl.hostname);
  } catch {
    return false;
  }
}

async function normalizeSubmission(formData: FormData): Promise<NormalizedSubmission> {
  const submissionType = readText(formData, "submissionType");

  if (!isSubmissionType(submissionType)) {
    throw new Error("Unbekannter Formulartyp.");
  }

  if (readText(formData, "privacyConsent") !== "accepted") {
    throw new Error("Bitte bestätige die Datenschutzhinweise.");
  }

  switch (submissionType) {
    case "contact":
      return buildContactSubmission(formData);
    case "company":
      return buildCompanySubmission(formData);
    case "candidate":
      return await buildCandidateSubmission(formData);
  }
}

function buildContactSubmission(formData: FormData): NormalizedSubmission {
  const fields = sanitizeFields(formData, [
    { name: "name", label: "Name", required: true, maxLength: 100 },
    { name: "email", label: "E-Mail", required: true, maxLength: 255 },
    { name: "subject", label: "Betreff", required: true, maxLength: 200 },
    { name: "message", label: "Nachricht", required: true, maxLength: 2000 },
  ]);

  const replyTo = fields.find((field) => field.label === "E-Mail")?.value ?? "";
  validateEmail(replyTo);

  const subject = fields.find((field) => field.label === "Betreff")?.value ?? "Neue Kontaktanfrage";

  return {
    submissionType: "contact",
    replyTo,
    subject: `[ScaleZ Kontakt] ${subject}`,
    intro: "Neue Nachricht über das allgemeine Kontaktformular.",
    fields,
    attachments: [],
  };
}

function buildCompanySubmission(formData: FormData): NormalizedSubmission {
  const fields = sanitizeFields(formData, [
    { name: "company", label: "Firma", required: true, maxLength: 100 },
    { name: "contact", label: "Ansprechpartner", required: true, maxLength: 100 },
    { name: "email", label: "E-Mail", required: true, maxLength: 255 },
    { name: "phone", label: "Telefon", required: true, maxLength: 30 },
    { name: "position", label: "Gesuchte Position", required: true, maxLength: 200 },
    { name: "requirements", label: "Anforderungen", maxLength: 2000 },
    { name: "start_date", label: "Startdatum", maxLength: 50 },
  ]);

  const replyTo = fields.find((field) => field.label === "E-Mail")?.value ?? "";
  validateEmail(replyTo);

  const company = fields.find((field) => field.label === "Firma")?.value ?? "Neue Unternehmensanfrage";

  return {
    submissionType: "company",
    replyTo,
    subject: `[ScaleZ Unternehmen] ${company}`,
    intro: "Neue Anfrage über das Unternehmensformular.",
    fields,
    attachments: [],
  };
}

async function buildCandidateSubmission(formData: FormData): Promise<NormalizedSubmission> {
  const fields = sanitizeFields(formData, [
    { name: "name", label: "Name", required: true, maxLength: 100 },
    { name: "email", label: "E-Mail", required: true, maxLength: 255 },
    { name: "phone", label: "Telefon", required: true, maxLength: 30 },
    { name: "position", label: "Wunschposition / Branche", maxLength: 200 },
    { name: "message", label: "Motivation", maxLength: 2000 },
  ]);

  const replyTo = fields.find((field) => field.label === "E-Mail")?.value ?? "";
  validateEmail(replyTo);

  const attachments = formData
    .getAll("files")
    .filter((value): value is File => value instanceof File && value.size > 0);

  await validateAttachments(attachments);

  const name = fields.find((field) => field.label === "Name")?.value ?? "Neue Bewerbung";

  return {
    submissionType: "candidate",
    replyTo,
    subject: `[ScaleZ Bewerbung] ${name}`,
    intro: "Neue Bewerbung über das Kandidatenformular.",
    fields,
    attachments,
  };
}

function sanitizeFields(formData: FormData, configs: FieldConfig[]) {
  return configs
    .map((config) => {
      const value = readText(formData, config.name);
      const normalizedValue = normalizeText(value, config);

      if (!normalizedValue && !config.required) {
        return null;
      }

      return {
        label: config.label,
        value: normalizedValue,
      };
    })
    .filter((field): field is { label: string; value: string } => Boolean(field));
}

function normalizeText(value: string, config: FieldConfig) {
  const trimmed = value.replace(/\r\n/g, "\n").trim();

  if (config.required && !trimmed) {
    throw new Error(`Bitte fülle das Feld "${config.label}" aus.`);
  }

  if (!trimmed) {
    return "";
  }

  if (trimmed.length > (config.maxLength ?? MAX_TEXT_LENGTH)) {
    throw new Error(`Das Feld "${config.label}" ist zu lang.`);
  }

  return trimmed;
}

function readText(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

function validateEmail(email: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    throw new Error("Bitte gib eine gültige E-Mail-Adresse an.");
  }
}

function getExtension(fileName: string) {
  const lower = fileName.toLowerCase();
  const dot = lower.lastIndexOf(".");
  return dot < 0 ? "" : lower.slice(dot + 1);
}

async function hasValidMagicBytes(file: File, extension: string) {
  const head = new Uint8Array(await file.slice(0, 8).arrayBuffer());

  if (head.length < 4) {
    return extension === "txt";
  }

  switch (extension) {
    case "pdf":
      return head[0] === 0x25 && head[1] === 0x50 && head[2] === 0x44 && head[3] === 0x46;
    case "docx":
      return head[0] === 0x50 && head[1] === 0x4b && (head[2] === 0x03 || head[2] === 0x05 || head[2] === 0x07);
    case "doc":
      return head[0] === 0xd0 && head[1] === 0xcf && head[2] === 0x11 && head[3] === 0xe0;
    case "rtf":
      return head[0] === 0x7b && head[1] === 0x5c && head[2] === 0x72 && head[3] === 0x74;
    case "txt":
      for (let i = 0; i < head.length; i += 1) {
        const byte = head[i];
        if (byte === 0x09 || byte === 0x0a || byte === 0x0d) continue;
        if (byte < 0x20 && byte !== 0x00) return false;
      }
      return true;
    default:
      return false;
  }
}

async function validateAttachments(files: File[]) {
  if (files.length === 0) {
    throw new Error("Bitte lade mindestens eine Datei hoch.");
  }

  if (files.length > MAX_ATTACHMENT_COUNT) {
    throw new Error(`Bitte lade höchstens ${MAX_ATTACHMENT_COUNT} Dateien hoch.`);
  }

  let totalSize = 0;

  for (const file of files) {
    totalSize += file.size;

    const fileName = file.name.toLowerCase();
    const extension = getExtension(fileName);
    const hasAllowedExtension = ALLOWED_ATTACHMENT_EXTENSIONS.some((candidate) =>
      fileName.endsWith(candidate),
    );
    const hasAllowedMimeType = !file.type || allowedAttachmentMimeTypes.has(file.type);

    if (!hasAllowedExtension || !hasAllowedMimeType) {
      throw new Error("Erlaubt sind PDF-, DOC-, DOCX-, TXT- und RTF-Dateien.");
    }

    const magicOk = await hasValidMagicBytes(file, extension);

    if (!magicOk) {
      throw new Error("Dateiinhalt passt nicht zum angegebenen Format.");
    }
  }

  if (totalSize > MAX_TOTAL_ATTACHMENT_BYTES) {
    throw new Error("Die Gesamtgröße aller Dateien darf 10 MB nicht überschreiten.");
  }
}

type MailConfig = {
  CONTACT_RECIPIENT_EMAIL: string;
  CONTACT_SENDER_EMAIL: string;
  CONTACT_SENDER_NAME?: string;
};

async function buildBrevoPayload(submission: NormalizedSubmission, config: MailConfig) {
  const attachment = await Promise.all(
    submission.attachments.map(async (file) => ({
      name: sanitizeFilename(file.name),
      content: await toBase64(file),
    })),
  );

  return {
    sender: {
      email: config.CONTACT_SENDER_EMAIL,
      name: config.CONTACT_SENDER_NAME || "ScaleZ",
    },
    to: [
      {
        email: config.CONTACT_RECIPIENT_EMAIL,
        name: "ScaleZ",
      },
    ],
    replyTo: {
      email: submission.replyTo,
    },
    subject: submission.subject,
    textContent: buildTextContent(submission),
    htmlContent: buildHtmlContent(submission),
    ...(attachment.length > 0 && { attachment }),
  };
}

function buildTextContent(submission: NormalizedSubmission) {
  const bodyLines = submission.fields.map((field) => `${field.label}: ${field.value}`);
  const attachmentSummary = submission.attachments.length
    ? `\nAnhänge: ${submission.attachments.map((file) => file.name).join(", ")}`
    : "";

  return `${submission.intro}\n\n${bodyLines.join("\n")}${attachmentSummary}\n\nHinweis: Die übermittelten Unterlagen sollen gemäss interner Vorgabe nach 24 Monaten gelöscht werden.`;
}

function buildHtmlContent(submission: NormalizedSubmission) {
  const rows = submission.fields
    .map(
      (field) =>
        `<tr><td style="padding:8px 12px;border:1px solid #d5d5d5;font-weight:600;vertical-align:top;">${escapeHtml(field.label)}</td><td style="padding:8px 12px;border:1px solid #d5d5d5;white-space:pre-wrap;">${escapeHtml(field.value)}</td></tr>`,
    )
    .join("");

  const attachmentBlock = submission.attachments.length
    ? `<p style="margin-top:24px;"><strong>Anhänge:</strong> ${escapeHtml(
        submission.attachments.map((file) => file.name).join(", "),
      )}</p>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;color:#111111;line-height:1.5;">
      <p>${escapeHtml(submission.intro)}</p>
      <table style="border-collapse:collapse;width:100%;margin-top:20px;">
        <tbody>${rows}</tbody>
      </table>
      ${attachmentBlock}
      <p style="margin-top:24px;color:#555555;font-size:13px;">
        Hinweis: Die übermittelten Unterlagen sollen gemäss interner Vorgabe nach 24 Monaten gelöscht werden.
      </p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeFilename(fileName: string) {
  return fileName.replace(/[\\/\r\n]+/g, "_").replace(/[^\w.\-() ]+/g, "_");
}

async function toBase64(file: File) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const chunkSize = 0x8000;
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

async function verifyTurnstile(token: string, secretKey: string, request: Request): Promise<boolean> {
  if (!token) {
    return false;
  }

  const ip = request.headers.get("CF-Connecting-IP") ?? undefined;
  const body: Record<string, string> = { secret: secretKey, response: token };

  if (ip) {
    body.remoteip = ip;
  }

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body).toString(),
    });

    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
