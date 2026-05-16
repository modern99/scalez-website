export interface JobPosting {
  slug: string;
  title: string;
  region: string;
  employmentType: string;
  focus: string;
  teaser: string;
  compensation: string;
  startDate: string;
  tasks: string[];
  requirements: string[];
  note: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  teaser: string;
  intro: string;
  sections: ArticleSection[];
}

export const jobPostings: JobPosting[] = [
  {
    slug: "gesamtleiter-architektur-ausfuehrungsplanung",
    title: "Gesamtleiter Architektur und Ausführungsplanung (m/w/d)",
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Architektur · Zürich",
    teaser:
      "Ein über hundertjähriges Schweizer Traditionsunternehmen in Architektur und Generalplanung sucht eine Persönlichkeit, die Planungsprozesse von der Skizze bis zur Ausführung souverän leitet – mit grossem Gestaltungsspielraum im Herzen Zürichs.",
    compensation: "Nach Vereinbarung",
    startDate: "Ab sofort",
    tasks: [
      "Du trägst die Hauptverantwortung für den reibungslosen Ablauf sämtlicher Planungsschritte von der ersten Ideenskizze bis zur finalen Umsetzung",
      "Die intelligente Steuerung und Überwachung aller Projektphasen liegt in Deinen fähigen Händen",
      "Für Deine tägliche Arbeit greifst Du auf modernste Werkzeuge und zukunftsweisende digitale Methoden zurück",
      "Du bildest die zentrale kommunikative Brücke zwischen der Bauherrschaft, externen Partnern und Deinem internen Team",
      "Dabei findest Du stets die perfekte Balance zwischen den Wünschen der Kunden und den wirtschaftlichen Zielen des Architekturbüros",
    ],
    requirements: [
      "Ein erfolgreich absolviertes Architekturstudium bildet Dein solides fachliches Fundament",
      "Du hast bereits weitreichende Praxiserfahrung mit anspruchsvollen Schweizer Bauvorhaben gesammelt",
      "Deine strukturierte Denkweise wird durch ein starkes kaufmännisches und kundenorientiertes Bewusstsein optimal ergänzt",
      "Du bist ein absolutes Kommunikationstalent und weisst genau, wie man eine Gruppe erfolgreich anleitet und motiviert",
      "Du brennst für herausragende Baukunst und schätzt gleichzeitig geordnete, saubere Abläufe",
      "Verhandlungssicheres Deutsch ist zwingend erforderlich – jede weitere Landessprache oder Englisch ist ein willkommener Bonus",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
  },
];

export const blogPosts: BlogPost[] = [];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

// ─────────────────────────────────────────────────────────────
// TEMPLATES – Einfach kopieren, ausfüllen und in das jeweilige
// Array (jobPostings / blogPosts) einfügen.
// ─────────────────────────────────────────────────────────────

/*
JOB-TEMPLATE – Pflichtfelder:
  slug          → URL-Slug, z.B. "cfo-zuerich" (nur lowercase, Bindestriche)
  title         → Jobtitel inkl. (m/w/d), z.B. "CFO (m/w/d)"
  region        → z.B. "Kanton Zürich" / "Schweizweit"
  employmentType→ z.B. "Festanstellung, 100%"
  focus         → Branche · Ort, z.B. "Finanz · Zürich"
  teaser        → 1-2 Sätze Einleitung (erscheint auf der Übersichtsseite)
  compensation  → z.B. "CHF 120'000 - 150'000 / Jahr" oder "Nach Vereinbarung"
  startDate     → z.B. "Ab sofort" / "Q3 2026"
  tasks         → 3-5 Stichpunkte (Aufgaben)
  requirements  → 3-5 Stichpunkte (Anforderungen)
  note          → z.B. "Diskrete Besetzung · Alle Angaben vertraulich"

{
  slug: "",
  title: "",
  region: "",
  employmentType: "",
  focus: "",
  teaser: "",
  compensation: "",
  startDate: "",
  tasks: [
    "",
    "",
    "",
  ],
  requirements: [
    "",
    "",
    "",
  ],
  note: "Diskrete Besetzung · Alle Angaben vertraulich",
},
*/

/*
BLOG-TEMPLATE – Pflichtfelder:
  slug        → URL-Slug, z.B. "wie-ein-gutes-briefing-aussieht"
  title       → Artikeltitel
  category    → z.B. "Direct Search" / "Prozess" / "Markt"
  readTime    → z.B. "5 Min."
  publishedAt → z.B. "29. April 2026"
  teaser      → 1-2 Sätze (erscheint auf der Übersichtsseite)
  intro       → Einleitungsabsatz (1-3 Sätze, kein Titel)
  sections    → Array von Abschnitten; je Abschnitt:
      id          → Anker-ID (lowercase, Bindestriche)
      title       → Zwischentitel
      paragraphs  → Array mit 1-3 Absätzen

{
  slug: "",
  title: "",
  category: "",
  readTime: "",
  publishedAt: "",
  teaser: "",
  intro: "",
  sections: [
    {
      id: "",
      title: "",
      paragraphs: [
        "",
        "",
      ],
    },
    {
      id: "",
      title: "",
      paragraphs: [
        "",
      ],
    },
  ],
},
*/
