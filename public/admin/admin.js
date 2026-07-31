"use strict";
/* ScaleZ Admin — Login, Listen (Jobs/Blog) und Formulare.
   Alle Schreibzugriffe laufen über /api/admin/publish (Cloudflare Function),
   der GitHub-Token bleibt serverseitig. */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ---------- Helpers ---------- */

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MONTHS_DE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\(m\/w\/d\)/g, "")
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[àáâ]/g, "a").replace(/[èéêë]/g, "e").replace(/[ìíî]/g, "i")
    .replace(/[òóô]/g, "o").replace(/[ùúû]/g, "u").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
function todayIso() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function fmtChf(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}
function splitParagraphs(text) {
  return text.split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, " ").trim()).filter(Boolean);
}
function listValues(containerId) {
  return $$("#" + containerId + " input").map((i) => i.value.trim()).filter(Boolean);
}
function formatIsoDe(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
  if (!m) return iso || "";
  return Number(m[3]) + ". " + MONTHS_DE[Number(m[2]) - 1] + " " + m[1];
}
function parseGermanDate(s) {
  const m = /^(\d{1,2})\.\s*([A-Za-zäöüÄÖÜ]+)\s+(\d{4})$/.exec((s || "").trim());
  if (!m) return "";
  const month = MONTHS_DE.findIndex((name) => name.toLowerCase() === m[2].toLowerCase());
  if (month === -1) return "";
  return m[3] + "-" + String(month + 1).padStart(2, "0") + "-" + String(m[1]).padStart(2, "0");
}
function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* Spiegelt src/lib/jobPostingSchema.ts — für den Google-Jobs-Check */
function parseEmploymentTypes(employmentType) {
  const types = [];
  const range = employmentType.match(/(\d{1,3})\s*[–—-]\s*(\d{1,3})\s*%/);
  const single = range ? null : employmentType.match(/(\d{1,3})\s*%/);
  if (range) {
    const min = Number(range[1]);
    const max = Number(range[2]);
    if (max >= 100) types.push("FULL_TIME");
    if (min < 100) types.push("PART_TIME");
  } else if (single) {
    types.push(Number(single[1]) >= 100 ? "FULL_TIME" : "PART_TIME");
  }
  if (/temporär|befristet/i.test(employmentType)) types.push("TEMPORARY");
  if (/praktikum/i.test(employmentType)) types.push("INTERN");
  return types.length > 0 ? types : undefined;
}
function parseBaseSalary(compensation) {
  if (!/^\s*CHF/i.test(compensation)) return undefined;
  const toNumber = (raw) => Number(raw.replace(/['’]/g, ""));
  const range = compensation.match(/CHF\s*([\d'’]+)\s*[–—-]\s*(?:CHF\s*)?([\d'’]+)/i);
  const single = range ? null : compensation.match(/CHF\s*([\d'’]+)/i);
  let value;
  if (range) value = { minValue: toNumber(range[1]), maxValue: toNumber(range[2]) };
  else if (single) value = { value: toNumber(single[1]) };
  if (!value) return undefined;
  let unitText;
  if (/\/\s*Jahr/i.test(compensation)) unitText = "YEAR";
  else if (/\/\s*Monat/i.test(compensation)) unitText = "MONTH";
  else if (/\/\s*Woche/i.test(compensation)) unitText = "WEEK";
  else if (/\/\s*Tag/i.test(compensation)) unitText = "DAY";
  else if (/\/\s*Stunde/i.test(compensation)) unitText = "HOUR";
  if (!unitText) {
    const smallest = value.minValue ?? value.value ?? 0;
    if (smallest < 12000) return undefined;
    unitText = "YEAR";
  }
  return Object.assign({}, value, { unitText });
}

/* Rückwärts-Parser für den Bearbeiten-Modus */
function parseEmploymentTypeString(s) {
  const m = /^(Festanstellung|Temporär|Praktikum),\s*(\d{1,3})(?:\s*[–—-]\s*(\d{1,3}))?\s*%$/.exec((s || "").trim());
  if (!m) return null;
  return { type: m[1], min: m[2], max: m[3] || "" };
}
function parseCompensationString(s) {
  const trimmed = (s || "").trim();
  if (/^nach vereinbarung$/i.test(trimmed)) return { mode: "verhandlung" };
  const m = /^CHF\s*([\d'’]+)(?:\s*[–—-]\s*(?:CHF\s*)?([\d'’]+))?\s*\/\s*(Jahr|Monat|Woche|Tag|Stunde)\s*(.*)$/.exec(trimmed);
  if (!m) return null;
  const num = (raw) => raw.replace(/['’]/g, "");
  if (m[2]) return { mode: "range", min: num(m[1]), max: num(m[2]), unit: m[3], suffix: m[4].trim() };
  return { mode: "fix", min: num(m[1]), unit: m[3], suffix: m[4].trim() };
}

/* ---------- API ---------- */

async function api(path, options = {}) {
  const res = await fetch(path, {
    method: options.method || "GET",
    headers: options.body ? { "content-type": "application/json" } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  let data = {};
  try { data = await res.json(); } catch (e) { /* leere Antwort */ }
  if (!res.ok) {
    const err = new Error(data.error || "Fehler " + res.status);
    err.status = res.status;
    throw err;
  }
  return data;
}

/* ---------- State & Views ---------- */

const state = {
  jobs: [],
  blogs: [],
  editing: { job: null, blog: null }, // Original-Slug im Bearbeiten-Modus, sonst null
  saving: false,
};

function showLogin(message) {
  $("#view-app").hidden = true;
  $("#view-login").hidden = false;
  const status = $("#login-status");
  status.className = "pub-status" + (message ? " err" : "");
  status.textContent = message || "";
  initTurnstile();
  $("#login-password").focus();
}

function showApp() {
  $("#view-login").hidden = true;
  $("#view-app").hidden = false;
  renderLists();
  // Formular-/Listenansicht bewusst nicht zurücksetzen: nach einer
  // Neuanmeldung (Session abgelaufen / Auto-Logout) bleibt ein offener
  // Entwurf erhalten.
  lastActivity = Date.now();
}

function showListView(kind) {
  $(kind === "job" ? "#j-list-view" : "#b-list-view").hidden = false;
  $(kind === "job" ? "#j-form-view" : "#b-form-view").hidden = true;
}

function showFormView(kind) {
  $(kind === "job" ? "#j-list-view" : "#b-list-view").hidden = true;
  $(kind === "job" ? "#j-form-view" : "#b-form-view").hidden = false;
  window.scrollTo({ top: 0 });
}

function setBanner(cls, html) {
  const banner = $("#banner");
  banner.hidden = false;
  banner.className = "banner" + (cls === "err" ? " err" : "");
  $("#banner-text").innerHTML = html;
}
$("#banner-close").addEventListener("click", () => { $("#banner").hidden = true; });

/* ---------- Turnstile ---------- */

const sitekey = document.body.dataset.sitekey || "";
const hasTurnstile = sitekey && !sitekey.startsWith("__");
let turnstileWidget = null;

function initTurnstile() {
  if (!hasTurnstile || turnstileWidget !== null) return;
  window.__tsOnload = () => {
    turnstileWidget = window.turnstile.render("#turnstile-slot", { sitekey, theme: "dark" });
  };
  if (window.turnstile) {
    window.__tsOnload();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__tsOnload&render=explicit";
  script.async = true;
  document.head.appendChild(script);
}

/* ---------- Login / Logout ---------- */

$("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const btn = $("#login-submit");
  const status = $("#login-status");
  const turnstileToken = hasTurnstile && window.turnstile && turnstileWidget !== null
    ? window.turnstile.getResponse(turnstileWidget)
    : "";
  btn.disabled = true;
  status.className = "pub-status";
  status.textContent = "Anmelden …";
  try {
    await api("/api/admin/login", { method: "POST", body: { password: $("#login-password").value, turnstileToken } });
    $("#login-password").value = "";
    status.textContent = "";
    const data = await api("/api/admin/content");
    state.jobs = data.jobs || [];
    state.blogs = data.blogs || [];
    showApp();
  } catch (e) {
    status.className = "pub-status err";
    status.textContent = e.message;
    if (hasTurnstile && window.turnstile && turnstileWidget !== null) {
      window.turnstile.reset(turnstileWidget);
    }
  } finally {
    btn.disabled = false;
  }
});

$("#logout").addEventListener("click", async () => {
  try { await api("/api/admin/logout", { method: "POST", body: {} }); } catch (e) { /* Cookie läuft ohnehin ab */ }
  showLogin("");
});

/* ---------- Listen ---------- */

function renderLists() {
  const jList = $("#j-list");
  const today = todayIso();
  $("#j-count").textContent = state.jobs.length + " Stelle(n)";
  jList.innerHTML = state.jobs.length
    ? state.jobs.map((job) => {
        const expired = job.validThrough && job.validThrough < today;
        return (
          "<li>" +
          '<div class="entry-main">' +
          '<p class="entry-title">' + escHtml(job.title) + (expired ? '<span class="chip">abgelaufen</span>' : "") + "</p>" +
          '<span class="entry-slug">/jobs/' + escHtml(job.slug) + "</span>" +
          '<p class="entry-meta">' + escHtml(job.focus || "") + " · " + escHtml(job.region || "") + " · publiziert " + escHtml(formatIsoDe(job.datePosted)) + "</p>" +
          "</div>" +
          '<div class="entry-actions">' +
          '<button type="button" class="btn-ghost small" data-edit-job="' + escHtml(job.slug) + '">Bearbeiten</button>' +
          '<button type="button" class="btn-ghost small danger" data-delete-job="' + escHtml(job.slug) + '">Löschen</button>' +
          "</div></li>"
        );
      }).join("")
    : '<li class="empty-note" style="display:block;border:1px dashed var(--border);background:none;">Keine aktiven Stellen.</li>';

  const bList = $("#b-list");
  $("#b-count").textContent = state.blogs.length + " Artikel";
  bList.innerHTML = state.blogs.length
    ? state.blogs.map((post) => (
        "<li>" +
        '<div class="entry-main">' +
        '<p class="entry-title">' + escHtml(post.title) + "</p>" +
        '<span class="entry-slug">/blog/' + escHtml(post.slug) + "</span>" +
        '<p class="entry-meta">' + escHtml(post.category || "") + " · " + escHtml(post.publishedAt || "") + " · " + escHtml(post.readTime || "") + "</p>" +
        "</div>" +
        '<div class="entry-actions">' +
        '<button type="button" class="btn-ghost small" data-edit-blog="' + escHtml(post.slug) + '">Bearbeiten</button>' +
        '<button type="button" class="btn-ghost small danger" data-delete-blog="' + escHtml(post.slug) + '">Löschen</button>' +
        "</div></li>"
      )).join("")
    : '<li class="empty-note" style="display:block;border:1px dashed var(--border);background:none;">Keine Artikel.</li>';
}

document.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  if (btn.dataset.editJob) startEditJob(btn.dataset.editJob);
  else if (btn.dataset.deleteJob) deleteContent("job", btn.dataset.deleteJob);
  else if (btn.dataset.editBlog) startEditBlog(btn.dataset.editBlog);
  else if (btn.dataset.deleteBlog) deleteContent("blog", btn.dataset.deleteBlog);
});

/* ---------- Dynamische Listen-Inputs ---------- */

function addListItem(containerId, value) {
  const wrap = document.createElement("div");
  wrap.className = "list-item";
  wrap.innerHTML =
    '<input type="text" value="" aria-label="Listeneintrag" />' +
    '<button type="button" class="icon-btn" aria-label="Eintrag entfernen">' +
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>';
  wrap.querySelector("input").value = value || "";
  wrap.querySelector("button").addEventListener("click", () => {
    wrap.remove();
    update();
  });
  $("#" + containerId).appendChild(wrap);
}
$$("button[data-add]").forEach((btn) =>
  btn.addEventListener("click", () => {
    addListItem(btn.dataset.add);
    update();
  })
);
function fillList(containerId, values, minEmpty) {
  $("#" + containerId).innerHTML = "";
  const items = values && values.length ? values : [];
  items.forEach((value) => addListItem(containerId, value));
  for (let i = items.length; i < (minEmpty || 0); i += 1) addListItem(containerId);
}

/* ---------- Blog-Abschnitte ---------- */

let sectionCounter = 0;
function addSection(section) {
  sectionCounter += 1;
  const card = document.createElement("div");
  card.className = "section-card";
  card.innerHTML =
    '<div class="sec-head"><span>Abschnitt</span>' +
    '<button type="button" class="icon-btn" aria-label="Abschnitt entfernen">' +
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button></div>' +
    '<div class="row"><label class="field-label" for="sec-title-' + sectionCounter + '">Zwischentitel <span class="req">*</span></label>' +
    '<input type="text" id="sec-title-' + sectionCounter + '" class="sec-title" placeholder="Das Briefing entscheidet" />' +
    '<p class="sec-id">Anker-ID: <b>—</b></p></div>' +
    '<div class="row"><label class="field-label" for="sec-text-' + sectionCounter + '">Absätze (1–3) — durch Leerzeile trennen <span class="req">*</span></label>' +
    '<textarea id="sec-text-' + sectionCounter + '" class="sec-text" rows="5" placeholder="Erster Absatz …&#10;&#10;Zweiter Absatz …"></textarea></div>';
  card.querySelector(".sec-head button").addEventListener("click", () => {
    card.remove();
    update();
  });
  if (section) {
    card.querySelector(".sec-title").value = section.title || "";
    card.querySelector(".sec-text").value = (section.paragraphs || []).join("\n\n");
  }
  $("#b-sections").appendChild(card);
}
$("#b-add-section").addEventListener("click", () => {
  addSection();
  update();
});
function readSections() {
  return $$("#b-sections .section-card").map((card) => {
    const title = card.querySelector(".sec-title").value.trim();
    const id = slugify(title);
    card.querySelector(".sec-id b").textContent = id || "—";
    return { id, title, paragraphs: splitParagraphs(card.querySelector(".sec-text").value) };
  });
}

/* ---------- Slug-Automatik ---------- */

let jobSlugDirty = false;
$("#j-slug").addEventListener("input", () => { jobSlugDirty = true; });
$("#j-title").addEventListener("input", () => {
  if (!jobSlugDirty && !state.editing.job) $("#j-slug").value = slugify($("#j-title").value);
});
let blogSlugDirty = false;
$("#b-slug").addEventListener("input", () => { blogSlugDirty = true; });
$("#b-title").addEventListener("input", () => {
  if (!blogSlugDirty && !state.editing.blog) $("#b-slug").value = slugify($("#b-title").value);
});

/* ---------- Formulare lesen ---------- */

function buildEmploymentString() {
  const type = $("#j-emp-type").value;
  const min = $("#j-pensum-min").value.trim();
  const max = $("#j-pensum-max").value.trim();
  if (!min) return "";
  const pensum = max && max !== min ? min + "–" + max + "%" : min + "%";
  return type + ", " + pensum;
}
function buildCompensationString() {
  const mode = document.querySelector('input[name="j-comp-mode"]:checked').value;
  if (mode === "verhandlung") return "Nach Vereinbarung";
  const min = $("#j-comp-min").value.trim();
  const max = $("#j-comp-max").value.trim();
  const unit = $("#j-comp-unit").value;
  const suffix = $("#j-comp-suffix").value.trim();
  if (!min || (mode === "range" && !max)) return "";
  const base =
    mode === "range"
      ? "CHF " + fmtChf(min) + " – " + fmtChf(max) + " / " + unit
      : "CHF " + fmtChf(min) + " / " + unit;
  return suffix ? base + " " + suffix : base;
}
function readJob() {
  return {
    slug: $("#j-slug").value.trim(),
    title: $("#j-title").value.trim(),
    region: $("#j-region").value.trim(),
    employmentType: buildEmploymentString(),
    focus: [$("#j-focus-branche").value.trim(), $("#j-focus-ort").value.trim()].filter(Boolean).join(" · "),
    teaser: $("#j-teaser").value.trim(),
    compensation: buildCompensationString(),
    startDate: $("#j-start").value.trim(),
    tasks: listValues("j-tasks"),
    requirements: listValues("j-reqs"),
    benefits: listValues("j-benefits"),
    closingNote: splitParagraphs($("#j-closing").value),
    note: $("#j-note").value.trim(),
    datePosted: $("#j-date-posted").value,
    validThrough: $("#j-valid").value,
    addressLocality: $("#j-locality").value.trim(),
    addressRegion: $("#j-canton").value,
  };
}
function readBlog() {
  const dateVal = $("#b-published").value;
  return {
    slug: $("#b-slug").value.trim(),
    title: $("#b-title").value.trim(),
    category: $("#b-category").value,
    readTime: $("#b-readtime").value.trim(),
    publishedAt: dateVal ? formatIsoDe(dateVal) : "",
    teaser: $("#b-teaser").value.trim(),
    intro: $("#b-intro").value.trim(),
    sections: readSections(),
  };
}

/* ---------- Checks ---------- */

const ICONS = {
  ok: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>',
  warn: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L2 20h20L12 3zM12 10v5M12 17.5v.5"/></svg>',
  err: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
};
function renderChecks(ul, checks) {
  ul.innerHTML = checks
    .map((c) => '<li class="' + c.level + '">' + ICONS[c.level] + "<span>" + c.html + "</span></li>")
    .join("");
}
function renderStatus(el, checks) {
  const errs = checks.filter((c) => c.level === "err").length;
  const warns = checks.filter((c) => c.level === "warn").length;
  if (errs > 0) {
    el.className = "status-line blocked";
    el.textContent = errs + " Pflichtpunkt(e) offen";
  } else if (warns > 0) {
    el.className = "status-line warned";
    el.textContent = "Bereit — " + warns + " Empfehlung(en) offen";
  } else {
    el.className = "status-line ready";
    el.textContent = "Bereit zum Veröffentlichen";
  }
}
function markValidity(input, valid) {
  input.classList.toggle("invalid", !valid && input.value.trim() !== "");
}

function jobChecks(job) {
  const checks = [];
  const add = (level, html) => checks.push({ level, html });

  if (!job.title) add("err", "<strong>Titel</strong> fehlt.");
  else if (/%|CHF|\d{2,3}\s*%/.test(job.title))
    add("warn", "<strong>Titel</strong> sollte weder Pensum noch Lohn enthalten (Google-Richtlinie).");
  else if (!/\(m\/w\/d\)/.test(job.title))
    add("warn", "<strong>Titel</strong> ohne «(m/w/d)» — Hausformat prüfen.");
  else add("ok", "<strong>Titel</strong> in Ordnung.");

  if (!job.slug) add("err", "<strong>Slug</strong> fehlt.");
  else if (!SLUG_PATTERN.test(job.slug)) add("err", "<strong>Slug</strong> ungültig — nur Kleinbuchstaben, Ziffern, Bindestriche.");
  else if (!state.editing.job && state.jobs.some((j) => j.slug === job.slug))
    add("err", "<strong>Slug</strong> wird bereits verwendet.");
  else add("ok", "<strong>Slug</strong> gültig: <code style='font-family:var(--mono)'>" + escHtml(job.slug) + "</code>");

  if (!job.teaser) add("err", "<strong>Teaser</strong> fehlt (wird Beschreibung + Meta-Description).");
  else if (job.teaser.length > 155) add("warn", "<strong>Teaser</strong> " + job.teaser.length + " Zeichen — Meta-Description wird bei 155 gekürzt (Anzeige selbst ist nicht betroffen).");
  else add("ok", "<strong>Teaser</strong> " + job.teaser.length + " Zeichen.");

  const empTypes = job.employmentType ? parseEmploymentTypes(job.employmentType) : undefined;
  if (!job.employmentType) add("err", "<strong>Pensum</strong> fehlt.");
  else if (!empTypes) add("err", "<strong>Pensum</strong> nicht parsebar — Format «Festanstellung, 80–100%» verwenden.");
  else add("ok", "<strong>employmentType</strong> für Google: <span class='chips'>" + empTypes.map((t) => "<span class='chip'>" + t + "</span>").join("") + "</span>");

  const salary = job.compensation ? parseBaseSalary(job.compensation) : undefined;
  if (!job.compensation) add("err", "<strong>Vergütung</strong> fehlt.");
  else if (salary) {
    const txt = salary.minValue != null ? fmtChf(salary.minValue) + " – " + fmtChf(salary.maxValue) : fmtChf(salary.value);
    add("ok", "<strong>baseSalary</strong> für Google: CHF " + txt + " / " + salary.unitText);
  } else add("warn", "<strong>Vergütung</strong> «" + escHtml(job.compensation) + "» ergibt kein baseSalary — Anzeigen mit Lohnangabe werden bei Google prominenter dargestellt.");

  if (!job.addressLocality || !job.addressRegion)
    add("err", "<strong>Arbeitsort</strong> unvollständig — Gemeinde + Kanton sind für Googles jobLocation nötig.");
  else add("ok", "<strong>jobLocation</strong>: " + escHtml(job.addressLocality) + " (" + job.addressRegion + "), CH");

  if (!job.datePosted) add("err", "<strong>Publikationsdatum</strong> fehlt (datePosted ist Pflicht).");
  else add("ok", "<strong>datePosted</strong>: " + job.datePosted);

  if (!job.validThrough) add("warn", "<strong>Bewerbungsfrist</strong> leer — validThrough ist optional, aber von Google empfohlen.");
  else if (job.datePosted && job.validThrough <= job.datePosted) add("err", "<strong>Bewerbungsfrist</strong> muss nach dem Publikationsdatum liegen.");
  else add("ok", "<strong>validThrough</strong>: " + job.validThrough);

  if (job.tasks.length < 3) add(job.tasks.length ? "warn" : "err", "<strong>Aufgaben</strong>: " + job.tasks.length + " erfasst — 3–5 empfohlen.");
  else add("ok", "<strong>Aufgaben</strong>: " + job.tasks.length + " erfasst.");
  if (job.requirements.length < 3) add(job.requirements.length ? "warn" : "err", "<strong>Anforderungen</strong>: " + job.requirements.length + " erfasst — 3–5 empfohlen.");
  else add("ok", "<strong>Anforderungen</strong>: " + job.requirements.length + " erfasst.");

  if (!job.region) add("err", "<strong>Region</strong> (Anzeige) fehlt.");
  if (!job.focus) add("err", "<strong>Fokus</strong> (Branche · Ort) fehlt.");
  if (!job.startDate) add("err", "<strong>Stellenantritt</strong> fehlt.");

  return checks;
}

function blogChecks(post) {
  const checks = [];
  const add = (level, html) => checks.push({ level, html });
  if (!post.title) add("err", "<strong>Titel</strong> fehlt.");
  if (!post.slug) add("err", "<strong>Slug</strong> fehlt.");
  else if (!SLUG_PATTERN.test(post.slug)) add("err", "<strong>Slug</strong> ungültig.");
  else if (!state.editing.blog && state.blogs.some((b) => b.slug === post.slug))
    add("err", "<strong>Slug</strong> wird bereits verwendet.");
  else add("ok", "<strong>Slug</strong> gültig.");
  if (!post.teaser) add("err", "<strong>Teaser</strong> fehlt.");
  if (!post.intro) add("err", "<strong>Einleitung</strong> fehlt.");
  if (!post.readTime) add("err", "<strong>Lesezeit</strong> fehlt.");
  if (!post.publishedAt) add("err", "<strong>Publikationsdatum</strong> fehlt.");
  else add("ok", "<strong>Publiziert</strong>: " + escHtml(post.publishedAt));
  const complete = post.sections.filter((s) => s.title && s.paragraphs.length);
  if (!complete.length) add("err", "Mindestens <strong>1 Abschnitt</strong> mit Titel und Absatz nötig.");
  else add("ok", "<strong>" + complete.length + " Abschnitt(e)</strong> vollständig.");
  post.sections.forEach((s, i) => {
    if (s.title && !s.paragraphs.length) add("err", "Abschnitt " + (i + 1) + ": <strong>Absätze</strong> fehlen.");
    if (!s.title && s.paragraphs.length) add("err", "Abschnitt " + (i + 1) + ": <strong>Zwischentitel</strong> fehlt.");
    if (s.paragraphs.length > 3) add("warn", "Abschnitt " + (i + 1) + ": " + s.paragraphs.length + " Absätze — 1–3 empfohlen.");
  });
  return checks;
}

/* ---------- Update-Zyklus ---------- */

let jobHasErrors = true;
let blogHasErrors = true;

function update() {
  const job = readJob();
  $("#j-emp-preview").textContent = job.employmentType || "—";
  $("#j-comp-preview").textContent = job.compensation || "—";
  $("#j-teaser-count").textContent = job.teaser.length + " Zeichen";
  markValidity($("#j-slug"), SLUG_PATTERN.test(job.slug));
  const jc = jobChecks(job);
  renderChecks($("#j-checks"), jc);
  renderStatus($("#j-status"), jc);

  const mode = document.querySelector('input[name="j-comp-mode"]:checked').value;
  $("#j-comp-fields").hidden = mode === "verhandlung";
  $("#j-comp-suffix-wrap").hidden = mode === "verhandlung";
  $("#j-comp-max-wrap").hidden = mode !== "range";

  const post = readBlog();
  const bc = blogChecks(post);
  renderChecks($("#b-checks"), bc);
  renderStatus($("#b-status"), bc);

  jobHasErrors = jc.some((c) => c.level === "err");
  blogHasErrors = bc.some((c) => c.level === "err");
  $("#j-save").disabled = state.saving || jobHasErrors;
  $("#b-save").disabled = state.saving || blogHasErrors;
}
document.addEventListener("input", update);
document.addEventListener("change", update);

/* ---------- Formulare befüllen ---------- */

function setFormWarn(id, messages) {
  const el = $(id);
  el.hidden = messages.length === 0;
  el.textContent = messages.length ? "Nicht automatisch übernommen — bitte prüfen: " + messages.join(" · ") : "";
}

function resetJobForm() {
  $("#job-form").reset();
  jobSlugDirty = false;
  $("#j-slug").readOnly = false;
  $("#j-slug-hint").textContent = "Wird automatisch aus dem Titel erzeugt, kann angepasst werden.";
  $("#j-date-posted").value = todayIso();
  $("#j-note").value = "Diskrete Besetzung · Alle Angaben vertraulich";
  fillList("j-tasks", [], 3);
  fillList("j-reqs", [], 3);
  fillList("j-benefits", [], 1);
  setFormWarn("#j-warn", []);
  $("#j-pub-status").className = "pub-status";
  $("#j-pub-status").textContent = "";
}

function startNewJob() {
  state.editing.job = null;
  resetJobForm();
  $("#j-form-title").innerHTML = "Neue Stelle<span>.</span>";
  $("#j-save").querySelector("span").textContent = "Stelle veröffentlichen";
  showFormView("job");
  update();
}

function startEditJob(slug) {
  const job = state.jobs.find((j) => j.slug === slug);
  if (!job) return;
  state.editing.job = slug;
  resetJobForm();
  const warnings = [];

  $("#j-title").value = job.title || "";
  $("#j-slug").value = job.slug;
  $("#j-slug").readOnly = true;
  $("#j-slug-hint").textContent = "Slug ist fix — für eine andere URL bitte löschen und neu anlegen.";
  $("#j-region").value = job.region || "";
  $("#j-start").value = job.startDate || "";
  const focusParts = (job.focus || "").split("·").map((s) => s.trim());
  $("#j-focus-branche").value = focusParts[0] || "";
  $("#j-focus-ort").value = focusParts.slice(1).join(" · ") || "";

  const emp = parseEmploymentTypeString(job.employmentType);
  if (emp) {
    $("#j-emp-type").value = emp.type;
    $("#j-pensum-min").value = emp.min;
    $("#j-pensum-max").value = emp.max;
  } else {
    warnings.push("Pensum («" + (job.employmentType || "leer") + "»)");
  }

  const comp = parseCompensationString(job.compensation);
  if (comp) {
    document.querySelector('input[name="j-comp-mode"][value="' + comp.mode + '"]').checked = true;
    if (comp.mode !== "verhandlung") {
      $("#j-comp-min").value = comp.min;
      $("#j-comp-max").value = comp.mode === "range" ? comp.max : "";
      $("#j-comp-unit").value = comp.unit;
      $("#j-comp-suffix").value = comp.suffix || "";
    }
  } else {
    warnings.push("Vergütung («" + (job.compensation || "leer") + "»)");
  }

  $("#j-teaser").value = job.teaser || "";
  fillList("j-tasks", job.tasks, 3);
  fillList("j-reqs", job.requirements, 3);
  fillList("j-benefits", job.benefits, 1);
  $("#j-closing").value = (job.closingNote || []).join("\n\n");
  $("#j-note").value = job.note || "Diskrete Besetzung · Alle Angaben vertraulich";
  $("#j-date-posted").value = job.datePosted || todayIso();
  $("#j-valid").value = job.validThrough || "";
  $("#j-locality").value = job.addressLocality || "";
  $("#j-canton").value = job.addressRegion || "";

  setFormWarn("#j-warn", warnings);
  $("#j-form-title").innerHTML = "Stelle bearbeiten<span>.</span>";
  $("#j-save").querySelector("span").textContent = "Änderung veröffentlichen";
  showFormView("job");
  update();
}

function resetBlogForm() {
  $("#blog-form").reset();
  blogSlugDirty = false;
  $("#b-slug").readOnly = false;
  $("#b-slug-hint").textContent = "Wird automatisch aus dem Titel erzeugt, kann angepasst werden.";
  $("#b-published").value = todayIso();
  $("#b-sections").innerHTML = "";
  setFormWarn("#b-warn", []);
  $("#b-pub-status").className = "pub-status";
  $("#b-pub-status").textContent = "";
}

function startNewBlog() {
  state.editing.blog = null;
  resetBlogForm();
  addSection();
  $("#b-form-title").innerHTML = "Neuer Artikel<span>.</span>";
  $("#b-save").querySelector("span").textContent = "Artikel veröffentlichen";
  showFormView("blog");
  update();
}

function startEditBlog(slug) {
  const post = state.blogs.find((b) => b.slug === slug);
  if (!post) return;
  state.editing.blog = slug;
  resetBlogForm();
  const warnings = [];

  $("#b-title").value = post.title || "";
  $("#b-slug").value = post.slug;
  $("#b-slug").readOnly = true;
  $("#b-slug-hint").textContent = "Slug ist fix — für eine andere URL bitte löschen und neu anlegen.";
  $("#b-category").value = post.category || "Markt";
  $("#b-readtime").value = post.readTime || "5 Min.";
  const iso = parseGermanDate(post.publishedAt);
  if (iso) $("#b-published").value = iso;
  else warnings.push("Publikationsdatum («" + (post.publishedAt || "leer") + "»)");
  $("#b-teaser").value = post.teaser || "";
  $("#b-intro").value = post.intro || "";
  (post.sections || []).forEach((section) => addSection(section));
  if (!(post.sections || []).length) addSection();

  setFormWarn("#b-warn", warnings);
  $("#b-form-title").innerHTML = "Artikel bearbeiten<span>.</span>";
  $("#b-save").querySelector("span").textContent = "Änderung veröffentlichen";
  showFormView("blog");
  update();
}

/* ---------- Veröffentlichen / Löschen ---------- */

async function saveContent(kind) {
  const isJob = kind === "job";
  const entry = isJob ? readJob() : readBlog();
  const editingSlug = state.editing[kind];
  const btn = $(isJob ? "#j-save" : "#b-save");
  const label = btn.querySelector("span");
  const statusEl = $(isJob ? "#j-pub-status" : "#b-pub-status");
  const origLabel = label.textContent;

  state.saving = true;
  update();
  label.textContent = "Veröffentliche …";
  statusEl.className = "pub-status";
  statusEl.textContent = "";

  try {
    const result = await api("/api/admin/publish", {
      method: "POST",
      body: editingSlug
        ? { kind, action: "update", slug: editingSlug, entry }
        : { kind, action: "create", entry },
    });

    if (isJob) {
      if (editingSlug) state.jobs = state.jobs.map((j) => (j.slug === editingSlug ? entry : j));
      else state.jobs = state.jobs.concat([entry]);
    } else {
      if (editingSlug) state.blogs = state.blogs.map((b) => (b.slug === editingSlug ? entry : b));
      else state.blogs = [entry].concat(state.blogs);
    }
    state.editing[kind] = null;
    renderLists();
    showListView(kind);
    setBanner("ok",
      "<strong>" + escHtml(entry.title) + "</strong> committed — der Deploy läuft, in ca. 2–3 Min. live: " +
      (result.liveUrl ? '<a href="' + result.liveUrl + '" target="_blank" rel="noopener">' + result.liveUrl + "</a>" : "") +
      (result.commitUrl ? ' · <a href="' + result.commitUrl + '" target="_blank" rel="noopener">Commit ansehen</a>' : "") +
      (isJob && !editingSlug ? "<br />Tipp: danach in der Search Console die Indexierung der URL beantragen." : ""));
  } catch (e) {
    if (e.status === 401) {
      showLogin("Sitzung abgelaufen — bitte neu anmelden.");
    } else {
      statusEl.className = "pub-status err";
      statusEl.textContent = "Fehler: " + e.message;
    }
  } finally {
    state.saving = false;
    label.textContent = origLabel;
    update();
  }
}

async function deleteContent(kind, slug) {
  const isJob = kind === "job";
  const item = (isJob ? state.jobs : state.blogs).find((x) => x.slug === slug);
  if (!item) return;
  const noun = isJob ? "Stelle" : "Artikel";
  const ok = window.confirm(
    noun + " «" + item.title + "» wirklich löschen?\n\n" +
    "Die Seite verschwindet nach dem nächsten Deploy" + (isJob ? " und wird auch aus Google for Jobs entfernt." : "."),
  );
  if (!ok) return;

  try {
    const result = await api("/api/admin/publish", {
      method: "POST",
      body: { kind, action: "delete", slug, title: item.title },
    });
    if (isJob) state.jobs = state.jobs.filter((j) => j.slug !== slug);
    else state.blogs = state.blogs.filter((b) => b.slug !== slug);
    renderLists();
    setBanner("ok",
      "<strong>" + escHtml(item.title) + "</strong> gelöscht — der Deploy läuft, die Seite verschwindet in ca. 2–3 Min." +
      (result.commitUrl ? ' <a href="' + result.commitUrl + '" target="_blank" rel="noopener">Commit ansehen</a>' : ""));
  } catch (e) {
    if (e.status === 401) showLogin("Sitzung abgelaufen — bitte neu anmelden.");
    else setBanner("err", "Löschen fehlgeschlagen: " + escHtml(e.message));
  }
}

$("#j-new").addEventListener("click", startNewJob);
$("#b-new").addEventListener("click", startNewBlog);
$("#j-back").addEventListener("click", () => { state.editing.job = null; showListView("job"); });
$("#b-back").addEventListener("click", () => { state.editing.blog = null; showListView("blog"); });
$("#j-save").addEventListener("click", () => saveContent("job"));
$("#b-save").addEventListener("click", () => saveContent("blog"));

/* ---------- Tabs ---------- */

function selectTab(which) {
  const isJob = which === "job";
  $("#tab-job").setAttribute("aria-selected", String(isJob));
  $("#tab-blog").setAttribute("aria-selected", String(!isJob));
  $("#panel-job").hidden = !isJob;
  $("#panel-blog").hidden = isJob;
}
$("#tab-job").addEventListener("click", () => selectTab("job"));
$("#tab-blog").addEventListener("click", () => selectTab("blog"));

/* ---------- Auto-Logout bei Inaktivität ---------- */

const INACTIVITY_LIMIT_MS = 15 * 60 * 1000;
let lastActivity = Date.now();
["pointerdown", "keydown", "mousemove", "scroll", "touchstart"].forEach((evt) =>
  document.addEventListener(evt, () => { lastActivity = Date.now(); }, { passive: true })
);
setInterval(async () => {
  if ($("#view-app").hidden) return;
  if (Date.now() - lastActivity > INACTIVITY_LIMIT_MS) {
    try { await api("/api/admin/logout", { method: "POST", body: {} }); } catch (e) { /* Cookie läuft ohnehin ab */ }
    showLogin("Aus Sicherheitsgründen automatisch abgemeldet — 15 Minuten inaktiv.");
  }
}, 30 * 1000);

/* ---------- Boot ---------- */

resetJobForm();
resetBlogForm();
addSection();

(async function boot() {
  try {
    const data = await api("/api/admin/content");
    state.jobs = data.jobs || [];
    state.blogs = data.blogs || [];
    showApp();
  } catch (e) {
    showLogin(e.status === 401 ? "" : e.message);
  }
})();
