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
    slug: "gesamtleiter-architektur-ausfuehrungsplanung-zuerich",
    title: "Gesamtleiter Architektur und Ausführungsplanung (m/w/d)",
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Architektur · Zürich",
    teaser:
      "Landesweit bekanntes Traditionsunternehmen im Bereich Architektur und Generalplanung sucht eine erfahrene Planungsleitung für das dynamische Büro mitten im Zürcher Industriequartier.",
    compensation: "CHF 125'000 – 145'000 / Jahr",
    startDate: "Nach Vereinbarung",
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
      "Verhandlungssicheres Deutsch ist zwingend erforderlich; weitere Landessprachen oder Englisch sind ein willkommener Bonus",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "lohn-nach-vereinbarung",
    title: "«Lohn nach Vereinbarung» – und dann wundert man sich",
    category: "Markt",
    readTime: "3 Min.",
    publishedAt: "25. Juni 2026",
    teaser:
      "Fünf Jahre Erfahrung, drei Sprachen, Teamplayer – und ganz am Ende: Lohn nach Vereinbarung. Warum schlechte Stelleninserate die besten Kandidaten kosten.",
    intro:
      "Schau Dir mal ein durchschnittliches Stelleninserat in der Schweiz an. Fünf Jahre Erfahrung, drei Sprachen, Teamplayer, belastbar, flexibel. Und ganz am Ende steht dann: Lohn nach Vereinbarung. Übersetzt heisst das: Wir wollen alles, sagen aber nicht, was wir zahlen.",
    sections: [
      {
        id: "das-inserat",
        title: "Das Inserat, das schon beim Lesen anstrengt",
        paragraphs: [
          "Kein Wunder, dass sich kaum jemand meldet. Die guten Leute haben längst einen Job. Sie haben keine Lust, sich für ein Inserat zu bewerben, das schon beim Lesen anstrengend ist. Sie scrollen weiter – oder sie kommen gar nicht erst auf die Idee zu suchen, weil sie niemand direkt anspricht.",
          "Wer heute jemanden will, muss konkret werden. Was macht man wirklich den ganzen Tag? Was verdient man? Und warum sollte man ausgerechnet hier anfangen?",
        ],
      },
      {
        id: "die-luecke",
        title: "«Lohn nach Vereinbarung» ist kein Geheimnis – es ist ein Signal",
        paragraphs: [
          "Unternehmen, die den Lohn nicht nennen, senden damit eine klare Botschaft: Wir verhandeln gern zu unseren Gunsten. Qualifizierte Kandidaten lesen das genau so. Sie bewerben sich lieber dort, wo man ihnen auf Augenhöhe begegnet.",
          "Wer Transparenz scheut, verliert die Kandidaten, die Optionen haben – also genau die, die man eigentlich will.",
        ],
      },
      {
        id: "was-funktioniert",
        title: "Was heute wirklich funktioniert",
        paragraphs: [
          "Konkrete Angaben. Ein ehrliches Bild des Alltags. Ein Lohnband, das zeigt, dass man es ernst meint. Das reicht schon, um aus der Masse herauszustechen – weil die Messlatte so tief liegt.",
          "Alles andere ist Zeitverschwendung. Für beide Seiten. Und genau deshalb suchen wir bei ScaleZ nicht über Inserate – wir sprechen direkt mit den Leuten, die wirklich passen könnten.",
        ],
      },
    ],
  },
  {
    slug: "benzin-wird-scho-wieder-tueurer",
    title: "«Benzin wird scho wieder tüürer!» ⛽",
    category: "Markt",
    readTime: "3 Min.",
    publishedAt: "16. Mai 2026",
    teaser:
      "Der Schweizer Markt für Bauwesen und Engineering dreht sich rasend schnell – qualifizierte Fachkräfte haben traumhafte Optionen, während Firmen händeringend nach guten Dossiers suchen.",
    intro:
      "Ehrlich gesagt beschäftigt uns gerade ein ganz anderes Thema als der Benzinpreis. Der Schweizer Markt für Bauwesen und Engineering dreht sich momentan rasend schnell – mit grossen Chancen auf beiden Seiten.",
    sections: [
      {
        id: "marktlage",
        title: "Zwei Welten, ein Markt",
        paragraphs: [
          "Für qualifizierte Fachkräfte bieten sich fantastische Optionen. Der nächste Karriereschritt ist greifbar nah. Auf der anderen Seite verzweifeln unzählige Zürcher Firmen beinahe. Gute Dossiers fehlen schlichtweg. Endlose Besetzungszeiten kosten unnötig viel Geld und rauben wertvolle Nerven.",
        ],
      },
      {
        id: "das-paradox",
        title: "Das verborgene Potenzial",
        paragraphs: [
          "Wir tauschen uns täglich mit hervorragenden Leuten aus. Diese Talente sind oft absolut bereit für eine Luftveränderung. Proaktiv suchen sie jedoch fast nie nach neuen Stellen. Zudem kontaktieren oft die völlig falschen Betriebe diese wertvollen Kandidaten.",
          "Da mues me sich nöd wundere wänn nüt passiert.",
        ],
      },
      {
        id: "scalez-ansatz",
        title: "Qualität statt Masse",
        paragraphs: [
          "Genau hier setzen wir mit ScaleZ den Hebel an. Blindes Verschicken von Lebensläufen gibt es bei uns nicht. Bei uns zählt ausschliesslich echte Qualität: Wir bauen tragfähige Beziehungen auf, verstehen den lokalen Markt im Detail, machen verborgene Chancen sofort sichtbar und verbinden grossartige Menschen zielgerichtet mit optimalen Arbeitgebern.",
          "Mit ScaleZ bauen wir das Fundament für modernes Recruiting im Bereich Construction und Engineering.",
        ],
      },
    ],
  },
];

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
