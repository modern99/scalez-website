import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Target, MessageSquare, UserSearch, ShieldCheck, Wallet, LockKeyhole } from "lucide-react";
import { submitContactForm } from "@/lib/contact-api";
import PrivacyNotice from "@/components/PrivacyNotice";
import TurnstileWidget from "@/components/TurnstileWidget";
import Seo from "@/components/Seo";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

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

const steps = [
  { num: "01", title: "Briefing", description: "Sie sagen uns, wen Sie brauchen. Kein Roman, ein Gespräch reicht." },
  { num: "02", title: "Direktansprache", description: "Wir gehen dahin, wo andere aufhören zu suchen. Direkt. Persönlich. Hartnäckig." },
  { num: "03", title: "Vorauswahl", description: "1-3 Kandidaten. Handverlesen. Kein Copy-Paste aus irgendeiner Datenbank." },
  { num: "04", title: "Abschluss", description: "Vertrag unterschrieben. Position besetzt. Weiter geht's." },
];

const reasons = [
  {
    icon: Target,
    title: "Keine Zeitverschwendung",
    description: "Sie wollen keine 200 unpassenden Bewerbungen durchforsten. Wir schicken Ihnen 1-3 handverlesene Kandidaten, die tatsächlich passen.",
  },
  {
    icon: MessageSquare,
    title: "Wir sprechen Ihre Sprache",
    description: "Kein HR-Geschwätz von jemandem, der Gebäudeautomation mit Hausautomation verwechselt. Wir verstehen, wonach Sie wirklich suchen auf technischer und kultureller Ebene.",
  },
  {
    icon: UserSearch,
    title: "Die besten reden nicht",
    description: "Top-Kandidaten aktualisieren nicht ihr LinkedIn-Profil. Sie sind beschäftigt, zufrieden, aber offen für das richtige Angebot. Genau diese erreichen wir.",
  },
  {
    icon: ShieldCheck,
    title: "Diskretion ist Standard",
    description: "Sensible Suche? Kein Problem. Ihre Konkurrenz erfährt nichts. Kandidaten werden nur mit Ihrer Freigabe kontaktiert. Keine peinlichen Zufallsbegegnungen.",
  },
  {
    icon: Wallet,
    title: "Faire Honorare",
    description: "Wir kennen den Markt und wissen, wann es zu viel ist.",
  },
  {
    icon: LockKeyhole,
    title: "Exklusives Mandat",
    description: "Priorität bei unseren besten Leuten.",
  },
];

function formatDateForInput(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function UnternehmenPage() {
  const [loading, setLoading] = useState(false);
  const minStartDate = formatDateForInput(new Date());

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value && event.target.value < minStartDate) {
      event.target.value = minStartDate;
      toast.error("Bitte nur heute oder ein zukünftiges Datum auswählen.");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const startDateInput = form.elements.namedItem("start_date") as HTMLInputElement | null;

    event.preventDefault();
    setLoading(true);

    if (startDateInput?.value && startDateInput.value < minStartDate) {
      toast.error("Bitte nur heute oder ein zukünftiges Datum auswählen.");
      startDateInput.focus();
      setLoading(false);
      return;
    }

    try {
      await submitContactForm(form, "company");
      toast.success("Anfrage ist raus. Wir melden uns in 24h!");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Die Anfrage konnte nicht gesendet werden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Personalvermittlung für Unternehmen – ScaleZ Zürich"
        description="Diskrete Direktansprache, handverlesene Shortlist in unter 30 Tagen. ScaleZ besetzt Schlüsselpositionen in Bauwesen, Immobilien, Gebäudetechnik und Industrie."
        path="/unternehmen"
      />
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <motion.div {...fadeUp} className="inline-block border border-accent px-4 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Für Unternehmen
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6 text-4xl tracking-tighter sm:text-6xl md:text-7xl">
            Sie suchen.
            <br />
            <span className="text-accent">Wir finden.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Sie schalten seit Wochen Inserate auf allen Plattformen. 150 Bewerbungen, davon 140 komplett unbrauchbar. Die guten Leute? Die bewerben sich nicht. Die arbeiten bereits irgendwo. Und genau da kommen wir ins Spiel.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Unser Ansatz</p>
            <h2 className="text-3xl tracking-tighter md:text-5xl">
              Warum
              <br />
              <span className="text-accent">ScaleZ?</span>
            </h2>
          </motion.div>
          <div className="grid gap-0 border-t border-border md:grid-cols-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="exp-card group border-b border-border p-8 md:odd:border-r md:p-12"
              >
                <r.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mt-1 mb-4 text-2xl tracking-tight md:text-3xl">{r.title}</h3>
                <p className="font-light leading-relaxed text-muted-foreground">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Prozess</p>
            <h2 className="text-3xl tracking-tighter md:text-5xl">Vier Schritte. Fertig.</h2>
          </motion.div>
          <div className="grid gap-0 border-t border-border md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="svc-card border-b border-border p-8 lg:border-r lg:border-b-0 last:border-r-0"
              >
                <span className="text-xs font-bold tracking-widest text-accent">{step.num}</span>
                <h3 className="mt-3 mb-3 text-xl tracking-tight md:text-2xl">{step.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container max-w-2xl">
          <motion.div {...fadeUp} className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Anfrage</p>
            <h2 className="mb-4 text-3xl tracking-tighter md:text-4xl">Sagen Sie uns, wen Sie brauchen.</h2>
            <p className="font-light text-muted-foreground">Wir melden uns innerhalb von 24 Stunden. Versprochen.</p>
          </motion.div>
          <motion.form {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider">Firma *</Label>
                <Input id="company" name="company" required maxLength={100} className="border-foreground/20 bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-xs font-bold uppercase tracking-wider">Ansprechpartner *</Label>
                <Input id="contact" name="contact" required maxLength={100} className="border-foreground/20 bg-background" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">E-Mail *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="border-foreground/20 bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider">Telefon *</Label>
                <Input id="phone" name="phone" type="tel" required maxLength={30} className="border-foreground/20 bg-background" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="position" className="text-xs font-bold uppercase tracking-wider">Gesuchte Position *</Label>
              <Input id="position" name="position" required maxLength={200} className="border-foreground/20 bg-background" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-xs font-bold uppercase tracking-wider">Was muss der/die Neue können?</Label>
              <Textarea id="requirements" name="requirements" maxLength={2000} rows={5} className="border-foreground/20 bg-background" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="start_date" className="text-xs font-bold uppercase tracking-wider">Wann soll&apos;s losgehen?</Label>
              <Input id="start_date" name="start_date" type="date" min={minStartDate} onChange={handleStartDateChange} className="border-foreground/20 bg-background" />
            </div>
            <PrivacyNotice retention="Unternehmensanfragen und Mandatsdaten werden gemäss Datenschutzerklärung verarbeitet. Vertrags- und Vermittlungsdaten werden bis zu 10 Jahre aufbewahrt." />
            {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} />}
            <div className="rounded-sm border border-border bg-background/70 p-4">
              <div className="flex items-start gap-3">
                <input
                  id="privacyConsent-company"
                  name="privacyConsent"
                  type="checkbox"
                  value="accepted"
                  required
                  className="mt-1 h-4 w-4 rounded border border-foreground/30 accent-[hsl(var(--accent))]"
                />
                <div className="space-y-2">
                  <Label htmlFor="privacyConsent-company" className="text-xs font-bold uppercase tracking-wider">
                    Datenschutz bestätigen *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Ich bestätige die vertrauliche Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage gemäss Datenschutzerklärung.
                  </p>
                </div>
              </div>

              <div className="hidden" aria-hidden="true">
                <Label htmlFor="website-company">Website</Label>
                <Input id="website-company" name="website" tabIndex={-1} autoComplete="off" />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90" disabled={loading}>
              {loading ? "Wird gesendet..." : "Anfrage absenden"}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
