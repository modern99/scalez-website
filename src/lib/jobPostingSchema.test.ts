import { describe, expect, it } from "vitest";
import { jobPostings, type JobPosting } from "@/data/content";
import {
  buildJobDescriptionHtml,
  buildJobPostingJsonLd,
  jobUrl,
  parseBaseSalary,
  parseEmploymentTypes,
} from "@/lib/jobPostingSchema";

const baseJob: JobPosting = {
  slug: "test-job-zuerich",
  title: "Testleiter (m/w/d)",
  region: "Kanton Zürich",
  employmentType: "Festanstellung, 100%",
  focus: "Test · Zürich",
  teaser: "Ein spannender Testjob mit <Verantwortung> & Perspektive.",
  compensation: "CHF 100'000 – 120'000 / Jahr",
  startDate: "Ab sofort",
  tasks: ["Aufgabe eins", "Aufgabe zwei"],
  requirements: ["Anforderung eins", "Anforderung zwei"],
  note: "Diskrete Besetzung · Alle Angaben vertraulich",
  datePosted: "2026-05-16",
  addressLocality: "Zürich",
  addressRegion: "ZH",
};

describe("parseBaseSalary", () => {
  it("parses a yearly range with en dash and apostrophes", () => {
    expect(parseBaseSalary("CHF 125'000 – 145'000 / Jahr")).toEqual({
      "@type": "MonetaryAmount",
      currency: "CHF",
      value: { "@type": "QuantitativeValue", minValue: 125000, maxValue: 145000, unitText: "YEAR" },
    });
  });

  it("parses a range with plain hyphen (template format)", () => {
    expect(parseBaseSalary("CHF 120'000 - 150'000 / Jahr")).toEqual({
      "@type": "MonetaryAmount",
      currency: "CHF",
      value: { "@type": "QuantitativeValue", minValue: 120000, maxValue: 150000, unitText: "YEAR" },
    });
  });

  it("parses a single monthly value", () => {
    expect(parseBaseSalary("CHF 8'500 / Monat")).toEqual({
      "@type": "MonetaryAmount",
      currency: "CHF",
      value: { "@type": "QuantitativeValue", value: 8500, unitText: "MONTH" },
    });
  });

  it("defaults to YEAR for a plausible yearly amount without unit", () => {
    expect(parseBaseSalary("CHF 140'000")).toEqual({
      "@type": "MonetaryAmount",
      currency: "CHF",
      value: { "@type": "QuantitativeValue", value: 140000, unitText: "YEAR" },
    });
  });

  it("omits salary when the amount without unit is implausible as a yearly wage", () => {
    expect(parseBaseSalary("CHF 45")).toBeUndefined();
  });

  it("returns undefined for 'Nach Vereinbarung' and free text", () => {
    expect(parseBaseSalary("Nach Vereinbarung")).toBeUndefined();
    expect(parseBaseSalary("attraktives Gehalt")).toBeUndefined();
  });
});

describe("parseEmploymentTypes", () => {
  it("maps 100% to FULL_TIME", () => {
    expect(parseEmploymentTypes("Festanstellung, 100%")).toEqual(["FULL_TIME"]);
  });

  it("maps 80–100% to FULL_TIME and PART_TIME", () => {
    expect(parseEmploymentTypes("Festanstellung, 80–100%")).toEqual(["FULL_TIME", "PART_TIME"]);
  });

  it("maps 60% to PART_TIME", () => {
    expect(parseEmploymentTypes("Festanstellung, 60%")).toEqual(["PART_TIME"]);
  });

  it("adds TEMPORARY for temporary positions", () => {
    expect(parseEmploymentTypes("Temporär, 100%")).toEqual(["FULL_TIME", "TEMPORARY"]);
  });

  it("returns undefined when nothing matches", () => {
    expect(parseEmploymentTypes("Freelance")).toBeUndefined();
  });
});

describe("buildJobDescriptionHtml", () => {
  it("contains all tasks and requirements as list items", () => {
    const html = buildJobDescriptionHtml(baseJob);
    for (const item of [...baseJob.tasks, ...baseJob.requirements]) {
      expect(html).toContain(`<li>${item}</li>`);
    }
    expect(html).toContain("<p><strong>Pensum:</strong> Festanstellung, 100%</p>");
    expect(html).toContain("<p><strong>Vergütung:</strong> CHF 100'000 – 120'000 / Jahr</p>");
    expect(html).toContain("<p><strong>Stellenantritt:</strong> Ab sofort</p>");
  });

  it("escapes HTML in the content", () => {
    const html = buildJobDescriptionHtml(baseJob);
    expect(html).toContain("Ein spannender Testjob mit &lt;Verantwortung&gt; &amp; Perspektive.");
    expect(html).not.toContain("<Verantwortung>");
  });

  it("is not equal to the title", () => {
    expect(buildJobDescriptionHtml(baseJob)).not.toBe(baseJob.title);
  });
});

describe("buildJobPostingJsonLd", () => {
  it("builds the full JSON-LD for a complete job posting", () => {
    expect(buildJobPostingJsonLd(baseJob)).toEqual({
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Testleiter (m/w/d)",
      description: buildJobDescriptionHtml(baseJob),
      datePosted: "2026-05-16",
      hiringOrganization: { "@type": "Organization", name: "confidential" },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Zürich",
          addressRegion: "ZH",
          addressCountry: "CH",
        },
      },
      employmentType: ["FULL_TIME"],
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "CHF",
        value: { "@type": "QuantitativeValue", minValue: 100000, maxValue: 120000, unitText: "YEAR" },
      },
      identifier: {
        "@type": "PropertyValue",
        name: "ScaleZ GmbH",
        value: "test-job-zuerich",
      },
      directApply: true,
      url: jobUrl("test-job-zuerich"),
    });
  });

  it("builds valid JSON-LD for every current job posting", () => {
    for (const job of jobPostings) {
      const jsonLd = buildJobPostingJsonLd(job);
      expect(jsonLd).not.toBeNull();
      expect(jsonLd?.title).toBe(job.title);
      expect(jsonLd?.url).toBe(jobUrl(job.slug));
      expect(jsonLd?.description).toBe(buildJobDescriptionHtml(job));
    }
  });

  it("defaults the country to CH and degrades to country-only without locality/region", () => {
    const job: JobPosting = { ...baseJob, addressLocality: undefined, addressRegion: undefined };
    const jsonLd = buildJobPostingJsonLd(job);
    expect(jsonLd?.jobLocation).toEqual({
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "CH" },
    });
  });

  it("uses an explicit country when set", () => {
    const job: JobPosting = { ...baseJob, addressCountry: "DE" };
    const jsonLd = buildJobPostingJsonLd(job) as { jobLocation: { address: { addressCountry: string } } };
    expect(jsonLd.jobLocation.address.addressCountry).toBe("DE");
  });

  it("returns null when validThrough is in the past", () => {
    const job: JobPosting = { ...baseJob, validThrough: "2026-01-01" };
    expect(buildJobPostingJsonLd(job, new Date("2026-06-01T12:00:00"))).toBeNull();
  });

  it("includes validThrough when it is in the future", () => {
    const job: JobPosting = { ...baseJob, validThrough: "2026-12-31" };
    const jsonLd = buildJobPostingJsonLd(job, new Date("2026-06-01T12:00:00"));
    expect(jsonLd?.validThrough).toBe("2026-12-31");
  });
});

describe("job postings data guard", () => {
  it("every job has a valid slug and ISO datePosted", () => {
    for (const job of jobPostings) {
      expect(job.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(job.datePosted).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(new Date(job.datePosted).getTime())).toBe(false);
      if (job.validThrough) {
        expect(job.validThrough).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it("slugs are unique", () => {
    const slugs = jobPostings.map((job) => job.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
