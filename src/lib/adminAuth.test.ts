import { describe, expect, it } from "vitest";
import {
  clearSessionCookie,
  createSessionToken,
  parseCookies,
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  sessionCookie,
  sha256Hex,
  verifyPassword,
  verifySessionToken,
} from "./adminAuth";

describe("verifyPassword", () => {
  it("akzeptiert das korrekte Passwort (salt:hash-Format)", async () => {
    const salt = "abc123";
    const hash = await sha256Hex(`${salt}:geheim`);
    expect(await verifyPassword("geheim", `${salt}:${hash}`)).toBe(true);
  });

  it("lehnt falsche Passwörter und kaputte Hash-Formate ab", async () => {
    const salt = "abc123";
    const hash = await sha256Hex(`${salt}:geheim`);
    expect(await verifyPassword("falsch", `${salt}:${hash}`)).toBe(false);
    expect(await verifyPassword("geheim", "ohne-doppelpunkt")).toBe(false);
    expect(await verifyPassword("geheim", "")).toBe(false);
  });
});

describe("Session-Token", () => {
  const secret = "test-secret";

  it("signiert und verifiziert", async () => {
    const token = await createSessionToken(secret);
    expect(await verifySessionToken(token, secret)).toBe(true);
  });

  it("lehnt abgelaufene Tokens ab", async () => {
    const past = Date.now() - (SESSION_TTL_SECONDS + 10) * 1000;
    const token = await createSessionToken(secret, past);
    expect(await verifySessionToken(token, secret)).toBe(false);
  });

  it("lehnt manipulierte Tokens und fremde Secrets ab", async () => {
    const token = await createSessionToken(secret);
    const [exp, sig] = token.split(".");
    expect(await verifySessionToken(`${Number(exp) + 9999999}.${sig}`, secret)).toBe(false);
    expect(await verifySessionToken(token, "anderes-secret")).toBe(false);
    expect(await verifySessionToken("unsinn", secret)).toBe(false);
  });
});

describe("Cookies", () => {
  it("parst Cookie-Header", () => {
    const cookies = parseCookies(`foo=bar; ${SESSION_COOKIE}=123.abc; x=1`);
    expect(cookies[SESSION_COOKIE]).toBe("123.abc");
    expect(parseCookies(null)).toEqual({});
  });

  it("setzt HttpOnly/Secure/SameSite-Attribute", () => {
    const cookie = sessionCookie("tok");
    expect(cookie).toContain(`${SESSION_COOKIE}=tok`);
    expect(cookie).toContain("HttpOnly");
    expect(cookie).toContain("Secure");
    expect(cookie).toContain("SameSite=Strict");
    expect(clearSessionCookie()).toContain("Max-Age=0");
  });
});
