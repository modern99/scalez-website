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
    validThrough: "2026-10-28",
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
    validThrough: "2026-10-28",
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
    validThrough: "2026-10-29",
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
    validThrough: "2026-10-29",
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
    validThrough: "2026-10-29",
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
    validThrough: "2026-10-29",
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
    validThrough: "2026-11-03",
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
  {
    slug: "servicemonteur-elektro",
    title: "Servicemonteur Elektro (m/w/d)",
    region: "Grossraum Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektroinstallation · Zürich",
    teaser:
      "Selbstständig unterwegs und nah am Kunden! Wir suchen einen engagierten Servicemonteur Elektro für vielseitige Einsätze im Raum Zürich.",
    compensation: "CHF 78'000 – 92'000 / Jahr inkl. Firmenfahrzeug (auch für den Arbeitsweg)",
    startDate: "Ab sofort",
    tasks: [
      "Selbstständige Abwicklung von Service-, Unterhalts- und Reparaturaufträgen bei Privat- und Gewerbekunden",
      "Fehlersuche und Behebung von Störungen an elektrischen Anlagen sowie Ausführung von Kleinumbauten",
      "Erstellen von sauberen Rapporten und Ausmassen direkt vor Ort beim Kunden",
      "Kundenberatung vor Ort bezüglich kleinerer technischer Anpassungen und Erweiterungen",
    ],
    requirements: [
      "Abgeschlossene Berufslehre als Elektroinstallateur EFZ oder Montage-Elektriker EFZ",
      "Erste Berufserfahrung im Servicebereich oder in der selbstständigen Kundenbetreuung von Vorteil",
      "Führerausweis Kat. B ist zwingend erforderlich",
      "Kundenorientiertes, gepflegtes Auftreten sowie einwandfreie Deutschkenntnisse",
    ],
    benefits: [
      "Eigenes, top ausgerüstetes Servicefahrzeug zur privaten Nutzung",
      "Hohe Eigenverantwortung und abwechslungsreiche Kundeneinsätze ohne Schichtarbeit",
      "Zweiundzwanzig bis dreissig Ferientage sowie volle Unterstützung bei fachlichen Weiterbildungen",
      "Ein eingespieltes, kollegiales Team mit flachen Hierarchien",
    ],
    closingNote: [
      "Du bewirbst Dich nicht ins Leere. Wir prüfen Deine Unterlagen umgehend und nehmen innerhalb kürzester Zeit direkt Kontakt mit Dir auf.",
      "Wir bereiten Dich optimal auf das Gespräch vor und begleiten Dich diskret durch den gesamten Prozess bis zur erfolgreichen Anstellung.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-08-06",
    validThrough: "2026-09-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "elektroinstallateur-efz-teamleiter-service-unterhalt-zuerich",
    title: "Elektroinstallateur:in EFZ als Teamleiter:in Service & Unterhalt (m/w/d)",
    region: "Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Elektro / Gebäudetechnik · Zürich",
    teaser:
      "Vom Monteur zur Führungskraft. Leite in Zürich eigene Service- und Umbauprojekte im Elektrobereich und führe dein eigenes Montageteam. Du steuerst AVOR, Materialplanung und Ausführung, bist direkte Ansprechperson für Kundschaft und Planer und arbeitest mit modernen digitalen Werkzeugen statt Zettelwirtschaft. Ein etablierter Elektro-Betrieb mit ausgezeichneter Arbeitgeberkultur sucht dich unbefristet.",
    compensation: "CHF 84'500 – 95'000 / Jahr Nach Vereinbarung",
    startDate: "Ab sofort",
    tasks: [
      "Eigenverantwortliche Leitung von Service-, Umbau- und Neubauprojekten in Gewerbe, Industrie und Wohnbau, von der Planung bis zur Übergabe",
      "Fachliche Führung und Einsatzplanung deines Montageteams sowie Begleitung der Lernenden",
      "Steuerung von AVOR, Materialbewirtschaftung und Baustellenadministration mit modernen digitalen Hilfsmitteln",
      "Direkte Zusammenarbeit mit Kundschaft, Architektinnen und Planern über den gesamten Projektverlauf",
      "Sicherstellung von Qualität, Termintreue und Arbeitssicherheit auf deinen Baustellen",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Elektroinstallateur:in EFZ mit mehrjähriger Praxis",
      "Erfahrung oder klare Ambition in der fachlichen Führung eines Teams",
      "Strukturierte, qualitäts- und verantwortungsbewusste Arbeitsweise",
      "Organisationsstärke und Freude am Umgang mit anspruchsvoller Kundschaft",
      "Führerausweis Kategorie B",
    ],
    benefits: [
      "Führungsrolle mit echter Eigenverantwortung ab dem ersten Tag",
      "Unbefristete Festanstellung in einem mehrfach ausgezeichneten Arbeitsumfeld",
      "Abwechslungsreiche Projekte statt Routine, quer durch Gewerbe, Industrie und Wohnbau",
      "Moderne digitale Arbeitsmittel und kurze Entscheidungswege",
      "Firmenfahrzeug zur beruflichen Nutzung",
    ],
    closingNote: [
      "Passt das zu deinem nächsten Schritt? Dann lass uns unverbindlich sprechen. In einem kurzen, vertraulichen Gespräch klären wir gemeinsam, ob die Rolle wirklich zu dir passt, bevor du dich formell bewirbst.",
      "ScaleZ begleitet dich diskret durch den gesamten Prozess.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-08-18",
    validThrough: "2026-11-18",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "bauleiter-tiefbau-entwicklungsperspektive-zuerich",
    title: "Bauleiter:in Infrastruktur, Einstieg mit Perspektive (m/w/d)",
    region: "Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Bau / Tiefbau · Zürich",
    teaser:
      "Deine Baustelle, deine Verantwortung. Führe in Zürich anspruchsvolle Tiefbauprojekte im Strassen-, Werkleitungs- und Kunstbau vor Ort und wachse Schritt für Schritt in eigene Baustellen hinein. Du überwachst Qualität, Kosten und Termine, koordinierst Unternehmer, Werke und Fachplaner und wirst dabei von erfahrenen Chefbauleitern gezielt weiterentwickelt. Ein etabliertes Ingenieur- und Infrastrukturbüro mit modernen Strukturen in Zürich-Oerlikon sucht dich unbefristet.",
    compensation: "CHF 90'000 – 115'000 / Jahr Nach Vereinbarung",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Örtliche Bauleitung von Projekten im Strassen-, Werkleitungs- und Ingenieurbau",
      "Überwachung von Bauausführung, Qualität, Kosten, Terminen und Arbeitssicherheit",
      "Koordination von Unternehmern, Fachplanern, Werken und weiteren Projektbeteiligten",
      "Organisation von Baustellensitzungen sowie Führung von Protokollen, Rapporten und Ausmassen",
      "Unterstützung der Projekt- und Chefbauleitung über die Ausführungsphasen bis zur Übergabe",
    ],
    requirements: [
      "Ausbildung als Techniker:in HF Tiefbau, Bauingenieur:in FH/ETH oder vergleichbare Qualifikation",
      "Erste Erfahrung in Bauleitung oder Projektierung von Infrastrukturprojekten von Vorteil",
      "Interesse an Strassenbau, Werkleitungsbau und Kunstbauten sowie technisches Verständnis",
      "Selbstständige, strukturierte und zuverlässige Arbeitsweise mit unternehmerischem Denken",
      "Sehr gute Deutschkenntnisse (mind. C1) und Führerausweis Kategorie B",
    ],
    benefits: [
      "Abwechslungsreiche Infrastrukturprojekte für Städte, Gemeinden, Kantone und private Bauherrschaften",
      "Gezielte Entwicklung durch erfahrene Chefbauleiter, mit Perspektive zu Senior Bauleiter, Chefbauleiter oder Projektleiter",
      "Hohe Eigenverantwortung und rascher Aufbau eigener Baustellen",
      "Flexible Arbeitszeiten und Homeoffice-Anteil für administrative Tätigkeiten",
      "Moderne digitale Arbeitsmittel und Büro in Zürich-Oerlikon",
    ],
    closingNote: [
      "Passt das zu deinem nächsten Schritt? Dann lass uns unverbindlich sprechen. In einem kurzen, vertraulichen Gespräch klären wir gemeinsam, ob die Rolle wirklich zu dir passt, bevor du dich formell bewirbst. Auch wenn du noch nicht jede Anforderung erfüllst, lohnt sich der Austausch.",
      "ScaleZ begleitet dich diskret durch den gesamten Prozess.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-08-18",
    validThrough: "2026-11-18",
    addressLocality: "Zürich-Oerlikon",
    addressRegion: "ZH",
  },
  {
    slug: "servicetechniker-elektro-notstromanlagen",
    title: "Servicetechniker:in Elektro und Notstromanlagen (m/w/d)",
    region: "Deutschschweiz",
    employmentType: "Festanstellung, 100%",
    focus: "Elektro · Zürich",
    teaser:
      "Kein Alltag am Bürotisch. Sicherheitskritische Elektroanlagen in der Deutschschweiz brauchen dich vor Ort. Du übernimmst Wartungen, Reparaturen und Inbetriebnahmen an Notstromanlagen, USV-Systemen und Sicherheitsbeleuchtungen bei Kunden aus Industrie, Spitälern, Hotellerie und öffentlichen Betrieben. Ein etabliertes Schweizer Serviceunternehmen mit klaren Prozessen und eingespieltem Team sucht dich unbefristet.",
    compensation: "CHF 80'000 – 105'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Wartung, Reparatur und Inbetriebnahme von Notstromanlagen, USV-Systemen und Sicherheitsbeleuchtungen",
      "Selbstständige Fehlersuche und Störungsbehebung bei Kunden vor Ort",
      "Durchführung von periodischen Prüfungen gemäss SEV- und SUVA-Vorgaben",
      "Dokumentation der Serviceeinsätze und Rapportierung an die Einsatzleitung",
      "Beratung der Kunden zu Optimierungen, Ersatzteilen und Systemerweiterungen",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Elektroinstallateur:in EFZ, Elektromonteur:in EFZ oder gleichwertig",
      "Weiterbildung als Servicetechniker:in oder mehrjährige Erfahrung im technischen Service von Vorteil",
      "Kenntnisse in NIN, NIV und den relevanten Schweizer Normen",
      "Selbstständige, kundenorientierte und lösungsorientierte Arbeitsweise",
      "Sehr gute Deutschkenntnisse (mind. C1) und Führerausweis Kategorie B",
    ],
    benefits: [
      "Vollständig ausgestattetes Servicefahrzeug zur privaten Nutzung",
      "Modernste Mess- und Prüfgeräte sowie mobile Dokumentationstools",
      "Klare Weiterbildungspfade zum Servicespezialist:in oder Einsatzleitung",
      "Faire Pikettentschädigung und geregelte Rotation im Team",
      "5 Wochen Ferien und flexible Zeiterfassung",
    ],
    closingNote: [
      "Wenn dich sicherheitskritische Anlagen und echte Kundennähe reizen, freuen wir uns auf deine Bewerbung. Wir melden uns innerhalb von zwei Arbeitstagen zurück und besprechen mit dir alle Details in einem kurzen Erstgespräch.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-09",
    validThrough: "2026-11-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "servicetechniker-heizung-waermepumpen",
    title: "Servicetechniker:in Heizung und Wärmepumpen (m/w/d)",
    region: "Grossraum Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Gebäudetechnik · Zürich",
    teaser:
      "Wärme ist Grundversorgung. Wenn eine Heizung ausfällt, zählt jede Stunde. Du sorgst dafür, dass Wärmepumpen, Gas- und Ölheizungen sowie moderne Hybridsysteme im Grossraum Zürich zuverlässig laufen. Wartung, Störungsbehebung, Inbetriebnahmen. Ein etabliertes Schweizer Haustechnikunternehmen mit langjährig treuem Kundenstamm sucht dich unbefristet.",
    compensation: "CHF 78'000 – 100'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Wartung und Reparatur von Wärmepumpen, Öl- und Gasheizungen sowie Hybridsystemen",
      "Inbetriebnahme neuer Anlagen inklusive hydraulischer und regelungstechnischer Einstellung",
      "Fehlerdiagnose und Störungsbehebung im Alltags- und Notfalldienst",
      "Beratung der Kunden zu Effizienzoptimierungen und Modernisierungen",
      "Zusammenarbeit mit der Planungs- und Verkaufsabteilung bei Ersatzangeboten",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Heizungsinstallateur:in EFZ, Servicetechniker:in Heizung oder gleichwertig",
      "Erfahrung mit gängigen Wärmepumpensystemen (z.B. Viessmann, Hoval, CTA, Stiebel Eltron) von Vorteil",
      "Gute Kenntnisse in Hydraulik, Regelungstechnik und aktuellen Effizienzstandards",
      "Selbstständige, kundenorientierte und zuverlässige Arbeitsweise",
      "Sehr gute Deutschkenntnisse (mind. C1) und Führerausweis Kategorie B",
    ],
    benefits: [
      "Vollständig ausgestattetes Servicefahrzeug zur privaten Nutzung",
      "Regelmässige herstellerzertifizierte Schulungen und Weiterbildungen",
      "Klarer Entwicklungspfad zum Servicespezialist:in oder Teamleiter:in Service",
      "Faire Pikettentschädigung und geregelte Rotation",
      "Familiäres Team mit langjährig treuen Kunden im Grossraum Zürich",
    ],
    closingNote: [
      "Wenn du eine Servicerolle mit direktem Kundenkontakt, klarer Weiterentwicklung und einem stabilen Team suchst, freuen wir uns auf dich. Wir melden uns innerhalb von zwei Arbeitstagen mit einem konkreten nächsten Schritt.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-09",
    validThrough: "2026-11-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "zeichner-efz-ingenieurbau-architektur",
    title: "Zeichner:in EFZ Fachrichtung Ingenieurbau oder Architektur (m/w/d)",
    region: "Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Ingenieurbau · Zürich",
    teaser:
      "Deine Pläne, deine Handschrift. Von der ersten Skizze bis zur ausführungsreifen Werkplanung übernimmst du die zeichnerische Umsetzung von Bau- und Infrastrukturprojekten in Zürich. Du arbeitest eng mit Projektleitung und Bauleitung zusammen, entwickelst dich mit anspruchsvollen Projekten weiter und wirst gezielt zur nächsten Karrierestufe geführt. Ein etabliertes Zürcher Ingenieur- oder Architekturbüro mit moderner digitaler Infrastruktur sucht dich unbefristet.",
    compensation: "CHF 75'000 – 95'000 / Jahr bei 100%",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Erstellen von Vor-, Bau- und Ausführungsplänen in CAD (AutoCAD, Revit oder Allplan)",
      "Umsetzung von Skizzen und Vorgaben der Projekt- und Bauleitung in präzise Planwerke",
      "Erstellen von Detailplänen, Schnitten, Grundrissen und Ansichten",
      "Mitarbeit bei der Erstellung von Massen- und Mengenermittlungen",
      "Koordination mit Fachplanern und Projektbeteiligten",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Zeichner:in EFZ Fachrichtung Ingenieurbau, Architektur oder Innenarchitektur",
      "Sichere Anwendung von mindestens einem CAD-System (AutoCAD, Revit, Allplan oder ArchiCAD)",
      "Erste Erfahrung mit BIM oder klarer Wille zur Einarbeitung",
      "Strukturierte, sorgfältige und präzise Arbeitsweise",
      "Sehr gute Deutschkenntnisse (mind. C1)",
    ],
    benefits: [
      "Anspruchsvolle Projekte für Städte, Gemeinden, Kantone und private Bauherrschaften",
      "Moderne digitale Arbeitsmittel und aktuelle Softwarelizenzen",
      "Gezielte Weiterentwicklung Richtung Techniker HF, BIM-Koordination oder Teamleitung",
      "Flexible Arbeitszeiten und Homeoffice-Anteil",
      "Modernes Büro in Zürich mit guter ÖV-Erschliessung",
    ],
    closingNote: [
      "Wenn du deine zeichnerische Präzision in einem Umfeld einsetzen willst, das echte Entwicklungsperspektiven bietet, freuen wir uns auf deine Bewerbung. Ein kurzer Anruf reicht für die ersten Fragen.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-09",
    validThrough: "2026-11-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "bauleitender-monteur-elektroinstallationen",
    title: "Bauleitender Monteur:in Elektroinstallationen (m/w/d)",
    region: "Grossraum Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Elektro · Zürich",
    teaser:
      "Deine Baustelle. Dein Team. Deine Verantwortung. Du führst kleinere und mittlere Elektroinstallationsprojekte im Wohn-, Gewerbe- und Industriebau vor Ort und koordinierst Monteure, Lernende und Subunternehmer. Zwischen Werkstatt und Baustelle sorgst du dafür, dass Termine, Qualität und Sicherheit stimmen und dass dein Team gut arbeiten kann. Ein etablierter Elektroinstallationsbetrieb im Grossraum Zürich sucht dich unbefristet.",
    compensation: "CHF 82'000 – 105'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Führen von Elektroinstallationsprojekten im Wohn-, Gewerbe- und Industriebau vor Ort",
      "Koordination und Führung des Baustellenteams inklusive Monteuren und Lernenden",
      "Ausführungsplanung, Materialbestellung und Terminplanung in Absprache mit der Projektleitung",
      "Ansprechperson für Kunden, Bauleitung und Fachplaner auf der Baustelle",
      "Überwachung von Qualität, Sicherheit und Termineinhaltung sowie Erstellung von Rapporten",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Elektroinstallateur:in EFZ mit mehrjähriger Berufserfahrung",
      "Weiterbildung als Elektro-Projektleiter:in oder Teamleiter:in mit Prüfungszertifikat nach EIT.swiss von Vorteil",
      "Führungserfahrung auf der Baustelle oder ausgeprägte Bereitschaft, in diese Rolle hineinzuwachsen",
      "Gute Kenntnisse in NIN, NIV und aktuellen Schweizer Normen",
      "Selbstständige, strukturierte Arbeitsweise mit unternehmerischem Denken",
    ],
    benefits: [
      "Eigenverantwortliche Projekte mit direktem Kundenkontakt",
      "Klare Karriereperspektive Richtung Projektleiter:in oder Bauleiter:in Elektro",
      "Unterstützung bei Weiterbildungen wie Elektro-Teamleiter:in oder Sicherheitsberater:in",
      "Servicefahrzeug oder Poolfahrzeug",
      "5 Wochen Ferien und faire Überstundenregelung",
    ],
    closingNote: [
      "Wenn du bereit bist, Verantwortung auf der Baustelle zu übernehmen und dein Team weiterzuentwickeln, freuen wir uns auf dich. Ein Erstgespräch dauert 30 Minuten und klärt alle Fragen zu Position, Betrieb und Perspektive.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-09",
    validThrough: "2026-11-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "polier-hochbau",
    title: "Polier:in Hochbau (m/w/d)",
    region: "Grossraum Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Hochbau · Zürich",
    teaser:
      "Deine Baustelle. Deine Crew. Dein Takt. Du führst als Polier:in Hochbauprojekte im Wohn-, Gewerbe- und Industriebau vor Ort, koordinierst zwischen Bauleitung, Unternehmern und deinem Team und sorgst dafür, dass Termine, Qualität und Sicherheit stimmen. Ein etabliertes Zürcher Bauunternehmen mit anspruchsvollem Projektportfolio und wertschätzender Führungskultur sucht dich unbefristet.",
    compensation: "CHF 95'000 – 125'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Operative Führung der Baustelle im Hochbau von der Aushubphase bis zur Übergabe",
      "Führung des Baustellenteams inklusive Facharbeiter:innen, Hilfskräften und Lernenden",
      "Koordination von Unternehmern, Lieferanten und Kranarbeiten in enger Abstimmung mit der Bauleitung",
      "Sicherstellung von Terminen, Qualität, Arbeitssicherheit und Baustellenordnung",
      "Rapportierung, Ausmasse und Materialdisposition sowie Wochenplanung",
    ],
    requirements: [
      "Abgeschlossene Weiterbildung als Polier:in Hochbau mit eidg. Diplom oder gleichwertige Qualifikation",
      "Mehrjährige Erfahrung als Vorarbeiter:in oder Polier:in im Hochbau",
      "Ausgeprägte Führungsstärke, Durchsetzungsvermögen und Teamgeist",
      "Selbstständige, strukturierte Arbeitsweise mit unternehmerischem Denken",
      "Sehr gute Deutschkenntnisse (mind. C1) und Führerausweis Kategorie B",
    ],
    benefits: [
      "Anspruchsvolle Hochbauprojekte im Grossraum Zürich mit klarer Führungsverantwortung",
      "Servicefahrzeug zur privaten Nutzung",
      "Klare Entwicklungsperspektive Richtung Bauführer:in oder Oberpolier:in",
      "Unterstützung bei Weiterbildungen wie Bauführer:in HF oder Baumeister:in",
      "Faire Überstundenregelung und geregelte Arbeitszeiten mit familienfreundlicher Grundhaltung",
      "Modernste digitale Baustellentools und BIM-Anbindung",
    ],
    closingNote: [
      "Wenn du bereit bist, deine Erfahrung auf anspruchsvollen Baustellen einzusetzen und dein Team weiterzuentwickeln, freuen wir uns auf dich. Ein Erstgespräch dauert 30 Minuten und klärt alle Fragen zu Position, Betrieb und Perspektive.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-28",
    validThrough: "2026-12-21",
    addressLocality: "Wallisellen",
    addressRegion: "ZH",
  },
  {
    slug: "servicetechniker-sanitaer",
    title: "Servicetechniker:in Sanitär (m/w/d)",
    region: "Grossraum Zürich",
    employmentType: "Festanstellung, 100%",
    focus: "Gebäudetechnik · Zürich",
    teaser:
      "Wasser und Abwasser sind Grundversorgung. Wenn etwas nicht funktioniert, zählt jede Stunde. Du übernimmst Reparaturen, Wartungen und Umbauten an Sanitäranlagen in Wohn-, Gewerbe- und Industrieobjekten im Grossraum Zürich. Zwischen Erstkontakt beim Kunden und sauberer Übergabe bist du die Person, die den Unterschied macht. Ein etabliertes Schweizer Sanitärunternehmen mit treuer Stammkundschaft sucht dich unbefristet.",
    compensation: "CHF 78'000 – 98'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Reparatur und Wartung von Sanitärinstallationen in Bad, Küche und Technikräumen",
      "Installation neuer Apparate, Armaturen und Ablaufsysteme bei Um- und Ersatzbauten",
      "Fehlerdiagnose und Störungsbehebung im Alltags- und Notfalldienst",
      "Beratung der Kunden zu Optimierungen, Ersatzteilen und Modernisierungen",
      "Sorgfältige Rapportierung und Zusammenarbeit mit der Einsatzleitung und Werkstatt",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Sanitärinstallateur:in EFZ oder gleichwertig",
      "Erfahrung im Service oder Bereitschaft zur Einarbeitung in kundenorientierte Serviceeinsätze",
      "Freundlicher und professioneller Umgang mit Kund:innen",
      "Selbstständige, lösungsorientierte und zuverlässige Arbeitsweise",
      "Sehr gute Deutschkenntnisse (mind. C1) und Führerausweis Kategorie B",
    ],
    benefits: [
      "Vollständig ausgestattetes Servicefahrzeug zur privaten Nutzung",
      "Moderne Werkzeuge, Mess- und Diagnosegeräte",
      "Klarer Entwicklungspfad zum Servicespezialist:in oder Teamleiter:in Service",
      "Faire Pikettentschädigung und geregelte Rotation im Team",
      "5 Wochen Ferien und flexible Zeiterfassung",
      "Familiäres Team mit langjährig treuen Kunden im Grossraum Zürich",
    ],
    closingNote: [
      "Wenn du eine Servicerolle mit direktem Kundenkontakt und echter Verantwortung suchst, freuen wir uns auf deine Bewerbung. Wir melden uns innerhalb von zwei Arbeitstagen zurück und besprechen mit dir alle Details in einem kurzen Erstgespräch.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-28",
    validThrough: "2026-12-21",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "elektroplaner-projektierung",
    title: "Elektroplaner:in EFZ oder mit Weiterbildung (m/w/d)",
    region: "Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektro · Zürich",
    teaser:
      "Du entwickelst die Elektroplanung, bevor jemand einen Kabelkanal in die Hand nimmt. Von der ersten Studie bis zur Ausschreibung planst du elektrische Anlagen für Wohn-, Gewerbe- und Sonderbauten in Zürich, koordinierst mit Architekt:innen und Fachplaner:innen und triffst die Entscheidungen, die später auf der Baustelle funktionieren müssen. Ein etabliertes Zürcher Elektroingenieur- oder Planungsbüro mit BIM-basierten Prozessen sucht dich unbefristet.",
    compensation: "CHF 85'000 – 115'000 / Jahr bei 100%",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Elektroplanung für Wohn-, Gewerbe- und Sonderbauten von der Vor- bis zur Ausführungsphase",
      "Erstellen von Prinzipschemata, Verteilerplänen und Installationsplänen in CAD (Elcad, Plancal Nova oder Revit)",
      "Erstellen von Ausschreibungsunterlagen, Devis und Massenermittlungen",
      "Koordination mit Architekt:innen, HLKS-Fachplaner:innen und Bauherrschaften",
      "Fachliche Begleitung der Ausführungsphase in enger Zusammenarbeit mit der Bauleitung",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Elektroplaner:in EFZ oder Elektroinstallateur:in EFZ mit Weiterbildung Richtung Planung",
      "Erste bis mehrjährige Erfahrung in der Elektroplanung von Vorteil",
      "Sichere Anwendung von mindestens einem CAD-System (Elcad, Plancal Nova, Revit oder Allplan)",
      "Interesse an BIM oder klarer Wille zur Einarbeitung",
      "Strukturierte, sorgfältige Arbeitsweise mit gutem technischem Verständnis",
      "Sehr gute Deutschkenntnisse (mind. C1)",
    ],
    benefits: [
      "Anspruchsvolle Projekte für private Bauherrschaften, Städte und Kantone",
      "Moderne digitale Arbeitsmittel, aktuelle CAD- und BIM-Lizenzen",
      "Gezielte Weiterentwicklung Richtung Techniker HF Elektro, Projektleitung oder BIM-Koordination",
      "Flexible Arbeitszeiten und Homeoffice-Anteil für administrative Tätigkeiten",
      "Modernes Büro in Zürich mit guter ÖV-Erschliessung",
      "Kollegiales Team mit flachen Hierarchien",
    ],
    closingNote: [
      "Wenn du in einem Umfeld arbeiten willst, in dem Planungspräzision zählt und Weiterentwicklung mehr als ein Versprechen ist, freuen wir uns auf deine Bewerbung. Ein kurzer Anruf reicht für die ersten Fragen.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-28",
    validThrough: "2026-12-21",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "gebaeudetechnikplaner-hlks",
    title: "Gebäudetechnikplaner:in EFZ Fachrichtung Heizung, Lüftung, Klima oder Sanitär (m/w/d)",
    region: "Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Gebäudetechnik · Zürich",
    teaser:
      "Du planst, was später verbaut wird. Von der ersten Konzeptstudie bis zur Ausführungsplanung entwickelst du Heizungs-, Lüftungs-, Klima- oder Sanitäranlagen für Wohn-, Gewerbe- und Sonderbauten in Zürich. Du koordinierst mit Architekt:innen, Elektroplaner:innen und Bauherrschaften und triffst die Entscheidungen, die den Unterschied zwischen einer guten und einer sehr guten Anlage ausmachen. Ein etabliertes Zürcher Gebäudetechnik-Planungsbüro mit modernen BIM-Prozessen und nachhaltigem Projektportfolio sucht dich unbefristet.",
    compensation: "CHF 78'000 – 105'000 / Jahr bei 100%",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Fachplanung von Heizungs-, Lüftungs-, Klima- oder Sanitäranlagen von der Vor- bis zur Ausführungsphase",
      "Erstellen von Anlageschemata, Grundrissplänen und Detailzeichnungen in CAD (Plancal Nova, Revit MEP oder AutoCAD MEP)",
      "Erstellen von Ausschreibungsunterlagen, Devis, Massen- und Kostenermittlungen",
      "Koordination mit Architekt:innen, weiteren Fachplaner:innen und Bauleitung",
      "Fachliche Begleitung der Ausführungs- und Inbetriebnahmephase inklusive Abnahmen",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Gebäudetechnikplaner:in EFZ Fachrichtung Heizung, Lüftung, Klima oder Sanitär",
      "Erste bis mehrjährige Erfahrung in der Fachplanung oder klarer Wille zur Weiterentwicklung",
      "Sichere Anwendung von mindestens einem CAD-System (Plancal Nova, Revit MEP, AutoCAD MEP oder gleichwertig)",
      "Interesse an BIM und nachhaltigen Energiekonzepten wie Wärmepumpen, PV-Integration oder Kältetechnik",
      "Strukturierte, sorgfältige Arbeitsweise mit gutem technischem Verständnis",
      "Sehr gute Deutschkenntnisse (mind. C1)",
    ],
    benefits: [
      "Anspruchsvolle Projekte mit hoher gestalterischer Freiheit im Bereich nachhaltiger Gebäudetechnik",
      "Moderne digitale Arbeitsmittel, aktuelle CAD- und BIM-Lizenzen",
      "Gezielte Weiterentwicklung Richtung Techniker HF Gebäudetechnik, Projektleitung oder Fachbauleitung",
      "Grosszügiges Weiterbildungsbudget für Fachvertiefungen wie Minergie, MuKEn oder BIM-Koordination",
      "Flexible Arbeitszeiten und Homeoffice-Anteil",
      "Modernes Büro in Zürich mit sehr guter ÖV-Erschliessung",
    ],
    closingNote: [
      "Wenn du deine planerische Präzision in einem Umfeld einsetzen willst, in dem Nachhaltigkeit mehr ist als ein Marketingversprechen, freuen wir uns auf deine Bewerbung. Ein kurzer Anruf reicht für die ersten Fragen.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-28",
    validThrough: "2026-12-21",
    addressLocality: "Zürich",
    addressRegion: "ZH",
  },
  {
    slug: "projektleiter-heizung-lueftung-klima",
    title: "Projektleiter:in Heizung, Lüftung und Klima (m/w/d)",
    region: "Grossraum Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Gebäudetechnik · Dübendorf",
    teaser:
      "Vom ersten Kundenkontakt bis zur Schlussrechnung. Du führst als Projektleiter:in Heizungs-, Lüftungs- und Klimaprojekte im Neubau, Umbau und in der Sanierung eigenverantwortlich und trägst die kaufmännische und technische Gesamtverantwortung. Wärmepumpen, PV-Integration, Kältetechnik, MuKEn-konforme Sanierungen. Ein etablierter Gebäudetechnikunternehmer im Grossraum Zürich mit vollen Auftragsbüchern und stabilem Team sucht dich unbefristet.",
    compensation: "CHF 95'000 – 125'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Eigenverantwortliche Leitung von Projekten im Bereich Heizung, Lüftung und Klima von der Kalkulation bis zur Übergabe",
      "Kalkulation, Offertstellung und Vertragsverhandlung mit Bauherrschaften und Generalunternehmern",
      "Technische Ausführungsplanung, Materialdisposition und Terminplanung",
      "Führung des Montageteams und Koordination von Subunternehmern",
      "Kontrolle von Kosten, Terminen und Qualität sowie Rapportierung an die Geschäftsleitung",
      "Ansprechperson für Kunden, Bauleitung und Fachplaner:innen über die gesamte Projektlaufzeit",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Heizungs-, Lüftungs- oder Sanitärinstallateur:in EFZ mit Weiterbildung zum Projektleiter:in oder Techniker HF Gebäudetechnik",
      "Mehrjährige Erfahrung in der Projektleitung im Bereich Heizung, Lüftung, Klima oder Kälte",
      "Sicheres Verständnis von Hydraulik, Regelungstechnik und aktuellen Energiestandards",
      "Erfahrung mit Wärmepumpensystemen, kontrollierter Wohnraumlüftung oder Kältetechnik von Vorteil",
      "Selbstständige, unternehmerische Arbeitsweise mit ausgeprägten Führungsqualitäten",
      "Sehr gute Deutschkenntnisse (mind. C1) und Führerausweis Kategorie B",
    ],
    benefits: [
      "Volle Auftragsbücher mit anspruchsvollen Projekten im Grossraum Zürich",
      "Servicefahrzeug oder attraktives Poolfahrzeug",
      "Grosszügiges Weiterbildungsbudget für Techniker HF, eidg. Diplom oder herstellerzertifizierte Schulungen",
      "Klarer Entwicklungspfad Richtung Bereichsleitung oder Geschäftsleitung",
      "Erfolgsbeteiligung und faire Bonusregelung",
      "5 Wochen Ferien und flexible Zeiterfassung",
    ],
    closingNote: [
      "Wenn du in einer Rolle mit voller Verantwortung, klarem Auftragsvolumen und echter Entwicklungsperspektive arbeiten willst, freuen wir uns auf dich. Ein Erstgespräch dauert 30 Minuten und klärt alle Fragen zu Position, Betrieb und Entwicklungsweg.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-09-28",
    validThrough: "2026-12-21",
    addressLocality: "Dübendorf",
    addressRegion: "ZH",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "fachkraeftemangel-schweiz-2026-berufe",
    title: "Fachkräftemangel Schweiz 2026 in welchen Berufen die Lage jetzt wirklich brennt und was das für Fachkräfte und Betriebe bedeutet",
    category: "Markt",
    readTime: "9 Min.",
    publishedAt: "28. September 2026",
    teaser:
      "Der Adecco Fachkräftemangel-Index 2025 zeigt eine leichte Entspannung im Gesamtbild, aber in einzelnen Berufsgruppen hat sich die Situation dramatisch verschärft. Pflege, Bau und Gebäudetechnik führen die Rangliste an. Wir zeigen dir, wo der Druck in der Schweiz 2026 wirklich am grössten ist, welche Löhne aktuell realistisch sind und welche offenen Positionen wir gerade konkret vermitteln.",
    intro:
      "Der Schweizer Arbeitsmarkt zeigt 2026 ein widersprüchliches Bild. Auf der einen Seite meldet das Staatssekretariat für Wirtschaft SECO eine historisch tiefe Arbeitslosenquote von 2.8 Prozent im Februar 2026. Auf der anderen Seite bestätigt der Adecco Fachkräftemangel-Index 2025, gemeinsam veröffentlicht mit dem Stellenmarkt-Monitor Schweiz der Universität Zürich, dass in 32 von 55 untersuchten Berufsgruppen ein messbarer Fachkräftemangel besteht. Zwischen 2025 und 2030 verlässt die Schweiz jährlich eine Kohorte von rund 90'000 Erwerbstätigen den Arbeitsmarkt, während nur 75'000 Junge nachrücken. Diese demografische Lücke betrifft nicht alle Branchen gleich stark. Wir haben die aktuellsten Daten aus dem Adecco Fachkräftemangel-Index, dem Swiss Job Market Index Q2 2026, der Lohnstrukturerhebung des Bundesamts für Statistik und unseren eigenen Vermittlungsgesprächen zusammengeführt und ordnen für dich ein, wo die Lage wirklich brennt und was das konkret für dich als Fachkraft oder als Betrieb bedeutet.",
    sections: [
      {
        id: "was-der-adecco-fachkraeftemangel-index-2025-und-2026-wirklich-sagt",
        title: "Was der Adecco Fachkräftemangel-Index 2025 und 2026 wirklich sagt",
        paragraphs: [
          "Der Adecco Fachkräftemangel-Index Schweiz ist die wissenschaftlich fundierteste Messgrösse für den strukturellen Personalmangel in der Schweiz. Er wird jährlich in Zusammenarbeit mit dem Stellenmarkt-Monitor Schweiz am Soziologischen Institut der Universität Zürich veröffentlicht und misst das Verhältnis zwischen offenen Stellen und verfügbaren Fachkräften über 55 Berufsgruppen hinweg. Das Ergebnis für 2025, das im Dezember 2025 publiziert wurde, sorgte für einige Aufmerksamkeit. Der Gesamtindex lag rund 22 Prozent unter dem Vorjahr. Auf den ersten Blick klingt das nach einer klaren Entspannung. Beim genaueren Hinschauen zeigt sich jedoch ein anderes Bild.",
          "Der Rückgang des Gesamtindex geht fast ausschliesslich auf zwei Berufsgruppen zurück, in denen sich das Angebot deutlich vergrössert hat. Bei Büro-, Verwaltungs- und kaufmännischen Fachkräften sowie bei ICT- und Informatikberufen hat sich die Situation innerhalb eines Jahres von einem Angebotsmangel in ein leichtes Überangebot verwandelt. Diese Berufsgruppen dominieren jede statistische Gesamtbetrachtung, weil sie einen grossen Anteil an allen Erwerbstätigen ausmachen. Der Adecco Group Swiss Job Market Index Q2 2026, veröffentlicht im Juli 2026, bestätigt genau diesen Trend. Bei kaufmännischen Fachkräften sanken die offenen Stellen im Jahresvergleich um 13 Prozent, bei Hochschulberufen Wirtschaft um 10 Prozent.",
          "In allen anderen Berufsgruppen sieht die Lage jedoch komplett anders aus. Gesundheitsspezialist:innen führen die Rangliste des Fachkräftemangels seit Jahren an. Bauführer:innen, Polier:innen und Produktionsleiter:innen belegen laut Adecco Fachkräftemangel-Index 2025 Rang zwei. Dahinter folgen technische Spezialisten mit ausgeprägter Nachfrage bei Elektroingenieuren, Elektroplanern, Anlagen- und Apparatebauern sowie Gebäudetechnikplanern. Die demografische Entwicklung wirkt in diesen Berufen wie ein Verstärker. Wo bereits heute die Personaldecke dünn ist, wird sie durch die anstehenden Pensionierungen der Babyboomer bis 2030 noch deutlich dünner.",
        ],
      },
      {
        id: "pflegefachkraeftemangel-schweiz-2026-die-zahlen-die-niemand-mehr-ignorieren-kann",
        title: "Pflegefachkräftemangel Schweiz 2026 die Zahlen die niemand mehr ignorieren kann",
        paragraphs: [
          "Der Pflegefachkräftemangel ist in der Schweiz kein neues Thema, aber 2026 hat er eine neue Dimension erreicht. Laut Schweizerischem Berufsverband der Pflegefachpersonen SBK fehlen in der Schweiz aktuell rund 12'000 diplomierte Pflegefachpersonen HF und FH allein im akutsomatischen Bereich. Rechnet man die Langzeitpflege, die Spitex und spezialisierte Bereiche wie Intensivpflege, Notfallpflege und Anästhesie dazu, erhöht sich die Zahl auf weit über 20'000 offene Stellen.",
          "Die Pflegeinitiative, die im November 2021 mit 61 Prozent Ja-Stimmen angenommen wurde, ist in der Umsetzung. Die erste Etappe mit Ausbildungsoffensive und Erweiterung der Kompetenzen ist bereits in Kraft. Die zweite Etappe mit dem Bundesgesetz über die Arbeitsbedingungen in der Pflege BGAP befindet sich in der Umsetzungsphase 2025 bis 2026 und regelt Arbeitszeiten, Dienstplanung und Personalschlüssel neu. Trotz dieser strukturellen Verbesserungen bleibt der Personalmangel akut, weil die Ausbildungsoffensive Zeit braucht, bis sie im System spürbar wird.",
          "Die Löhne haben sich als Reaktion auf den Mangel deutlich bewegt. Eine frisch diplomierte Pflegefachperson HF startet in der Deutschschweiz 2026 mit einem Bruttolohn zwischen CHF 78'000 und CHF 84'000 pro Jahr, je nach Kanton und Institution. In Zürich liegt der Medianlohn für eine Pflegefachperson HF mit einigen Jahren Berufserfahrung laut Lohnbuch Schweiz 2026 und Datenpunkten von Glassdoor bei rund CHF 88'000. Erfahrene Pflegefachpersonen HF mit Fachvertiefung wie NDS HF Intensivpflege, Notfallpflege oder Anästhesie erreichen im Kanton Zürich Jahreslöhne zwischen CHF 100'000 und CHF 120'000 inklusive Zulagen für Nacht-, Wochenend- und Feiertagsdienste. Wir vermitteln aktuell offene Positionen für Dipl. Pflegefachpersonen HF bei renommierten Zürcher Gesundheitsanbietern mit modernen Strukturen, geregelten Dienstplänen und echter Wertschätzung für Pflegefachpersonen. Details und Bewerbung auf unserer Website unter dem Reiter \"Jobs\".",
        ],
      },
      {
        id: "bau-und-infrastruktur-der-mangel-hinter-dem-bauboom-in-zuerich-und-der-deutschschweiz",
        title: "Bau und Infrastruktur der Mangel hinter dem Bauboom in Zürich und der Deutschschweiz",
        paragraphs: [
          "Der Schweizer Bausektor steht unter Druck von zwei Seiten. Auf der einen Seite investieren Bund, Kantone und Gemeinden Rekordsummen in die Sanierung und Erweiterung der Infrastruktur. Werkleitungen, Strassen, Brücken, Bahntrassen. Der Kanton Zürich allein plant für die kommenden fünf Jahre Investitionen im hohen dreistelligen Millionenbereich in den Tiefbau. Auf der anderen Seite investieren private Bauherrschaften weiterhin massiv in Hochbau, Wohnbau und Gewerbebau. Die Konsequenz ist ein ausgeprägter Personalmangel in fast allen Baubereichen.",
          "Besonders akut ist die Lage bei den führenden Baustellenrollen. Polier:innen und Bauführer:innen stehen laut Adecco Fachkräftemangel-Index auf Rang zwei aller Berufsgruppen. Die Marktdaten spiegeln diesen Druck wider. Ein erfahrener Polier Hochbau verdient in der Schweiz laut Indeed und Glassdoor 2026 im Durchschnitt zwischen CHF 100'000 und CHF 112'000 pro Jahr, wobei Spitzenverdiener bis zu CHF 135'000 erreichen. In Zürich liegen die Ranges nochmals höher als im schweizweiten Durchschnitt.",
          "Auch bei den Bauleiter:innen im Tiefbau und Hochbau ist die Situation angespannt. Die Nachfrage nach Bauingenieur:innen ETH und FH sowie Techniker:innen HF Tiefbau übersteigt das Angebot deutlich. Wir haben in einem separaten Karriere-Blog aufgeschrieben, was auf jeder Karrierestufe im Tiefbau realistisch verdient wird und was den Sprung von Bauleiter zu Projektleiter ausmacht. Die dort dokumentierten Ranges bewegen sich zwischen CHF 90'000 für Einsteiger:innen und CHF 145'000 für erfahrene Projektleiter:innen mit Spezialisierung auf Kunstbauten oder Werkleitungen.",
        ],
      },
      {
        id: "elektrobranche-zwischen-gav-2026-energiewende-und-fachkraefteboom",
        title: "Elektrobranche zwischen GAV 2026, Energiewende und Fachkräfteboom",
        paragraphs: [
          "Die Schweizer Elektrobranche steht 2026 an einem doppelten Wendepunkt. Zum einen ist im Januar 2026 der neue Gesamtarbeitsvertrag GAV der Elektrobranche in Kraft getreten, der Mindestlöhne, Arbeitszeit und Auslagenersatz bis 2029 neu regelt. Zum anderen hat die Energiewende einen strukturellen Nachfrageschub ausgelöst, der die gesamte Elektrobranche erfasst. Photovoltaikanlagen, Wallboxen für Elektrofahrzeuge, Batteriespeicher, intelligente Gebäudeautomation und Smart-Home-Systeme brauchen alle qualifizierte Elektrofachkräfte für Planung, Installation und Wartung.",
          "Der Mindestlohn für eine:n Elektroinstallateur:in EFZ nach Abschluss beträgt 2026 CHF 4'500 pro Monat und steigt nach einem Branchenjahr auf CHF 5'000. Teamleiter:innen mit Prüfungszertifikat nach EIT.swiss verdienen mindestens CHF 5'600. Der Marktlohn liegt jedoch deutlich über diesen GAV-Mindestwerten. Erfahrene Elektroinstallateur:innen in der Deutschschweiz erreichen 2026 Jahreslöhne zwischen CHF 68'000 und CHF 95'000. Mit Spezialisierung auf Photovoltaik, KNX-Gebäudeautomation oder Sicherheitsanlagen sind auch CHF 100'000 und mehr keine Seltenheit.",
          "Besonders gefragt sind aktuell drei Rollen. Erstens Elektroplaner:innen mit EFZ oder Weiterbildung, die die Planungsseite der Energiewende umsetzen. Zweitens bauleitende Monteur:innen, die die operative Führung auf Baustellen übernehmen und den Nachwuchs der Betriebe repräsentieren. Drittens Servicetechniker:innen für Notstromanlagen, USV-Systeme und Sicherheitsbeleuchtungen, deren Wartung sicherheitskritisch ist und die auch in wirtschaftlich schwierigen Zeiten nicht aufschiebbar bleibt.",
        ],
      },
      {
        id: "gebaeudetechnik-der-stille-wachstumsmarkt-mit-den-groessten-personalluecken",
        title: "Gebäudetechnik der stille Wachstumsmarkt mit den grössten Personallücken",
        paragraphs: [
          "Kaum eine Branche hat in den letzten fünf Jahren einen so stillen, aber massiven Nachfrageschub erlebt wie die Gebäudetechnik. Die Musterverordnung der Kantone im Energiebereich MuKEn 2014 schreibt seit 2020 in fast allen Deutschschweizer Kantonen den Ersatz fossiler Heizungen durch erneuerbare Systeme vor. Millionen von Öl- und Gasheizungen in der Schweiz müssen in den kommenden zehn Jahren ersetzt werden, meist durch Wärmepumpen, Fernwärmeanschlüsse oder Hybridsysteme. Parallel dazu wächst die Nachfrage nach kontrollierter Wohnraumlüftung, nach Kältetechnik in Gewerbe- und Industriegebäuden und nach intelligenter Gebäudeautomation.",
          "Die Personaldecke in der Gebäudetechnik reicht für dieses Volumen bei weitem nicht aus. Servicetechniker:innen für Heizung und Wärmepumpen sind so gesucht, dass viele etablierte Betriebe im Grossraum Zürich mehrere Stellen dauerhaft offen führen. Sanitärinstallateur:innen mit Service-Erfahrung sind ebenfalls Mangelware. Der schweizerische Durchschnittslohn für Sanitärinstallateur:innen EFZ liegt laut jobs.ch bei CHF 68'000, aber Servicetechniker mit Erfahrung erreichen deutlich mehr, in Zürich typischerweise CHF 78'000 bis CHF 98'000.",
          "Besonders akut ist der Mangel bei den planerischen und leitenden Rollen. Gebäudetechnikplaner:innen EFZ mit Fachrichtung Heizung, Lüftung, Klima oder Sanitär sind schweizweit gesucht. Der schweizerische Durchschnittslohn liegt laut jobs.ch aktuell bei CHF 76'700, mit deutlichem Aufwärtstrend seit 2021. In Zürich und bei spezialisierten Planungsbüros sind Ranges zwischen CHF 78'000 und CHF 105'000 üblich. Projektleiter:innen für Heizung, Lüftung und Klima erreichen laut Indeed 2026 einen schweizerischen Durchschnittslohn von CHF 104'000, wobei erfahrene Projektleiter:innen mit voller kaufmännischer Verantwortung Jahreslöhne bis CHF 125'000 realisieren.",
        ],
      },
      {
        id: "warum-der-fachkraeftemangel-in-diesen-berufen-mittelfristig-noch-schlimmer-wird",
        title: "Warum der Fachkräftemangel in diesen Berufen mittelfristig noch schlimmer wird",
        paragraphs: [
          "Wer die Zahlen des Bundesamts für Statistik BFS zur demografischen Entwicklung der Schweizer Erwerbsbevölkerung anschaut, erkennt schnell, dass sich die Situation in den nächsten fünf bis zehn Jahren nicht entspannen wird. Zwischen 2025 und 2030 gehen jährlich rund 90'000 Erwerbstätige in Pension. Gleichzeitig treten nur etwa 75'000 Junge neu in den Arbeitsmarkt ein. Diese demografische Lücke von 15'000 Personen pro Jahr trifft alle Branchen, konzentriert sich aber besonders auf jene, in denen bereits heute Personalmangel herrscht. In der Pflege verstärkt sich die Situation zusätzlich durch die demografische Alterung der Bevölkerung. Die Nachfrage nach Pflegeleistungen wächst genau in dem Moment, in dem die Personaldecke schrumpft. Die Pflegeinitiative wirkt langfristig, aber die Ausbildungspipeline braucht mindestens fünf bis sieben Jahre, bis sie im System spürbar mehr Fachpersonen bringt.",
          "In Bau und Gebäudetechnik wirkt neben der Demografie ein zweiter struktureller Treiber. Die Energiewende, die Sanierung der Infrastruktur, die Elektrifizierung des Verkehrs und der stetige Ausbau des Wohnraums erzeugen eine Nachfrage nach Fachkräften, die durch klassische Ausbildungswege nicht abgedeckt werden kann. Der Schweizerische Baumeisterverband dokumentiert seit Jahren, dass die Anzahl neu abgeschlossener Lehrverträge in Bauberufen konstant unter dem Bedarf liegt. Ähnliches gilt für EIT.swiss in der Elektrobranche und für suissetec in der Gebäudetechnik.",
          "Die Konsequenz für Fachkräfte ist eindeutig. Wer heute in einem dieser Berufe arbeitet, hat 2026 und in den kommenden Jahren die Wahl. Wechseloptionen sind zahlreich, Löhne verhandelbar, Weiterbildungsangebote grosszügig. Die Konsequenz für Betriebe ist ebenso eindeutig. Wer weiterhin nach dem gleichen Muster rekrutiert wie vor fünf Jahren, verliert. Wer Prozesse verkürzt, Lohntransparenz schafft und Fachkräften auf Augenhöhe begegnet, gewinnt.",
        ],
      },
      {
        id: "was-du-als-fachkraft-in-einem-mangelberuf-2026-tun-kannst",
        title: "Was du als Fachkraft in einem Mangelberuf 2026 tun kannst",
        paragraphs: [
          "Wenn du in einem der oben beschriebenen Berufe arbeitest, sitzt du in einer Verhandlungsposition, die viele Fachkräfte immer noch unterschätzen. Drei konkrete Empfehlungen aus unserer täglichen Vermittlungsarbeit. Erstens, kenne deinen Marktwert. Der aktuelle Lohn ist nicht dasselbe wie dein Marktwert. Zwischen beiden liegen bei erfahrenen Fachkräften in Mangelberufen oft CHF 500 bis CHF 1'500 pro Monat. Eine ehrliche Standortbestimmung durch einen Marktkenner deiner Branche kostet dich nichts und gibt dir eine Grundlage, mit der du entweder gezielt wechselst oder bei deinem aktuellen Arbeitgeber sauber verhandelst.",
          "Zweitens, denke in Karrierestufen, nicht in Job-Wechseln. Die stärksten Lohnsprünge entstehen nicht durch häufige Wechsel, sondern durch die richtigen Wechsel auf die nächste Karrierestufe. Der Sprung von Bauleiter zu Projektleiter, von Servicetechniker zu Serviceleiter, von Pflegefachperson HF zu Fachexpertin Pflege NDS HF, von Elektroplaner zu Projektleiter Elektro. Jede dieser Stufen bringt strukturell mehr Lohn und mehr Verantwortung. Ein guter Vermittler denkt in solchen Karrierebögen mit dir mit.",
          "Drittens, sei bei Wechseln transparent zu deinen Prioritäten. Nicht jeder Wechsel ist eine reine Lohnfrage. Anfahrt, Team, Projektstruktur, Weiterbildungsbudget, Führungskultur, Homeoffice-Anteil bei administrativen Rollen. All das zählt und lässt sich in einem sauberen Gespräch mit einem Marktkenner klären, bevor du überhaupt in einen Bewerbungsprozess einsteigst.",
        ],
      },
      {
        id: "was-das-fuer-betriebe-in-bau-elektro-gebaeudetechnik-und-pflege-2026-bedeutet",
        title: "Was das für Betriebe in Bau, Elektro, Gebäudetechnik und Pflege 2026 bedeutet",
        paragraphs: [
          "Auf der anderen Seite des Marktes stehen die Betriebe, für die der Fachkräftemangel zur Existenzfrage geworden ist. Wir sprechen jede Woche mit Geschäftsführer:innen und Personalverantwortlichen, die uns bestätigen, dass die klassische Personalgewinnung nicht mehr funktioniert. Inserate auf Standard-Plattformen bringen weniger und schwächere Bewerbungen als vor fünf Jahren. Was funktioniert, ist eine aktive, direkte Ansprache passiver Fachkräfte, die aktuell nicht auf Jobsuche sind.",
          "Was ebenfalls funktioniert, ist Prozess-Schnelligkeit. In einem Markt, in dem gute Kandidat:innen drei bis fünf parallele Angebote haben, verliert der Betrieb, der drei Wochen für die interne Freigabe braucht und dann noch mal zwei Wochen für den zweiten Gesprächstermin. Wir haben diese Erkenntnis in unserem separaten Blog zum Bewerbungsprozess ausführlicher dokumentiert.",
          "Was dritter Erfolgsfaktor ist, ist Transparenz. Lohnbandbreiten im Inserat, klare Angaben zu Pensum, Ort, Homeoffice-Regelung und Start. Alles andere kostet Zeit und Nerven auf beiden Seiten. Der Erwartungshaltung \"Gehalt nach Vereinbarung\" gehört 2026 endgültig der Vergangenheit an. Wer Fachkräfte gewinnen will, muss zeigen, dass er ihre Zeit respektiert.",
        ],
      },
      {
        id: "fazit-und-was-du-jetzt-konkret-tun-kannst",
        title: "Fazit und was du jetzt konkret tun kannst",
        paragraphs: [
          "Der Fachkräftemangel in der Schweiz hat sich 2026 nicht abgeschwächt, wie der Gesamtindex auf den ersten Blick suggeriert. Er hat sich verlagert und konzentriert. In Pflege, Bau, Elektro und Gebäudetechnik ist die Situation angespannter denn je. Die demografische Entwicklung, die Energiewende und die Sanierung der Infrastruktur werden diesen Druck in den kommenden Jahren weiter erhöhen.",
          "Für Fachkräfte in diesen Berufen bedeutet das eine Verhandlungsposition, die es in der Schweiz noch nie so eindeutig gab. Für Betriebe bedeutet es einen Zwang zur Professionalisierung der Personalgewinnung.",
          "Wir bei ScaleZ arbeiten genau in diesem Spannungsfeld. Wir kennen die Verticals Bau, Elektro und Pflege in der Deutschschweiz aus laufenden Gesprächen mit beiden Seiten. Wenn du wissen willst, wo du mit deinem Profil im Markt stehst, oder als Betrieb einen strukturierten Zugang zu passiven Fachkräften suchst, melde dich bei uns unter scale-z.ch. Ein 30-minütiges Erstgespräch ist kostenlos, unverbindlich und meistens der beste Startpunkt.",
        ],
      },
    ],
  },
  {
    slug: "tiefbau-zuerich-karriere-lohn-2026",
    title: "Tiefbau Zürich 2026 was du auf welcher Karrierestufe verdienst und wohin dein Weg als Bauleiter führen kann",
    category: "Markt",
    readTime: "6 Min.",
    publishedAt: "9. September 2026",
    teaser:
      "Der Tiefbau in der Region Zürich boomt und die Nachfrage nach Bauleiter:innen und Projektleiter:innen ist so hoch wie seit Jahren nicht mehr. Wir zeigen dir, welche Karrierestufen es realistisch gibt, was sie verdienen und was den Sprung von einer Stufe zur nächsten wirklich ausmacht.",
    intro:
      "Der Schweizer Tiefbau steht 2026 unter Druck. Werkleitungen müssen erneuert werden, das Strassennetz altert, Klimaadaptation und Schwammstadt-Konzepte kommen als komplett neue Anforderungsfelder dazu. Gleichzeitig fehlen erfahrene Bauleiter:innen und Projektleiter:innen so stark, dass Ingenieurbüros im Raum Zürich mittlerweile aktiv um jeden qualifizierten Kopf kämpfen. Wir sprechen jede Woche mit Fachkräften im Tiefbau und mit den Büros, die sie suchen. Was uns dabei auffällt: Viele Bauleiter:innen kennen ihren eigenen Karriereweg gar nicht richtig und unterschätzen, was auf der nächsten Stufe realistisch drin wäre. Genau darum geht es hier.",
    sections: [
      {
        id: "warum-der-tiefbau-in-zuerich-2026-zu-den-spannendsten-baubereichen-gehoert",
        title: "Warum der Tiefbau in Zürich 2026 zu den spannendsten Baubereichen gehört",
        paragraphs: [
          "Der Kanton Zürich investiert allein in den nächsten fünf Jahren mehrere hundert Millionen Franken in die Erneuerung von Strassen, Werkleitungen und Kunstbauten. Dazu kommen private Bauherrschaften, die Erschliessungen und Infrastrukturprojekte in noch nie dagewesenem Tempo abwickeln. Klimaadaptation, digitale Planungsmethoden wie BIM und Schwammstadt-Konzepte machen aus dem einst als konservativ geltenden Tiefbau ein Feld, in dem sich Ingenieurwesen und Innovation direkt begegnen.",
          "Für Bauleiter:innen und Projektleiter:innen bedeutet das drei Dinge. Erstens: Es gibt mehr offene Stellen als qualifizierte Kandidat:innen. Zweitens: Die Löhne haben in den letzten 24 Monaten spürbar angezogen. Drittens: Wer heute wechseln will, hat die Wahl zwischen etablierten Ingenieurbüros, global aufgestellten Beratungsunternehmen und spezialisierten Infrastrukturplanern. Die Chance liegt gerade auf dem Tisch.",
        ],
      },
      {
        id: "die-vier-realen-karrierestufen-im-tiefbau-von-junior-bauleiter-zu-chef-oder-projektleiter",
        title: "Die vier realen Karrierestufen im Tiefbau von Junior Bauleiter zu Chef- oder Projektleiter",
        paragraphs: [
          "Die Karrierewege im Schweizer Tiefbau lassen sich grob in vier Stufen einteilen. Auf der ersten Stufe stehst du als Junior Bauleiter:in oder Bauleiter:in Einstieg, meist direkt nach der Ausbildung als Techniker HF Tiefbau, Bauingenieur:in FH oder ETH. Du übernimmst kleinere Baustellen, arbeitest eng mit erfahrenen Chefbauleitern zusammen und lernst die operative Baustellenführung von Grund auf. Auf der zweiten Stufe bist du als Bauleiter:in mit voller Verantwortung für eigene Baustellen unterwegs. Du überwachst Qualität, Kosten und Termine, koordinierst Unternehmer und Fachplaner selbstständig und trägst die Verantwortung für Bauausführung und Arbeitssicherheit vor Ort. Diese Stufe erreichst du typischerweise nach zwei bis fünf Jahren praktischer Erfahrung. Die dritte Stufe ist der Sprung in die Projektleitung. Als Projektleiter:in oder Projektingenieur:in verantwortest du Projekte über den gesamten Lebenszyklus, von der ersten Studie bis zur Inbetriebnahme. Du erstellst technische Berichte, Kostenschätzungen und Ausschreibungsunterlagen, koordinierst Behörden und Bauherrschaften und trägst die kaufmännische Gesamtverantwortung. Diese Rolle setzt in der Regel ein FH- oder ETH-Studium und fünf bis zehn Jahre einschlägige Erfahrung voraus. Auf der vierten Stufe schliesslich stehen die Chefbauleitung oder die Senior Projektleitung. Du führst mehrere Bauleiter:innen, entwickelst strategisch das Portfolio des Büros mit und wirst Ansprechperson für die grössten Bauherrschaften und komplexesten Projekte.",
        ],
      },
      {
        id: "was-du-in-zuerich-auf-welcher-stufe-wirklich-verdienst",
        title: "Was du in Zürich auf welcher Stufe wirklich verdienst",
        paragraphs: [
          "Die Löhne im Tiefbau haben in Zürich in den letzten Jahren spürbar angezogen, liegen aber je nach Bürogrösse, Spezialisierung und Verantwortung deutlich auseinander. Wir orientieren uns hier an tatsächlichen Werten aus laufenden Vermittlungen und offenen Anzeigen im Raum Zürich 2026. Als Einstieg mit Perspektive für Bauleiter:innen mit erster praktischer Erfahrung liegen realistische Jahresgehälter bei CHF 90'000 bis 115'000. Wichtig hier: In dieser Range steckt bereits Entwicklungsperspektive. Wer nach zwei bis drei Jahren in dieser Rolle steht und Baustellen selbstständig führt, kann in der nächsten Verhandlung deutlich zulegen.",
          "Als voll verantwortliche:r Bauleiter:in mit drei bis sieben Jahren Erfahrung liegen die Löhne typischerweise bei CHF 110'000 bis 135'000, abhängig von Projektgrösse und Komplexität der geführten Baustellen. Wer auf Kunstbauten oder komplexe Werkleitungsprojekte spezialisiert ist, landet in dieser Range oft am oberen Ende.",
          "Als Projektleiter:in oder Projektingenieur:in mit ETH- oder FH-Hintergrund und fünf bis zehn Jahren Erfahrung sind Jahresgehälter zwischen CHF 120'000 und 145'000 der Marktstandard. In global aufgestellten Ingenieurbüros oder bei besonderer Verantwortung für Grossprojekte sind auch CHF 150'000 und mehr keine Seltenheit. Chefbauleitung und Senior Projektleitung liegen erfahrungsgemäss zwischen CHF 140'000 und 170'000, mit erheblichen Ausreissern nach oben je nach Führungsspanne und Bürogrösse.",
        ],
      },
      {
        id: "der-eigentliche-sprung-was-zwischen-bauleiter-und-projektleiter-wirklich-passiert",
        title: "Der eigentliche Sprung was zwischen Bauleiter und Projektleiter wirklich passiert",
        paragraphs: [
          "Der Wechsel von der operativen Bauleitung in die Projektleitung ist der grösste inhaltliche Sprung in dieser Karriere. Nicht wegen der zusätzlichen Franken, sondern wegen der veränderten Rolle. Als Bauleiter:in bist du der Anker auf der Baustelle. Als Projektleiter:in bist du der Anker gegenüber der Bauherrschaft.",
          "Was diesen Sprung unterscheidet, sind drei Kompetenzfelder. Erstens die kaufmännische Steuerung. Du verantwortest ein Budget über den gesamten Projektlebenszyklus, nicht nur die Ausführungsphase. Zweitens die Kommunikation mit Bauherrschaften und Behörden. Du bist die Person, die einer Gemeindeverwaltung erklären muss, warum die Erneuerung einer Werkleitung mehr kostet als geplant. Drittens die Fähigkeit, digitale Planungsmethoden wie BIM aktiv voranzutreiben und nachhaltige Konzepte wie Schwammstadt oder Klimaadaptation in die Projektierung zu integrieren.",
          "Wer diesen Sprung machen will, sollte gezielt Projekte suchen, in denen genau diese Verantwortung schrittweise übertragen wird. Genau darauf achten die besseren Ingenieurbüros mittlerweile in ihren Stellenausschreibungen: Sie bieten nicht nur eine Rolle, sondern einen Entwicklungspfad.",
        ],
      },
      {
        id: "worauf-du-bei-einem-wechsel-im-tiefbau-achten-solltest",
        title: "Worauf du bei einem Wechsel im Tiefbau achten solltest",
        paragraphs: [
          "Der Schweizer Tiefbau-Arbeitsmarkt ist 2026 in einer Situation, in der Fachkräfte die Wahl haben. Genau deshalb lohnt es sich, vor einem Wechsel nicht nur auf den Lohn zu schauen, sondern auf drei Punkte, die den Unterschied zwischen einem guten und einem sehr guten Arbeitgeber machen. Erstens die Projektstruktur. Frage konkret nach den Projekten der letzten zwölf Monate. Ein Büro, das ausschliesslich Standard-Werkleitungsbau macht, gibt dir andere Erfahrungen als eines, das komplexe Kunstbauten oder innovative Infrastrukturprojekte begleitet. Beides kann richtig sein, aber du solltest wissen, worauf du dich einlässt.",
          "Zweitens die Entwicklungsperspektive. Frage explizit, wie der Weg zur nächsten Karrierestufe im konkreten Büro aussieht. Wer als Antwort ein \"das schauen wir dann\" bekommt, hat die Antwort im Grunde schon. Ein gutes Büro kann dir konkret sagen, welche Meilensteine für einen Aufstieg definiert sind und welche Weiterbildungen unterstützt werden.",
          "Drittens die Arbeitsweise. Homeoffice-Regelung für administrative Tätigkeiten, digitale Arbeitsmittel, moderne Büroräume, flexible Arbeitszeiten. Das sind keine Nebensächlichkeiten, sondern die Faktoren, die im Alltag über Zufriedenheit und Belastung entscheiden.",
        ],
      },
      {
        id: "zwei-aktuelle-moeglichkeiten-fuer-tiefbau-fachkraefte-in-zuerich",
        title: "Zwei aktuelle Möglichkeiten für Tiefbau-Fachkräfte in Zürich",
        paragraphs: [
          "Wir vermitteln aktuell zwei Positionen im Tiefbau in Zürich-Oerlikon, die genau auf zwei aufeinanderfolgende Karrierestufen einzahlen. Beide sind bei etablierten Ingenieurbüros mit moderner Struktur und klarer Entwicklungsperspektive. Für Einsteiger:innen und Bauleiter:innen mit ersten Jahren Erfahrung ist die Position Bauleiter:in Infrastruktur, Einstieg mit Perspektive spannend. Anspruchsvolle Tiefbauprojekte im Strassen-, Werkleitungs- und Kunstbau in Zürich, gezielte Entwicklung durch erfahrene Chefbauleiter und ein Jahreslohn zwischen CHF 90'000 und 115'000. Details und Bewerbung unter https://www.scale-z.ch/kandidaten?position=Bauleiter%3Ain%20Infrastruktur%2C%20Einstieg%20mit%20Perspektive",
          "Für erfahrenere Bauingenieur:innen mit Studium und mehreren Jahren Berufserfahrung passt die Position Projektleiter und Projektingenieur Infrastruktur für Strassen und Kunstbauten. Ein extrem erfolgreiches, global aufgestelltes Ingenieurbüro in Zürich Oerlikon, das die Infrastruktur von morgen mitgestaltet und dabei aktiv auf BIM und Klimaadaptation setzt. Jahreslohn zwischen CHF 95'000 und 130'000. Details und Bewerbung unter https://www.scale-z.ch/kandidaten?position=Projektleiter%20und%20Projektingenieur%20Infrastruktur%20f%C3%BCr%20Strassen%20und%20Kunstbauten",
          "Wenn dein Profil zu einer der beiden Rollen passt oder du dich fragst, wo du selbst im Markt stehst, melde dich bei uns. Wir ordnen deine Möglichkeiten ehrlich ein, auch wenn eine der beiden Positionen am Ende nicht der richtige nächste Schritt ist.",
        ],
      },
    ],
  },
  {
    slug: "gav-elektrobranche-2026-2029",
    title: "Neuer GAV 2026 in der Schweizer Elektrobranche was sich für dich als Fachkraft jetzt ändert",
    category: "Markt",
    readTime: "6 Min.",
    publishedAt: "26. August 2026",
    teaser:
      "Seit dem 1. Januar 2026 gilt der neue Gesamtarbeitsvertrag der Schweizer Elektrobranche. Mindestlöhne, Arbeitszeit und Auslagenersatz wurden für die kommenden vier Jahre neu geregelt. Wir zeigen dir, welche Zahlen für dich als Elektroinstallateur:in, Teamleiter:in oder Gebäudeinformatiker:in wirklich zählen.",
    intro:
      "Der neue GAV 2026 bis 2029 der Schweizer Elektrobranche ist mehr als eine formale Vertragsverlängerung. Er definiert die Mindestlöhne, die Jahresbruttoarbeitszeit und die Regeln zum Auslagenersatz neu und läuft bis Ende 2029. Für rund 40'000 Fachkräfte in der Elektrobranche bedeutet das konkrete Zahlen zum Nachrechnen. Wir haben die Lohnvereinbarung Punkt für Punkt durchgearbeitet und ordnen die wichtigsten Änderungen so ein, dass du in fünf Minuten weisst, wo du stehst und was der Vertrag für deine nächste Lohnverhandlung bedeutet.",
    sections: [
      {
        id: "was-der-neue-gav-elektrobranche-ueberhaupt-regelt",
        title: "Was der neue GAV Elektrobranche überhaupt regelt",
        paragraphs: [
          "Der neue Gesamtarbeitsvertrag ist am 1. Januar 2026 in Kraft getreten und läuft bis Ende 2029. Verhandelt wurde er zwischen dem Arbeitgeberverband EIT.swiss und den Gewerkschaften Unia und Syna. Die Delegierten von EIT.swiss haben den Vertrag am 17. September 2025 genehmigt, kurz darauf hat die Paritätische Landeskommission die Details für 2026 festgezurrt.",
          "Wichtig zu wissen: Der GAV gilt allgemeinverbindlich für alle Betriebe, die im Nieder- oder Schwachstrombereich elektrische Installationen ausführen, sowie für vorbereitende Arbeiten wie Schlitzarbeiten, Trassenmontagen oder Rohreinlagen. Ob du in einem klassischen Elektroinstallationsbetrieb, im Bereich Gebäudeinformatik oder in der Anlagentechnik arbeitest, spielt keine Rolle. Sobald dein Arbeitgeber in den beschriebenen Bereich fällt, hast du Anspruch auf die im GAV festgelegten Mindestbedingungen.",
        ],
      },
      {
        id: "die-neuen-mindestloehne-2026-im-ueberblick",
        title: "Die neuen Mindestlöhne 2026 im Überblick",
        paragraphs: [
          "Der GAV unterscheidet klar nach Ausbildung, Funktion und Branchenerfahrung. Für 2026 gelten diese Mindestlöhne pro Monat (13x jährlich). Elektroinstallateur:in EFZ startet bei CHF 4'500 direkt nach dem Abschluss. Nach einem vollen Jahr Branchenerfahrung in der Schweiz steigt der Mindestlohn auf CHF 5'000. Bis 2029 klettert er stufenweise auf CHF 4'700 beziehungsweise CHF 5'200.",
          "Montage-Elektriker:in EFZ beginnt bei CHF 4'300 nach Abschluss und CHF 4'700 nach einem Branchenjahr. Gebäudeinformatiker:innen und Telematiker:innen EFZ haben mit CHF 4'770 nach Abschluss und CHF 5'300 nach einem Branchenjahr die höchsten Einstiegsmindestlöhne unter den EFZ-Berufen. Teamleiter:innen mit Prüfungszertifikat nach den Ausbildungsvorgaben von EIT.swiss oder vertraglich anerkannter Gleichwertigkeit erhalten mindestens CHF 5'600 pro Monat.",
          "Für Fachkräfte mit schulischem Berufsabschluss oder ausländischer Elektrofachausbildung gelten CHF 4'300 nach Abschluss und CHF 4'600 nach einem Branchenjahr. Wer ohne Berufsabschluss in der Elektrobranche arbeitet, hat Anspruch auf CHF 4'200 zu Beginn und CHF 4'500 nach zwei Jahren Branchenerfahrung.",
        ],
      },
      {
        id: "arbeitszeit-auslagenersatz-und-weitere-aenderungen-die-zaehlen",
        title: "Arbeitszeit Auslagenersatz und weitere Änderungen die zählen",
        paragraphs: [
          "Die Paritätische Landeskommission hat die Jahresbruttoarbeitszeit für 2026 auf 2'088 Stunden festgelegt. Umgerechnet auf 40 Stunden pro Woche ergibt sich daraus ein solider Referenzwert für alle Berechnungen rund um Überstunden, Ferien und Krankheitstage.",
          "Neu geregelt ist auch der Auslagenersatz für auswärtige Arbeit bei täglicher Heimkehr. Wenn dein Arbeitsort mehr als 15 Minuten Wegstrecke vom Firmendomizil entfernt liegt, hast du Anspruch auf mindestens CHF 18 pro Tag für die auswärtige Verpflegung. Klingt nach wenig, summiert sich aber übers Jahr auf mehrere hundert Franken, die viele Fachkräfte gar nicht einfordern.",
          "Zusätzlich zur Lohnstruktur wurde für alle Mitarbeitenden, die vor dem 1. Oktober 2025 beim gleichen Arbeitgeber angestellt waren, per 1. Januar 2026 eine generelle Erhöhung der Effektivlöhne um CHF 50 pro Monat beschlossen. Wer den Job später angetreten hat, ist von dieser generellen Anhebung ausgeschlossen. Der Vollzugskosten- und Weiterbildungsbeitrag beträgt weiterhin CHF 21 pro Monat und wird sowohl vom Arbeitnehmenden als auch vom Arbeitgeber getragen.",
        ],
      },
      {
        id: "mindestlohn-ist-nicht-marktlohn-und-darin-liegt-deine-chance",
        title: "Mindestlohn ist nicht Marktlohn und darin liegt deine Chance",
        paragraphs: [
          "Die GAV-Mindestlöhne sind genau das: Mindestansprüche. Sie schützen dich vor Unterbezahlung, sagen aber wenig über deinen tatsächlichen Marktwert aus. Im Schnitt verdienen Elektroinstallateur:innen in der Schweiz laut aktuellen Lohnstatistiken zwischen CHF 68'000 und CHF 85'000 pro Jahr, im Kanton Zürich liegt der Durchschnitt bei rund CHF 72'000 brutto. Erfahrene Fachkräfte mit Spezialisierungen wie Photovoltaik, Gebäudeautomation oder Elektroplanung erreichen häufig CHF 95'000 bis über CHF 110'000.",
          "Zwischen dem Mindestlohn nach EFZ (CHF 58'500 bei 13 Monatslöhnen) und dem Marktdurchschnitt liegen also rund CHF 10'000 bis CHF 25'000 pro Jahr. Diese Lücke füllen Erfahrung, Zusatzqualifikationen, Verantwortung und Verhandlungsgeschick. Wer den Unterschied zwischen dem, was der GAV garantiert, und dem, was der Markt tatsächlich zahlt, kennt, verhandelt in der Regel deutlich stärker.",
          "Regionale Unterschiede spielen ebenfalls eine grosse Rolle. In Zürich und Basel-Stadt liegen die Löhne teils bis zu 20 Prozent höher als in ländlichen Kantonen. Auch die Betriebsgrösse und der Auftragsmix des Arbeitgebers wirken sich direkt aus. Grosse Generalunternehmen und Industriebetriebe zahlen für die gleiche Funktion oft mehr als kleinere Handwerksbetriebe, dafür bieten kleinere Betriebe häufig mehr Verantwortung und schnellere Aufstiegsmöglichkeiten.",
        ],
      },
      {
        id: "was-du-als-fachkraft-in-der-elektrobranche-jetzt-tun-solltest",
        title: "Was du als Fachkraft in der Elektrobranche jetzt tun solltest",
        paragraphs: [
          "Prüfe zuerst, ob dein aktueller Lohn mindestens den GAV-Vorgaben entspricht. Die Zahlen findest du oben, den vollständigen Text der Lohnvereinbarung 2026 stellt die Paritätische Landeskommission auf plk-elektro.ch als PDF zur Verfügung. Falls dein Effektivlohn unter dem Mindestlohn liegt, hast du Anspruch auf sofortige Anpassung. Bei Unsicherheiten wendest du dich am besten an den Rechtsdienst von EIT.swiss oder direkt an deine Gewerkschaft.",
          "Wenn du oberhalb des Mindestlohns liegst, aber unsicher bist, wo du im Marktvergleich stehst, hilft eine ehrliche Standortbestimmung. Berufserfahrung, Weiterbildungen wie die Fachprüfung zum Elektro-Teamleiter oder Sicherheitsberater, sowie Spezialgebiete wie KNX, Photovoltaik oder Gebäudeautomation heben deinen Marktwert oft deutlich stärker, als du denkst.",
          "Genau hier setzen wir bei ScaleZ an. Wir kennen die Elektrobranche in der Deutschschweiz, sprechen mit Betrieben aller Grössenordnungen und wissen, welche Löhne aktuell für welche Profile bezahlt werden. Wenn du wissen willst, wo du mit deinem Profil im Markt stehst, melde dich bei uns. Wir ordnen deinen Marktwert gemeinsam mit dir ein, diskret und ohne Verpflichtung.",
        ],
      },
    ],
  },
  {
    slug: "gehalt-verhandeln-schweiz",
    title: "Gehalt verhandeln in der Schweiz. Der ehrliche Leitfaden.",
    category: "Prozess",
    readTime: "6 Min.",
    publishedAt: "24. August 2026",
    teaser:
      "Die meisten verhandeln fünf Mal im Leben ihren Lohn. Ihr Gegenüber jede Woche. So drehst Du dieses Ungleichgewicht um.",
    intro:
      "Die meisten Menschen verhandeln in ihrem ganzen Berufsleben nur eine Handvoll Mal ihren Lohn. Ihr Gegenüber macht genau das jede Woche. Dieses Ungleichgewicht ist der eigentliche Grund, warum so viele in der Schweiz unter ihrem Wert bezahlt werden. Dieser Leitfaden dreht es um, konkret und ohne Floskeln.",
    sections: [
      {
        id: "warum-der-moment-vor-der-verhandlung-schon-fast-alles-entscheidet",
        title: "Warum der Moment vor der Verhandlung schon fast alles entscheidet",
        paragraphs: [
          "Die verbreitetste Fehlannahme ist, dass eine Lohnverhandlung im Gespräch stattfindet. In Wahrheit ist sie meist schon entschieden, bevor Du den Raum betrittst. Entscheidend ist, ob Du weisst, was Deine Arbeit auf dem aktuellen Markt kostet, nicht was Du letztes Jahr verdient hast.",
          "Genau hier machen die meisten den ersten Fehler. Sie leiten ihre Forderung vom eigenen alten Lohn ab, plus ein paar Prozent. Der Markt funktioniert aber nicht so. Ein Wechsel wird nicht am alten Gehalt gemessen, sondern daran, was die Position und Deine Fähigkeiten heute wert sind. Wer beim alten Lohn ansetzt, zementiert eine womöglich jahrelange Unterbezahlung.",
          "Bevor Du also über eine Zahl sprichst, brauchst Du drei Referenzpunkte. Den Medianlohn Deiner Branche und Region, verlässlich zu finden in der Lohnstrukturerhebung des Bundesamts für Statistik. Die Spanne innerhalb Deiner Funktion, denn zwischen unterem und oberem Viertel liegen oft mehrere hundert Franken im Monat. Und den regionalen Unterschied, denn dieselbe Stelle wird in der Region Zürich deutlich anders bezahlt als etwa im Tessin.",
        ],
      },
      {
        id: "die-erste-zahl-wer-sie-nennt-hat-oft-schon-verloren-oder-gewonnen",
        title: "Die erste Zahl. Wer sie nennt, hat oft schon verloren, oder gewonnen",
        paragraphs: [
          "Es gibt eine alte Faustregel, nenne nie die erste Zahl. Sie stimmt nur halb. Richtig ist, wer eine schlecht vorbereitete erste Zahl nennt, verliert. Wer eine gut begründete erste Zahl nennt, setzt den Anker für das ganze Gespräch.",
          "In der Schweiz fragen viele Arbeitgeber früh nach Deiner Lohnvorstellung. Eine Ausweichantwort wie das ist verhandelbar wirkt unsicher. Besser ist eine konkrete Spanne, deren unteres Ende bereits das ist, womit Du zufrieden wärst. Denn erfahrungsgemäss landet das Ergebnis am unteren Rand der genannten Spanne. Nennst Du 90 bis 100, rechne mit 90. Deine Spanne sollte also selbstbewusst, aber begründbar sein, gestützt auf die Marktzahlen, die Du vorher recherchiert hast.",
        ],
      },
      {
        id: "der-teil-den-fast-alle-vergessen-lohn-ist-nicht-nur-der-lohn",
        title: "Der Teil, den fast alle vergessen. Lohn ist nicht nur der Lohn",
        paragraphs: [
          "Wer nur auf die Bruttozahl starrt, lässt in der Schweiz regelmässig Geld liegen. Ein Angebot besteht aus deutlich mehr Bausteinen, und mehrere davon sind verhandelbar, gerade wenn beim Grundlohn wenig Bewegung ist.",
          "Dazu gehört der Anteil des dreizehnten Monatslohns, die Höhe und Bedingung eines Bonus, der Arbeitgeberanteil an der Pensionskasse, der deutlich über dem gesetzlichen Minimum liegen kann, die Anzahl Ferientage, Weiterbildungsbudget, Homeoffice-Regelungen und die Übernahme von Reise- oder Verpflegungskosten. Wenn eine Firma beim Grundlohn an eine interne Grenze stösst, ist sie oft bei diesen Punkten flexibel. Wer nur über eine einzige Zahl verhandelt, verschenkt genau diesen Spielraum.",
        ],
      },
      {
        id: "wenn-das-erste-angebot-zu-tief-ist",
        title: "Wenn das erste Angebot zu tief ist",
        paragraphs: [
          "Das erste Angebot ist selten das letzte. Ein zu tiefes Angebot ist kein Grund zur Enttäuschung, sondern der normale Anfang. Der entscheidende Moment ist Deine Reaktion darauf.",
          "Der Fehler wäre, sofort zuzusagen aus Angst, die Chance zu verlieren, oder umgekehrt beleidigt abzubrechen. Besser ist eine ruhige, sachliche Rückmeldung, die Wertschätzung fürs Angebot zeigt, aber klar auf die Differenz zu Deinen recherchierten Marktzahlen verweist. Nicht ich will mehr, sondern für diese Verantwortung und meine Erfahrung liegt der Marktwert bei X, hier ist, worauf ich das stütze. Damit verlagerst Du das Gespräch weg von Deinen Wünschen hin zu objektiven Fakten, und genau dort bist Du stark.",
        ],
      },
      {
        id: "warum-eine-externe-begleitung-den-unterschied-macht",
        title: "Warum eine externe Begleitung den Unterschied macht",
        paragraphs: [
          "An diesem Punkt zeigt sich der grösste Vorteil, wenn Du nicht allein verhandelst. Wer selbst am Tisch sitzt, ist emotional beteiligt, will den Job, will keinen Konflikt und gibt deshalb oft zu früh nach. Jemand, der den Markt kennt und für Dich verhandelt, hat diese Hemmung nicht und weiss zusätzlich, wo bei einer bestimmten Firma real noch Spielraum ist.",
          "Genau das ist ein Teil unserer Arbeit bei ScaleZ. Wir gehen mit unseren Kandidatinnen und Kandidaten vor jedem Gespräch durch, was realistisch drin liegt, und lassen sie in der Verhandlung nicht allein. Wenn ein erstes Angebot zu tief ausfällt, geben wir nicht klein bei, sondern holen gemeinsam das beste Ergebnis heraus, das für die Position tatsächlich möglich ist.",
        ],
      },
      {
        id: "das-wichtigste-in-drei-saetzen",
        title: "Das Wichtigste in drei Sätzen",
        paragraphs: [
          "Kenne Deinen Marktwert, bevor Du über eine Zahl sprichst, und leite ihn vom Markt ab, nicht von Deinem alten Lohn. Verhandle nie nur über den Grundlohn, sondern über das gesamte Paket. Und behandle ein zu tiefes erstes Angebot als Anfang, nicht als Ende.",
          "Wenn Du gerade vor einer Verhandlung stehst oder wissen willst, was Deine Erfahrung im aktuellen Markt wirklich wert ist, melde Dich bei uns. Ein ehrliches Gespräch darüber kostet Dich nichts und gibt Dir Klarheit, mit der Du deutlich stärker in jede Verhandlung gehst.",
        ],
      },
    ],
  },
  {
    slug: "lohn-projektleiter-gebaeudeautomation-schweiz",
    title: "Was verdient ein Projektleiter Gebäudeautomation in der Schweiz?",
    category: "Markt",
    readTime: "5 Min.",
    publishedAt: "18. August 2026",
    teaser:
      "Wie viel verdient man als Projektleiter Gebäudeautomation in der Schweiz wirklich? Wir zeigen realistische Lohnbänder, was den Lohn nach oben treibt und wo die grössten Unterschiede liegen.",
    intro:
      "Die Gebäudeautomation ist einer der spannendsten und am schnellsten wachsenden Bereiche der Schweizer Gebäudetechnik. Wer hier als Projektleiter arbeitet, verbindet Elektro, HLK und Digitalisierung und ist entsprechend gefragt. Doch was verdient man in dieser Rolle tatsächlich? Feste Zahlen sind schwer zu finden, weil der Lohn stark von Erfahrung, Region und Verantwortung abhängt. In diesem Beitrag ordnen wir die realistischen Lohnbänder ein und zeigen, welche Faktoren am meisten bewegen. Die genannten Werte sind Erfahrungswerte und Marktbeobachtungen, keine amtliche Statistik.",
    sections: [
      {
        id: "das-realistische-lohnband-auf-einen-blick",
        title: "Das realistische Lohnband auf einen Blick",
        paragraphs: [
          "Für einen Projektleiter Gebäudeautomation in der Deutschschweiz bewegt sich das Jahresgehalt erfahrungsgemäss meist zwischen rund 90'000 und 125'000 Franken brutto. Der Einstieg mit erster Projektverantwortung liegt häufig im Bereich um 90'000 bis 100'000 Franken. Wer mehrere Jahre Erfahrung mitbringt und grössere Projekte eigenverantwortlich führt, erreicht oft 110'000 bis 125'000 Franken oder mehr.",
          "Diese Spanne ist bewusst breit, denn kaum eine andere Rolle hängt so stark von den konkreten Umständen ab. Zwei Projektleiter mit demselben Titel können mehrere Tausend Franken auseinanderliegen, je nachdem, für welche Art Projekte und welche Firma sie arbeiten.",
        ],
      },
      {
        id: "was-den-lohn-nach-oben-treibt",
        title: "Was den Lohn nach oben treibt",
        paragraphs: [
          "Den grössten Unterschied macht die Projektgrösse und die Budgetverantwortung. Wer Projekte im Millionenbereich führt und ein Team koordiniert, wird deutlich anders vergütet als jemand, der einzelne Anlagen betreut.",
          "Ein zweiter starker Hebel ist die technische Breite. Projektleiter, die Elektro, HLK und die digitale Steuerung wirklich verbinden können und mit modernen Systemen und Schnittstellen vertraut sind, sind selten und entsprechend gesucht.",
          "Auch die Art des Arbeitgebers zählt. Grössere Generalunternehmen und spezialisierte Automationsfirmen zahlen tendenziell anders als kleinere Installationsbetriebe. Und schliesslich spielt die Region eine Rolle, im Grossraum Zürich und Zug liegen die Löhne meist über dem Schweizer Durchschnitt.",
        ],
      },
      {
        id: "lohn-ist-nicht-alles-worauf-es-ankommt",
        title: "Lohn ist nicht alles, worauf es ankommt",
        paragraphs: [
          "So wichtig die Zahl ist, sie erzählt nur die halbe Geschichte. Gerade in der Gebäudeautomation entscheiden oft Faktoren über die Zufriedenheit, die nicht auf dem Lohnzettel stehen. Dazu gehören die Art der Projekte, der Grad an Eigenverantwortung, die Entwicklungsmöglichkeiten Richtung Senior- oder Bereichsleitung und wie modern eine Firma technisch aufgestellt ist.",
          "Ein etwas tieferer Lohn bei einem Arbeitgeber mit spannenderen Projekten und echter Entwicklungsperspektive kann sich langfristig mehr lohnen als das Maximum bei eintöniger Arbeit. Wer einen Wechsel überlegt, sollte deshalb den Gesamtwert einer Stelle betrachten, nicht nur die Bruttozahl.",
        ],
      },
      {
        id: "wo-du-im-markt-stehst",
        title: "Wo du im Markt stehst",
        paragraphs: [
          "Die ehrlichste Antwort auf die Lohnfrage ist immer individuell. Dein realistischer Wert hängt von deinem genauen Profil, deiner Erfahrung und dem aktuellen Marktbedarf ab. Genau das lässt sich am besten in einem kurzen, vertraulichen Gespräch einordnen.",
          "Wenn du wissen möchtest, wo du mit deinem Profil aktuell stehst und was für dich realistisch drin liegt, melde dich bei uns. Wir kennen den Markt in der Gebäudetechnik und sagen dir ehrlich und unverbindlich, wie deine Ausgangslage aussieht.",
        ],
      },
    ],
  },
  {
    slug: "warum-sollten-wir-ausgerechnet-dich-einstellen",
    title: "Warum sollten wir ausgerechnet Dich einstellen?",
    category: "Markt",
    readTime: "2 Min.",
    publishedAt: "6. August 2026",
    teaser:
      "Warum sollten wir ausgerechnet Dich einstellen? Das ist die überheblichste Frage, die man in einem Bewerbungsgespräch stellen kann.",
    intro:
      "Ehrlich gesagt, wer diese Frage heute noch stellt, hat nicht verstanden, wie man 2026 gute Leute für sich gewinnt.",
    sections: [
      {
        id: "was-diese-frage-eigentlich-sagt",
        title: "Was diese Frage eigentlich sagt:",
        paragraphs: [
          "\"Wir sind der Preis, den Du gewinnen musst.\" \"Du bist die Bittstellerin, die uns überzeugen muss.\" \"Machtgefälle ist uns wichtiger als Augenhöhe.\"",
        ],
      },
      {
        id: "liebe-unternehmen-drehen-wir-den-spiess-doch-mal-um",
        title: "Liebe Unternehmen, drehen wir den Spiess doch mal um.",
        paragraphs: [
          "Jemand mit 10, 15 oder 20 Jahren Erfahrung muss sich nicht rechtfertigen, warum er arbeiten will. Er bietet seine Expertise, seine Lebenszeit und sein Können an.",
        ],
      },
      {
        id: "die-eigentliche-frage-muesste-lauten",
        title: "Die eigentliche Frage müsste lauten:",
        paragraphs: [
          "\"Warum sollte diese Person sich ausgerechnet für Euch entscheiden?\" \"Was bietet Ihr, damit jemand seine Fähigkeiten bei Euch einbringen will?\"",
        ],
      },
      {
        id: "ein-bewerbungsgespraech-ist-kein-verhoer-und-keine-castingshow",
        title: "Ein Bewerbungsgespräch ist kein Verhör und keine Castingshow.",
        paragraphs: [
          "Es ist ein Gespräch zwischen zwei möglichen Partnern, auf Augenhöhe.",
          "Wer von oben herab fragt, bekommt am Ende vielleicht jemanden, der gut antworten kann. Nicht unbedingt jemanden, der den Job am besten macht.",
          "Hört auf mit den Fangfragen aus dem letzten Jahrhundert. Fangt an, echte Gespräche zu führen.",
        ],
      },
    ],
  },
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
