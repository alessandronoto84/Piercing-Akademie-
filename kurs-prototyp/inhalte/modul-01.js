/* Modul 01 – Berufsbild und Geschichte. Quelle: Kursbuch Kap. 2 (S. 3–6), Nostril/Septum S. 85 und 88.
   Inhaltstypen: text, liste, merke, achtung, ergaenzung, schritte, tabelle, datenblatt (siehe kurs.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 1,
  titel: "Berufsbild und Geschichte",
  quelle: "Kursbuch Kap. 2, S. 3–6",
  ziel: "Du weißt, woher Piercing kommt, wie heute professionell gestochen wird und warum die Ohrlochpistole nicht ins Studio gehört.",
  lektionen: [
    {
      titel: "Die frühen Spuren des Piercings",
      inhalt: [
        { typ: "text", text: "Das Wort „Piercing“ bedeutet einfach Loch in der Haut. Oft wird es missverständlich mit dem Schmuck gleichgesetzt. Piercing ist eine Form von Bodymodding oder Körperkunst: Ringe, Stäbe und andere Schmuckstücke werden an verschiedenen Körperstellen angebracht, indem der Schmuck durch die Haut und das darunterliegende Fett- oder Knorpelgewebe geführt wird." },
        { typ: "merke", text: "Piercings sind so alt wie die menschliche Zivilisation selbst." },
        { typ: "liste", titel: "Spuren in der Geschichte", punkte: [
          "Jüngere Steinzeit in Afrika: Neolithische Funde zeigen, dass Menschen in Algerien schon vor über 7000 Jahren Gehänge in den Ohrläppchen trugen, gefertigt aus Tierknochen und Zähnen.",
          "Ägypten: Pharaonendarstellungen von etwa 1400 bis 1300 v. Chr. zeigen Ohrenschmuck. Die Goldmaske des Tutanchamun hat Ohrlöcher, dazu kommen Goldohrringe als Grabbeigabe.",
          "Europa: Eine der wenigen Spuren ist die rund 2600 Jahre alte keltische Bronzemaske aus der Hallstattkultur mit mehreren Ohrlöchern auf beiden Seiten.",
          "Antikes Griechenland und Rom: Hier galt der unversehrte Körper als Idealbild.",
          "Nasenpiercing (Nostril): Erstmals vor etwa 4000 Jahren im Mittleren Osten praktiziert, im 16. Jahrhundert nach Indien übernommen.",
          "Septum: eines der ältesten Piercings, weltweit in vielen Kulturen traditionell vertreten."
        ] },
        { typ: "text", text: "Piercings sind ein universelles Phänomen und finden sich in fast allen Kulturen, als Initiationsritus oder als Schmuck. Menschen wollten damit schon immer ihre Zugehörigkeit zu einer Gruppe zeigen und sich zugleich hervorheben. Heute ist Piercing für viele eine Möglichkeit, die eigene Persönlichkeit auszudrücken." }
      ]
    },
    {
      titel: "Piercing heute",
      inhalt: [
        { typ: "text", text: "Heute stechen wir Piercings mit einer Venenverweilkanüle (Braunüle). Die Nadel steckt in einem Kunststoffüberzug. Nach dem Stich wird die Nadel herausgezogen und sofort im Nadelabwurfbehälter entsorgt. Im Stichkanal bleibt nur das Kunststoffröhrchen. In dieses Röhrchen wird der Schmuck eingeführt und durch den Stichkanal geschoben." },
        { typ: "achtung", text: "Den Schmuck durch den Stichkanal schieben, niemals ziehen. Beim Ziehen ist die Gefahr zu groß, dass der Schmuck abgleitet." },
        { typ: "liste", titel: "Grundsätze für sauberes Arbeiten", punkte: [
          "Auf ausreichende Hygiene beim Piercen und in der Nachsorge achten, sonst kann sich das Piercing entzünden.",
          "Der Piercingraum ist wie ein OP-Raum im Krankenhaus sauber und steril zu halten.",
          "Die Instrumente müssen steril sein.",
          "Der Kunde muss zwingend auf die richtige Pflege und die Abheilzeiten hingewiesen werden."
        ] },
        { typ: "text", text: "Das frische Piercing sollte etwa zwei Wochen lang zwei- bis dreimal täglich vom Kunden selbst mit einem geeigneten Mittel gereinigt werden, zum Beispiel mit Kochsalzlösung, Prontolind oder Octenisept. Der Schmuck darf bis zu mehreren Monaten nicht gewechselt werden, weil das die Heilung stören und Infektionen auslösen kann." },
        { typ: "achtung", text: "Prontolind und Octenisept niemals bei Knorpelpiercings empfehlen. Sie enthalten knorpeltoxische Stoffe." }
      ]
    },
    {
      titel: "Warum keine Ohrlochpistole",
      inhalt: [
        { typ: "text", text: "Juweliere bieten bis heute Ohrloch- oder Nasenpiercings mit der Ohrlochpistole an. Davon ist grundsätzlich abzuraten." },
        { typ: "liste", titel: "Die Gründe", punkte: [
          "Das Hautgewebe kann bei dieser Technik einreißen, Knorpel kann sogar splittern.",
          "Die Pistolen lassen sich nicht vollständig sterilisieren.",
          "Beim Schießen fliegen Keime durch den Raum.",
          "Die verwendeten Ersteinsätze sind je nach Material ungeeignet bis gefährlich für den Kunden."
        ] },
        { typ: "text", text: "Vor dem Piercen darf der Kunde 24 Stunden lang keinen Alkohol, keine Drogen, kein Koffein und keine blutverdünnenden Mittel (zum Beispiel Aspirin/ASS) zu sich nehmen, weil diese den Kreislauf und die Blutgerinnung beeinträchtigen können." },
        { typ: "ergaenzung", text: "Ärztlich verordnete Blutverdünner (zum Beispiel Marcumar oder Xarelto) darf der Kunde nicht eigenmächtig absetzen. Wer solche Medikamente nimmt, klärt das Piercing vorher mit seinem Arzt; im Zweifel wird nicht gestochen." }
      ]
    }
  ],
  uebung: [
    "Erkläre einer Freundin in zwei Sätzen, was das Wort „Piercing“ bedeutet.",
    "Zähle drei Gründe auf, warum im Studio keine Ohrlochpistole verwendet wird.",
    "Schreibe auf, was ein Kunde 24 Stunden vor dem Termin meiden sollte."
  ],
  quiz: [
    { frage: "Wie alt sind die ältesten im Kursbuch genannten Funde von Ohrschmuck?", antworten: ["Über 7000 Jahre (Algerien)", "Etwa 2600 Jahre (Hallstattkultur)", "Etwa 500 Jahre (Mittelalter)"], richtig: 0, erklaerung: "Neolithische Funde aus Algerien belegen Ohrschmuck vor über 7000 Jahren.", seite: "S. 3" },
    { frage: "Womit werden Piercings heute professionell gestochen?", antworten: ["Mit der Ohrlochpistole", "Mit einer Venenverweilkanüle (Braunüle)", "Mit einer Nähnadel"], richtig: 1, erklaerung: "Die Nadel steckt in einem Kunststoffüberzug, der nach dem Stich im Stichkanal bleibt.", seite: "S. 5" },
    { frage: "Wie bringst du den Schmuck in den Stichkanal?", antworten: ["Ich ziehe ihn am Röhrchen hinterher.", "Ich schiebe ihn durch das Kunststoffröhrchen.", "Ich setze ihn ohne Röhrchen direkt ein."], richtig: 1, erklaerung: "Schieben, nicht ziehen: Beim Ziehen kann der Schmuck abgleiten.", seite: "S. 5" },
    { frage: "Welche Pflegemittel dürfen bei Knorpelpiercings nie empfohlen werden?", antworten: ["Kochsalzlösung", "Prontolind und Octenisept", "Klares Wasser"], richtig: 1, erklaerung: "Sie enthalten knorpeltoxische Stoffe.", seite: "S. 6" },
    { frage: "Warum gehört die Ohrlochpistole nicht ins Studio?", antworten: ["Sie ist zu langsam.", "Gewebe kann einreißen, sie ist nicht vollständig sterilisierbar und verteilt Keime.", "Sie ist zu teuer."], richtig: 1, erklaerung: "Dazu kommen ungeeignete Ersteinsätze.", seite: "S. 6" },
    { frage: "Was soll der Kunde 24 Stunden vor dem Piercen meiden?", antworten: ["Alkohol, Drogen, Koffein und blutverdünnende Mittel", "Nur Sport", "Nur Duschen"], richtig: 0, erklaerung: "Diese Mittel beeinflussen Kreislauf und Blutgerinnung.", seite: "S. 6" }
  ]
});
