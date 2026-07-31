import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { jobPostings } from "@/data/content";
import { applyHref } from "@/lib/applyHref";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const LIST_PREVIEW_COUNT = 3;

function CardList({ heading, items }: { heading: string; items: string[] }) {
  const preview = items.slice(0, LIST_PREVIEW_COUNT);
  const rest = items.length - preview.length;
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground dark:text-brand-surface-foreground">
        {heading}
      </p>
      <ul className="space-y-2.5">
        {preview.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm font-light leading-relaxed text-muted-foreground dark:text-brand-surface-foreground/70">
            <span className="mt-[0.45rem] h-1 w-1 shrink-0 bg-accent" />
            {item}
          </li>
        ))}
      </ul>
      {rest > 0 && (
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 dark:text-brand-surface-foreground/40">
          +{rest} weitere
        </p>
      )}
    </div>
  );
}

export default function JobsPage() {
  const jobs = [...jobPostings].sort((a, b) => b.datePosted.localeCompare(a.datePosted));

  return (
    <>
      <Seo
        title="Offene Stellen bei ScaleZ Partnern in der Schweiz"
        description="Handverlesene Positionen in Bauwesen, Immobilien, Gebäudetechnik, Elektrotechnik und Industrie – vermittelt über ScaleZ aus Zürich."
        path="/jobs"
      />
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="container max-w-4xl">
          <motion.div {...fadeUp} className="mb-6 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:mb-8">
            Jobs
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-5 text-3xl tracking-tighter sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Ihr nächster
            <br />
            <span className="text-accent">Karriereschritt.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Entdecken Sie ausgewählte Positionen bei ambitionierten Unternehmen. Klar, direkt und mit Perspektive auf den nächsten entscheidenden Karriereschritt.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-14 sm:py-16 md:py-24">
        <div className="container">
          {jobs.length === 0 ? (
            <motion.div
              {...fadeUp}
              className="flex flex-col items-start gap-6 border border-border p-6 sm:gap-8 sm:p-10 md:p-16"
            >
              <div className="h-px w-12 bg-accent" />
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-accent">
                  Demnächst
                </p>
                <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-4xl">
                  Neue Stellen folgen in Kürze.
                </h2>
              </div>
              <p className="max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                Aktuell besetzen wir Positionen diskret und auf direktem Weg. Melden Sie sich initiativ – wir informieren Sie, sobald eine passende Stelle verfügbar ist.
              </p>
              <Button asChild size="lg" className="w-full bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground sm:w-auto">
                <Link to="/kandidaten#bewerbung">Initiativbewerbung</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {jobs.map((job, i) => (
                <motion.article
                  key={job.slug}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="job-card-texture flex min-w-0 flex-col gap-5 border border-foreground/10 p-6 pb-5 text-foreground shadow-[var(--card-shadow)] transition-colors duration-300 hover:border-accent/60 dark:border-brand-surface-foreground/10 dark:text-brand-surface-foreground sm:gap-6 sm:p-8 sm:pb-6 md:p-12 md:pb-8"
                >
                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {job.focus}
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground dark:text-brand-surface-foreground/55">
                        {job.region} · {job.employmentType}
                      </p>
                    </div>
                    <h2 className="hyphens-auto text-xl tracking-tighter sm:text-2xl md:text-3xl">
                      <Link to={`/jobs/${job.slug}`} className="transition-colors duration-200 hover:text-accent">
                        {job.title}
                      </Link>
                    </h2>
                    <p className="text-[0.9375rem] font-light leading-relaxed text-muted-foreground dark:text-brand-surface-foreground/70 sm:text-base">
                      {job.teaser}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col border-t border-foreground/10 pt-5 dark:border-brand-surface-foreground/15 sm:pt-6">
                    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-1 xl:grid-cols-2">
                      <CardList heading="Aufgaben" items={job.tasks} />
                      <CardList heading="Anforderungen" items={job.requirements} />
                    </div>
                    <div className="mt-auto pt-5 sm:pt-6">
                      <Link
                        to={`/jobs/${job.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent transition-colors duration-200 hover:text-foreground dark:hover:text-brand-surface-foreground sm:text-sm"
                      >
                        Alle Details zur Stelle
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-foreground/10 pt-5 dark:border-brand-surface-foreground/15 sm:pt-6">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12">
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground dark:text-brand-surface-foreground/55">
                          Start
                        </p>
                        <p className="text-sm font-light">{job.startDate}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground dark:text-brand-surface-foreground/55">
                          Vergütung
                        </p>
                        <p className="text-sm font-light">{job.compensation}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                      <p className="text-xs text-muted-foreground dark:text-brand-surface-foreground/55">{job.note}</p>
                      <Button asChild size="lg" className="w-full bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground dark:bg-brand-surface-foreground dark:text-brand-surface dark:hover:bg-accent dark:hover:text-accent-foreground sm:w-auto">
                        <Link to={applyHref(job.title)}>Jetzt bewerben</Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
