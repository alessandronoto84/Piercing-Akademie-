/* Modul 10 – Pflege und Wundheilstörungen. Quelle: Kursbuch Kap. 6 (S. 48–51). Korrektur: „Octenisept“ statt „Octinesept“.
   Fragen zu den Abheilzeiten erzeugt werkzeuge/fragen-erzeugen.js zusätzlich (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 10,
  titel: "Pflege und Wundheilstörungen",
  quelle: "Kursbuch Kap. 6, S. 48–51",
  ziel: "Du gibst die richtigen Pflegehinweise, kennst die Abheilzeiten und erkennst Wundheilstörungen, bevor sie zum Problem werden.",
  lektionen: [
    {
      titel: "Pflege anleiten",
      seite: "S. 48",
      inhalt: [
        { typ: "text", text: "Nach dem Stechen ist eine richtige Behandlung und Pflege durch den Kunden selbst unumgänglich, damit die Abheilung bestmöglich verläuft. Deshalb musst du den Kunden in jedem Fall darauf hinweisen, wie das neu gestochene Piercing behandelt und gepflegt wird." },
        { typ: "merke", text: "Gib dem Kunden direkt das richtige Pflegemittel und die Pflegehinweise in schriftlicher Form mit." }
      ],
      fragen: [
        ["Wer pflegt das frische Piercing nach dem Stechen?", ["Der Kunde selbst", "Nur der Piercer", "Niemand"], "Deshalb muss er genau angeleitet werden.", "S. 48"],
        ["Wie gibst du Pflegehinweise am besten weiter?", ["Schriftlich, zusammen mit dem Pflegemittel", "Gar nicht", "Nur per Social Media"], "Sehr zu empfehlen.", "S. 48"]
      ]
    },
    {
      titel: "Die richtigen Pflegemittel",
      seite: "S. 48",
      inhalt: [
        { typ: "tabelle", kopf: ["Pflegemittel", "Einsatz"], zeilen: [
          ["Prontolind oder Octenisept", "Nicht auf Knorpel anwenden: Der enthaltene Wirkstoff Octenidin ist toxisch für Knorpelgewebe."],
          ["Einfache Kochsalzlösung", "Für alle Piercings geeignet"],
          ["Chlorhexamed", "Für den Mundbereich"]
        ] },
        { typ: "praxis", text: "Frag vor der Empfehlung immer, wo das Piercing sitzt. Beim Knorpel bleibt Kochsalzlösung die sichere Wahl." }
      ],
      fragen: [
        ["Welcher Wirkstoff in Prontolind und Octenisept ist für Knorpel toxisch?", ["Octenidin", "Natriumchlorid", "Chlorhexidin"], "Nicht auf Knorpel anwenden.", "S. 48"],
        ["Welches Pflegemittel empfiehlst du für den Mundbereich?", ["Chlorhexamed", "Octenisept", "Teebaumöl pur"], "Laut Kursbuch.", "S. 48"],
        ["Welches Mittel passt für alle Piercings?", ["Einfache Kochsalzlösung", "Prontolind", "Octenisept"], "Auch bei Knorpel.", "S. 48"],
        ["Fall: Ein Kunde mit frischem Conch-Piercing fragt nach Prontolind. Was antwortest du?", ["Nicht beim Knorpel; ich empfehle Kochsalzlösung", "Ja, das ist ideal", "Ja, aber unverdünnt"], "Octenidin ist knorpeltoxisch.", "S. 48"]
      ]
    },
    {
      titel: "Abheilzeiten",
      seite: "S. 49",
      inhalt: [
        { typ: "text", text: "Jeder Mensch heilt anders, und einige Umstände beeinflussen die Heilungszeit. Die folgenden Zeiten sind Richtwerte, wenn das Piercing optimal und ohne Komplikationen verheilt." },
        { typ: "tabelle", kopf: ["Piercing", "Abheilzeit"], zeilen: [
          ["Knorpelpiercings", "mindestens 3 Monate"], ["Lobe", "ca. 2 Monate"], ["Bauchnabel", "ca. 4 bis 6 Monate"], ["Labret", "ca. 1 bis 2 Monate"], ["Lippenbändchen", "ca. 1 Monat"], ["Zunge", "ca. 1 Monat"], ["Brustwarze", "3 bis 12 Monate"], ["Augenbraue", "ca. 1 Monat"], ["Intim", "2 bis 3 Monate"]
        ] },
        { typ: "achtung", text: "Erst nach vollständiger Ausheilung darf der Schmuck gewechselt werden, sonst besteht die Gefahr von Komplikationen wie einer Infektion." }
      ],
      fragen: [
        ["Sind die Abheilzeiten feste Garantien?", ["Nein, es sind Richtwerte bei optimaler Heilung", "Ja, auf den Tag genau", "Ja, für jeden gleich"], "Jeder Mensch heilt anders.", "S. 49"],
        ["Wann darf der Schmuck gewechselt werden?", ["Erst nach vollständiger Ausheilung", "Nach einer Woche", "Jederzeit"], "Sonst droht eine Infektion.", "S. 49"],
        ["Fall: Eine Kundin will ihr 4 Wochen altes Helix-Piercing gegen einen Ring tauschen. Was rätst du?", ["Warten: Knorpel braucht mindestens 3 Monate", "Sofort wechseln", "Den Schmuck ganz herausnehmen"], "Erst nach vollständiger Ausheilung wechseln.", "S. 49"]
      ]
    },
    {
      titel: "Fehlende Epithelisierung und Nachbluten",
      seite: "S. 50",
      inhalt: [
        { typ: "tabelle", kopf: ["Störung", "Was tun"], zeilen: [
          ["Fehlende Epithelisierung", "Nach 10 bis 14 Tagen einen Arzt aufsuchen. Bei der Epithelisierung wandern Epithelzellen vom Wundrand ein und machen aus feuchtem Granulationsgewebe festes Narbengewebe; die Wunde wird kleiner."],
          ["Nachbluten", "Bei ständigem Nachbluten einen Arzt aufsuchen. Mögliche Ursachen: Diabetes, Bindegewebsschwäche, Bluterkrankheit."]
        ] }
      ],
      fragen: [
        ["Wann soll der Kunde bei fehlender Epithelisierung zum Arzt?", ["Nach 10 bis 14 Tagen", "Nach 1 bis 2 Tagen", "Nach 6 Monaten"], "So steht es im Kursbuch.", "S. 50"],
        ["Was kann ständiges Nachbluten verursachen?", ["Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit", "Zu wenig Schlaf", "Zu viel Wasser"], "Dann einen Arzt aufsuchen.", "S. 50"],
        ["Was passiert bei der Epithelisierung?", ["Zellen wandern vom Wundrand ein, die Wunde wird kleiner", "Die Wunde entzündet sich", "Der Schmuck wächst ein"], "Regenerationsphase.", "S. 50"]
      ]
    },
    {
      titel: "Entzündungen",
      seite: "S. 50",
      inhalt: [
        { typ: "text", text: "Entzündet sich ein Piercing und eitert, muss gehandelt werden. Meist sind Keime oder Fremdstoffe, zum Beispiel von den Haaren, in die Wunde gelangt." },
        { typ: "liste", punkte: [
          "Eiter muss abfließen können, sonst besteht die Gefahr einer Blutvergiftung.",
          "Täglich reinigen.",
          "Kamille, Teebaumöl oder Manukahonig können helfen.",
          "Die Salbe „Tyrosur“ aus der Apotheke kann sehr helfen; lege dem Kunden nahe, sie zu kaufen."
        ] },
        { typ: "ergaenzung", text: "Bei Fieber, sich ausbreitender Rötung, starken oder zunehmenden Schmerzen schickst du den Kunden sofort zum Arzt." },
        { typ: "merke", text: "Raucher, Alkoholiker und Diabetiker gehören zu den Risikogruppen; bei ihnen treten Komplikationen schneller auf." }
      ],
      fragen: [
        ["Was ist meist die Ursache einer Entzündung?", ["Keime oder Fremdstoffe in der Wunde", "Zu viel Pflege", "Zu dünner Schmuck"], "Zum Beispiel von den Haaren.", "S. 50"],
        ["Was droht, wenn Eiter nicht abfließen kann?", ["Eine Blutvergiftung", "Schnellere Heilung", "Nichts"], "Eiter muss abfließen können.", "S. 50"],
        ["Welche Salbe aus der Apotheke nennt das Kursbuch?", ["Tyrosur", "Bepanthen", "Voltaren"], "Lege dem Kunden nahe, sie zu kaufen.", "S. 50"],
        ["Was kann bei einer Entzündung helfen?", ["Kamille, Teebaumöl oder Manukahonig und tägliches Reinigen", "Den Schmuck verkleben", "Nichts tun"], "Siehe Kursbuch.", "S. 50"],
        ["Fall: Ein Kunde ruft an, das Piercing ist stark gerötet, und er hat Fieber. Was tust du?", ["Ich schicke ihn sofort zum Arzt", "Ich empfehle Teebaumöl und abwarten", "Ich rate, den Schmuck festzukleben"], "Ergänzung der Akademie.", "Ergänzung"]
      ]
    },
    {
      titel: "Wildes Fleisch",
      seite: "S. 51",
      inhalt: [
        { typ: "text", text: "Wildes Fleisch entsteht durch dauerhafte Reizung der Unterhaut: Eine rote, fleischähnliche Masse wächst aus der Unterhaut zwischen den Wundrändern hervor, sodass die Wundränder nicht mehr zusammenfinden." },
        { typ: "schritte", titel: "So kannst du vorgehen", punkte: [
          "Nichts tun: Es kann von selbst verschwinden; meist stößt der Körper es ab.",
          "Dehydrieren: Kochsalzlösung, Kamillentee, Wasserstoffperoxid, Teebaumöl oder Eukalyptusöl helfen, es zurückzudrängen.",
          "Wildfleischdisk: eine Kunststoffscheibe, die auf den Schmuck gestülpt wird.",
          "Schmuckform oder Material ändern, zum Beispiel ein Titan-Labret gegen einen PTFE-Barbell tauschen.",
          "Hilft nichts davon: Der Kunde geht zum Arzt oder Dermatologen, der das wilde Fleisch chirurgisch entfernt."
        ] }
      ],
      fragen: [
        ["Wodurch entsteht wildes Fleisch?", ["Durch dauerhafte Reizung der Unterhaut", "Durch zu viel Pflege", "Durch Kälte"], "Rote, fleischähnliche Masse.", "S. 51"],
        ["Was ist der erste Weg bei wildem Fleisch?", ["Nichts tun, oft stößt der Körper es ab", "Sofort operieren", "Abschneiden"], "Weg 1 von 5.", "S. 51"],
        ["Was ist eine Wildfleischdisk?", ["Eine Kunststoffscheibe, die auf den Schmuck gestülpt wird", "Ein Pflaster", "Eine Tablette"], "Weg 3 von 5.", "S. 51"],
        ["Welcher Schmuckwechsel kann helfen?", ["Zum Beispiel ein Titan-Labret gegen einen PTFE-Barbell tauschen", "Größeren Stahlschmuck einsetzen", "Schmuck entfernen und Loch zukleben"], "Weg 4 von 5.", "S. 51"],
        ["Wer entfernt wildes Fleisch, wenn nichts hilft?", ["Ein Arzt bzw. Dermatologe, chirurgisch", "Der Piercer mit der Schere", "Niemand"], "Weg 5 von 5.", "S. 51"]
      ]
    }
  ],
  uebung: [
    "Schreibe ein Pflegeblatt für ein frisches Helix-Piercing, das du einem Kunden mitgeben würdest.",
    "Lerne die Abheilzeiten-Tabelle auswendig und frag dich selbst ab.",
    "Überlege, welche Fragen du einem Kunden mit geröteter Einstichstelle stellst."
  ]
});
