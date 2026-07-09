// Läuft nach `vite build` (siehe package.json): erzeugt pro Stellenanzeige eine
// statische HTML-Seite mit JobPosting-JSON-LD (Google for Jobs liest das Markup
// so ohne JavaScript-Rendering) und generiert die sitemap.xml aus den Inhalten.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts, jobPostings } from "../src/data/content";
import { SITE_URL, buildJobPostingJsonLd, escapeHtml, jobUrl } from "../src/lib/jobPostingSchema";

const MARKER_START = "<!-- seo:defaults:start -->";
const MARKER_END = "<!-- seo:defaults:end -->";
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

function fail(message: string): never {
  console.error(`[prerender] FEHLER: ${message}`);
  process.exit(1);
}

function isValidIsoDate(value: string): boolean {
  return ISO_DATE_PATTERN.test(value) && !Number.isNaN(new Date(value).getTime());
}

function validateJobs(): void {
  const seen = new Set<string>();
  for (const job of jobPostings) {
    if (!SLUG_PATTERN.test(job.slug)) {
      fail(`Ungültiger Slug "${job.slug}" (nur lowercase, Ziffern, Bindestriche).`);
    }
    if (seen.has(job.slug)) {
      fail(`Doppelter Slug "${job.slug}".`);
    }
    seen.add(job.slug);
    if (!isValidIsoDate(job.datePosted)) {
      fail(`Job "${job.slug}": datePosted "${job.datePosted}" ist kein gültiges ISO-Datum (YYYY-MM-DD).`);
    }
    if (job.validThrough && !isValidIsoDate(job.validThrough)) {
      fail(`Job "${job.slug}": validThrough "${job.validThrough}" ist kein gültiges ISO-Datum (YYYY-MM-DD).`);
    }
  }
}

function truncate(text: string, max = 155): string {
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}

function buildJobHead(job: (typeof jobPostings)[number]): string {
  const canonical = jobUrl(job.slug);
  const title = escapeHtml(`${job.title} | ScaleZ Jobs`);
  const description = escapeHtml(truncate(job.teaser));
  const ogImage = `${SITE_URL}/og-image.png`;

  const lines = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="de_CH" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:site_name" content="ScaleZ" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
  ];

  const jsonLd = buildJobPostingJsonLd(job);
  if (jsonLd) {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
    );
  }

  return lines.map((line) => `    ${line}`).join("\n");
}

function replaceSeoDefaults(template: string, replacement: string): string {
  const start = template.indexOf(MARKER_START);
  const end = template.indexOf(MARKER_END);
  return template.slice(0, start) + replacement.trimStart() + template.slice(end + MARKER_END.length);
}

function isExpired(job: (typeof jobPostings)[number]): boolean {
  return Boolean(
    job.validThrough && new Date(`${job.validThrough}T23:59:59`).getTime() < Date.now(),
  );
}

function buildSitemap(): string {
  // "/blog" fehlt bewusst: die Blog-Übersicht ist noindex, die Artikel nicht.
  const staticRoutes = [
    "/",
    "/unternehmen",
    "/kandidaten",
    "/jobs",
    "/ueber-uns",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const entries: string[] = [
    ...staticRoutes.map((route) => `  <url><loc>${SITE_URL}${route === "/" ? "/" : route}</loc></url>`),
    ...blogPosts.map((post) => `  <url><loc>${SITE_URL}/blog/${post.slug}</loc></url>`),
    ...jobPostings
      .filter((job) => !isExpired(job))
      .map((job) => `  <url><loc>${jobUrl(job.slug)}</loc><lastmod>${job.datePosted}</lastmod></url>`),
  ];

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries,
    `</urlset>`,
    ``,
  ].join("\n");
}

function main(): void {
  validateJobs();

  const templatePath = path.join(distDir, "index.html");
  const template = readFileSync(templatePath, "utf8");
  if (!template.includes(MARKER_START) || !template.includes(MARKER_END)) {
    fail(`SEO-Marker (${MARKER_START} / ${MARKER_END}) fehlen in dist/index.html.`);
  }

  mkdirSync(path.join(distDir, "jobs"), { recursive: true });
  for (const job of jobPostings) {
    const html = replaceSeoDefaults(template, buildJobHead(job));
    writeFileSync(path.join(distDir, "jobs", `${job.slug}.html`), html, "utf8");
  }

  const sitemap = buildSitemap();
  writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

  const urlCount = (sitemap.match(/<loc>/g) ?? []).length;
  console.log(
    `[prerender] ${jobPostings.length} Job-Seite(n) nach dist/jobs/ geschrieben, sitemap.xml mit ${urlCount} URLs generiert.`,
  );
}

main();
