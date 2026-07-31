import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import maxImg from "@/assets/max-schoenpflug.jpeg";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/data/content";
import { cn } from "@/lib/utils";
import Seo from "@/components/Seo";

const SITE_URL = "https://www.scale-z.ch";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    if (!post?.sections.length) {
      return;
    }

    setActiveSectionId(post.sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSectionId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    post.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [post]);

  if (!post) {
    return (
      <>
        <Seo
          title="Artikel nicht gefunden | ScaleZ Blog"
          description="Der gesuchte Blog-Beitrag existiert nicht mehr."
          path="/blog"
          noindex
        />
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Blog</p>
          <h1 className="mt-4 text-4xl tracking-tight">Diesen Artikel gibt es nicht.</h1>
          <Button asChild className="mt-8 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
            <Link to="/blog">Zur Blog-Übersicht</Link>
          </Button>
        </div>
      </section>
      </>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.teaser,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/og-image.png`,
    author: {
      "@type": "Person",
      name: "Max Schönpflug",
      jobTitle: "Gründer",
      worksFor: { "@type": "Organization", name: "ScaleZ GmbH", url: SITE_URL },
    },
    publisher: {
      "@type": "Organization",
      name: "ScaleZ GmbH",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/primary-logo.svg` },
    },
  };

  return (
    <>
      <Seo
        title={`${post.title} | ScaleZ Blog`}
        description={post.teaser ?? post.title}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-14">
        <div className="container max-w-6xl">
          <Button asChild variant="outline" className="mb-6 border-border px-5 hover:border-accent hover:bg-accent hover:text-accent-foreground sm:mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 shrink-0" />
              Zurück zum Blog
            </Link>
          </Button>
          <motion.div {...fadeUp} className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground sm:mb-6 sm:gap-3">
            <span className="border border-border px-3 py-1 text-accent">{post.category}</span>
            <span>{post.publishedAt}</span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 shrink-0 text-accent" />
              {post.readTime}
            </span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="mb-5 max-w-4xl hyphens-auto text-3xl tracking-tighter sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            {post.title}
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            {post.intro}
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <motion.aside
              {...fadeUp}
              className="h-fit min-w-0 text-foreground lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1"
            >
              <div className="border border-border bg-background p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Inhaltsverzeichnis</p>
                <nav className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-1">
                  {post.sections.map((section, index) => {
                    const isActive = activeSectionId === section.id;

                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setActiveSectionId(section.id)}
                        className={cn(
                          "group relative flex flex-col gap-1.5 overflow-hidden border py-3 pl-5 pr-4 transition-colors",
                          isActive
                            ? "border-accent bg-accent/5 text-foreground"
                            : "border-border hover:border-accent hover:text-accent",
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-blog-section"
                            className="absolute inset-y-0 left-0 w-1 bg-accent"
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}
                        <span
                          className={cn(
                            "relative text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                            isActive ? "text-accent" : "text-muted-foreground group-hover:text-accent",
                          )}
                        >
                          Kapitel {index + 1}
                        </span>
                        <span
                          className={cn(
                            "relative text-[0.9375rem] font-light leading-snug transition-colors",
                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                          )}
                        >
                          {section.title}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-6 border border-border bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Autor</p>
                <div className="mt-5 flex items-center gap-4">
                  <img
                    src={maxImg}
                    alt="Max Schönpflug"
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 shrink-0 object-cover sm:h-16 sm:w-16"
                  />
                  <div className="min-w-0">
                    <p className="text-base font-bold uppercase tracking-tight sm:text-lg">Max Schönpflug</p>
                    <p className="mt-1 text-sm font-light text-muted-foreground">Founder von ScaleZ</p>
                  </div>
                </div>
              </div>
            </motion.aside>

            <div className="min-w-0 space-y-0 border-t border-l border-border lg:col-start-1 lg:row-start-1">
              {post.sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="exp-card scroll-mt-24 border-b border-r border-border bg-card p-6 sm:p-8 sm:scroll-mt-28 md:p-10"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent sm:mb-4">
                    Abschnitt {index + 1}
                  </p>
                  <h2 className="mb-5 hyphens-auto text-xl tracking-tight sm:mb-6 sm:text-2xl md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="font-light leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
