/* Praxislabor: Übungsaufgaben am Silikon-Übungsmodell mit Selbstkontrolle.
   Grundlage: Ablauf aus Modul 09 (Schritte 1–26, Kursbuch S. 111–112), Checklisten aus Modul 05 und die Übung aus Modul 08
   („Übe am Silikon-Ohr: Stelle anzeichnen, Klemme setzen, Kanüle ansetzen (ohne zu stechen)“).
   Gestochen wird hier nie: Das bleibt dem Praxistag unter Anleitung vorbehalten.
   Format: { id, titel, modul (Bezug), material: [...], schritte: [...], kontrolle: [...] } */
window.KURS = window.KURS || { module: [] };
window.KURS.labor = {
  einleitung: "Hier übst du die Handgriffe, die du am Praxistag brauchst, ohne zu stechen: am Silikon-Übungsmodell, auf Papier und als Trockenübung. Jede Aufgabe hat eine Selbstkontrolle. Hake nur ab, was du wirklich geschafft hast. Bring die ausgefüllte Übungsvorlage zum Praxistag mit.",
  sicherheit: [
    "Du stichst im Praxislabor nie: nicht ins Übungsmodell, nicht in dich, nicht in andere Menschen und nicht in Tiere. Gestochen wird erst am Praxistag unter Anleitung.",
    "Benutze Kanülen nur als Trockenübung mit aufgesetzter Schutzkappe. Gebrauchte oder offene Kanülen gehören sofort in den Nadelabwurfbehälter.",
    "Der Online-Kurs und das Praxislabor ersetzen keine praktische Anleitung."
  ],
  material: "Silikon-Übungsmodell (z. B. Silikon-Ohr oder Übungshaut; in den Paketen Praxis und Komplett enthalten, sonst im Fachhandel für Piercing- und Tattoobedarf), Einmal-Hautmarker, Lineal mit Millimetereinteilung, Klemme, Kanüle mit Schutzkappe, Einmalunterlage, Handschuhe, die Übungsvorlage zum Ausdrucken.",
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
