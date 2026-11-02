/* Piercing Akademie – Online-Kurs (Prototyp).
   Ablauf wie in einer Fahrschul-App: Jede Lektion erklärt zuerst den Stoff, danach müssen alle Fragen der Lektion
   richtig beantwortet werden (falsche kommen erneut). Erst dann öffnet sich die nächste Lektion. Nach allen Lektionen
   eines Moduls folgt die Modulprüfung; ab 80 % (Hygiene und Ablauf/Notfälle: 85 %) öffnet sich das nächste Modul. Dazu: Fehler-Training, Prüfungssimulation,
   Glossar und Checklisten.
   Kein Backend: Der Fortschritt liegt nur im localStorage dieses Browsers. Inhalte: inhalte/*.js (window.KURS). */
(function () {
  "use strict";

  var KURS = window.KURS || { module: [] };

  // ---------- Sprache ----------
  // window.KURS_SPRACHE setzt das Ladeskript in index.html (de, en, es). Oberflächentexte laufen über tr("Deutscher Text", {platzhalter});
  // das Wörterbuch steht in inhalte/ui.js, die Beschriftungen der Grafiken in inhalte/grafiken-text.js. Fehlt ein Eintrag, bleibt der deutsche Text.
  var SPRACHE = /^(en|es)$/.test(window.KURS_SPRACHE || "") ? window.KURS_SPRACHE : "de";
  var UI = (KURS.ui && KURS.ui[SPRACHE]) || {};
  var GT = (KURS.grafikText && KURS.grafikText[SPRACHE]) || {};
  var LOCALE = { de: "de-DE", en: "en-US", es: "es-ES" }[SPRACHE];
  function tr(s, p) {
    var t = SPRACHE !== "de" && typeof UI[s] === "string" ? UI[s] : s;
    return p ? t.replace(/\{(\w+)\}/g, function (m, k) { return p[k] != null ? String(p[k]) : m; }) : t;
  }
  function datumText(d, opt) { return d.toLocaleDateString(LOCALE, opt); }
  // Seitenangaben bleiben in den Daten „S. 74“ (für die Verlinkung ins Kursbuch); angezeigt wird „p. 74“ bzw. „pág. 74“
  function seiteText(s) {
    s = String(s == null ? "" : s);
    if (SPRACHE === "de") return s;
    return s.replace(/\bS\.\s*(\d+)([–,-]\s*\d+)?/g, function (m, a, b) { return (SPRACHE === "en" ? (b ? "pp. " : "p. ") : (b ? "págs. " : "pág. ")) + a + (b || ""); });
  }
  // Links zur Website zeigen auf die Seiten der gewählten Sprache (../index.html → ../en/index.html, /bestellen.html → /en/bestellen.html)
  function website(href) {
    if (SPRACHE === "de") return href;
    if (href.indexOf("../") === 0) return "../" + SPRACHE + "/" + href.slice(3);
    if (href.charAt(0) === "/" && href.indexOf("/kurs") !== 0 && href.indexOf("/" + SPRACHE + "/") !== 0) return "/" + SPRACHE + href;
    return href;
  }
  // Grafiken: Beschriftungen in den <text>-Knoten exakt ersetzen (Entities beachten)
  function entities(s) { return s.replace(/&(amp|lt|gt|quot|#39|#(\d+));/g, function (m, n, d) { return d ? String.fromCharCode(+d) : { amp: "&", lt: "<", gt: ">", quot: "\"", "#39": "'" }[n]; }); }
  function gt(s) { return s != null && typeof GT[s] === "string" ? GT[s] : s; }
  function grafikSvg(svg) {
    if (SPRACHE === "de") return svg;
    return svg.replace(/(<text\b[^>]*>)([^<]*)(<\/text>)/g, function (m, a, t, b) { var d = entities(t); return typeof GT[d] === "string" ? a + esc(GT[d]) + b : m; });
  }
  // Statische Texte aus index.html (data-tr: Text, data-tr-aria: aria-label), Titel, Website-Links und Sprachwahl
  (function () {
    [].forEach.call(document.querySelectorAll("[data-tr]"), function (el) { el.textContent = tr(el.textContent.trim()); });
    [].forEach.call(document.querySelectorAll("[data-tr-aria]"), function (el) { el.setAttribute("aria-label", tr(el.getAttribute("aria-label"))); });
    [].forEach.call(document.querySelectorAll("a[data-website]"), function (a) { a.setAttribute("href", website(a.getAttribute("href"))); });
    document.title = tr(document.title);
  })();
  function sprachwahl() {
    [].forEach.call(document.querySelectorAll(".k-sprachen a[data-lang]"), function (a) {
      a.setAttribute("href", "?lang=" + a.getAttribute("data-lang") + (location.hash || ""));
      if (a.getAttribute("data-lang") === SPRACHE) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }

  var MODULE = KURS.module.slice().sort(function (a, b) { return a.nr - b.nr; });
  var BESTEHEN_AB = 0.8;            // Anteil richtiger Antworten für Modulprüfung und Simulation
  // Sicherheitsmodule: strengere Modulprüfung und in der Simulation eigener Block mit höchstens einem Fehler
  var STRENG = {
    5: { quote: 0.85, kurz: "Hygiene", simFragen: 8, simMaxFehler: 1 },
    9: { quote: 0.85, kurz: "Ablauf und Notfälle", simFragen: 6, simMaxFehler: 1 }
  };
  var FRAGEN_JE_PRUEFUNG = 20;      // zufällige Fragen pro Modulprüfung
  var SIMULATION_JE_MODUL = 4;      // Fragen pro Modul in der Prüfungssimulation (Sicherheitsmodule: siehe STRENG)
  var FEHLER_RICHTIG_NOETIG = 2;    // so oft muss eine Fehlerfrage richtig beantwortet werden, bis sie aus dem Training verschwindet
  var SPEICHER = "pa-kurs-v3";

  var app = document.getElementById("kurs");
  var nav = document.getElementById("kurs-nav");

  // ---------- Fragen ----------
  // Format in den Dateien: [Frage, [richtig, falsch, falsch], Erklärung, Seite]; die richtige Antwort steht zuerst.
  var ALLE_FRAGEN = {};
  function frage(t, modulNr, lektion) {
    return { frage: t[0], antworten: t[1], richtig: 0, erklaerung: t[2], seite: t[3], modul: modulNr, lektion: lektion };
  }
  MODULE.forEach(function (m) {
    m.pool = [];
    m.lektionen.forEach(function (l, i) {
      var zusatz = (KURS.lektionsfragen && KURS.lektionsfragen[m.nr + "-" + i]) || [];
      l.alleFragen = (l.fragen || []).concat(zusatz).map(function (t) { return frage(t, m.nr, l.titel); });
      l.alleFragen.forEach(function (f) { ALLE_FRAGEN[f.frage] = f; m.pool.push(f); });
    });
  });
  var GESAMT_LEKTIONEN = MODULE.reduce(function (s, m) { return s + m.lektionen.length; }, 0);
  var GESAMT_FRAGEN = Object.keys(ALLE_FRAGEN).length;
  // Druckvorlagen, erzeugt mit werkzeuge/vorlagen-erzeugen.mjs
  var VORLAGEN = [
    ["vorlagen/pflegehinweise.pdf", "Pflegehinweise für Kunden", "1 Seite, mit Abheilzeiten und Warnzeichen"],
    ["vorlagen/einverstaendniserklaerung-muster.pdf", "Einverständniserklärung (Muster)", "2 Seiten, mit freiwilliger Foto-Einwilligung"],
    ["vorlagen/hygieneplan-vorlage.pdf", "Reinigungs- und Desinfektionsplan", "Vorlage zum Ausfüllen, mit dem Gesundheitsamt abstimmen"],
    ["vorlagen/checklisten.pdf", "Alle Checklisten", "Zum Ausdrucken und Abhaken"],
    ["vorlagen/uebungsvorlage.pdf", "Übungsvorlage Praxislabor", "3 Seiten: Anzeichnen, Symmetrie, Übungsprotokoll"]
  ];
  // Die PDF-Vorlagen gibt es nur auf Deutsch: in en/es steht das dabei
  function deutschZusatz() { return SPRACHE === "de" ? "" : " " + esc(tr("(auf Deutsch)")); }
  var LABOR = KURS.labor || null;
  function laborErledigt(a) { return a.kontrolle.every(function (_, i) { return stand.labor[a.id + "-" + i]; }); }
  // Selbst stechen am Silikonohr: nur Paket Komplett (Übungsset). Im Prototyp ohne Server und für die Akademie offen. Sonst: Zuschauen.
  function stichOffen() { return !!(LABOR && LABOR.stich) && (!KONTO || KONTO.admin || LABOR.stich.pakete.indexOf(KONTO.paket) > -1); }
  function laborAlle() { return LABOR ? LABOR.aufgaben.concat(stichOffen() ? LABOR.stich.aufgaben : []) : []; }
  function laborAnzahl() { return laborAlle().filter(laborErledigt).length; }

  // ---------- Fortschritt ----------
  // Auf dem Server (Cloudflare) setzt /kurs/konto.js window.PA_KONTO: Fortschritt kommt dann vom Server und wird dorthin gespeichert.
  // Ohne Server (Prototyp, Ansichtsversion) bleibt alles im Browser.
  var KONTO = window.PA_KONTO || null;
  function leer() { return { erledigt: {}, bestanden: {}, fehler: {}, fehlerRichtig: {}, uebung: {}, check: {}, labor: {}, notizen: {}, buchSeite: 1, simulation: null, vorschau: false }; }
  var stand = laden();
  function laden() {
    if (KONTO) { var k = Object.assign(leer(), KONTO.fortschritt || {}); k.vorschau = !!KONTO.admin; return k; }
    try {
      var roh = window.localStorage.getItem(SPEICHER);
      if (roh) return Object.assign(leer(), JSON.parse(roh));
    } catch (e) { /* Speicher nicht verfügbar: Fortschritt gilt nur bis zum Neuladen */ }
    return leer();
  }
  var serverTimer = null;
  function serverSpeichern(sofort) {
    clearTimeout(serverTimer);
    var senden = function () {
      if (KONTO.abgemeldet) return;
      fetch("/api/fortschritt", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(stand), keepalive: true, credentials: "same-origin" })
        .then(function (r) { if (r.status === 401) window.location.href = "/login.html?weiter=" + encodeURIComponent(location.pathname + location.hash); })
        .catch(function () { /* offline: beim nächsten Speichern erneut */ });
    };
    if (sofort) senden(); else serverTimer = setTimeout(senden, 1500);
  }
  function speichern() {
    if (KONTO) { serverSpeichern(false); return; }
    try { window.localStorage.setItem(SPEICHER, JSON.stringify(stand)); } catch (e) { /* siehe laden() */ }
  }
  if (KONTO) {
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden" && serverTimer) serverSpeichern(true); });
    // Wasserzeichen: Der Zugang ist persönlich, jede Seite trägt die E-Mail-Adresse der Käuferin bzw. des Käufers
    var wz = document.createElement("div");
    wz.className = "k-wasserzeichen"; wz.setAttribute("aria-hidden", "true");
    wz.textContent = (KONTO.email + "   ").repeat(60);
    document.body.appendChild(wz);
    var kopf = document.querySelector(".wrap > header");
    if (kopf) {
      var ab = document.createElement("a");
      ab.href = "#"; ab.textContent = tr("Abmelden"); ab.className = "btn ghost small k-abmelden";
      ab.addEventListener("click", function (e) {
        e.preventDefault();
        if (serverTimer) serverSpeichern(true);
        KONTO.abgemeldet = true;
        fetch("/api/abmelden", { method: "POST", credentials: "same-origin" }).then(function () { window.location.href = website("/"); });
      });
      kopf.appendChild(ab);
    }
    var banner = document.querySelector(".k-banner");
    if (banner) banner.textContent = tr("Angemeldet als {email}. Dein Zugang ist persönlich und gilt bis {datum}.", { email: KONTO.email, datum: datumText(new Date(KONTO.gueltigBis || Date.now())) });
  }

  function modul(nr) { return MODULE.filter(function (m) { return m.nr === nr; })[0]; }
  function modulOffen(m) { return stand.vorschau || m.nr === MODULE[0].nr || !!stand.bestanden[m.nr - 1]; }
  function lektionErledigt(m, i) { return !!stand.erledigt[m.nr + "-" + i]; }
  function lektionOffen(m, i) { return modulOffen(m) && (stand.vorschau || i === 0 || lektionErledigt(m, i - 1)); }
  function erledigteLektionen(m) { return m.lektionen.filter(function (l, i) { return lektionErledigt(m, i); }).length; }
  function pruefungOffen(m) { return modulOffen(m) && (stand.vorschau || erledigteLektionen(m) === m.lektionen.length); }
  function anzahlBestanden() { return MODULE.filter(function (m) { return stand.bestanden[m.nr]; }).length; }
  function simulationOffen() { return stand.vorschau || anzahlBestanden() === MODULE.length; }
  function anzahlFehler() { return Object.keys(stand.fehler).filter(function (k) { return ALLE_FRAGEN[k]; }).length; }
  function merkeFehler(f) { stand.fehler[f.frage] = (stand.fehler[f.frage] || 0) + 1; delete stand.fehlerRichtig[f.frage]; }
  function quote(nr) { return STRENG[nr] ? STRENG[nr].quote : BESTEHEN_AB; }
  function prozent(q) { return Math.round(q * 100) + " %"; }

  // ---------- Hilfsfunktionen ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }
  function seitenLabel(s) { return s === "Entwurf" ? tr("Ergänzung der Akademie") : seiteText(s); }
  // „S. 74“, „S. 11–12“, „S. 16, 39“ → Link in den Kursbuch-Leser (erste genannte Seite)
  // Anzeige über seitenLabel: „p. 74“ (en), „pág. 74“ (es); der Link bleibt #buch-74
  function buchNr(t) { var m = /(?:\bS|\bpp?|\bpágs?)\.\s*(\d+)/.exec(t || ""); return m ? +m[1] : null; }
  function buchLink(t) { var n = buchNr(t), z = seitenLabel(t); return n == null ? esc(z) : '<a href="#buch-' + n + '" class="k-buchlink" title="' + esc(tr("Im Kursbuch nachlesen")) + '">' + esc(z) + "</a>"; }
  function zwei(n) { return (n < 10 ? "0" : "") + n; }
  function mischen(liste) { var a = liste.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function simulationsUmfang() { return MODULE.reduce(function (s, m) { return s + Math.min(m.pool.length, STRENG[m.nr] ? STRENG[m.nr].simFragen : SIMULATION_JE_MODUL); }, 0); }
  function benoetigt(n, q) { return Math.ceil(n * (q || BESTEHEN_AB) - 1e-9); }
  // Antwortreihenfolge mischen; „richtig“ zeigt danach auf die neue Position
  function gemischt(f) {
    var r = mischen(f.antworten.map(function (_, i) { return i; }));
    return Object.assign({}, f, { antworten: r.map(function (i) { return f.antworten[i]; }), richtig: r.indexOf(f.richtig) });
  }
  function balken(wert, max, label) {
    return '<div class="k-balken" role="progressbar" aria-valuemin="0" aria-valuemax="' + max + '" aria-valuenow="' + wert + '" aria-label="' + esc(label) + '"><span style="width:' + (max ? wert / max * 100 : 0) + '%"></span></div>';
  }

  // ---------- Inhaltsblöcke ----------
  function block(b) {
    switch (b.typ) {
      case "text": return "<p>" + esc(b.text) + "</p>";
      case "merke": return '<div class="k-box k-merke"><strong>' + tr("Merke") + '</strong><p>' + esc(b.text) + "</p></div>";
      case "achtung": return '<div class="k-box k-achtung"><strong>' + tr("Achtung") + '</strong><p>' + esc(b.text) + "</p></div>";
      case "praxis": return '<div class="k-box k-praxis"><strong>' + tr("Aus der Praxis") + '</strong><p>' + esc(b.text) + "</p></div>";
      case "ergaenzung": return '<div class="k-box k-ergaenzung"><strong>' + tr("Ergänzung der Akademie") + '</strong><p>' + esc(b.text) + "</p></div>";
      case "liste": return (b.titel ? "<h4>" + esc(b.titel) + "</h4>" : "") + "<ul>" + b.punkte.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      case "schritte": return (b.titel ? "<h4>" + esc(b.titel) + "</h4>" : "") + '<ol class="k-schritte"' + (b.start ? ' start="' + b.start + '"' : "") + ">" + b.punkte.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>";
      case "tabelle":
        return '<div class="k-tabelle"><table><thead><tr>' + b.kopf.map(function (k) { return '<th scope="col">' + esc(k) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.zeilen.map(function (z) { return "<tr>" + z.map(function (c, i) { return i === 0 ? '<th scope="row">' + esc(c) + "</th>" : "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "datenblatt":
        var nicht = /NICHT DURCHFÜHREN|DO NOT PERFORM|NO REALIZAR/.test(b.hinweis), bild = datenblattBild(b);
        return '<article class="k-datenblatt' + (nicht ? " k-nicht" : "") + (bild ? " k-mit-bild" : "") + '"><header><h4>' + esc(b.name) + '</h4><span class="label">' + esc(seiteText(b.seite)) + "</span></header>" +
          (bild ? '<img class="k-db-bild" src="' + bild.src + '" width="' + bild.w + '" height="' + bild.h + '" alt="' + esc(tr("{name}-Piercing, Foto aus dem Kursbuch", { name: b.name })) + '" loading="lazy">' : "") + "<p>" + esc(b.beschreibung) + "</p>" +
          (nicht ? "" : "<dl><div><dt>" + tr("Ersteinsatz") + "</dt><dd>" + esc(b.ersteinsatz) + "</dd></div><div><dt>" + tr("Kanüle") + "</dt><dd>" + esc(b.kanuele) + "</dd></div><div><dt>" + tr("Klemme") + "</dt><dd>" + esc(b.klemme) + "</dd></div></dl>") +
          (b.hinweis ? '<p class="k-hinweis">' + esc(b.hinweis) + "</p>" : "") + "</article>";
      case "grafik":
        var g = (KURS.grafiken || {})[b.id];
        if (!g) return "";
        return figur(g.w, g.h, b.alt || gt(g.alt), grafikSvg(g.svg), b.text || gt(g.text), b.titel);
      case "diagramm": return diagramm(b);
      case "foto":
        var f = BILDER[b.id];
        if (!f) return "";
        return '<figure class="k-foto"><img src="' + f.src + '" width="' + f.w + '" height="' + f.h + '" alt="' + esc(b.text) + '" loading="lazy"><figcaption>' + esc(b.text) + nachweis(f) + "</figcaption></figure>";
      case "video": return clip(b);
      case "galerie":
        return '<figure class="k-galerie">' + (b.titel ? '<p class="k-grafik-titel">' + esc(b.titel) + "</p>" : "") + "<ul>" +
          b.bilder.filter(function (x) { return BILDER[x[0]]; }).map(function (x) {
            var g = BILDER[x[0]];
            return '<li><img src="' + g.src + '" width="' + g.w + '" height="' + g.h + '" alt="' + esc(x[1]) + '" loading="lazy"><span>' + esc(x[1]) + "</span></li>";
          }).join("") + "</ul>" + (b.text || b.bilder.some(function (x) { return BILDER[x[0]] && BILDER[x[0]].lizenz; }) ? "<figcaption>" + esc(b.text || "") + b.bilder.map(function (x) { return BILDER[x[0]] ? nachweis(BILDER[x[0]]) : ""; }).join("") + "</figcaption>" : "") + "</figure>";
      default: return "";
    }
  }

  var BILDER = KURS.bilder || {};
  // Foto zum Datenblatt: über den deutschen Namen ("Lippenbändchen (Smiley)" → lippenbaendchen-smiley); bei übersetzten Namen über die Buchseite
  function datenblattBild(b) {
    var bild = BILDER[kurzname(b.name)], n = buchNr(b.seite);
    if (bild || SPRACHE === "de" || n == null) return bild;
    var treffer = Object.keys(BILDER).filter(function (k) { return BILDER[k].seite === n && !BILDER[k].lizenz; });
    return treffer.length === 1 ? BILDER[treffer[0]] : undefined;
  }
  // Bildnachweis für lizenzfreie Bilder (bilder-frei.js); Kursbuch-Bilder haben keinen
  function nachweis(f) {
    if (!f.lizenz) return "";
    return '<span class="k-nachweis">' + tr("Bild:") + " " + esc(f.urheber) + ", " + (f.lizenz_url ? '<a href="' + esc(f.lizenz_url) + '" target="_blank" rel="noopener">' + esc(f.lizenz) + "</a>" : esc(f.lizenz)) +
      ', <a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.quelle) + "</a>" + (/SA/.test(f.lizenz) ? ", " + tr("verkleinert") : "") + "</span>";
  }
  // Kurzer Clip: { typ: "video", id: "name", text: "…", titel?: "…", schleife?: true }
  // Dateien: inhalte/clips/<id>.mp4 (Pflicht), <id>.webm und <id>.jpg (Standbild) optional, erzeugt mit werkzeuge/clip-umwandeln.sh.
  // schleife: stumm in Endlosschleife, startet nur, wenn sichtbar; sonst normaler Player mit Steuerung und Ton.
  var CLIPS = KURS.clips || {};
  function clip(b) {
    var c = CLIPS[b.id];
    if (!c) return "";
    var pfad = "inhalte/clips/" + b.id;
    var attr = b.schleife ? ' muted loop playsinline preload="none" data-schleife' : ' controls playsinline preload="none"';
    return '<figure class="k-clip' + (c.hoch ? " k-clip-hoch" : "") + '">' + (b.titel ? '<p class="k-grafik-titel">' + esc(b.titel) + "</p>" : "") +
      '<video' + attr + (c.standbild ? ' poster="' + pfad + '.jpg"' : "") + ' width="' + c.w + '" height="' + c.h + '" aria-label="' + esc(b.text) + '">' +
      (c.webm ? '<source src="' + pfad + '.webm" type="video/webm">' : "") + '<source src="' + pfad + '.mp4" type="video/mp4"></video>' +
      "<figcaption>" + esc(b.text) + (c.dauer ? ' <span class="k-clip-dauer">' + esc(c.dauer) + "</span>" : "") + "</figcaption></figure>";
  }
  // Schleifen-Clips laufen nur, solange sie sichtbar sind; bei „Bewegung reduzieren“ gibt es stattdessen eine Steuerung
  (function () {
    var ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var sicht = "IntersectionObserver" in window && !ruhig ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { var v = e.target; if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () { v.controls = true; }); } else v.pause(); });
    }, { threshold: 0.4 }) : null;
    new MutationObserver(function () {
      [].forEach.call(app.querySelectorAll("video[data-schleife]:not([data-bereit])"), function (v) {
        v.setAttribute("data-bereit", "");
        if (sicht) sicht.observe(v); else v.controls = true;
      });
    }).observe(app, { childList: true, subtree: true });
  })();

  // Titelbild eines Moduls: klein auf der Modulkarte, groß im Modulkopf
  function titelbild(m, klein) {
    var b = (KURS.titelbilder || {})[m.nr];
    if (!b) return klein ? '<span class="k-titelbild k-klein k-leer" aria-hidden="true"><span>' + zwei(m.nr) + "</span></span>" : "";
    var img = '<img src="' + b.src + '" width="' + b.w + '" height="' + b.h + '" alt="' + (klein ? "" : esc(tr(b.alt))) + '" loading="lazy" decoding="async">';
    if (klein) return '<span class="k-titelbild k-klein">' + img + "</span>";
    return '<figure class="k-titelbild">' + img + "</figure>";
  }
  // "Lippenbändchen (Smiley)" -> "lippenbaendchen-smiley"
  function kurzname(n) {
    return n.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  // Grafik als <figure>; auf schmalen Bildschirmen scrollt nur die Grafik, damit die Schrift lesbar bleibt
  function figur(w, h, alt, svg, text, titel) {
    return '<figure class="k-grafik">' + (titel ? '<p class="k-grafik-titel">' + esc(titel) + "</p>" : "") +
      '<div class="k-grafik-flaeche"><svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + esc(alt) + '" style="min-width:' + Math.round(w * 0.72) + 'px">' + svg + "</svg></div>" +
      '<p class="k-grafik-hinweis">' + tr("Grafik seitlich wischen, um alles zu sehen.") + "</p>" + "<figcaption>" + esc(text) + "</figcaption></figure>";
  }

  // Balkendiagramm für Spannen: zeilen = [Bezeichnung, von, bis, "mindestens"?]
  function diagramm(b) {
    var links = 150, breite = 400, max = b.max, zh = 30, oben = 10;
    var x = function (v) { return links + v / max * breite; };
    var svg = "";
    for (var v = 0; v <= max; v += b.schritt) {
      svg += '<line x1="' + x(v) + '" y1="' + oben + '" x2="' + x(v) + '" y2="' + (oben + b.zeilen.length * zh) + '" class="sd"/>' +
        '<text x="' + x(v) + '" y="' + (oben + b.zeilen.length * zh + 18) + '" class="tm" text-anchor="middle">' + v + "</text>";
    }
    b.zeilen.forEach(function (z, i) {
      var y = oben + i * zh + 7, bis = z[2] == null ? z[1] : z[2];
      svg += '<text x="' + (links - 10) + '" y="' + (y + 12) + '" class="tb" text-anchor="end">' + esc(z[0]) + "</text>" +
        '<rect x="' + links + '" y="' + y + '" width="' + (x(z[1]) - links) + '" height="16" rx="4" class="fa anim-wachsen" style="animation-delay:' + i * 120 + 'ms"/>' +
        (bis > z[1] ? '<rect x="' + x(z[1]) + '" y="' + y + '" width="' + (x(bis) - x(z[1])) + '" height="16" rx="4" class="fa o45 anim-wachsen" style="animation-delay:' + (i * 120 + 250) + 'ms"/>' : "") +
        (z[3] ? '<polygon points="' + (x(bis) + 2) + "," + y + " " + (x(bis) + 12) + "," + (y + 8) + " " + (x(bis) + 2) + "," + (y + 16) + '" class="fa o45"/>' : "") +
        '<text x="' + (x(bis) + (z[3] ? 18 : 8)) + '" y="' + (y + 12) + '" class="tm">' + esc(z[4] || "") + "</text>";
    });
    svg += '<text x="' + (links + breite / 2) + '" y="' + (oben + b.zeilen.length * zh + 36) + '" class="tm" text-anchor="middle">' + esc(b.einheit) + "</text>";
    return figur(640, oben + b.zeilen.length * zh + 44, b.alt, svg, b.text, b.titel);
  }

  // ---------- Seitenleiste ----------
  function zeichneNav(aktiv) {
    if (NUR_BUCH) {
      nav.innerHTML = '<details class="k-navbox" open><summary>' + tr("Kursbuch") + '</summary><div><div class="k-nav-extras">' +
        '<a href="#buch" class="k-nav-link k-nav-haupt' + (aktiv === "buch" ? " aktiv" : "") + '">' + tr("Kursbuch") + "</a>" +
        '<a href="#notizen" class="k-nav-link k-nav-haupt">' + tr("Meine Notizen ({n})", { n: anzahlNotizen() }) + "</a></div></div></details>";
      return;
    }
    var html = '<a href="#uebersicht" class="k-nav-link k-nav-haupt' + (aktiv === "uebersicht" ? " aktiv" : "") + '">' + tr("Übersicht") + '</a><ol class="k-nav-liste">';
    MODULE.forEach(function (m) {
      var status = stand.bestanden[m.nr] ? "bestanden" : modulOffen(m) ? "offen" : "gesperrt";
      html += '<li><a href="#modul-' + m.nr + '" class="k-nav-link k-' + status + (aktiv === m.nr ? " aktiv" : "") + '"><span class="n">' + zwei(m.nr) + "</span><span>" + esc(m.titel) + '</span><span class="k-status">' +
        (status === "bestanden" ? '<span aria-label="' + tr("bestanden") + '">✓</span>' : status === "gesperrt" ? '<span aria-label="' + tr("gesperrt") + '">–</span>' : erledigteLektionen(m) + "/" + m.lektionen.length) + "</span></a></li>";
    });
    html += '</ol><div class="k-nav-extras">' +
      '<a href="#fehler" class="k-nav-link k-nav-haupt' + (aktiv === "fehler" ? " aktiv" : "") + '">' + tr("Fehler-Training ({n})", { n: anzahlFehler() }) + "</a>" +
      '<a href="#simulation" class="k-nav-link k-nav-haupt' + (aktiv === "simulation" ? " aktiv" : "") + (simulationOffen() ? "" : " k-gesperrt") + '">' + tr("Prüfungssimulation") + (stand.simulation && stand.simulation.bestanden ? " ✓" : "") + "</a>" +
      (LABOR ? '<a href="#labor" class="k-nav-link k-nav-haupt' + (aktiv === "labor" ? " aktiv" : "") + '">' + tr("Praxislabor") + " (" + laborAnzahl() + "/" + laborAlle().length + ")</a>" : "") +
      '<a href="#buch" class="k-nav-link k-nav-haupt' + (aktiv === "buch" ? " aktiv" : "") + '">' + tr("Kursbuch") + "</a>" +
      '<a href="#glossar" class="k-nav-link k-nav-haupt' + (aktiv === "glossar" ? " aktiv" : "") + '">' + tr("Glossar") + "</a>" +
      '<a href="#checklisten" class="k-nav-link k-nav-haupt' + (aktiv === "checklisten" ? " aktiv" : "") + '">' + tr("Checklisten und Vorlagen") + "</a></div>";
    var war = nav.querySelector(".k-navbox");
    var auf = war ? war.open : window.matchMedia("(min-width: 861px)").matches;
    var erledigt = Object.keys(stand.erledigt).filter(function (k) { return stand.erledigt[k]; }).length;
    nav.innerHTML = '<details class="k-navbox"' + (auf ? " open" : "") + "><summary>" + tr("Kurs · {n} von {m} Lektionen", { n: erledigt, m: GESAMT_LEKTIONEN }) + "</summary><div>" + html + "</div></details>";
  }
  window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) { var d = nav.querySelector(".k-navbox"); if (d && e.matches) d.open = true; });

  // ---------- Übersicht ----------
  function uebersicht() {
    var erledigt = Object.keys(stand.erledigt).filter(function (k) { return stand.erledigt[k]; }).length;
    var html = '<section class="k-kopf"><p class="label">' + tr("Online-Kurs") + "</p><h1>" + tr("Dein Weg zum Bodypiercer") + "</h1>" +
      '<p class="lead">' + tr("{module} Module, {lektionen} Lektionen und {fragen} Fragen auf Grundlage des Kursbuchs „Die Piercing Akademie – Dein Weg zum Bodypiercer“.", { module: MODULE.length, lektionen: GESAMT_LEKTIONEN, fragen: GESAMT_FRAGEN }) + "</p></section>" +
      '<ol class="k-prinzip" aria-label="' + tr("So funktioniert der Kurs") + '"><li>' + tr("Erklärung lesen") + "</li><li>" + tr("Fragen beantworten") + "</li><li>" + tr("Nächste Lektion") + "</li><li>" + tr("Modulprüfung") + "</li><li>" + tr("Nächstes Modul") + "</li><li>" + tr("Prüfungssimulation") + "</li></ol>" +
      '<div class="k-box k-praxis"><strong>' + tr("Wissen ist nicht Können") + "</strong><p>" + tr("Der Online-Kurs ersetzt keine praktische Anleitung. Gestochen wird erst am Praxistag, unter Aufsicht. Steche nach dem Online-Kurs niemanden allein.") + (LABOR ? " " + tr('Die Handgriffe übst du vorher ohne zu stechen im <a href="#labor">Praxislabor</a>.') : "") + "</p></div>" +
      '<div class="k-fortschritt">' + balken(erledigt, GESAMT_LEKTIONEN, tr("Erledigte Lektionen")) +
      "<p>" + tr("<strong>{n} von {m}</strong> Lektionen", { n: erledigt, m: GESAMT_LEKTIONEN }) + " · " + tr("<strong>{n} von {m}</strong> Modulprüfungen bestanden", { n: anzahlBestanden(), m: MODULE.length }) + (stand.simulation && stand.simulation.bestanden ? " · " + tr("Prüfungssimulation bestanden") : "") + "</p></div>" +
      weiterLernen() + kitAngebot() + '<h2 class="k-h2">' + tr("Module") + '</h2><div class="k-modulraster">';
    MODULE.forEach(function (m) {
      var status = stand.bestanden[m.nr] ? "bestanden" : modulOffen(m) ? "offen" : "gesperrt";
      html += '<a class="k-modulkarte k-' + status + '" href="#modul-' + m.nr + '">' + titelbild(m, true) + '<span class="label">' + tr("Modul {nr}", { nr: zwei(m.nr) }) + (m.entwurf && stand.vorschau ? " · " + tr("Entwurf") : "") + "</span><strong>" + esc(m.titel) + "</strong>" +
        balken(erledigteLektionen(m), m.lektionen.length, tr("Lektionen in Modul {nr}", { nr: m.nr })) +
        '<span class="k-meta">' + tr("{n} von {m} Lektionen", { n: erledigteLektionen(m), m: m.lektionen.length }) + " · " + tr("{n} Fragen", { n: m.pool.length }) + " · " + (status === "bestanden" ? tr("Prüfung bestanden") : status === "offen" ? tr("offen") : tr("gesperrt")) + "</span></a>";
    });
    html += '</div><h2 class="k-h2">' + tr("Training und Nachschlagen") + '</h2><div class="k-modulraster">' +
      '<a class="k-modulkarte" href="#fehler"><span class="label">' + tr("Training") + "</span><strong>" + tr("Fehler-Training") + '</strong><span class="k-meta">' + tr("{n} Fragen, die du falsch beantwortet hast", { n: anzahlFehler() }) + "</span></a>" +
      '<a class="k-modulkarte' + (simulationOffen() ? "" : " k-gesperrt") + '" href="#simulation"><span class="label">' + tr("Abschluss") + "</span><strong>" + tr("Prüfungssimulation") + '</strong><span class="k-meta">' + tr("{n} Fragen aus allen Modulen", { n: simulationsUmfang() }) + (simulationOffen() ? "" : " · " + tr("öffnet nach allen Modulprüfungen")) + "</span></a>" +
      (LABOR ? '<a class="k-modulkarte" href="#labor"><span class="label">' + tr("Praxis") + "</span><strong>" + tr("Praxislabor") + '</strong><span class="k-meta">' + tr("{n} von {m} Übungen und Clips, wie gestochen wird", { n: laborAnzahl(), m: laborAlle().length }) + "</span></a>" : "") +
      '<a class="k-modulkarte" href="#buch"><span class="label">' + tr("Nachschlagen") + "</span><strong>" + tr("Kursbuch") + '</strong><span class="k-meta">' + tr("Online lesen, durchsuchen, eigene Notizen ({n})", { n: anzahlNotizen() }) + "</span></a>" +
      '<a class="k-modulkarte" href="#glossar"><span class="label">' + tr("Nachschlagen") + "</span><strong>" + tr("Glossar") + '</strong><span class="k-meta">' + tr("{n} Fachbegriffe", { n: (KURS.glossar || []).length }) + "</span></a>" +
      '<a class="k-modulkarte" href="#checklisten"><span class="label">' + tr("Praxis") + "</span><strong>" + tr("Checklisten und Vorlagen") + '</strong><span class="k-meta">' + tr("{n} Checklisten, {m} Druckvorlagen als PDF", { n: (KURS.checklisten || []).length, m: VORLAGEN.length }) + "</span></a></div>" +
      '<section class="k-einstellungen"><h2>' + tr("Prototyp-Einstellungen") + "</h2>" +
      '<label class="k-schalter"><input type="checkbox" id="k-vorschau"' + (stand.vorschau ? " checked" : "") + "> " + tr("Alle Module und Lektionen zum Durchsehen freischalten (Prüfmodus)") + "</label>" +
      '<div class="k-zuruecksetzen"><button type="button" class="btn ghost small" id="k-reset">' + tr("Fortschritt zurücksetzen") + '</button><span id="k-reset-frage" hidden> ' + tr("Wirklich alles löschen?") + ' <button type="button" class="btn small" id="k-reset-ja">' + tr("Ja, löschen") + '</button> <button type="button" class="btn ghost small" id="k-reset-nein">' + tr("Abbrechen") + "</button></span></div></section>";
    app.innerHTML = html;
    document.getElementById("k-vorschau").addEventListener("change", function (e) { stand.vorschau = e.target.checked; speichern(); zeige(); });
    var fr = document.getElementById("k-reset-frage");
    document.getElementById("k-reset").addEventListener("click", function () { fr.hidden = false; });
    document.getElementById("k-reset-nein").addEventListener("click", function () { fr.hidden = true; });
    document.getElementById("k-reset-ja").addEventListener("click", function () { var v = stand.vorschau; stand = leer(); stand.vorschau = v; speichern(); zeige(); });
  }

  // Praxiskit nach Kursabschluss: Pakete Basis und Praxis mit bestandener Prüfungssimulation (Komplett hat das Kit schon).
  // Den Rabatt rechnet der Server ab; die Bestellseite zeigt ihn nach der Anmeldung an.
  function kitAngebot() {
    var berechtigt = !KONTO || ["basis", "praxis"].indexOf(KONTO.paket) > -1;
    if (!berechtigt || !(stand.simulation && stand.simulation.bestanden)) return "";
    return '<div class="k-weiterlernen k-angebot k-nicht-drucken"><p><span class="label">' + tr("Für Kursteilnehmer 15 % günstiger") + "</span><br><strong>" + tr("Praxiskit für zu Hause: 84,15 € statt 99 €") + '</strong><br><span class="fine">' + tr("Silikonohr, Kanülen, Abwurfbehälter, Klemme und Übungsschmuck. Damit machst du die Stichübungen im Praxislabor selbst. Versandkostenfrei.") + '</span></p><a class="btn" href="' + website("/bestellen.html?paket=kit") + '" target="_top">' + tr("Praxiskit bestellen") + "</a></div>";
  }

  // Nächster sinnvoller Schritt für „Weiterlernen“
  function weiterLernen() {
    for (var k = 0; k < MODULE.length; k++) {
      var m = MODULE[k];
      if (!modulOffen(m)) break;
      for (var i = 0; i < m.lektionen.length; i++) {
        if (!lektionErledigt(m, i)) return '<div class="k-weiterlernen"><p><span class="label">' + tr("Weiterlernen") + "</span><br><strong>" + tr("Modul {nr}, Lektion {l}: {titel}", { nr: zwei(m.nr), l: i + 1, titel: esc(m.lektionen[i].titel) }) + '</strong></p><a class="btn" href="#lektion-' + m.nr + "-" + i + '">' + tr("Weiter") + "</a></div>";
      }
      if (!stand.bestanden[m.nr]) return '<div class="k-weiterlernen"><p><span class="label">' + tr("Weiterlernen") + "</span><br><strong>" + tr("Modulprüfung {nr}: {titel}", { nr: zwei(m.nr), titel: esc(m.titel) }) + '</strong></p><a class="btn" href="#pruefung-' + m.nr + '">' + tr("Zur Prüfung") + "</a></div>";
    }
    return "";
  }

  // ---------- Modulübersicht ----------
  function modulSeite(m) {
    if (!modulOffen(m)) {
      app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Modul {nr}", { nr: zwei(m.nr) }) + "</p><h1>" + esc(m.titel) + '</h1><p class="lead">' + tr("Dieses Modul öffnet sich, sobald du die Modulprüfung {nr} bestanden hast.", { nr: zwei(m.nr - 1) }) + '</p><p><a class="btn" href="#modul-' + (m.nr - 1) + '">' + tr("Zu Modul {nr}", { nr: zwei(m.nr - 1) }) + "</a></p></section>";
      return;
    }
    var html = '<section class="k-kopf"><p class="label">' + tr("Modul {nr} von {m}", { nr: zwei(m.nr), m: MODULE.length }) + (m.entwurf && stand.vorschau ? " · " + tr("Entwurf, fachlich prüfen") : "") + "</p><h1>" + esc(m.titel) + '</h1><p class="lead">' + esc(m.ziel) + '</p><p class="fine">' + tr("Quelle:") + " " + esc(m.quelle) + "</p></section>" + titelbild(m, false) +
      '<div class="k-fortschritt">' + balken(erledigteLektionen(m), m.lektionen.length, tr("Lektionen")) + "<p>" + tr("<strong>{n} von {m}</strong> Lektionen erledigt", { n: erledigteLektionen(m), m: m.lektionen.length }) + "</p></div>" +
      '<ol class="k-lektionsliste">';
    m.lektionen.forEach(function (l, i) {
      var st = lektionErledigt(m, i) ? "erledigt" : lektionOffen(m, i) ? "offen" : "gesperrt";
      html += '<li class="k-' + st + '"><a href="#lektion-' + m.nr + "-" + i + '"' + (st === "gesperrt" ? ' aria-disabled="true"' : "") + '><span class="n">' + (i + 1) + "</span><span><strong>" + esc(l.titel) + "</strong>" +
        '<span class="k-meta">' + tr("{n} Fragen", { n: l.alleFragen.length }) + (l.seite && l.seite !== "Entwurf" ? " · " + tr("Kursbuch") + " " + esc(seiteText(l.seite)) : "") + (l.entwurf && stand.vorschau ? " · " + tr("Entwurf") : "") + '</span></span><span class="k-status">' + (st === "erledigt" ? "✓" : st === "gesperrt" ? tr("gesperrt") : tr("offen")) + "</span></a></li>";
    });
    html += "</ol>" +
      '<section class="k-lektion"><h2>' + tr("Modulprüfung") + "</h2><p>" + tr("{n} zufällige Fragen aus allen {m} Fragen dieses Moduls. Bestanden ab {b} richtigen Antworten.", { n: Math.min(FRAGEN_JE_PRUEFUNG, m.pool.length), m: m.pool.length, b: benoetigt(Math.min(FRAGEN_JE_PRUEFUNG, m.pool.length)) }) +
      (stand.bestanden[m.nr] ? " <strong>" + tr("Bestanden ({n} von {m}).", { n: stand.bestanden[m.nr].richtig, m: stand.bestanden[m.nr].gesamt }) + "</strong>" : "") + "</p>" +
      (pruefungOffen(m) ? '<p><a class="btn" href="#pruefung-' + m.nr + '">' + tr("Modulprüfung starten") + "</a></p>" : '<p class="fine">' + tr("Die Prüfung öffnet sich, wenn du alle Lektionen des Moduls erledigt hast.") + "</p>") + "</section>" +
      '<section class="k-lektion"><h2>' + tr("Übungen zum Modul") + "</h2><p>" + tr("Aufgaben für die Praxis. Abgehakt wird nur für dich.") + '</p><ul class="k-aufgaben">' +
      m.uebung.map(function (u, i) { var key = m.nr + "-" + i; return '<li><label><input type="checkbox" data-uebung="' + key + '"' + (stand.uebung[key] ? " checked" : "") + "> " + esc(u) + "</label></li>"; }).join("") + "</ul></section>";
    app.innerHTML = html;
    app.querySelectorAll("[data-uebung]").forEach(function (c) { c.addEventListener("change", function () { stand.uebung[c.dataset.uebung] = c.checked; speichern(); }); });
  }

  // ---------- Lektion: erst Erklärung, dann Pflichtfragen ----------
  // Prüfmodus: alle Fragen der Lektion mit Lösung zum Durchsehen, und Blättern zur vorigen und nächsten Lektion
  function loesungen(l) {
    return '<details class="k-loesungen"><summary>' + tr("Prüfmodus: alle {n} Fragen dieser Lektion mit Lösung ansehen", { n: l.alleFragen.length }) + "</summary><ol>" +
      l.alleFragen.map(function (f) {
        return "<li><p><strong>" + esc(f.frage) + '</strong></p><ul><li class="k-richtig">✓ ' + esc(f.antworten[0]) + "</li>" +
          f.antworten.slice(1).map(function (a) { return '<li class="k-falsch-antw">✕ ' + esc(a) + "</li>"; }).join("") + "</ul>" +
          (f.erklaerung ? '<p class="fine">' + esc(f.erklaerung) + (f.seite ? " · " + esc(f.seite === "Entwurf" ? tr("Entwurf") : seiteText(f.seite)) : "") + "</p>" : "") + "</li>";
      }).join("") + "</ol></details>";
  }
  function blaettern(m, i) {
    var mi = MODULE.indexOf(m), vor = i > 0 ? [m, i - 1] : mi > 0 ? [MODULE[mi - 1], MODULE[mi - 1].lektionen.length - 1] : null;
    var nach = i < m.lektionen.length - 1 ? [m, i + 1] : mi < MODULE.length - 1 ? [MODULE[mi + 1], 0] : null;
    function link(z, text) { return z ? '<a class="btn ghost" href="#lektion-' + z[0].nr + "-" + z[1] + '">' + text + "</a>" : "<span></span>"; }
    return '<nav class="k-blaettern" aria-label="' + tr("Lektionen blättern") + '">' + link(vor, tr("← Vorige Lektion")) + link(nach, tr("Nächste Lektion →")) + "</nav>";
  }

  function lektionSeite(m, i) {
    var l = m.lektionen[i];
    if (!lektionOffen(m, i)) {
      app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Modul {nr}", { nr: zwei(m.nr) }) + " · " + tr("Lektion {n}", { n: i + 1 }) + "</p><h1>" + esc(l.titel) + '</h1><p class="lead">' + (modulOffen(m) ? tr("Diese Lektion öffnet sich, sobald du die vorige Lektion abgeschlossen hast.") : tr("Dieses Modul ist noch gesperrt.")) + '</p><p><a class="btn" href="#modul-' + m.nr + '">' + tr("Zur Modulübersicht") + "</a></p></section>";
      return;
    }
    var html = '<section class="k-kopf"><p class="label"><a href="#modul-' + m.nr + '">' + tr("Modul {nr}", { nr: zwei(m.nr) }) + " · " + esc(m.titel) + "</a> · " + tr("Lektion {n} von {m}", { n: i + 1, m: m.lektionen.length }) + (l.entwurf && stand.vorschau ? " · " + tr("Entwurf") : "") + "</p><h1>" + esc(l.titel) + "</h1>" +
      (l.seite ? '<p class="fine">' + (l.seite === "Entwurf" ? tr("Ergänzung der Akademie") : tr("Im Kursbuch nachlesen:") + " " + buchLink(l.seite)) + "</p>" : "") + "</section>" +
      '<ol class="k-phasen" aria-label="' + tr("Ablauf der Lektion") + '"><li class="aktiv" id="phase-1"><span class="n">1</span>' + tr("Erklärung") + '</li><li id="phase-2"><span class="n">2</span>' + tr("Fragen ({n})", { n: l.alleFragen.length }) + '</li><li id="phase-3"><span class="n">3</span>' + tr("Geschafft") + "</li></ol>" +
      '<article class="k-lektion" id="erklaerung">' + l.inhalt.map(block).join("") + "</article>" +
      '<div class="k-weiter" id="start-bereich"><button type="button" class="btn" id="fragen-start">' + tr("Erklärung gelesen: Fragen starten") + "</button>" + (lektionErledigt(m, i) ? ' <span class="fine">' + tr("Diese Lektion hast du schon abgeschlossen. Du kannst die Fragen zur Wiederholung noch einmal beantworten.") + "</span>" : "") + "</div>" +
      '<section class="k-quiz" id="quiz" hidden aria-live="polite"></section>' +
      (stand.vorschau ? loesungen(l) + blaettern(m, i) : "");
    app.innerHTML = html;
    document.getElementById("fragen-start").addEventListener("click", function () {
      document.getElementById("start-bereich").hidden = true;
      document.getElementById("phase-1").classList.remove("aktiv"); document.getElementById("phase-2").classList.add("aktiv");
      var quiz = document.getElementById("quiz"); quiz.hidden = false;
      fragenRunde(quiz, l.alleFragen, {
        titel: tr("Fragen zur Lektion"),
        fertig: function (statistik) {
          stand.erledigt[m.nr + "-" + i] = true; speichern(); zeichneNav(m.nr);
          document.getElementById("phase-2").classList.remove("aktiv"); document.getElementById("phase-3").classList.add("aktiv");
          var naechste = i + 1 < m.lektionen.length;
          return "<h2>" + tr("Lektion geschafft") + "</h2><p>" + (statistik.fehler ? tr("Du hast alle {n} Fragen richtig beantwortet.", { n: l.alleFragen.length }) + " " + (statistik.fehler === 1 ? tr("Eine Frage brauchte einen zweiten Anlauf; sie steht jetzt im Fehler-Training.") : tr("{n} Fragen brauchten einen zweiten Anlauf; sie stehen jetzt im Fehler-Training.", { n: statistik.fehler })) : tr("Du hast alle {n} Fragen richtig beantwortet, alle beim ersten Versuch.", { n: l.alleFragen.length })) + "</p>" +
            '<p class="k-test-aktionen">' + (naechste ? '<a class="btn" href="#lektion-' + m.nr + "-" + (i + 1) + '">' + tr("Nächste Lektion: {titel}", { titel: esc(m.lektionen[i + 1].titel) }) + "</a>" : '<a class="btn" href="#pruefung-' + m.nr + '">' + tr("Zur Modulprüfung") + "</a>") +
            ' <a class="btn ghost" href="#modul-' + m.nr + '">' + tr("Zur Modulübersicht") + "</a></p>";
        }
      });
      quiz.scrollIntoView({ block: "start" });
    });
  }

  // Fragen einzeln stellen; falsche Antworten kommen ans Ende der Runde und ins Fehler-Training
  function fragenRunde(ziel, fragen, opt) {
    var warteschlange = mischen(fragen);
    var richtigGezaehlt = 0, fehler = 0, versuche = 0, schonFalsch = {};
    function naechste() {
      if (!warteschlange.length) { ziel.innerHTML = '<div class="k-lektion k-geschafft">' + opt.fertig({ fehler: fehler, versuche: versuche }) + "</div>"; ziel.querySelector("h2").setAttribute("tabindex", "-1"); ziel.querySelector("h2").focus(); return; }
      var f = gemischt(warteschlange[0]);
      ziel.innerHTML = '<div class="k-lektion"><div class="k-quizkopf"><h2>' + esc(opt.titel) + '</h2><span class="label">' + tr("{n} von {m} richtig", { n: richtigGezaehlt, m: fragen.length }) + "</span></div>" + balken(richtigGezaehlt, fragen.length, tr("Richtig beantwortet")) +
        '<form class="k-einzelfrage" novalidate><fieldset class="k-frage"><legend>' + esc(f.frage) + "</legend>" +
        f.antworten.map(function (a, j) { return '<label><input type="radio" name="antwort" value="' + j + '"> ' + esc(a) + "</label>"; }).join("") +
        '</fieldset><p class="err" hidden>' + tr("Bitte wähle eine Antwort.") + '</p><div class="k-rueckmeldung" hidden></div>' +
        '<div class="k-test-aktionen"><button type="submit" class="btn">' + tr("Antwort prüfen") + '</button><button type="button" class="btn" data-weiter hidden>' + tr("Weiter") + "</button></div></form></div>";
      var form = ziel.querySelector("form"), err = form.querySelector(".err"), rm = form.querySelector(".k-rueckmeldung");
      var weiter = form.querySelector("[data-weiter]"), pruefen = form.querySelector('[type="submit"]');
      form.querySelector("legend").setAttribute("tabindex", "-1");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var wahl = form.querySelector('input[name="antwort"]:checked');
        if (!wahl) { err.hidden = false; return; }
        err.hidden = true; versuche++;
        var ok = Number(wahl.value) === f.richtig;
        warteschlange.shift();
        if (ok) {
          richtigGezaehlt++;
          if (opt.richtig) opt.richtig(f);
        } else {
          warteschlange.push(f); // falsche Frage kommt am Ende der Runde erneut
          if (!schonFalsch[f.frage]) { fehler++; schonFalsch[f.frage] = true; }
          merkeFehler(f); speichern();
        }
        form.querySelector(".k-frage").classList.add(ok ? "k-richtig" : "k-falsch");
        form.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
        rm.hidden = false;
        rm.innerHTML = (ok ? "<strong>" + tr("Richtig.") + "</strong> " : "<strong>" + tr("Nicht richtig.") + "</strong> " + tr("Richtig ist: „{antwort}“.", { antwort: esc(f.antworten[f.richtig]) }) + " " + tr("Die Frage kommt am Ende noch einmal.") + " ") + esc(f.erklaerung) +
          (f.seite ? ' <span class="label">' + buchLink(f.seite) + "</span>" : "") + (opt.hinweis ? "<br><em>" + esc(opt.hinweis(f, ok)) + "</em>" : "");
        pruefen.hidden = true; weiter.hidden = false; weiter.focus();
      });
      weiter.addEventListener("click", naechste);
    }
    naechste();
  }

  // ---------- Prüfungen (Modulprüfung, Simulation): alle Fragen auf einmal, dann Auswertung ----------
  function pruefungsFormular(fragen, titel, hinweis) {
    return '<form class="k-test" novalidate><h2>' + esc(titel) + "</h2><p>" + esc(hinweis) + "</p>" +
      fragen.map(function (f, i) {
        return '<fieldset class="k-frage" data-index="' + i + '"><legend><span class="n">' + (i + 1) + "</span>" + esc(f.frage) + "</legend>" +
          f.antworten.map(function (a, j) { return '<label><input type="radio" name="f' + i + '" value="' + j + '"> ' + esc(a) + "</label>"; }).join("") + '<p class="k-rueckmeldung" hidden></p></fieldset>';
      }).join("") +
      '<p class="err" hidden>' + tr("Bitte beantworte alle Fragen.") + '</p><div class="k-test-aktionen"><button type="submit" class="btn">' + tr("Auswerten") + '</button><button type="button" class="btn ghost" data-neu hidden>' + tr("Neue Prüfung") + "</button></div>" +
      '<div class="status k-ergebnis" role="status" tabindex="-1" hidden></div></form>';
  }
  function bindePruefung(form, fragen, auswerten) {
    var ergebnis = form.querySelector(".k-ergebnis"), fehlerText = form.querySelector(".err");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var antworten = fragen.map(function (f, i) { var r = form.querySelector('input[name="f' + i + '"]:checked'); return r ? Number(r.value) : null; });
      var fehlt = antworten.indexOf(null);
      if (fehlt !== -1) { fehlerText.hidden = false; form.querySelectorAll('input[name="f' + fehlt + '"]')[0].focus(); return; }
      fehlerText.hidden = true;
      var richtig = 0;
      fragen.forEach(function (f, i) {
        var ok = antworten[i] === f.richtig;
        if (ok) richtig++; else merkeFehler(f);
        var feld = form.querySelector('.k-frage[data-index="' + i + '"]');
        feld.classList.add(ok ? "k-richtig" : "k-falsch");
        var r = feld.querySelector(".k-rueckmeldung"); r.hidden = false;
        r.innerHTML = (ok ? "<strong>" + tr("Richtig.") + "</strong> " : "<strong>" + tr("Nicht richtig.") + "</strong> " + tr("Richtig ist: „{antwort}“.", { antwort: esc(f.antworten[f.richtig]) }) + " ") + esc(f.erklaerung) + ' <span class="label">' + buchLink(f.seite || "") + " · " + tr("Modul {nr}", { nr: zwei(f.modul) }) + "</span>";
      });
      speichern();
      form.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
      form.querySelector('[type="submit"]').hidden = true; form.querySelector("[data-neu]").hidden = false;
      ergebnis.hidden = false; ergebnis.innerHTML = auswerten(richtig, fragen.length, antworten); ergebnis.focus();
    });
    form.querySelector("[data-neu]").addEventListener("click", function () { zeige(); window.scrollTo(0, 0); });
  }

  function pruefungSeite(m) {
    if (!pruefungOffen(m)) {
      app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Modul {nr}", { nr: zwei(m.nr) }) + "</p><h1>" + tr("Modulprüfung") + '</h1><p class="lead">' + tr("Die Prüfung öffnet sich, wenn du alle Lektionen des Moduls erledigt hast ({n} von {m}).", { n: erledigteLektionen(m), m: m.lektionen.length }) + '</p><p><a class="btn" href="#modul-' + m.nr + '">' + tr("Zur Modulübersicht") + "</a></p></section>";
      return;
    }
    var fragen = mischen(m.pool).slice(0, FRAGEN_JE_PRUEFUNG).map(gemischt);
    app.innerHTML = '<section class="k-kopf"><p class="label"><a href="#modul-' + m.nr + '">' + tr("Modul {nr}", { nr: zwei(m.nr) }) + " · " + esc(m.titel) + "</a></p><h1>" + tr("Modulprüfung") + "</h1></section>" +
      pruefungsFormular(fragen, tr("{n} Fragen", { n: fragen.length }), tr("Zufällig aus {n} Fragen gezogen. Bestanden ab {b} richtigen Antworten", { n: m.pool.length, b: benoetigt(fragen.length, quote(m.nr)) }) + (STRENG[m.nr] ? " (" + tr("{p}: {thema} ist sicherheitsrelevant, deshalb gilt hier eine höhere Hürde", { p: prozent(quote(m.nr)), thema: tr(STRENG[m.nr].kurz) }) + ")" : "") + ". " + tr("Jede neue Prüfung stellt andere Fragen."));
    bindePruefung(app.querySelector("form.k-test"), fragen, function (richtig, gesamt) {
      var ok = richtig >= benoetigt(gesamt, quote(m.nr));
      if (ok) { stand.bestanden[m.nr] = { richtig: richtig, gesamt: gesamt }; speichern(); }
      zeichneNav(m.nr);
      var n = modul(m.nr + 1);
      return ok
        ? "<strong>" + tr("Bestanden: {n} von {m} richtig.", { n: richtig, m: gesamt }) + "</strong> " + (n ? tr("Modul {nr} ist jetzt offen.", { nr: zwei(n.nr) }) + ' <a class="btn small" href="#lektion-' + n.nr + '-0">' + tr("Weiter mit Modul {nr}", { nr: zwei(n.nr) }) + "</a>" : tr("Alle Module sind geschafft.") + ' <a class="btn small" href="#simulation">' + tr("Zur Prüfungssimulation") + "</a>")
        : "<strong>" + tr("Noch nicht bestanden: {n} von {m} richtig.", { n: richtig, m: gesamt }) + "</strong> " + tr("Du brauchst {b}.", { b: benoetigt(gesamt, quote(m.nr)) }) + " " + tr('Übe die falschen Fragen im <a href="#fehler">Fehler-Training</a> und starte dann eine neue Prüfung.');
    });
  }

  function simulationSeite() {
    if (!simulationOffen()) {
      app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Abschluss") + "</p><h1>" + tr("Prüfungssimulation") + '</h1><p class="lead">' + tr("Die Simulation öffnet sich, wenn du alle {n} Modulprüfungen bestanden hast. Bisher: {b}.", { n: MODULE.length, b: anzahlBestanden() }) + '</p><p><a class="btn" href="#uebersicht">' + tr("Zur Übersicht") + "</a></p></section>";
      return;
    }
    var fragen = [];
    MODULE.forEach(function (m) { fragen = fragen.concat(mischen(m.pool).slice(0, STRENG[m.nr] ? STRENG[m.nr].simFragen : SIMULATION_JE_MODUL).map(gemischt)); });
    fragen = mischen(fragen);
    var bloecke = Object.keys(STRENG).filter(function (nr) { return modul(+nr); }).map(function (nr) {
      return { nr: +nr, kurz: STRENG[nr].kurz, maxFehler: STRENG[nr].simMaxFehler, fragen: fragen.filter(function (f) { return f.modul === +nr; }) };
    });
    var bedingung = bloecke.map(function (b) { return tr("{thema} ({n} Fragen) höchstens {fehler}", { thema: tr(b.kurz), n: b.fragen.length, fehler: b.maxFehler === 1 ? tr("ein Fehler") : tr("{n} Fehler", { n: b.maxFehler }) }); }).join(", ");
    app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Abschluss") + "</p><h1>" + tr("Prüfungssimulation") + '</h1><p class="lead">' + tr("Wie die Abschlussprüfung: {n} Fragen aus allen Modulen, bestanden ab {b} richtigen Antworten.", { n: fragen.length, b: benoetigt(fragen.length) }) + " " + tr("Zusätzlich gilt für die Sicherheitsthemen:") + " " + esc(bedingung) + ".</p>" +
      (stand.simulation ? '<p class="fine">' + (stand.simulation.bestanden ? tr("Bestes Ergebnis: {n} von {m}, bestanden.", { n: stand.simulation.richtig, m: stand.simulation.gesamt }) + ' <a href="#bescheinigung">' + tr("Zur Bescheinigung") + "</a>" : tr("Letzter Versuch: {n} von {m}.", { n: stand.simulation.richtig, m: stand.simulation.gesamt })) + "</p>" : "") + "</section>" +
      pruefungsFormular(fragen, tr("Alle Module"), tr("Beantworte jede Frage. Die Auswertung zeigt dir zu jeder Frage die Erklärung und das Modul."));
    bindePruefung(app.querySelector("form.k-test"), fragen, function (richtig, gesamt, antworten) {
      var verfehlt = bloecke.filter(function (b) {
        var falsch = b.fragen.filter(function (f) { return antworten[fragen.indexOf(f)] !== f.richtig; }).length;
        b.falsch = falsch; return falsch > b.maxFehler;
      });
      var gesamtOk = richtig >= benoetigt(gesamt);
      var ok = gesamtOk && !verfehlt.length;
      var vorher = stand.simulation && stand.simulation.bestanden ? stand.simulation : null;
      stand.simulation = ok && (!vorher || richtig > vorher.richtig)
        ? { richtig: richtig, gesamt: gesamt, bestanden: true, datum: new Date().toISOString().slice(0, 10) }
        : vorher || { richtig: richtig, gesamt: gesamt, bestanden: false };
      speichern(); zeichneNav("simulation");
      return ok
        ? "<strong>" + tr("Bestanden: {n} von {m} richtig.", { n: richtig, m: gesamt }) + "</strong> " + tr("Glückwunsch! Deine Bescheinigung über den Online-Teil kannst du jetzt erstellen.") + '</p><p><a class="btn" href="#bescheinigung">' + tr("Bescheinigung erstellen") + "</a>"
        : "<strong>" + tr("Noch nicht bestanden: {n} von {m} richtig.", { n: richtig, m: gesamt }) + "</strong> " +
          (gesamtOk ? "" : tr("Du brauchst {b}.", { b: benoetigt(gesamt) }) + " ") +
          verfehlt.map(function (b) { return esc(tr(b.kurz)) + ": " + (b.maxFehler === 1 ? tr("{n} Fehler, erlaubt ist einer.", { n: b.falsch }) : tr("{n} Fehler, erlaubt sind {m}.", { n: b.falsch, m: b.maxFehler })) + " "; }).join("") +
          tr('Übe im <a href="#fehler">Fehler-Training</a> und versuch es noch einmal.');
    });
  }

  // ---------- Fehler-Training ----------
  function fehlerSeite() {
    var liste = Object.keys(stand.fehler).filter(function (k) { return ALLE_FRAGEN[k]; }).map(function (k) { return ALLE_FRAGEN[k]; });
    var kopf = '<section class="k-kopf"><p class="label">' + tr("Training") + "</p><h1>" + tr("Fehler-Training") + '</h1><p class="lead">' + tr("Hier sammeln sich alle Fragen, die du in Lektionen oder Prüfungen falsch beantwortet hast. Eine Frage verschwindet erst, wenn du sie in zwei verschiedenen Runden richtig beantwortet hast. Ein neuer Fehler setzt das wieder auf null.") + "</p></section>";
    if (!liste.length) { app.innerHTML = kopf + '<div class="k-lektion"><p><strong>' + tr("Keine offenen Fehler.") + "</strong> " + tr("Sobald du eine Frage falsch beantwortest, kannst du sie hier wiederholen.") + "</p></div>"; return; }
    app.innerHTML = kopf + '<section class="k-quiz" id="quiz"></section>';
    fragenRunde(document.getElementById("quiz"), liste.slice(0, 20), {
      titel: liste.length > 20 ? tr("20 von {n} Fehlerfragen", { n: liste.length }) : tr("{n} Fehlerfragen", { n: liste.length }),
      richtig: function (f) {
        var n = (stand.fehlerRichtig[f.frage] || 0) + 1;
        if (n >= FEHLER_RICHTIG_NOETIG) { delete stand.fehler[f.frage]; delete stand.fehlerRichtig[f.frage]; } else stand.fehlerRichtig[f.frage] = n;
        speichern(); zeichneNav("fehler");
      },
      hinweis: function (f, ok) {
        if (!ok) return " " + tr("Zurück auf null: Du musst sie noch {n}-mal richtig beantworten.", { n: FEHLER_RICHTIG_NOETIG });
        return " " + (stand.fehler[f.frage] ? tr("Noch einmal richtig in einer späteren Runde, dann ist sie erledigt.") : tr("Zweimal richtig: erledigt."));
      },
      fertig: function () {
        var rest = anzahlFehler();
        return "<h2>" + tr("Runde geschafft") + "</h2><p>" + (rest ? tr("Noch {n} Fragen im Fehler-Training.", { n: rest }) : tr("Alle Fehlerfragen sind erledigt.")) + '</p><p class="k-test-aktionen">' + (rest ? '<button type="button" class="btn" id="noch-eine">' + tr("Nächste Runde") + "</button> " : "") + '<a class="btn ghost" href="#uebersicht">' + tr("Zur Übersicht") + "</a></p>";
      }
    });
    app.addEventListener("click", function h(e) { if (e.target && e.target.id === "noch-eine") { app.removeEventListener("click", h); fehlerSeite(); } });
  }

  // ---------- Bescheinigung über den Online-Teil ----------
  function pruefnummer(name, datum, richtig) {
    var s = name.trim().toLowerCase() + "|" + datum + "|" + richtig, h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return "PA-" + datum.slice(0, 4) + "-" + ("00000000" + h.toString(36).toUpperCase()).slice(-6);
  }
  function bescheinigungSeite() {
    var sim = stand.simulation;
    if (!sim || !sim.bestanden) {
      app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Abschluss") + "</p><h1>" + tr("Bescheinigung") + '</h1><p class="lead">' + tr("Die Bescheinigung über den Online-Teil kannst du erstellen, sobald du die Prüfungssimulation bestanden hast.") + '</p><p><a class="btn" href="#simulation">' + tr("Zur Prüfungssimulation") + "</a></p></section>";
      return;
    }
    var datum = sim.datum || new Date().toISOString().slice(0, 10);
    var ausgestellt = KONTO && KONTO.bescheinigung;
    var name = (ausgestellt && ausgestellt.name) || stand.name || (KONTO && KONTO.name) || "";
    if (ausgestellt) datum = ausgestellt.datum;
    app.innerHTML = '<section class="k-kopf k-nicht-drucken"><p class="label">' + tr("Abschluss") + "</p><h1>" + tr("Bescheinigung über den Online-Teil") + '</h1><p class="lead">' + tr("Trag deinen Namen so ein, wie er auf der Bescheinigung stehen soll. Über „Drucken“ kannst du sie ausdrucken oder als PDF speichern.") + "</p>" +
      '<div class="field k-suche"><label for="b-name">' + tr("Vor- und Nachname") + '</label><input id="b-name" type="text" autocomplete="name" maxlength="60" value="' + esc(name) + '"' + (ausgestellt ? " readonly" : "") + "></div>" +
      (KONTO && !ausgestellt ? '<p class="fine">' + tr("Beim ersten Drucken wird die Bescheinigung mit diesem Namen ausgestellt und eine prüfbare Nummer vergeben. Danach lässt sich der Name nicht mehr ändern.") + "</p>" : "") +
      '<p><button type="button" class="btn" id="b-drucken">' + tr("Drucken oder als PDF speichern") + "</button></p></section>" + kitAngebot() +
      '<article class="k-urkunde" aria-label="' + tr("Bescheinigung") + '">' +
        '<div class="k-urkunde-kopf"><img src="' + (document.querySelector(".brand img") || {}).src + '" alt="" width="44" height="44"><span>Piercing Akademie</span></div>' +
        '<p class="label">' + tr("Bescheinigung") + "</p><h2>" + tr("Online-Kurs erfolgreich abgeschlossen") + "</h2>" +
        '<p class="k-urkunde-name" id="b-ausgabe">' + (esc(name) || tr("Dein Name")) + "</p>" +
        "<p>" + tr("hat alle {n} Module des Online-Kurses der Piercing Akademie bearbeitet, jede Modulprüfung bestanden (Hygiene sowie Ablauf und Notfälle mit mindestens 85 %) und die Prüfungssimulation mit <strong>{r} von {g}</strong> richtigen Antworten abgeschlossen.", { n: MODULE.length, r: sim.richtig, g: sim.gesamt }) + "</p>" +
        '<ul class="k-urkunde-module">' + MODULE.map(function (m) { return "<li>" + zwei(m.nr) + " " + esc(m.titel) + "</li>"; }).join("") + "</ul>" +
        '<div class="k-urkunde-fuss"><div><span>' + datumText(new Date(datum + "T12:00:00"), { day: "numeric", month: "long", year: "numeric" }) + "</span>" + tr("Datum") + '</div><div><span id="b-nr">' + (ausgestellt ? esc(ausgestellt.nr) : KONTO ? tr("wird vergeben") : pruefnummer(name, datum, sim.richtig)) + "</span>" + tr("Nummer") + "</div><div><span>Alessandro Noto</span>" + tr("Piercing Akademie, Lingen (Ems)") + "</div></div>" +
        (KONTO ? '<p class="fine" id="b-pruefen">' + (ausgestellt ? tr("Prüfbar unter {adresse}", { adresse: "piercingakademie.de/pruefen?nr=" + esc(ausgestellt.nr) }) : "") + "</p>" : "") +
        '<p class="fine">' + tr("Die Bescheinigung bestätigt den theoretischen Online-Teil. Sie ist kein staatlich anerkannter Abschluss und keine behördliche Erlaubnis. Das Zertifikat der Piercing Akademie erhältst du nach den Praxistagen im Studio.") + "</p>" +
      "</article>";
    var feld = document.getElementById("b-name");
    feld.addEventListener("input", function () {
      if (ausgestellt) return;
      stand.name = feld.value.trim(); speichern();
      document.getElementById("b-ausgabe").textContent = stand.name || tr("Dein Name");
      if (!KONTO) document.getElementById("b-nr").textContent = pruefnummer(stand.name, datum, sim.richtig);
    });
    document.getElementById("b-drucken").addEventListener("click", function () {
      if (!feld.value.trim()) { feld.focus(); feld.setAttribute("aria-invalid", "true"); return; }
      feld.removeAttribute("aria-invalid");
      if (!KONTO || ausgestellt) { window.print(); return; }
      // Auf dem Server: Bescheinigung einmalig ausstellen lassen (Nummer ist dann unter /pruefen nachprüfbar)
      serverSpeichern(true);
      setTimeout(function () {
        fetch("/api/bescheinigung", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: feld.value.trim() }), credentials: "same-origin" })
          .then(function (r) { return r.json(); })
          .then(function (b) {
            if (!b.nr) { alert(tr("Die Bescheinigung konnte nicht ausgestellt werden. Bitte versuche es später noch einmal.")); return; }
            KONTO.bescheinigung = b; bescheinigungSeite(); window.print();
          });
      }, 600);
    });
  }

  // ---------- Glossar und Checklisten ----------
  function glossarSeite() {
    var g = (KURS.glossar || []).slice().sort(function (a, b) { return a[0].localeCompare(b[0], SPRACHE); });
    app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Nachschlagen") + "</p><h1>" + tr("Glossar") + '</h1><p class="lead">' + tr("{n} Fachbegriffe aus dem Kurs, mit dem Modul, in dem sie erklärt werden.", { n: g.length }) + "</p></section>" +
      '<div class="field k-suche"><label for="g-suche">' + tr("Begriff suchen") + '</label><input id="g-suche" type="search" autocomplete="off"></div><dl class="k-glossar" id="g-liste">' +
      g.map(function (e) { return '<div data-text="' + esc((e[0] + " " + e[1]).toLowerCase()) + '"><dt>' + esc(e[0]) + "</dt><dd>" + esc(e[1]) + ' <a class="label" href="#modul-' + e[2] + '">' + tr("Modul {nr}", { nr: zwei(e[2]) }) + "</a></dd></div>"; }).join("") + '</dl><p class="fine" id="g-leer" hidden>' + tr("Kein Begriff gefunden.") + "</p>";
    var feld = document.getElementById("g-suche");
    feld.addEventListener("input", function () {
      var q = feld.value.trim().toLowerCase(), n = 0;
      document.querySelectorAll("#g-liste > div").forEach(function (d) { var t = d.dataset.text.indexOf(q) !== -1; d.hidden = !t; if (t) n++; });
      document.getElementById("g-leer").hidden = n > 0;
    });
  }
  function checklistenSeite() {
    var cl = KURS.checklisten || [];
    app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Praxis") + "</p><h1>" + tr("Checklisten und Vorlagen") + '</h1><p class="lead">' + tr("Für den Studioalltag. Abgehakt wird nur für dich und nur in diesem Browser.") + "</p></section>" +
      '<section class="k-lektion"><h2>' + tr("Vorlagen zum Ausdrucken") + "</h2><p>" + tr("Druckfertig als PDF. Pass sie an dein Studio an; Einverständniserklärung und Hygieneplan lässt du vor dem Einsatz prüfen (Anwalt bzw. Gesundheitsamt).") + '</p><ul class="k-vorlagen">' +
        VORLAGEN.map(function (v) { return '<li><a href="' + v[0] + '" download>' + esc(tr(v[1])) + deutschZusatz() + '</a><span class="fine">' + esc(tr(v[2])) + "</span></li>"; }).join("") + "</ul></section>" +
      cl.map(function (c, ci) {
        return '<section class="k-lektion"><h2>' + esc(c.titel) + '</h2><p class="fine">' + tr("Aus Modul {nr}", { nr: zwei(c.modul) }) + '</p><ul class="k-aufgaben">' +
          c.punkte.map(function (p, pi) { var key = ci + "-" + pi; return '<li><label><input type="checkbox" data-check="' + key + '"' + (stand.check[key] ? " checked" : "") + "> " + esc(p) + "</label></li>"; }).join("") +
          '</ul><button type="button" class="btn ghost small" data-leeren="' + ci + '">' + tr("Haken entfernen") + "</button></section>";
      }).join("");
    app.querySelectorAll("[data-check]").forEach(function (c) { c.addEventListener("change", function () { stand.check[c.dataset.check] = c.checked; speichern(); }); });
    app.querySelectorAll("[data-leeren]").forEach(function (b) { b.addEventListener("click", function () { Object.keys(stand.check).forEach(function (k) { if (k.indexOf(b.dataset.leeren + "-") === 0) delete stand.check[k]; }); speichern(); checklistenSeite(); }); });
  }

  // ---------- Praxislabor: Übungen am Silikon-Übungsmodell mit Selbstkontrolle ----------
  function laborSeite() {
    var L = LABOR, ST = stichOffen() ? L.stich : null;
    function aufgabe(a, nr) {
      var fertig = laborErledigt(a), film = "";
      if (a.clip && CLIPS[a.clip]) film = clip({ id: a.clip, text: a.clipText || a.titel, titel: tr("Clip: {titel}", { titel: a.titel }) });
      else if (a.clip && stand.vorschau) film = '<p class="k-box k-ergaenzung"><strong>' + tr("Clip fehlt noch") + "</strong> „" + esc(a.clip) + "“: " + esc(a.clipText || "") + " (" + tr("siehe Drehliste CLIPS-PRAXISLABOR.md") + ")</p>";
      return '<section class="k-lektion k-labor' + (fertig ? " k-labor-fertig" : "") + '" id="labor-' + a.id + '"><p class="label">' + nr + " · " + tr('passt zu <a href="#modul-{m}">Modul {nr}</a>', { m: a.modul, nr: zwei(a.modul) }) + (fertig ? " · " + tr("erledigt") + " ✓" : "") + "</p><h2>" + esc(a.titel) + "</h2>" + film +
        "<h4>" + tr("Du brauchst") + "</h4><ul>" + a.material.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>" +
        '<h4>' + tr("So gehst du vor") + '</h4><ol class="k-schritte">' + a.schritte.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ol>" +
        '<h4>' + tr("Selbstkontrolle") + '</h4><ul class="k-aufgaben">' + a.kontrolle.map(function (t, i) { var key = a.id + "-" + i; return '<li><label><input type="checkbox" data-labor="' + key + '"' + (stand.labor[key] ? " checked" : "") + "> " + esc(t) + "</label></li>"; }).join("") + "</ul></section>";
    }
    function zuschauen(a, n) {
      var film = a.clip && CLIPS[a.clip] ? clip({ id: a.clip, text: a.clipText || a.titel }) : (a.clip && stand.vorschau ? '<p class="k-box k-ergaenzung"><strong>' + tr("Clip fehlt noch") + "</strong> „" + esc(a.clip) + "“</p>" : "");
      return '<section class="k-lektion k-zuschauen"><p class="label">' + tr("Clip {n}", { n: n }) + " · " + tr('passt zu <a href="#modul-{m}">Modul {nr}</a>', { m: a.modul, nr: zwei(a.modul) }) + "</p><h2>" + esc(a.titel) + "</h2>" + film +
        '<h4>' + tr("Darauf achtest du") + '</h4><ol class="k-schritte">' + a.schritte.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ol></section>";
    }
    var liste = function (xs) { return "<ul>" + xs.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>"; };
    app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Praxis") + "</p><h1>" + tr("Praxislabor") + '</h1><p class="lead">' + esc(L.einleitung) + "</p>" +
      '<p class="fine">' + tr("{n} von {m} Aufgaben mit erfüllter Selbstkontrolle.", { n: laborAnzahl(), m: laborAlle().length }) + "</p>" +
      '<nav class="k-labor-sprung" aria-label="' + tr("Teile des Praxislabors") + '"><a href="#labor-teil-trocken">' + tr("Teil 1: Trockenübungen") + "</a>" + (L.stich ? ' · <a href="#labor-teil-stich">' + (ST ? tr("Teil 2: Stichübungen am Silikonohr") : tr("Teil 2: Zuschauen – so wird gestochen")) + "</a>" : "") + "</nav></section>" +
      '<h2 class="k-h2" id="labor-teil-trocken">' + tr("Teil 1: Trockenübungen") + "</h2>" +
      '<div class="k-box k-achtung"><strong>' + tr("Sicherheit") + "</strong>" + liste(L.sicherheit) + "</div>" +
      '<section class="k-lektion"><h2>' + tr("Material") + "</h2><p>" + esc(L.material) + '</p><p><a class="btn ghost small" href="vorlagen/uebungsvorlage.pdf" download>' + tr("Übungsvorlage herunterladen (PDF)") + deutschZusatz() + "</a></p></section>" +
      L.aufgaben.map(function (a, i) { return aufgabe(a, tr("Trockenübung {n}", { n: i + 1 })); }).join("") +
      (L.stich ? (ST ? '<h2 class="k-h2" id="labor-teil-stich">' + tr("Teil 2: Stichübungen am Silikonohr") + "</h2>" +
          '<section class="k-lektion"><p>' + esc(ST.einleitung) + "</p><h4>" + tr("In deinem Übungsset") + "</h4>" + liste(ST.set) + "</section>" +
          '<div class="k-box k-achtung"><strong>' + tr("Sicherheit bei den Stichübungen") + "</strong>" + liste(ST.sicherheit) + "</div>" +
          ST.aufgaben.map(function (a, i) { return aufgabe(a, tr("Stichübung {n}", { n: i + 1 })); }).join("")
        : '<h2 class="k-h2" id="labor-teil-stich">' + tr("Teil 2: Zuschauen – so wird gestochen") + "</h2>" +
          '<section class="k-lektion"><p>' + esc(L.stich.zuschauen) + '</p><p class="fine">' + tr("Selbst üben? Das Praxiskit gibt es auch einzeln, nach bestandener Prüfungssimulation 15 % günstiger.") + ' <a href="' + website("/bestellen.html?paket=kit") + '" target="_top">' + tr("Praxiskit ansehen") + "</a></p></section>" +
          L.stich.aufgaben.map(function (a, i) { return zuschauen(a, i + 1); }).join("")) : "");
    app.querySelectorAll("[data-labor]").forEach(function (c) {
      c.addEventListener("change", function () {
        if (c.checked) stand.labor[c.dataset.labor] = true; else delete stand.labor[c.dataset.labor];
        speichern(); zeichneNav("labor");
        var sek = c.closest(".k-labor"), a = laborAlle().filter(function (x) { return "labor-" + x.id === sek.id; })[0];
        sek.classList.toggle("k-labor-fertig", laborErledigt(a));
      });
    });
    app.querySelectorAll(".k-labor-sprung a").forEach(function (l) { l.addEventListener("click", function (e) { e.preventDefault(); var z = document.getElementById(l.getAttribute("href").slice(1)); if (z) z.scrollIntoView({ behavior: "smooth" }); }); });
    app.querySelectorAll("video[data-schleife]").forEach(function (v) { v.play && v.play().catch(function () {}); });
  }

  // ---------- Kursbuch online: Nachschlagewerk mit Suche und eigenen Notizen ----------
  // Seitenbilder kommen auf dem Server nur angemeldet aus dem privaten Speicher (/kurs/buch/seite-NNN.webp); keine Download-Datei.
  var BUCH_LETZTE = 116, NUR_BUCH = !!(KONTO && KONTO.paket === "buch");
  function anzahlNotizen() { return Object.keys(stand.notizen || {}).filter(function (k) { return stand.notizen[k]; }).length; }
  function seitenName(n) { return n === 0 ? tr("Inhaltsverzeichnis") : tr("Seite {n}", { n: n }); }
  // Englische und spanische Leser sehen den übersetzten Seitentext; die deutsche Originalseite (Bild) ist einen Klick entfernt.
  var UEBERSETZT = SPRACHE !== "de", buchOriginal = false;
  function markdownHtml(md) {
    function inline(t) {
      return esc(t).replace(/\\([*_#|\\])/g, function (m, z) { return "&#" + z.charCodeAt(0) + ";"; }).replace(/&lt;br\s*\/?&gt;/g, "<br>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
    }
    var bloecke = String(md || "").replace(/\r/g, "").split(/\n{2,}/), out = [];
    bloecke.forEach(function (b) {
      var z = b.split("\n").filter(function (x) { return x.trim(); }); if (!z.length) return;
      var m;
      if (z.every(function (x) { return /^\s*\|/.test(x); })) {
        var zeilen = z.filter(function (x) { return !/^\s*\|?\s*:?-{2,}/.test(x); }).map(function (x) { return x.trim().replace(/^\|/, "").replace(/\|$/, "").split("|"); });
        out.push('<div class="k-buch-tabelle"><table>' + zeilen.map(function (r, i) { var tag = i === 0 ? "th" : "td"; return "<tr>" + r.map(function (c) { return "<" + tag + ">" + inline(c.trim()) + "</" + tag + ">"; }).join("") + "</tr>"; }).join("") + "</table></div>");
      } else if (z.every(function (x) { return /^\s*[-*•]\s+/.test(x); })) out.push("<ul>" + z.map(function (x) { return "<li>" + inline(x.replace(/^\s*[-*•]\s+/, "")) + "</li>"; }).join("") + "</ul>");
      else if (z.every(function (x) { return /^\s*\d+[.)]\s+/.test(x); })) out.push('<ol start="' + parseInt(z[0], 10) + '">' + z.map(function (x) { return "<li>" + inline(x.replace(/^\s*\d+[.)]\s+/, "")) + "</li>"; }).join("") + "</ol>");
      else z.forEach(function (x, i) {
        if ((m = /^(#{1,4})\s+(.*)$/.exec(x))) out.push("<h" + (m[1].length + 1) + ">" + inline(m[2]) + "</h" + (m[1].length + 1) + ">");
        else if ((m = /^\[(?:Figure|Figura|Abbildung):\s*(.*)\]$/.exec(x.trim()))) out.push('<p class="k-buch-abb">' + inline(m[1]) + "</p>");
        else if (/^\s*[-*•]\s+/.test(x)) out.push("<ul><li>" + inline(x.replace(/^\s*[-*•]\s+/, "")) + "</li></ul>");
        else out.push("<p>" + inline(x) + "</p>");
      });
    });
    return out.join("").replace(/<\/ul><ul>/g, "");
  }
  function buchTextLaden(n, ziel, fehlt) {
    function zeigen(t) { if (t == null) { ziel.hidden = true; fehlt.hidden = false; return; } ziel.innerHTML = markdownHtml(t); }
    var vorschau = KURS.buchUebersetzung && KURS.buchUebersetzung[SPRACHE];
    if (vorschau) { var e = vorschau.filter(function (z) { return z[0] === n; })[0]; zeigen(e ? e[1] : null); return; }
    if (!KONTO) { zeigen(null); return; }
    fetch("/api/buch/seite?nr=" + n + "&sprache=" + SPRACHE, { credentials: "same-origin" }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { zeigen(d && d.text); }).catch(function () { zeigen(null); });
  }
  function buchAnsicht(n) {
    n = Math.max(0, Math.min(BUCH_LETZTE, isNaN(n) ? 1 : n));
    stand.buchSeite = n; speichern();
    var nummer = ("00" + n).slice(-3), wz = KONTO ? KONTO.email : tr("Vorschau · Piercing Akademie");
    app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Nachschlagen") + "</p><h1>" + tr("Kursbuch") + '</h1><p class="lead">' + tr("„Die Piercing Akademie – Dein Weg zum Bodypiercer“: blättern, suchen und eigene Notizen zu jeder Seite.") + "</p>" +
      '<form class="k-buch-suche" role="search"><label for="buch-q" class="k-unsichtbar">' + tr("Im Kursbuch suchen") + '</label><input id="buch-q" type="search" placeholder="' + esc(tr("Im Kursbuch suchen, z. B. Septum")) + '" autocomplete="off"><button type="submit" class="btn small">' + tr("Suchen") + "</button></form>" +
      '<div id="buch-treffer" aria-live="polite"></div></section>' +
      '<div class="k-buch">' +
        '<div class="k-buch-leiste">' + (n > 0 ? '<a class="btn ghost small" href="#buch-' + (n - 1) + '">' + tr("‹ Zurück") + "</a>" : '<span class="btn ghost small k-aus">' + tr("‹ Zurück") + "</span>") +
          '<label class="k-buch-nr">' + (n === 0 ? tr("Inhalt") : tr("Seite")) + ' <input id="buch-nr" type="number" inputmode="numeric" min="0" max="' + BUCH_LETZTE + '" value="' + n + '"></label>' +
          (n < BUCH_LETZTE ? '<a class="btn ghost small" href="#buch-' + (n + 1) + '">' + tr("Weiter ›") + "</a>" : '<span class="btn ghost small k-aus">' + tr("Weiter ›") + "</span>") + "</div>" +
        (UEBERSETZT ? '<div class="k-buch-umschalter"><p class="fine">' + tr("Übersetzt aus dem deutschen Original. Maßgeblich ist die deutsche Originalseite.") + '</p><button type="button" class="btn ghost small" id="buch-original" aria-pressed="' + buchOriginal + '">' + (buchOriginal ? tr("Übersetzung zeigen") : tr("Deutsche Originalseite zeigen")) + "</button></div>" : "") +
        '<figure class="k-buch-seite' + (UEBERSETZT && !buchOriginal ? " k-buch-textmodus" : "") + '">' +
          (UEBERSETZT && !buchOriginal ? '<div class="k-buch-text" lang="' + SPRACHE + '"><p class="fine">' + tr("Seite wird geladen …") + "</p></div>" : '<img src="buch/seite-' + nummer + '.webp" alt="' + esc(tr("Kursbuch, {seite}", { seite: seitenName(n) })) + '" draggable="false"' + (UEBERSETZT ? ' lang="de"' : "") + ">") +
          '<div class="k-buch-wz" aria-hidden="true">' + (esc(wz) + " · ").repeat(40) + '</div>' +
          '<p class="k-buch-fehlt" hidden>' + tr("Diese Seite ist gerade nicht verfügbar. Bitte lade die Seite später neu.") + "</p></figure>" +
        '<aside class="k-buch-notiz"><label for="buch-notiz"><strong>' + tr("Meine Notiz zu {seite}", { seite: seitenName(n) }) + "</strong></label>" +
          '<textarea id="buch-notiz" rows="7" maxlength="2000" placeholder="' + esc(tr("Was willst du dir zu dieser Seite merken?")) + '">' + esc((stand.notizen || {})[n] || "") + "</textarea>" +
          '<p class="fine" id="buch-gespeichert" aria-live="polite">' + tr("Wird automatisch gespeichert.") + '</p><p><a href="#notizen">' + tr("Alle meine Notizen ({n})", { n: anzahlNotizen() }) + "</a></p>" +
          '<p class="fine">' + tr("Das Kursbuch ist persönlich lizenziert; jede Seite trägt deine Kennung. Kopieren und Weitergeben ist nicht erlaubt.") + "</p></aside>" +
      "</div>";
    var bild = app.querySelector(".k-buch-seite img"), fig = app.querySelector(".k-buch-seite");
    if (bild) bild.addEventListener("error", function () { bild.hidden = true; fig.querySelector(".k-buch-fehlt").hidden = false; });
    fig.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    fig.addEventListener("copy", function (e) { e.preventDefault(); });
    var umschalten = document.getElementById("buch-original");
    if (umschalten) umschalten.addEventListener("click", function () { buchOriginal = !buchOriginal; buchAnsicht(n); });
    if (UEBERSETZT && !buchOriginal) buchTextLaden(n, fig.querySelector(".k-buch-text"), fig.querySelector(".k-buch-fehlt"));
    else if (n < BUCH_LETZTE) { var vor = new Image(); vor.src = "buch/seite-" + ("00" + (n + 1)).slice(-3) + ".webp"; }
    var feld = document.getElementById("buch-nr");
    feld.addEventListener("change", function () { var z = parseInt(feld.value, 10); if (!isNaN(z)) location.hash = "#buch-" + Math.max(0, Math.min(BUCH_LETZTE, z)); });
    var notiz = document.getElementById("buch-notiz"), merk = document.getElementById("buch-gespeichert"), t = null;
    notiz.addEventListener("input", function () {
      clearTimeout(t); merk.textContent = "…";
      t = setTimeout(function () { var v = notiz.value.trim(); if (v) stand.notizen[n] = v; else delete stand.notizen[n]; speichern(); merk.textContent = tr("Gespeichert."); zeichneNav("buch"); }, 600);
    });
    app.querySelector(".k-buch-suche").addEventListener("submit", function (e) { e.preventDefault(); buchSuchen(document.getElementById("buch-q").value); });
  }
  function buchTreffer(liste, q) {
    var ziel = document.getElementById("buch-treffer");
    if (!liste.length) { ziel.innerHTML = '<p class="fine">' + tr("Keine Treffer für „{q}“.", { q: esc(q) }) + "</p>"; return; }
    ziel.innerHTML = '<ol class="k-buch-treffer">' + liste.map(function (x) {
      return '<li><a href="#buch-' + x.seite + '"><strong>' + seitenName(x.seite) + "</strong></a> " + esc(x.auszug) + "</li>";
    }).join("") + "</ol>";
  }
  function buchSuchen(q) {
    q = String(q || "").trim();
    var ziel = document.getElementById("buch-treffer");
    if (q.length < 3) { ziel.innerHTML = '<p class="fine">' + tr("Bitte mindestens drei Buchstaben eingeben.") + "</p>"; return; }
    if (KONTO) {
      ziel.innerHTML = '<p class="fine">' + tr("Suche …") + "</p>";
      fetch("/api/buch/suche?q=" + encodeURIComponent(q) + "&sprache=" + SPRACHE, { credentials: "same-origin" }).then(function (r) { return r.json(); })
        .then(function (d) { buchTreffer(d.treffer || [], q); }).catch(function () { ziel.innerHTML = '<p class="fine">' + tr("Die Suche ist gerade nicht erreichbar.") + "</p>"; });
    } else if (KURS.buchText) {
      var ql = q.toLowerCase(), liste = [], quelle = (KURS.buchUebersetzung && KURS.buchUebersetzung[SPRACHE]) || KURS.buchText;
      if (quelle !== KURS.buchText) quelle = quelle.map(function (z) { return [z[0], z[1].replace(/\[(?:Figure|Figura):[^\]]*\]/g, " ").replace(/[#*_>|`]+/g, " ").replace(/\s+/g, " ")]; });
      quelle.forEach(function (z) { var i = z[1].toLowerCase().indexOf(ql); if (i > -1 && liste.length < 25) liste.push({ seite: z[0], auszug: (i > 50 ? "…" : "") + z[1].slice(Math.max(0, i - 50), i + q.length + 70) + "…" }); });
      buchTreffer(liste, q);
    } else ziel.innerHTML = '<p class="fine">' + tr("Die Suche funktioniert in der angemeldeten Fahrschule.") + "</p>";
  }
  function notizenSeite() {
    var seiten = Object.keys(stand.notizen || {}).filter(function (k) { return stand.notizen[k]; }).map(Number).sort(function (a, b) { return a - b; });
    app.innerHTML = '<section class="k-kopf"><p class="label">' + tr("Nachschlagen") + "</p><h1>" + tr("Meine Notizen") + '</h1><p class="lead">' + tr("Deine Notizen zum Kursbuch, nach Seiten sortiert. Bearbeiten kannst du sie direkt auf der jeweiligen Buchseite.") + '</p><p><a class="btn ghost small" href="#buch">' + tr("Zum Kursbuch") + "</a></p></section>" +
      (seiten.length ? seiten.map(function (n) {
        return '<section class="k-lektion k-notiz"><p class="label"><a href="#buch-' + n + '">' + seitenName(n) + "</a></p><p>" + esc(stand.notizen[n]).replace(/\n/g, "<br>") + "</p></section>";
      }).join("") : '<div class="k-lektion"><p>' + tr("Noch keine Notizen. Öffne eine Seite im Kursbuch und schreib rechts daneben, was du dir merken willst.") + "</p></div>");
  }

  // ---------- Router ----------
  function zeige() {
    sprachwahl();
    var h = (window.location.hash || "#uebersicht").slice(1);
    if (h === "alles" && (!KONTO || KONTO.admin)) { stand.vorschau = true; speichern(); h = "uebersicht"; } // Prüfmodus: im Prototyp für alle, auf dem Server nur für die Akademie
    var t;
    // Reine Buchkäufer sehen nur das Kursbuch und ihre Notizen
    if (NUR_BUCH && !/^(buch(-\d+)?|notizen)$/.test(h)) h = "buch";
    if ((t = /^buch(?:-(\d+))?$/.exec(h))) { zeichneNav("buch"); buchAnsicht(t[1] != null ? +t[1] : stand.buchSeite); return; }
    if (h === "notizen") { zeichneNav("buch"); notizenSeite(); return; }
    if ((t = /^lektion-(\d+)-(\d+)$/.exec(h)) && modul(+t[1]) && modul(+t[1]).lektionen[+t[2]]) { zeichneNav(+t[1]); lektionSeite(modul(+t[1]), +t[2]); }
    else if ((t = /^modul-(\d+)$/.exec(h)) && modul(+t[1])) { zeichneNav(+t[1]); modulSeite(modul(+t[1])); }
    else if ((t = /^pruefung-(\d+)$/.exec(h)) && modul(+t[1])) { zeichneNav(+t[1]); pruefungSeite(modul(+t[1])); }
    else if (h === "bescheinigung") { zeichneNav("simulation"); bescheinigungSeite(); }
    else if (h === "labor" && LABOR) { zeichneNav("labor"); laborSeite(); }
    else if (h === "simulation" || h === "fehler" || h === "glossar" || h === "checklisten") {
      zeichneNav(h); ({ simulation: simulationSeite, fehler: fehlerSeite, glossar: glossarSeite, checklisten: checklistenSeite })[h]();
    } else { zeichneNav("uebersicht"); uebersicht(); }
  }
  window.addEventListener("hashchange", function () { zeige(); app.focus({ preventScroll: true }); window.scrollTo(0, 0); });
  zeige();
})();
