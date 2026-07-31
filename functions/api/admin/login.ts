// POST /api/admin/login — prüft Turnstile (falls konfiguriert) und das
// Admin-Passwort, setzt bei Erfolg das Session-Cookie.
import { createSessionToken, sessionCookie, verifyPassword } from "../../../src/lib/adminAuth";

interface Env {
  ADMIN_PASSWORD_HASH?: string;
  ADMIN_SESSION_SECRET?: string;
  TURNSTILE_SECRET_KEY?: string;
}

function jsonResponse(body: unknown, status: number, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
      ...extraHeaders,
    },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ADMIN_PASSWORD_HASH || !env.ADMIN_SESSION_SECRET) {
    return jsonResponse(
      { error: "Admin-Login ist nicht konfiguriert (ADMIN_PASSWORD_HASH / ADMIN_SESSION_SECRET fehlen)." },
      500,
    );
  }

  let body: { password?: unknown; turnstileToken?: unknown };
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Ungültige Anfrage." }, 400);
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const token = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
    const turnstileValid = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request);
    if (!turnstileValid) {
      return jsonResponse(
        { error: "Sicherheitsprüfung fehlgeschlagen. Bitte Seite neu laden und erneut versuchen." },
        403,
      );
    }
  }

  const password = typeof body.password === "string" ? body.password : "";
  const passwordValid =
    password.length > 0 &&
    password.length <= 200 &&
    (await verifyPassword(password, env.ADMIN_PASSWORD_HASH));

  if (!passwordValid) {
    // Fehlversuche künstlich verlangsamen (Brute-Force-Bremse)
    await new Promise((resolve) => setTimeout(resolve, 800));
    return jsonResponse({ error: "Falsches Passwort." }, 401);
  }

  const token = await createSessionToken(env.ADMIN_SESSION_SECRET);
  return jsonResponse({ ok: true }, 200, { "set-cookie": sessionCookie(token) });
};

async function verifyTurnstile(token: string, secretKey: string, request: Request): Promise<boolean> {
  if (!token) {
    return false;
  }

  const ip = request.headers.get("CF-Connecting-IP") ?? undefined;
  const body: Record<string, string> = { secret: secretKey, response: token };

  if (ip) {
    body.remoteip = ip;
  }

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body).toString(),
    });

    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
