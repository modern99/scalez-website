export const SUBMISSION_TYPES = ["contact", "company", "candidate"] as const;

export type SubmissionType = (typeof SUBMISSION_TYPES)[number];

export const MAX_TOTAL_ATTACHMENT_BYTES = 10 * 1024 * 1024;
export const MAX_ATTACHMENT_COUNT = 5;

export const ALLOWED_ATTACHMENT_EXTENSIONS = [".pdf", ".doc", ".docx", ".txt", ".rtf"] as const;

export const ALLOWED_ATTACHMENT_MIME_TYPES = [
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "text/rtf",
] as const;

export function isSubmissionType(value: string): value is SubmissionType {
  return (SUBMISSION_TYPES as readonly string[]).includes(value);
}
