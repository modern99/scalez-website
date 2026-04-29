import { Link } from "react-router-dom";

type Props = {
  retention: string;
};

export default function PrivacyNotice({ retention }: Props) {
  return (
    <div className="rounded-sm border border-border bg-muted/30 p-3 text-[11px] leading-relaxed text-muted-foreground">
      <strong className="text-foreground">Datenschutz-Kurzinfo:</strong> Verantwortlich ist die
      ScaleZ GmbH, Eggbühlstrasse 24, 8050 Zürich. Wir verarbeiten deine Angaben zur Bearbeitung
      deiner Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO sowie Art. 31 revDSG, bei
      Bewerbungsunterlagen zusätzlich auf Grundlage deiner Einwilligung. Empfänger sind Brevo
      (E-Mail-Versand, EU), Cloudflare (Hosting, DPF) und Microsoft 365 (E-Mail-Empfang).
      Speicherdauer: {retention}. Deine Rechte (Auskunft, Berichtigung, Löschung, Widerruf) und
      weitere Details findest du in der{" "}
      <Link to="/datenschutz" className="font-medium text-accent hover:underline">
        Datenschutzerklärung
      </Link>
      .
    </div>
  );
}
