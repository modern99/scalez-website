import { describe, expect, it } from "vitest";
import {
  ALLOWED_ATTACHMENT_EXTENSIONS,
  MAX_ATTACHMENT_COUNT,
  MAX_TOTAL_ATTACHMENT_BYTES,
  isSubmissionType,
} from "@/lib/contact-contract";

describe("contact contract", () => {
  it("accepts the known submission types", () => {
    expect(isSubmissionType("contact")).toBe(true);
    expect(isSubmissionType("company")).toBe(true);
    expect(isSubmissionType("candidate")).toBe(true);
    expect(isSubmissionType("unknown")).toBe(false);
  });

  it("keeps shared upload constraints stable", () => {
    expect(MAX_ATTACHMENT_COUNT).toBe(5);
    expect(MAX_TOTAL_ATTACHMENT_BYTES).toBe(10 * 1024 * 1024);
    expect(ALLOWED_ATTACHMENT_EXTENSIONS).toEqual([".pdf", ".doc", ".docx", ".txt", ".rtf"]);
  });
});
