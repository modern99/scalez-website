import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Blog – Markt, Talent und Perspektive | ScaleZ"
        description="Praxisnahe Einblicke, Markttrends und Know-how zu Recruiting, Karriere und der Besetzung anspruchsvoller Positionen in der DACH-Region."
        path="/blog"
      />
      <section className="pt-32 pb-16">
        <div className="container max-w-5xl">
          <motion.div {...fadeUp} className="mb-8 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Blog
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6 text-4xl tracking-tighter sm:text-6xl md:text-7xl">
            Markt, Talent und
            <br />
            <span className="text-accent">Perspektive.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Praxisnahe Einblicke, aktuelle Entwicklungen und fundiertes Wissen rund um Recruiting, Karriere und die Besetzung anspruchsvoller Positionen.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container max-w-5xl">
          <motion.div
            {...fadeUp}
            className="flex flex-col items-start gap-8 border border-border p-10 md:p-16"
          >
            <div className="h-px w-12 bg-accent" />
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-accent">
                Demnächst
              </p>
              <h2 className="text-3xl tracking-tighter md:text-4xl">
                Erste Artikel erscheinen in Kürze.
              </h2>
            </div>
            <p className="max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
              Hier entstehen praxisnahe Beiträge zu Recruiting, Karriere und dem Schweizer Arbeitsmarkt. Schauen Sie bald wieder vorbei.
            </p>
            <Button asChild size="lg" className="bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground">
              <Link to="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
