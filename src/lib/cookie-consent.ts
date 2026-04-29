export const COOKIE_CONSENT_KEY = "scalez-cookie-consent-v4";
export const COOKIE_CONSENT_EVENT = "scalez:cookie-consent-changed";
export const COOKIE_CONSENT_OPEN_EVENT = "scalez:open-cookie-settings";

export type CookieConsentCategories = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

export type CookieConsent = CookieConsentCategories & {
  savedAt: string;
};

function isCookieConsent(value: unknown): value is CookieConsent {
  if (!value || typeof value !== "object") {
    return false;
  }

  const consent = value as Partial<CookieConsent>;

  return (
    consent.necessary === true &&
    typeof consent.statistics === "boolean" &&
    typeof consent.marketing === "boolean" &&
    typeof consent.savedAt === "string"
  );
}

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);

    if (!isCookieConsent(parsedValue)) {
      window.localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
    return null;
  }
}

export function saveCookieConsent(
  categories: Omit<CookieConsentCategories, "necessary">,
): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    statistics: categories.statistics,
    marketing: categories.marketing,
    savedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent<CookieConsent>(COOKIE_CONSENT_EVENT, { detail: consent }));
  }

  return consent;
}

export function hasStatisticsConsent(consent: CookieConsent | null): boolean {
  return consent?.statistics === true;
}

export function hasMarketingConsent(consent: CookieConsent | null): boolean {
  return consent?.marketing === true;
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT));
  }
}
