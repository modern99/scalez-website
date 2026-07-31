// Server-seitige Auth-Helfer für den Admin-Bereich (functions/api/admin/*).
// Nur Web-Crypto und Standard-APIs — läuft in Cloudflare Workers und Node >= 18.
//
// ADMIN_PASSWORD_HASH-Format: "<salt>:<hex(sha256("<salt>:<passwort>"))>"
// Generieren mit:
//   node -e "const c=require('crypto');const s=c.randomBytes(16).toString('hex');console.log(s+':'+c.createHash('sha256').update(s+':'+process.argv[1]).digest('hex'))" "DEIN-PASSWORT"

const encoder = new TextEncoder();

export const SESSION_COOKIE = "scalez_admin";
// Absolute Session-Dauer; die 15-Min.-Inaktivitätsabmeldung übernimmt der Client (admin.js).
export const SESSION_TTL_SECONDS = 60 * 60;

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function toBase64Url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Längen-unabhängiger Vergleich, damit Timing nichts über den Inhalt verrät.
function timingSafeEqual(a: string, b: string): boolean {
  const max = Math.max(a.length, b.length);
  let diff = a.length === b.length ? 0 : 1;
  for (let i = 0; i < max; i += 1) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

export async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(input));
  return toHex(new Uint8Array(digest));
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const sep = stored.indexOf(":");
  if (sep <= 0) return false;
  const salt = stored.slice(0, sep);
  const expected = stored.slice(sep + 1).trim().toLowerCase();
  const actual = await sha256Hex(`${salt}:${password}`);
  return timingSafeEqual(actual, expected);
}

async function hmacSign(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return toBase64Url(new Uint8Array(signature));
}

export async function createSessionToken(secret: string, now = Date.now()): Promise<string> {
  const exp = String(now + SESSION_TTL_SECONDS * 1000);
  const signature = await hmacSign(`admin:${exp}`, secret);
  return `${exp}.${signature}`;
}

export async function verifySessionToken(token: string, secret: string, now = Date.now()): Promise<boolean> {
  const dot = token.indexOf(".");
  if (dot <= 0) return false;
  const exp = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  if (!/^\d{1,16}$/.test(exp) || Number(exp) < now) return false;
  const expected = await hmacSign(`admin:${exp}`, secret);
  return timingSafeEqual(signature, expected);
}

export function parseCookies(header: string | null): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!header) return cookies;
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    cookies[part.slice(0, eq).trim()] = part.slice(eq + 1).trim();
  }
  return cookies;
}

export function sessionCookie(token: string): string {
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly; Secure; SameSite=Strict`;
}

export function clearSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`;
}
