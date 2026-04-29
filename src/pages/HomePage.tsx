import { Link } from "react-router-dom";
import { animate, motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2, Home, Cpu, Zap, Cog, HeartPulse } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  {
    num: "01",
    title: "Direktansprache",
    description: "Wir finden die Besten. Nicht auf Jobbörsen scrollen sondern gezielt ansprechen.",
  },
  {
    num: "02",
    title: "Schnelle Besetzung",
    description: "30 Tage. Von der Anfrage bis zum unterschriebenen Vertrag.",
  },
  {
    num: "03",
    title: "Diskrete Suche",
    description:
      "Vertrauliche Mandate bleiben vertraulich. Wir sprechen Kandidaten gezielt an, ohne unnötige Aufmerksamkeit zu erzeugen.",
  },
  {
    num: "04",
    title: "Kulturelle Passung",
    description: "Fachliches kann man lernen. Haltung nicht. Wir finden beides.",
  },
];

const stats = [
  { value: "91%", label: "Besetzungsquote" },
  { value: "<25", label: "Tage im Schnitt" },
  { value: "30+", label: "Partner" },
  { value: "30h", label: "Individuelle Beratung" },
];

const heroMetrics = [
  { value: "30h", label: "Individuelle Beratung" },
  { value: "<25", label: "Tempo" },
];

const expertise = [
  {
    icon: Building2,
    title: "Bauwesen",
    roles: "Bauleiter, Projektleiter, Bauherrenvertreter, Zeichner, Ingenieure & Architekten",
  },
  {
    icon: Home,
    title: "Immobilien",
    roles: "Facility Manager, Immobilienbewirtschafter, Immobilienentwickler, Asset & Portfolio Manager",
  },
  {
    icon: Cpu,
    title: "Gebäudetechnik & Automation",
    roles: "Servicetechniker, MSR-Techniker, HKLS-Ingenieure, Projektleiter",
  },
  {
    icon: Zap,
    title: "Elektrotechnik",
    roles: "Elektroplaner, Elektriker / Elektroinstallateure, SPS-Programmierer, Ingenieure, Projektleiter",
  },
  {
    icon: Cog,
    title: "Maschinen- & Anlagenbau",
    roles:
      "Maschinen- und Anlagenführer, Konstrukteure, Entwicklungsingenieure, Berechnungsingenieur, Projektleiter",
  },
  {
    icon: HeartPulse,
    title: "Gesundheitswesen",
    roles: "Pflegekräfte, Fachärzte, Oberärzte, Chefärzte",
  },
];

function parseStatValue(value: string) {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);

  if (!match) {
    return { prefix: "", number: 0, suffix: value };
  }

  return {
    prefix: match[1],
    number: Number.parseInt(match[2], 10),
    suffix: match[3],
  };
}

function formatAnimatedStatValue(value: string, animatedNumber: number) {
  const { prefix, suffix } = parseStatValue(value);
  const rounded = Math.round(animatedNumber);

  if (rounded === 0) {
    if (suffix === "%" || suffix === "h") {
      return `0${suffix}`;
    }

    return "0";
  }

  return `${prefix}${rounded}${suffix}`;
}

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(() => formatAnimatedStatValue(value, 0));

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const { number } = parseStatValue(value);
    const controls = animate(0, number, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(formatAnimatedStatValue(value, latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

function HeroPerformancePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 }}
      className="relative w-full max-w-[479px] overflow-hidden border border-foreground/10 bg-[image:var(--hero-panel-gradient)] p-[18px] text-foreground shadow-[var(--hero-panel-shadow)] dark:border-brand-surface-foreground/10 dark:bg-[image:var(--hero-panel-gradient-dark)] dark:text-brand-surface-foreground dark:shadow-[var(--hero-panel-shadow-dark)] md:p-6"
    >
      <div className="absolute inset-0 bg-[image:var(--hero-panel-overlay)] dark:bg-[image:var(--hero-panel-overlay-dark)]" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between border-b border-foreground/10 pb-4">
          <div>
            <img src="/black-logo.svg" alt="ScaleZ" width="160" height="32" loading="lazy" decoding="async" className="h-7 w-auto md:h-8 dark:hidden" />
            <img src="/primary-logo.svg" alt="ScaleZ" width="160" height="32" loading="lazy" decoding="async" className="hidden h-7 w-auto md:h-8 dark:block" />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.32em] text-accent">
              Mandate
            </p>
          </div>
          <p className="pt-1 text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground dark:text-brand-surface-foreground/58">
            2026
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-2 sm:gap-3">
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-foreground/10 bg-background/65 p-3 backdrop-blur-sm dark:border-brand-surface-foreground/10 dark:bg-brand-surface-foreground/[0.05] md:p-4"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-muted-foreground dark:text-brand-surface-foreground/58 md:text-xs md:tracking-[0.3em]">
                {metric.label === "Individuelle Beratung" ? "Beratung" : "Tempo"}
              </p>
              <p className="mt-3 text-[1.55rem] font-bold tracking-[0.06em] text-accent md:mt-4 md:text-[2.55rem]">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[10.5rem] text-[0.72rem] font-light leading-snug text-muted-foreground dark:text-brand-surface-foreground/72 md:mt-3 md:text-[0.88rem] md:leading-relaxed">
                {metric.label === "Individuelle Beratung"
                  ? "Individuelle Beratung"
                  : "Ø Tage bis zur Besetzung"}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-foreground/10 bg-background/45 p-4 backdrop-blur-sm dark:border-brand-surface-foreground/10 dark:bg-brand-surface-foreground/[0.04]">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-muted-foreground dark:text-brand-surface-foreground/58">
              Direktansprache
            </p>
          </div>

          <div className="mb-6 h-2 overflow-hidden bg-foreground/10 dark:bg-brand-surface-foreground/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
              className="h-full bg-[image:var(--accent-progress-gradient)]"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-[0.88rem] font-light text-muted-foreground dark:text-brand-surface-foreground/72">
            <p>Diskret</p>
            <p className="text-center">Präzise</p>
            <p className="text-right">Schnell</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <Seo
        title="ScaleZ – Headhunting & Executive Search Zürich"
        description="ScaleZ ist die Schweizer Recruiting-Boutique für Bauwesen, Immobilien, Gebäudetechnik und Industrie. Direkt, diskret, ergebnisorientiert – Sitz in Zürich."
        path="/"
      />
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden pt-24 lg:pt-8">
        <div className="container">
          <div className="grid items-start gap-12 py-4 lg:grid-cols-[minmax(0,1fr)_479px] lg:gap-16 lg:py-4">
            <div className="flex h-full max-w-[48rem] flex-col">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 mt-1 inline-block rounded border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"
                >
                  Jung. Direkt. Unbequem Gut.
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
                  className="mb-8 text-[3.7rem] font-bold uppercase leading-[1.03] tracking-[-0.05em] text-foreground sm:text-[4.84rem] md:text-[5.2rem] lg:text-[6.79rem] xl:text-[7.61rem]"
                >
                  WIR FINDEN
                  <br />
                  <span className="text-accent">DIE LEUTE,</span>
                  <br />
                  DIE KEINER
                  <br />
                  FINDET.
                </motion.h1>
              </div>
            </div>

            <div className="w-full lg:justify-self-end lg:pt-6">
              <HeroPerformancePanel />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 flex flex-col gap-4 sm:flex-row lg:justify-end"
              >
                <Button asChild size="lg" className="bg-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90">
                  <Link to="/unternehmen">
                    Jetzt starten <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-foreground/20 px-8 text-sm font-bold uppercase tracking-widest hover:border-accent hover:bg-accent hover:text-accent-foreground">
                  <Link to="/kandidaten">Ich bin Kandidat</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section data-print-hide="true" className="overflow-hidden bg-brand-surface py-4">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-sm font-bold uppercase tracking-[0.3em] text-brand-surface-foreground">
              <span>ScaleZ</span>
              <span className="px-3 text-brand-surface-foreground/55">·</span>
              <span className="text-accent">Qualität</span>
              <span className="px-3 text-brand-surface-foreground/55">·</span>
              <span>Diskretion</span>
              <span className="px-3 text-brand-surface-foreground/55">·</span>
              <span className="text-accent">Präzision</span>
              <span className="px-3 text-brand-surface-foreground/55">·</span>
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Expertise</p>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
              Unsere
              <br />
              Spezialisierungen.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground font-light">
              Wir konzentrieren uns auf Branchen, in denen technisches Verständnis und Netzwerk entscheidend sind.
            </p>
          </motion.div>
          <div className="grid gap-0 border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e, i) => (
              <motion.div
                key={e.title}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                className="exp-card group border-r border-b border-border p-8 md:p-10"
              >
                <e.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-3 text-xl font-bold tracking-tight md:text-2xl">{e.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{e.roles}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Was wir tun</p>
            <h2 className="text-4xl tracking-tighter md:text-6xl">
              Kein Standard.
            </h2>
          </motion.div>
          <div className="grid gap-0 border-t border-border md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="svc-card group cursor-default border-b border-border p-8 md:p-12 md:odd:border-r"
              >
                <span className="text-xs font-bold tracking-widest text-accent">{s.num}</span>
                <h3 className="mt-3 mb-4 text-2xl tracking-tight md:text-3xl">{s.title}</h3>
                <p className="font-light text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-24 text-brand-surface-foreground md:py-32 dark:bg-brand-surface-deep">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Zahlen</p>
            <h2 className="text-4xl tracking-tighter md:text-6xl">
              Ergebnisse statt
              <br />
              Versprechen.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-14 md:gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-2 border-accent pl-4 md:pl-6"
              >
                <p className="mb-2 text-5xl font-bold tracking-[0.06em] text-accent md:text-6xl">
                  <AnimatedStatValue value={s.value} />
                </p>
                <p className="text-sm font-medium uppercase tracking-wider text-brand-surface-foreground/60">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-4xl">
            <h2 className="mb-8 text-4xl tracking-tighter md:text-7xl">
              Bereit für
              <br />
              <span className="text-accent">echte Ergebnisse?</span>
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group bg-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90">
                <Link to="/kontakt">
                  Let&apos;s talk <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
