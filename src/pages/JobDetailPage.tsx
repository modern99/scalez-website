import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { getJobPosting } from "@/data/content";
import { buildJobPostingJsonLd } from "@/lib/jobPostingSchema";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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
        <div className="container max-w-5xl">
          <Button asChild variant="outline" className="mb-8 border-border px-5 hover:border-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zu den Jobs
            </Link>
          </Button>
          <motion.div {...fadeUp} className="flex flex-wrap gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {job.focus}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {job.region}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {job.employmentType}
            </span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6 text-4xl tracking-tighter sm:text-5xl md:text-6xl">
            {job.title}
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            {job.teaser}
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container max-w-5xl">
          <motion.div {...fadeUp} className="flex flex-col gap-6 border border-border p-8 md:p-12">
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Start
                </p>
                <p className="text-sm font-light">{job.startDate}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Publiziert
                </p>
                <p className="text-sm font-light">{formatDate(job.datePosted)}</p>
              </div>
            </div>

            <div className={`grid gap-6 ${job.benefits && job.benefits.length > 0 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                  Aufgaben
                </p>
                <ul className="space-y-1">
                  {job.tasks.map((task, j) => (
                    <li key={j} className="flex gap-2 text-sm font-light text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                  Anforderungen
                </p>
                <ul className="space-y-1">
                  {job.requirements.map((req, j) => (
                    <li key={j} className="flex gap-2 text-sm font-light text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              {job.benefits && job.benefits.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                    Benefits
                  </p>
                  <ul className="space-y-1">
                    {job.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-2 text-sm font-light text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Vergütung
                </p>
                <p className="text-sm font-light">{job.compensation}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-xs text-muted-foreground">{job.note}</p>
                <Button asChild size="lg" className="bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground">
                  <Link to="/kandidaten#bewerbung">Jetzt bewerben</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
