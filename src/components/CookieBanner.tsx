import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  COOKIE_CONSENT_OPEN_EVENT,
  readCookieConsent,
  saveCookieConsent,
} from "@/lib/cookie-consent";

type CategoryDraft = {
  statistics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [isDetailed, setIsDetailed] = useState(false);
  const [draft, setDraft] = useState<CategoryDraft>({ statistics: false, marketing: false });

  useEffect(() => {
    const existing = readCookieConsent();

    if (existing) {
      setDraft({ statistics: existing.statistics, marketing: existing.marketing });
      setIsVisible(false);
    } else {
      setIsDetailed(false);
      setIsVisible(true);
    }

    const handleOpen = () => {
      const current = readCookieConsent();
      if (current) setDraft({ statistics: current.statistics, marketing: current.marketing });
      setIsDetailed(true);
      setIsVisible(true);
    };

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  // Scroll lock while initial banner is shown
  useEffect(() => {
    if (isVisible && !isDetailed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible, isDetailed]);

  const persist = (categories: CategoryDraft) => {
    saveCookieConsent(categories);
    setDraft(categories);
    setIsVisible(false);
  };

  // ── Initial centered modal (blocks scrolling) ─────────────────────
  const initialBanner = (
    <motion.div
      key="initial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[80] flex items-center justify-center px-4"
    >
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-sm border border-border bg-background p-8 shadow-[var(--card-shadow)]"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie-Hinweis"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Cookie-Hinweis
            </p>
            <h2 className="text-xl tracking-tight">Wir nutzen Cookies.</h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Für Statistik und Marketing setzen wir Cookies ein. Details in unserer{" "}
              <Link to="/datenschutz" className="font-medium text-accent hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="button"
              size="lg"
              className="w-full bg-foreground text-sm font-bold uppercase tracking-[0.15em] text-background hover:bg-accent hover:text-accent-foreground"
              onClick={() => persist({ statistics: true, marketing: true })}
            >
              Alle akzeptieren
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full border-border text-sm font-bold uppercase tracking-[0.15em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => persist({ statistics: false, marketing: false })}
            >
              Ablehnen
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // ── Detailed desktop banner (footer-triggered) ────────────────────
  const detailedDesktopBanner = (
    <motion.div
      key="detailed-desktop"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-2 left-5 right-5 z-[80] border border-border bg-background/96 p-2 shadow-[var(--card-shadow)] backdrop-blur-md md:left-auto md:right-3 md:w-[min(calc(100%-1.5rem),28rem)] md:px-2 md:py-1.5"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
    >
      <div className="space-y-2 md:space-y-1.5">
        <div className="space-y-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
            Cookie-Einstellungen
          </p>
          <p className="max-w-[25rem] text-[10px] leading-snug text-muted-foreground md:text-[11px]">
            Nur notwendige Cookies sind aktiv. Statistik und Marketing erst nach Einwilligung.
            Details in der{" "}
            <Link to="/datenschutz" className="font-medium text-accent hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <label className="flex items-start gap-1 border border-border px-1.5 py-1 opacity-70">
            <input
              type="checkbox"
              checked
              disabled
              aria-label="Notwendige Cookies (immer aktiv)"
              className="mt-0.5 h-3 w-3 accent-[hsl(var(--accent))]"
            />
            <div className="min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.08em]">
                Notwendig
              </span>
              <p className="mt-0.5 text-[9px] leading-snug text-muted-foreground">Grundfunktion</p>
            </div>
          </label>

          <label className="flex cursor-pointer items-start gap-1 border border-border px-1.5 py-1 transition-colors hover:border-accent">
            <input
              type="checkbox"
              checked={draft.statistics}
              onChange={(e) => setDraft({ ...draft, statistics: e.target.checked })}
              className="mt-0.5 h-3 w-3 accent-[hsl(var(--accent))]"
            />
            <div className="min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.08em]">Statistik</span>
              <p className="mt-0.5 text-[9px] leading-snug text-muted-foreground">GA4</p>
            </div>
          </label>

          <label className="flex cursor-pointer items-start gap-1 border border-border px-1.5 py-1 transition-colors hover:border-accent">
            <input
              type="checkbox"
              checked={draft.marketing}
              onChange={(e) => setDraft({ ...draft, marketing: e.target.checked })}
              className="mt-0.5 h-3 w-3 accent-[hsl(var(--accent))]"
            />
            <div className="min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.08em]">Marketing</span>
              <p className="mt-0.5 text-[9px] leading-snug text-muted-foreground">LinkedIn</p>
            </div>
          </label>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <Button
            type="button"
            variant="outline"
            className="h-6 border-border px-1 text-center text-[9px] font-bold uppercase tracking-[0.06em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => persist({ statistics: false, marketing: false })}
          >
            Ablehnen
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-6 border-border px-1 text-center text-[9px] font-bold uppercase tracking-[0.06em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => persist(draft)}
          >
            Speichern
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-6 border-border px-1 text-center text-[9px] font-bold uppercase tracking-[0.06em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => persist({ statistics: true, marketing: true })}
          >
            Akzeptieren
          </Button>
        </div>
      </div>
    </motion.div>
  );

  // ── Detailed mobile banner (footer-triggered, full modal) ─────────
  const detailedMobileBanner = (
    <motion.div
      key="detailed-mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 md:hidden"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,36,34,0.16)_0%,rgba(37,36,34,0.08)_18%,transparent_34%,transparent_66%,rgba(37,36,34,0.08)_82%,rgba(37,36,34,0.16)_100%)] backdrop-blur-[2px]"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[20rem] border border-border bg-background/96 p-4 shadow-[var(--card-shadow)] backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie-Einstellungen"
      >
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              Cookie-Einstellungen
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Nur notwendige Cookies sind aktiv. Details in der{" "}
              <Link to="/datenschutz" className="font-medium text-accent hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-2 border border-border px-3 py-2 opacity-70">
              <input
                type="checkbox"
                checked
                disabled
                aria-label="Notwendige Cookies (immer aktiv)"
                className="mt-0.5 h-3.5 w-3.5 accent-[hsl(var(--accent))]"
              />
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em]">Notwendig</span>
                <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">Grundfunktion der Website</p>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-2 border border-border px-3 py-2 transition-colors hover:border-accent">
              <input
                type="checkbox"
                checked={draft.statistics}
                onChange={(e) => setDraft({ ...draft, statistics: e.target.checked })}
                className="mt-0.5 h-3.5 w-3.5 accent-[hsl(var(--accent))]"
              />
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em]">Statistik</span>
                <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">Hilft uns, Nutzung und Inhalte zu verbessern</p>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-2 border border-border px-3 py-2 transition-colors hover:border-accent">
              <input
                type="checkbox"
                checked={draft.marketing}
                onChange={(e) => setDraft({ ...draft, marketing: e.target.checked })}
                className="mt-0.5 h-3.5 w-3.5 accent-[hsl(var(--accent))]"
              />
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em]">Marketing</span>
                <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">Aktiviert LinkedIn-Tracking nach Freigabe</p>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-9 border-border text-[10px] font-bold uppercase tracking-[0.08em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => persist({ statistics: true, marketing: true })}
            >
              Alle akzeptieren
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-9 border-border text-[10px] font-bold uppercase tracking-[0.08em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => persist(draft)}
            >
              Auswahl speichern
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-9 border-border text-[10px] font-bold uppercase tracking-[0.08em] hover:border-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => persist({ statistics: false, marketing: false })}
            >
              Nur notwendige
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        isDetailed
          ? (isMobile ? detailedMobileBanner : detailedDesktopBanner)
          : initialBanner
      )}
    </AnimatePresence>
  );
}
