/* Modul 10 – Pflege und Wundheilstörungen. Quelle: Kursbuch Kap. 6 (S. 48–51). Korrektur: „Octenisept“ statt „Octinesept“. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 10,
  titel: "Pflege und Wundheilstörungen",
  quelle: "Kursbuch Kap. 6, S. 48–51",
  ziel: "Du gibst die richtigen Pflegehinweise, kennst die Abheilzeiten und erkennst Wundheilstörungen, bevor sie zum Problem werden.",
  lektionen: [
    {
      titel: "Pflege und Pflegemittel",
      inhalt: [
        { typ: "text", text: "Damit die Abheilung bestmöglich verläuft, ist die richtige Pflege durch den Kunden selbst unumgänglich. Weise jeden Kunden darauf hin, wie das neue Piercing behandelt und gepflegt wird. Am besten gibst du das passende Pflegemittel und die Pflegehinweise schriftlich direkt mit." },
        { typ: "tabelle", kopf: ["Pflegemittel", "Einsatz"], zeilen: [
          ["Prontolind oder Octenisept", "Nicht auf Knorpel anwenden: Der enthaltene Wirkstoff Octenidin ist toxisch für Knorpelgewebe."],
          ["Einfache Kochsalzlösung", "Für alle Piercings geeignet"],
          ["Chlorhexamed", "Für den Mundbereich"]
        ] }
      ]
    },
    {
      titel: "Abheilzeiten",
      inhalt: [
        { typ: "text", text: "Jeder Mensch heilt anders, und einige Umstände beeinflussen die Heilung. Die folgenden Zeiten sind Richtwerte für eine optimale, komplikationsfreie Heilung." },
        { typ: "achtung", text: "Erst nach vollständiger Ausheilung darf der Schmuck gewechselt werden, sonst besteht die Gefahr von Komplikationen wie einer Infektion." },
        { typ: "tabelle", kopf: ["Piercing", "Abheilzeit"], zeilen: [
          ["Knorpelpiercings", "mindestens 3 Monate"], ["Lobe", "ca. 2 Monate"], ["Bauchnabel", "ca. 4 bis 6 Monate"], ["Labret", "ca. 1 bis 2 Monate"], ["Lippenbändchen", "ca. 1 Monat"], ["Zunge", "ca. 1 Monat"], ["Brustwarze", "3 bis 12 Monate"], ["Augenbraue", "ca. 1 Monat"], ["Intim", "2 bis 3 Monate"]
        ] }
      ]
    },
    {
      titel: "Wundheilstörungen",
      inhalt: [
        { typ: "tabelle", kopf: ["Störung", "Was tun"], zeilen: [
          ["Fehlende Epithelisierung", "Nach 10 bis 14 Tagen einen Arzt aufsuchen."],
          ["Nachbluten", "Bei ständigem Nachbluten einen Arzt aufsuchen. Mögliche Ursachen: Diabetes, Bindegewebsschwäche, Bluterkrankheit."],
          ["Entzündung", "Meist sind Keime oder Fremdstoffe (zum Beispiel von den Haaren) in die Wunde gelangt. Eiter muss abfließen können, sonst droht eine Blutvergiftung. Täglich reinigen; Kamille, Teebaumöl oder Manukahonig können helfen, ebenso die Salbe „Tyrosur“ aus der Apotheke."]
        ] },
        { typ: "ergaenzung", text: "Bei Fieber, sich ausbreitender Rötung, starken oder zunehmenden Schmerzen schickst du den Kunden sofort zum Arzt." },
        { typ: "merke", text: "Raucher, Alkoholiker und Diabetiker gehören zu den Risikogruppen. Bei ihnen treten Komplikationen schneller auf." }
      ]
    },
    {
      titel: "Wildes Fleisch",
      inhalt: [
        { typ: "text", text: "Wildes Fleisch entsteht durch dauerhafte Reizung der Unterhaut: Eine rote, fleischähnliche Masse wächst zwischen den Wundrändern hervor, sodass die Wundränder nicht mehr zusammenfinden." },
        { typ: "schritte", titel: "So kannst du vorgehen", punkte: [
          "Nichts tun: Es kann von selbst verschwinden; meist stößt der Körper es ab.",
          "Dehydrieren: Mittel wie Kochsalzlösung, Kamillentee, Wasserstoffperoxid, Teebaumöl oder Eukalyptusöl helfen, es zurückzudrängen.",
          "Wildfleischdisk: eine Kunststoffscheibe, die auf den Schmuck gestülpt wird.",
          "Schmuckform oder Material ändern, zum Beispiel ein Titan-Labret gegen einen PTFE-Barbell tauschen.",
          "Hilft nichts davon: Der Kunde geht zum Arzt oder Dermatologen, der das wilde Fleisch chirurgisch entfernt."
        ] }
      ]
    }
  ],
  uebung: [
    "Schreibe ein Pflegeblatt für ein frisches Helix-Piercing, das du einem Kunden mitgeben würdest.",
    "Lerne die Abheilzeiten-Tabelle auswendig und frag dich selbst ab.",
    "Überlege, welche Fragen du einem Kunden mit geröteter Einstichstelle stellst."
  ],
  quiz: [
    { frage: "Welches Pflegemittel empfiehlst du für den Mundbereich?", antworten: ["Chlorhexamed", "Octenisept", "Teebaumöl pur"], richtig: 0, erklaerung: "Laut Kursbuch Chlorhexamed für den Mundbereich.", seite: "S. 48" },
    { frage: "Wie lange heilt ein Knorpelpiercing mindestens?", antworten: ["2 Wochen", "1 Monat", "3 Monate"], richtig: 2, erklaerung: "Knorpelpiercings mindestens 3 Monate.", seite: "S. 49" },
    { frage: "Wann darf der Schmuck gewechselt werden?", antworten: ["Nach einer Woche", "Erst nach vollständiger Ausheilung", "Jederzeit"], richtig: 1, erklaerung: "Sonst droht zum Beispiel eine Infektion.", seite: "S. 49" },
    { frage: "Wann soll der Kunde bei fehlender Epithelisierung zum Arzt?", antworten: ["Nach 1 bis 2 Tagen", "Nach 10 bis 14 Tagen", "Nach 6 Monaten"], richtig: 1, erklaerung: "So steht es im Kursbuch.", seite: "S. 50" },
    { frage: "Was ist wildes Fleisch?", antworten: ["Eine Allergie", "Eine rote, fleischähnliche Masse aus der Unterhaut zwischen den Wundrändern", "Ein Schmuckmaterial"], richtig: 1, erklaerung: "Es entsteht durch dauerhafte Reizung.", seite: "S. 51" },
    { frage: "Wie lange heilt ein Bauchnabelpiercing etwa?", antworten: ["ca. 1 Monat", "ca. 4 bis 6 Monate", "ca. 2 Jahre"], richtig: 1, erklaerung: "Richtwert laut Kursbuch.", seite: "S. 49" }
  ]
});
