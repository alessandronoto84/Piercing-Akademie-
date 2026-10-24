/* Piercing Akademie – Kurs-Prototyp.
   Lernprinzip pro Modul: Lernen → Verstehen → Üben → Testen → Bestehen → nächstes Modul.
   Kein Backend: Der Fortschritt liegt nur im localStorage dieses Browsers. Inhalte kommen aus inhalte/modul-XX.js (window.KURS). */
(function () {
  "use strict";

  var MODULE = (window.KURS && window.KURS.module ? window.KURS.module : []).slice().sort(function (a, b) { return a.nr - b.nr; });
  var BESTEHEN_AB = 0.8;           // 80 % richtige Antworten
  var FRAGEN_JE_TEST = 15;         // zufällig gezogene Fragen pro Modultest
  var ABSCHLUSS_JE_MODUL = 4;      // Fragen pro Modul im Abschlusstest
  var SPEICHER = "pa-kurs-v1";
  var SCHRITTE = [
    { id: "lernen", name: "Lernen" },
    { id: "verstehen", name: "Verstehen" },
    { id: "ueben", name: "Üben" },
    { id: "testen", name: "Testen" }
  ];

  // Fragenpool je Modul: Fragen aus der Moduldatei plus KURS.fragen[nr] aus fragen-*.js
  // (Format dort: [Frage, [richtig, falsch, falsch], Erklärung, Seite]; die richtige Antwort steht zuerst)
  var ZUSATZ = (window.KURS && window.KURS.fragen) || {};
  MODULE.forEach(function (m) {
    m.pool = m.quiz.concat((ZUSATZ[m.nr] || []).map(function (f) {
      return { frage: f[0], antworten: f[1], richtig: 0, erklaerung: f[2], seite: f[3] };
    }));
  });
  // Zieht n Fragen und mischt jeweils die Antworten; „richtig“ zeigt danach auf die neue Position
  function ziehe(pool, n, nr) {
    return mischen(pool).slice(0, n).map(function (f) {
      var reihenfolge = mischen(f.antworten.map(function (_, i) { return i; }));
      return { modul: nr, frage: f.frage, antworten: reihenfolge.map(function (i) { return f.antworten[i]; }), richtig: reihenfolge.indexOf(f.richtig), erklaerung: f.erklaerung, seite: f.seite };
    });
  }

  var app = document.getElementById("kurs");
  var nav = document.getElementById("kurs-nav");

  // ---------- Fortschritt ----------
  function leer() { return { gelesen: {}, uebung: {}, bestanden: {}, abschluss: null, vorschau: false }; }
  var stand = laden();
  function laden() {
    try {
      var roh = window.localStorage.getItem(SPEICHER);
      if (roh) return Object.assign(leer(), JSON.parse(roh));
    } catch (e) { /* Speicher nicht verfügbar: Fortschritt gilt nur bis zum Neuladen */ }
    return leer();
  }
  function speichern() {
    try { window.localStorage.setItem(SPEICHER, JSON.stringify(stand)); } catch (e) { /* siehe laden() */ }
  }

  function modul(nr) { return MODULE.filter(function (m) { return m.nr === nr; })[0]; }
  function offen(m) { return stand.vorschau || m.nr === MODULE[0].nr || !!stand.bestanden[m.nr - 1]; }
  function alleGelesen(m) { return m.lektionen.every(function (l, i) { return stand.gelesen[m.nr + "-" + i]; }); }
  function anzahlBestanden() { return MODULE.filter(function (m) { return stand.bestanden[m.nr]; }).length; }
  function abschlussOffen() { return stand.vorschau || anzahlBestanden() === MODULE.length; }

  // ---------- Hilfsfunktionen ----------
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; });
  }
  function zwei(n) { return (n < 10 ? "0" : "") + n; }
  function mischen(liste) {
    var a = liste.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function benoetigt(anzahl) { return Math.ceil(anzahl * BESTEHEN_AB); }

  // ---------- Inhaltsblöcke ----------
  function block(b) {
    switch (b.typ) {
      case "text": return "<p>" + esc(b.text) + "</p>";
      case "merke": return '<div class="k-box k-merke"><strong>Merke</strong><p>' + esc(b.text) + "</p></div>";
      case "achtung": return '<div class="k-box k-achtung"><strong>Achtung</strong><p>' + esc(b.text) + "</p></div>";
      case "ergaenzung": return '<div class="k-box k-ergaenzung"><strong>Ergänzung der Akademie, fachlich prüfen</strong><p>' + esc(b.text) + "</p></div>";
      case "liste":
        return (b.titel ? "<h4>" + esc(b.titel) + "</h4>" : "") + "<ul>" + b.punkte.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      case "schritte":
        return (b.titel ? "<h4>" + esc(b.titel) + "</h4>" : "") + '<ol class="k-schritte"' + (b.start ? ' start="' + b.start + '"' : "") + ">" + b.punkte.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>";
      case "tabelle":
        return '<div class="k-tabelle"><table><thead><tr>' + b.kopf.map(function (k) { return '<th scope="col">' + esc(k) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.zeilen.map(function (z) { return "<tr>" + z.map(function (c, i) { return i === 0 ? '<th scope="row">' + esc(c) + "</th>" : "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "datenblatt":
        var nicht = /NICHT DURCHFÜHREN/.test(b.hinweis);
        return '<article class="k-datenblatt' + (nicht ? " k-nicht" : "") + '"><header><h4>' + esc(b.name) + '</h4><span class="label">' + esc(b.seite) + "</span></header>" +
          "<p>" + esc(b.beschreibung) + "</p>" +
          (nicht ? "" : '<dl><div><dt>Ersteinsatz</dt><dd>' + esc(b.ersteinsatz) + '</dd></div><div><dt>Kanüle</dt><dd>' + esc(b.kanuele) + '</dd></div><div><dt>Klemme</dt><dd>' + esc(b.klemme) + "</dd></div></dl>") +
          (b.hinweis ? '<p class="k-hinweis">' + esc(b.hinweis) + "</p>" : "") + "</article>";
      default: return "";
    }
  }

  // ---------- Navigation (Modulliste) ----------
  function zeichneNav(aktiv) {
    var html = '<a href="#uebersicht" class="k-nav-link k-nav-haupt' + (aktiv === "uebersicht" ? " aktiv" : "") + '">Übersicht</a><ol class="k-nav-liste">';
    MODULE.forEach(function (m) {
      var status = stand.bestanden[m.nr] ? "bestanden" : offen(m) ? "offen" : "gesperrt";
      var text = { bestanden: "bestanden", offen: "offen", gesperrt: "gesperrt" }[status];
      html += '<li><a href="#modul-' + m.nr + '" class="k-nav-link k-' + status + (aktiv === m.nr ? " aktiv" : "") + '"' + (status === "gesperrt" ? ' aria-disabled="true"' : "") + ">" +
        '<span class="n">' + zwei(m.nr) + "</span><span>" + esc(m.titel) + '</span><span class="k-status" aria-label="' + text + '">' + (status === "bestanden" ? "✓" : status === "gesperrt" ? "–" : "") + "</span></a></li>";
    });
    html += '</ol><a href="#abschluss" class="k-nav-link k-nav-haupt' + (aktiv === "abschluss" ? " aktiv" : "") + (abschlussOffen() ? "" : " k-gesperrt") + '">Abschlusstest' + (stand.abschluss && stand.abschluss.bestanden ? " ✓" : "") + "</a>";
    var war = nav.querySelector(".k-navbox");
    var aufgeklappt = war ? war.open : window.matchMedia("(min-width: 861px)").matches;
    nav.innerHTML = '<details class="k-navbox"' + (aufgeklappt ? " open" : "") + "><summary>Module · " + anzahlBestanden() + " von " + MODULE.length + " bestanden</summary><div>" + html + "</div></details>";
  }
  // Auf großen Bildschirmen ist die Modulliste immer offen
  window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) { var d = nav.querySelector(".k-navbox"); if (d && e.matches) d.open = true; });

  // ---------- Ansichten ----------
  function uebersicht() {
    var fertig = anzahlBestanden();
    var html = '<section class="k-kopf"><p class="label">Online-Kurs · Prototyp</p><h1>Dein Weg zum Bodypiercer</h1>' +
      '<p class="lead">Elf Module auf Grundlage des Kursbuchs „Die Piercing Akademie – Dein Weg zum Bodypiercer“. Jedes Modul folgt demselben Lernprinzip; das nächste Modul öffnet sich, sobald du den Test bestanden hast.</p></section>' +
      '<ol class="k-prinzip" aria-label="Lernprinzip"><li>Lernen</li><li>Verstehen</li><li>Üben</li><li>Testen</li><li>Bestehen</li><li>Nächstes Modul</li></ol>' +
      '<div class="k-fortschritt"><div class="k-balken" role="progressbar" aria-valuemin="0" aria-valuemax="' + MODULE.length + '" aria-valuenow="' + fertig + '" aria-label="Bestandene Module"><span style="width:' + (fertig / MODULE.length * 100) + '%"></span></div>' +
      "<p><strong>" + fertig + " von " + MODULE.length + "</strong> Modulen bestanden" + (stand.abschluss && stand.abschluss.bestanden ? " · Abschlusstest bestanden" : "") + "</p></div>" +
      '<div class="k-modulraster">';
    MODULE.forEach(function (m) {
      var status = stand.bestanden[m.nr] ? "bestanden" : offen(m) ? "offen" : "gesperrt";
      html += '<a class="k-modulkarte k-' + status + '" href="#modul-' + m.nr + '"><span class="label">Modul ' + zwei(m.nr) + (m.entwurf ? " · Entwurf" : "") + "</span><strong>" + esc(m.titel) + "</strong>" +
        "<span class=\"k-meta\">" + m.lektionen.length + " Lektionen · " + m.pool.length + " Fragen im Pool · " + (status === "bestanden" ? "bestanden" : status === "offen" ? "offen" : "gesperrt") + "</span></a>";
    });
    html += "</div>" +
      '<section class="k-einstellungen"><h2>Prototyp-Einstellungen</h2>' +
      '<label class="k-schalter"><input type="checkbox" id="k-vorschau"' + (stand.vorschau ? " checked" : "") + "> Alle Module zum Durchsehen freischalten (Prüfmodus)</label>" +
      '<div class="k-zuruecksetzen"><button type="button" class="btn ghost small" id="k-reset">Fortschritt zurücksetzen</button><span id="k-reset-frage" hidden> Wirklich alles löschen? <button type="button" class="btn small" id="k-reset-ja">Ja, löschen</button> <button type="button" class="btn ghost small" id="k-reset-nein">Abbrechen</button></span></div></section>';
    app.innerHTML = html;
    document.getElementById("k-vorschau").addEventListener("change", function (e) { stand.vorschau = e.target.checked; speichern(); zeige(); });
    var frage = document.getElementById("k-reset-frage");
    document.getElementById("k-reset").addEventListener("click", function () { frage.hidden = false; });
    document.getElementById("k-reset-nein").addEventListener("click", function () { frage.hidden = true; });
    document.getElementById("k-reset-ja").addEventListener("click", function () { stand = leer(); speichern(); zeige(); });
  }

  function gesperrt(m) {
    app.innerHTML = '<section class="k-kopf"><p class="label">Modul ' + zwei(m.nr) + '</p><h1>' + esc(m.titel) + "</h1>" +
      '<p class="lead">Dieses Modul öffnet sich, sobald du den Test von Modul ' + zwei(m.nr - 1) + " bestanden hast.</p>" +
      '<p><a class="btn" href="#modul-' + (m.nr - 1) + '">Zu Modul ' + zwei(m.nr - 1) + "</a></p></section>";
  }

  var testFragen = [];
  function modulAnsicht(m, schritt) {
    if (!offen(m)) { gesperrt(m); return; }
    schritt = schritt || "lernen";
    var testBereit = alleGelesen(m) || stand.vorschau;
    var html = '<section class="k-kopf"><p class="label">Modul ' + zwei(m.nr) + " von " + MODULE.length + (m.entwurf ? " · Entwurf, fachlich prüfen" : "") + "</p><h1>" + esc(m.titel) + "</h1>" +
      '<p class="lead">' + esc(m.ziel) + '</p><p class="fine">Quelle: ' + esc(m.quelle) + "</p></section>" +
      '<nav class="k-stepper" aria-label="Schritte im Modul"><ol>';
    SCHRITTE.forEach(function (s, i) {
      var zu = s.id === "testen" && !testBereit;
      var klassen = (s.id === schritt ? "aktiv" : "") + (zu ? " k-gesperrt" : "");
      html += '<li><a href="#modul-' + m.nr + "-" + s.id + '"' + (klassen ? ' class="' + klassen.trim() + '"' : "") + (s.id === schritt ? ' aria-current="step"' : "") + (zu ? ' aria-disabled="true"' : "") + ">" +
        '<span class="n">' + (i + 1) + "</span>" + s.name + "</a></li>";
    });
    html += '<li><span class="' + (stand.bestanden[m.nr] ? "k-ok" : "") + '"><span class="n">5</span>Bestehen' + (stand.bestanden[m.nr] ? " ✓" : "") + "</span></li></ol></nav>";

    if (schritt === "lernen") {
      m.lektionen.forEach(function (l, i) {
        var key = m.nr + "-" + i;
        html += '<article class="k-lektion"><header><span class="label">Lektion ' + (i + 1) + " von " + m.lektionen.length + (l.entwurf ? " · Entwurf" : "") + "</span><h2>" + esc(l.titel) + "</h2></header>" +
          l.inhalt.map(block).join("") +
          '<label class="k-gelesen"><input type="checkbox" data-gelesen="' + key + '"' + (stand.gelesen[key] ? " checked" : "") + "> Lektion durchgearbeitet</label></article>";
      });
      html += '<p class="k-weiter"><a class="btn" href="#modul-' + m.nr + '-verstehen">Weiter: Verstehen</a></p>';
    } else if (schritt === "verstehen") {
      var kern = [];
      m.lektionen.forEach(function (l) { l.inhalt.forEach(function (b) { if (b.typ === "merke" || b.typ === "achtung") kern.push({ b: b, l: l.titel }); }); });
      html += '<section class="k-lektion"><h2>Das Wichtigste aus diesem Modul</h2><p>Lies diese Punkte und erkläre sie dir selbst in eigenen Worten. Wenn ein Punkt unklar ist, geh zurück zur Lektion.</p>' +
        kern.map(function (k) { return block(k.b).replace("</strong>", " · " + esc(k.l) + "</strong>"); }).join("") + "</section>" +
        '<p class="k-weiter"><a class="btn" href="#modul-' + m.nr + '-ueben">Weiter: Üben</a></p>';
    } else if (schritt === "ueben") {
      html += '<section class="k-lektion"><h2>Übungen</h2><p>Arbeite die Aufgaben durch. Abgehakt wird nur für dich; die Aufgaben fließen nicht in die Bewertung ein.</p><ul class="k-aufgaben">' +
        m.uebung.map(function (u, i) { var key = m.nr + "-" + i; return '<li><label><input type="checkbox" data-uebung="' + key + '"' + (stand.uebung[key] ? " checked" : "") + "> " + esc(u) + "</label></li>"; }).join("") +
        "</ul></section>" +
        (testBereit
          ? '<p class="k-weiter"><a class="btn" href="#modul-' + m.nr + '-testen">Weiter: Testen</a></p>'
          : '<p class="k-weiter fine">Der Test öffnet sich, sobald du alle Lektionen als durchgearbeitet markiert hast.</p>');
    } else if (schritt === "testen") {
      if (!testBereit) {
        html += '<section class="k-lektion"><h2>Noch nicht bereit</h2><p>Markiere zuerst alle Lektionen als durchgearbeitet.</p><p><a class="btn" href="#modul-' + m.nr + '-lernen">Zu den Lektionen</a></p></section>';
      } else {
        testFragen = ziehe(m.pool, FRAGEN_JE_TEST, m.nr);
        html += testFormular("modul-" + m.nr, testFragen, "Test zu Modul " + zwei(m.nr),
          testFragen.length + " Fragen, zufällig aus " + m.pool.length + " Fragen gezogen. Bestanden ab " + benoetigt(testFragen.length) + " richtigen Antworten. Bei jedem Versuch kommen neue Fragen.");
      }
    }
    app.innerHTML = html;

    app.querySelectorAll("[data-gelesen]").forEach(function (c) { c.addEventListener("change", function () { stand.gelesen[c.dataset.gelesen] = c.checked; speichern(); zeichneNav(m.nr); }); });
    app.querySelectorAll("[data-uebung]").forEach(function (c) { c.addEventListener("change", function () { stand.uebung[c.dataset.uebung] = c.checked; speichern(); }); });
    var form = app.querySelector("form.k-test");
    if (form) bindeTest(form, testFragen, function (richtig, gesamt) {
      var ok = richtig >= benoetigt(gesamt);
      if (ok) { stand.bestanden[m.nr] = { richtig: richtig, gesamt: gesamt }; speichern(); zeichneNav(m.nr); }
      var naechstes = modul(m.nr + 1);
      return ok
        ? "<strong>Bestanden: " + richtig + " von " + gesamt + " richtig.</strong> " + (naechstes ? 'Modul ' + zwei(naechstes.nr) + ' ist jetzt offen. <a class="btn small" href="#modul-' + naechstes.nr + '">Weiter zu Modul ' + zwei(naechstes.nr) + "</a>" : 'Alle Module sind geschafft. <a class="btn small" href="#abschluss">Zum Abschlusstest</a>')
        : "<strong>Noch nicht bestanden: " + richtig + " von " + gesamt + " richtig.</strong> Du brauchst " + benoetigt(gesamt) + ". Lies die Erklärungen, wiederhole die Lektionen und versuch es noch einmal.";
    });
  }

  function testFormular(id, fragen, titel, hinweis) {
    return '<form class="k-test" id="test-' + id + '" novalidate><h2>' + esc(titel) + "</h2><p>" + esc(hinweis) + "</p>" +
      fragen.map(function (f, i) {
        return '<fieldset class="k-frage" data-index="' + i + '"><legend><span class="n">' + (i + 1) + "</span>" + esc(f.frage) + "</legend>" +
          f.antworten.map(function (a, j) { return '<label><input type="radio" name="f' + i + '" value="' + j + '"> ' + esc(a) + "</label>"; }).join("") +
          '<p class="k-rueckmeldung" hidden></p></fieldset>';
      }).join("") +
      '<p class="err" hidden>Bitte beantworte alle Fragen.</p><div class="k-test-aktionen"><button type="submit" class="btn">Auswerten</button><button type="button" class="btn ghost" data-neu hidden>Noch einmal versuchen</button></div>' +
      '<div class="status k-ergebnis" role="status" tabindex="-1" hidden></div></form>';
  }

  function bindeTest(form, fragen, auswerten) {
    var ergebnis = form.querySelector(".k-ergebnis");
    var fehler = form.querySelector(".err");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var antworten = fragen.map(function (f, i) { var r = form.querySelector('input[name="f' + i + '"]:checked'); return r ? Number(r.value) : null; });
      var fehlt = antworten.indexOf(null);
      if (fehlt !== -1) {
        fehler.hidden = false;
        form.querySelectorAll('input[name="f' + fehlt + '"]')[0].focus();
        return;
      }
      fehler.hidden = true;
      var richtig = 0;
      fragen.forEach(function (f, i) {
        var ok = antworten[i] === f.richtig;
        if (ok) richtig++;
        var feld = form.querySelector('.k-frage[data-index="' + i + '"]');
        feld.classList.toggle("k-richtig", ok);
        feld.classList.toggle("k-falsch", !ok);
        var r = feld.querySelector(".k-rueckmeldung");
        r.hidden = false;
        r.innerHTML = (ok ? "<strong>Richtig.</strong> " : "<strong>Nicht richtig.</strong> Richtig ist: „" + esc(f.antworten[f.richtig]) + "“. ") + esc(f.erklaerung) + (f.seite ? ' <span class="label">' + esc(f.seite) + (f.modul ? " · Modul " + zwei(f.modul) : "") + "</span>" : "");
      });
      form.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
      form.querySelector('[type="submit"]').hidden = true;
      form.querySelector("[data-neu]").hidden = false;
      ergebnis.hidden = false;
      ergebnis.innerHTML = auswerten(richtig, fragen.length);
      ergebnis.focus();
    });
    form.querySelector("[data-neu]").addEventListener("click", function () { zeige(); window.scrollTo(0, form.offsetTop - 16); });
  }

  var abschlussFragen = null;
  function abschluss() {
    if (!abschlussOffen()) {
      app.innerHTML = '<section class="k-kopf"><p class="label">Abschluss</p><h1>Abschlusstest</h1><p class="lead">Der Abschlusstest öffnet sich, wenn du alle ' + MODULE.length + " Module bestanden hast. Bisher: " + anzahlBestanden() + " von " + MODULE.length + '.</p><p><a class="btn" href="#uebersicht">Zur Übersicht</a></p></section>';
      return;
    }
    abschlussFragen = [];
    MODULE.forEach(function (m) { abschlussFragen = abschlussFragen.concat(ziehe(m.pool, ABSCHLUSS_JE_MODUL, m.nr)); });
    var gesamt = abschlussFragen.length;
    app.innerHTML = '<section class="k-kopf"><p class="label">Abschluss</p><h1>Abschlusstest</h1><p class="lead">' + gesamt + " Fragen aus allen Modulen, bei jedem Versuch neu zusammengestellt. Bestanden ab " + benoetigt(gesamt) + " richtigen Antworten.</p>" +
      (stand.abschluss ? '<p class="fine">Letzter Versuch: ' + stand.abschluss.richtig + " von " + stand.abschluss.gesamt + (stand.abschluss.bestanden ? ", bestanden." : ", nicht bestanden.") + "</p>" : "") + "</section>" +
      testFormular("abschluss", abschlussFragen, "Alle Module", "Beantworte jede Frage. Die Auswertung zeigt dir zu jeder Frage die Erklärung und das Modul.");
    bindeTest(app.querySelector("form.k-test"), abschlussFragen, function (richtig, gesamt) {
      var ok = richtig >= benoetigt(gesamt);
      stand.abschluss = { richtig: richtig, gesamt: gesamt, bestanden: ok || (stand.abschluss && stand.abschluss.bestanden) };
      speichern(); zeichneNav("abschluss");
      return ok
        ? "<strong>Abschlusstest bestanden: " + richtig + " von " + gesamt + " richtig.</strong> In der fertigen Kursversion stellt die Piercing Akademie danach deine Teilnahmebescheinigung aus. In diesem Prototyp wird keine Bescheinigung erzeugt."
        : "<strong>Noch nicht bestanden: " + richtig + " von " + gesamt + " richtig.</strong> Du brauchst " + benoetigt(gesamt) + ". Wiederhole die Module, deren Fragen du falsch hattest.";
    });
  }

  // ---------- Router ----------
  function zeige() {
    var h = (window.location.hash || "#uebersicht").slice(1);
    // Direktlink für den Prüfmodus: …#alles schaltet alle Module frei
    if (h === "alles") { stand.vorschau = true; speichern(); h = "uebersicht"; }
    var treffer = /^modul-(\d+)(?:-(lernen|verstehen|ueben|testen))?$/.exec(h);
    if (treffer && modul(Number(treffer[1]))) {
      var m = modul(Number(treffer[1]));
      zeichneNav(m.nr); modulAnsicht(m, treffer[2]);
    } else if (h === "abschluss") {
      zeichneNav("abschluss"); abschluss();
    } else {
      zeichneNav("uebersicht"); uebersicht();
    }
  }
  window.addEventListener("hashchange", function () { zeige(); app.focus({ preventScroll: true }); window.scrollTo(0, 0); });
  zeige();
})();
