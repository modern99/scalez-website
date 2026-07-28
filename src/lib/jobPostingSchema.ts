// Baut das schema.org-JobPosting-JSON-LD für Google for Jobs.
// Bewusst ohne React und ohne "@/"-Alias, damit sowohl die Seiten als auch
// das Build-Script (scripts/prerender.ts, via tsx) dieses Modul laden können.
import type { JobPosting } from "../data/content";

export const SITE_URL = "https://www.scale-z.ch";

export function jobUrl(slug: string): string {
  return `${SITE_URL}/jobs/${slug}`;
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// "Festanstellung, 80–100%" → ["FULL_TIME", "PART_TIME"]; kein Match → undefined
export function parseEmploymentTypes(employmentType: string): string[] | undefined {
  const types: string[] = [];

  const range = employmentType.match(/(\d{1,3})\s*[–—-]\s*(\d{1,3})\s*%/);
  const single = range ? null : employmentType.match(/(\d{1,3})\s*%/);
  if (range) {
    const min = Number(range[1]);
    const max = Number(range[2]);
    if (max >= 100) types.push("FULL_TIME");
    if (min < 100) types.push("PART_TIME");
  } else if (single) {
    types.push(Number(single[1]) >= 100 ? "FULL_TIME" : "PART_TIME");
  }

  if (/temporär|befristet/i.test(employmentType)) types.push("TEMPORARY");
  if (/praktikum/i.test(employmentType)) types.push("INTERN");

  return types.length > 0 ? types : undefined;
}

interface QuantitativeValue {
  "@type": "QuantitativeValue";
  value?: number;
  minValue?: number;
  maxValue?: number;
  unitText: string;
}

export interface MonetaryAmount {
  "@type": "MonetaryAmount";
  currency: "CHF";
  value: QuantitativeValue;
}

// "CHF 125'000 – 145'000 / Jahr" → MonetaryAmount; "Nach Vereinbarung" → undefined
export function parseBaseSalary(compensation: string): MonetaryAmount | undefined {
  if (!/^\s*CHF/i.test(compensation)) {
    return undefined;
  }

  const toNumber = (raw: string) => Number(raw.replace(/['’]/g, ""));

  const range = compensation.match(/CHF\s*([\d'’]+)\s*[–—-]\s*(?:CHF\s*)?([\d'’]+)/i);
  const single = range ? null : compensation.match(/CHF\s*([\d'’]+)/i);

  let value: Omit<QuantitativeValue, "unitText"> | undefined;
  if (range) {
    value = { "@type": "QuantitativeValue", minValue: toNumber(range[1]), maxValue: toNumber(range[2]) };
  } else if (single) {
    value = { "@type": "QuantitativeValue", value: toNumber(single[1]) };
  }
  if (!value) {
    return undefined;
  }

  let unitText: string | undefined;
  if (/\/\s*Jahr/i.test(compensation)) unitText = "YEAR";
  else if (/\/\s*Monat/i.test(compensation)) unitText = "MONTH";
  else if (/\/\s*Woche/i.test(compensation)) unitText = "WEEK";
  else if (/\/\s*Tag/i.test(compensation)) unitText = "DAY";
  else if (/\/\s*Stunde/i.test(compensation)) unitText = "HOUR";

  // Ohne explizite Einheit nur bei plausiblen Jahresbeträgen YEAR annehmen,
  // sonst lieber gar kein baseSalary ausgeben (falsche Einheit wäre ein Policy-Verstoss).
  if (!unitText) {
    const smallest = value.minValue ?? value.value ?? 0;
    if (smallest < 12000) {
      return undefined;
    }
    unitText = "YEAR";
  }

  return { "@type": "MonetaryAmount", currency: "CHF", value: { ...value, unitText } };
}

// Entspricht 1:1 dem sichtbaren Inhalt der Job-Detailseite (Google-Anforderung:
// Markup muss dem angezeigten Seiteninhalt entsprechen).
export function buildJobDescriptionHtml(job: JobPosting): string {
  const list = (items: string[]) =>
    `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

  const benefits = job.benefits && job.benefits.length > 0
    ? `<p><strong>Benefits</strong></p>${list(job.benefits)}`
    : "";

  return (
    `<p>${escapeHtml(job.teaser)}</p>` +
    `<p><strong>Aufgaben</strong></p>${list(job.tasks)}` +
    `<p><strong>Anforderungen</strong></p>${list(job.requirements)}` +
    benefits +
    `<p><strong>Pensum:</strong> ${escapeHtml(job.employmentType)}</p>` +
    `<p><strong>Vergütung:</strong> ${escapeHtml(job.compensation)}</p>` +
    `<p><strong>Stellenantritt:</strong> ${escapeHtml(job.startDate)}</p>`
  );
}

// null = abgelaufen (validThrough in der Vergangenheit) → kein Markup ausgeben
export function buildJobPostingJsonLd(
  job: JobPosting,
  now: Date = new Date(),
): Record<string, unknown> | null {
  if (job.validThrough && new Date(`${job.validThrough}T23:59:59`).getTime() < now.getTime()) {
    return null;
  }

  const address: Record<string, string> = { "@type": "PostalAddress" };
  if (job.addressLocality) address.addressLocality = job.addressLocality;
  if (job.addressRegion) address.addressRegion = job.addressRegion;
  address.addressCountry = job.addressCountry ?? "CH";

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: buildJobDescriptionHtml(job),
    datePosted: job.datePosted,
    hiringOrganization: { "@type": "Organization", name: "confidential" },
    jobLocation: { "@type": "Place", address },
    identifier: { "@type": "PropertyValue", name: "ScaleZ GmbH", value: job.slug },
    directApply: true,
    url: jobUrl(job.slug),
  };

  if (job.validThrough) {
    jsonLd.validThrough = job.validThrough;
  }

  const employmentType = parseEmploymentTypes(job.employmentType);
  if (employmentType) {
    jsonLd.employmentType = employmentType;
  }

  const baseSalary = parseBaseSalary(job.compensation);
  if (baseSalary) {
    jsonLd.baseSalary = baseSalary;
  }

  return jsonLd;
}
