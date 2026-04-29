import { motion } from "framer-motion";
import {
  Upload,
  Shield,
  Eye,
  TrendingUp,
  HeartHandshake,
  BadgeDollarSign,
  Rocket,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import {
  formatFileSize,
  MAX_ATTACHMENT_COUNT,
  MAX_TOTAL_ATTACHMENT_BYTES,
  submitContactForm,
  validateAttachmentFiles,
} from "@/lib/contact-api";
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

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Du zahlst nichts. Nie.",
    description:
      "Unsere Kunden sind die Unternehmen. F\u00fcr dich ist unser Service komplett kostenlos, von der ersten Kontaktaufnahme bis zum unterschriebenen Vertrag.",
  },
  {
    icon: TrendingUp,
    title: "Mehr Gehalt. Ohne Pokern.",
    description:
      "Wir verhandeln f\u00fcr dich. Oft 15-25% mehr als dein letztes Angebot. Wir wissen, was der Markt zahlt und holen das Maximum raus.",
  },
  {
    icon: Shield,
    title: "100% Diskretion",
    description:
      "Dein Chef erf\u00e4hrt nichts. Weder jetzt noch sp\u00e4ter. Wir kontaktieren niemanden ohne dein Okay. Punkt.",
  },
  {
    icon: Eye,
    title: "Verdeckte Stellen",
    description:
      "Wir zeigen dir Stellen, bevor sie \u00f6ffentlich werden. Viele davon werden nie ausgeschrieben, weil die besten Positionen unter der Hand vergeben werden.",
  },
  {
    icon: HeartHandshake,
    title: "Kein Spam. Kein Druck.",
    description:
      "Wir schicken dir nicht 20 Jobs am Tag. Nur wenn es wirklich passt, melden wir uns. Und du entscheidest, ob du weitermachen willst.",
  },
  {
    icon: Rocket,
    title: "Karriere mit Turbo.",
    description:
      "Wir kennen die Unternehmen pers\u00f6nlich. Wir wissen, wo du reinpasst und wo nicht, und bringen dich gezielt dahin, wo du wachsen kannst.",
  },
];

const faqItems = [
  {
    q: "Was kostet mich die Zusammenarbeit mit euch?",
    a: "Nichts. Null. Nada. Unser Service ist f\u00fcr Kandidaten komplett kostenlos. Die Unternehmen bezahlen uns, nicht du.",
  },
  {
    q: "Wie schnell bekomme ich eine R\u00fcckmeldung von euch?",
    a: "Innerhalb von 48 Stunden. Meistens schneller. Wir lassen niemanden h\u00e4ngen. Wenn es gerade nichts Passendes gibt, sagen wir das auch direkt.",
  },
  {
    q: "Wie lange dauert es realistisch, bis ich eine neue Stelle habe?",
    a: "Das h\u00e4ngt von deiner Flexibilit\u00e4t und der Marktlage ab. Im Schnitt besetzen wir Positionen in unter 30 Tagen. Manche Kandidaten haben innerhalb von zwei Wochen einen Vertrag.",
  },
  {
    q: "Was passiert mit meinen Daten, wenn gerade nichts passt?",
    a: "Dein Profil bleibt bei uns diskret und sicher. Sobald etwas Passendes reinkommt, melden wir uns. Und wenn du nicht mehr suchst, l\u00f6schen wir alles. Kein Drama.",
  },
];

const steps = [
  { num: "01", title: "CV hochladen", description: "Schick uns deinen Lebenslauf. Kein Anschreiben n\u00f6tig." },
  { num: "02", title: "Kennenlernen", description: "Kurzes Gespr\u00e4ch. Wir wollen wissen, was dich antreibt." },
  { num: "03", title: "Matching", description: "Wir stellen dir nur Jobs vor, die wirklich passen." },
  { num: "04", title: "Loslegen", description: "Neuer Job. Bessere Kohle. Mehr Impact. Los geht's." },
];

export default function KandidatenPage() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [position, setPosition] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const requestedPosition = searchParams.get("position") ?? "";
    setPosition(requestedPosition);

    if (location.hash === "#bewerbung") {
      window.requestAnimationFrame(() => {
        const target = document.getElementById("bewerbung");
        if (!target) {
          return;
        }

        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY + 16,
          behavior: "smooth",
        });
      });
    }
  }, [location.hash, searchParams]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const validation = validateAttachmentFiles(selectedFiles);

    event.preventDefault();

    if (!validation.ok) {
      toast.error(validation.message);
      return;
    }

    setLoading(true);

    try {
      await submitContactForm(form, "candidate");
      toast.success("Bewerbung ist raus! Wir melden uns bald bei dir.");
      form.reset();
      setFileName("");
      setSelectedFiles([]);
      setPosition("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Die Bewerbung konnte nicht gesendet werden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title={"Diskret den n\u00e4chsten Karriereschritt finden \u2013 ScaleZ"}
        description={"ScaleZ vermittelt Fach- und F\u00fchrungskr\u00e4fte vertraulich in passende Positionen. Verdeckte Stellen, bessere Konditionen, keine Kosten f\u00fcr Kandidat:innen."}
        path="/kandidaten"
      />
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <motion.div
            {...fadeUp}
            className="mb-8 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"
          >
            {"F\u00fcr Kandidaten"}
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl tracking-tighter sm:text-6xl md:text-7xl"
          >
            {"Dein n\u00e4chster"}
            <br />
            <span className="text-accent">Zug.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground"
          >
            {"Du bist nicht unzufrieden. Aber du wei\u00dft: Da drau\u00dfen gibt es bessere Optionen. Mehr Gehalt, spannendere Projekte, weniger Politik. Das Problem? Du kannst nicht offen suchen, ohne dein aktuelles Verh\u00e4ltnis zu riskieren."}
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
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                {...stagger}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="exp-card group border-b border-border p-8 md:odd:border-r md:p-12"
              >
                <reason.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-4 mt-1 text-2xl tracking-tight md:text-3xl">{reason.title}</h3>
                <p className="font-light leading-relaxed text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">{"So l\u00e4uft's"}</p>
            <h2 className="text-3xl tracking-tighter md:text-5xl">Einfach. Schnell. Ohne Drama.</h2>
          </motion.div>
          <div className="grid gap-0 border-t border-border md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="svc-card border-b border-border p-8 lg:border-b-0 lg:border-r last:border-r-0"
              >
                <span className="text-xs font-bold tracking-widest text-accent">{step.num}</span>
                <h3 className="mb-3 mt-3 text-xl tracking-tight md:text-2xl">{step.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="bewerbung" className="scroll-mt-28 bg-card py-24">
        <div className="container max-w-2xl">
          <motion.div {...fadeUp} className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Bewerbung</p>
            <h2 className="mb-4 text-3xl tracking-tighter md:text-4xl">Zeig uns, was du draufhast.</h2>
            <p className="font-light text-muted-foreground">{"CV hochladen, fertig. Wir k\u00fcmmern uns um den Rest."}</p>
          </motion.div>
          <motion.form
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">
                  Name *
                </Label>
                <Input id="name" name="name" required maxLength={100} className="border-foreground/20 bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="border-foreground/20 bg-background"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider">
                  Telefon *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={30}
                  className="border-foreground/20 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position" className="text-xs font-bold uppercase tracking-wider">
                  Wunschposition / Branche
                </Label>
                <Input
                  id="position"
                  name="position"
                  maxLength={200}
                  value={position}
                  onChange={(currentEvent) => setPosition(currentEvent.target.value)}
                  className="border-foreground/20 bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="files" className="text-xs font-bold uppercase tracking-wider">
                Unterlagen *
              </Label>
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileRef.current?.click()}
                onKeyDown={(currentEvent) => {
                  if (currentEvent.key === "Enter" || currentEvent.key === " ") {
                    currentEvent.preventDefault();
                    fileRef.current?.click();
                  }
                }}
                className="cursor-pointer border-2 border-dashed border-foreground/20 bg-background p-8 text-center transition-colors hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                {fileName ? (
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {fileName.split(", ").map((name, index) => (
                      <p key={index}>{name}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Dateien hochladen - PDF, Word, TXT oder RTF (max. {formatFileSize(MAX_TOTAL_ATTACHMENT_BYTES)})
                  </p>
                )}
                <input
                  ref={fileRef}
                  id="files"
                  name="files"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.rtf"
                  multiple
                  required
                  className="hidden"
                  onChange={(currentEvent) => {
                    const files = Array.from(currentEvent.target.files || []);
                    const names = files.map((file) => file.name).join(", ");
                    setFileName(names);
                    setSelectedFiles(files);
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Maximal {MAX_ATTACHMENT_COUNT} Dateien mit zusammen bis zu {formatFileSize(MAX_TOTAL_ATTACHMENT_BYTES)}.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider">
                Was treibt dich an? (optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                maxLength={2000}
                rows={4}
                placeholder={"Erz\u00e4hl uns kurz, was du suchst..."}
                className="border-foreground/20 bg-background"
              />
            </div>
            <PrivacyNotice retention={"Bewerbungsunterlagen werden 24 Monate nach letztem Kontakt gel\u00f6scht, wenn keine Talentpool-Einwilligung vorliegt."} />
            {TURNSTILE_SITE_KEY && <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} />}
            <div className="rounded-sm border border-border bg-background/70 p-4">
              <div className="flex items-start gap-3">
                <input
                  id="privacyConsent-candidate"
                  name="privacyConsent"
                  type="checkbox"
                  value="accepted"
                  required
                  className="mt-1 h-4 w-4 rounded border border-foreground/30 accent-[hsl(var(--accent))]"
                />
                <div className="space-y-2">
                  <Label htmlFor="privacyConsent-candidate" className="text-xs font-bold uppercase tracking-wider">
                    {"Datenschutz best\u00e4tigen *"}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {"Ich best\u00e4tige die vertrauliche Verarbeitung meiner Bewerbung und Unterlagen gem\u00e4ss Datenschutzerkl\u00e4rung. Unterlagen werden intern nach 24 Monaten gel\u00f6scht."}
                  </p>
                </div>
              </div>

              <div className="hidden" aria-hidden="true">
                <Label htmlFor="website-candidate">Website</Label>
                <Input id="website-candidate" name="website" tabIndex={-1} autoComplete="off" />
              </div>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
              disabled={loading}
            >
              {loading ? "Wird gesendet..." : "Bewerbung absenden"}
            </Button>
          </motion.form>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container max-w-3xl">
          <motion.div {...fadeUp} className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">FAQ</p>
            <h2 className="text-3xl tracking-tighter md:text-5xl">
              Noch Fragen?
              <br />
              <span className="text-accent">Hier lang.</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium transition-colors hover:text-accent md:text-lg">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-light leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}
