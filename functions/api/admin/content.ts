// GET /api/admin/content — liefert alle Jobs und Blogartikel für die
// Admin-Liste. Die Daten stammen aus dem Build (src/data/content.ts wird
// beim Deploy eingebunden); direkt nach einem Publish zeigt die Liste den
// neuen Stand deshalb erst nach Abschluss des Cloudflare-Builds.
import { blogPosts, jobPostings } from "../../../src/data/content";

export const onRequestGet: PagesFunction = async () => {
  return new Response(JSON.stringify({ ok: true, jobs: jobPostings, blogs: blogPosts }), {
    status: 200,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
    },
  });
};
