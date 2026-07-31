import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildBlogBlock,
  buildJobBlock,
  deleteEntry,
  hasSlugAnywhere,
  hasSlugIn,
  insertEntry,
  replaceEntry,
  validateBlogEntry,
  validateJobEntry,
  type BlogEntry,
  type JobEntry,
} from "./contentSurgery";

// Chirurgie-Tests laufen gegen die echte content.ts, damit Anker-Annahmen
// (Einrückung, "= [", "\n];") mit der realen Datei übereinstimmen.
const realContent = readFileSync(path.resolve(__dirname, "../data/content.ts"), "utf8");

const jobEntry: JobEntry = {
  slug: "test-stelle-bern",
  title: 'Test "Stelle" (m/w/d)',
  region: "Kanton Bern",
  employmentType: "Festanstellung, 80–100%",
  focus: "Tiefbau · Bern",
  teaser: "Teaser mit «Umlauten» äöü\nund Zeilenumbruch.",
  compensation: "CHF 90'000 – 115'000 / Jahr",
  startDate: "Ab sofort",
  tasks: ["A1", "A2", "A3"],
  requirements: ["R1", "R2", "R3"],
  benefits: ["B1"],
  closingNote: ["C1", "C2"],
  note: "Diskrete Besetzung · Alle Angaben vertraulich",
  datePosted: "2026-07-31",
  validThrough: "2026-10-31",
  addressLocality: "Bern",
  addressRegion: "BE",
};

const blogEntry: BlogEntry = {
  slug: "test-artikel",
  title: "Test-Artikel",
  category: "Markt",
  readTime: "5 Min.",
  publishedAt: "31. Juli 2026",
  teaser: "Teaser.",
  intro: "Intro.",
  sections: [
    { id: "abschnitt-eins", title: "Abschnitt eins", paragraphs: ["P1", "P2"] },
    { id: "abschnitt-zwei", title: "Abschnitt zwei", paragraphs: ["P3"] },
  ],
};

function evalBlock(block: string): Record<string, unknown> {
  // Der Block muss ein gültiges Objektliteral sein (wie in content.ts)
  return new Function(`return [${block}][0];`)() as Record<string, unknown>;
}

describe("Block-Builder", () => {
  it("baut einen evaluierbaren Job-Block mit korrektem Escaping", () => {
    const parsed = evalBlock(buildJobBlock(jobEntry));
    expect(parsed.slug).toBe("test-stelle-bern");
    expect(parsed.title).toBe('Test "Stelle" (m/w/d)');
    expect(parsed.teaser).toBe("Teaser mit «Umlauten» äöü und Zeilenumbruch.");
    expect(parsed.tasks).toEqual(["A1", "A2", "A3"]);
    expect(parsed.validThrough).toBe("2026-10-31");
  });

  it("lässt leere optionale Felder weg", () => {
    const minimal = { ...jobEntry };
    delete minimal.benefits;
    delete minimal.closingNote;
    delete minimal.validThrough;
    const block = buildJobBlock(minimal);
    expect(block).not.toContain("benefits");
    expect(block).not.toContain("closingNote");
    expect(block).not.toContain("validThrough");
  });

  it("baut einen evaluierbaren Blog-Block mit Sections", () => {
    const parsed = evalBlock(buildBlogBlock(blogEntry)) as { sections: Array<{ paragraphs: string[] }> };
    expect(parsed.sections).toHaveLength(2);
    expect(parsed.sections[0].paragraphs).toEqual(["P1", "P2"]);
  });
});

describe("Validierung", () => {
  it("akzeptiert gültige Einträge", () => {
    expect(validateJobEntry({ ...jobEntry })).toMatchObject({ slug: "test-stelle-bern" });
    expect(validateBlogEntry({ ...blogEntry })).toMatchObject({ slug: "test-artikel" });
  });

  it("lehnt ungültige Slugs, Daten und leere Pflichtfelder ab", () => {
    expect(() => validateJobEntry({ ...jobEntry, slug: "Böser Slug!" })).toThrow(/Slug/);
    expect(() => validateJobEntry({ ...jobEntry, datePosted: "31.07.2026" })).toThrow(/ISO-Datum/);
    expect(() => validateJobEntry({ ...jobEntry, title: "  " })).toThrow(/Titel/);
    expect(() => validateJobEntry({ ...jobEntry, validThrough: "2026-07-01" })).toThrow(/Bewerbungsfrist/);
    expect(() => validateBlogEntry({ ...blogEntry, category: "Unsinn" })).toThrow(/Kategorie/);
    expect(() => validateBlogEntry({ ...blogEntry, sections: [] })).toThrow(/Abschnitt/);
  });
});

describe("Chirurgie an der echten content.ts", () => {
  it("fügt einen Job am Array-Ende ein", () => {
    const updated = insertEntry(realContent, "job", buildJobBlock(jobEntry));
    const lastExisting = updated.indexOf('slug: "verkaufsingenieur-hlk-gebaeudeautomation-zuerich"');
    const inserted = updated.indexOf('slug: "test-stelle-bern"');
    expect(inserted).toBeGreaterThan(lastExisting);
    expect(hasSlugIn(updated, "jobPostings", "test-stelle-bern")).toBe(true);
    expect(hasSlugIn(updated, "blogPosts", "test-stelle-bern")).toBe(false);
  });

  it("fügt einen Blogartikel am Array-Anfang ein (Typ-Annotation bleibt intakt)", () => {
    const updated = insertEntry(realContent, "blog", buildBlogBlock(blogEntry));
    const inserted = updated.indexOf('slug: "test-artikel"');
    const firstExisting = updated.indexOf('slug: "12-jahre-erfahrung-aber-nicht-ueber-29"');
    expect(inserted).toBeGreaterThan(-1);
    expect(inserted).toBeLessThan(firstExisting);
    expect(updated).toContain("BlogPost[] = [");
  });

  it("ersetzt einen bestehenden Job in-place", () => {
    const changed = { ...jobEntry, slug: "bauingenieur-infrastruktur-bern", title: "Geänderter Titel (m/w/d)" };
    const updated = replaceEntry(realContent, "jobPostings", "bauingenieur-infrastruktur-bern", buildJobBlock(changed));
    expect(updated).toContain("Geänderter Titel (m/w/d)");
    // Der alte Eintrag ist ersetzt, nicht dupliziert
    expect(updated.match(/slug: "bauingenieur-infrastruktur-bern"/g)).toHaveLength(1);
    // Nachbar-Einträge unversehrt
    expect(hasSlugIn(updated, "jobPostings", "bauingenieur-verkehrsplanung-tiefbau-bern")).toBe(true);
  });

  it("löscht genau einen Eintrag, Nachbarn bleiben unversehrt", () => {
    const updated = deleteEntry(realContent, "jobPostings", "service-elektroinstallateur-efz-kriens");
    expect(hasSlugAnywhere(updated, "service-elektroinstallateur-efz-kriens")).toBe(false);
    expect(hasSlugIn(updated, "jobPostings", "projektleiter-siedlungswasserwirtschaft-werkleitungen")).toBe(true);
    expect(hasSlugIn(updated, "jobPostings", "projektleiter-projektingenieur-infrastruktur-strassen-kunstbauten-zuerich")).toBe(true);
    // Struktur weiterhin chirurgiefähig
    expect(() => deleteEntry(updated, "jobPostings", "bauingenieur-infrastruktur-bern")).not.toThrow();
  });

  it("löscht einen Blogartikel mit verschachtelten Sections sauber", () => {
    const updated = deleteEntry(realContent, "blogPosts", "es-hat-gematcht");
    expect(hasSlugAnywhere(updated, "es-hat-gematcht")).toBe(false);
    expect(hasSlugIn(updated, "blogPosts", "12-jahre-erfahrung-aber-nicht-ueber-29")).toBe(true);
    expect(hasSlugIn(updated, "blogPosts", "lohnjahr-2025-baugewerbe-realitaetscheck")).toBe(true);
  });

  it("wirft bei unbekanntem Slug", () => {
    expect(() => deleteEntry(realContent, "jobPostings", "gibt-es-nicht")).toThrow(/nicht gefunden/);
    expect(() => replaceEntry(realContent, "blogPosts", "gibt-es-nicht", buildBlogBlock(blogEntry))).toThrow(/nicht gefunden/);
  });

  it("Roundtrip: einfügen + ersetzen + löschen ergibt wieder die Ausgangsdatei", () => {
    const block = buildJobBlock(jobEntry);
    const inserted = insertEntry(realContent, "job", block);
    const replaced = replaceEntry(inserted, "jobPostings", "test-stelle-bern", block);
    expect(replaced).toBe(inserted);
    const deleted = deleteEntry(inserted, "jobPostings", "test-stelle-bern");
    expect(deleted).toBe(realContent);
  });
});
