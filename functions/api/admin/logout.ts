// POST /api/admin/logout — löscht das Session-Cookie.
import { clearSessionCookie } from "../../../src/lib/adminAuth";

export const onRequestPost: PagesFunction = async () => {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
      "set-cookie": clearSessionCookie(),
    },
  });
};
