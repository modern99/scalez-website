import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { getJobPosting } from "@/data/content";
import { applyHref } from "@/lib/applyHref";
import { buildJobPostingJsonLd } from "@/lib/jobPostingSchema";

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

function formatDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function JobDetailPage() {
  const { slug } = useParams();
  const job = slug ? getJobPosting(slug) : undefined;

  if (!job) {
    return (
      <>
        <Seo
          title="Stelle nicht gefunden | ScaleZ Jobs"
          description="Die gesuchte Stelle ist nicht mehr verfügbar."
          path="/jobs"
          noindex
        />
        <section className="pt-32 pb-20">
          <div className="container max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Jobs</p>
            <h1 className="mt-4 text-4xl tracking-tight">Diese Stelle gibt es nicht mehr.</h1>
            <Button asChild className="mt-8 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
              <Link to="/jobs">Zur Job-Übersicht</Link>
            </Button>
          </div>
        </section>
      </>
    );
  }

  // In Produktion liefert das vorgerenderte HTML (scripts/prerender.ts) das
  // JobPosting-JSON-LD – hier nur im Dev-Modus injizieren, um Duplikate zu vermeiden.
  const jsonLd = import.meta.env.DEV ? buildJobPostingJsonLd(job) : null;

  const facts = [
    { label: "Start", value: job.startDate },
    { label: "Vergütung", value: job.compensation },
    { label: "Publiziert", value: formatDate(job.datePosted) },
  ];

  return (
    <>
      <Seo
        title={`${job.title} | ScaleZ Jobs`}
        description={job.teaser}
        path={`/jobs/${job.slug}`}
      />
      {jsonLd && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}
      <section className="pt-32 pb-16">
        <div className="container mb-12">
          <Button asChild variant="outline" className="border-border px-5 hover:border-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zu den Jobs
            </Link>
          </Button>
        </div>
        <div className="container max-w-4xl">
          <motion.div {...fadeUp} className="mb-8 flex flex-wrap items-center gap-4">
            <span className="inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {job.focus}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {job.region} · {job.employmentType}
            </span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6 text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
            {job.title}
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            {job.teaser}
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10">
            <Button asChild size="lg" className="bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground">
              <Link to={applyHref(job.title)}>Jetzt bewerben</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="svc-card border-b border-border p-8 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {fact.label}
                </span>
                <p className="mt-3 text-lg font-light tracking-tight md:text-xl">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Die Stelle</p>
            <h2 className="text-3xl tracking-tighter md:text-5xl">
              Aufgaben &
              <br />
              <span className="text-accent">Anforderungen.</span>
            </h2>
          </motion.div>
          <div className="grid border-t border-border md:grid-cols-2">
            {[
              { heading: "Aufgaben", items: job.tasks },
              { heading: "Anforderungen", items: job.requirements },
            ].map((block, i) => (
              <motion.div
                key={block.heading}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className={`exp-card border-b border-border p-8 md:p-12 ${i === 0 ? "md:border-r" : ""}`}
              >
                <h3 className="mb-6 text-2xl tracking-tight md:text-3xl">{block.heading}</h3>
                <ul className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 font-light leading-relaxed text-muted-foreground">
                      <span className="mt-[0.6rem] h-1 w-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            {job.benefits && job.benefits.length > 0 && (
              <motion.div
                {...stagger}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                className="exp-card border-b border-border p-8 md:col-span-2 md:p-12"
              >
                <h3 className="mb-6 text-2xl tracking-tight md:text-3xl">Benefits</h3>
                <ul className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3 font-light leading-relaxed text-muted-foreground">
                      <span className="mt-[0.6rem] h-1 w-1 shrink-0 bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container">
          <motion.div {...fadeUp}>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-accent">Interessiert?</p>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl tracking-tighter md:text-4xl">Bereit für den nächsten Schritt?</h2>
              <p className="font-light text-muted-foreground">{job.note}</p>
              <Button asChild size="lg" className="bg-accent px-7 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90">
                <Link to={applyHref(job.title)}>Jetzt bewerben</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
