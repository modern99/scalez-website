import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import maxImg from "@/assets/max-schoenpflug.jpeg";
import Seo from "@/components/Seo";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Über ScaleZ",
  url: "https://www.scale-z.ch/ueber-uns",
  mainEntity: {
    "@type": "Organization",
    name: "ScaleZ GmbH",
    url: "https://www.scale-z.ch/",
    founder: {
      "@type": "Person",
      name: "Max Schönpflug",
      jobTitle: "Gründer & Geschäftsführer",
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const values = [
  { num: "01", title: "Klartext", description: "Wir sagen, wie es ist. Nicht, was andere hören wollen. Das spart allen Zeit." },
  { num: "02", title: "Tempo", description: "Wir sind schnell. Nicht hektisch sondern effizient. Jeder Zag zählt." },
  { num: "03", title: "Augenhöhe", description: "Ob CEO oder Berufseinsteiger: Jeder wird bei uns gleich behandelt." },
  { num: "04", title: "Qualität", description: "Masse können andere. Wir liefern die richtigen Leute, nicht die meisten." },
];

export default function UeberUnsPage() {
  return (
    <>
      <Seo
        title="Über ScaleZ – Schweizer Recruiting-Boutique"
        description="Hinter ScaleZ stehen Menschen mit klarer Meinung und direktem Stil. Executive Search in Zürich für Bauwesen, Immobilien und Industrie."
        path="/ueber-uns"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
      </Helmet>
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <motion.div {...fadeUp} className="inline-block border border-accent text-accent text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 mb-8">
            Über uns
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl sm:text-6xl md:text-7xl tracking-tighter mb-6">
            Jung. Hungrig.
            <br />
            <span className="text-accent">Verdammt gut.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-xl font-light">
            ScaleZ wurde gegründet, weil die Branche zu lange zu langweilig war. Wir machen das anders, ohne den Corporate-Muff, aber mit den Ergebnissen.
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-muted-foreground max-w-xl font-light mt-4">
            Wir sind kein Konzern und wollen keiner sein. Unsere Größe ist unsere Stärke: schnelle Entscheidungen, persönlicher Kontakt, null Bürokratie.
          </motion.p>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Werte</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter">Wofür wir stehen.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-0 border-t border-border">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="exp-card border-b border-border p-8 md:odd:border-r md:p-12"
              >
                <span className="text-xs font-bold text-accent tracking-widest">{v.num}</span>
                <h3 className="text-2xl md:text-3xl mt-3 mb-4 tracking-tight">{v.title}</h3>
                <p className="text-muted-foreground font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-24 text-brand-surface-foreground dark:bg-brand-surface-deep">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Founder</p>
            <h2 className="text-3xl md:text-5xl tracking-tighter">Der Kopf dahinter.</h2>
          </motion.div>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start"
            >
              <div className="aspect-square overflow-hidden bg-brand-surface-foreground/10">
                <img
                  src={maxImg}
                  alt="Max Schönpflug – Founder von ScaleZ"
                  width="640"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Max Schönpflug</h3>
                <p className="mt-6 text-justify text-lg font-light leading-relaxed text-brand-surface-foreground/72">
                  Ich habe hautnah miterlebt, wie es in der Branche zugeht und rasch erkannt, dass es deutlich besser geht. Vertrauensvoller, ehrlicher und direkter.
                </p>
                <p className="mt-4 text-justify text-lg font-light leading-relaxed text-brand-surface-foreground/72">
                  Daraufhin wagte ich den Schritt zu ScaleZ, mit dem Anspruch, dass jeder Mensch und jedes Unternehmen einen Ansprechpartner verdient, der mitdenkt statt nur abarbeitet. Eine Person, die die Dinge klar anspricht, auch wenn es manchmal unbequem ist.
                </p>
                <a
                  href="https://ch.linkedin.com/in/max-sch%C3%B6npflug-%F0%9F%87%A8%F0%9F%87%AD-78478a20a"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-accent px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
