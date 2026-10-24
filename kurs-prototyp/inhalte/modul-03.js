/* Modul 03 – Anatomie, Haut und Wundheilung (neu, nicht als eigenes Kapitel im Kursbuch).
   Grundlagen als Entwurf (fachlich prüfen); Risikozonen aus Kursbuch S. 73, 89–92, 104; Abheilzeiten S. 49; Epithelisierung S. 50. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 3,
  titel: "Anatomie, Haut und Wundheilung",
  quelle: "Neu. Teile aus dem Kursbuch S. 49–50, 73, 89–92 und 104; Grundlagen als Entwurf",
  entwurf: true,
  ziel: "Du verstehst, durch welche Gewebe ein Stichkanal führt, warum Knorpel langsamer heilt als ein Ohrläppchen und wo Gefäße und Nerven ein Risiko sind.",
  lektionen: [
    {
      titel: "Der Aufbau der Haut",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Die Haut besteht aus drei Schichten. Ein Stichkanal führt durch alle drei." },
        { typ: "tabelle", kopf: ["Schicht", "Aufbau", "Bedeutung beim Piercen"], zeilen: [
          ["Oberhaut (Epidermis)", "Äußerste, verhornte Schicht ohne eigene Blutgefäße", "Schutzbarriere. Sie wird vor dem Stich desinfiziert, sie wächst bei der Heilung vom Wundrand her nach."],
          ["Lederhaut (Dermis)", "Bindegewebe mit Blutgefäßen, Nerven, Haarwurzeln und Drüsen", "Hier blutet und schmerzt der Stich. Hier liegen die Gefäße, die du mit der Taschenlampe suchst."],
          ["Unterhaut (Subcutis)", "Vor allem Fettgewebe", "Polstert. An Stellen wie dem Bauchnabel bestimmt sie, wie lang der Stichkanal wird."]
        ] }
      ]
    },
    {
      titel: "Knorpel, Weichgewebe und Schleimhaut",
      inhalt: [
        { typ: "text", text: "Nicht jedes Gewebe heilt gleich. Das erklärt die Unterschiede bei den Abheilzeiten." },
        { typ: "liste", titel: "Die drei Gewebearten", punkte: [
          "Knorpel (Ohrmuschel, Tragus, Helix, Nase): hat keine eigenen Blutgefäße und wird nur über die umgebende Knorpelhaut versorgt. Er heilt deshalb langsam: Knorpelpiercings brauchen mindestens 3 Monate (Kursbuch S. 49).",
          "Weichgewebe (Ohrläppchen, Augenbraue, Bauchnabel): gut durchblutet. Ein Lobe heilt in etwa 2 Monaten, der Bauchnabel braucht dagegen etwa 4 bis 6 Monate.",
          "Schleimhaut (Mund, Intimbereich): sehr gut durchblutet und heilt schnell. Zunge und Lippenbändchen brauchen etwa 1 Monat."
        ] },
        { typ: "achtung", text: "Der Wirkstoff Octenidin (in Prontolind und Octenisept) ist knorpeltoxisch. Diese Mittel nie bei Knorpelpiercings empfehlen." }
      ]
    },
    {
      titel: "Gefäße und Nerven: die Risikozonen",
      inhalt: [
        { typ: "text", text: "An einigen Stellen liegen wichtige Gefäße und Nerven dicht unter der Haut. Das Kursbuch nennt diese Zonen ausdrücklich." },
        { typ: "liste", titel: "Risikozonen laut Kursbuch", punkte: [
          "Augenbraue: nur im äußeren Drittel stechen, sonst besteht Lähmungsgefahr (S. 89).",
          "Wange (Cheek): wichtige Arterien und Nerven, Gefahr einer Verunstaltung. Als Anfänger ablehnen (S. 92).",
          "Bridge: zu tief gestochen kann es auf Nervenbahnen drücken, zu oberflächlich wächst es heraus. Als Anfänger ablehnen (S. 91).",
          "Zunge: das Zungenbändchen nicht verletzen (S. 90).",
          "Penis: nie durch die Schwellkörper stechen, es drohen ernsthafte Schäden bis zum Verbluten (S. 104)."
        ] },
        { typ: "merke", text: "Mit einer Taschenlampe mit grünem Licht kannst du zum Beispiel das Ohr durchleuchten und Blutgefäße erkennen. Stich nie durch ein Blutgefäß, der Kunde kann sonst stark bluten (S. 73)." }
      ]
    },
    {
      titel: "Die Phasen der Wundheilung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Ein frisches Piercing ist eine Wunde. Sie heilt in Phasen, die ineinander übergehen." },
        { typ: "schritte", punkte: [
          "Entzündungs- oder Reinigungsphase (erste Tage): Rötung, leichte Schwellung, Wärme und etwas klares Wundsekret sind normal. Deshalb braucht der Ersteinsatz Überlänge.",
          "Aufbau- oder Granulationsphase: Neues, zartes Gewebe (Granulationsgewebe) füllt den Stichkanal.",
          "Epithelisierung (Regenerationsphase): Vom Wundrand wandern Epithelzellen ein und wandeln das feuchte Granulationsgewebe in festes Narbengewebe um. Die Wunde wird immer kleiner (Kursbuch S. 50)."
        ] },
        { typ: "achtung", text: "Setzt die Epithelisierung nicht ein, soll der Kunde nach 10 bis 14 Tagen einen Arzt aufsuchen (S. 50)." },
        { typ: "text", text: "Raucher, Alkoholiker und Diabetiker gehören zu den Risikogruppen: Bei ihnen treten Komplikationen in der Heilung schneller auf (S. 50)." }
      ]
    }
  ],
  uebung: [
    "Zeichne einen Querschnitt durch die Haut mit den drei Schichten und einem Stichkanal.",
    "Sortiere zehn Piercings aus Modul 8 nach Gewebeart: Knorpel, Weichgewebe oder Schleimhaut.",
    "Übe mit einer Taschenlampe, an deinem eigenen Ohr Blutgefäße zu erkennen."
  ],
  quiz: [
    { frage: "Welche Hautschicht enthält Blutgefäße und Nerven?", antworten: ["Oberhaut (Epidermis)", "Lederhaut (Dermis)", "Keine"], richtig: 1, erklaerung: "Die Oberhaut hat keine eigenen Blutgefäße; Gefäße und Nerven liegen in der Lederhaut.", seite: "Entwurf" },
    { frage: "Warum heilen Knorpelpiercings langsamer als ein Lobe?", antworten: ["Knorpel hat keine eigenen Blutgefäße.", "Knorpel ist dünner.", "Sie heilen gleich schnell."], richtig: 0, erklaerung: "Knorpel wird nur über die Knorpelhaut versorgt; Knorpelpiercings brauchen mindestens 3 Monate.", seite: "S. 49" },
    { frage: "Wo darf ein Augenbrauenpiercing gestochen werden?", antworten: ["Mittig über dem Auge", "Nur im äußeren Drittel", "Überall"], richtig: 1, erklaerung: "Sonst besteht Lähmungsgefahr.", seite: "S. 89" },
    { frage: "Wofür nutzt du eine Taschenlampe mit grünem Licht?", antworten: ["Zum Anzeichnen", "Um Blutgefäße zu erkennen", "Zum Desinfizieren"], richtig: 1, erklaerung: "Stich nie durch ein Blutgefäß.", seite: "S. 73" },
    { frage: "Was ist die Epithelisierung?", antworten: ["Das Einwandern von Zellen vom Wundrand, die Wunde wird kleiner", "Eine Entzündung", "Das Dehnen des Stichkanals"], richtig: 0, erklaerung: "Granulationsgewebe wird zu festem Narbengewebe.", seite: "S. 50" },
    { frage: "Welche Gruppen haben ein höheres Risiko für Heilungskomplikationen?", antworten: ["Sportler", "Raucher, Alkoholiker und Diabetiker", "Vegetarier"], richtig: 1, erklaerung: "Bei ihnen treten Komplikationen schneller auf.", seite: "S. 50" }
  ]
});
