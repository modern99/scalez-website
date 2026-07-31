import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { blogPosts } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <>
      <Seo
        title="Blog – Markt, Talent und Perspektive | ScaleZ"
        description="Praxisnahe Einblicke, Markttrends und Know-how zu Recruiting, Karriere und der Besetzung anspruchsvoller Positionen in der DACH-Region."
        path="/blog"
        noindex={true}
      />
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
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
        <div className="container max-w-7xl">
          {blogPosts.length === 0 ? (
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
          ) : (
            <>
              {featured && (
                <motion.article
                  {...fadeUp}
                  className="job-card-texture mb-8 border border-foreground/10 p-8 text-foreground shadow-[var(--card-shadow)] transition-colors duration-300 hover:border-accent/60 dark:border-brand-surface-foreground/10 dark:text-brand-surface-foreground md:p-14"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                    <div>
                      <div className="mb-4 flex flex-wrap gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                          Neuester Beitrag · {featured.category}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground dark:text-brand-surface-foreground/55">
                          {featured.readTime}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground dark:text-brand-surface-foreground/55">
                          {featured.publishedAt}
                        </span>
                      </div>
                      <h2 className="text-3xl tracking-tighter md:text-4xl lg:text-5xl">
                        <Link to={`/blog/${featured.slug}`} className="transition-colors duration-200 hover:text-accent">
                          {featured.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                      <p className="text-base font-light leading-relaxed text-muted-foreground dark:text-brand-surface-foreground/72">
                        {featured.teaser}
                      </p>
                      <Button asChild size="lg" className="bg-foreground px-7 text-sm font-bold uppercase tracking-[0.2em] text-background hover:bg-accent hover:text-accent-foreground dark:bg-brand-surface-foreground dark:text-brand-surface dark:hover:bg-accent dark:hover:text-accent-foreground">
                        <Link to={`/blog/${featured.slug}`}>Artikel lesen</Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              )}

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {gridPosts.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                    className="flex"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="exp-card group flex w-full flex-col gap-4 border border-border p-8"
                    >
                      <div className="flex flex-wrap gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                          {post.category}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {post.readTime}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {post.publishedAt}
                        </span>
                      </div>
                      <h3 className="text-xl tracking-tighter transition-colors duration-200 group-hover:text-accent md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="text-base font-light leading-relaxed text-muted-foreground">
                        {post.teaser}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors duration-200 group-hover:text-accent">
                        Artikel lesen
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
