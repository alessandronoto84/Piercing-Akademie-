/* Piercing Akademie – Online-Kurs (Prototyp).
   Ablauf wie in einer Fahrschul-App: Jede Lektion erklärt zuerst den Stoff, danach müssen alle Fragen der Lektion
   richtig beantwortet werden (falsche kommen erneut). Erst dann öffnet sich die nächste Lektion. Nach allen Lektionen
   eines Moduls folgt die Modulprüfung; ab 80 % öffnet sich das nächste Modul. Dazu: Fehler-Training, Prüfungssimulation,
   Glossar und Checklisten.
   Kein Backend: Der Fortschritt liegt nur im localStorage dieses Browsers. Inhalte: inhalte/*.js (window.KURS). */
(function () {
  "use strict";

  var KURS = window.KURS || { module: [] };
  var MODULE = KURS.module.slice().sort(function (a, b) { return a.nr - b.nr; });
  var BESTEHEN_AB = 0.8;            // Anteil richtiger Antworten für Modulprüfung und Simulation
  var FRAGEN_JE_PRUEFUNG = 20;      // zufällige Fragen pro Modulprüfung
  var SIMULATION_JE_MODUL = 4;      // Fragen pro Modul in der Prüfungssimulation
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
    ["vorlagen/checklisten.pdf", "Alle Checklisten", "Zum Ausdrucken und Abhaken"]
  ];

  // ---------- Fortschritt ----------
  function leer() { return { erledigt: {}, bestanden: {}, fehler: {}, uebung: {}, check: {}, simulation: null, vorschau: false }; }
  var stand = laden();
  function laden() {
    try {
      var roh = window.localStorage.getItem(SPEICHER);
      if (roh) return Object.assign(leer(), JSON.parse(roh));
    } catch (e) { /* Speicher nicht verfügbar: Fortschritt gilt nur bis zum Neuladen */ }
    return leer();
  }
  function speichern() { try { window.localStorage.setItem(SPEICHER, JSON.stringify(stand)); } catch (e) { /* siehe laden() */ } }

  function modul(nr) { return MODULE.filter(function (m) { return m.nr === nr; })[0]; }
  function modulOffen(m) { return stand.vorschau || m.nr === MODULE[0].nr || !!stand.bestanden[m.nr - 1]; }
  function lektionErledigt(m, i) { return !!stand.erledigt[m.nr + "-" + i]; }
  function lektionOffen(m, i) { return modulOffen(m) && (stand.vorschau || i === 0 || lektionErledigt(m, i - 1)); }
  function erledigteLektionen(m) { return m.lektionen.filter(function (l, i) { return lektionErledigt(m, i); }).length; }
  function pruefungOffen(m) { return modulOffen(m) && (stand.vorschau || erledigteLektionen(m) === m.lektionen.length); }
  function anzahlBestanden() { return MODULE.filter(function (m) { return stand.bestanden[m.nr]; }).length; }
  function simulationOffen() { return stand.vorschau || anzahlBestanden() === MODULE.length; }
  function anzahlFehler() { return Object.keys(stand.fehler).filter(function (k) { return ALLE_FRAGEN[k]; }).length; }
  function merkeFehler(f) { stand.fehler[f.frage] = (stand.fehler[f.frage] || 0) + 1; }

  // ---------- Hilfsfunktionen ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }
  function zwei(n) { return (n < 10 ? "0" : "") + n; }
  function mischen(liste) { var a = liste.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function benoetigt(n) { return Math.ceil(n * BESTEHEN_AB); }
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
      case "merke": return '<div class="k-box k-merke"><strong>Merke</strong><p>' + esc(b.text) + "</p></div>";
      case "achtung": return '<div class="k-box k-achtung"><strong>Achtung</strong><p>' + esc(b.text) + "</p></div>";
      case "praxis": return '<div class="k-box k-praxis"><strong>Aus der Praxis</strong><p>' + esc(b.text) + "</p></div>";
      case "ergaenzung": return '<div class="k-box k-ergaenzung"><strong>Ergänzung der Akademie, fachlich prüfen</strong><p>' + esc(b.text) + "</p></div>";
      case "liste": return (b.titel ? "<h4>" + esc(b.titel) + "</h4>" : "") + "<ul>" + b.punkte.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      case "schritte": return (b.titel ? "<h4>" + esc(b.titel) + "</h4>" : "") + '<ol class="k-schritte"' + (b.start ? ' start="' + b.start + '"' : "") + ">" + b.punkte.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>";
      case "tabelle":
        return '<div class="k-tabelle"><table><thead><tr>' + b.kopf.map(function (k) { return '<th scope="col">' + esc(k) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.zeilen.map(function (z) { return "<tr>" + z.map(function (c, i) { return i === 0 ? '<th scope="row">' + esc(c) + "</th>" : "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "datenblatt":
        var nicht = /NICHT DURCHFÜHREN/.test(b.hinweis), bild = BILDER[kurzname(b.name)];
        return '<article class="k-datenblatt' + (nicht ? " k-nicht" : "") + (bild ? " k-mit-bild" : "") + '"><header><h4>' + esc(b.name) + '</h4><span class="label">' + esc(b.seite) + "</span></header>" +
          (bild ? '<img class="k-db-bild" src="' + bild.src + '" width="' + bild.w + '" height="' + bild.h + '" alt="' + esc(b.name) + '-Piercing, Foto aus dem Kursbuch" loading="lazy">' : "") + "<p>" + esc(b.beschreibung) + "</p>" +
          (nicht ? "" : "<dl><div><dt>Ersteinsatz</dt><dd>" + esc(b.ersteinsatz) + "</dd></div><div><dt>Kanüle</dt><dd>" + esc(b.kanuele) + "</dd></div><div><dt>Klemme</dt><dd>" + esc(b.klemme) + "</dd></div></dl>") +
          (b.hinweis ? '<p class="k-hinweis">' + esc(b.hinweis) + "</p>" : "") + "</article>";
      case "grafik":
        var g = (KURS.grafiken || {})[b.id];
        if (!g) return "";
        return figur(g.w, g.h, b.alt || g.alt, g.svg, b.text || g.text, b.titel);
      case "diagramm": return diagramm(b);
      case "foto":
        var f = BILDER[b.id];
        if (!f) return "";
        return '<figure class="k-foto"><img src="' + f.src + '" width="' + f.w + '" height="' + f.h + '" alt="' + esc(b.text) + '" loading="lazy"><figcaption>' + esc(b.text) + nachweis(f) + "</figcaption></figure>";
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
  // Bildnachweis für lizenzfreie Bilder (bilder-frei.js); Kursbuch-Bilder haben keinen
  function nachweis(f) {
    if (!f.lizenz) return "";
    return '<span class="k-nachweis">Bild: ' + esc(f.urheber) + ", " + (f.lizenz_url ? '<a href="' + esc(f.lizenz_url) + '" target="_blank" rel="noopener">' + esc(f.lizenz) + "</a>" : esc(f.lizenz)) +
      ', <a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.quelle) + "</a>" + (/SA/.test(f.lizenz) ? ", verkleinert" : "") + "</span>";
  }
  // Titelbild eines Moduls: klein auf der Modulkarte, groß im Modulkopf
  function titelbild(m, klein) {
    var b = (KURS.titelbilder || {})[m.nr];
    if (!b) return klein ? '<span class="k-titelbild k-klein k-leer" aria-hidden="true"><span>' + zwei(m.nr) + "</span></span>" : "";
    var img = '<img src="' + b.src + '" width="' + b.w + '" height="' + b.h + '" alt="' + (klein ? "" : esc(b.alt)) + '" loading="lazy" decoding="async">';
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
      '<p class="k-grafik-hinweis">Grafik seitlich wischen, um alles zu sehen.</p>' + "<figcaption>" + esc(text) + "</figcaption></figure>";
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
    var html = '<a href="#uebersicht" class="k-nav-link k-nav-haupt' + (aktiv === "uebersicht" ? " aktiv" : "") + '">Übersicht</a><ol class="k-nav-liste">';
    MODULE.forEach(function (m) {
      var status = stand.bestanden[m.nr] ? "bestanden" : modulOffen(m) ? "offen" : "gesperrt";
      html += '<li><a href="#modul-' + m.nr + '" class="k-nav-link k-' + status + (aktiv === m.nr ? " aktiv" : "") + '"><span class="n">' + zwei(m.nr) + "</span><span>" + esc(m.titel) + '</span><span class="k-status">' +
        (status === "bestanden" ? '<span aria-label="bestanden">✓</span>' : status === "gesperrt" ? '<span aria-label="gesperrt">–</span>' : erledigteLektionen(m) + "/" + m.lektionen.length) + "</span></a></li>";
    });
    html += '</ol><div class="k-nav-extras">' +
      '<a href="#fehler" class="k-nav-link k-nav-haupt' + (aktiv === "fehler" ? " aktiv" : "") + '">Fehler-Training (' + anzahlFehler() + ")</a>" +
      '<a href="#simulation" class="k-nav-link k-nav-haupt' + (aktiv === "simulation" ? " aktiv" : "") + (simulationOffen() ? "" : " k-gesperrt") + '">Prüfungssimulation' + (stand.simulation && stand.simulation.bestanden ? " ✓" : "") + "</a>" +
      '<a href="#glossar" class="k-nav-link k-nav-haupt' + (aktiv === "glossar" ? " aktiv" : "") + '">Glossar</a>' +
      '<a href="#checklisten" class="k-nav-link k-nav-haupt' + (aktiv === "checklisten" ? " aktiv" : "") + '">Checklisten und Vorlagen</a></div>';
    var war = nav.querySelector(".k-navbox");
    var auf = war ? war.open : window.matchMedia("(min-width: 861px)").matches;
    var erledigt = Object.keys(stand.erledigt).filter(function (k) { return stand.erledigt[k]; }).length;
    nav.innerHTML = '<details class="k-navbox"' + (auf ? " open" : "") + "><summary>Kurs · " + erledigt + " von " + GESAMT_LEKTIONEN + " Lektionen</summary><div>" + html + "</div></details>";
  }
  window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) { var d = nav.querySelector(".k-navbox"); if (d && e.matches) d.open = true; });

  // ---------- Übersicht ----------
  function uebersicht() {
    var erledigt = Object.keys(stand.erledigt).filter(function (k) { return stand.erledigt[k]; }).length;
    var html = '<section class="k-kopf"><p class="label">Online-Kurs</p><h1>Dein Weg zum Bodypiercer</h1>' +
      '<p class="lead">' + MODULE.length + " Module, " + GESAMT_LEKTIONEN + " Lektionen und " + GESAMT_FRAGEN + " Fragen auf Grundlage des Kursbuchs „Die Piercing Akademie – Dein Weg zum Bodypiercer“.</p></section>" +
      '<ol class="k-prinzip" aria-label="So funktioniert der Kurs"><li>Erklärung lesen</li><li>Fragen beantworten</li><li>Nächste Lektion</li><li>Modulprüfung</li><li>Nächstes Modul</li><li>Prüfungssimulation</li></ol>' +
      '<div class="k-fortschritt">' + balken(erledigt, GESAMT_LEKTIONEN, "Erledigte Lektionen") +
      "<p><strong>" + erledigt + " von " + GESAMT_LEKTIONEN + "</strong> Lektionen · <strong>" + anzahlBestanden() + " von " + MODULE.length + "</strong> Modulprüfungen bestanden" + (stand.simulation && stand.simulation.bestanden ? " · Prüfungssimulation bestanden" : "") + "</p></div>" +
      weiterLernen() + '<h2 class="k-h2">Module</h2><div class="k-modulraster">';
    MODULE.forEach(function (m) {
      var status = stand.bestanden[m.nr] ? "bestanden" : modulOffen(m) ? "offen" : "gesperrt";
      html += '<a class="k-modulkarte k-' + status + '" href="#modul-' + m.nr + '">' + titelbild(m, true) + '<span class="label">Modul ' + zwei(m.nr) + (m.entwurf ? " · Entwurf" : "") + "</span><strong>" + esc(m.titel) + "</strong>" +
        balken(erledigteLektionen(m), m.lektionen.length, "Lektionen in Modul " + m.nr) +
        '<span class="k-meta">' + erledigteLektionen(m) + " von " + m.lektionen.length + " Lektionen · " + m.pool.length + " Fragen · " + (status === "bestanden" ? "Prüfung bestanden" : status === "offen" ? "offen" : "gesperrt") + "</span></a>";
    });
    html += '</div><h2 class="k-h2">Training und Nachschlagen</h2><div class="k-modulraster">' +
      '<a class="k-modulkarte" href="#fehler"><span class="label">Training</span><strong>Fehler-Training</strong><span class="k-meta">' + anzahlFehler() + " Fragen, die du falsch beantwortet hast</span></a>" +
      '<a class="k-modulkarte' + (simulationOffen() ? "" : " k-gesperrt") + '" href="#simulation"><span class="label">Abschluss</span><strong>Prüfungssimulation</strong><span class="k-meta">' + (MODULE.length * SIMULATION_JE_MODUL) + " Fragen aus allen Modulen" + (simulationOffen() ? "" : " · öffnet nach allen Modulprüfungen") + "</span></a>" +
      '<a class="k-modulkarte" href="#glossar"><span class="label">Nachschlagen</span><strong>Glossar</strong><span class="k-meta">' + (KURS.glossar || []).length + " Fachbegriffe</span></a>" +
      '<a class="k-modulkarte" href="#checklisten"><span class="label">Praxis</span><strong>Checklisten und Vorlagen</strong><span class="k-meta">' + (KURS.checklisten || []).length + " Checklisten, " + VORLAGEN.length + " Druckvorlagen als PDF</span></a></div>" +
      '<section class="k-einstellungen"><h2>Prototyp-Einstellungen</h2>' +
      '<label class="k-schalter"><input type="checkbox" id="k-vorschau"' + (stand.vorschau ? " checked" : "") + "> Alle Module und Lektionen zum Durchsehen freischalten (Prüfmodus)</label>" +
      '<div class="k-zuruecksetzen"><button type="button" class="btn ghost small" id="k-reset">Fortschritt zurücksetzen</button><span id="k-reset-frage" hidden> Wirklich alles löschen? <button type="button" class="btn small" id="k-reset-ja">Ja, löschen</button> <button type="button" class="btn ghost small" id="k-reset-nein">Abbrechen</button></span></div></section>';
    app.innerHTML = html;
    document.getElementById("k-vorschau").addEventListener("change", function (e) { stand.vorschau = e.target.checked; speichern(); zeige(); });
    var fr = document.getElementById("k-reset-frage");
    document.getElementById("k-reset").addEventListener("click", function () { fr.hidden = false; });
    document.getElementById("k-reset-nein").addEventListener("click", function () { fr.hidden = true; });
    document.getElementById("k-reset-ja").addEventListener("click", function () { var v = stand.vorschau; stand = leer(); stand.vorschau = v; speichern(); zeige(); });
  }

  // Nächster sinnvoller Schritt für „Weiterlernen“
  function weiterLernen() {
    for (var k = 0; k < MODULE.length; k++) {
      var m = MODULE[k];
      if (!modulOffen(m)) break;
      for (var i = 0; i < m.lektionen.length; i++) {
        if (!lektionErledigt(m, i)) return '<div class="k-weiterlernen"><p><span class="label">Weiterlernen</span><br><strong>Modul ' + zwei(m.nr) + ", Lektion " + (i + 1) + ": " + esc(m.lektionen[i].titel) + '</strong></p><a class="btn" href="#lektion-' + m.nr + "-" + i + '">Weiter</a></div>';
      }
      if (!stand.bestanden[m.nr]) return '<div class="k-weiterlernen"><p><span class="label">Weiterlernen</span><br><strong>Modulprüfung ' + zwei(m.nr) + ": " + esc(m.titel) + '</strong></p><a class="btn" href="#pruefung-' + m.nr + '">Zur Prüfung</a></div>';
    }
    return "";
  }

  // ---------- Modulübersicht ----------
  function modulSeite(m) {
    if (!modulOffen(m)) {
      app.innerHTML = '<section class="k-kopf"><p class="label">Modul ' + zwei(m.nr) + "</p><h1>" + esc(m.titel) + '</h1><p class="lead">Dieses Modul öffnet sich, sobald du die Modulprüfung ' + zwei(m.nr - 1) + ' bestanden hast.</p><p><a class="btn" href="#modul-' + (m.nr - 1) + '">Zu Modul ' + zwei(m.nr - 1) + "</a></p></section>";
      return;
    }
    var html = '<section class="k-kopf"><p class="label">Modul ' + zwei(m.nr) + " von " + MODULE.length + (m.entwurf ? " · Entwurf, fachlich prüfen" : "") + "</p><h1>" + esc(m.titel) + '</h1><p class="lead">' + esc(m.ziel) + '</p><p class="fine">Quelle: ' + esc(m.quelle) + "</p></section>" + titelbild(m, false) +
      '<div class="k-fortschritt">' + balken(erledigteLektionen(m), m.lektionen.length, "Lektionen") + "<p><strong>" + erledigteLektionen(m) + " von " + m.lektionen.length + "</strong> Lektionen erledigt</p></div>" +
      '<ol class="k-lektionsliste">';
    m.lektionen.forEach(function (l, i) {
      var st = lektionErledigt(m, i) ? "erledigt" : lektionOffen(m, i) ? "offen" : "gesperrt";
      html += '<li class="k-' + st + '"><a href="#lektion-' + m.nr + "-" + i + '"' + (st === "gesperrt" ? ' aria-disabled="true"' : "") + '><span class="n">' + (i + 1) + "</span><span><strong>" + esc(l.titel) + "</strong>" +
        '<span class="k-meta">' + l.alleFragen.length + " Fragen" + (l.seite ? " · Kursbuch " + esc(l.seite) : "") + (l.entwurf ? " · Entwurf" : "") + '</span></span><span class="k-status">' + (st === "erledigt" ? "✓" : st === "gesperrt" ? "gesperrt" : "offen") + "</span></a></li>";
    });
    html += "</ol>" +
      '<section class="k-lektion"><h2>Modulprüfung</h2><p>' + Math.min(FRAGEN_JE_PRUEFUNG, m.pool.length) + " zufällige Fragen aus allen " + m.pool.length + " Fragen dieses Moduls. Bestanden ab " + benoetigt(Math.min(FRAGEN_JE_PRUEFUNG, m.pool.length)) + " richtigen Antworten." +
      (stand.bestanden[m.nr] ? " <strong>Bestanden (" + stand.bestanden[m.nr].richtig + " von " + stand.bestanden[m.nr].gesamt + ").</strong>" : "") + "</p>" +
      (pruefungOffen(m) ? '<p><a class="btn" href="#pruefung-' + m.nr + '">Modulprüfung starten</a></p>' : '<p class="fine">Die Prüfung öffnet sich, wenn du alle Lektionen des Moduls erledigt hast.</p>') + "</section>" +
      '<section class="k-lektion"><h2>Übungen zum Modul</h2><p>Aufgaben für die Praxis. Abgehakt wird nur für dich.</p><ul class="k-aufgaben">' +
      m.uebung.map(function (u, i) { var key = m.nr + "-" + i; return '<li><label><input type="checkbox" data-uebung="' + key + '"' + (stand.uebung[key] ? " checked" : "") + "> " + esc(u) + "</label></li>"; }).join("") + "</ul></section>";
    app.innerHTML = html;
    app.querySelectorAll("[data-uebung]").forEach(function (c) { c.addEventListener("change", function () { stand.uebung[c.dataset.uebung] = c.checked; speichern(); }); });
  }

  // ---------- Lektion: erst Erklärung, dann Pflichtfragen ----------
  // Prüfmodus: alle Fragen der Lektion mit Lösung zum Durchsehen, und Blättern zur vorigen und nächsten Lektion
  function loesungen(l) {
    return '<details class="k-loesungen"><summary>Prüfmodus: alle ' + l.alleFragen.length + " Fragen dieser Lektion mit Lösung ansehen</summary><ol>" +
      l.alleFragen.map(function (f) {
        return "<li><p><strong>" + esc(f.frage) + '</strong></p><ul><li class="k-richtig">✓ ' + esc(f.antworten[0]) + "</li>" +
          f.antworten.slice(1).map(function (a) { return '<li class="k-falsch-antw">✕ ' + esc(a) + "</li>"; }).join("") + "</ul>" +
          (f.erklaerung ? '<p class="fine">' + esc(f.erklaerung) + (f.seite ? " · " + esc(String(f.seite)) : "") + "</p>" : "") + "</li>";
      }).join("") + "</ol></details>";
  }
  function blaettern(m, i) {
    var mi = MODULE.indexOf(m), vor = i > 0 ? [m, i - 1] : mi > 0 ? [MODULE[mi - 1], MODULE[mi - 1].lektionen.length - 1] : null;
    var nach = i < m.lektionen.length - 1 ? [m, i + 1] : mi < MODULE.length - 1 ? [MODULE[mi + 1], 0] : null;
    function link(z, text) { return z ? '<a class="btn ghost" href="#lektion-' + z[0].nr + "-" + z[1] + '">' + text + "</a>" : "<span></span>"; }
    return '<nav class="k-blaettern" aria-label="Lektionen blättern">' + link(vor, "← Vorige Lektion") + link(nach, "Nächste Lektion →") + "</nav>";
  }

  function lektionSeite(m, i) {
    var l = m.lektionen[i];
    if (!lektionOffen(m, i)) {
      app.innerHTML = '<section class="k-kopf"><p class="label">Modul ' + zwei(m.nr) + " · Lektion " + (i + 1) + "</p><h1>" + esc(l.titel) + '</h1><p class="lead">' + (modulOffen(m) ? "Diese Lektion öffnet sich, sobald du die vorige Lektion abgeschlossen hast." : "Dieses Modul ist noch gesperrt.") + '</p><p><a class="btn" href="#modul-' + m.nr + '">Zur Modulübersicht</a></p></section>';
      return;
    }
    var html = '<section class="k-kopf"><p class="label"><a href="#modul-' + m.nr + '">Modul ' + zwei(m.nr) + " · " + esc(m.titel) + "</a> · Lektion " + (i + 1) + " von " + m.lektionen.length + (l.entwurf ? " · Entwurf" : "") + "</p><h1>" + esc(l.titel) + "</h1>" +
      (l.seite ? '<p class="fine">Kursbuch ' + esc(l.seite) + "</p>" : "") + "</section>" +
      '<ol class="k-phasen" aria-label="Ablauf der Lektion"><li class="aktiv" id="phase-1"><span class="n">1</span>Erklärung</li><li id="phase-2"><span class="n">2</span>Fragen (' + l.alleFragen.length + ')</li><li id="phase-3"><span class="n">3</span>Geschafft</li></ol>' +
      '<article class="k-lektion" id="erklaerung">' + l.inhalt.map(block).join("") + "</article>" +
      '<div class="k-weiter" id="start-bereich"><button type="button" class="btn" id="fragen-start">Erklärung gelesen: Fragen starten</button>' + (lektionErledigt(m, i) ? ' <span class="fine">Diese Lektion hast du schon abgeschlossen. Du kannst die Fragen zur Wiederholung noch einmal beantworten.</span>' : "") + "</div>" +
      '<section class="k-quiz" id="quiz" hidden aria-live="polite"></section>' +
      (stand.vorschau ? loesungen(l) + blaettern(m, i) : "");
    app.innerHTML = html;
    document.getElementById("fragen-start").addEventListener("click", function () {
      document.getElementById("start-bereich").hidden = true;
      document.getElementById("phase-1").classList.remove("aktiv"); document.getElementById("phase-2").classList.add("aktiv");
      var quiz = document.getElementById("quiz"); quiz.hidden = false;
      fragenRunde(quiz, l.alleFragen, {
        titel: "Fragen zur Lektion",
        fertig: function (statistik) {
          stand.erledigt[m.nr + "-" + i] = true; speichern(); zeichneNav(m.nr);
          document.getElementById("phase-2").classList.remove("aktiv"); document.getElementById("phase-3").classList.add("aktiv");
          var naechste = i + 1 < m.lektionen.length;
          return "<h2>Lektion geschafft</h2><p>Du hast alle " + l.alleFragen.length + " Fragen richtig beantwortet" + (statistik.fehler ? ". " + (statistik.fehler === 1 ? "Eine Frage brauchte einen zweiten Anlauf; sie steht jetzt" : statistik.fehler + " Fragen brauchten einen zweiten Anlauf; sie stehen jetzt") + " im Fehler-Training." : ", alle beim ersten Versuch.") + "</p>" +
            '<p class="k-test-aktionen">' + (naechste ? '<a class="btn" href="#lektion-' + m.nr + "-" + (i + 1) + '">Nächste Lektion: ' + esc(m.lektionen[i + 1].titel) + "</a>" : '<a class="btn" href="#pruefung-' + m.nr + '">Zur Modulprüfung</a>') +
            ' <a class="btn ghost" href="#modul-' + m.nr + '">Zur Modulübersicht</a></p>';
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
      ziel.innerHTML = '<div class="k-lektion"><div class="k-quizkopf"><h2>' + esc(opt.titel) + '</h2><span class="label">' + richtigGezaehlt + " von " + fragen.length + " richtig</span></div>" + balken(richtigGezaehlt, fragen.length, "Richtig beantwortet") +
        '<form class="k-einzelfrage" novalidate><fieldset class="k-frage"><legend>' + esc(f.frage) + "</legend>" +
        f.antworten.map(function (a, j) { return '<label><input type="radio" name="antwort" value="' + j + '"> ' + esc(a) + "</label>"; }).join("") +
        '</fieldset><p class="err" hidden>Bitte wähle eine Antwort.</p><div class="k-rueckmeldung" hidden></div>' +
        '<div class="k-test-aktionen"><button type="submit" class="btn">Antwort prüfen</button><button type="button" class="btn" data-weiter hidden>Weiter</button></div></form></div>';
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
        rm.innerHTML = (ok ? "<strong>Richtig.</strong> " : "<strong>Nicht richtig.</strong> Richtig ist: „" + esc(f.antworten[f.richtig]) + "“. Die Frage kommt am Ende noch einmal. ") + esc(f.erklaerung) +
          (f.seite ? ' <span class="label">' + esc(f.seite) + "</span>" : "");
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
      '<p class="err" hidden>Bitte beantworte alle Fragen.</p><div class="k-test-aktionen"><button type="submit" class="btn">Auswerten</button><button type="button" class="btn ghost" data-neu hidden>Neue Prüfung</button></div>' +
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
        r.innerHTML = (ok ? "<strong>Richtig.</strong> " : "<strong>Nicht richtig.</strong> Richtig ist: „" + esc(f.antworten[f.richtig]) + "“. ") + esc(f.erklaerung) + ' <span class="label">' + esc(f.seite || "") + " · Modul " + zwei(f.modul) + "</span>";
      });
      speichern();
      form.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
      form.querySelector('[type="submit"]').hidden = true; form.querySelector("[data-neu]").hidden = false;
      ergebnis.hidden = false; ergebnis.innerHTML = auswerten(richtig, fragen.length); ergebnis.focus();
    });
    form.querySelector("[data-neu]").addEventListener("click", function () { zeige(); window.scrollTo(0, 0); });
  }

  function pruefungSeite(m) {
    if (!pruefungOffen(m)) {
      app.innerHTML = '<section class="k-kopf"><p class="label">Modul ' + zwei(m.nr) + '</p><h1>Modulprüfung</h1><p class="lead">Die Prüfung öffnet sich, wenn du alle Lektionen des Moduls erledigt hast (' + erledigteLektionen(m) + " von " + m.lektionen.length + ').</p><p><a class="btn" href="#modul-' + m.nr + '">Zur Modulübersicht</a></p></section>';
      return;
    }
    var fragen = mischen(m.pool).slice(0, FRAGEN_JE_PRUEFUNG).map(gemischt);
    app.innerHTML = '<section class="k-kopf"><p class="label"><a href="#modul-' + m.nr + '">Modul ' + zwei(m.nr) + " · " + esc(m.titel) + "</a></p><h1>Modulprüfung</h1></section>" +
      pruefungsFormular(fragen, fragen.length + " Fragen", "Zufällig aus " + m.pool.length + " Fragen gezogen. Bestanden ab " + benoetigt(fragen.length) + " richtigen Antworten. Jede neue Prüfung stellt andere Fragen.");
    bindePruefung(app.querySelector("form.k-test"), fragen, function (richtig, gesamt) {
      var ok = richtig >= benoetigt(gesamt);
      if (ok) { stand.bestanden[m.nr] = { richtig: richtig, gesamt: gesamt }; speichern(); }
      zeichneNav(m.nr);
      var n = modul(m.nr + 1);
      return ok
        ? "<strong>Bestanden: " + richtig + " von " + gesamt + " richtig.</strong> " + (n ? 'Modul ' + zwei(n.nr) + ' ist jetzt offen. <a class="btn small" href="#lektion-' + n.nr + '-0">Weiter mit Modul ' + zwei(n.nr) + "</a>" : 'Alle Module sind geschafft. <a class="btn small" href="#simulation">Zur Prüfungssimulation</a>')
        : "<strong>Noch nicht bestanden: " + richtig + " von " + gesamt + " richtig.</strong> Du brauchst " + benoetigt(gesamt) + '. Übe die falschen Fragen im <a href="#fehler">Fehler-Training</a> und starte dann eine neue Prüfung.';
    });
  }

  function simulationSeite() {
    if (!simulationOffen()) {
      app.innerHTML = '<section class="k-kopf"><p class="label">Abschluss</p><h1>Prüfungssimulation</h1><p class="lead">Die Simulation öffnet sich, wenn du alle ' + MODULE.length + " Modulprüfungen bestanden hast. Bisher: " + anzahlBestanden() + '.</p><p><a class="btn" href="#uebersicht">Zur Übersicht</a></p></section>';
      return;
    }
    var fragen = [];
    MODULE.forEach(function (m) { fragen = fragen.concat(mischen(m.pool).slice(0, SIMULATION_JE_MODUL).map(gemischt)); });
    fragen = mischen(fragen);
    app.innerHTML = '<section class="k-kopf"><p class="label">Abschluss</p><h1>Prüfungssimulation</h1><p class="lead">Wie die Abschlussprüfung: ' + fragen.length + " Fragen aus allen Modulen, bestanden ab " + benoetigt(fragen.length) + " richtigen Antworten.</p>" +
      (stand.simulation ? '<p class="fine">' + (stand.simulation.bestanden ? "Bestes Ergebnis: " : "Letzter Versuch: ") + stand.simulation.richtig + " von " + stand.simulation.gesamt + (stand.simulation.bestanden ? ', bestanden. <a href="#bescheinigung">Zur Bescheinigung</a>' : ".") + "</p>" : "") + "</section>" +
      pruefungsFormular(fragen, "Alle Module", "Beantworte jede Frage. Die Auswertung zeigt dir zu jeder Frage die Erklärung und das Modul.");
    bindePruefung(app.querySelector("form.k-test"), fragen, function (richtig, gesamt) {
      var ok = richtig >= benoetigt(gesamt);
      var vorher = stand.simulation && stand.simulation.bestanden ? stand.simulation : null;
      stand.simulation = ok && (!vorher || richtig > vorher.richtig)
        ? { richtig: richtig, gesamt: gesamt, bestanden: true, datum: new Date().toISOString().slice(0, 10) }
        : vorher || { richtig: richtig, gesamt: gesamt, bestanden: false };
      speichern(); zeichneNav("simulation");
      return ok
        ? "<strong>Bestanden: " + richtig + " von " + gesamt + ' richtig.</strong> Glückwunsch! Deine Bescheinigung über den Online-Teil kannst du jetzt erstellen.</p><p><a class="btn" href="#bescheinigung">Bescheinigung erstellen</a>'
        : "<strong>Noch nicht bestanden: " + richtig + " von " + gesamt + " richtig.</strong> Du brauchst " + benoetigt(gesamt) + '. Übe im <a href="#fehler">Fehler-Training</a> und versuch es noch einmal.';
    });
  }

  // ---------- Fehler-Training ----------
  function fehlerSeite() {
    var liste = Object.keys(stand.fehler).filter(function (k) { return ALLE_FRAGEN[k]; }).map(function (k) { return ALLE_FRAGEN[k]; });
    var kopf = '<section class="k-kopf"><p class="label">Training</p><h1>Fehler-Training</h1><p class="lead">Hier sammeln sich alle Fragen, die du in Lektionen oder Prüfungen falsch beantwortet hast. Beantwortest du eine richtig, verschwindet sie aus dem Training.</p></section>';
    if (!liste.length) { app.innerHTML = kopf + '<div class="k-lektion"><p><strong>Keine offenen Fehler.</strong> Sobald du eine Frage falsch beantwortest, kannst du sie hier wiederholen.</p></div>'; return; }
    app.innerHTML = kopf + '<section class="k-quiz" id="quiz"></section>';
    fragenRunde(document.getElementById("quiz"), liste.slice(0, 20), {
      titel: liste.length > 20 ? "20 von " + liste.length + " Fehlerfragen" : liste.length + " Fehlerfragen",
      richtig: function (f) { delete stand.fehler[f.frage]; speichern(); zeichneNav("fehler"); },
      fertig: function () {
        var rest = anzahlFehler();
        return "<h2>Runde geschafft</h2><p>" + (rest ? "Noch " + rest + " Fragen im Fehler-Training." : "Alle Fehlerfragen sind erledigt.") + '</p><p class="k-test-aktionen">' + (rest ? '<button type="button" class="btn" id="noch-eine">Nächste Runde</button> ' : "") + '<a class="btn ghost" href="#uebersicht">Zur Übersicht</a></p>';
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
      app.innerHTML = '<section class="k-kopf"><p class="label">Abschluss</p><h1>Bescheinigung</h1><p class="lead">Die Bescheinigung über den Online-Teil kannst du erstellen, sobald du die Prüfungssimulation bestanden hast.</p><p><a class="btn" href="#simulation">Zur Prüfungssimulation</a></p></section>';
      return;
    }
    var datum = sim.datum || new Date().toISOString().slice(0, 10);
    var name = stand.name || "";
    app.innerHTML = '<section class="k-kopf k-nicht-drucken"><p class="label">Abschluss</p><h1>Bescheinigung über den Online-Teil</h1><p class="lead">Trag deinen Namen so ein, wie er auf der Bescheinigung stehen soll. Über „Drucken“ kannst du sie ausdrucken oder als PDF speichern.</p>' +
      '<div class="field k-suche"><label for="b-name">Vor- und Nachname</label><input id="b-name" type="text" autocomplete="name" maxlength="60" value="' + esc(name) + '"></div>' +
      '<p><button type="button" class="btn" id="b-drucken">Drucken oder als PDF speichern</button></p></section>' +
      '<article class="k-urkunde" aria-label="Bescheinigung">' +
        '<div class="k-urkunde-kopf"><img src="' + (document.querySelector(".brand img") || {}).src + '" alt="" width="44" height="44"><span>Piercing Akademie</span></div>' +
        '<p class="label">Bescheinigung</p><h2>Online-Kurs erfolgreich abgeschlossen</h2>' +
        '<p class="k-urkunde-name" id="b-ausgabe">' + (esc(name) || "Dein Name") + "</p>" +
        "<p>hat alle " + MODULE.length + " Module des Online-Kurses der Piercing Akademie bearbeitet, jede Modulprüfung bestanden und die Prüfungssimulation mit <strong>" + sim.richtig + " von " + sim.gesamt + "</strong> richtigen Antworten abgeschlossen.</p>" +
        '<ul class="k-urkunde-module">' + MODULE.map(function (m) { return "<li>" + zwei(m.nr) + " " + esc(m.titel) + "</li>"; }).join("") + "</ul>" +
        '<div class="k-urkunde-fuss"><div><span>' + new Date(datum + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" }) + '</span>Datum</div><div><span id="b-nr">' + pruefnummer(name, datum, sim.richtig) + "</span>Nummer</div><div><span>Alessandro Noto</span>Piercing Akademie, Lingen (Ems)</div></div>" +
        '<p class="fine">Die Bescheinigung bestätigt den theoretischen Online-Teil. Sie ist kein staatlich anerkannter Abschluss und keine behördliche Erlaubnis. Das Zertifikat der Piercing Akademie erhältst du nach den Praxistagen im Studio.</p>' +
      "</article>";
    var feld = document.getElementById("b-name");
    feld.addEventListener("input", function () {
      stand.name = feld.value.trim(); speichern();
      document.getElementById("b-ausgabe").textContent = stand.name || "Dein Name";
      document.getElementById("b-nr").textContent = pruefnummer(stand.name, datum, sim.richtig);
    });
    document.getElementById("b-drucken").addEventListener("click", function () {
      if (!feld.value.trim()) { feld.focus(); feld.setAttribute("aria-invalid", "true"); return; }
      feld.removeAttribute("aria-invalid"); window.print();
    });
  }

  // ---------- Glossar und Checklisten ----------
  function glossarSeite() {
    var g = (KURS.glossar || []).slice().sort(function (a, b) { return a[0].localeCompare(b[0], "de"); });
    app.innerHTML = '<section class="k-kopf"><p class="label">Nachschlagen</p><h1>Glossar</h1><p class="lead">' + g.length + ' Fachbegriffe aus dem Kurs, mit dem Modul, in dem sie erklärt werden.</p></section>' +
      '<div class="field k-suche"><label for="g-suche">Begriff suchen</label><input id="g-suche" type="search" autocomplete="off"></div><dl class="k-glossar" id="g-liste">' +
      g.map(function (e) { return '<div data-text="' + esc((e[0] + " " + e[1]).toLowerCase()) + '"><dt>' + esc(e[0]) + "</dt><dd>" + esc(e[1]) + ' <a class="label" href="#modul-' + e[2] + '">Modul ' + zwei(e[2]) + "</a></dd></div>"; }).join("") + '</dl><p class="fine" id="g-leer" hidden>Kein Begriff gefunden.</p>';
    var feld = document.getElementById("g-suche");
    feld.addEventListener("input", function () {
      var q = feld.value.trim().toLowerCase(), n = 0;
      document.querySelectorAll("#g-liste > div").forEach(function (d) { var t = d.dataset.text.indexOf(q) !== -1; d.hidden = !t; if (t) n++; });
      document.getElementById("g-leer").hidden = n > 0;
    });
  }
  function checklistenSeite() {
    var cl = KURS.checklisten || [];
    app.innerHTML = '<section class="k-kopf"><p class="label">Praxis</p><h1>Checklisten und Vorlagen</h1><p class="lead">Für den Studioalltag. Abgehakt wird nur für dich und nur in diesem Browser.</p></section>' +
      '<section class="k-lektion"><h2>Vorlagen zum Ausdrucken</h2><p>Druckfertig als PDF. Pass sie an dein Studio an; Einverständniserklärung und Hygieneplan lässt du vor dem Einsatz prüfen (Anwalt bzw. Gesundheitsamt).</p><ul class="k-vorlagen">' +
        VORLAGEN.map(function (v) { return '<li><a href="' + v[0] + '" download>' + esc(v[1]) + '</a><span class="fine">' + esc(v[2]) + "</span></li>"; }).join("") + "</ul></section>" +
      cl.map(function (c, ci) {
        return '<section class="k-lektion"><h2>' + esc(c.titel) + '</h2><p class="fine">Aus Modul ' + zwei(c.modul) + '</p><ul class="k-aufgaben">' +
          c.punkte.map(function (p, pi) { var key = ci + "-" + pi; return '<li><label><input type="checkbox" data-check="' + key + '"' + (stand.check[key] ? " checked" : "") + "> " + esc(p) + "</label></li>"; }).join("") +
          '</ul><button type="button" class="btn ghost small" data-leeren="' + ci + '">Haken entfernen</button></section>';
      }).join("");
    app.querySelectorAll("[data-check]").forEach(function (c) { c.addEventListener("change", function () { stand.check[c.dataset.check] = c.checked; speichern(); }); });
    app.querySelectorAll("[data-leeren]").forEach(function (b) { b.addEventListener("click", function () { Object.keys(stand.check).forEach(function (k) { if (k.indexOf(b.dataset.leeren + "-") === 0) delete stand.check[k]; }); speichern(); checklistenSeite(); }); });
  }

  // ---------- Router ----------
  function zeige() {
    var h = (window.location.hash || "#uebersicht").slice(1);
    if (h === "alles") { stand.vorschau = true; speichern(); h = "uebersicht"; } // Direktlink für den Prüfmodus
    var t;
    if ((t = /^lektion-(\d+)-(\d+)$/.exec(h)) && modul(+t[1]) && modul(+t[1]).lektionen[+t[2]]) { zeichneNav(+t[1]); lektionSeite(modul(+t[1]), +t[2]); }
    else if ((t = /^modul-(\d+)$/.exec(h)) && modul(+t[1])) { zeichneNav(+t[1]); modulSeite(modul(+t[1])); }
    else if ((t = /^pruefung-(\d+)$/.exec(h)) && modul(+t[1])) { zeichneNav(+t[1]); pruefungSeite(modul(+t[1])); }
    else if (h === "bescheinigung") { zeichneNav("simulation"); bescheinigungSeite(); }
    else if (h === "simulation" || h === "fehler" || h === "glossar" || h === "checklisten") {
      zeichneNav(h); ({ simulation: simulationSeite, fehler: fehlerSeite, glossar: glossarSeite, checklisten: checklistenSeite })[h]();
    } else { zeichneNav("uebersicht"); uebersicht(); }
  }
  window.addEventListener("hashchange", function () { zeige(); app.focus({ preventScroll: true }); window.scrollTo(0, 0); });
  zeige();
})();
