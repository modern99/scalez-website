import { Link } from "react-router-dom";
import { openCookieSettings } from "@/lib/cookie-consent";

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-surface-foreground/10 bg-[image:var(--footer-gradient)] text-brand-surface-foreground dark:border-secondary/45">
      <div className="container flex min-h-[76px] items-center pt-4 pb-6 md:min-h-[82px] md:py-0">
        <div className="grid w-full translate-y-0.5 gap-2.5 md:translate-y-1 md:gap-3 lg:grid-cols-3 lg:items-center">
          <div className="hidden justify-start md:flex">
            <img
              src="/primary-logo.svg"
              alt="ScaleZ"
              width="140"
              height="28"
              loading="lazy"
              decoding="async"
              className="hidden h-5 w-auto md:block md:h-6 lg:h-7"
            />
          </div>

          <div className="flex justify-center">
            <div className="space-y-0.5 text-center">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.28em] text-accent">
                Kontakt
              </p>
              <p className="text-[0.82rem] font-medium leading-[1.1] text-brand-surface-foreground md:text-[0.88rem]">
                Eggbühlstrasse 24, 8050 Zürich, Schweiz
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[0.74rem] leading-[1.2] text-brand-surface-foreground/70 md:text-[0.82rem] dark:text-brand-surface-foreground/72">
                <a href="tel:+41797046000" className="transition-colors hover:text-accent">
                  +41 79 704 60 00
                </a>
                <span className="text-brand-surface-foreground/35">·</span>
                <a href="mailto:info@scale-z.ch" className="transition-colors hover:text-accent">
                  info@scale-z.ch
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center lg:justify-end lg:pr-[10px]">
            <nav className="flex h-full w-full -translate-y-0.5 items-center justify-center gap-1.5 lg:w-auto lg:justify-end">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="inline-flex min-w-[5rem] items-center justify-center border border-brand-surface-foreground/15 px-1.5 py-1 text-center text-[0.54rem] font-bold uppercase tracking-[0.1em] text-brand-surface-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground dark:border-secondary/55 dark:text-brand-surface-foreground/84 md:min-w-[5.75rem]"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openCookieSettings}
                className="inline-flex min-w-[5rem] items-center justify-center border border-brand-surface-foreground/15 px-1.5 py-1 text-center text-[0.54rem] font-bold uppercase tracking-[0.1em] text-brand-surface-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground dark:border-secondary/55 dark:text-brand-surface-foreground/84 md:min-w-[5.75rem]"
              >
                Cookies
              </button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
