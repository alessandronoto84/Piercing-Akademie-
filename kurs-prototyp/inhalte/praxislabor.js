/* Praxislabor: Übungsaufgaben am Silikon-Übungsmodell mit Selbstkontrolle.
   Grundlage: Ablauf aus Modul 09 (Schritte 1–26, Kursbuch S. 111–112), Checklisten aus Modul 05 und die Übung aus Modul 08
   („Übe am Silikon-Ohr: Stelle anzeichnen, Klemme setzen, Kanüle ansetzen (ohne zu stechen)“).
   Gestochen wird hier nie: Das bleibt dem Praxistag unter Anleitung vorbehalten.
   Format: { id, titel, modul (Bezug), material: [...], schritte: [...], kontrolle: [...] } */
window.KURS = window.KURS || { module: [] };
window.KURS.labor = {
  einleitung: "Hier übst du die Handgriffe, die du am Praxistag brauchst. Teil 1 sind Trockenübungen ohne Stechen: am Silikon-Übungsmodell, auf Papier und am Arbeitsplatz. In Teil 2 zeigen dir Clips, wie gestochen wird; im Paket Komplett stichst du dort mit dem Übungsset selbst ins Silikonohr. Jede Aufgabe hat eine Selbstkontrolle. Hake nur ab, was du wirklich geschafft hast. Bring die ausgefüllte Übungsvorlage zum Praxistag mit.",
  sicherheit: [
    "Bei den Trockenübungen wird nicht gestochen. Ins Silikonohr stichst du nur mit dem Übungsset aus dem Paket Komplett. In Menschen oder Tiere stichst du nie; das lernst du am Praxistag unter Anleitung.",
    "Benutze Kanülen nur als Trockenübung mit aufgesetzter Schutzkappe. Gebrauchte oder offene Kanülen gehören sofort in den Nadelabwurfbehälter.",
    "Der Online-Kurs und das Praxislabor ersetzen keine praktische Anleitung."
  ],
  material: "Silikon-Übungsmodell (z. B. Silikon-Ohr oder Übungshaut aus dem Fachhandel für Piercing- und Tattoobedarf; im Paket Komplett ist ein Übungsset dabei), Einmal-Hautmarker, Lineal mit Millimetereinteilung, Klemme, Kanüle mit Schutzkappe, Einmalunterlage, Handschuhe, die Übungsvorlage zum Ausdrucken.",
  aufgaben: [
    {
      id: "arbeitsplatz",
      titel: "Arbeitsplatz aufbauen",
      modul: 5,
      material: ["Einmalunterlage", "Alles aus der Checkliste „Arbeitsplatz vor jedem Kunden“ (soweit vorhanden, sonst Platzhalter mit Beschriftung)"],
      schritte: [
        "Hände waschen und vollständig trocknen, Schmuck an Händen und Unterarmen ablegen.",
        "Arbeitsfläche mit der Einmalunterlage abdecken.",
        "Alles aus der Checkliste „Arbeitsplatz vor jedem Kunden“ bereitlegen, ohne in die Liste zu schauen.",
        "Bei jeder Sterilgut-Verpackung den Blick üben: Verpackung unbeschädigt, Indikator umgeschlagen, Lagerfrist eingehalten.",
        "Foto von oben machen und mit der Checkliste vergleichen. Dreimal wiederholen."
      ],
      kontrolle: [
        "Beim dritten Aufbau fehlte nichts aus der Checkliste.",
        "Der Nadelabwurfbehälter steht in Reichweite.",
        "Nichts liegt auf einer ungeschützten Fläche.",
        "Ich kann zu jeder Sterilgut-Verpackung sagen, worauf ich geachtet habe."
      ]
    },
    {
      id: "haende",
      titel: "Hände vorbereiten und Handschuhe anziehen",
      modul: 5,
      material: ["Händedesinfektionsmittel", "Einmalhandschuhe in deiner Größe"],
      schritte: [
        "Nägel kurz, kein Nagellack, kein Schmuck an Händen und Unterarmen.",
        "Hände desinfizieren, wie in Modul 05 beschrieben; die Einwirkzeit steht auf dem Desinfektionsmittel.",
        "Warten, bis die Hände vollständig trocken sind.",
        "Handschuhe anziehen, ohne die Außenseite mit der bloßen Hand mehr als nötig zu berühren.",
        "Handschuhe ausziehen, ohne die Außenseite mit der Haut zu berühren, und entsorgen. Danach Hände desinfizieren."
      ],
      kontrolle: [
        "Die Hände waren trocken, bevor ich die Handschuhe angezogen habe.",
        "Ich habe die Einwirkzeit auf dem Etikett nachgelesen und eingehalten.",
        "Beim Ausziehen hat die Außenseite meine Haut nicht berührt.",
        "Ich kann erklären, warum ein Handschuhwechsel ohne Händedesinfektion nicht genügt."
      ]
    },
    {
      id: "anzeichnen-papier",
      titel: "Anzeichnen auf Papier",
      modul: 9,
      material: ["Übungsvorlage (Seite 1)", "Einmal-Hautmarker oder feiner Stift", "Lineal"],
      schritte: [
        "Übungsvorlage in Originalgröße drucken (100 %, nicht „an Seite anpassen“). Die Kontrollstrecke muss genau 100 mm messen.",
        "Für jede Zeile das vorgegebene Punktpaar abmessen und rechts daneben auf der Linie nachzeichnen.",
        "Bei der Symmetrie-Übung die Punkte links auf die rechte Seite spiegeln: gleicher Abstand zur Mittellinie, gleiche Höhe.",
        "Erst wenn alles gezeichnet ist, nachmessen und die Abweichung in Millimetern notieren."
      ],
      kontrolle: [
        "Meine Punkte sind klein und deutlich, kein großer Fleck.",
        "Bei allen Paaren weiche ich höchstens 1 mm ab.",
        "Bei der Symmetrie-Übung liegen alle gespiegelten Punkte höchstens 1 mm daneben.",
        "Ich habe die Abweichungen auf der Vorlage notiert."
      ]
    },
    {
      id: "anzeichnen-modell",
      titel: "Anzeichnen am Übungsmodell",
      modul: 8,
      material: ["Silikon-Übungsmodell", "Einmal-Hautmarker", "Datenblätter aus Modul 08"],
      schritte: [
        "Datenblatt für Lobe, Helix und Tragus in Modul 08 lesen.",
        "Ein- und Austrittsstelle für jedes dieser Piercings am Modell markieren (Ablauf Schritt 9).",
        "Bei Lobe beidseitig: Ohrläppchen links und rechts auf gleicher Höhe markieren und von vorn kontrollieren, zum Beispiel mit einem Foto.",
        "Jemanden die Markierung ansehen lassen, als wäre er der Kunde (Schritt 10), und bei Bedarf korrigieren."
      ],
      kontrolle: [
        "Jede Markierung passt zum Datenblatt in Modul 08.",
        "Bei Lobe beidseitig sind beide Punkte auf dem Foto von vorn auf gleicher Höhe.",
        "Ich habe die Markierung zeigen lassen und erklärt, warum sie dort sitzt.",
        "Ich weiß, was ich tue, wenn die Markierung dem Kunden nicht gefällt."
      ]
    },
    {
      id: "klemme-kanuele",
      titel: "Klemme setzen und Kanüle ansetzen, ohne zu stechen",
      modul: 8,
      material: ["Silikon-Übungsmodell mit Markierung aus Aufgabe 4", "Klemme bzw. Nadelauffangrohr", "Kanüle mit aufgesetzter Schutzkappe"],
      schritte: [
        "Handschuhe anziehen (Aufgabe 2).",
        "Klemme an der Markierung ansetzen (Ablauf Schritt 11), sodass Ein- und Austrittspunkt in der Öffnung liegen.",
        "Kanüle mit Schutzkappe an der Eintrittsstelle ansetzen, Richtung Austrittspunkt, von der sichtbaren Seite aus (Schritt 12). Nicht stechen.",
        "Laut sagen, was als Nächstes käme: Schritte 13 bis 19 aus Modul 09.",
        "Klemme lösen, Kanüle mit Schutzkappe ablegen. Fünfmal wiederholen, auch an anderen Stellen."
      ],
      kontrolle: [
        "Die Markierungen lagen jedes Mal in der Öffnung der Klemme.",
        "Die Kanüle zeigte von der sichtbaren Seite gerade auf den Austrittspunkt.",
        "Die Schutzkappe blieb die ganze Zeit auf der Kanüle.",
        "Ich konnte die Schritte 13 bis 19 in der richtigen Reihenfolge sagen."
      ]
    },
    {
      id: "ablauf",
      titel: "Den ganzen Ablauf aus dem Gedächtnis",
      modul: 9,
      material: ["Übungsvorlage (Seite 2) oder ein leeres Blatt"],
      schritte: [
        "Alle 26 Schritte des Ablaufs aus Modul 09 aus dem Gedächtnis aufschreiben.",
        "Mit Modul 09 vergleichen und Fehlendes rot ergänzen.",
        "Am nächsten Tag wiederholen, bis alles ohne Rot stimmt.",
        "Die Pflegehinweise (Schritte 24 und 25) einer anderen Person laut erklären, als wäre sie dein Kunde."
      ],
      kontrolle: [
        "Alle 26 Schritte stimmen, in der richtigen Reihenfolge.",
        "Ich kann erklären, warum der Schmuck durch den Stichkanal gedrückt und nicht gezogen wird (Schritt 16).",
        "Ich habe die Pflegehinweise ohne Spickzettel erklärt."
      ]
    },
    {
      id: "notfall",
      titel: "Notfall durchspielen",
      modul: 9,
      material: ["Checkliste „Nach einer Nadelstichverletzung“", "Modul 09, Lektion „Kreislaufprobleme und Notfälle“"],
      schritte: [
        "Mit einer zweiten Person durchspielen: Der „Kunde“ wird während der Vorbereitung blass und sagt, ihm sei schwindelig. Was tust du, Schritt für Schritt?",
        "Danach mit der Lektion „Kreislaufprobleme und Notfälle“ in Modul 09 vergleichen.",
        "Die Checkliste „Nach einer Nadelstichverletzung“ aus dem Gedächtnis aufsagen und vergleichen."
      ],
      kontrolle: [
        "Ich habe richtig reagiert, ohne nachzuschauen.",
        "Ich weiß, wo in meinem Übungsraum Erste-Hilfe-Kasten und Telefon sind, und kenne die Notrufnummer 112.",
        "Ich konnte die Checkliste nach einer Nadelstichverletzung vollständig aufsagen."
      ]
    }
  ]
};

/* Stichübungen am Silikonohr: selbst gestochen wird nur im Paket Komplett (Übungsset der Akademie).
   Alle anderen sehen dieselben Übungen als „Zuschauen“: Clip und Ablauf, ohne Selbstkontrolle.
   Gestochen wird ausschließlich ins Silikon. Ablauf nach Kursbuch S. 111–112 (Schritte 9–19), Werte aus den Datenblättern (Modul 08).
   clip: Id eines Clips in inhalte/clips.js. Fehlt der Clip noch, sehen Teilnehmer nichts; im Prüfmodus erscheint ein Hinweis.
   Drehliste für die Clips: CLIPS-PRAXISLABOR.md im Hauptordner. */
window.KURS.labor.stich = {
  pakete: ["komplett"],
  einleitung: "Mit deinem Übungsset stichst du jetzt selbst: ins Silikonohr, nach dem Ablauf aus Modul 09 und den Datenblättern aus Modul 08. Schau dir zuerst den Clip an, dann übst du. Bring dein gestochenes Silikonohr und das Übungsprotokoll zum Praxistag mit: Dort schauen wir uns deine Stichkanäle gemeinsam an.",
  zuschauen: "In diesen Clips siehst du, wie gestochen wird: am Silikonohr, Schritt für Schritt nach dem Ablauf aus Modul 09 und den Datenblättern aus Modul 08. Schau genau hin und sprich die Schritte mit. Selbst stechen lernst du am Praxistag unter Anleitung; im Paket Komplett übst du vorher zu Hause mit dem Übungsset.",
  sicherheit: [
    "Gestochen wird nur ins Silikonohr. Nie in dich, in andere Menschen oder in Tiere, auch nicht „nur zum Ausprobieren“.",
    "Kanülen nie zurück in die Schutzkappe stecken. Die Stahlnadel kommt direkt nach dem Herausziehen in den Nadelabwurfbehälter; der volle Behälter wird fest verschlossen im Restmüll entsorgt.",
    "Arbeite mit Handschuhen auf einer Einmalunterlage, ohne Ablenkung und außer Reichweite von Kindern. Kanülen und Abwurfbehälter bewahrst du verschlossen auf.",
    "Stichst du dich doch einmal, gilt die Checkliste „Nach einer Nadelstichverletzung“ aus Modul 05."
  ],
  set: ["Silikonohr", "Venenverweilkanülen 18G und 16G", "kleiner Nadelabwurfbehälter", "Klemme (Snaptile oder Gazeklemme)", "Einmal-Hautmarker", "Einmalhandschuhe und Einmalunterlage", "Übungsschmuck: Labret, Klemmkugelring (BCR), Barbell 38 mm", "Schere für den Kunststoffüberzug"],
  aufgaben: [
    {
      id: "stich-kanuele",
      titel: "Die Kanüle sicher handhaben",
      modul: 7,
      clip: "labor-kanuele",
      clipText: "Kanüle aus der Verpackung nehmen, Schutzkappe ab, Stahlnadel nach dem Stich direkt in den Abwurfbehälter.",
      material: ["18G-Kanüle", "Nadelabwurfbehälter", "Handschuhe"],
      schritte: [
        "Abwurfbehälter so hinstellen, dass du ihn mit der Arbeitshand ohne Umgreifen erreichst.",
        "Kanüle aus der Verpackung nehmen, ohne die Nadel zu berühren. Schutzkappe gerade abziehen und weglegen.",
        "Kanüle am Griff halten und ins Silikon stechen (irgendwo, nur zum Üben der Bewegung).",
        "Stahlnadel am Griff herausziehen, der Kunststoffüberzug bleibt im Silikon. Nadel sofort in den Abwurfbehälter.",
        "Dreimal wiederholen, bis die Bewegung von der Verpackung bis zum Abwurf flüssig sitzt."
      ],
      kontrolle: [
        "Ich habe die Schutzkappe kein einziges Mal zurückgesteckt.",
        "Die Nadel war nach dem Herausziehen sofort im Abwurfbehälter, nie auf dem Tisch.",
        "Der Kunststoffüberzug ist jedes Mal im Silikon geblieben."
      ]
    },
    {
      id: "stich-lobe",
      titel: "Lobe stechen und Labret einsetzen",
      modul: 9,
      clip: "labor-lobe",
      clipText: "Lobe am Silikonohr: anzeichnen, Klemme, 18G stechen, Nadel heraus, Überzug kürzen, Labret durchdrücken, Kugel aufdrehen.",
      material: ["Silikonohr", "18G-Kanüle", "Klemme", "Hautmarker", "Schere", "Labret", "Klemmzange"],
      schritte: [
        "Ein- und Austrittsstelle am Ohrläppchen markieren (Schritt 9) und die Markierung prüfen (Schritt 10).",
        "Klemme anlegen, die Markierung liegt im Fenster (Schritt 11).",
        "Zügig in die sichtbare Seite stechen, also von vorn, wo später die Kugel sitzt (Schritt 12).",
        "Stahlnadel herausziehen und entsorgen; der Kunststoffüberzug bleibt im Stichkanal (Schritt 13).",
        "Überzug mit der Schere leicht kürzen und den Labret hineinstecken (Schritte 14 und 15).",
        "Den Labret durch den Stichkanal drücken, nicht ziehen (Schritt 16). Röhrchen vorsichtig abziehen (Schritt 17).",
        "Kugel greifen, Schmuck mit der Klemmzange halten und die Kugel fest aufdrehen (Schritte 18 und 19).",
        "Dreimal an verschiedenen Stellen des Ohrläppchens wiederholen."
      ],
      kontrolle: [
        "Der Austritt liegt höchstens 1 mm neben meiner hinteren Markierung.",
        "Der Stab steht gerade durch das Ohrläppchen, nicht schräg.",
        "Ich habe den Schmuck gedrückt, nicht gezogen.",
        "Die Kugel sitzt fest, und die Platte liegt hinten flach an."
      ]
    },
    {
      id: "stich-upperlobe",
      titel: "Upper Lobe: drei Stiche in einer Reihe",
      modul: 8,
      clip: "labor-upper-lobe",
      clipText: "Drei Upper-Lobe-Punkte in gleichem Abstand anzeichnen, nachmessen und nacheinander stechen.",
      material: ["Silikonohr", "drei 18G-Kanülen", "Klemme", "Hautmarker", "Messschieber oder Lineal", "drei Labrets"],
      schritte: [
        "Drei Punkte im oberen Ohrläppchen in gleichem Abstand anzeichnen und mit dem Messschieber nachmessen.",
        "Erst wenn die Abstände stimmen: jeden Punkt nach dem Ablauf aus der vorigen Aufgabe stechen und mit einem Labret versehen.",
        "Von vorn ein Foto machen und die Reihe beurteilen."
      ],
      kontrolle: [
        "Die drei Abstände weichen höchstens 1 mm voneinander ab.",
        "Die Reihe folgt einer gleichmäßigen Linie, keiner der Punkte springt heraus.",
        "Jeder Austritt liegt höchstens 1 mm neben der hinteren Markierung."
      ]
    },
    {
      id: "stich-helix",
      titel: "Helix mit Klemmkugelring (BCR)",
      modul: 8,
      clip: "labor-helix",
      clipText: "Helix am Silikonohr stechen und einen Klemmkugelring einsetzen und schließen.",
      material: ["Silikonohr", "18G-Kanüle", "Klemme", "Hautmarker", "Schere", "Klemmkugelring (BCR)", "Ringöffnungs- und Ringschließzange"],
      schritte: [
        "Stelle an der Ohrkante anzeichnen (Datenblatt Helix, Modul 08) und mit der Klemme fixieren.",
        "Stechen, Nadel heraus und entsorgen, Überzug kürzen.",
        "Ring mit der Ringöffnungszange vorsichtig öffnen, ein Ende in den Überzug stecken und durch den Stichkanal schieben.",
        "Röhrchen abziehen, Kugel einsetzen und den Ring mit der Ringschließzange so schließen, dass die Kugel fest einrastet."
      ],
      kontrolle: [
        "Der Ring sitzt rund und ohne Knick; ich habe ihn nicht überdehnt.",
        "Die Kugel rastet fest ein und fällt beim Drehen des Rings nicht heraus.",
        "Der Stichkanal verläuft gerade durch den Knorpel des Silikonohrs."
      ]
    },
    {
      id: "stich-industrial",
      titel: "Industrial: zwei Stichkanäle auf einer Linie",
      modul: 8,
      clip: "labor-industrial",
      clipText: "Industrial am Silikonohr: beide Punkte so anzeichnen, dass ein 38-mm-Barbell gerade hindurchpasst, dann mit 16G stechen.",
      material: ["Silikonohr", "zwei 16G-Kanülen", "Hautmarker", "Barbell 38 mm"],
      schritte: [
        "Beide Punkte am oberen Ohrrand anzeichnen (Datenblatt Industrial): nahe dem Kopf und gegenüber am äußeren Rand.",
        "Den Barbell probehalber über die Markierungen halten: Er muss beide Punkte gerade verbinden, ohne das Ohr zu verbiegen.",
        "Beide Stellen mit der 16G-Kanüle stechen (Freihand, wie im Datenblatt). Nadeln jeweils sofort entsorgen.",
        "Den Barbell durch beide Überzüge führen und die Kugeln aufdrehen."
      ],
      kontrolle: [
        "Der Barbell liegt gerade und drückt die Ohrmuschel nicht zusammen.",
        "Beide Stichkanäle zeigen in dieselbe Richtung; der Stab gleitet ohne Kraft hindurch.",
        "Ich habe vorher geprüft, ob die Markierungen zur Schmucklänge passen."
      ]
    },
    {
      id: "stich-schmuck",
      titel: "Schmuck sichern und wechseln",
      modul: 7,
      clip: "labor-schmuck",
      clipText: "Kugel mit Kugelgreifer und Klemmzange aufdrehen, Klemmkugelring öffnen und schließen, Schmuck am Silikonohr wechseln.",
      material: ["Silikonohr mit gestochenen Kanälen", "Kugelgreifer", "Klemmzange", "Ringöffnungs- und Ringschließzange", "Übungsschmuck"],
      schritte: [
        "Eine Kugel mit dem Kugelgreifer aufnehmen und auf den Stab drehen, den du mit der Klemmzange hältst.",
        "Einen Klemmkugelring öffnen, die Kugel herausnehmen, wieder einsetzen und den Ring schließen.",
        "In einem fertigen Stichkanal den Labret gegen einen BCR tauschen und zurück.",
        "Merke dir: Beim echten Kunden wird der Ersteinsatz erst nach vollständiger Abheilung gewechselt (Modul 10)."
      ],
      kontrolle: [
        "Keine Kugel ist mir heruntergefallen oder weggesprungen.",
        "Der Ring ist nach dem Schließen wieder rund.",
        "Ich kann erklären, warum der Ersteinsatz beim Kunden nicht früh gewechselt wird."
      ]
    },
    {
      id: "stich-ablauf",
      titel: "Der ganze Ablauf in Echtzeit",
      modul: 9,
      clip: "labor-ablauf",
      clipText: "Der komplette Ablauf am Silikonohr, vom Arbeitsplatz bis zu den Pflegehinweisen, in normaler Geschwindigkeit.",
      material: ["Übungsset komplett", "eine zweite Person als „Kunde“", "Einverständniserklärung und Pflegehinweise (Vorlagen)"],
      schritte: [
        "Spiele den Ablauf aus Modul 09 von Schritt 4 bis 25 durch: Die zweite Person füllt die Einverständniserklärung aus, du bereitest den Arbeitsplatz vor.",
        "Gestochen wird ins Silikonohr, das neben der Person liegt; alles andere (Gespräch, Markierung zeigen, Pflegehinweise) machst du mit ihr.",
        "Lass die Person auf die Uhr schauen und am Ende sagen, was ihr aufgefallen ist."
      ],
      kontrolle: [
        "Ich habe keinen Schritt ausgelassen und die Reihenfolge eingehalten.",
        "Ich habe zwischendurch nach dem Befinden gefragt (Kreislauf).",
        "Die Pflegehinweise habe ich mündlich erklärt und schriftlich mitgegeben."
      ]
    }
  ]
};
