// Link zum Bewerbungsformular auf /kandidaten mit vorbefülltem Feld
// «Wunschposition / Branche». Das Suffix "(m/w/d)" gehört nicht in die
// Wunschposition und wird entfernt.
export function applyHref(title: string): string {
  return `/kandidaten?position=${encodeURIComponent(title.replace(/\s*\(m\/w\/d\)\s*$/i, ""))}#bewerbung`;
}
