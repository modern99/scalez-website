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
  /** Optional: Benefits/Vorteile, werden auf der Detailseite als dritte Spalte angezeigt */
  benefits?: string[];
  /** Optional: Schlussabsatz(-Absätze), erscheint am Ende der Detailseite */
  closingNote?: string[];
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
    slug: "bauingenieur-infrastruktur-bern",
    title: "Bauingenieur:in Infrastruktur (m/w/d)",
    region: "Kanton Bern",
    employmentType: "Festanstellung, 60–100%",
    focus: "Tiefbau · Bern",
    teaser:
      "Etabliertes, interdisziplinäres Ingenieur- und Planungsbüro im Raum Bern sucht eine:n Bauingenieur:in Infrastruktur mit Herzblut für den Tiefbau – Strassen, Werkleitungen, Entwässerung, Kunstbauten.",
    compensation: "CHF 90'000 – 115'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Du planst und projektierst Tiefbauvorhaben über alle Phasen, vom Vorprojekt bis zur Ausführung",
      "Du rechnest, dimensionierst und findest die elegante Lösung, wo andere nur das Problem sehen",
      "Du koordinierst mit Bauherrschaft, Behörden und Fachplanern auf Augenhöhe",
      "Du bist auf der Baustelle präsent und behältst Termine, Kosten und Qualität im Griff",
    ],
    requirements: [
      "Abschluss FH/ETH in Bauingenieurwesen",
      "Erfahrung im Tiefbau in der Schweiz oder frischer Tatendrang, wenn Du am Anfang stehst",
      "Sicherer Umgang mit gängiger Fach- und CAD-Software",
      "Verhandlungssicheres Deutsch",
    ],
    benefits: [
      "Mindestens 5 Wochen Ferien plus zusätzliche Brückentage",
      "13. Monatslohn und Beteiligung am Unternehmenserfolg",
      "Flexible Arbeitszeiten und Homeoffice-Möglichkeit",
      "Firmenfahrzeug, auch zur privaten Nutzung",
      "Gezielte Förderung Deiner Weiterbildung und echte Karrierechancen im Betrieb",
      "Moderne Arbeitsplätze an einem gut erreichbaren Standort",
      "Team-Events, gemeinsame Ausflüge und ein Sommerfest mit Begleitung",
      "Kostenloser Zugang zu externer Gesundheitsberatung",
      "Kaffee geht aufs Haus",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-07-28",
    addressLocality: "Bern",
    addressRegion: "BE",
  },
  {
    slug: "bauingenieur-verkehrsplanung-tiefbau-bern",
    title: "Bauingenieur:in Verkehrsplanung & Tiefbau (m/w/d)",
    region: "Kanton Bern",
    employmentType: "Festanstellung, 80–100%",
    focus: "Verkehrsplanung · Bern",
    teaser:
      "Renommiertes Ingenieurbüro im Raum Bern sucht eine:n Bauingenieur:in, die/der Verkehrsplanung und Tiefbau als ein spannendes Ganzes begreift – vom Kreisel bis zum Gesamtverkehrskonzept.",
    compensation: "CHF 95'000 – 120'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Du entwickelst Verkehrs- und Mobilitätslösungen für Gemeinden und Kantone",
      "Du planst und projektierst Tiefbau- und Strassenbauvorhaben von A bis Z",
      "Du jonglierst mit Verkehrsflüssen, Sicherheit und Raumnutzung und bringst sie in Einklang",
      "Du führst Projekte durch alle Phasen und bleibst dabei Ansprechperson für alle Beteiligten",
    ],
    requirements: [
      "Abschluss FH/ETH in Bauingenieurwesen",
      "Praxiserfahrung im Schweizer Tiefbau",
      "Interesse an der Schnittstelle zwischen Planung und baulicher Umsetzung",
      "Analytischer Kopf mit Sinn fürs Praktische",
      "Verhandlungssicheres Deutsch",
    ],
    benefits: [
      "Mindestens 5 Wochen Ferien plus zusätzliche Brückentage",
      "13. Monatslohn und Beteiligung am Unternehmenserfolg",
      "Flexible Arbeitszeiten und Homeoffice-Möglichkeit",
      "Firmenfahrzeug, auch zur privaten Nutzung",
      "Gezielte Förderung Deiner Weiterbildung und echte Karrierechancen im Betrieb",
      "Moderne Arbeitsplätze an einem gut erreichbaren Standort",
      "Team-Events, gemeinsame Ausflüge und ein Sommerfest mit Begleitung",
      "Kostenloser Zugang zu externer Gesundheitsberatung",
      "Kaffee geht aufs Haus",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-07-28",
    addressLocality: "Bern",
    addressRegion: "BE",
  },
  {
    slug: "projektleiter-siedlungswasserwirtschaft-werkleitungen",
    title: "Projektleiter Siedlungswasserwirtschaft und Werkleitungen (m/w/d)",
    region: "Cham, Zürich, Kemptthal (bald auch Pfäffikon SZ)",
    employmentType: "Festanstellung, 80–100%",
    focus: "Tiefbau · Zürich",
    teaser:
      "Extrem erfolgreiches Familienunternehmen, das die Energie- und Gebäudetechnik von morgen mitgestaltet, sucht eine:n Projektleiter:in Siedlungswasserwirtschaft und Werkleitungen mit echter Machermentalität.",
    compensation: "CHF 110'000 – 135'000 / Jahr",
    startDate: "Ab sofort",
    tasks: [
      "Du übernimmst die komplette Planung und Leitung anspruchsvoller Projekte im Bereich Werkleitungen und Siedlungswasserwirtschaft, vom ersten Konzept bis zur Realisierung",
      "Die präzise Ausarbeitung von Entwässerungskonzepten, technischen Berichten und komplexen Berechnungen liegt in Deiner Hand",
      "Du projektierst fortschrittliche Retentionen und Versickerungsanlagen und prägst damit die nachhaltige Infrastruktur von morgen",
      "Als Drehpunkt koordinierst Du Dich auf Augenhöhe mit Bauherrschaften, Gemeinden, Architekten und weiteren Projektbeteiligten",
      "Du erstellst klare Ausschreibungsunterlagen und garantierst die Einhaltung von Terminen, Kosten und Qualitätsstandards",
      "Du führst kleine, motivierte Planungsteams und unterstützt Deine Mitarbeitenden bei fachlichen Herausforderungen im Arbeitsalltag",
    ],
    requirements: [
      "Fundierte Ausbildung in Gebäudetechnik, Sanitärbereich, Tiefbau oder einer vergleichbaren technischen Richtung",
      "Weiterbildung als Fachperson für Grundstücksentwässerung VSA",
      "Mehrjährige Praxiserfahrung im Tiefbau, Werkleitungsbau oder in der Siedlungswasserwirtschaft",
      "Sicherer Umgang mit modernen CAD-Programmen, Kenntnisse in Revit oder AutoCAD von Vorteil",
      "Professionelles Auftreten, mitdenkender Machertyp mit stilsicherer Kommunikation auf Deutsch",
      "Selbstständige Arbeitsweise, Teamgeist und routinierter Umgang mit der Microsoft-Office-Palette",
    ],
    benefits: [
      "Flexible Arbeitszeiten und Homeoffice-Möglichkeit",
      "Moderne Technologie und ergonomisch eingerichtete Arbeitsplätze",
      "Individuelle Förderung Deiner beruflichen Weiterentwicklung",
      "Langfristige Anstellung in einem Familienunternehmen mit starkem Zusammenhalt",
      "Ehrliche Feedbackkultur und Raum für eigene Ideen",
      "Möglichkeit, Dich in der Ausbildung der nächsten Generation an Planungsfachkräften zu engagieren",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-07-29",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "service-elektroinstallateur-efz-kriens",
    title: "Service-Elektroinstallateur EFZ (m/w/d)",
    region: "Kanton Luzern",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektrotechnik · Kriens",
    teaser:
      "Etablierter Betrieb mit rund 300 Mitarbeitenden und 50 Lernenden im Raum Kriens sucht einen echten Macher für den Servicebereich – gelebte DU-Kultur, flache Hierarchien und starker Teamzusammenhalt statt starrer Strukturen.",
    compensation: "CHF 75'000 – 90'000 / Jahr",
    startDate: "Ab sofort",
    tasks: [
      "Du wickelst selbstständig komplexe Serviceaufträge im Bereich Starkstrom und Schwachstrom ab und löst technische Probleme direkt beim Kunden vor Ort",
      "Dein Einsatzgebiet ist extrem abwechslungsreich und reicht von modernen Wohnbauten bis hin zu grossen Industrieanlagen und Gewerbeobjekten",
      "Als Gesicht des Unternehmens pflegst Du den direkten Kundenkontakt und berätst die Auftraggeber kompetent sowie lösungsorientiert",
      "Zettelwirtschaft gibt es bei Dir nicht – Du erledigst Deine auftragsbezogenen administrativen Aufgaben maximal effizient und komplett digital",
      "Du bist ein echtes Vorbild auf der Baustelle und begleitest unsere Lernenden aktiv, um Dein wertvolles technisches Knowhow direkt weiterzugeben",
      "Du agierst bei jedem Einsatz extrem flexibel und bringst smarte Technik sowie höchste Qualität präzise auf den Punkt zusammen",
    ],
    requirements: [
      "Erfolgreich abgeschlossene Ausbildung als Elektroinstallateur EFZ oder Montage-Elektriker EFZ",
      "Handfeste Berufserfahrung im dynamischen Servicealltag",
      "Offene und kommunikative Art sowie positive Energie im Team",
      "Absolute Organisationsstärke und sicheres Auftreten im Kundenkontakt auf Augenhöhe",
      "Sicherer Umgang mit digitalen Tools sowie der gesamten MS-Office-Palette",
      "Pragmatischer Typ, der auch bei unerwarteten Problemen sofort die richtige Lösung parat hat",
    ],
    benefits: [
      "Geschäftsfahrzeug, das Du ausdrücklich auch privat nutzen darfst",
      "Eigenes Smartphone und Tablet für Deine Aufträge",
      "Finanzielle und zeitliche Unterstützung Deiner Weiterbildungspläne",
      "Etablierter Betrieb mit 300 Mitarbeitenden und fairen Sozialleistungen",
      "Offene Firmenkultur mit kurzen, direkten Entscheidungswegen",
      "Hohe Eigenverantwortung und Gestaltungsfreiraum im Arbeitsalltag",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-07-29",
    addressLocality: "Kriens",
    addressRegion: "LU",
  },
  {
    slug: "projektleiter-projektingenieur-infrastruktur-strassen-kunstbauten-zuerich",
    title: "Projektleiter und Projektingenieur Infrastruktur für Strassen und Kunstbauten (m/w/d)",
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Tiefbau · Zürich",
    teaser:
      "Extrem erfolgreiches, globales Ingenieurbüro in Zürich Oerlikon, das die Infrastruktur von morgen mitgestaltet, sucht eine:n Projektleiter:in und Projektingenieur:in Infrastruktur für Strassen und Kunstbauten mit echten Macherqualitäten.",
    compensation: "CHF 95'000 – 130'000 / Jahr",
    startDate: "Ab sofort",
    tasks: [
      "Du planst und leitest anspruchsvolle Projekte im kommunalen sowie kantonalen Tiefbau",
      "Du verantwortest die Projektierung von der ersten Studie bis zur finalen Inbetriebnahme",
      "Du erstellst technische Berichte, Kostenschätzungen und detaillierte Ausschreibungsunterlagen",
      "Du koordinierst Behörden, Fachplaner und alle weiteren involvierten Projektbeteiligten",
      "Du begleitest die Bauleitung während der gesamten Realisierungsphase vor Ort",
      "Du treibst den Einsatz von digitalen Planungsmethoden wie BIM aktiv voran",
      "Du integrierst nachhaltige Lösungen wie Schwammstadt-Konzepte und Klimaadaptation",
    ],
    requirements: [
      "Erfolgreich abgeschlossenes Studium als Bauingenieur:in an einer ETH oder FH",
      "Fundierte Berufserfahrung im Strassenbau, Werkleitungsbau oder Tiefbau",
      "Sichere Steuerung von Projekten in Bezug auf Qualität, Termine und Finanzen",
      "Professionelles und souveränes Auftreten gegenüber Bauherrschaften und Behörden",
      "Starkes unternehmerisches Denken und strukturiertes Handeln",
      "Stilsichere mündliche sowie schriftliche Kommunikation auf Deutsch",
      "Unbedingter Wille, Verantwortung zu übernehmen und selbstständig zu arbeiten",
    ],
    benefits: [
      "Flexible Arbeitszeiten und Homeoffice für Deine ideale Work-Life-Balance",
      "Moderne und top ausgestattete Büroräumlichkeiten in Zürich",
      "Kostenfreies Training im Fitnesscenter direkt im Gebäude",
      "Modernste digitale Tools und Systeme für Deine tägliche Arbeit",
      "Zugang zu attraktiven Weiterbildungsangeboten und klaren Karriereperspektiven",
      "Austausch in einem internationalen Netzwerk mit Spezialisten auf der ganzen Welt",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-07-29",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "zeichner-efz-konstrukteur-kunstbauten-zuerich",
    title: "Zeichner EFZ Konstrukteur Kunstbauten (m/w/d)",
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Ingenieurbau · Zürich",
    teaser:
      "Extrem erfolgreiches, globales Büro für Ingenieurwesen und Architektur in Zürich sucht eine:n Zeichner:in EFZ Konstrukteur:in Kunstbauten mit echten Macherqualitäten.",
    compensation: "CHF 70'000 – 87'000 / Jahr",
    startDate: "Ab sofort",
    tasks: [
      "Du erstellst Projektpläne und Ausführungspläne für Kunstbauten wie Brücken, Stützmauern und Durchlässe",
      "Du modellierst tragende Konstruktionen und Infrastrukturbauwerke in 3D mit Civil 3D oder Revit",
      "Du übernimmst die Koordination und führst Kollisionsprüfungen der Fachmodelle im BIM-Gesamtmodell durch",
      "Du setzt statische Vorgaben sowie Detailkonstruktionen in Stahlbeton und Verbund zeichnerisch präzise um",
      "Du pflegst die Dokumentation und sicherst die Qualität der Pläne nach strikten Projektstandards",
      "Du unterstützt die Projektleitung aktiv bei anspruchsvollen Projekten von der Vorplanung bis zur Ausführung",
    ],
    requirements: [
      "Erfolgreich abgeschlossene Ausbildung als Zeichner:in EFZ Fachrichtung Ingenieurbau oder als Konstrukteur:in",
      "Fundierte Praxiserfahrung in der 3D-Modellierung mit Tools wie Civil 3D oder Revit",
      "Kenntnis der fachlichen und zeichnerischen Anforderungen im konstruktiven Ingenieurbau und bei Kunstbauten",
      "Idealerweise bereits Erfahrung mit der BIM-Methodik und Verständnis der Modellkoordination",
      "Extrem genaue, fehlerfreie Arbeitsweise mit sehr hohem Qualitätsanspruch",
      "Nahtlose Teamintegration und strukturierte Zusammenarbeit mit der Projektleitung",
    ],
    benefits: [
      "Echte Homeoffice-Möglichkeiten und flexible Arbeitszeiten für Deine Work-Life-Balance",
      "Top moderne Büros in Zürich mit kostenfreier Nutzung des Fitnesscenters im Gebäude",
      "Teil eines weltweiten Netzwerks mit internationalem Austausch unter absoluten Spezialisten",
      "Zugriff auf modernste digitale Arbeitsmittel und die aktuellste Planungssoftware",
      "Langfristige Förderung durch attraktive Weiterbildungsangebote und klare Perspektiven",
      "Mitwirkung an innovativen und nachhaltigen Projekten, die unsere Infrastruktur von morgen prägen",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-07-29",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "verkaufsingenieur-hlk-gebaeudeautomation-zuerich",
    title: "Verkaufsingenieur HLK und Gebäudeautomation (m/w/d)",
    region: "Zürich mit Reisegebiet Basel und Aargau",
    employmentType: "Festanstellung, 100%",
    focus: "Gebäudetechnik · Zürich",
    teaser:
      "Extrem erfolgreiches Technologieunternehmen, das die Energie- und Gebäudetechnik von morgen mitgestaltet, sucht eine:n Verkaufsingenieur:in HLK und Gebäudeautomation mit echten Macherqualitäten für den Grossraum Basel und Aargau.",
    compensation: "CHF 97'000 – 117'000 / Jahr (ohne Bonus)",
    startDate: "Ab sofort",
    tasks: [
      "Du betreust HLK-Planer sowie Installateure und baust langfristige Kundenbeziehungen im Grossraum Basel aktiv aus",
      "Du berätst Kunden kompetent und verkaufst moderne Regeltechnikkomponenten sowie komplette HLK-Systeme",
      "Du kalkulierst Offerten komplett selbstständig und führst die Verhandlungen bis zum erfolgreichen Abschluss",
      "Du unterstützt Anspruchsgruppen mit Deiner technischen Expertise bei komplexen Ausschreibungen und Projekten",
      "Du begleitest strategische Grossprojekte von der ersten Planung bis zur finalen Abwicklung",
      "Du arbeitest bei der Projektumsetzung durchgehend eng mit den internen Fachabteilungen zusammen",
    ],
    requirements: [
      "Technische Grundausbildung in Heizung, Lüftung, Klima oder Gebäudeautomation",
      "Fundierte und nachweisbare Verkaufserfahrung im HLK-Bereich",
      "Idealerweise ergänzende betriebswirtschaftliche Weiterbildung",
      "Begeisterung für technische Beratung und Offenheit für neue Entwicklungen in der Gebäudeautomation",
      "Hohe Reisebereitschaft für das Gebiet Basel und Aargau, Wohnsitz idealerweise direkt in dieser Region",
      "Fliessendes Deutsch, gute Englischkenntnisse von Vorteil",
    ],
    benefits: [
      "6 Wochen Ferien für eine optimale Erholung neben Deinem Arbeitsalltag",
      "Feste finanzielle Pauschale für die geschäftliche Nutzung Deines Privatautos",
      "Vergünstigtes ÖV-Abo sowie Gratisparkplätze direkt vor Ort",
      "Vielfältige Weiterbildungsmöglichkeiten für Deine persönliche und fachliche Entwicklung",
      "Direkter Zugang zu exklusiven Aktienplänen für Mitarbeitende",
      "Flexible Arbeitsmodelle und mobiles Arbeiten für eine ausgewogene Work-Life-Balance",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-08-03",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "projektleiter-gebaeudeautomation",
    title: "Projektleiter Gebäudeautomation (m/w/d)",
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Gebäudetechnik · Zürich",
    teaser:
      "Gestalte die Zukunft intelligenter Gebäude! Leite spannende Projekte in der Gebäudeautomation mit einem idealen Mix aus Büro- und Praxisanteil.",
    compensation: "CHF 85'000 – 110'000 / Jahr 75000",
    startDate: "Ab sofort",
    tasks: [
      "Eigenverantwortliche Leitung von Projekten im Bereich Gebäudeautomation (KNX, SPS, DALI)",
      "Programmierung, Parametrierung und Inbetriebnahme der Anlagen direkt vor Ort beim Kunden",
      "Erstellung von technischen Konzepten, Pflichtenheften und der finalen Anlagendokumentation",
      "Fachliche Führung und Koordination der beteiligten internen und externen Montage-Partner",
    ],
    requirements: [
      "Abgeschlossene Grundausbildung als Elektroinstallateur/in EFZ, Automatiker/in EFZ oder ähnlich",
      "Weiterbildung auf Stufe HF/FH (z. B. Elektrotechnik, Systemtechnik) oder aktuell in Ausbildung dazu",
      "Erste fundierte Berufserfahrung in der Programmierung von Systemen (z. B. KNX)",
      "Strukturierte Arbeitsweise, kundenorientiertes Auftreten sowie fliessendes Deutsch",
    ],
    benefits: [
      "Flexible Jahresarbeitszeit und die Möglichkeit für Home-Office",
      "Grosszügige zeitliche und finanzielle Unterstützung bei fachlichen Weiterbildungen",
      "Modernes Firmenfahrzeug, das auch privat genutzt werden kann",
      "Ein kollegiales Team mit kurzen Entscheidungswegen in einer krisensicheren Branche",
    ],
    closingNote: [
      "Klingt das nach Deinem nächsten Karriereschritt? Dann freuen wir uns auf deine unkomplizierte Bewerbung mit Lebenslauf.",
      "Für erste Fragen steht dir unser Team jederzeit gerne zur Verfügung. Wir prüfen dein Dossier schnell und diskret.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-08-06",
    validThrough: "2026-09-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "12-jahre-erfahrung-aber-nicht-ueber-29",
    title: "12 Jahre Erfahrung. Aber bitte nicht über 29.",
    category: "Markt",
    readTime: "2 Min.",
    publishedAt: "30. Juli 2026",
    teaser:
      "Ein Unternehmen sucht jemanden mit 12 Jahren Erfahrung – Bedingung: nicht älter als 29. Vier Sprachen, vier Programme, sofort einsatzbereit, günstig. Und wundert sich, warum die Stelle seit einem halben Jahr offen ist.",
    intro:
      "Gesucht wird jemand mit 12 Jahren Erfahrung. Bedingung: nicht älter als 29. Rechnen wir das kurz nach.",
    sections: [
      {
        id: "die-rechnung-die-nicht-aufgeht",
        title: "Die Rechnung, die nicht aufgeht",
        paragraphs: [
          "Ausbildung oder Studium fertig. Die ersten Jahre im Job gelernt. Verantwortung übernommen. Fachwissen aufgebaut. Vielleicht schon geführt. Und das alles bis zum 29. Lebensjahr.",
          "Zusätzlich soll die Person natürlich in vier Sprachen verhandlungssicher sein, vier Programme im Schlaf beherrschen, sofort einsatzbereit sein und ins Team passen wie angegossen. Ach ja, und bitte nicht zu teuer.",
        ],
      },
      {
        id: "kein-fachkraeftemangel",
        title: "Das ist kein Fachkräftemangel",
        paragraphs: [
          "Danach wundert sich das Unternehmen, warum die Stelle seit einem halben Jahr offen ist. Und nennt es Fachkräftemangel.",
          "Nein. Ihr sucht keine Fachkraft. Ihr sucht ein Wunschprofil zum Schnäppchenpreis.",
        ],
      },
      {
        id: "erfahrung-oder-potenzial",
        title: "Erfahrung oder Potenzial – nicht beides zum Nulltarif",
        paragraphs: [
          "12 Jahre Erfahrung entstehen nicht mit 25. Kompetenz braucht Zeit, und Zeit lässt sich nicht überspringen. Wer viel Erfahrung will, muss ein gewisses Alter akzeptieren. Wer nur junge Leute will, muss bereit sein, sie selbst aufzubauen.",
          "Beides gleichzeitig verlangen, funktioniert nicht. Entweder Ihr sucht Erfahrung oder Ihr sucht Potenzial. Aber hört auf, beides maximal zu fordern und dann so zu tun, als gäbe es niemand Passendes.",
        ],
      },
    ],
  },
  {
    slug: "es-hat-gematcht",
    title: "Es hat gematcht. Nein, das hier ist keine Dating-App.",
    category: "Direct Search",
    readTime: "2 Min.",
    publishedAt: "28. Juli 2026",
    teaser:
      "Eine Fachkraft, die seit Monaten unterfordert war. Eine Firma, die seit Monaten die falsche Person gesucht hat. Beide wussten nichts voneinander – bis wir sie verbunden haben.",
    intro:
      "Nein, das hier ist keine Dating-App. Aber ehrlich, im Kern machen wir genau das: Wir bringen zwei Seiten zusammen, die sich sonst nie gefunden hätten.",
    sections: [
      {
        id: "das-match-dieser-woche",
        title: "Das Match dieser Woche",
        paragraphs: [
          "Diese Woche hat es wieder gematcht. Eine Fachkraft, die seit Monaten unterfordert war. Eine Firma, die seit Monaten die falsche Person gesucht hat.",
          "Beide wussten nichts voneinander – bis wir sie verbunden haben.",
        ],
      },
      {
        id: "praktisch-jede-woche",
        title: "So läuft das bei uns – praktisch jede Woche",
        paragraphs: [
          "Kein Zufall, kein Glück. Das ist unser Alltag. Wir kennen die Menschen und wir kennen die Firmen – und wir sehen die Verbindungen, die auf den ersten Blick niemand sieht.",
        ],
      },
      {
        id: "dein-match",
        title: "Vielleicht ist Dein Match einfach noch nicht gefunden worden",
        paragraphs: [
          "Wenn sich Dein aktueller Job nicht mehr richtig anfühlt, liegt das selten daran, dass es für Dich nichts Besseres gibt. Meistens liegt es daran, dass Du und die richtige Firma sich einfach noch nicht gefunden haben.",
          "Schreib uns. Vielleicht sind wir diese Woche schon dabei, Dein Match zu finden.",
        ],
      },
    ],
  },
  {
    slug: "lohnjahr-2025-baugewerbe-realitaetscheck",
    title: "2025 war das beste Lohnjahr seit 2009 – zumindest auf dem Papier.",
    category: "Markt",
    readTime: "3 Min.",
    publishedAt: "22. Juli 2026",
    teaser:
      "Reallohnplus von 1,6 Prozent, der stärkste Anstieg seit 16 Jahren – die Schlagzeilen feiern das historische Lohnjahr. Am Bau kommt davon fast nichts an.",
    intro:
      "2025 war laut Bundesamt für Statistik das beste Lohnjahr der Schweiz seit 2009. Zumindest auf dem Papier.",
    sections: [
      {
        id: "das-historische-lohnjahr",
        title: "Das historische Lohnjahr",
        paragraphs: [
          "Das Bundesamt für Statistik meldet ein Reallohnplus von 1,6 Prozent – der stärkste Anstieg seit 16 Jahren. Die Schlagzeilen feierten das als grosse Erleichterung für alle Arbeitnehmenden.",
          "Für alle. Ausser für Dich, wenn Du am Bau arbeitest.",
        ],
      },
      {
        id: "1-3-statt-3-1-prozent",
        title: "1,3 statt 3,1 Prozent",
        paragraphs: [
          "Während die Löhne in Chemie und Pharma um 3,1 Prozent stiegen, gab es im Baugewerbe gerade mal 1,3 Prozent. Nicht real. Nominal. Vor Teuerung.",
          "Rechnest Du die Inflation raus, bleibt am Bau fast nichts mehr übrig von diesem angeblich historischen Lohnjahr.",
        ],
      },
      {
        id: "der-trick-mit-dem-durchschnitt",
        title: "Der Trick mit dem Durchschnitt",
        paragraphs: [
          "Das ist der Trick an Durchschnittszahlen. Sie klingen gut, weil sie die glücklichen und die vergessenen Branchen einfach zusammenrechnen.",
          "Am Bau wird geschuftet, bei Wind, Kälte und Hitze. Und ausgerechnet dort kommt am wenigsten an.",
        ],
      },
      {
        id: "was-das-fuer-dich-heisst",
        title: "Was das für Dich heisst",
        paragraphs: [
          "Wenn sich Deine letzte Lohnerhöhung nicht nach 1,6 Prozent angefühlt hat, dann täuscht Dich Dein Gefühl nicht.",
          "Der Durchschnitt lügt nicht. Aber er erzählt auch nicht Deine Geschichte.",
        ],
      },
    ],
  },
  {
    slug: "arbeitslosenquote-sinkt-realitaetscheck",
    title: "2,9 Prozent Arbeitslosigkeit – klingt gut. Ist aber keine gute Nachricht.",
    category: "Markt",
    readTime: "3 Min.",
    publishedAt: "14. Juli 2026",
    teaser:
      "Die Arbeitslosenquote sinkt auf 2,9 Prozent – die Schlagzeile klingt nach Entspannung. Die SECO-Zahlen vom 6. Juli erzählen darunter eine ganz andere Geschichte.",
    intro:
      "Letzte Woche ging eine Zahl durch die Medien: Die Arbeitslosenquote sinkt auf 2,9 Prozent. Klingt nach Entspannung. Ist aber keine.",
    sections: [
      {
        id: "die-schlagzeile-truegt",
        title: "Die Schlagzeile trügt",
        paragraphs: [
          "Wer die SECO-Zahlen vom 6. Juli genauer liest, findet darunter etwas anderes. Gegenüber dem Vorjahr sind heute 10'874 Menschen mehr arbeitslos. Ein Plus von 8,6 Prozent – in einem einzigen Jahr.",
          "Davon steht nichts in der Schlagzeile. Die Schlagzeile zeigt nur die eine Zahl, die gerade gut aussieht.",
        ],
      },
      {
        id: "die-zahl-ueber-die-niemand-redet",
        title: "Die Zahl, über die kaum jemand redet",
        paragraphs: [
          "22'896 Menschen suchen seit über einem Jahr einen Job. Das sind 31,8 Prozent mehr als vor einem Jahr.",
          "Lies das nochmal in Ruhe. Fast ein Drittel mehr Menschen, die sich bewerben und bewerben – und einfach nichts hören.",
        ],
      },
      {
        id: "warum-der-sommer-taeuscht",
        title: "Warum der Sommer täuscht",
        paragraphs: [
          "Der Rückgang im Juni? Saisonbereinigt liegt die Quote unverändert bei 3,1 Prozent. Im Sommer laufen die Baustellen, das drückt die Quote. Im Herbst dreht sich das wieder.",
          "Der Markt ist also nicht plötzlich besser geworden. Er sieht im Sommer nur so aus.",
        ],
      },
      {
        id: "was-das-fuer-dich-heisst",
        title: "Was das für Dich heisst",
        paragraphs: [
          "Der Markt ist nicht schlechter geworden. Aber er ist härter geworden. Rausfallen geht schneller, zurückkommen dauert länger.",
          "Wer wechselt, sollte aus einer Position der Stärke heraus wechseln, nicht aus der Not. Und wer gerade sicher im Job sitzt, hat genau jetzt die beste Verhandlungsposition. Nicht erst dann, wenn es brennt.",
        ],
      },
    ],
  },
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
  benefits        → optional, Stichpunkte (Vorteile), erscheint als dritte Spalte auf
                    der Detailseite; weglassen, wenn keine Angaben vorliegen
  closingNote     → optional, Absätze (string[]), erscheinen am Ende der Detailseite;
                    nur für Einzelfälle, weglassen im Normalfall

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
  benefits: [
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
