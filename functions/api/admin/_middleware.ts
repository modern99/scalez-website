// Auth-Gate für alle /api/admin/*-Routen: prüft das Session-Cookie,
// bevor die eigentliche Function läuft. Nur /api/admin/login ist offen.
import { SESSION_COOKIE, parseCookies, verifySessionToken } from "../../../src/lib/adminAuth";

interface Env {
  ADMIN_SESSION_SECRET?: string;
  PUBLIC_SITE_URL?: string;
}

const ALLOWED_ORIGIN_HOSTNAMES = new Set([
  "www.scale-z.ch",
  "scale-z.ch",
  "scalez-demo.pages.dev",
]);

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
    },
  });
}

function isAllowedOrigin(request: Request, env: Env) {
  const origin = request.headers.get("Origin");
  const secFetchSite = request.headers.get("Sec-Fetch-Site");

  if (!origin) {
    return false;
  }

  if (secFetchSite && secFetchSite !== "same-origin") {
    return false;
  }

  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    const allowedHosts = new Set(ALLOWED_ORIGIN_HOSTNAMES);

    allowedHosts.add(requestUrl.hostname);

    if (env.PUBLIC_SITE_URL) {
      allowedHosts.add(new URL(env.PUBLIC_SITE_URL).hostname);
    }

    return allowedHosts.has(originUrl.hostname);
  } catch {
    return false;
  }
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method === "POST" && !isAllowedOrigin(request, env)) {
    return jsonResponse({ error: "Ungültige Anfragequelle." }, 403);
  }

  if (url.pathname === "/api/admin/login") {
    return context.next();
  }

  if (!env.ADMIN_SESSION_SECRET) {
    return jsonResponse({ error: "Admin-Bereich ist nicht konfiguriert (ADMIN_SESSION_SECRET fehlt)." }, 500);
  }

  const token = parseCookies(request.headers.get("Cookie"))[SESSION_COOKIE];
  const valid = token ? await verifySessionToken(token, env.ADMIN_SESSION_SECRET) : false;

  if (!valid) {
    return jsonResponse({ error: "Nicht angemeldet." }, 401);
  }

  return context.next();
};
