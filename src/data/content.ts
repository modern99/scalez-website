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
  /** Publikationsdatum im ISO-Format "YYYY-MM-DD" – Pflicht für Google for Jobs */
  datePosted: string;
  /** Bewerbungsfrist im ISO-Format "YYYY-MM-DD" – weglassen, wenn offen */
  validThrough?: string;
  /** Ort für Google Jobs, z.B. "Zürich" */
  addressLocality?: string;
  /** Kantonskürzel für Google Jobs, z.B. "ZH" */
  addressRegion?: string;
  /** Ländercode, Default "CH" – nur setzen, wenn nicht Schweiz */
  addressCountry?: string;
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
    datePosted: "2026-05-16",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "die-frage-vor-der-arbeitgeber-angst-haben",
    title: "Die eine Frage, vor der Arbeitgeber wirklich Angst haben",
    category: "Markt",
    readTime: "2 Min.",
    publishedAt: "9. Juli 2026",
    teaser:
      "Am Ende eines Gesprächs fragen die meisten nach Ferientagen oder Homeoffice. Es gibt eine Frage, die viel mehr über einen Arbeitgeber verrät – und fast niemand stellt sie.",
    intro:
      "Es gibt eine Frage, vor der Arbeitgeber richtig Angst haben. Und fast niemand stellt sie.",
    sections: [
      {
        id: "die-richtige-frage",
        title: "Die Frage, die wirklich alles zeigt",
        paragraphs: [
          "Am Ende eines Bewerbungsgesprächs fragen die meisten nach Ferientagen oder Homeoffice. Verständlich – aber es verrät Dir wenig.",
          "Die Frage, die wirklich alles zeigt, ist diese: Warum ist diese Stelle frei, und was ist mit der Person davor passiert?",
        ],
      },
      {
        id: "worauf-du-achten-solltest",
        title: "Achte auf das Wie, nicht nur auf das Was",
        paragraphs: [
          "Achte dabei weniger auf die Antwort selbst als darauf, wie sie kommt. Ruhig und ehrlich, inklusive dem, was nicht gut lief? Dann bist Du wahrscheinlich bei einem guten Arbeitgeber.",
          "Ausweichend, hektisch oder mit einem schnellen «die hat einfach nicht gepasst»? Dann weisst Du genug.",
        ],
      },
      {
        id: "du-pruefst-auch",
        title: "Du bewirbst Dich nicht nur – Du prüfst auch",
        paragraphs: [
          "Denn wie eine Firma über die Person redet, die vor Dir gegangen ist, ist ziemlich genau, wie sie eines Tages über Dich reden wird.",
          "Du bewirbst Dich nicht nur. Du prüfst auch. Vergiss das nie.",
        ],
      },
    ],
  },
  {
    slug: "immer-schneller-immer-besser-druck-im-bewerbungsprozess",
    title: "Immer schneller, immer besser, immer erreichbar. Und am Ende reicht es trotzdem nie.",
    category: "Prozess",
    readTime: "3 Min.",
    publishedAt: "7. Juli 2026",
    teaser:
      "Unternehmen, die sich wochenlang nicht melden. Kandidaten, die sich gewissenhaft vorbereiten und trotzdem in einer Endlosschleife aus Gesprächsrunden landen. Warum gute Prozesse nicht durch mehr Druck entstehen.",
    intro:
      "Wir leben in einer Leistungsgesellschaft, die jedes Jahr ein bisschen mehr verlangt. Mehr Tempo, mehr Flexibilität, mehr Perfektion. Auch von Dir, sobald Du Dich bewirbst. Und genau da scheitern heute viele Prozesse.",
    sections: [
      {
        id: "zwei-seiten-ein-problem",
        title: "Zwei Seiten desselben Problems",
        paragraphs: [
          "Auf der einen Seite Firmen, die eine Stelle ausschreiben und sich dann erst Wochen später melden. Bis das erste Gespräch steht, ist der gute Mensch längst weiter – oder innerlich raus.",
          "Auf der anderen Seite Du. Du schaufelst Dir in einem vollen Alltag bewusst Zeit frei, bereitest Dich vor, gibst Dir Mühe. Und im Gespräch steigen die Anforderungen mit jeder Runde. Noch eine Aufgabe, noch ein Termin, noch eine Erwartung. Das ist viel. Und es ist völlig in Ordnung, wenn sich das manchmal nach zu viel anfühlt.",
        ],
      },
      {
        id: "nicht-alleine-durch",
        title: "Du musst da nicht alleine durch",
        paragraphs: [
          "Was wir Dir sagen wollen, ist einfach: Du musst da nicht alleine durch. Bei ScaleZ gehört die Vorbereitung fest zu unserer Dienstleistung. Wir lassen Dich mit keinem Termin allein, sondern gehen mit Dir durch, was Dich erwartet, worauf es ankommt und wie Du im Gespräch zeigst, was in Dir steckt.",
          "Denn ein guter Prozess entsteht nicht durch mehr Druck. Sondern durch bessere Vorbereitung – von beiden Seiten.",
        ],
      },
    ],
  },
  {
    slug: "drei-zeichen-schlechter-arbeitgeber-bewerbungsgespraech",
    title: "Drei Dinge, an denen du einen schlechten Arbeitgeber schon im Bewerbungsgespräch erkennst",
    category: "Markt",
    readTime: "3 Min.",
    publishedAt: "30. Juni 2026",
    teaser:
      "Keines dieser Warnsignale steht im Inserat – trotzdem sagen sie mehr über den Job als jede Stellenbeschreibung. Drei Dinge, auf die du im nächsten Gespräch achten solltest.",
    intro:
      "Du sitzt im Bewerbungsgespräch, der erste Eindruck ist ganz okay – und trotzdem stimmt irgendetwas nicht. Meistens liegt es an einem dieser drei Dinge.",
    sections: [
      {
        id: "kein-normaler-arbeitstag",
        title: "Niemand kann dir sagen, wie ein normaler Arbeitstag wirklich aussieht",
        paragraphs: [
          "Wenn die Antwort schwammig bleibt, weiss dort selbst keiner so genau, wofür du kommen sollst. Das ist kein Zufall – das ist ein Zeichen. Betriebe, die wissen, was sie wollen, können es auch erklären.",
        ],
      },
      {
        id: "beim-lohn-wird-gedruckst",
        title: "Beim Lohn wird gedruckst",
        paragraphs: [
          "Wer beim Geld ausweicht, weicht später auch bei Ferien, Überstunden und Versprechen aus. Das Muster ist immer dasselbe. Wer auf Augenhöhe eingestellt, redet auch auf Augenhöhe über Geld.",
        ],
      },
      {
        id: "team-bleibt-unsichtbar",
        title: "Du lernst dein künftiges Team nicht kennen",
        paragraphs: [
          "Gute Betriebe zeigen dir, mit wem du arbeitest. Schlechte verstecken es. Wenn du nach dem Gespräch immer noch nicht weisst, wer neben dir sitzen wird, frag dich warum.",
          "Keine dieser Sachen steht im Inserat. Trotzdem sagen sie dir mehr über den Job als jede Stellenbeschreibung. Du musst nicht den erstbesten Job nehmen. Du darfst auswählen. Gerade jetzt.",
        ],
      },
    ],
  },
  {
    slug: "realitaetscheck-baulohn-schweiz",
    title: "Kleiner Realitätscheck für alle am Bau 👷",
    category: "Markt",
    readTime: "3 Min.",
    publishedAt: "26. Juni 2026",
    teaser:
      "Der Medianlohn im Schweizer Baugewerbe liegt 400 Franken unter dem nationalen Median – jeden Monat. Was das bedeutet und warum der Wechsel fast immer der grösste Lohnhebel ist.",
    intro:
      "Laut Bundesamt für Statistik liegt der Schweizer Medianlohn bei 7024 Franken brutto im Monat für eine Vollzeitstelle. Das Baugewerbe liegt bei 6616 Franken. Das sind 400 Franken weniger – und das jeden Monat.",
    sections: [
      {
        id: "die-zahl",
        title: "400 Franken. Jeden Monat.",
        paragraphs: [
          "Das klingt vielleicht nicht dramatisch. Aber 400 Franken pro Monat sind 4800 Franken im Jahr. Über fünf Jahre sind das fast 24'000 Franken. Geld, das andere Branchen einfach so auf dem Tisch haben.",
          "Der Abstand ist nicht riesig – aber er ist real. Und er summiert sich.",
        ],
      },
      {
        id: "kein-naturgesetz",
        title: "Das ist kein Naturgesetz",
        paragraphs: [
          "Der Medianlohn ist ein Durchschnittswert. Er sagt nichts darüber aus, was du persönlich verdienen kannst. Innerhalb der Baubranche ist die Spanne enorm: zwischen Regionen, zwischen Betrieben, zwischen Rollen. Wer weiss, wo er steht, hat eine ganz andere Ausgangslage.",
          "Das ist kein Schicksal, das ist ein Verhandlungsthema.",
        ],
      },
      {
        id: "der-hebel",
        title: "Der grösste Hebel heisst Wechsel",
        paragraphs: [
          "Wer auf eine interne Lohnerhöhung wartet, wartet oft lange. Wer den Markt kennt und bereit ist, den nächsten Schritt zu machen, sieht meistens viel schneller eine Veränderung auf dem Lohnzettel. Das ist keine Theorie – das sehen wir jeden Tag.",
          "Wenn du wissen willst, wo dein Lohn in deinem Bereich wirklich steht, schreib uns. Wir sehen die aktuellen Zahlen – und wir reden direkt.",
        ],
      },
    ],
  },
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

export function getJobPosting(slug: string) {
  return jobPostings.find((job) => job.slug === slug);
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
  employmentType→ z.B. "Festanstellung, 100%" (Format beibehalten – wird für
                  Google Jobs geparst: "Festanstellung, NN%" / "Festanstellung, NN–NN%")
  focus         → Branche · Ort, z.B. "Finanz · Zürich"
  teaser        → 1-2 Sätze Einleitung (erscheint auf der Übersichtsseite)
  compensation  → z.B. "CHF 120'000 - 150'000 / Jahr" oder "Nach Vereinbarung"
                  (Format beibehalten – wird für Google Jobs geparst)
  startDate     → z.B. "Ab sofort" / "Q3 2026"
  tasks         → 3-5 Stichpunkte (Aufgaben)
  requirements  → 3-5 Stichpunkte (Anforderungen)
  note          → z.B. "Diskrete Besetzung · Alle Angaben vertraulich"
  datePosted    → PFLICHT: Publikationsdatum ISO-Format, z.B. "2026-07-09" (= heute)

Optionale Felder (empfohlen für Google Jobs):
  validThrough    → Bewerbungsfrist ISO-Format, z.B. "2026-12-31"; weglassen wenn offen
  addressLocality → Ort, z.B. "Zürich"
  addressRegion   → Kantonskürzel, z.B. "ZH"
  addressCountry  → nur wenn nicht Schweiz, z.B. "DE" (Default: "CH")

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
  datePosted: "",
  addressLocality: "",
  addressRegion: "",
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
