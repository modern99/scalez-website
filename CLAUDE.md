# ScaleZ Website – CLAUDE.md

## Projektübersicht

ScaleZ ist eine deutschsprachige Recruiting-Website für den Schweizer Markt. Sie richtet sich an Unternehmen (Auftraggeber) und Kandidaten (Bewerber). Sprache ist durchgängig Deutsch (de-CH), Währung CHF.

**Domain:** scale-z.ch  
**Deployment:** Cloudflare Pages (statisch + serverless functions)  
**Build:** `npm run build` → Ausgabe nach `dist/`  
**Dev-Server:** `npm run dev` → läuft auf Port 8080

---

## Tech Stack

| Bereich | Technologie |
|--------|------------|
| Framework | React 18 + TypeScript (strict) |
| Build | Vite 5 (SWC) |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS 3 mit HSL CSS-Variablen |
| Komponenten | shadcn/ui (Radix UI) |
| Animationen | Framer Motion 12 |
| Formulare | React Hook Form + Zod |
| SEO | React Helmet Async |
| E-Mail | Brevo API (via Cloudflare Function) |
| Bot-Schutz | Cloudflare Turnstile |
| Tests | Vitest |

---

## Projektstruktur

```
src/
  App.tsx              → Router-Setup, alle Routen, Provider
  main.tsx             → Einstiegspunkt
  index.css            → Tailwind-Direktiven, CSS-Variablen, Custom Utilities
  print.css            → A4-Druckstile (Landscape, 14mm Rand)
  pages/               → Eine Datei pro Route
  components/          → Layout + Feature-Komponenten
  components/ui/       → shadcn/ui Basiskomponenten
  data/
    content.ts         → EINZIGE Datei für alle Inhalte (Jobs + Blog)
functions/
  api/contact.ts       → Cloudflare Function: Formular-Handler (Brevo, Turnstile)
public/                → Statische Assets (Logos, Favicons, OG-Image, SEO-Dateien)
```

---

## Routen

| URL | Seite | Beschreibung |
|-----|-------|--------------|
| `/` | HomePage | Landing Page mit Services, Expertise, Stats |
| `/unternehmen` | UnternehmenPage | Für Auftraggeber: Formular + Prozessschritte |
| `/kandidaten` | KandidatenPage | Für Bewerber: Bewerbungsformular + Benefits |
| `/ueber-uns` | UeberUnsPage | Über ScaleZ |
| `/kontakt` | KontaktPage | Kontaktformular |
| `/jobs` | JobsPage | Stellenanzeigen-Übersicht |
| `/blog` | BlogPage | Blog-Übersicht |
| `/blog/:slug` | BlogArticlePage | Einzelner Blogartikel |
| `/impressum` | ImpressumPage | Impressum |
| `/datenschutz` | DatenschutzPage | Datenschutzerklärung |

Alle Seiten außer HomePage sind lazy-loaded (`React.lazy` + `Suspense`).

---

## Inhalte verwalten (Jobs & Blog)

**Alle Inhalte leben in einer einzigen Datei: `src/data/content.ts`**

Die Vorlagen sind als Kommentare am Ende dieser Datei hinterlegt. Neue Einträge werden in die jeweiligen Arrays eingefügt:
- `jobPostings: JobPosting[]` → Stellenanzeigen
- `blogPosts: BlogPost[]` → Blogartikel

### Neue Stellenanzeige hinzufügen

Trigger: *"neue Stelle", "neue Anzeige", "Job hinzufügen"*

1. Lies `src/data/content.ts`
2. Kopiere das JOB-TEMPLATE (Kommentar am Dateiende) in `jobPostings`
3. Fülle alle Felder aus:
   - `slug` → URL-Slug, nur lowercase + Bindestriche (z.B. `"cfo-zuerich"`)
   - `title` → Jobtitel mit `(m/w/d)`
   - `region` → z.B. `"Kanton Zürich"` / `"Schweizweit"`
   - `employmentType` → z.B. `"Festanstellung, 100%"`
   - `focus` → Branche · Ort, z.B. `"Finanz · Zürich"`
   - `teaser` → 1–2 Sätze für die Übersichtsseite
   - `compensation` → z.B. `"CHF 120'000 – 150'000 / Jahr"` oder `"Nach Vereinbarung"`
   - `startDate` → z.B. `"Ab sofort"` / `"Q3 2026"`
   - `tasks` → 3–5 Aufgaben als String-Array
   - `requirements` → 3–5 Anforderungen als String-Array
   - `note` → Standard: `"Diskrete Besetzung · Alle Angaben vertraulich"`
4. Fehlende Angaben beim Nutzer erfragen, bevor du schreibst

### Neuen Blogartikel hinzufügen

Trigger: *"neuer Artikel", "Blog schreiben", "Artikel hinzufügen"*

1. Lies `src/data/content.ts`
2. Kopiere das BLOG-TEMPLATE (Kommentar am Dateiende) in `blogPosts`
3. Fülle alle Felder aus:
   - `slug` → URL-Slug (z.B. `"wie-ein-gutes-briefing-aussieht"`)
   - `title` → Artikeltitel
   - `category` → `"Direct Search"` / `"Prozess"` / `"Markt"`
   - `readTime` → z.B. `"5 Min."`
   - `publishedAt` → z.B. `"16. Mai 2026"`
   - `teaser` → 1–2 Sätze für die Übersichtsseite
   - `intro` → Einleitungsabsatz (kein Titel, 1–3 Sätze)
   - `sections` → Array von Abschnitten; je Abschnitt: `id` (Anker-ID), `title` (Zwischentitel), `paragraphs` (1–3 Absätze)
4. Fehlende Angaben beim Nutzer erfragen, bevor du schreibst. 

### Eintrag bearbeiten

Trigger: *"ändere", "update", "bearbeite"* + Titel oder Slug

1. Lies `src/data/content.ts`
2. Finde den Eintrag anhand von Titel oder Slug
3. Ändere nur die genannten Felder

### Eintrag löschen

Den entsprechenden Objekt-Block aus dem Array entfernen.

---

## Styling-Konventionen

- **Farben:** Ausschließlich über CSS-Variablen (`--accent`, `--primary`, `--background` etc.), nie Hardcoded-Hex
  - Akzentfarbe: Orange `#FF4D05` → `hsl(var(--accent))`
  - Primärfarbe: Dunkelgrau → `hsl(var(--primary))`
- **Border-Radius:** 0 (kein Rounding, `--radius: 0rem`)
- **Typografie:** Uppercase Headings, enges Letter-Spacing, Helvetica Neue
- **Dark Mode:** CSS-Klasse `.dark` auf `document.documentElement`; immer beide Modi testen
- **Animationen:** Framer Motion, `{ opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }`, `viewport: { once: true }`
- **Custom Utilities:** `.exp-card`, `.svc-card`, `.marquee-track` in `src/index.css`

---

## Formular-System

Drei Formular-Typen, alle über `functions/api/contact.ts` (Cloudflare Function):

| Typ | Verwendet auf | Besonderheit |
|-----|--------------|--------------|
| `contact` | /kontakt | Allgemeine Anfrage |
| `company` | /unternehmen | Auftraggeber-Formular |
| `candidate` | /kandidaten | Datei-Upload (PDF/DOC/DOCX/TXT/RTF, max. 10 MB total, 5 Dateien) |

Alle Formulare: Turnstile-Bot-Schutz (optional), Zod-Validierung, Datenschutz-Checkbox Pflicht.

---

## SEO & Meta

- `src/components/Seo.tsx` → `<Helmet>` mit dynamischen Meta-Tags pro Seite
- Strukturierte Daten (JSON-LD) für EmploymentAgency in `index.html`
- OG-Image: `public/og-image.png` (1200×630)
- `public/sitemap.xml` und `public/robots.txt` manuell gepflegt
- Wenn neue Seiten/Routen hinzukommen: `sitemap.xml` aktualisieren

---

## Environment Variables

**Frontend (`.env`, Präfix `VITE_`):**
- `VITE_GA_MEASUREMENT_ID` → Google Analytics 4 ID
- `VITE_TURNSTILE_SITE_KEY` → Cloudflare Turnstile (öffentlich)

**Cloudflare Functions (nur serverseitig, kein VITE-Präfix):**
- `BREVO_API_KEY` → E-Mail-Versand
- `CONTACT_RECIPIENT_EMAIL` → Empfänger-Adresse
- `CONTACT_SENDER_EMAIL` → Absender-Adresse
- `CONTACT_SENDER_NAME` → Absendername (Standard: "ScaleZ")
- `TURNSTILE_SECRET_KEY` → Turnstile-Verifikation
- `PUBLIC_SITE_URL` → Basis-URL

---

## Deployment

- **Hosting:** Cloudflare Pages
- **Build-Befehl:** `npm run build`
- **Output-Verzeichnis:** `dist/`
- **Cloudflare-Konfig:** `public/_headers` und `public/_redirects`
- Kein manuelles Deployment nötig — Push auf `main` triggert automatisch den Build

**Nach Inhaltsänderungen (nur `src/data/content.ts`) committen und pushen:**
```bash
git add src/data/content.ts
git commit -m "content: [kurze Beschreibung]"
git push
```

---

## Wichtige Muster & Konventionen

- **Path-Alias:** `@/` → `src/` (z.B. `import { Button } from "@/components/ui/button"`)
- **Komponenten:** PascalCase, eine Komponente pro Datei
- **Slugs:** kebab-case, nur lowercase und Bindestriche
- **Keine Index-Exporte:** Direkte Importe aus Dateipfaden
- **Neue shadcn/ui-Komponenten:** `npx shadcn@latest add <komponente>`
- **TypeScript:** Strict Mode aktiv — keine `any`, keine ungenutzten Variablen

---

## Graphify

Mit `/graphify` lässt sich eine interaktive Wissenskarte des gesamten Projekts erstellen (Code, Komponenten, Abhängigkeiten als Netzwerkgraph). Nützlich für Überblick bei größeren Refactorings oder Onboarding.
