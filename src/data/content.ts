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
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 60–100%",
    focus: "Tiefbau · Zürich",
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
    datePosted: "2026-10-12",
    validThrough: "2026-11-30",
    addressLocality: "Zürich",
    addressRegion: "ZH",
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
    datePosted: "2026-10-19",
    validThrough: "2026-12-31",
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
    datePosted: "2026-10-15",
    validThrough: "2026-12-31",
    addressLocality: "Kriens",
    addressRegion: "LU",
  },
  {
    slug: "projektleiter-projektingenieur-infrastruktur-strassen-kunstbauten-zuerich",
    title: "Projektleiter und Projektingenieur Infrastruktur für Strassen und Kunstbauten (m/w/d)",
    region: "Kanton Zürich",
    employmentType: "Festanstellung, 80–100%",
    focus: "Tiefbau · Wallisellen",
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
    validThrough: "2026-12-29",
    addressLocality: "Wallisellen",
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
    validThrough: "2026-12-29",
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
    validThrough: "2026-12-31",
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
    datePosted: "2026-10-12",
    validThrough: "2026-12-11",
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
    datePosted: "2026-10-12",
    validThrough: "2026-12-31",
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
    validThrough: "2026-12-30",
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
  {
    slug: "zeichner-tiefbau-mit-berufsbildungsfunktion",
    title: "Zeichner Tiefbau mit Berufsbildungsfunktion (m/w/d)",
    region: "Bern",
    employmentType: "Festanstellung, 80–100%",
    focus: "Tiefbau · Bern",
    teaser:
      "Du planst mit Präzision und gibst dein Wissen gerne an die nächste Generation weiter? Als Zeichner/in Tiefbau gestaltest du bei uns spannende Infrastrukturprojekte mit und begleitest gleichzeitig unsere Lernenden auf ihrem Weg ins Berufsleben. Werde Teil unseres Teams und bau mit uns an der Zukunft, im Tiefbau wie im Nachwuchs.",
    compensation: "CHF 68'000 – 80'000 / Jahr",
    startDate: "Ab sofort",
    tasks: [
      "Erstellen von Projekt-, Ausführungs- und Detailplänen im Tiefbau (Strassen, Werkleitungen, Kanalisation, Wasserversorgung)",
      "Mengenermittlung und Mithilfe bei Ausschreibungsunterlagen",
      "Nachführen von Werkleitungskatastern und Erstellen von Ausführungsdokumentationen",
      "Betreuung und Ausbildung unserer Lernenden Zeichner/in EFZ Fachrichtung Ingenieurbau",
      "Planung der Ausbildung, Begleitung im Arbeitsalltag und Führen der Lerndokumentation",
      "Mitwirkung bei der Rekrutierung neuer Lernender (Schnupperlehren, Auswahlgespräche)",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Zeichner/in EFZ Fachrichtung Ingenieurbau bzw. Bauzeichner/in Tiefbau oder gleichwertige Qualifikation",
      "Erste Berufserfahrung im Tiefbau",
      "Sichere Kenntnisse in einem oder mehreren CAD-Programme",
      "Freude an der Arbeit mit jungen Menschen, Geduld und Einfühlungsvermögen",
      "Gute Deutschkenntnisse in Wort und Schrift",
    ],
    benefits: [
      "Abwechslungsreiche Projekte von der Planung bis zur Ausführung",
      "Gezielte Weiterbildungsmöglichkeiten (z. B. Techniker/in HF, Berufsbildung)",
      "Moderne Arbeitsplätze und aktuelle Software",
      "Home-Office Möglichkeiten",
      "Attraktive Anstellungsbedingungen und fortschrittliche Sozialleistungen",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-10-12",
    validThrough: "2026-12-31",
    addressLocality: "Bern",
    addressRegion: "BE",
  },
  {
    slug: "elektro-sicherheitsberater-muenchenstein",
    title: "Elektro-Sicherheitsberater:in mit Kontrollkompetenz (m/w/d)",
    region: "Region Basel",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektro · Münchenstein",
    teaser:
      "Du planst und führst Sicherheitskontrollen und elektrotechnische Prüfungen in Wohn-, Büro-, Industrie- und Spezialanlagen durch. Von Photovoltaik bis Ex-Zonen. Ein etablierter Elektro- und Gebäudetechnikbetrieb in der Region Basel sucht dich unbefristet.",
    compensation: "CHF 95'000 – 120'000 / Jahr bei 100%",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Planung, Durchführung und Dokumentation von Sicherheitskontrollen und elektrotechnischen Prüfungen in kleinen und mittleren Objekten",
      "Prüfungen in anspruchsvollen Umgebungen wie Spitälern, Werkstätten, explosionsgefährdeten Zonen sowie an Photovoltaikanlagen und E-Ladestationen",
      "Entwicklung individueller Lösungen für den eigenen Kundenstamm und Aufbau nachhaltiger Kundenbeziehungen über einzelne Projekte hinaus",
      "Fachliche Unterstützung des Teams und der Kundschaft bei technischen Fragestellungen rund um Anlagen, Installationen und Normabklärungen",
      "Zusammenarbeit mit weiteren Fachpersonen bei grösseren Anlagen und Projekten",
    ],
    requirements: [
      "Abgeschlossene Grundbildung in der Elektrotechnik",
      "Abgeschlossene Weiterbildung oder im letzten Ausbildungsjahr als Elektroprojektleiter:in Installation und Sicherheit, Sicherheitsberater:in oder Elektrokontrolleur:in",
      "Erfahrung im Projektmanagement und gute methodische Fähigkeiten",
      "Verhandlungssichere Deutschkenntnisse (mind. C1)",
    ],
    benefits: [
      "Vielseitiges Einsatzgebiet von Standard- bis Spezialanlagen in der gesamten Region Basel",
      "Modernste digitale Arbeitsmittel und top ausgestattete Räumlichkeiten",
      "Jährliche Entwicklungsgespräche und individuelle Karriere- und Entwicklungswege",
      "Vielfältige interne und externe Weiterbildungsangebote",
      "Kostengünstiges Personalrestaurant und kostenloser Fitnessraum vor Ort",
      "Attraktive Mitarbeitervergünstigungen und betriebliche Sozialberatung",
    ],
    closingNote: [
      "Wenn du Verantwortung übernehmen willst in einem Umfeld, das Sicherheitskompetenz ernst nimmt und dir echten Entwicklungsraum bietet, freuen wir uns auf deine Bewerbung. Wir melden uns innerhalb von zwei Arbeitstagen zurück und besprechen alle Details in einem kurzen Erstgespräch.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-10-15",
    validThrough: "2026-12-31",
    addressLocality: "Münchenstein",
    addressRegion: "BL",
  },
  {
    slug: "projektleiter-elektroengineering-muenchenstein",
    title: "Projektleiter:in Elektroengineering und Elektroplanung (m/w/d)",
    region: "Region Basel",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektro · Münchenstein",
    teaser:
      "Du leitest Umbau- und Neubauprojekte im Elektroengineering von der Angebotserstellung bis zur Übergabe. Verantwortung über das gesamte Projektteam und die Kundenbeziehung. Ein etabliertes Elektro-Ingenieurunternehmen in der Region Basel sucht dich unbefristet.",
    compensation: "CHF 105'000 – 135'000 / Jahr bei 100%",
    startDate: "Ab sofort",
    tasks: [
      "Eigenverantwortliche Leitung von Umbau- und Neubauprojekten im Bereich Elektroengineering von der Angebotserstellung bis zur Abrechnung und Übergabe",
      "Fachliche und organisatorische Führung des Projektteams durch alle Projektphasen",
      "Analyse und Bewertung von Vergabeanträgen sowie Mitwirkung bei der Ausarbeitung von Werk- und Ingenieurverträgen",
      "Selbstständige Erstellung von Spezifikationen, Ausschreibungsunterlagen und Leistungsverzeichnissen",
      "Aufbau und Pflege langfristiger Kundenbeziehungen über einzelne Projekte hinaus",
    ],
    requirements: [
      "Abgeschlossene elektrotechnische Grundausbildung",
      "Geplante oder abgeschlossene Weiterbildung als Elektroingenieur:in FH, Elektrotechniker:in HF oder vergleichbar",
      "Erfahrung in der Projektleitung Elektroplanung",
      "Gute Kenntnisse in CAD- und CAE-Zeichnungsprogrammen, idealerweise auch BIM",
      "Verhandlungssichere Deutschkenntnisse (mind. C1), jede weitere Sprache willkommen",
    ],
    benefits: [
      "Anspruchsvolle Projekte mit voller Verantwortung von der Konzeption bis zur Übergabe",
      "Modernste digitale Arbeitsmittel und top ausgestattete Räumlichkeiten",
      "Jährliche Entwicklungsgespräche und individuelle Karrierepfade",
      "Vielfältige Weiterbildungsangebote, intern und extern",
      "Attraktive Mitarbeitervergünstigungen und betriebliche Sozialberatung",
      "Fitnessraum und Personalrestaurant am Standort",
    ],
    closingNote: [
      "Wenn du echte Verantwortung in einem Umfeld suchst, das Elektroengineering als Zukunftsfeld versteht und dir Freiraum zur Gestaltung lässt, freuen wir uns auf deine Bewerbung. Ein 10-minütiges Erstgespräch klärt alle offenen Fragen.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-10-15",
    validThrough: "2026-12-31",
    addressLocality: "Münchenstein",
    addressRegion: "BL",
  },
  {
    slug: "elektro-baustellenleiter-gebaeudeinstallation-muenchenstein",
    title: "Elektro-Baustellenleiter:in Gebäudeinstallation (m/w/d)",
    region: "Region Basel",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektro · Münchenstein",
    teaser:
      "Du führst Elektroinstallationsteams und koordinierst Projekte im Gewerbe-, Industrie- und Dienstleistungsbereich. Verantwortung für Planung, Durchführung und Qualität. Ein etablierter Elektroinstallationsbetrieb in der Region Basel sucht dich unbefristet.",
    compensation: "CHF 90'000 – 115'000 / Jahr bei 100%",
    startDate: "Ab sofort",
    tasks: [
      "Führung von Elektroinstallationsteams und Koordination vielseitiger Projekte im Gewerbe-, Industrie- und Dienstleistungsbereich",
      "Verantwortung für Planung und Durchführung von Neuinstallationen, Unterhaltsarbeiten und Reparaturen",
      "Enge Zusammenarbeit mit Bauleitung, Lieferanten und Handwerkern anderer Gewerke zur Sicherstellung reibungsloser Projektabläufe",
      "Systematische Prüfung und Störungsbehebung bei Installationen",
      "Weitergabe von Fachwissen an Mitarbeitende und Lernende zur Ausbildung der nächsten Fachkräfte-Generation",
    ],
    requirements: [
      "Abgeschlossene Grundbildung als Elektroinstallateur:in EFZ, Montage-Elektriker:in EFZ, ESTI-Gleichwertigkeit oder vergleichbar",
      "Mindestens 3 Jahre Erfahrung in der Baustellenleitung oder Teamführung",
      "Sichere Kommunikation mit Bauleitung, Lieferanten und Handwerkern aller Gewerke",
      "Gültiger Führerausweis Kategorie B und Flexibilität in der Region Basel und Umgebung",
      "Verhandlungssichere Deutschkenntnisse (mind. C1)",
    ],
    benefits: [
      "Modernste digitale Arbeitsmittel und gut ausgestattete Werkzeuge, komplett papierloser Arbeitsalltag",
      "Exklusive Mitarbeitervergünstigungen auf Haushaltsgeräte, Werkzeuge, Elektroinstallationsmaterial und Fahrzeuge",
      "Kostenlose betriebliche Sozialberatung bei persönlichen, familiären oder finanziellen Herausforderungen",
      "Jährliche Entwicklungsgespräche und klare Karrierepfade",
      "Verschiedene Teamevents und jährliche Gesundheitswoche",
      "Fitnessraum und Personalrestaurant am Standort",
    ],
    closingNote: [
      "Wenn du Teamführung mit echter Baustellenverantwortung verbinden willst, in einem Betrieb, der digital arbeitet und seine Mitarbeitenden ernst nimmt, freuen wir uns auf deine Bewerbung. Ein kurzes Erstgespräch klärt alle Details.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-10-15",
    validThrough: "2026-12-31",
    addressLocality: "Münchenstein",
    addressRegion: "BL",
  },
  {
    slug: "elektro-projektleiter-ladenbau-muenchenstein",
    title: "Elektro-Projektleiter:in mit Schwerpunkt Ladenbau und Mieterausbau (m/w/d)",
    region: "Basel",
    employmentType: "Festanstellung, 80–100%",
    focus: "Elektro · Münchenstein",
    teaser:
      "Du leitest anspruchsvolle Umbau- und Ausbauprojekte im Ladenbau, Büro- und Mieterausbau in Einkaufszentren, Geschäftshäusern und Bürokomplexen. Volle Verantwortung für die gesamte Projektabwicklung. Ein etablierter Elektroinstallationsbetrieb in der Region Basel sucht dich unbefristet.",
    compensation: "CHF 100'000 – 130'000 / Jahr bei 100%",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Projektleitung anspruchsvoller Umbau- und Ausbauprojekte im Ladenbau, Büro- und Mieterausbau in Einkaufszentren, Geschäftshäusern und Bürokomplexen",
      "Verantwortung für die gesamte Abwicklung von Konzeption und Planung über Offertstellung, technische Ausarbeitung, Bauleitung bis zur Abrechnung und Übergabe",
      "Erstellung von Ausschreibungen, technischen Dokumentationen und Projektunterlagen",
      "Pflege professioneller und proaktiver Kundenkommunikation als erste Ansprechperson",
      "Fachliche und organisatorische Führung des Projektteams inklusive Personaleinsatzplanung",
      "Teilnahme an Fachmessen, Weiterbildungen und Branchentreffen zur fachlichen Weiterentwicklung",
    ],
    requirements: [
      "Abgeschlossene Grundbildung in der Elektrotechnik",
      "Abgeschlossene Weiterbildung oder auf der Zielgeraden als Elektro-Projektleiter:in Installation und Sicherheit",
      "Mindestens drei Jahre Berufserfahrung als Elektroinstallateur:in oder Elektroplaner:in, idealerweise im Ladenbau",
      "Verhandlungssichere Deutschkenntnisse (mind. C1), Französischkenntnisse willkommen",
    ],
    benefits: [
      "Anspruchsvolle Projekte mit Kundenkontakt zu Global Playern und regionalen Marken",
      "Jährliche Entwicklungsgespräche und individuelle Karrierepfade",
      "Vielfältige interne und externe Weiterbildungsangebote",
      "Top ausgestattete Büros und Sitzungsräume in modernem Hauptgebäude mit zahlreichen Parkmöglichkeiten",
      "Personalrestaurant, Fitnessraum und verschiedene Teamevents",
      "Betriebliche Sozialberatung und attraktive Mitarbeitervergünstigungen",
    ],
    closingNote: [
      "Wenn du Projektleitung mit vielseitigen Ladenbau-Projekten verbinden willst, in einem Umfeld das Gestaltungsfreiraum und persönliche Entwicklung ernst nimmt, freuen wir uns auf deine Bewerbung. Ein 30-minütiges Erstgespräch klärt alle offenen Fragen.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-10-15",
    validThrough: "2026-12-31",
    addressLocality: "Münchenstein",
    addressRegion: "BL",
  },
  {
    slug: "elektro-grossprojektleiter-pharma-muenchenstein",
    title: "Elektro-Grossprojektleiter:in für Pharma und Life Sciences (m/w/d)",
    region: "Region Basel",
    employmentType: "Festanstellung, 100%",
    focus: "Elektro · Münchenstein",
    teaser:
      "Du leitest Grossprojekte für Prozessanlagen, Reinräume und Automatisierungssysteme in der Pharma- und Life-Sciences-Industrie. Zentrale Ansprechperson für industrielle Grosskunden. Ein etablierter Elektroinstallationsbetrieb in der Region Basel sucht dich unbefristet.",
    compensation: "CHF 120'000 – 155'000 / Jahr",
    startDate: "Nach Vereinbarung",
    tasks: [
      "Zentrale Ansprechperson für industrielle Grossprojekte in den Bereichen Prozessanlagen, Reinräume, Automatisierungssysteme und spezialisierte elektrische Infrastrukturen",
      "Verantwortung für die Leitung von Grossprojekten von der Angebotsphase über Planung, Umsetzung und Controlling bis zur Übergabe",
      "Fachliche und organisatorische Führung des Projektteams inklusive Personaleinsatzplanung",
      "Aufbau und Pflege langfristiger, vertrauensvoller Kundenbeziehungen in der Pharma- und Chemiebranche",
      "Repräsentation des Unternehmens an Fachvorträgen und Messen als kompetente Anlaufstelle für Industrieinstallationen",
    ],
    requirements: [
      "Abgeschlossene Grundbildung in der Elektrotechnik",
      "Abgeschlossene Weiterbildung als Elektro-Projektleiter:in Installation und Sicherheit oder vergleichbar",
      "Fundiertes Wissen über GMP, geltende Industrienormen und branchenspezifische Vorschriften",
      "Mehrjährige Erfahrung in der Leitung von Grossprojekten, idealerweise im industriellen oder pharmazeutischen Umfeld",
      "Verhandlungssichere Deutschkenntnisse (mind. C1), Englischkenntnisse willkommen",
    ],
    benefits: [
      "Flexible Arbeitsmodelle und Homeoffice-Möglichkeiten für ausgewogene Work-Life-Balance",
      "Übernahme zusätzlicher Verantwortung und aktive Gestaltung des eigenen Karrierewegs",
      "Vielfältige interne und externe Weiterbildungsangebote",
      "Attraktive Mitarbeitervergünstigungen auf Haushaltsgeräte, Werkzeuge und Fahrzeuge",
      "Personalrestaurant, Fitnessraum und verschiedene Teamevents am Standort",
      "Betriebliche Sozialberatung bei persönlichen und familiären Herausforderungen",
    ],
    closingNote: [
      "der Pharma- und Life-Sciences-Industrie verbinden willst, in einem Umfeld das echte Verantwortung bietet und Entwicklung aktiv fördert, freuen wir uns auf deine Bewerbung. Ein 30-minütiges Erstgespräch klärt alle Details.",
    ],
    note: "Diskrete Besetzung · Alle Angaben vertraulich",
    datePosted: "2026-10-15",
    validThrough: "2026-12-31",
    addressLocality: "Münchenstein",
    addressRegion: "BL",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "loehne-elektrobranche-schweiz-2026",
    title: "Lohn Elektroinstallateur und Elektroplaner Schweiz 2026",
    category: "Markt",
    readTime: "8 Minuten",
    publishedAt: "28. Oktober 2026",
    teaser:
      "Als Elektroinstallateur EFZ verdienst du meist CHF 64'000 bis 88'000 im Jahr. Dazu alle Löhne 2026 für Elektroplaner, Projektleiter und Sicherheitsberater.",
    intro:
      "Ein Elektroinstallateur EFZ verdient in der Schweiz 2026 meist zwischen CHF 64'000 und 88'000 pro Jahr, im Mittel rund CHF 75'000 oder knapp CHF 5'800 pro Monat bei 13 Monatslöhnen. Elektroplaner:innen liegen bei rund CHF 70'000 bis 100'000, Elektro-Projektleiter:innen bei CHF 85'000 bis 115'000. Hier findest du die Lohnbänder nach Funktion, die Löhne aus unseren aktuellen Mandaten und was deinen Lohn tatsächlich bewegt.",
    sections: [
      {
        id: "was-verdient-ein-elektroinstallateur-efz-in-der-schweiz",
        title: "Was verdient ein Elektroinstallateur EFZ in der Schweiz?",
        paragraphs: [
          "Der marktübliche Lohn für Elektroinstallateur:innen EFZ liegt 2026 bei rund CHF 64'000 bis 88'000 pro Jahr, der Median bei rund CHF 75'000. Pro Monat sind das bei 13 Monatslöhnen etwa CHF 4'900 bis 6'800, im Mittel knapp CHF 5'800. Das obere Ende erreichst du mit Spezialisierung, Erfahrung in der Industrie oder Verantwortung auf der Baustelle. Montage-Elektriker:innen EFZ verdienen etwas weniger, typischerweise CHF 56'000 bis 76'000 pro Jahr mit einem Median um CHF 64'000. Die Lehre dauert drei statt vier Jahre, entsprechend tiefer liegt auch der GAV-Mindestlohn. Die Untergrenze setzt der GAV. Elektroinstallateur:innen EFZ verdienen 2026 mindestens CHF 4'500 pro Monat nach der Lehre und CHF 5'000 nach einem vollen Branchenjahr. Alle Mindestlöhne bis 2029 findest du in unserem Beitrag zum GAV Elektro 2026. Die Mindestlöhne für 2026 sind klar strukturiert und werden bei 13 Monatslöhnen pro Jahr ausbezahlt. Für Elektroinstallateure EFZ gilt direkt nach Lehrabschluss ein Mindestlohn von CHF 4'500 pro Monat, nach einem Jahr Branchenerfahrung steigt dieser auf CHF 5'000. Montage-Elektriker EFZ liegen bei CHF 4'300 nach Abschluss und CHF 4'700 nach einem Jahr. Telematiker EFZ starten bei CHF 4'770 und erreichen nach einem Branchenjahr CHF 5'300. Teamleiter mit abgelegter Prüfung haben einen Mindestlohn von CHF 5'600 pro Monat.",
          "Für die kommenden Jahre sieht der GAV eine stufenweise Erhöhung der Mindestlöhne um insgesamt CHF 200 vor, verteilt auf 2027 und 2029. Was der GAV nicht regelt, sind Positionen oberhalb der Teamleiterstufe. Elektroplaner, Elektro-Projektleiter, Sicherheitsberater und spezialisierte Rollen wie Elektro-Grossprojektleiter haben keine verbindlichen Mindestlöhne und bewegen sich frei am Markt. Genau hier entsteht die grösste Spannbreite.",
        ],
      },
      {
        id: "elektroinstallateur-efz-und-montage-elektriker-die-basis-der-branche",
        title: "Elektroinstallateur EFZ und Montage-Elektriker die Basis der Branche",
        paragraphs: [
          "Der Elektroinstallateur EFZ ist das Rückgrat der Schweizer Elektrobranche. Nach drei Jahren Lehre und bestandener EFZ-Prüfung liegt der Einstiegslohn gemäss GAV bei CHF 4'500 brutto pro Monat, was auf das Jahr gerechnet CHF 58'500 ergibt. Das ist jedoch nur der absolute Minimalwert. Der Marktlohn für Elektroinstallateure EFZ beginnt in der Deutschschweiz 2026 realistisch bei CHF 64'000 und steigt mit ersten Jahren Berufserfahrung schnell auf CHF 70'000 bis CHF 75'000.",
          "Der schweizerische Durchschnittslohn für Elektroinstallateure EFZ liegt 2026 bei rund CHF 75'000 pro Jahr. Mit 20 oder mehr Jahren Berufserfahrung und entsprechender Spezialisierung in Bereichen wie KNX-Gebäudeautomation, Photovoltaik, Sicherheitsanlagen oder Industrie 4.0 erreichen Elektroinstallateure CHF 80'000 bis CHF 90'000. In Kantonen mit höheren Lebenshaltungskosten wie Zürich, Zug oder Genf liegen diese Werte nochmals rund 5 bis 10 Prozent höher.",
          "Montage-Elektriker EFZ verdienen strukturell etwas weniger. Der Marktlohn bewegt sich zwischen CHF 56'000 und CHF 76'000, mit einem Durchschnitt von CHF 64'000. Mit über 20 Jahren Berufserfahrung erreichen auch Montage-Elektriker Jahreslöhne um CHF 78'000. Für beide Positionen gilt eine klare Marktdynamik: Wer bei Lohnverhandlungen den Marktwert kennt und entsprechend verhandelt, kann in der aktuellen Marktlage CHF 500 bis CHF 1'500 pro Monat mehr erreichen, als beim Erstangebot genannt wird.",
        ],
      },
      {
        id: "was-verdienen-servicetechniker-und-teamleiter-im-elektro",
        title: "Was verdienen Servicetechniker und Teamleiter im Elektro?",
        paragraphs: [
          "Im Service liegen die Löhne meist über der klassischen Installation, weil Pikett, Kundenkontakt und selbstständiges Arbeiten dazukommen. In unseren aktuellen Mandaten liegen die Lohnbänder für Service-Elektroinstallateur:innen im Raum Luzern bei CHF 75'000 bis 90'000 und für Servicemonteur:innen Elektro im Grossraum Zürich bei CHF 78'000 bis 92'000, dort inklusive Firmenfahrzeug. Wer zusätzlich Spezialanlagen betreut oder führt, liegt höher. Servicetechniker:innen für Notstromanlagen liegen in unseren Mandaten bei CHF 80'000 bis 105'000, bauleitende Monteur:innen bei CHF 82'000 bis 105'000. Für Elektroinstallateur:innen EFZ als Teamleiter:in Service und Unterhalt in Zürich liegt das Band bei CHF 84'500 bis 95'000. Einsteiger ohne Berufserfahrung starten typischerweise bei CHF 70'000 bis CHF 75'000. Mit drei bis fünf Jahren Berufserfahrung und sicherer Anwendung eines CAD-Systems wie Elcad, Plancal Nova oder Revit MEP erreichen Elektroplaner CHF 85'000 bis CHF 95'000. Spezialisierungen in BIM, in Photovoltaik-Grossanlagen oder in Gebäudeautomation treiben das obere Ende der Lohnbandbreite auf CHF 100'000 und mehr. Senior Elektroplaner mit Weiterbildung Richtung Techniker HF oder mit Teilverantwortung für Projektleitung erreichen CHF 105'000.",
          "Die Position wird am Markt stark nachgefragt. Die Energiewende hat den Bedarf an qualifizierten Elektroplanern massiv erhöht. Jede Wärmepumpe braucht neue elektrische Zuleitungen, jede Photovoltaikanlage braucht Netzanschlussplanung, jede Wallbox für Elektrofahrzeuge braucht korrekte Lastberechnung. All das läuft über Elektroplaner. Elektroplaner mit mehrjähriger Erfahrung haben in der Deutschschweiz 2026 in der Regel mehrere parallele Angebote.",
        ],
      },
      {
        id: "was-verdient-ein-elektroplaner-in-der-schweiz",
        title: "Was verdient ein Elektroplaner in der Schweiz?",
        paragraphs: [
          "Elektroplaner:innen EFZ verdienen in der Schweiz rund CHF 70'000 bis 100'000 pro Jahr, im Mittel etwa CHF 83'000. Für Planer:innen gibt es keinen GAV-Mindestlohn, weil planende und projektierende Tätigkeiten vom GAV ausgenommen sind. Der Lohn ist reiner Marktlohn. Die Spannbreite ist grösser als in der Installation. Entscheidend sind Berufsjahre, die Sicherheit im CAD-System und Spezialgebiete wie BIM, grosse Photovoltaikanlagen oder Gebäudeautomation. In unserem aktuellen Mandat für Elektroplaner:innen EFZ oder mit Weiterbildung in Zürich liegt das Lohnband bei CHF 85'000 bis 115'000 bei 100 Prozent. Der Elektro-Sicherheitsberater verdient in der Schweiz 2026 zwischen CHF 76'000 und CHF 104'000 pro Jahr, mit einem Durchschnitt von CHF 88'000. Wichtig: Der klassische Titel Sicherheitsberater wurde Ende 2021 formal abgelöst durch den Titel Elektroprojektleiter Installation und Sicherheit. In der Praxis werden beide Begriffe weiterhin verwendet, und viele Stellenausschreibungen 2026 nutzen den etablierten Titel Sicherheitsberater, weil er für Suchende in der Branche greifbarer ist.",
          "Der Elektrokontrolleur ist ebenfalls eine spezialisierte Rolle mit eigener Prüfungskompetenz. Der Durchschnittslohn liegt 2026 bei rund CHF 5'182 brutto pro Monat, was bei 13 Monatslöhnen etwa CHF 67'000 pro Jahr ergibt. Die Spannbreite der mittleren 50 Prozent liegt zwischen CHF 58'000 und CHF 75'000 Jahresbrutto. Erfahrene Elektrokontrolleure, die in grösseren Betrieben eigenständig komplexe Industrie- und Spezialanlagen prüfen, erreichen auch Jahreslöhne von CHF 85'000 bis CHF 95'000. Unsere Vermittlungen zeigen regelmässig, dass Senior-Sicherheitsberater mit Erfahrung in Industrie, Spitälern oder Explosionsschutzzonen über CHF 110'000 verdienen.",
        ],
      },
      {
        id: "was-verdient-ein-elektro-projektleiter",
        title: "Was verdient ein Elektro-Projektleiter?",
        paragraphs: [
          "Elektro-Projektleiter:innen liegen in der Deutschschweiz meist bei CHF 85'000 bis 115'000 pro Jahr, im Mittel bei rund CHF 98'000. Diese Werte sind Orientierungswerte aus Lohnportalen und Inseraten, weil die amtliche Statistik die Funktion nicht separat ausweist. Mit Grossprojekten, Industrie oder Pharma geht es deutlich darüber hinaus. In unseren aktuellen Mandaten in der Region Basel liegen die Lohnbänder für Elektro-Projektleiter:innen Ladenbau und Mieterausbau bei CHF 100'000 bis 130'000, für Projektleiter:innen Elektroengineering und Elektroplanung bei CHF 105'000 bis 135'000. Elektro-Grossprojektleiter:innen für Pharma und Life Sciences liegen bei CHF 120'000 bis 155'000. Der Hebel dieser Rolle liegt in der Verantwortung. Projektleiter:innen kalkulieren, führen ein Team und halten den Kontakt zur Bauherrschaft. Das wirkt direkt auf die Marge des Betriebs und spiegelt sich im Lohn. Elektro-Projektleiter mit abgeschlossener Weiterbildung Elektro-Projektleiter Installation und Sicherheit und drei bis fünf Jahren Erfahrung bewegen sich typischerweise bei CHF 95'000 bis CHF 110'000. Mit zusätzlicher Verantwortung für Grossprojekte in Industrie, Pharma oder öffentlichen Bauten erreichen Elektro-Projektleiter CHF 120'000 bis CHF 140'000. Spezialisierte Rollen wie Elektro-Grossprojektleiter in der Pharma- und Life-Sciences-Industrie oder in Reinraumanlagen sind nochmals höher dotiert und erreichen regelmässig CHF 130'000 bis CHF 155'000.",
          "Was den Elektro-Projektleiter zur Rolle mit dem grössten Lohnhebel macht, sind drei Faktoren. Erstens die Verantwortung für die Kalkulation, die direkten Einfluss auf die Marge des Betriebs hat. Zweitens die Führungsverantwortung für ein Projektteam, das von der Qualität der Leitung lebt. Drittens die direkte Kundenbeziehung, aus der Folgeaufträge entstehen. Diese drei Faktoren machen Elektro-Projektleiter für Betriebe strategisch wertvoll, was sich in der Lohnbandbreite spiegelt. Wechselwillige Elektro-Projektleiter mit guter Reputation haben in der Deutschschweiz 2026 in der Regel drei bis fünf parallele Angebote innerhalb weniger Wochen.",
        ],
      },
      {
        id: "was-verdient-ein-elektro-sicherheitsberater",
        title: "Was verdient ein Elektro-Sicherheitsberater?",
        paragraphs: [
          "Elektro-Sicherheitsberater:innen verdienen in der Schweiz rund CHF 76'000 bis 104'000 pro Jahr, im Mittel etwa CHF 88'000. Mit Erfahrung in Industrie, Spezialanlagen oder Ex-Zonen geht es höher. In unserem aktuellen Mandat in der Region Basel liegt das Band bei CHF 95'000 bis 120'000 bei 100 Prozent. Der Titel Sicherheitsberater wurde Ende 2021 abgelöst. Die Berufsprüfung heisst heute Elektroprojektleiter:in Installation und Sicherheit mit eidgenössischem Fachausweis. In Inseraten und im Alltag wird der alte Titel weiterhin verwendet. Knapp ist die Rolle, weil sie gesetzlich verankert ist. Die Niederspannungs-Installationsverordnung NIV setzt diese Berufsprüfung für eine Kontrollbewilligung voraus, und ohne Kontrollbewilligung dürfen die vorgeschriebenen Sicherheitskontrollen nicht abgenommen werden. Zweitens die Betriebsgrösse. Grosse Betriebe mit über 200 Mitarbeitenden zahlen in der Regel strukturierter und oft am oberen Ende der Marktbandbreite, haben aber auch stärkere Lohnbänder und weniger Verhandlungsspielraum. Drittens die Spezialisierung. Allgemeine Elektroinstallation bringt den Grundlohn. Spezialisierungen wie KNX, Photovoltaik, E-Mobility, Gebäudeautomation, Explosionsschutz oder Reinraum-Elektroinstallation bringen pro Spezialisierung typischerweise CHF 300 bis CHF 800 pro Monat zusätzlich.",
          "Viertens die Weiterbildung. Ein Elektroinstallateur EFZ ohne Weiterbildung erreicht nach 20 Jahren Berufserfahrung einen Marktlohn um CHF 80'000. Mit abgeschlossener Weiterbildung Teamleiter springt die Lohnbandbreite auf CHF 90'000 bis CHF 105'000. Mit Weiterbildung Elektro-Projektleiter Installation und Sicherheit öffnet sich der Zugang zur Projektleiter-Gehaltsklasse mit CHF 95'000 bis CHF 115'000. Fünftens die Verhandlung beim Einstieg oder Wechsel. CHF 500 mehr beim Einstieg wirken auf jede weitere Lohnerhöhung, auf jeden Jobwechsel und schliesslich auf die Pensionskasse. Über 30 Jahre kann sich daraus ein Gesamtunterschied von CHF 100'000 bis CHF 250'000 ergeben.",
        ],
      },
      {
        id: "was-den-lohn-in-der-elektrobranche-bewegt",
        title: "Was den Lohn in der Elektrobranche bewegt",
        paragraphs: [
          "Am stärksten wirkt die Funktion. Der Schritt von der Installation in Planung, Projektleitung oder Kontrolle bringt mehr als jede jährliche Lohnrunde. Danach folgen Spezialgebiete wie Photovoltaik, Gebäudeautomation, Ladeinfrastruktur oder Notstrom, die aktuell deutlich besser bezahlt werden als reine Installation. Auch die Branche des Arbeitgebers zählt. Industrie, Pharma und grosse Gesamtprojekte zahlen in der Regel mehr als das klassische Installationsgewerbe. Bei zwei Angeboten mit gleichem Grundlohn lohnt sich zudem der Blick auf Pikett, Überstundenregelung und Fahrzeug, die am Jahresende mehrere tausend Franken ausmachen können. Der grösste Lohnsprung passiert meistens beim Stellenwechsel und nur selten bei der jährlichen Anpassung. Wer beim Einstieg sauber verhandelt, profitiert davon bei jeder weiteren Erhöhung. Der zweite Treiber ist die Konvergenz von Elektro und IT. Gebäudeautomation, Smart Home, IoT-Integration und Industrie 4.0 machen aus dem klassischen Elektroberuf zunehmend eine hybride Rolle, die sowohl Elektrotechnik als auch IT-Verständnis erfordert. Fachkräfte mit beiden Kompetenzen sind extrem knapp und entsprechend hoch dotiert.",
          "Der dritte Treiber ist die demografische Entwicklung. Zwischen 2025 und 2030 verlässt die Schweiz jährlich eine Erwerbstätigenkohorte von rund 90'000 Personen, während nur etwa 75'000 nachrücken. In der Elektrobranche verschärft sich dieser Effekt zusätzlich, weil die Anzahl neu abgeschlossener Lehrverträge seit Jahren unter dem effektiven Bedarf liegt. Für Fachkräfte in der Elektrobranche bedeutet das eine Verhandlungsposition, die es in der Schweiz noch nie so eindeutig gab.",
        ],
      },
      {
        id: "wie-viel-bringt-eine-weiterbildung-im-elektro",
        title: "Wie viel bringt eine Weiterbildung im Elektro?",
        paragraphs: [
          "Die Weiterbildung zum Elektro-Teamleiter hebt bereits den GAV-Mindestlohn auf CHF 5'600 pro Monat, also CHF 72'800 pro Jahr. Am Markt liegen Teamleiter:innen meist deutlich darüber. Der grössere Schritt ist die Berufsprüfung Elektroprojektleiter:in Installation und Sicherheit. Sie öffnet den Zugang zu Projektleitung und Kontrolle und damit zu den Lohnbändern ab rund CHF 85'000. Mit eidgenössischem Diplom als Elektroinstallateur:in oder einer Weiterbildung zum Techniker HF geht es weiter nach oben. Zweitens, denke in Karrierestufen, nicht in Jobwechseln. Die stärksten Lohnsprünge entstehen durch die richtigen Wechsel auf die nächste Karrierestufe. Der Sprung von Elektroinstallateur zu Teamleiter, von Teamleiter zu Projektleiter, von Elektroplaner zu BIM-Koordinator. Jede dieser Stufen bringt strukturell mehr Lohn und mehr Verantwortung. Weiterbildung ist dafür der Schlüssel.",
          "Drittens, sei bei Wechseln transparent zu deinen Prioritäten. Nicht jeder Wechsel ist eine reine Lohnfrage. Anfahrt, Team, Projektstruktur, Weiterbildungsbudget, Führungskultur, Spezialisierung. All das zählt und lässt sich in einem sauberen Erstgespräch klären, bevor du überhaupt in einen Bewerbungsprozess einsteigst. Wir vermitteln bei ScaleZ aktuell mehrere Positionen in der Schweizer Elektrobranche. Wenn du wissen willst, wo du mit deinem Profil im Markt stehst, melde dich bei uns unter scale-z.ch.",
        ],
      },
      {
        id: "wie-viel-verdient-ein-elektroinstallateur-pro-monat",
        title: "Wie viel verdient ein Elektroinstallateur pro Monat?",
        paragraphs: [
          "Marktüblich rund CHF 4'900 bis 6'800 brutto pro Monat bei 13 Monatslöhnen, im Mittel knapp CHF 5'800. Der GAV-Mindestlohn liegt 2026 bei CHF 4'500 direkt nach der Lehre und bei CHF 5'000 nach einem vollen Branchenjahr. Wie hoch ist der Lohn als Elektroplaner pro Monat? Rund CHF 5'400 bis 7'700 pro Monat bei 13 Monatslöhnen, also CHF 70'000 bis 100'000 pro Jahr. Im Mittel sind es etwa CHF 6'400 pro Monat. Einen GAV-Mindestlohn gibt es für Elektroplaner:innen nicht, der Lohn wird frei verhandelt.",
        ],
      },
      {
        id: "was-verdient-ein-projektleiter-elektro",
        title: "Was verdient ein Projektleiter Elektro?",
        paragraphs: [
          "Meist CHF 85'000 bis 115'000 pro Jahr. Bei Grossprojekten in Industrie und Pharma liegen die Lohnbänder in unseren aktuellen Mandaten bei bis zu CHF 155'000.",
        ],
      },
      {
        id: "gibt-es-den-elektro-sicherheitsberater-noch",
        title: "Gibt es den Elektro-Sicherheitsberater noch?",
        paragraphs: [
          "Der Titel wurde Ende 2021 durch die Berufsprüfung Elektroprojektleiter:in Installation und Sicherheit mit eidgenössischem Fachausweis abgelöst. Im Alltag und in Inseraten ist der Begriff Sicherheitsberater weiterhin üblich.",
        ],
      },
      {
        id: "wo-stehst-du-mit-deinem-lohn",
        title: "Wo stehst du mit deinem Lohn?",
        paragraphs: [
          "Lohnbänder zeigen dir die Spannbreite. Wo du darin stehst, hängt von deinem Profil ab, und das sieht man in keiner Statistik. Wir besetzen laufend Stellen in der Elektrobranche, von Service bis Grossprojektleitung, und wissen, was für welches Profil gerade bezahlt wird.",
          "Wenn du wissen willst, wo du stehst, buch dir 30 Minuten mit uns unter bit.ly/scalez-booking. Unverbindlich und diskret.",
          "Alle offenen Elektro-Stellen findest du unter scale-z.ch/jobs.",
        ],
      },
      {
        id: "quellen-und-weiterfuehrende-informationen",
        title: "Quellen und weiterführende Informationen",
        paragraphs: [
          "GAV der Schweizerischen Elektrobranche, Mindestlöhne ab 1. Januar 2026, GAV-Service der Unia: https://service-cct.ch/gav/300001/version/12/vertrag/12343",
          "Marktübliche Lohnbänder: Auswertungen aus Lohnportalen und der Lohnstrukturerhebung des Bundesamts für Statistik: https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten/lohnstruktur.html Lohnrechner des Schweizerischen Gewerkschaftsbunds: https://lohnrechner.ch",
          "Lohnbänder aus Mandaten: aktuelle Stelleninserate von ScaleZ, Stand Oktober 2026: https://www.scale-z.ch/jobs",
        ],
      },
    ],
  },
  {
    slug: "fachkraeftemangel-schweiz-2026-berufe",
    title: "Fachkräftemangel Schweiz 2026 welche Berufe wirklich gesucht sind",
    category: "Markt",
    readTime: "7 Min.",
    publishedAt: "28. Oktober 2026",
    teaser:
      "Gesundheit, Bauführung, Technik und Elektro bleiben 2026 Mangelberufe. Im Büro und in der IT gibt es mehr Bewerbende als Stellen. Was das für dich heisst.",
    intro:
      "Der Fachkräftemangel in der Schweiz hat sich 2025 zum zweiten Mal in Folge abgeschwächt, der Index liegt rund 22 Prozent unter dem Vorjahr. Einen klaren Mangel gibt es nur noch in 4 von 32 Berufsgruppen, nämlich in Gesundheitsberufen, bei Bauführung und Polier, bei ingenieurtechnischen Fachkräften und bei Elektriker:innen. Hier erfährst du, welche Berufe 2026 gesucht sind, wo es mehr Bewerbende als Stellen gibt und was das für dich als Fachkraft oder Betrieb bedeutet.",
    sections: [
      {
        id: "gibt-es-in-der-schweiz-2026-noch-einen-fachkraeftemangel",
        title: "Gibt es in der Schweiz 2026 noch einen Fachkräftemangel?",
        paragraphs: [
          "Ja, aber deutlich weniger breit als noch vor zwei Jahren. Der Fachkräftemangel Index der Adecco Gruppe und des Stellenmarkt-Monitors der Universität Zürich lag 2025 rund 22 Prozent unter dem Vorjahr und nähert sich wieder dem Niveau vor der Pandemie. Die Zahl der offenen Stellen sank um 8 Prozent, die Zahl der Stellensuchenden stieg um 17 Prozent. Das zeigt sich auch bei der Arbeitslosigkeit. Die Quote stieg von 2,3 Prozent im Jahr 2024 auf 2,8 Prozent im Jahr 2025. Im September 2026 lag sie laut SECO bei 3,0 Prozent, mit 140'480 registrierten Arbeitslosen. Gleichzeitig waren bei den RAV 44'199 offene Stellen gemeldet, 18 Prozent mehr als ein Jahr zuvor. Der Mangel konzentriert sich heute auf wenige Berufsgruppen. Wer in einem dieser Berufe arbeitet, spürt davon wenig Entspannung. Wer im Büro oder in der IT arbeitet, erlebt einen deutlich härteren Markt als noch 2023.",
        ],
      },
      {
        id: "welche-berufe-sind-in-der-schweiz-am-meisten-gesucht",
        title: "Welche Berufe sind in der Schweiz am meisten gesucht?",
        paragraphs: [
          "Auf Rang 1 stehen seit 2022 die Spezialist:innen in Gesundheitsberufen, etwa Fachärzt:innen, Pflegefachkräfte oder Apotheker:innen. Rang 2 belegen Bauführer:innen, Polier:innen und Produktionsleiter:innen, also zum Beispiel Bauleiter:innen, Maschinenbauleiter:innen oder Elektrotechniker:innen. Auf Rang 3 folgen ingenieurtechnische Fachkräfte wie Maschinenbautechniker:innen und Techniker:innen für Systemtechnik und Automation. Rang 4 belegen Elektriker:innen und Elektroniker:innen. In der Deutschschweiz sind sechs Berufsgruppen vom Mangel betroffen, vor allem in Gesundheit, Bau und Technik. In der lateinischen Schweiz zeigt nur das Gesundheitswesen einen klaren Mangel. Stabil geblieben ist die Lage bei den Bau- und Ausbaufachkräften, zu denen auch Sanitär- und Heizungsinstallateur:innen, Zimmerleute und Dachdecker:innen gehören, sowie bei Maschinenführer:innen und Fahrer:innen von Baumaschinen. Alle diese Gruppen hängen eng am Baugewerbe, das weiterhin eine robuste Auftragslage hat.",
        ],
      },
      {
        id: "wo-gibt-es-mehr-bewerbende-als-stellen",
        title: "Wo gibt es mehr Bewerbende als Stellen?",
        paragraphs: [
          "Die stärksten Rückgänge zeigen Büro-, Verwaltungs- und kaufmännische Berufe sowie ICT- und Informatikberufe. Die kaufmännischen und Verwaltungsfachkräfte sind im Ranking von Rang 21 auf Rang 28 gefallen. Die Studie führt das auch auf künstliche Intelligenz zurück. Berufe, die stark KI-exponiert sind, verzeichnen weniger Stelleninserate und mehr Arbeitslose. Ein Überangebot besteht ausserdem bei allgemeinen Büro- und Sekretariatskräften, bei Bürokräften mit Kundenkontakt und bei Hilfsarbeitskräften.",
        ],
      },
      {
        id: "warum-handwerks-und-technische-berufe-als-krisensicher-gelten",
        title: "Warum Handwerks- und technische Berufe als krisensicher gelten",
        paragraphs: [
          "Im dritten Quartal 2026 hat sich der Stellenmarkt stabilisiert, die Zahl der offenen Stellen stieg um 0,8 Prozent gegenüber Vorquartal und Vorjahr. Getragen wird diese Entwicklung von den Handwerks- und technischen Berufen. Über zehn Jahre betrachtet ist der Unterschied deutlich. Zwischen 2015/16 und 2025/26 stieg die Zahl der offenen Stellen in Handwerks- und technischen Berufen um 131 Prozent, der Gesamtmarkt nur um 30 Prozent. Am stärksten legten die Bau- und Ausbaufachkräfte mit 173 Prozent und die Elektriker:innen und Elektroniker:innen mit 134 Prozent zu. Dazu kommt, dass diese Berufe deutlich seltener von KI-Automatisierung betroffen sind als akademische Berufe. Eine Wärmepumpe installiert oder eine Baustelle führt keine Software.",
        ],
      },
      {
        id: "fachkraeftemangel-im-bau-und-in-der-infrastruktur",
        title: "Fachkräftemangel im Bau und in der Infrastruktur",
        paragraphs: [
          "Bauführung und Polier stehen unverändert auf Rang 2 aller Berufsgruppen. Gesucht sind vor allem Fachkräfte, die eine Baustelle selbstständig führen, vom Polier im Hochbau bis zur Bauleitung im Tiefbau. Das zeigt sich auch an den Löhnen in unseren aktuellen Mandaten. Für eine:n Polier:in Hochbau im Grossraum Zürich liegt das ausgeschriebene Lohnband bei CHF 95'000 bis 125'000, für Bauleiter:innen Infrastruktur bei CHF 90'000 bis 115'000. Projektleiter:innen Infrastruktur für Strassen und Kunstbauten liegen bei CHF 95'000 bis 130'000. Was auf welcher Karrierestufe im Tiefbau verdient wird, haben wir im Beitrag „Tiefbau Zürich 2026“ ausführlich aufgeschlüsselt.",
        ],
      },
      {
        id: "fachkraeftemangel-in-elektro-und-gebaeudetechnik",
        title: "Fachkräftemangel in Elektro und Gebäudetechnik",
        paragraphs: [
          "Elektriker:innen und Elektroniker:innen stehen auf Rang 4. Die Nachfrage kommt vor allem aus dem Bau, dazu aus dem Ersatz fossiler Heizungen durch Wärmepumpen, aus Photovoltaik, Ladeinfrastruktur und Gebäudeautomation. Jede dieser Anlagen braucht Planung, Installation und Service. In der Gebäudetechnik gehören Sanitär- und Heizungsinstallateur:innen zu den Gruppen mit stabil hoher Nachfrage. In unseren Mandaten liegen die Lohnbänder für Servicetechniker:innen Heizung und Wärmepumpen bei CHF 78'000 bis 100'000, für Gebäudetechnikplaner:innen HLKS bei CHF 78'000 bis 105'000 und für Projektleiter:innen HLK bei CHF 95'000 bis 125'000. Welche Mindestlöhne in der Elektrobranche gelten, steht in unserem Beitrag zum GAV Elektro 2026. Was am Markt tatsächlich bezahlt wird, findest du im Beitrag „Löhne in der Schweizer Elektrobranche 2026“.",
        ],
      },
      {
        id: "fachkraeftemangel-in-industrie-und-engineering",
        title: "Fachkräftemangel in Industrie und Engineering",
        paragraphs: [
          "Ingenieurtechnische Fachkräfte sind 2025 auf Rang 3 vorgerückt, obwohl die MEM-Industrie unter schwacher Exportnachfrage leidet. Gemeint sind vor allem Techniker:innen und Fachkräfte mit Berufsbildung und Weiterbildung, etwa in Maschinenbau, Systemtechnik und Automation. Bei den akademischen Ingenieurberufen sieht es anders aus. Im zweiten Quartal 2026 verzeichneten die naturwissenschaftlichen Berufe, darunter Ingenieurwissenschaftler:innen, den stärksten Rückgang an offenen Stellen. Wer praktisch umsetzt, ist derzeit gefragter als wer forscht oder entwickelt.",
        ],
      },
      {
        id: "fachkraeftemangel-im-gesundheitswesen",
        title: "Fachkräftemangel im Gesundheitswesen",
        paragraphs: [
          "Gesundheitsberufe führen das Ranking seit 2022 unangefochten an. Haupttreiber ist die alternde Bevölkerung mit einem wachsenden Bedarf an Pflege und medizinischer Versorgung. Auch die Gesundheitsassistenz, also etwa Fachpersonen Gesundheit oder Rettungsdienstpersonal, bewegt sich weiter in Richtung Mangel. Der Kostendruck im Gesundheitswesen bremst allerdings die Zahl der ausgeschriebenen Stellen. Was ebenfalls funktioniert, ist Prozess-Schnelligkeit. In einem Markt, in dem gute Kandidat:innen drei bis fünf parallele Angebote haben, verliert der Betrieb, der drei Wochen für die interne Freigabe braucht und dann noch mal zwei Wochen für den zweiten Gesprächstermin. Wir haben diese Erkenntnis in unserem separaten Blog zum Bewerbungsprozess ausführlicher dokumentiert.",
          "Was dritter Erfolgsfaktor ist, ist Transparenz. Lohnbandbreiten im Inserat, klare Angaben zu Pensum, Ort, Homeoffice-Regelung und Start. Alles andere kostet Zeit und Nerven auf beiden Seiten. Der Erwartungshaltung \"Gehalt nach Vereinbarung\" gehört 2026 endgültig der Vergangenheit an. Wer Fachkräfte gewinnen will, muss zeigen, dass er ihre Zeit respektiert.",
        ],
      },
      {
        id: "was-du-als-fachkraft-in-einem-mangelberuf-tun-kannst",
        title: "Was du als Fachkraft in einem Mangelberuf tun kannst",
        paragraphs: [
          "Wenn du in Bau, Elektro, Gebäudetechnik oder Technik arbeitest, ist deine Verhandlungsposition stärker, als viele denken. Der wichtigste Schritt ist, deinen Marktwert zu kennen. Dein aktueller Lohn und das, was der Markt für dein Profil zahlt, liegen oft weiter auseinander, als dir bewusst ist. Die grössten Lohnsprünge entstehen beim Wechsel auf die nächste Karrierestufe, etwa vom Bauleiter zum Projektleiter oder vom Servicetechniker zum Serviceleiter. Kläre vor jedem Wechsel, was dir neben dem Lohn wichtig ist, von der Anfahrt bis zur Führungskultur. Für Fachkräfte in diesen Berufen bedeutet das eine Verhandlungsposition, die es in der Schweiz noch nie so eindeutig gab. Für Betriebe bedeutet es einen Zwang zur Professionalisierung der Personalgewinnung.",
          "Wir bei ScaleZ arbeiten genau in diesem Spannungsfeld. Wir kennen die Verticals Bau, Elektro und Pflege in der Deutschschweiz aus laufenden Gesprächen mit beiden Seiten. Wenn du wissen willst, wo du mit deinem Profil im Markt stehst, oder als Betrieb einen strukturierten Zugang zu passiven Fachkräften suchst, melde dich bei uns unter scale-z.ch. Ein 30-minütiges Erstgespräch ist kostenlos, unverbindlich und meistens der beste Startpunkt.",
        ],
      },
      {
        id: "was-betriebe-jetzt-tun-koennen",
        title: "Was Betriebe jetzt tun können",
        paragraphs: [
          "In den Mangelberufen reichen klassische Inserate oft nicht mehr. Die besten Fachkräfte sind nicht auf Jobsuche und müssen direkt angesprochen werden. Ebenso entscheidend sind Tempo und Transparenz. Wer drei Wochen für eine interne Freigabe braucht oder im Inserat keinen Lohn nennt, verliert Kandidat:innen an schnellere Betriebe. Mehr dazu in unserem Beitrag zum Druck im Bewerbungsprozess.",
        ],
      },
      {
        id: "welche-berufe-sind-2026-in-der-schweiz-mangelberufe",
        title: "Welche Berufe sind 2026 in der Schweiz Mangelberufe?",
        paragraphs: [
          "Laut Fachkräftemangel Index Schweiz von Adecco und Universität Zürich sind es vier Berufsgruppen: Spezialist:innen in Gesundheitsberufen, Bauführer:innen und Polier:innen, ingenieurtechnische Fachkräfte wie Maschinenbau- und Automationstechniker:innen sowie Elektriker:innen und Elektroniker:innen.",
        ],
      },
      {
        id: "ist-maschinenbau-in-der-schweiz-gefragt",
        title: "Ist Maschinenbau in der Schweiz gefragt?",
        paragraphs: [
          "Ja, vor allem auf Stufe Techniker:in und Fachkraft. Ingenieurtechnische Fachkräfte, etwa Maschinenbautechniker:innen, stehen 2025 auf Rang 3 der Mangelberufe, obwohl die MEM-Industrie unter schwacher Exportnachfrage leidet.",
        ],
      },
      {
        id: "ist-ein-dipl-techniker-hf-in-der-schweiz-gefragt",
        title: "Ist ein dipl. Techniker HF in der Schweiz gefragt?",
        paragraphs: [
          "In technischen Richtungen ja. Techniker:innen für Maschinenbau, Systemtechnik und Automation gehören zu den ingenieurtechnischen Fachkräften auf Rang 3, Elektrotechniker:innen zur Gruppe Bauführung und Produktionsleitung auf Rang 2.",
        ],
      },
      {
        id: "wie-hoch-ist-die-arbeitslosigkeit-in-der-schweiz-2026",
        title: "Wie hoch ist die Arbeitslosigkeit in der Schweiz 2026?",
        paragraphs: [
          "Im September 2026 lag die Arbeitslosenquote laut SECO bei 3,0 Prozent. Im Jahresmittel 2025 betrug sie 2,8 Prozent, 2024 waren es 2,3 Prozent.",
        ],
      },
      {
        id: "wo-stehst-du-im-markt",
        title: "Wo stehst du im Markt?",
        paragraphs: [
          "Ob du in einem Mangelberuf arbeitest, sagt dir der Index. Was das für deinen Lohn und deine Möglichkeiten heisst, sagt er nicht. Wir sprechen jede Woche mit Betrieben in Bau, Elektro, Gebäudetechnik und Industrie in der Deutschschweiz. Wenn du wissen willst, wo du mit deinem Profil stehst, buch dir 30 Minuten mit uns unter bit.ly/scalez-booking. Als Betrieb erreichst du uns über scale-z.ch/kontakt. Unsere offenen Stellen findest du unter scale-z.ch/jobs.",
        ],
      },
      {
        id: "quellen-und-weiterfuehrende-informationen",
        title: "Quellen und weiterführende Informationen",
        paragraphs: [
          "Fachkräftemangel Index Schweiz 2025, Adecco Gruppe Schweiz und Stellenmarkt-Monitor Schweiz der Universität Zürich: https://www.stellenmarktmonitor.uzh.ch/de/indices/fachkraeftemangel.html",
          "Swiss Job Market Index Q3 2026, Stellenmarkt-Monitor Schweiz: https://www.suz.uzh.ch/de/forschung/wirtschaftssoziologie/news-ws/smm-quartalsbericht-q3-2026.html Swiss Job Market Index Q2 2026, Medienmitteilung: https://www.adeccogroup.com/-/media/project/adecco-group/switzerland/job-index/job-index-q2-2026/job_index_q2_2026_medienmitteilung.pdf",
          "Die Lage auf dem Arbeitsmarkt September 2026, SECO: https://www.seco.admin.ch/de/newnsb/Cdju9-o8WGML",
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
    title: "GAV Elektro 2026 Mindestlöhne bis 2029 im Überblick",
    category: "Markt",
    readTime: "7 Min.",
    publishedAt: "28. Oktober 2026",
    teaser:
      "Elektroinstallateur EFZ ab CHF 4'500, nach einem Branchenjahr CHF 5'000. Alle GAV Mindestlöhne 2026 bis 2029, Spesen, Ferien und wer nicht unterstellt ist.",
    intro:
      "Seit dem 1. Januar 2026 gilt in der Schweizer Elektrobranche ein neuer GAV, allgemeinverbindlich bis Ende 2029. Als Elektroinstallateur:in EFZ verdienst du 2026 mindestens CHF 4'500 pro Monat direkt nach der Lehre und CHF 5'000 nach einem vollen Branchenjahr, jeweils 13 Mal pro Jahr. Hier findest du alle Lohnkategorien, die Regeln zu Arbeitszeit, Spesen und Ferien und die Antwort darauf, ob der GAV für dich überhaupt gilt.",
    sections: [
      {
        id: "fuer-wen-gilt-der-gav-elektrobranche",
        title: "Für wen gilt der GAV Elektrobranche?",
        paragraphs: [
          "Der GAV wurde zwischen dem Arbeitgeberverband EIT.swiss und den Gewerkschaften Unia und Syna ausgehandelt. Der Bundesrat hat ihn allgemeinverbindlich erklärt. Damit gilt er für alle Betriebe der Branche, auch für solche, die nicht Mitglied bei EIT.swiss sind. Ausgenommen sind die Kantone Genf und Wallis, die eigene Verträge haben. Unterstellt sind Betriebe, die elektrische Installationen im Niederspannungsbereich nach NIV ausführen. Dazu gehören auch Gebäudeinformatik, Energieerzeugungsanlagen wie Photovoltaik und provisorische Installationen. Ebenfalls darunter fallen Schwachstromanlagen für Kommunikation, Sicherheit und Automation sowie vorbereitende Arbeiten wie Schlitzarbeiten, Trassenmontagen und Rohreinlagen. Wichtig und oft übersehen: Nicht unterstellt sind Kader und Mitarbeitende, die vorwiegend mit Planung, Projektierung, Kalkulation und Offerten beschäftigt sind. Als Elektroplaner:in oder Projektleiter:in fällst du deshalb häufig gar nicht unter die GAV-Mindestlöhne, dein Lohn wird frei verhandelt. Was in diesen Funktionen am Markt bezahlt wird, haben wir im Beitrag „Löhne in der Schweizer Elektrobranche 2026“ aufgeschlüsselt.",
        ],
      },
      {
        id: "welche-mindestloehne-gelten-2026",
        title: "Welche Mindestlöhne gelten 2026?",
        paragraphs: [
          "Als Elektroinstallateur:in EFZ verdienst du 2026 mindestens CHF 4'500 pro Monat direkt nach der Lehre und CHF 5'000 nach einem vollen Branchenjahr. Montage-Elektriker:innen EFZ starten bei CHF 4'300 und kommen nach einem Branchenjahr auf CHF 4'700. Gebäudeinformatiker:innen und Telematiker:innen EFZ haben mit CHF 4'770 und CHF 5'300 die höchsten Mindestlöhne unter den EFZ-Berufen. Teamleiter:innen mit Prüfungszertifikat nach EIT.swiss erhalten mindestens CHF 5'600. Mit schulischem Abschluss oder ausländischer Elektroausbildung gelten CHF 4'300 nach Abschluss und CHF 4'600 nach einem Branchenjahr. Ohne Berufsabschluss sind es CHF 4'200 zu Beginn und CHF 4'500 nach zwei Jahren in der Branche. Alle Beträge werden 13 Mal pro Jahr ausbezahlt. Für Elektroinstallateur:innen EFZ ergibt das mindestens CHF 58'500 beziehungsweise CHF 65'000 pro Jahr. Der höhere Mindestlohn gilt jeweils ab dem 1. Januar nach einem vollen Jahr Branchenerfahrung in der Schweiz. Deine Erfahrung musst du selbst belegen, etwa mit Arbeitszeugnissen oder Lohnabrechnungen. Ausländische Abschlüsse zählen wie ein EFZ, wenn eine Gleichwertigkeitsbestätigung von ESTI oder SBFI vorliegt. Für Lernende und für Jugendliche ohne EFZ bis zum 20. Altersjahr gelten die Mindestlöhne nicht.",
        ],
      },
      {
        id: "wie-entwickeln-sich-die-mindestloehne-bis-2029",
        title: "Wie entwickeln sich die Mindestlöhne bis 2029?",
        paragraphs: [
          "Die Mindestlöhne sind im Anhang 5c des GAV für die ganze Laufzeit festgelegt. Sie steigen in allen Kategorien per 1. Januar 2027 und per 1. Januar 2029 um je CHF 100 pro Monat. 2028 bleiben sie auf dem Stand von 2027. Für Elektroinstallateur:innen EFZ heisst das CHF 4'600 nach der Lehre und CHF 5'100 nach einem Branchenjahr ab 2027, ab 2029 dann CHF 4'700 und CHF 5'200. Montage-Elektriker:innen EFZ kommen 2029 auf CHF 4'500 und CHF 4'900, Gebäudeinformatiker:innen auf CHF 4'970 und CHF 5'500, Teamleiter:innen auf CHF 5'800.",
        ],
      },
      {
        id: "wie-hoch-ist-der-stundenlohn-nach-gav",
        title: "Wie hoch ist der Stundenlohn nach GAV?",
        paragraphs: [
          "Der GAV rechnet den Stundenlohn aus dem Monatslohn geteilt durch 174 Stunden. Beim Mindestlohn von CHF 4'500 ergibt das einen Grundstundenlohn von CHF 25.86, bei CHF 5'000 sind es CHF 28.74. Im Stundenlohn kommen die Anteile für Ferien, Feiertage und den 13. Monatslohn noch dazu. Die Jahresbruttoarbeitszeit liegt 2026 bei 2'088 Stunden, berechnet auf eine 40-Stunden-Woche. Dieser Wert ist die Basis für Überstunden, Ferien und Krankheitstage.",
        ],
      },
      {
        id: "was-gilt-bei-ueberstunden-spesen-und-ferien",
        title: "Was gilt bei Überstunden, Spesen und Ferien?",
        paragraphs: [
          "Überstunden entstehen, wenn du über das Jahr mehr arbeitest als die Jahresbruttoarbeitszeit. Bis zu 100 Überstunden dürfen per 31. Dezember ins nächste Jahr übertragen werden und werden dann ohne Zuschlag kompensiert oder ausbezahlt. Alles über 100 Stunden wird im Januar mit 25 % Zuschlag ausbezahlt. Arbeitest du auswärts und fährst täglich heim, hast du Anspruch auf mindestens CHF 18 pro Tag für die Verpflegung, sobald der Arbeitsort mehr als 15 Minuten vom Firmendomizil entfernt liegt. Setzt du dein Privatauto ein und hat der Betrieb kein eigenes Spesenreglement, gibt es CHF 0.60 pro Kilometer. Viele lassen diese Beträge liegen, weil sie sie nicht kennen. Bis zum vollendeten 50. Altersjahr hast du 27 Ferientage, danach 30. Bis 20 Jahre sind es 25 Tage. Für Weiterbildung kannst du bis zu 5 bezahlte Tage pro Jahr beanspruchen, beim Vaterschaftsurlaub sind es 10 Tage zu 100 % Lohn.",
        ],
      },
      {
        id: "was-hat-sich-2026-bei-den-bestehenden-loehnen-geaendert",
        title: "Was hat sich 2026 bei den bestehenden Löhnen geändert?",
        paragraphs: [
          "Wer vor dem 1. Oktober 2025 beim gleichen Arbeitgeber angestellt war, hat per 1. Januar 2026 generell CHF 50 mehr pro Monat erhalten. Wer später eingestiegen ist, hat keinen Anspruch auf diese Erhöhung. Vom Lohn abgezogen werden weiterhin CHF 21 pro Monat für Vollzugskosten und Weiterbildung. Der Arbeitgeber zahlt denselben Betrag zusätzlich ein.",
        ],
      },
      {
        id: "warum-der-mindestlohn-selten-dein-echter-lohn-ist",
        title: "Warum der Mindestlohn selten dein echter Lohn ist",
        paragraphs: [
          "Die GAV-Mindestlöhne schützen dich vor Unterbezahlung. Über deinen Marktwert sagen sie wenig. Gerade in Zürich und Basel liegen die tatsächlich bezahlten Löhne für erfahrene Elektroinstallateur:innen klar darüber. Den Unterschied machen Berufsjahre, Spezialgebiete wie Photovoltaik, KNX oder Gebäudeautomation und Weiterbildungen zum Elektro-Teamleiter oder Sicherheitsberater. Auch die Grösse des Betriebs spielt mit. Konkrete Lohnbänder nach Funktion findest du in unserem Beitrag „Löhne in der Schweizer Elektrobranche 2026“.",
        ],
      },
      {
        id: "wie-pruefst-du-ob-dein-lohn-gav-konform-ist",
        title: "Wie prüfst du, ob dein Lohn GAV-konform ist?",
        paragraphs: [
          "Bestimme zuerst deine Kategorie anhand deines Abschlusses und deiner Branchenjahre in der Schweiz. Vergleiche dann deinen Monatslohn auf der Lohnabrechnung mit den Beträgen oben und prüfe, ob der 13. Monatslohn bezahlt wird. Liegst du darunter, hast du Anspruch auf Anpassung. Sprich zuerst mit deinem Arbeitgeber. Hilft das nicht, kannst du dich an die Paritätische Landeskommission der Elektrobranche oder an Unia oder Syna wenden.",
        ],
      },
      {
        id: "wie-viel-verdient-ein-elektroinstallateur-efz-2026-mindestens",
        title: "Wie viel verdient ein Elektroinstallateur EFZ 2026 mindestens?",
        paragraphs: [
          "Nach dem GAV der Schweizer Elektrobranche mindestens CHF 4'500 pro Monat direkt nach der Lehre und CHF 5'000 nach einem vollen Branchenjahr in der Schweiz, jeweils 13 Mal pro Jahr. Das sind CHF 58'500 beziehungsweise CHF 65'000 pro Jahr.",
        ],
      },
      {
        id: "gilt-der-gav-elektro-auch-fuer-elektroplaner-und-projektleiter",
        title: "Gilt der GAV Elektro auch für Elektroplaner und Projektleiter?",
        paragraphs: [
          "Meistens nicht. Mitarbeitende, die vorwiegend planen, projektieren, kalkulieren oder offerieren, sind vom GAV ausgenommen, ebenso Kader. Ihr Lohn wird frei verhandelt.",
        ],
      },
      {
        id: "gilt-der-gav-elektrobranche-in-der-ganzen-schweiz",
        title: "Gilt der GAV Elektrobranche in der ganzen Schweiz?",
        paragraphs: [
          "Ja, mit Ausnahme der Kantone Genf und Wallis, die eigene Gesamtarbeitsverträge haben. Weil der Bundesrat den GAV allgemeinverbindlich erklärt hat, gilt er auch für Betriebe, die nicht Mitglied bei EIT.swiss sind.",
        ],
      },
      {
        id: "wie-viele-ferientage-gibt-der-gav-elektro",
        title: "Wie viele Ferientage gibt der GAV Elektro?",
        paragraphs: [
          "27 Tage bis zum vollendeten 50. Altersjahr, danach 30 Tage. Bis 20 Jahre sind es 25 Tage.",
        ],
      },
      {
        id: "wo-stehst-du-mit-deinem-lohn",
        title: "Wo stehst du mit deinem Lohn?",
        paragraphs: [
          "Der GAV sagt dir, was du mindestens bekommen musst. Was du mit deiner Erfahrung tatsächlich bekommen kannst, steht nirgends geschrieben. Wir sprechen jede Woche mit Elektrobetrieben in der Deutschschweiz und wissen, welche Löhne für welche Profile gerade bezahlt werden. Wenn du wissen willst, wo du stehst, buch dir 30 Minuten mit uns unter bit.ly/scalez-booking. Unverbindlich und diskret. Unsere offenen Stellen in der Elektrobranche findest du unter scale-z.ch/jobs.",
        ],
      },
      {
        id: "quellen-und-weiterfuehrende-informationen",
        title: "Quellen und weiterführende Informationen",
        paragraphs: [
          "GAV der Schweizerischen Elektrobranche, Mindestlöhne ab 1. Januar 2026, GAV-Service der Unia: https://service-cct.ch/gav/300001/version/12/vertrag/12343 Lohnvereinbarung 2026 mit Anhang 5c, Paritätische Landeskommission der Elektrobranche: https://www.plk-elektro.ch/documents/737/ELEKT_Lohnvereinbarung_2026_d.pdf Allgemeinverbindlicherklärung des GAV, SECO: https://www.seco.admin.ch/seco/de/home/Arbeit/Personenfreizugigkeit_Arbeitsbeziehungen/Gesamtarbeitsvertraege_Normalarbeitsvertraege/Gesamtarbeitsvertraege_Bund/Allgemeinverbindlich_erklaerte_Gesamtarbeitsvertraege/Elektro_Telekommunikations_Installationsgewerbes.html",
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
