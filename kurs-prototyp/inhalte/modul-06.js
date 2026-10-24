/* Modul 06 – Material und Schmuck. Quelle: Kursbuch Kap. 7 (S. 52–60) und Kap. 8 (S. 61–63), Überlänge S. 74.
   Korrekturen gegenüber dem Buch: „Chirurgenstahl“ statt „Chirurgiestahl“, „Niob“ statt „Nionium“ (siehe KURS-RECHERCHE.md). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 6,
  titel: "Material und Schmuck",
  quelle: "Kursbuch Kap. 7 und 8, S. 52–63",
  ziel: "Du weißt, welche Materialien als Ersteinsatz in Frage kommen, erkennst die gängigen Schmuckformen und kennst die Grundregel zur Überlänge.",
  lektionen: [
    {
      titel: "Titan G23",
      inhalt: [
        { typ: "text", text: "Für Piercing-Produkte wird ausschließlich das Hightech-Titan „Ti6Al4V ELI, Titan der Güteklasse 23“ verwendet, kurz G23-Titan. Es ist weltweit für den unbegrenzten chirurgischen Einsatz zugelassen, auch für Implantate wie Herzschrittmacher oder künstliche Gelenke." },
        { typ: "liste", titel: "Eigenschaften von G23-Titan", punkte: ["wiegt nur etwa die Hälfte von Stahl", "lässt sich durch Anodisieren farbig gestalten", "ist nickelfrei und damit antiallergen", "leitet kaum Wärme oder Kälte", "hat einen sehr starken Oxidmantel, ist korrosionsbeständig und dauerhaft farbbeständig"] },
        { typ: "text", text: "Varianten: Blackline-Titan G23 hat eine hauchdünne, abriebfeste PVD-Beschichtung (Physical Vapor Deposition) und ist kratzbeständig, farbsicher und biochemisch verträglich. Zirkon-Gold-Titan G23 ist eine hautverträglichere Alternative zu Goldschmuck: glatter, leichter, preiswerter und widerstandsfähig." },
        { typ: "ergaenzung", text: "Implant-Titan Ti6Al4V ELI wird international nach der Norm ASTM F136 spezifiziert. Achte beim Einkauf auf einen entsprechenden Materialnachweis des Herstellers." }
      ]
    },
    {
      titel: "Chirurgenstahl und Nickelallergie",
      inhalt: [
        { typ: "text", text: "Als Schmuck verwenden Piercer drei Stähle: Komposition D Implantatstahl, Chirurgenstahl 316 LVM und am häufigsten Chirurgenstahl 316L. Diese Stähle erfüllen die Kriterien der EU-Nickelrichtlinie, um als Zweiteinsatz (nach vollständiger Abheilung) unbegrenzt getragen zu werden." },
        { typ: "achtung", text: "Chirurgenstahl 316L enthält 10 bis 14 Prozent Nickel und ist als Ersteinsatz ungeeignet. Als Zweiteinsatz ist er meist unbedenklich. 303er Stahl (hochschwefelhaltig) ruft bei nickelsensitiven Personen erhebliche Reaktionen hervor und ist unter allen Umständen zu meiden." },
        { typ: "merke", text: "Als Ersteinsatz immer G23-Titan oder PTFE. Viele Menschen haben eine Nickelallergie, oft ohne es zu wissen. Implantanium, Niob oder hochreines Gold wären möglich, sind aber wirtschaftlich nicht sinnvoll." },
        { typ: "text", text: "Symptome einer Nickelallergie: Die Haut rötet sich, schwillt an, wird rau, trocken und juckt; manchmal schuppen oder nässen die Kontaktekzeme. Der Ausschlag kann begrenzt bleiben oder sich über den Körper ausbreiten. Er tritt erst etwa 48 bis 72 Stunden nach dem Kontakt auf (Spättyp-Allergie) und ist deshalb schwer zu erkennen." },
        { typ: "ergaenzung", text: "Nach EU-Recht (REACH, Anhang XVII, Eintrag 27) dürfen Metallteile, die in durchstochene Körperstellen eingesetzt werden, höchstens 0,2 µg Nickel pro cm² und Woche abgeben (Prüfung nach EN 1811). Die Empfehlung der Akademie, nur G23-Titan oder PTFE als Ersteinsatz zu verwenden, geht darüber hinaus." }
      ]
    },
    {
      titel: "PTFE",
      inhalt: [
        { typ: "text", text: "PTFE (Polytetrafluorethylen, bekannt unter dem Handelsnamen Teflon) ist ein vollfluoriertes Polymer. Es wurde 1938 von Dr. Roy Plunkett bei DuPont zufällig entdeckt und nicht, wie oft vermutet, für die Raumfahrt entwickelt." },
        { typ: "liste", titel: "Besonderheiten", punkte: ["sehr reaktionsträge, selbst aggressive Säuren greifen es nicht an", "sehr geringer Reibungskoeffizient", "an PTFE haftet so gut wie nichts, das macht es zum idealen Ersteinsatz", "mit PTFE als Ersteinsatz sind deutlich kürzere Abheilzeiten möglich als mit Titan", "wegen der hohen Wärmebeständigkeit problemlos autoklavierbar"] },
        { typ: "achtung", text: "Ausnahme Zungenpiercing: hier kein PTFE verwenden (Kursbuch S. 90)." }
      ]
    },
    {
      titel: "Schmucklehre",
      inhalt: [
        { typ: "text", text: "Für verschiedene Körperstellen werden verschiedene Schmuckarten verwendet, beim Ersteinsatz wie beim Zweiteinsatz." },
        { typ: "tabelle", kopf: ["Schmuck", "Beschreibung", "Typischer Einsatz"], zeilen: [
          ["Curved Barbell (Banane)", "Leicht gebogener Stab mit Kugeln", "Bauchnabel, Augenbraue, Rook"],
          ["Barbell", "Gerader Metallstift mit Gewinde und Schraubkugeln (engl. Hantel)", "Zunge, Industrial, Brustwarze"],
          ["Labret Stud (Stecker)", "Stift mit Platte auf einer Seite und Gewinde für Kugel oder Schmuckaufsatz", "Labret, Tragus, Conch, Lobe, Nostril"],
          ["Segmentring", "Zweiteilig; ein Segment mit Stiften wird mit der Zange eingesetzt", "In den Datenblättern nicht als Ersteinsatz genannt"],
          ["Clicker-Ring", "Zweiteilig mit Scharnier, öffnet und schließt ohne Werkzeug mit „Klick“", "In den Datenblättern nicht als Ersteinsatz genannt"],
          ["Ball Closure Ring (BCR)", "Klemmkugelring (Captive Ring), Kugel rastet in die Ringöffnung ein", "Tragus, Helix, Brustwarze, Intim"],
          ["Threaded Ring (Hufeisen)", "Offener Ring mit Gewinde an beiden Enden für Kugeln oder Spitzen", "Septum, Rook, Lippenbändchen"]
        ] },
        { typ: "text", text: "Weitere Formen sind zum Beispiel Bars, Dermal Anchor und Nose Studs." },
        { typ: "achtung", text: "Der Ersteinsatz braucht stets eine Überlänge von etwa 4 mm. Der frische Stichkanal kann anschwellen und darf während der Heilung nie durch Kugeln oder Plättchen eingeengt werden (S. 74)." }
      ]
    }
  ],
  uebung: [
    "Sortiere Schmuckstücke aus deinem Übungsset nach Barbell, Banane, Labret, BCR und Hufeisen.",
    "Erkläre einem Kunden in zwei Sätzen, warum du als Ersteinsatz kein 316L verwendest.",
    "Miss mit dem Messschieber die Länge eines Ersteinsatzes und plane die Überlänge."
  ],
  quiz: [
    { frage: "Welche Materialien verwendest du als Ersteinsatz?", antworten: ["Chirurgenstahl 316L", "G23-Titan oder PTFE", "303er Stahl"], richtig: 1, erklaerung: "316L enthält 10 bis 14 Prozent Nickel, 303er Stahl ist zu meiden.", seite: "S. 55–56" },
    { frage: "Wann treten Symptome einer Nickelallergie auf?", antworten: ["Sofort", "Etwa 48 bis 72 Stunden nach dem Kontakt", "Erst nach Wochen"], richtig: 1, erklaerung: "Es ist eine Spättyp-Allergie.", seite: "S. 57" },
    { frage: "Wofür ist Chirurgenstahl 316L geeignet?", antworten: ["Als Ersteinsatz", "Als Zweiteinsatz nach vollständiger Abheilung", "Gar nicht"], richtig: 1, erklaerung: "Als Zweiteinsatz ist er meist unbedenklich.", seite: "S. 55" },
    { frage: "Warum ist PTFE ein guter Ersteinsatz?", antworten: ["Es ist besonders schwer.", "An PTFE haftet so gut wie nichts; kürzere Abheilzeiten sind möglich.", "Es ist magnetisch."], richtig: 1, erklaerung: "Es ist zudem autoklavierbar.", seite: "S. 60" },
    { frage: "Wie nennt man den Ring, dessen Kugel in die Ringöffnung einrastet?", antworten: ["Clicker", "Ball Closure Ring (BCR)", "Segmentring"], richtig: 1, erklaerung: "Auch Klemmkugelring oder Captive Ring.", seite: "S. 63" },
    { frage: "Wie viel Überlänge braucht ein Ersteinsatz?", antworten: ["Keine", "Etwa 4 mm", "Etwa 2 cm"], richtig: 1, erklaerung: "Der frische Stichkanal kann anschwellen.", seite: "S. 74" }
  ]
});
