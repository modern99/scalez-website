import { lazy, type ComponentType } from "react";

const RELOAD_FLAG = "chunk-reload-attempted";

/**
 * Drop-in Ersatz für React.lazy, der veraltete Deploys übersteht.
 *
 * Nach einem neuen Deploy kann ein Gerät noch eine alte, gecachte index.html
 * halten, die auf JS-Chunks verweist, die es auf dem Server nicht mehr gibt
 * (die Dateinamen enthalten einen Content-Hash und ändern sich bei jedem
 * Build). Der dynamische Import scheitert dann mit einem 404 und die Seite
 * landet in der ErrorBoundary ("Etwas ist schiefgelaufen").
 *
 * Hier fangen wir genau diesen Fehl-Import ab und erzwingen EINMAL ein
 * vollständiges Neuladen. Weil index.html mit `Cache-Control: no-cache`
 * ausgeliefert wird (siehe public/_headers), holt der Browser dabei die
 * aktuelle index.html mit den korrekten Chunk-Namen – der Fehler heilt sich
 * selbst, ohne dass der Nutzer etwas merkt.
 *
 * Ein Flag in sessionStorage verhindert eine Endlosschleife: Schlägt der
 * Import auch nach dem Reload noch fehl (also kein Deploy-Problem, sondern ein
 * echter Fehler), wird die Exception normal an die ErrorBoundary weitergereicht.
 */
export function lazyWithRetry<T extends ComponentType<never>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      const component = await factory();
      // Erfolgreich geladen → Guard zurücksetzen, damit ein künftiger
      // veralteter Deploy erneut einen Reload auslösen darf.
      window.sessionStorage.removeItem(RELOAD_FLAG);
      return component;
    } catch (error) {
      const alreadyReloaded = window.sessionStorage.getItem(RELOAD_FLAG);
      if (!alreadyReloaded) {
        window.sessionStorage.setItem(RELOAD_FLAG, "1");
        window.location.reload();
        // Nie auflösendes Promise: React zeigt weiter den Suspense-Fallback,
        // während die Seite neu lädt.
        return new Promise<{ default: T }>(() => {});
      }
      // Bereits einmal neu geladen und weiterhin fehlerhaft → echter Fehler.
      throw error;
    }
  });
}
