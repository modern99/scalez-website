import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ImpressumPage() {
  return (
    <>
      <Seo
        title="Impressum – ScaleZ GmbH"
        description="Impressum der ScaleZ GmbH, Eggbühlstrasse 24, 8050 Zürich. Angaben zu Geschäftsführung und Handelsregister."
        path="/impressum"
      />
      <section className="pt-32 pb-14">
        <div className="container max-w-5xl">
          <motion.div {...fadeUp} className="mb-8 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Rechtliches
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6 text-4xl tracking-tighter sm:text-6xl md:text-7xl">
            Impressum
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl text-lg font-light leading-relaxed text-muted-foreground">
            Alle relevanten Angaben zur ScaleZ GmbH, sauber und direkt auf einer Seite.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container">
          <div className="grid gap-0 lg:grid-cols-2">
            <motion.section {...fadeUp} className="border-t border-border bg-background p-8 md:p-10 lg:border-r">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Unternehmen</p>
              <div className="space-y-2 font-light leading-relaxed text-muted-foreground">
                <p>ScaleZ GmbH</p>
                <p>Eggbühlstrasse 24</p>
                <p>8050 Zürich</p>
                <p>Schweiz</p>
              </div>
            </motion.section>

            <motion.section {...fadeUp} transition={{ duration: 0.7, delay: 0.05 }} className="border-t border-border bg-background p-8 md:p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Kontakt</p>
              <div className="space-y-2 font-light leading-relaxed text-muted-foreground">
                <p>Telefon: <a className="text-accent hover:underline" href="tel:+41797046000">+41 79 704 60 00</a></p>
                <p>E-Mail: <a className="text-accent hover:underline" href="mailto:info@scale-z.ch">info@scale-z.ch</a></p>
              </div>
            </motion.section>

            <motion.section {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="border-t border-border bg-background p-8 md:p-10 lg:border-r">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Geschäftsführer</p>
              <p className="font-light leading-relaxed text-muted-foreground">Max Schönpflug</p>
            </motion.section>

            <motion.section {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="border-t border-border bg-background p-8 md:p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Handelsregister</p>
              <p className="font-light leading-relaxed text-muted-foreground">
                Eingetragen im Handelsregister des Kantons Zürich
              </p>
            </motion.section>

            <motion.section {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="border-t border-border bg-background p-8 md:p-10 lg:col-span-2">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">UID & Haftungsausschluss</p>
              <div className="space-y-4 font-light leading-relaxed text-muted-foreground">
                <p>UID: CHE-381.331.169</p>
                <p>
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                  Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </>
  );
}
