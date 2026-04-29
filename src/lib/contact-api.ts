import {
  ALLOWED_ATTACHMENT_EXTENSIONS,
  ALLOWED_ATTACHMENT_MIME_TYPES,
  MAX_ATTACHMENT_COUNT,
  MAX_TOTAL_ATTACHMENT_BYTES,
  type SubmissionType,
} from "./contact-contract";

export const CONTACT_API_PATH = "/api/contact";
export { MAX_ATTACHMENT_COUNT, MAX_TOTAL_ATTACHMENT_BYTES } from "./contact-contract";
const allowedAttachmentMimeTypes = new Set(ALLOWED_ATTACHMENT_MIME_TYPES);

export function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unitIndex]}`;
}

export function validateAttachmentFiles(files: File[]) {
  if (files.length === 0) {
    return { ok: false as const, message: "Bitte lade mindestens eine Datei hoch." };
  }

  if (files.length > MAX_ATTACHMENT_COUNT) {
    return {
      ok: false as const,
      message: `Bitte lade höchstens ${MAX_ATTACHMENT_COUNT} Dateien hoch.`,
    };
  }

  let totalSize = 0;

  for (const file of files) {
    const lowerName = file.name.toLowerCase();
    const hasAllowedExtension = ALLOWED_ATTACHMENT_EXTENSIONS.some((extension) =>
      lowerName.endsWith(extension),
    );
    const hasAllowedMimeType = !file.type || allowedAttachmentMimeTypes.has(file.type);

    if (!hasAllowedExtension || !hasAllowedMimeType) {
      return {
        ok: false as const,
        message: "Erlaubt sind PDF-, DOC-, DOCX-, TXT- und RTF-Dateien.",
      };
    }

    totalSize += file.size;
  }

  if (totalSize > MAX_TOTAL_ATTACHMENT_BYTES) {
    return {
      ok: false as const,
      message: `Die Gesamtgröße aller Dateien darf ${formatFileSize(MAX_TOTAL_ATTACHMENT_BYTES)} nicht überschreiten.`,
    };
  }

  return { ok: true as const };
}

export async function submitContactForm(form: HTMLFormElement, submissionType: SubmissionType) {
  const formData = new FormData(form);
  formData.set("submissionType", submissionType);

  const response = await fetch(CONTACT_API_PATH, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "X-Requested-With": "fetch",
    },
  });

  let payload: { error?: string } | null = null;

  try {
    payload = (await response.json()) as { error?: string };
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(payload?.error || "Das Formular konnte gerade nicht gesendet werden.");
  }
}
