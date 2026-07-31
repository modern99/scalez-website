// Serverseitige Bearbeitung von src/data/content.ts für den Admin-Bereich:
// validiert Einträge, baut daraus TS-Objektblöcke im Stil der bestehenden Datei
// und fügt sie per String-Chirurgie ein bzw. ersetzt/entfernt ganze Einträge.
// Bewusst ohne React und ohne "@/"-Alias (wird von functions/ und Tests geladen).

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const BLOG_CATEGORIES = new Set(["Direct Search", "Prozess", "Markt"]);
const MAX_STRING = 4000;
const MAX_LIST_ITEMS = 20;

export interface JobEntry {
  slug: string;
  title: string;
  region: string;
  employmentType: string;
  focus: string;
  teaser: string;
  compensation: string;
  startDate: string;
  tasks: string[];
  requirements: string[];
  benefits?: string[];
  closingNote?: string[];
  note: string;
  datePosted: string;
  validThrough?: string;
  addressLocality?: string;
  addressRegion?: string;
}

export interface BlogSectionEntry {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface BlogEntry {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  teaser: string;
  intro: string;
  sections: BlogSectionEntry[];
}

/* ---------- Validierung ---------- */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function reqString(obj: Record<string, unknown>, key: string, label: string): string {
  const value = obj[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Feld «${label}» fehlt oder ist leer.`);
  }
  if (value.length > MAX_STRING) {
    throw new Error(`Feld «${label}» ist zu lang.`);
  }
  return value.trim();
}

function optString(obj: Record<string, unknown>, key: string, label: string): string | undefined {
  const value = obj[key];
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") throw new Error(`Feld «${label}» ist ungültig.`);
  if (value.length > MAX_STRING) throw new Error(`Feld «${label}» ist zu lang.`);
  return value.trim() || undefined;
}

function stringArray(
  obj: Record<string, unknown>,
  key: string,
  label: string,
  minItems: number,
): string[] {
  const value = obj[key] ?? [];
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`Feld «${label}» ist ungültig.`);
  }
  const items = (value as string[]).map((item) => item.trim()).filter(Boolean);
  if (items.length < minItems) {
    throw new Error(`Feld «${label}» braucht mindestens ${minItems} Einträge.`);
  }
  if (items.length > MAX_LIST_ITEMS || items.some((item) => item.length > MAX_STRING)) {
    throw new Error(`Feld «${label}» ist zu lang.`);
  }
  return items;
}

function reqSlugValue(obj: Record<string, unknown>, key: string, label: string): string {
  const slug = reqString(obj, key, label);
  if (!SLUG_PATTERN.test(slug)) {
    throw new Error(`«${label}» darf nur Kleinbuchstaben, Ziffern und Bindestriche enthalten.`);
  }
  return slug;
}

function reqIsoDate(obj: Record<string, unknown>, key: string, label: string): string {
  const value = reqString(obj, key, label);
  if (!ISO_DATE_PATTERN.test(value) || Number.isNaN(new Date(value).getTime())) {
    throw new Error(`«${label}» muss ein ISO-Datum (YYYY-MM-DD) sein.`);
  }
  return value;
}

export function validateJobEntry(raw: unknown): JobEntry {
  if (!isRecord(raw)) throw new Error("Ungültiger Stellen-Eintrag.");
  const entry: JobEntry = {
    slug: reqSlugValue(raw, "slug", "Slug"),
    title: reqString(raw, "title", "Titel"),
    region: reqString(raw, "region", "Region"),
    employmentType: reqString(raw, "employmentType", "Pensum"),
    focus: reqString(raw, "focus", "Fokus"),
    teaser: reqString(raw, "teaser", "Teaser"),
    compensation: reqString(raw, "compensation", "Vergütung"),
    startDate: reqString(raw, "startDate", "Stellenantritt"),
    tasks: stringArray(raw, "tasks", "Aufgaben", 1),
    requirements: stringArray(raw, "requirements", "Anforderungen", 1),
    note: reqString(raw, "note", "Hinweiszeile"),
    datePosted: reqIsoDate(raw, "datePosted", "Publikationsdatum"),
  };
  const benefits = stringArray(raw, "benefits", "Benefits", 0);
  if (benefits.length) entry.benefits = benefits;
  const closingNote = stringArray(raw, "closingNote", "Abschlusstext", 0);
  if (closingNote.length) entry.closingNote = closingNote;
  const validThrough = optString(raw, "validThrough", "Bewerbungsfrist");
  if (validThrough) {
    entry.validThrough = reqIsoDate({ validThrough }, "validThrough", "Bewerbungsfrist");
    if (entry.validThrough <= entry.datePosted) {
      throw new Error("Die Bewerbungsfrist muss nach dem Publikationsdatum liegen.");
    }
  }
  const addressLocality = optString(raw, "addressLocality", "Arbeitsort");
  if (addressLocality) entry.addressLocality = addressLocality;
  const addressRegion = optString(raw, "addressRegion", "Kanton");
  if (addressRegion) {
    if (!/^[A-Z]{2}$/.test(addressRegion)) throw new Error("«Kanton» muss ein Kürzel wie ZH sein.");
    entry.addressRegion = addressRegion;
  }
  return entry;
}

export function validateBlogEntry(raw: unknown): BlogEntry {
  if (!isRecord(raw)) throw new Error("Ungültiger Blog-Eintrag.");
  const category = reqString(raw, "category", "Kategorie");
  if (!BLOG_CATEGORIES.has(category)) throw new Error("Unbekannte Kategorie.");
  const sectionsRaw = raw.sections;
  if (!Array.isArray(sectionsRaw) || sectionsRaw.length === 0) {
    throw new Error("Mindestens ein Abschnitt ist nötig.");
  }
  if (sectionsRaw.length > MAX_LIST_ITEMS) throw new Error("Zu viele Abschnitte.");
  const sections = sectionsRaw.map((sec, index): BlogSectionEntry => {
    if (!isRecord(sec)) throw new Error(`Abschnitt ${index + 1} ist ungültig.`);
    return {
      id: reqSlugValue(sec, "id", `Anker-ID von Abschnitt ${index + 1}`),
      title: reqString(sec, "title", `Zwischentitel von Abschnitt ${index + 1}`),
      paragraphs: stringArray(sec, "paragraphs", `Absätze von Abschnitt ${index + 1}`, 1),
    };
  });
  return {
    slug: reqSlugValue(raw, "slug", "Slug"),
    title: reqString(raw, "title", "Titel"),
    category,
    readTime: reqString(raw, "readTime", "Lesezeit"),
    publishedAt: reqString(raw, "publishedAt", "Publikationsdatum"),
    teaser: reqString(raw, "teaser", "Teaser"),
    intro: reqString(raw, "intro", "Einleitung"),
    sections,
  };
}

/* ---------- Block-Builder (Stil von src/data/content.ts) ---------- */

function tsEscape(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\s*\n\s*/g, " ")
    .trim();
}

const P = "    ";

function arrayLines(name: string, items: string[]): string[] {
  return [`${P}${name}: [`, ...items.map((item) => `${P}  "${tsEscape(item)}",`), `${P}],`];
}

export function buildJobBlock(job: JobEntry): string {
  const lines: string[] = ["  {"];
  lines.push(`${P}slug: "${tsEscape(job.slug)}",`);
  lines.push(`${P}title: "${tsEscape(job.title)}",`);
  lines.push(`${P}region: "${tsEscape(job.region)}",`);
  lines.push(`${P}employmentType: "${tsEscape(job.employmentType)}",`);
  lines.push(`${P}focus: "${tsEscape(job.focus)}",`);
  lines.push(`${P}teaser:`);
  lines.push(`${P}  "${tsEscape(job.teaser)}",`);
  lines.push(`${P}compensation: "${tsEscape(job.compensation)}",`);
  lines.push(`${P}startDate: "${tsEscape(job.startDate)}",`);
  lines.push(...arrayLines("tasks", job.tasks));
  lines.push(...arrayLines("requirements", job.requirements));
  if (job.benefits?.length) lines.push(...arrayLines("benefits", job.benefits));
  if (job.closingNote?.length) lines.push(...arrayLines("closingNote", job.closingNote));
  lines.push(`${P}note: "${tsEscape(job.note)}",`);
  lines.push(`${P}datePosted: "${job.datePosted}",`);
  if (job.validThrough) lines.push(`${P}validThrough: "${job.validThrough}",`);
  if (job.addressLocality) lines.push(`${P}addressLocality: "${tsEscape(job.addressLocality)}",`);
  if (job.addressRegion) lines.push(`${P}addressRegion: "${job.addressRegion}",`);
  lines.push("  },");
  return lines.join("\n");
}

export function buildBlogBlock(post: BlogEntry): string {
  const lines: string[] = ["  {"];
  lines.push(`${P}slug: "${tsEscape(post.slug)}",`);
  lines.push(`${P}title: "${tsEscape(post.title)}",`);
  lines.push(`${P}category: "${tsEscape(post.category)}",`);
  lines.push(`${P}readTime: "${tsEscape(post.readTime)}",`);
  lines.push(`${P}publishedAt: "${tsEscape(post.publishedAt)}",`);
  lines.push(`${P}teaser:`);
  lines.push(`${P}  "${tsEscape(post.teaser)}",`);
  lines.push(`${P}intro:`);
  lines.push(`${P}  "${tsEscape(post.intro)}",`);
  lines.push(`${P}sections: [`);
  for (const section of post.sections) {
    lines.push(`${P}  {`);
    lines.push(`${P}    id: "${tsEscape(section.id)}",`);
    lines.push(`${P}    title: "${tsEscape(section.title)}",`);
    lines.push(`${P}    paragraphs: [`);
    for (const paragraph of section.paragraphs) {
      lines.push(`${P}      "${tsEscape(paragraph)}",`);
    }
    lines.push(`${P}    ],`);
    lines.push(`${P}  },`);
  }
  lines.push(`${P}],`);
  lines.push("  },");
  return lines.join("\n");
}

/* ---------- String-Chirurgie an content.ts ---------- */

export type ArrayName = "jobPostings" | "blogPosts";

interface ArrayBounds {
  /** Index direkt nach "= [" der Array-Deklaration */
  open: number;
  /** Index des schliessenden "\n];" */
  close: number;
}

function arrayBounds(content: string, arrayName: ArrayName): ArrayBounds {
  const decl = content.indexOf(`export const ${arrayName}`);
  if (decl === -1) throw new Error(`Array «${arrayName}» nicht gefunden.`);
  const eq = content.indexOf("= [", decl);
  const close = content.indexOf("\n];", decl);
  if (eq === -1 || close === -1 || eq > close) {
    throw new Error(`Array «${arrayName}» hat eine unerwartete Struktur.`);
  }
  return { open: eq + 3, close };
}

export function hasSlugIn(content: string, arrayName: ArrayName, slug: string): boolean {
  const bounds = arrayBounds(content, arrayName);
  const idx = content.indexOf(`slug: "${slug}"`, bounds.open);
  return idx !== -1 && idx < bounds.close;
}

export function hasSlugAnywhere(content: string, slug: string): boolean {
  return content.includes(`slug: "${slug}"`);
}

// Ein Eintrag beginnt mit "\n  {" und endet mit "\n  }," (2 Spaces Einzug).
// Tiefer verschachtelte Objekte (Blog-Sections) sind stärker eingerückt und
// matchen diese Anker deshalb nicht.
function entryRange(content: string, arrayName: ArrayName, slug: string): { from: number; to: number } {
  const bounds = arrayBounds(content, arrayName);
  const slugIdx = content.indexOf(`slug: "${slug}"`, bounds.open);
  if (slugIdx === -1 || slugIdx > bounds.close) {
    throw new Error(`Eintrag mit Slug «${slug}» nicht gefunden.`);
  }
  const from = content.lastIndexOf("\n  {", slugIdx);
  const closeIdx = content.indexOf("\n  },", slugIdx);
  if (from === -1 || from < bounds.open - 1 || closeIdx === -1 || closeIdx > bounds.close) {
    throw new Error(`Eintrag «${slug}» hat eine unerwartete Struktur.`);
  }
  return { from, to: closeIdx + "\n  },".length };
}

/** Neue Stelle ans Array-Ende, neuer Blogartikel an den Array-Anfang. */
export function insertEntry(content: string, kind: "job" | "blog", block: string): string {
  if (kind === "job") {
    const bounds = arrayBounds(content, "jobPostings");
    return content.slice(0, bounds.close) + "\n" + block + content.slice(bounds.close);
  }
  const bounds = arrayBounds(content, "blogPosts");
  return content.slice(0, bounds.open) + "\n" + block + content.slice(bounds.open);
}

export function replaceEntry(content: string, arrayName: ArrayName, slug: string, block: string): string {
  const range = entryRange(content, arrayName, slug);
  return content.slice(0, range.from) + "\n" + block + content.slice(range.to);
}

export function deleteEntry(content: string, arrayName: ArrayName, slug: string): string {
  const range = entryRange(content, arrayName, slug);
  return content.slice(0, range.from) + content.slice(range.to);
}
