/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_LINKEDIN_PARTNER_ID?: string;
  readonly VITE_PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface LintrkFunction {
  (...args: unknown[]): void;
  q?: unknown[][];
}

interface Window {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  lintrk?: LintrkFunction;
  _linkedin_data_partner_ids?: string[];
}
