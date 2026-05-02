import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  hasMarketingConsent,
  hasStatisticsConsent,
  readCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

const GA_SCRIPT_ID = "scalez-ga4-script";
const LINKEDIN_SCRIPT_ID = "scalez-linkedin-script";

function getTrimmedEnvValue(value: string | undefined): string | null {
  const trimmedValue = value?.trim();
  return trimmedValue ? trimmedValue : null;
}

function getPageLocation(location: ReturnType<typeof useLocation>) {
  const search = location.search ?? "";
  const hash = location.hash ?? "";

  return `${window.location.origin}${location.pathname}${search}${hash}`;
}

function injectScriptOnce(id: string, src: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

// Always call on mount so Consent Mode v2 can model data for users who deny consent
function initGoogleAnalytics(measurementId: string) {
  if (typeof window.gtag === "function") {
    return;
  }
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  // Consent Mode v2: defaults denied before `js` command (required for EEA/DMA)
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  injectScriptOnce(
    GA_SCRIPT_ID,
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`,
  );
}

function ensureLinkedInInsight(partnerId: string) {
  const partnerIds = (window._linkedin_data_partner_ids = window._linkedin_data_partner_ids ?? []);

  if (!partnerIds.includes(partnerId)) {
    partnerIds.push(partnerId);
  }

  if (typeof window.lintrk !== "function") {
    const queue: unknown[][] = [];
    const lintrk = (...args: unknown[]) => {
      queue.push(args);
    };

    lintrk.q = queue;
    window.lintrk = lintrk;
  }

  injectScriptOnce(LINKEDIN_SCRIPT_ID, "https://snap.licdn.com/li.lms-analytics/insight.min.js");
}

export default function TrackingScripts() {
  const location = useLocation();
  const [consent, setConsent] = useState<CookieConsent | null>(() => readCookieConsent());
  const gaMeasurementId = getTrimmedEnvValue(import.meta.env.VITE_GA_MEASUREMENT_ID);
  const linkedinPartnerId = getTrimmedEnvValue(import.meta.env.VITE_LINKEDIN_PARTNER_ID);
  const statisticsAllowed = hasStatisticsConsent(consent);
  const marketingAllowed = hasMarketingConsent(consent);

  useEffect(() => {
    const syncConsent = () => {
      setConsent(readCookieConsent());
    };

    const handleConsentChange = () => {
      syncConsent();
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === COOKIE_CONSENT_KEY) {
        syncConsent();
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange as EventListener);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange as EventListener);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // Always initialize on mount — script loads with denied defaults for Consent Mode v2
  useEffect(() => {
    if (gaMeasurementId) {
      initGoogleAnalytics(gaMeasurementId);
    }
  }, [gaMeasurementId]);

  // Update consent grants whenever the user's choice changes
  useEffect(() => {
    if (!gaMeasurementId || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("consent", "update", {
      analytics_storage: statisticsAllowed ? "granted" : "denied",
      ad_storage: marketingAllowed ? "granted" : "denied",
      ad_user_data: marketingAllowed ? "granted" : "denied",
      ad_personalization: marketingAllowed ? "granted" : "denied",
    });

    if (marketingAllowed && linkedinPartnerId) {
      ensureLinkedInInsight(linkedinPartnerId);
    }
  }, [gaMeasurementId, linkedinPartnerId, marketingAllowed, statisticsAllowed]);

  useEffect(() => {
    if (!statisticsAllowed || !gaMeasurementId || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      page_location: getPageLocation(location),
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_title: document.title,
    });
  }, [gaMeasurementId, location, statisticsAllowed]);

  return null;
}
