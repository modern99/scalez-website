import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const headerLines = [
  "ScaleZ GmbH",
  "Eggbühlstrasse 24, 8050 Zürich, Schweiz",
  "E-Mail: info@scale-z.ch · Telefon: +41 79 704 60 00",
  "Stand: 04.2026",
];

const sections = [
  {
    title: "1. Allgemeine Hinweise",
    paragraphs: [
      "In dieser Datenschutzerklärung informieren wir Sie darüber, wie die ScaleZ GmbH (nachfolgend «ScaleZ», «wir» oder «uns») Personendaten im Rahmen ihrer Tätigkeit als Executive-Search- und Personalvermittlungs-Dienstleister sowie beim Betrieb der Website www.scale-z.ch bearbeitet.",
      "«Personendaten» sind alle Angaben, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. «Bearbeiten» umfasst jeden Umgang mit Personendaten, insbesondere Beschaffung, Speicherung, Nutzung, Bekanntgabe, Übermittlung und Löschung.",
      "Die Bearbeitung erfolgt nach dem revidierten Schweizer Datenschutzgesetz (revDSG) sowie, soweit anwendbar, nach der EU-Datenschutz-Grundverordnung (DSGVO).",
    ],
  },
  {
    title: "2. Verantwortliche Stelle und Kontakt",
    paragraphs: [
      "Verantwortlich für die Datenbearbeitung ist:",
      "ScaleZ GmbH",
      "Eggbühlstrasse 24",
      "8050 Zürich, Schweiz",
      "E-Mail: info@scale-z.ch",
      "Telefon: +41 79 704 60 00",
      "Für alle Fragen zum Datenschutz, zur Ausübung Ihrer Rechte sowie für Beschwerden wenden Sie sich bitte an info@scale-z.ch.",
      "Wir haben keinen Datenschutzbeauftragten bestellt, da die gesetzlichen Voraussetzungen hierfür weder nach Art. 37 DSGVO noch nach Art. 10 revDSG erfüllt sind.",
    ],
  },
  {
    title: "2.1 Rollen",
    paragraphs: [
      "Je nach Verarbeitung handeln wir in unterschiedlichen Rollen:",
      "Als Verantwortlicher, insbesondere bei Kandidatendaten im Talentpool, bei Kundendaten, bei Daten aus aktiver Ansprache und bei Website-Daten.",
      "Als Auftragsbearbeiter nach Art. 28 DSGVO bzw. Art. 9 revDSG, wenn wir im Auftrag eines Kundenunternehmens Kandidatendaten für ein konkretes Suchmandat bearbeiten. In diesen Fällen besteht ein Auftragsbearbeitungsvertrag mit dem Kundenunternehmen.",
      "Kundenunternehmen sind bei der Weiterverarbeitung von Kandidatendaten in der Regel eigenständige Verantwortliche.",
    ],
  },
  {
    title: "3. Kategorien von Personendaten",
    paragraphs: [
      "Welche Daten wir tatsächlich bearbeiten, hängt stark vom Anlass ab. Eine Website-Kontaktanfrage führt zu sehr wenigen Daten, ein laufendes Executive-Search-Mandat hingegen zu einem vollständigen beruflichen Profil. Die folgende Aufzählung ist beispielhaft und nicht abschliessend.",
      "Identifikations- und Kontaktdaten: Anrede, Vor- und Nachname, Geschlecht, Geburtsdatum, Wohn- oder Korrespondenzadresse, private und geschäftliche E-Mail-Adressen, Mobil- und Festnetznummern sowie Profilbilder aus beruflichen Netzwerken oder Bewerbungsunterlagen.",
      "Statusdaten mit Bezug zum Arbeitsmarkt: Staatsangehörigkeit, Aufenthalts- und Arbeitsbewilligung, Wohnsitzland sowie, soweit von Ihnen freiwillig mitgeteilt, familiäre Rahmenbedingungen, die für eine mögliche Anstellung relevant sein können (z. B. Wohnortwechsel- oder Relocation-Bereitschaft).",
      "Qualifikations- und Karrieredaten: Lebenslauf, Ausbildungen, akademische Abschlüsse, Zertifikate und Diplome, Arbeitszeugnisse, Referenzschreiben, Sprachkenntnisse, fachliche und methodische Kompetenzen, Branchenerfahrung, Mitgliedschaften in Berufsverbänden sowie Publikationen oder Vorträge, soweit beruflich relevant.",
      "Daten zur aktuellen und angestrebten Position: Arbeitgeber, Funktion, Verantwortungsbereich, Berichtslinie, Team- und Budgetverantwortung, aktuelles Gesamtkompensationspaket (Fixum, Bonus, Aktien- oder Beteiligungsprogramme, Nebenleistungen), Kündigungsfrist, Vertragsende, Gehaltsvorstellung, gewünschte Arbeitsmodelle (Vor-Ort, hybrid, remote), regionale Präferenzen und Verfügbarkeit.",
      "Motivations- und Bewertungsdaten: Wechselgründe, Karriereziele, Ergebnisse aus Gesprächen, Interviewnotizen, Eignungseinschätzungen unserer Berater, Matching-Scores, Feedback von Kundenunternehmen sowie Referenzauskünfte von dritten Personen.",
      "Kommunikationsdaten: Inhalt und Metadaten der Korrespondenz per E-Mail, Telefon, LinkedIn-Nachricht, Kontaktformular oder Messenger, einschliesslich Zeitpunkten, Kanälen und Gesprächsverläufen.",
      "Kundendaten (B2B): Angaben zu Kundenunternehmen, Ansprechpartnern, deren Rollen und Entscheidungsbefugnissen, Mandatsdetails sowie die Historie der Zusammenarbeit.",
      "Nutzungs- und Verhaltensdaten: Informationen darüber, wie Sie mit unserer Website und unseren digitalen Angeboten interagieren – etwa aufgerufene Seiten, Klickpfade, Verweildauer und Reaktionen auf Stellenangebote.",
      "Präferenz- und Profilierungsdaten: Aus den oben genannten Daten abgeleitete Einschätzungen zu Ihren fachlichen Interessen, bevorzugten Rollenprofilen, Branchenaffinitäten und der wahrscheinlichen Eignung für bestimmte Mandate. Diese Einschätzungen entstehen in unserem CRM und dienen der Vorbereitung von Entscheidungen, die unsere Berater treffen. Eine automatisierte Absage oder Vermittlung findet nicht statt.",
      "Technische Daten: IP-Adresse, ungefährer Standort (aus der IP abgeleitet), Gerätetyp, Betriebssystem, Browser, Spracheinstellung, Referrer-URL, Zeitstempel sowie Logfiles, die bei jedem Seitenaufruf automatisch anfallen.",
      "Tracking- und Kampagnendaten: Cookie- und Geräte-IDs, Conversion-Ereignisse, Attributionsdaten aus Werbekampagnen auf Plattformen wie LinkedIn oder Google – nur, soweit Sie in die entsprechenden Cookies eingewilligt haben.",
      "Daten aus öffentlichen oder halböffentlichen Quellen: öffentlich zugängliche Profile auf LinkedIn, Xing und vergleichbaren Plattformen, Angaben aus Unternehmenswebsites, Handelsregistern, Fach- und Branchenmedien, Konferenzprogrammen sowie Empfehlungen Dritter.",
    ],
  },
  {
    title: "3.1 Besondere Kategorien von Personendaten",
    paragraphs: [
      "Wir erheben aktiv keine besonderen Kategorien nach Art. 9 DSGVO bzw. Art. 5 lit. c revDSG (u. a. Angaben zu Gesundheit, Religions- oder Weltanschauungszugehörigkeit, politischen Ansichten, Gewerkschaftsmitgliedschaft, ethnischer Herkunft, sexueller Orientierung oder biometrischen Daten). Solche Informationen liegen uns nur dann vor, wenn Sie sie uns selbst mitteilen – etwa wenn sich ein ehrenamtliches politisches Mandat oder eine Verbandsmitgliedschaft aus Ihrem Lebenslauf ergibt oder wenn gesundheitliche Einschränkungen für eine Rolle bedeutsam sind und Sie diese freiwillig offenlegen. Wir bearbeiten diese Daten nur, soweit sie für das konkrete Mandat notwendig sind, und stützen uns auf Ihre ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a DSGVO) oder eine andere gültige Rechtsgrundlage.",
    ],
  },
  {
    title: "3.2 Daten, die Sie uns über andere Personen übermitteln",
    paragraphs: [
      "Bei Referenzen, Empfehlungen oder Netzwerkhinweisen übermitteln Sie uns gelegentlich Daten von Dritten – beispielsweise Namen und Kontaktangaben ehemaliger Vorgesetzter, Teammitglieder oder Bekannter, die Sie als Kandidat oder Referenz in Betracht ziehen. Wir setzen voraus, dass Sie diese Personen über die Weitergabe informiert oder deren Zustimmung eingeholt haben. Auf Anfrage senden wir Ihnen einen Hinweistext, den Sie an diese Personen weiterleiten können. Sollte eine genannte Drittperson mit der Bearbeitung ihrer Daten nicht einverstanden sein, entfernen wir diese Daten nach einer Mitteilung an uns umgehend aus unseren Systemen, soweit keine rechtlichen Pflichten entgegenstehen.",
    ],
  },
  {
    title: "4. Zwecke der Datenbearbeitung und Rechtsgrundlagen",
    paragraphs: [
      "Wir bearbeiten Personendaten für die folgenden Zwecke. Soweit die DSGVO anwendbar ist, stützen wir uns auf die jeweils angegebenen Rechtsgrundlagen.",
      "Zweck",
      "Rechtsgrundlage DSGVO",
      "Durchführung von Executive Search, Headhunting und Personalvermittlung",
      "Art. 6 Abs. 1 lit. b (Vertrag / vorvertragliche Massnahmen), lit. f (berechtigtes Interesse)",
      "Identifikation und Direktansprache geeigneter Kandidaten",
      "Art. 6 Abs. 1 lit. f (berechtigtes Interesse an der Besetzung konkreter Mandate)",
      "Durchführung von Bewerbungs- und Auswahlprozessen",
      "Art. 6 Abs. 1 lit. b",
      "Pflege von Kandidaten- und Talentpools",
      "Art. 6 Abs. 1 lit. a (Einwilligung)",
      "Kunden- und Mandatsmanagement",
      "Art. 6 Abs. 1 lit. b, lit. f",
      "Vermittlung zwischen Kandidaten und Unternehmen",
      "Art. 6 Abs. 1 lit. b, lit. f",
      "Kommunikation im Rahmen von Rekrutierungsprozessen",
      "Art. 6 Abs. 1 lit. b, lit. f",
      "Betrieb, Analyse und Verbesserung der Website",
      "Art. 6 Abs. 1 lit. f; lit. a für nicht essenzielle Cookies",
      "IT-Sicherheit und Missbrauchsprävention",
      "Art. 6 Abs. 1 lit. f",
      "Einhaltung gesetzlicher Pflichten",
      "Art. 6 Abs. 1 lit. c",
      "Im Anwendungsbereich des revDSG stützen wir die Bearbeitung auf die gesetzlichen Grundlagen des revDSG, insbesondere auf einen überwiegenden privaten Interessenabgleich, auf den Abschluss oder die Abwicklung eines Vertrags oder auf Einwilligung.",
    ],
  },
  {
    title: "5. Informationspflichten nach Art. 13 und Art. 14 DSGVO",
    paragraphs: [
      "Werden Personendaten direkt bei Ihnen erhoben (z. B. Bewerbung, Kontaktformular, Gespräch), informieren wir Sie zum Zeitpunkt der Erhebung nach Art. 13 DSGVO bzw. Art. 19 revDSG.",
      "Werden Personendaten nicht direkt bei Ihnen erhoben – insbesondere aus öffentlich zugänglichen beruflichen Netzwerken (LinkedIn, Xing), aus Empfehlungen oder von Kundenunternehmen – informieren wir Sie spätestens bei der ersten Kontaktaufnahme, in jedem Fall innerhalb eines Monats nach Erhebung, gemäss Art. 14 DSGVO. Die Information erfolgt üblicherweise per E-Mail oder LinkedIn-Nachricht und enthält:",
      "die Quelle der Daten,",
      "die Kategorien der bearbeiteten Daten,",
      "die Verarbeitungszwecke und Rechtsgrundlagen,",
      "die Empfänger oder Kategorien von Empfängern,",
      "die Speicherdauer,",
      "Ihre Rechte sowie",
      "einen Link zu dieser Datenschutzerklärung.",
      "Von der Information kann ausnahmsweise abgesehen werden, wenn eine gesetzliche Ausnahme nach Art. 14 Abs. 5 DSGVO greift.",
    ],
  },
  {
    title: "6. Bewerbungs-, Vermittlungs- und CRM-Prozess",
    paragraphs: [
      "Wir bearbeiten Personendaten zur Prüfung der Eignung für konkrete oder potenzielle Positionen, zur Erstellung und Pflege von Kandidatenprofilen, zur Durchführung von Interviews und Assessments sowie zur Vermittlung an Kundenunternehmen. Die Daten werden in CRM- und Bewerbungsverwaltungssystemen strukturiert gespeichert und verarbeitet.",
      "Eine Weitergabe an Kundenunternehmen erfolgt nur:",
      "bei einem konkreten Vermittlungs- oder Suchmandat, an dem Sie sich aktiv beteiligen, oder",
      "mit Ihrer vorherigen Einwilligung.",
      "Eine ausschliesslich automatisierte Entscheidung mit rechtlicher Wirkung oder ähnlich erheblicher Beeinträchtigung nach Art. 22 DSGVO findet nicht statt. Matching- und Analyseergebnisse sind für unsere Berater lediglich ein Hilfsmittel — die Entscheidung, wen wir ansprechen oder einem Kunden vorschlagen, treffen immer Menschen.",
    ],
  },
  {
    title: "6.1 Talentpool",
    paragraphs: [
      "Mit Ihrer ausdrücklichen Einwilligung nehmen wir Ihr Profil in unseren Talentpool auf, um Sie bei künftigen passenden Mandaten kontaktieren zu können. Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden, z. B. per E-Mail an info@scale-z.ch. Der Widerruf berührt die Rechtmässigkeit der bis dahin erfolgten Bearbeitung nicht.",
    ],
  },
  {
    title: "7. Datenquellen",
    paragraphs: [
      "Personendaten stammen insbesondere aus folgenden Quellen:",
      "direkt von Kandidatinnen und Kandidaten,",
      "von Kundenunternehmen bei Suchmandaten,",
      "aus öffentlich zugänglichen beruflichen Netzwerken wie LinkedIn oder Xing,",
      "aus Empfehlungen durch Dritte,",
      "aus öffentlichen Unternehmens- und Personenverzeichnissen sowie Unternehmens-Websites.",
    ],
  },
  {
    title: "8. Hosting und Content Delivery Network",
    paragraphs: [
      "Unsere Website wird über die Infrastruktur der Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA (nachfolgend «Cloudflare») betrieben und ausgeliefert. Cloudflare stellt in unserem Auftrag Hosting-, Content-Delivery-Network- (CDN) und Sicherheitsdienste bereit.",
      "Bei jedem Aufruf unserer Website verarbeitet Cloudflare technische Daten, die beim Verbindungsaufbau zwingend anfallen: IP-Adresse, Zeitpunkt der Anfrage, aufgerufene URL, übertragenes Datenvolumen, Status der Auslieferung, Browsertyp und -version, Betriebssystem, Referrer-URL sowie anfragende Provider-Kennung. Diese Daten dienen der sicheren, stabilen und performanten Bereitstellung der Website, der Abwehr von Angriffen (z. B. DDoS), der Missbrauchserkennung sowie der technischen Optimierung.",
      "Rechtsgrundlage ist unser berechtigtes Interesse an einem technisch einwandfreien, sicheren und performanten Betrieb unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Cookies, die für den Betrieb der Website zwingend erforderlich sind (z. B. zur Abwehr von Bots), werden ebenfalls auf Grundlage unseres berechtigten Interesses eingesetzt.",
      "Cloudflare hat seinen Hauptsitz in den USA; eine Datenübermittlung in die USA und gegebenenfalls weitere Drittstaaten ist nicht auszuschliessen. Die Übermittlung ist durch EU-Standardvertragsklauseln sowie durch die Zertifizierung von Cloudflare unter dem EU-U.S. Data Privacy Framework und dem Swiss-U.S. Data Privacy Framework abgesichert. Mit Cloudflare besteht ein Auftragsbearbeitungsvertrag nach Art. 28 DSGVO bzw. Art. 9 revDSG.",
      "Server-Logfiles werden grundsätzlich nach maximal 30 Tagen gelöscht. Eine längere Speicherung erfolgt nur, wenn sie zur Aufklärung konkreter sicherheitsrelevanter Vorfälle erforderlich ist.",
      "Weitere Informationen zur Datenbearbeitung durch Cloudflare finden Sie unter https://www.cloudflare.com/privacypolicy/.",
    ],
  },
  {
    title: "8.1 Transaktionale E-Mails (Brevo)",
    paragraphs: [
      "Für den Versand von E-Mails, die aus unseren Kontakt-, Unternehmens- und Kandidatenformularen entstehen, setzen wir den Dienst Brevo der Sendinblue SAS, 106 Boulevard Haussmann, 75008 Paris, Frankreich, ein.",
      "Verarbeitet werden die von Ihnen im Formular eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt) sowie – im Kandidatenformular – hochgeladene Bewerbungsunterlagen als Anhang. Brevo nimmt die Daten ausschliesslich zur Zustellung der E-Mail an unsere interne Adresse info@scale-z.ch entgegen und speichert die Daten auf Servern in der Europäischen Union.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Massnahmen) sowie unser berechtigtes Interesse an einer zuverlässigen Zustellung eingehender Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Mit Brevo besteht ein Auftragsbearbeitungsvertrag nach Art. 28 DSGVO.",
      "Weitere Informationen finden Sie unter https://www.brevo.com/legal/privacypolicy/.",
    ],
  },
  {
    title: "8.2 E-Mail-Empfang und Postfach (Microsoft 365)",
    paragraphs: [
      "Unser geschäftlicher E-Mail-Verkehr – einschliesslich der über Formulare eingehenden Nachrichten und Bewerbungsunterlagen – wird über Microsoft 365 der Microsoft Ireland Operations Ltd., One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland, verarbeitet und gespeichert.",
      "Microsoft kann als Teil eines US-Konzerns im Einzelfall Daten an die Microsoft Corporation in den USA übermitteln. Die Übermittlung ist durch EU-Standardvertragsklauseln, die Zertifizierung unter dem EU-U.S. Data Privacy Framework bzw. dem Swiss-U.S. Data Privacy Framework sowie zusätzliche technische und organisatorische Massnahmen abgesichert. Mit Microsoft besteht ein Auftragsbearbeitungsvertrag nach Art. 28 DSGVO bzw. Art. 9 revDSG.",
      "Rechtsgrundlage ist unser berechtigtes Interesse an einem professionellen geschäftlichen E-Mail-Betrieb sowie die Durchführung vorvertraglicher und vertraglicher Massnahmen (Art. 6 Abs. 1 lit. b und f DSGVO).",
    ],
  },
  {
    title: "9. Cookies, Tracking und Webanalyse",
    paragraphs: [
      "Unsere Website verwendet Cookies und ähnliche Technologien zur technischen Bereitstellung der Website, zur Analyse der Nutzung sowie zur Optimierung von Marketing- und Recruiting-Massnahmen.",
      "Technisch notwendige Cookies setzen wir auf Basis unseres berechtigten Interesses ein (Art. 6 Abs. 1 lit. f DSGVO). Nicht essenzielle Cookies sowie Tracking- und Marketing-Technologien setzen wir nur mit Ihrer ausdrücklichen Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO), die Sie über unser Cookie-Banner erteilen können. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie den «Cookies»-Button im Footer der Website aufrufen und Ihre Auswahl anpassen.",
      "Wir setzen folgende Tools ein:",
      "Tool",
      "Anbieter",
      "Zweck",
      "Rechtsgrundlage",
      "Speicherdauer",
      "Google Analytics 4",
      "Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland",
      "Reichweitenmessung, Nutzungsanalyse, Optimierung der Website. IP-Adressen werden von GA4 standardmässig nur kurzfristig zur Ableitung grober Standortangaben verarbeitet, anschliessend gekürzt und nicht dauerhaft protokolliert oder gespeichert. Eine Zusammenführung der in GA4 verarbeiteten Daten mit anderen Daten von Google findet in unserem Konto nicht statt.",
      "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      "Ereignisdaten: 14 Monate (Maximum gemäss GA4); Cookies bis zu 2 Jahre",
      "LinkedIn Insight Tag",
      "LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland",
      "Conversion-Tracking, Retargeting, Zielgruppenanalyse für Recruiting-Kampagnen",
      "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      "Direkte Kennungen innerhalb von 7 Tagen entfernt; anonymisierte Daten bis zu 180 Tagen; Cookies (z. B. bcookie, lidc) bis zu 2 Jahren",
      "Die vollständige Liste der eingesetzten Cookies finden Sie in unserem Cookie-Banner.",
    ],
  },
  {
    title: "9.1 CRM-System Folk und folkX",
    paragraphs: [
      "Für die Verwaltung von Kandidaten- und Kundenbeziehungen setzen wir das CRM-System Folk (inkl. der zugehörigen Browser-Erweiterung folkX) des Anbieters Folk App SAS, Frankreich, ein. Folk verarbeitet in unserem Auftrag Stamm-, Profil-, Kommunikations- und Mandatsdaten. Die Datenbearbeitung ist durch einen Auftragsbearbeitungsvertrag nach Art. 28 DSGVO abgesichert.",
      "Die Browser-Erweiterung folkX ermöglicht es uns, Profildaten aus öffentlich zugänglichen beruflichen Netzwerken (insbesondere LinkedIn) strukturiert in unser CRM zu übernehmen. Erfasst werden dabei typischerweise Name, aktuelle Funktion, Arbeitgeber, beruflicher Werdegang, Ausbildung sowie öffentlich sichtbare Kontaktangaben. Die Verarbeitung stützt sich auf unser berechtigtes Interesse an der Durchführung von Such- und Rekrutierungsmandaten (Art. 6 Abs. 1 lit. f DSGVO). Betroffene informieren wir nach Art. 14 DSGVO spätestens bei der ersten Kontaktaufnahme. Ein Widerspruch nach Art. 21 DSGVO ist jederzeit möglich (siehe Ziffer 14.1).",
    ],
  },
  {
    title: "10. Datenweitergabe an Dritte",
    paragraphs: [
      "Personendaten werden nur weitergegeben, soweit dies für die genannten Zwecke erforderlich ist oder eine Rechtsgrundlage dies erlaubt. Empfänger sind insbesondere:",
      "Kundenunternehmen bei Vermittlungen,",
      "IT-, Hosting- und Cloud-Dienstleister (u. a. Cloudflare),",
      "E-Mail- und Zustelldienstleister (Brevo / Sendinblue SAS, Microsoft 365 / Microsoft Ireland Operations Ltd.),",
      "der Anbieter unseres CRM-Systems (Folk App SAS),",
      "Analyse-, Marketing- und Werbe-Dienstleister (u. a. Google, LinkedIn) – nur bei Einwilligung,",
      "externe Berater (z. B. Anwälte, Revision, Versicherungen),",
      "Behörden und Gerichte, soweit gesetzlich verpflichtet.",
      "Mit Auftragsbearbeitern schliessen wir Auftragsbearbeitungsverträge nach Art. 28 DSGVO bzw. Art. 9 revDSG ab.",
    ],
  },
  {
    title: "11. Datenübermittlung ins Ausland",
    paragraphs: [
      "Im Rahmen unserer Tätigkeit kann es zu einer Übermittlung von Personendaten ins Ausland kommen – insbesondere in Staaten des EU-/EWR-Raums sowie in die USA und andere Drittländer, in denen Dienstleister oder Kundenunternehmen ansässig sind.",
      "Besteht im Empfängerstaat kein angemessenes Datenschutzniveau, stützen wir die Übermittlung auf geeignete Garantien:",
      "Angemessenheitsbeschlüsse der Europäischen Kommission bzw. Anerkennungen des Schweizerischen Bundesrats,",
      "EU-Standardvertragsklauseln (SCC) in Verbindung mit zusätzlichen technischen und organisatorischen Massnahmen,",
      "für Übermittlungen in die USA an zertifizierte Unternehmen: das EU-U.S. Data Privacy Framework bzw. das Swiss-U.S. Data Privacy Framework.",
      "Eine Kopie der jeweiligen Garantien kann bei uns unter info@scale-z.ch angefordert werden.",
    ],
  },
  {
    title: "12. Aufbewahrungsdauer",
    paragraphs: [
      "Wir speichern Daten so lange, wie es für den Zweck erforderlich ist, höchstens jedoch bis zum Ablauf gesetzlicher Aufbewahrungsfristen. Richtwerte:",
      "Kandidatendaten aus einem konkreten Mandat: bis zu 24 Monate nach Abschluss des Mandats, danach Übernahme in den Talentpool bei Einwilligung oder Löschung.",
      "Kandidatendaten ohne konkretes Mandat (aktive Ansprache): bis zu 24 Monate nach letztem relevanten Kontakt.",
      "Talentpool-Daten: bis zum Widerruf der Einwilligung. Wir fragen den Fortbestand der Einwilligung in angemessenen Abständen ab, spätestens alle 36 Monate.",
      "Vermittlungs- und Vertragsdaten: 10 Jahre nach Vertragsende (Art. 958f OR sowie allgemeine Verjährungsfristen nach Art. 127 OR).",
      "Kommunikationsdaten (E-Mail, Nachrichten, Gesprächsnotizen): im Rahmen der allgemeinen Verjährungsfrist von 10 Jahren, soweit mit einem Mandat oder Vertragsverhältnis verknüpft; sonst bis zum Wegfall des Zwecks.",
      "Buchhaltungs- und steuerrelevante Unterlagen: 10 Jahre (Art. 958f OR, Art. 70 MWSTG).",
      "Server-Logfiles: maximal 30 Tage, sofern keine sicherheitsrelevanten Vorfälle eine längere Aufbewahrung erforderlich machen.",
      "Nach Ablauf der Frist löschen oder anonymisieren wir die Daten, soweit keine weitergehende gesetzliche Aufbewahrungspflicht besteht.",
    ],
  },
  {
    title: "13. Datensicherheit",
    paragraphs: [
      "Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre Personendaten vor unberechtigtem Zugriff, Verlust, Missbrauch oder Veränderung zu schützen. Dazu gehören Zugriffsbeschränkungen nach dem Prinzip der minimalen Rechte, verschlüsselte Datenübertragung (TLS), Schutz von CRM- und Datenbanksystemen, Protokollierung sicherheitsrelevanter Zugriffe, regelmässige Sicherheitsüberprüfungen sowie Schulungen unserer Mitarbeitenden.",
      "Einen vollständigen Schutz vor unbefugtem Zugriff können wir trotz aller Sorgfalt nicht garantieren.",
    ],
  },
  {
    title: "14. Rechte der betroffenen Personen",
    paragraphs: [
      "Sie haben nach Massgabe des anwendbaren Rechts folgende Rechte:",
      "Auskunft über die von uns bearbeiteten Personendaten (Art. 15 DSGVO, Art. 25 revDSG),",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO, Art. 32 Abs. 1 revDSG),",
      "Löschung («Recht auf Vergessenwerden», Art. 17 DSGVO),",
      "Einschränkung der Bearbeitung (Art. 18 DSGVO),",
      "Widerspruch gegen die Bearbeitung, insbesondere gegen Direktansprache und Direktwerbung (Art. 21 DSGVO),",
      "Datenübertragbarkeit, soweit anwendbar (Art. 20 DSGVO),",
      "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).",
      "Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an info@scale-z.ch. Zur Verifikation Ihrer Identität können wir geeignete Nachweise verlangen.",
    ],
  },
  {
    title: "14.1 Widerspruchsrecht (Art. 21 DSGVO)",
    paragraphs: [
      "Wichtiger Hinweis zu Ihrem Widerspruchsrecht",
      "Sie haben jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Bearbeitung Sie betreffender Personendaten einzulegen, die auf ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO gestützt wird (Art. 21 Abs. 1 DSGVO). Dies betrifft insbesondere die Direktansprache von Kandidatinnen und Kandidaten über berufliche Netzwerke wie LinkedIn oder Xing sowie die Bearbeitung öffentlich zugänglicher Profildaten in Such- und Rekrutierungsmandaten.",
      "Werden Personendaten bearbeitet, um Direktwerbung zu betreiben, haben Sie darüber hinaus das Recht, jederzeit ohne Angabe von Gründen Widerspruch gegen diese Bearbeitung einzulegen (Art. 21 Abs. 2 DSGVO).",
      "Nach Eingang des Widerspruchs bearbeiten wir Ihre Daten für diese Zwecke nicht mehr – es sei denn, wir weisen zwingende schutzwürdige Gründe nach, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Bearbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Für den Widerspruch genügt eine formlose Mitteilung an info@scale-z.ch. Es entstehen Ihnen dadurch keine Kosten über die Übermittlungskosten nach den Basistarifen hinaus.",
    ],
  },
  {
    title: "14.2 Beschwerderecht",
    paragraphs: [
      "Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren:",
      "Schweiz: Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB), Feldeggweg 1, 3003 Bern — https://www.edoeb.admin.ch",
      "EU/EWR: bei der Datenschutzaufsichtsbehörde Ihres Aufenthaltslandes, Arbeitsplatzes oder des Ortes des mutmasslichen Verstosses. Eine Liste finden Sie unter https://edpb.europa.eu/about-edpb/about-edpb/members_de.",
    ],
  },
  {
    title: "15. Änderungen dieser Datenschutzerklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung an geänderte rechtliche Rahmenbedingungen oder an Änderungen unserer Dienstleistungen anzupassen. Die jeweils aktuelle Fassung ist auf unserer Website veröffentlicht. Bei wesentlichen Änderungen informieren wir betroffene Personen zusätzlich in geeigneter Form, z. B. per E-Mail oder durch einen deutlichen Hinweis auf der Website.",
    ],
  },
];

function renderSectionTitle(title: string) {
  if (title === "5. Informationspflichten nach Art. 13 und Art. 14 DSGVO") {
    return (
      <>
        <span className="sm:hidden">
          5. Informations-
          <br />
          pflichten nach Art. 13 und Art. 14 DSGVO
        </span>
        <span className="hidden sm:inline">{title}</span>
      </>
    );
  }

  if (title === "15. Änderungen dieser Datenschutzerklärung") {
    return (
      <>
        <span className="sm:hidden">
          15. Änderungen dieser Datenschutz-
          <br />
          erklärung
        </span>
        <span className="hidden sm:inline">{title}</span>
      </>
    );
  }

  return title;
}

export default function DatenschutzPage() {
  return (
    <>
      <Seo
        title="Datenschutzerklärung – ScaleZ GmbH"
        description="Wie ScaleZ Personendaten nach revDSG und DSGVO bearbeitet: Datenkategorien, Zwecke, Rechtsgrundlagen, Empfänger und Ihre Rechte."
        path="/datenschutz"
      />
      <section className="pt-32 pb-14">
        <div className="container max-w-5xl">
          <motion.div
            {...fadeUp}
            className="mb-8 inline-block border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"
          >
            Rechtliches
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl tracking-tighter sm:text-6xl md:text-7xl"
          >
            <span className="sm:hidden">
              Datenschutz-
              <br />
              erklärung
            </span>
            <span className="hidden sm:inline">Datenschutzerklärung</span>
          </motion.h1>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2 text-lg font-light leading-relaxed text-muted-foreground"
          >
            {headerLines.map((line) => (
              <p key={line}>
                {line === "E-Mail: info@scale-z.ch · Telefon: +41 79 704 60 00" ? (
                  <>
                    <span className="sm:hidden">
                      E-Mail:{" "}
                      <a href="mailto:info@scale-z.ch" className="underline underline-offset-4">
                        info@scale-z.ch
                      </a>
                      <br />
                      Telefon:{" "}
                      <a href="tel:+41797046000" className="underline underline-offset-4">
                        +41 79 704 60 00
                      </a>
                    </span>
                    <span className="hidden sm:inline">
                      E-Mail:{" "}
                      <a href="mailto:info@scale-z.ch" className="underline underline-offset-4">
                        info@scale-z.ch
                      </a>{" "}
                      · Telefon:{" "}
                      <a href="tel:+41797046000" className="underline underline-offset-4">
                        +41 79 704 60 00
                      </a>
                    </span>
                  </>
                ) : (
                  line
                )}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-10">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                className="border border-border bg-background p-6 md:p-10"
              >
                <h2 className="mb-6 text-2xl tracking-tight md:text-3xl">
                  {renderSectionTitle(section.title)}
                </h2>
                <div className="space-y-4">
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
      </section>
    </>
  );
}
