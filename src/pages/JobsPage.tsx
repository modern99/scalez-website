import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { jobPostings } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function JobsPage() {
  return (
    <>
      <Seo
        title="Offene Stellen bei ScaleZ Partnern in der Schweiz"
        description="Handverlesene Positionen in Bauwesen, Immobilien, Gebäudetechnik, Elektrotechnik und Industrie – vermittelt über ScaleZ aus Zürich."
        path="/jobs"
      />
      <section className="pt-32 pb-16">
        <div className="container max-w-5xl">
          <motion.div {...fadeUp} className="mb-8 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Jobs
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6 text-4xl tracking-tighter sm:text-6xl md:text-7xl">
            Ihr nächster
            <br />
            <span className="text-accent">Karriereschritt.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Entdecken Sie ausgewählte Positionen bei ambitionierten Unternehmen. Klar, direkt und mit Perspektive auf den nächsten entscheidenden Karriereschritt.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container max-w-5xl">
          {jobPostings.length === 0 ? (
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
                  Neue Stellen folgen in Kürze.
                </h2>
              </div>
              <p className="max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
                Aktuell besetzen wir Positionen diskret und auf direktem Weg. Melden Sie sich initiativ – wir informieren Sie, sobald eine passende Stelle verfügbar ist.
              </p>
              <Button asChild size="lg" className="bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground">
                <Link to="/kandidaten#bewerbung">Initiativbewerbung</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="flex flex-col divide-y divide-border border border-border">
              {jobPostings.map((job, i) => (
                <motion.div
                  key={job.slug}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex flex-col gap-6 p-8 md:p-12"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                          {job.focus}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {job.region}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {job.employmentType}
                        </span>
                      </div>
                      <h2 className="text-2xl tracking-tighter md:text-3xl">
                        {job.title}
                      </h2>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        Start
                      </p>
                      <p className="text-sm font-light">{job.startDate}</p>
                    </div>
                  </div>

                  <p className="text-base font-light leading-relaxed text-muted-foreground max-w-2xl">
                    {job.teaser}
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
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
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
