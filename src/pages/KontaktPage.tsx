import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/contact-api";
import { Helmet } from "react-helmet-async";
import PrivacyNotice from "@/components/PrivacyNotice";
import TurnstileWidget from "@/components/TurnstileWidget";
import Seo from "@/components/Seo";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt – ScaleZ GmbH",
  url: "https://www.scale-z.ch/kontakt",
  mainEntity: {
    "@type": "Organization",
    name: "ScaleZ GmbH",
    telephone: "+41797046000",
    email: "info@scale-z.ch",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eggbühlstrasse 24",
      postalCode: "8050",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
  },
};

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@scale-z.ch",
    href: "mailto:info@scale-z.ch",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+41 79 704 60 00",
    href: "tel:+41797046000",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Z\u00fcrich, Schweiz",
    href: "https://maps.google.com/?q=Eggb\u00fchlstrasse+24+8050+Z\u00fcrich",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ScaleZ GmbH",
    href: "https://ch.linkedin.com/company/scalezgroup",
  },
  {
    icon: Globe,
    label: "Google Business",
    value: "ScaleZ auf Google",
    href: "https://share.google/W7FE2K2mSyfIWLLVa",
  },
];

export default function KontaktPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    event.preventDefault();
    setLoading(true);

    try {
      await submitContactForm(form, "contact");
      toast.success("Nachricht gesendet. Wir melden uns!");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Das Formular konnte nicht gesendet werden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title={"Kontakt \u2013 ScaleZ GmbH Z\u00fcrich"}
        description="Direkt mit ScaleZ in Kontakt: Kontaktformular, Telefon +41 79 704 60 00, E-Mail info@scale-z.ch. Antwort innerhalb von 48 Stunden."
        path="/kontakt"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
      </Helmet>
      <section className="pt-32 pb-14">
        <div className="container max-w-4xl">
          <div className="grid gap-10">
            <div className="max-w-xl">
              <motion.div
                {...fadeUp}
                className="mb-8 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"
              >
                Kontakt
              </motion.div>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-6 text-4xl tracking-tight sm:text-6xl md:text-7xl"
              >
                Let&apos;s
                <br />
                <span className="text-accent">talk.</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-lg font-light text-muted-foreground"
              >
                Kein Kontaktformular-Friedhof. Wir antworten. Schnell. Versprochen.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container">
          <div className="grid max-w-[1320px] gap-8 xl:grid-cols-[minmax(280px,1fr)_minmax(0,2fr)] xl:items-stretch">
            <motion.div
              {...fadeUp}
              className="flex h-full flex-col border border-border bg-background p-8 md:p-10"
            >
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-accent">Direct</p>

              <div className="grid gap-0 border-t border-l border-border">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                    className="exp-card group border-r border-b border-border p-6 transition-colors"
                  >
                    <info.icon className="mb-4 h-5 w-5 text-accent" />
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="flex items-center gap-2 text-lg leading-snug text-foreground">
                      {info.value}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="flex h-full flex-col border border-border bg-background shadow-[var(--card-shadow)]"
            >
              <div className="border-b border-border px-6 py-5 md:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Formular</p>
                <h2 className="mt-3 text-3xl tracking-tight">
                  So erreichst du uns.
                </h2>
              </div>

              <div className="grid gap-0 border-b border-border md:grid-cols-2">
                <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                  <Label htmlFor="name" className="mb-3 block text-xs uppercase tracking-wider font-bold">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="h-12 rounded-none border-foreground/20 bg-transparent px-3 text-base"
                  />
                </div>
                <div className="p-6">
                  <Label htmlFor="email" className="mb-3 block text-xs uppercase tracking-wider font-bold">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="h-12 rounded-none border-foreground/20 bg-transparent px-3 text-base"
                  />
                </div>
              </div>

              <div className="border-b border-border p-6">
                <Label htmlFor="subject" className="mb-3 block text-xs uppercase tracking-wider font-bold">
                  Betreff *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  maxLength={200}
                  className="h-12 rounded-none border-foreground/20 bg-transparent px-3 text-base"
                />
              </div>

              <div className="border-b border-border p-6">
                <Label htmlFor="message" className="mb-3 block text-xs uppercase tracking-wider font-bold">
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  className="min-h-[120px] rounded-none border-foreground/20 bg-transparent px-3 text-base"
                />
              </div>

              <div className="border-b border-border p-6">
                <div className="flex items-start gap-3">
                  <input
                    id="privacyConsent-contact"
                    name="privacyConsent"
                    type="checkbox"
                    value="accepted"
                    required
                    className="mt-1 h-4 w-4 rounded border border-foreground/30 accent-[hsl(var(--accent))]"
                  />
                  <div className="space-y-2">
                    <Label
                      htmlFor="privacyConsent-contact"
                      className="text-xs font-bold uppercase tracking-wider"
                    >
                      {"Datenschutz best\u00e4tigen *"}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {"Ich best\u00e4tige, dass meine Angaben zur Bearbeitung meiner Anfrage vertraulich verarbeitet und gem\u00e4ss Datenschutzerkl\u00e4rung genutzt werden."}
                    </p>
                  </div>
                </div>

                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="website-contact">Website</Label>
                  <Input id="website-contact" name="website" tabIndex={-1} autoComplete="off" />
                </div>
              </div>

              <div className="border-b border-border p-6">
                <PrivacyNotice retention={"Kontaktanfragen werden 12 Monate nach Abschluss des Anliegens gel\u00f6scht."} />
              </div>

              {TURNSTILE_SITE_KEY && (
                <div className="border-b border-border px-6 py-4">
                  <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} />
                </div>
              )}

              <div className="mt-auto flex justify-center px-6 py-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full max-w-[260px] bg-accent text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
                  disabled={loading}
                >
                  {loading ? "Wird gesendet..." : "Absenden"}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
