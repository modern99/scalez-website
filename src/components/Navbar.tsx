import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "Unternehmen", path: "/unternehmen" },
  { label: "Kandidaten", path: "/kandidaten" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Jobs", path: "/jobs" },
  { label: "Blog", path: "/blog" },
  { label: "Kontakt", path: "/kontakt" },
];

function ThemeButton({
  className,
  iconClassName,
  isDark,
  onToggle,
}: {
  className?: string;
  iconClassName?: string;
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Zwischen Hell- und Dunkelmodus wechseln"
      title={isDark ? "Zum Hellmodus wechseln" : "Zum Dunkelmodus wechseln"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/85 text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground dark:bg-card/90",
        className
      )}
    >
      {isDark ? (
        <SunMedium className={cn("h-3.5 w-3.5", iconClassName)} />
      ) : (
        <MoonStar className={cn("h-3.5 w-3.5", iconClassName)} />
      )}
    </button>
  );
}

export default function Navbar() {
  const location = useLocation();
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <img src="/black-logo.svg" alt="ScaleZ" width="140" height="28" fetchPriority="high" decoding="async" className="h-[1.375rem] w-auto md:h-7 dark:hidden" />
          <img src="/primary-logo.svg" alt="ScaleZ" width="140" height="28" fetchPriority="high" decoding="async" className="hidden h-[1.375rem] w-auto md:h-7 dark:block" />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex h-9 items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "inline-flex h-full items-center text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-accent",
                  isActivePath(item.path)
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeButton isDark={isDark} onToggle={toggle} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton className="h-9 w-9" iconClassName="h-5 w-5" isDark={isDark} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center transition-colors hover:text-accent"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="container pt-2 md:pt-2.5">
        <div className="border-t border-border" />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background md:hidden"
          >
            <div className="container flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "py-2 text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent",
                    isActivePath(item.path)
                      ? "text-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
