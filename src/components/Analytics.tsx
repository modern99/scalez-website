import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { COOKIE_CONSENT_EVENT, readCookieConsent, type CookieConsent } from "@/lib/cookie-consent";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const LI_PARTNER_ID = import.meta.env.VITE_LINKEDIN_PARTNER_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    _linkedin_partner_id: string;
    lintrk: ((action: string, data?: Record<string, unknown>) => void) & { q?: unknown[][] };
  }
}

function loadGA(id: string) {
  if (document.getElementById("ga4-script")) return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function (...args) { window.dataLayer.push(args); };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
  const s = document.createElement("script");
  s.id = "ga4-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
}

function loadLinkedIn(partnerId: string) {
  if (document.getElementById("li-script")) return;
  window._linkedin_partner_id = partnerId;
  window.lintrk = function (action, data) {
    (window.lintrk.q = window.lintrk.q ?? []).push([action, data]);
  };
  const s = document.createElement("script");
  s.id = "li-script";
  s.async = true;
  s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  document.head.appendChild(s);
}

export default function Analytics() {
  const location = useLocation();
  const gaReady = useRef(false);

  useEffect(() => {
    function apply(consent: CookieConsent) {
      const path = window.location.pathname + window.location.search;

      if (consent.statistics && GA_ID && !gaReady.current) {
        loadGA(GA_ID);
        gaReady.current = true;
        window.gtag("event", "page_view", { page_path: path });
      }

      if (!consent.statistics && gaReady.current) {
        window.gtag?.("consent", "update", { analytics_storage: "denied" });
      }

      if (consent.marketing && LI_PARTNER_ID) {
        loadLinkedIn(LI_PARTNER_ID);
      }
    }

    const existing = readCookieConsent();
    if (existing) apply(existing);

    const handler = (e: Event) => apply((e as CustomEvent<CookieConsent>).detail);
    window.addEventListener(COOKIE_CONSENT_EVENT, handler);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handler);
  }, []);

  // SPA page view tracking on navigation
  useEffect(() => {
    if (!gaReady.current || !GA_ID) return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}
