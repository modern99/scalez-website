// POST /api/admin/publish — legt Stellen/Blogartikel an, aktualisiert oder
// löscht sie: holt src/data/content.ts von GitHub, nimmt die Änderung per
// String-Chirurgie vor und committet auf main (triggert den Pages-Deploy).
// Der GitHub-Token liegt ausschliesslich serverseitig (Env-Secret).
import {
  buildBlogBlock,
  buildJobBlock,
  deleteEntry,
  hasSlugAnywhere,
  insertEntry,
  replaceEntry,
  SLUG_PATTERN,
  validateBlogEntry,
  validateJobEntry,
  type ArrayName,
} from "../../../src/lib/contentSurgery";

interface Env {
  GITHUB_TOKEN?: string;
  GITHUB_REPO?: string;
  GITHUB_BRANCH?: string;
}

const CONTENT_PATH = "src/data/content.ts";
const SITE_URL = "https://www.scale-z.ch";

class GitHubError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

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

function b64ToUtf8(b64: string): string {
  const bin = atob(b64.replace(/\s/g, ""));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

function utf8ToB64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  for (const byte of bytes) bin += String.fromCharCode(byte);
  return btoa(bin);
}

async function ghRequest(env: Env, method: string, path: string, body?: unknown) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
      accept: "application/vnd.github+json",
      "user-agent": "scalez-admin",
      "x-github-api-version": "2022-11-28",
      ...(body ? { "content-type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    let message = `${res.status} ${res.statusText}`;
    try {
      const data = (await res.json()) as { message?: string };
      if (data.message) message = data.message;
    } catch {
      // Antwort war kein JSON — Statuszeile reicht
    }
    throw new GitHubError(res.status, message);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

function githubErrorMessage(error: GitHubError): { status: number; message: string } {
  switch (error.status) {
    case 401:
      return { status: 502, message: "GitHub-Token ungültig oder abgelaufen." };
    case 403:
      return { status: 502, message: "GitHub-Token ohne Schreibberechtigung (Contents: Read and write nötig)." };
    case 404:
      return { status: 502, message: "Repo oder Datei nicht gefunden — GitHub-Zugriff prüfen." };
    case 409:
      return { status: 409, message: "content.ts wurde gerade parallel geändert — bitte erneut versuchen." };
    default:
      return { status: 502, message: `GitHub-Fehler: ${error.message}` };
  }
}

type PublishAction = "create" | "update" | "delete";
type PublishKind = "job" | "blog";

interface PublishBody {
  kind?: unknown;
  action?: unknown;
  slug?: unknown;
  title?: unknown;
  entry?: unknown;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.GITHUB_TOKEN) {
    return jsonResponse({ error: "Veröffentlichen ist nicht konfiguriert (GITHUB_TOKEN fehlt)." }, 500);
  }

  let body: PublishBody;
  try {
    body = (await request.json()) as PublishBody;
  } catch {
    return jsonResponse({ error: "Ungültige Anfrage." }, 400);
  }

  const kind = body.kind as PublishKind;
  const action = body.action as PublishAction;
  if (kind !== "job" && kind !== "blog") return jsonResponse({ error: "Unbekannter Inhaltstyp." }, 400);
  if (action !== "create" && action !== "update" && action !== "delete") {
    return jsonResponse({ error: "Unbekannte Aktion." }, 400);
  }

  const arrayName: ArrayName = kind === "job" ? "jobPostings" : "blogPosts";
  const noun = kind === "job" ? "Stelle" : "Blogartikel";

  let entry: { slug: string; title: string } | null = null;
  let block = "";
  let anchorSlug: string;
  let title: string;

  try {
    if (action === "delete") {
      const slug = typeof body.slug === "string" ? body.slug : "";
      if (!SLUG_PATTERN.test(slug)) return jsonResponse({ error: "Ungültiger Slug." }, 400);
      anchorSlug = slug;
      title = typeof body.title === "string" && body.title.trim() ? body.title.trim() : slug;
    } else {
      const validated = kind === "job" ? validateJobEntry(body.entry) : validateBlogEntry(body.entry);
      entry = validated;
      block = kind === "job"
        ? buildJobBlock(validated as ReturnType<typeof validateJobEntry>)
        : buildBlogBlock(validated as ReturnType<typeof validateBlogEntry>);
      title = validated.title;
      if (action === "create") {
        anchorSlug = validated.slug;
      } else {
        const slug = typeof body.slug === "string" ? body.slug : "";
        if (!SLUG_PATTERN.test(slug)) return jsonResponse({ error: "Ungültiger Slug." }, 400);
        anchorSlug = slug;
      }
    }
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Validierung fehlgeschlagen." }, 400);
  }

  const repo = env.GITHUB_REPO || "modern99/scalez-website";
  const branch = env.GITHUB_BRANCH || "main";
  const filePath = `/repos/${repo}/contents/${CONTENT_PATH}`;

  try {
    const file = await ghRequest(env, "GET", `${filePath}?ref=${branch}`);
    const content = b64ToUtf8(String(file.content));

    let updated: string;
    if (action === "create") {
      if (hasSlugAnywhere(content, anchorSlug)) {
        return jsonResponse({ error: `Slug «${anchorSlug}» existiert bereits.` }, 409);
      }
      updated = insertEntry(content, kind, block);
    } else if (action === "update") {
      if (entry && entry.slug !== anchorSlug && hasSlugAnywhere(content, entry.slug)) {
        return jsonResponse({ error: `Slug «${entry.slug}» existiert bereits.` }, 409);
      }
      updated = replaceEntry(content, arrayName, anchorSlug, block);
    } else {
      updated = deleteEntry(content, arrayName, anchorSlug);
    }

    const messages: Record<PublishAction, string> = {
      create: kind === "job" ? `content: neue Stelle «${title}»` : `content: neuer Blogartikel «${title}»`,
      update: `content: ${noun} aktualisiert «${title}»`,
      delete: `content: ${noun} entfernt «${title}»`,
    };

    const result = await ghRequest(env, "PUT", filePath, {
      message: messages[action],
      content: utf8ToB64(updated),
      sha: String(file.sha),
      branch,
    });

    const commit = result.commit as { html_url?: string } | undefined;
    const liveSlug = entry ? entry.slug : anchorSlug;
    return jsonResponse(
      {
        ok: true,
        commitUrl: commit?.html_url ?? null,
        liveUrl: action === "delete" ? null : `${SITE_URL}/${kind === "job" ? "jobs" : "blog"}/${liveSlug}`,
      },
      200,
    );
  } catch (error) {
    if (error instanceof GitHubError) {
      const mapped = githubErrorMessage(error);
      return jsonResponse({ error: mapped.message }, mapped.status);
    }
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Veröffentlichen fehlgeschlagen." },
      500,
    );
  }
};
