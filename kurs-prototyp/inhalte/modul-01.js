/* Modul 01 – Berufsbild und Geschichte. Quelle: Kursbuch Kap. 2 (S. 3–6), Nostril/Septum S. 85 und 88.
   Aufbau jeder Lektion: inhalt (Erklärung) und fragen (Pflichtfragen nach der Erklärung).
   Frageformat: [Frage, [richtige Antwort, falsch, falsch], Erklärung, Seite]; die richtige Antwort steht zuerst, im Kurs wird gemischt.
   Inhaltstypen: text, liste, merke, achtung, ergaenzung, praxis, schritte, tabelle, datenblatt (siehe kurs.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 1,
  titel: "Berufsbild und Geschichte",
  quelle: "Kursbuch Kap. 2, S. 3–6",
  ziel: "Du weißt, was Piercing ist, woher es kommt, wie heute professionell gestochen wird und warum die Ohrlochpistole nicht ins Studio gehört.",
  lektionen: [
    {
      titel: "Was Piercing ist",
      seite: "S. 3",
      inhalt: [
        { typ: "text", text: "Das Wort „Piercing“ bedeutet einfach Loch in der Haut. Viele setzen es fälschlich mit dem Schmuck gleich. Gemeint ist aber das Durchstechen selbst." },
        { typ: "text", text: "Piercing ist eine Form von Bodymodding oder Körperkunst. Ringe, Stäbe und andere Schmuckstücke werden an verschiedenen Körperstellen angebracht, indem der Schmuck durch die Haut und das darunterliegende Fett- oder Knorpelgewebe geführt wird." },
        { typ: "merke", text: "Piercings sind so alt wie die menschliche Zivilisation selbst." },
        { typ: "praxis", text: "Kunden fragen oft nach „einem Piercing“ und meinen ein bestimmtes Schmuckstück. Kläre im Gespräch immer beides: die Stelle, die gestochen wird, und den Schmuck, der hinein soll." }
      ],
      fragen: [
        ["Was bedeutet das Wort „Piercing“ laut Kursbuch?", ["Loch in der Haut", "Schmuckstück", "Körperbemalung"], "Oft wird es fälschlich mit dem Schmuck gleichgesetzt.", "S. 3"],
        ["Zu welcher Form der Körperkunst zählt Piercing?", ["Bodymodding", "Tätowierung", "Permanent Make-up"], "Piercing ist eine Form von Bodymodding oder Körperkunst.", "S. 3"],
        ["Durch welches Gewebe wird der Schmuck beim Piercing geführt?", ["Durch die Haut und das darunterliegende Fett- oder Knorpelgewebe", "Nur durch die oberste Hautschicht", "Durch Muskelgewebe"], "So beschreibt es das Kursbuch.", "S. 3"],
        ["Wie alt sind Piercings laut Kursbuch?", ["So alt wie die menschliche Zivilisation", "Etwa 100 Jahre", "Etwa 50 Jahre"], "Merksatz aus Kap. 2.1.", "S. 3"]
      ]
    },
    {
      titel: "Die frühen Spuren: Afrika und Ägypten",
      seite: "S. 3",
      inhalt: [
        { typ: "text", text: "Die frühesten Spuren des Piercings führen in die jüngere Steinzeit Afrikas. Neolithische Funde beweisen, dass Menschen in Algerien schon vor über 7000 Jahren Gehänge in ihren Ohrläppchen trugen. Diese Schmuckstücke waren aus Tierknochen und Zähnen gefertigt." },
        { typ: "text", text: "Auch auf alten Pharaonendarstellungen aus Ägypten (etwa 1400 bis 1300 v. Chr.) findet man Hinweise auf Ohrenschmuck. Die berühmte Goldmaske des Tutanchamun zeigt Ohrlöcher. Dazu kommen prächtige Goldohrringe, die als Grabbeigabe gefunden wurden." },
        { typ: "tabelle", kopf: ["Fund", "Alter", "Was er zeigt"], zeilen: [
          ["Neolithische Funde in Algerien", "über 7000 Jahre", "Ohrgehänge aus Tierknochen und Zähnen"],
          ["Pharaonendarstellungen in Ägypten", "ca. 1400–1300 v. Chr.", "Ohrenschmuck"],
          ["Goldmaske des Tutanchamun", "ca. 3300 Jahre", "Ohrlöcher; Goldohrringe als Grabbeigabe"]
        ] }
      ],
      fragen: [
        ["Wie alt sind die ältesten im Kursbuch genannten Funde von Ohrschmuck?", ["Über 7000 Jahre (Algerien)", "Etwa 2600 Jahre (Hallstattkultur)", "Etwa 500 Jahre (Mittelalter)"], "Neolithische Funde aus Algerien.", "S. 3"],
        ["Woraus bestanden die ältesten Ohrgehänge aus Algerien?", ["Aus Tierknochen und Zähnen", "Aus Gold", "Aus Bronze"], "So steht es im Kursbuch.", "S. 3"],
        ["Aus welcher Zeit stammen die ältesten Piercing-Spuren?", ["Aus der jüngeren Steinzeit Afrikas", "Aus dem Mittelalter", "Aus dem 19. Jahrhundert"], "Neolithikum bedeutet jüngere Steinzeit.", "S. 3"],
        ["Welche berühmte Maske zeigt Ohrlöcher?", ["Die Goldmaske des Tutanchamun", "Die Maske des Agamemnon", "Eine venezianische Karnevalsmaske"], "Dazu kamen Goldohrringe als Grabbeigabe.", "S. 3"],
        ["Aus welcher Zeit stammen die ägyptischen Pharaonendarstellungen mit Ohrenschmuck?", ["Etwa 1400 bis 1300 v. Chr.", "Etwa 500 n. Chr.", "Etwa 1800 n. Chr."], "So datiert sie das Kursbuch.", "S. 3"]
      ]
    },
    {
      titel: "Europa, Antike und andere Kulturen",
      seite: "S. 4, 85, 88",
      inhalt: [
        { typ: "text", text: "In Europa findet man nicht so viele Spuren des frühen Piercings. Einer der wenigen Beweise ist die etwa 2600 Jahre alte keltische Bronzemaske aus der Hallstattkultur. Sie zeigt sogar mehrere Ohrlöcher auf beiden Seiten. Im antiken Griechenland und in Rom dagegen war ein unversehrter Körper das Idealbild." },
        { typ: "liste", titel: "Geschichte einzelner Piercings", punkte: [
          "Nasenpiercing (Nostril): erstmals vor etwa 4000 Jahren im Mittleren Osten, im 16. Jahrhundert nach Indien übernommen. Dort wird es vorzugsweise am linken Nasenflügel getragen.",
          "Septum: eines der ältesten Piercings, weltweit in vielen Kulturen traditionell vertreten. Der Name kommt vom lateinischen „Septum nasi“."
        ] },
        { typ: "text", text: "Piercings sind ein universelles Phänomen und finden sich in fast allen Kulturen, als Initiationsritus oder als Schmuck. Von den frühesten Tagen an haben Menschen sich damit dekoriert: Sie wollten ihre Zugehörigkeit zu einer Gruppe zeigen und sich zugleich aus ihr hervorheben. Ob mit Tattoos, Piercings, Scarifications, Frisuren oder Kleidung, jeder Mensch hat seine eigene Art, sich auszudrücken." }
      ],
      fragen: [
        ["Welcher europäische Fund zeigt mehrere Ohrlöcher?", ["Eine keltische Bronzemaske aus der Hallstattkultur", "Eine römische Marmorbüste", "Ein Wikingerhelm"], "Die Maske ist etwa 2600 Jahre alt.", "S. 4"],
        ["Wie alt ist die keltische Bronzemaske etwa?", ["Etwa 2600 Jahre", "Etwa 7000 Jahre", "Etwa 300 Jahre"], "Sie zeigt mehrere Ohrlöcher auf beiden Seiten.", "S. 4"],
        ["Welches Körperideal galt im antiken Griechenland und in Rom?", ["Der unversehrte Körper", "Ein möglichst reich geschmückter Körper", "Ein tätowierter Körper"], "Deshalb gibt es dort kaum Piercing-Spuren.", "S. 4"],
        ["Wo wurde das Nasenpiercing erstmals praktiziert?", ["Im Mittleren Osten, vor etwa 4000 Jahren", "In Europa, vor etwa 100 Jahren", "In Südamerika, vor etwa 500 Jahren"], "Im 16. Jahrhundert kam es nach Indien.", "S. 85"],
        ["Was gilt für das Septum-Piercing?", ["Es ist eines der ältesten Piercings und in vielen Kulturen verbreitet", "Es ist eine Erfindung der 1990er Jahre", "Es wird nur in Europa getragen"], "Der Name kommt von „Septum nasi“.", "S. 88"],
        ["Warum haben sich Menschen schon früh geschmückt?", ["Um Zugehörigkeit zu zeigen und sich zugleich hervorzuheben", "Nur aus medizinischen Gründen", "Weil es gesetzlich vorgeschrieben war"], "Piercings waren Initiationsritus oder Schmuck.", "S. 4"]
      ]
    },
    {
      titel: "Wie heute gestochen wird",
      seite: "S. 5",
      inhalt: [
        { typ: "text", text: "Heute stechen wir Piercings mit einer sogenannten Venenverweilkanüle, auch Braunüle genannt. Die Nadel steckt in einem Kunststoffüberzug." },
        { typ: "schritte", punkte: [
          "Die Nadel wird mit dem Kunststoffüberzug durch die Haut gestochen.",
          "Die Nadel wird herausgezogen und sofort fachgerecht im Nadelabwurfbehälter entsorgt.",
          "Im Stichkanal bleibt nur der Kunststoffüberzug (das Röhrchen).",
          "Der Schmuck wird in das Röhrchen eingeführt und durch den Stichkanal geschoben."
        ] },
        { typ: "achtung", text: "Schieben, niemals ziehen. Beim Ziehen ist die Gefahr zu groß, dass der Schmuck während des Einführens abgleitet." },
        { typ: "praxis", text: "Das Röhrchen schützt den frischen Stichkanal. Wenn du sauber schiebst, gleitet der Schmuck ohne zusätzlichen Schmerz hinein. Lass den Kunden dabei ausatmen (mehr dazu in Modul 9)." }
      ],
      fragen: [
        ["Womit werden Piercings heute professionell gestochen?", ["Mit einer Venenverweilkanüle (Braunüle)", "Mit der Ohrlochpistole", "Mit einer Nähnadel"], "Die Nadel steckt in einem Kunststoffüberzug.", "S. 5"],
        ["Was ist eine Braunüle?", ["Eine Venenverweilkanüle", "Eine Piercingzange", "Ein Desinfektionsmittel"], "So nennt das Kursbuch die Kanüle.", "S. 5"],
        ["Was passiert mit der Nadel nach dem Stich?", ["Sie wird entfernt und im Nadelabwurfbehälter entsorgt", "Sie bleibt als Schmuck im Stichkanal", "Sie wird abgewaschen und wiederverwendet"], "Fachgerechte Entsorgung im Nadelauffangbehälter.", "S. 5"],
        ["Was bleibt nach dem Stich im Stichkanal?", ["Der Kunststoffüberzug (das Röhrchen)", "Die Nadel", "Nichts"], "In das Röhrchen wird der Schmuck eingeführt.", "S. 5"],
        ["Wie bringst du den Schmuck in den Stichkanal?", ["Ich schiebe ihn durch das Röhrchen", "Ich ziehe ihn am Röhrchen hinterher", "Ich setze ihn ohne Röhrchen direkt ein"], "Schieben, nicht ziehen.", "S. 5"],
        ["Warum wird der Schmuck nicht gezogen?", ["Die Gefahr, dass er abgleitet, wäre zu groß", "Ziehen ist zu langsam", "Ziehen ist zu laut"], "Merksatz aus Kap. 2.2.", "S. 5"]
      ]
    },
    {
      titel: "Hygiene, Pflege und Abheilung",
      seite: "S. 5–6",
      inhalt: [
        { typ: "text", text: "Beim Piercen und in der Nachsorge muss auf ausreichende Hygiene geachtet werden, sonst kann sich das Piercing entzünden. Der Piercingraum ist wie ein OP-Raum im Krankenhaus sauber und steril zu halten, und die Instrumente müssen steril sein." },
        { typ: "text", text: "Auf die richtige Pflege und die Abheilzeiten musst du den Kunden zwingend hinweisen. Das frische Piercing sollte etwa zwei Wochen lang zwei- bis dreimal am Tag vom Kunden selbst mit einem geeigneten Mittel gereinigt werden, zum Beispiel mit Kochsalzlösung, Prontolind oder Octenisept." },
        { typ: "achtung", text: "Prontolind und Octenisept niemals bei Knorpelpiercings empfehlen. Sie enthalten knorpeltoxische Stoffe." },
        { typ: "text", text: "Der Schmuck darf bis zu mehreren Monaten nach dem Piercen nicht gewechselt werden. Ein zu früher Wechsel kann die Heilung stören und Infektionen auslösen." }
      ],
      fragen: [
        ["Womit vergleicht das Kursbuch den Piercingraum?", ["Mit einem OP-Raum im Krankenhaus", "Mit einem Friseursalon", "Mit einem Wartezimmer"], "Er ist sauber und steril zu halten.", "S. 5"],
        ["Wie lange soll ein frisches Piercing etwa gereinigt werden?", ["Etwa 2 Wochen, 2- bis 3-mal täglich", "Einmal am ersten Tag", "Ein Jahr lang stündlich"], "Vom Kunden selbst, mit einem geeigneten Mittel.", "S. 6"],
        ["Welche Pflegemittel dürfen bei Knorpelpiercings nie empfohlen werden?", ["Prontolind und Octenisept", "Kochsalzlösung", "Klares Wasser"], "Sie enthalten knorpeltoxische Stoffe.", "S. 6"],
        ["Welches Pflegemittel ist für alle Piercings geeignet?", ["Kochsalzlösung", "Prontolind", "Octenisept"], "Prontolind und Octenisept nie bei Knorpel.", "S. 6"],
        ["Wie lange darf der Schmuck nach dem Piercen nicht gewechselt werden?", ["Bis zu mehreren Monaten", "Nur einen Tag", "Er darf sofort gewechselt werden"], "Ein früher Wechsel kann Infektionen auslösen.", "S. 6"],
        ["Fall: Eine Kundin mit frischem Helix fragt, ob sie Octenisept zur Pflege nehmen kann. Was antwortest du?", ["Nein, beim Knorpel nicht; ich empfehle Kochsalzlösung", "Ja, das ist ideal für Knorpel", "Ja, aber nur einmal pro Woche"], "Der Helix ist Knorpel; Octenidin ist knorpeltoxisch.", "S. 6"]
      ]
    },
    {
      titel: "Warum keine Ohrlochpistole",
      seite: "S. 6",
      inhalt: [
        { typ: "text", text: "Juweliere bieten bis heute Ohrloch- oder Nasenpiercings an, die mit einer Ohrlochpistole geschossen werden. Davon ist grundsätzlich abzuraten." },
        { typ: "liste", titel: "Die Gründe", punkte: [
          "Bei dieser Technik kann das Hautgewebe einreißen, Knorpel kann sogar splittern.",
          "Die Pistolen lassen sich nicht vollständig sterilisieren.",
          "Beim Schießen fliegen Keime durch den Raum.",
          "Die verwendeten Ersteinsätze sind je nach Material ungeeignet bis gefährlich für den Kunden."
        ] },
        { typ: "praxis", text: "Kommt ein Kunde mit einem geschossenen Ohrloch, das nicht heilt, erklärst du ihm sachlich, warum die Methode ungeeignet ist, und berätst ihn zur Pflege. Schlechtreden von Kollegen ist dabei nicht nötig, die Fakten reichen." }
      ],
      fragen: [
        ["Warum gehört die Ohrlochpistole nicht ins Studio?", ["Gewebe kann einreißen, sie ist nicht vollständig sterilisierbar und verteilt Keime", "Sie ist zu langsam", "Sie ist zu teuer"], "Dazu kommen ungeeignete Ersteinsätze.", "S. 6"],
        ["Was kann mit Knorpel beim Schießen passieren?", ["Er kann splittern", "Er wird gestärkt", "Nichts"], "Hautgewebe kann einreißen, Knorpel splittern.", "S. 6"],
        ["Was passiert mit Keimen beim Schießen mit der Pistole?", ["Sie fliegen durch den Raum", "Sie werden abgetötet", "Sie bleiben in der Pistole"], "Die Pistole ist zudem nicht vollständig sterilisierbar.", "S. 6"],
        ["Was gilt für die Ersteinsätze der Ohrlochpistole?", ["Sie sind je nach Material ungeeignet bis gefährlich", "Sie sind immer aus G23-Titan", "Sie sind steril und ideal"], "So steht es im Kursbuch.", "S. 6"]
      ]
    },
    {
      titel: "Vorbereitung des Kunden",
      seite: "S. 6",
      inhalt: [
        { typ: "text", text: "24 Stunden vor dem Piercen darf der Kunde keinen Alkohol, keine Drogen, kein Koffein und keine blutverdünnenden Mittel (zum Beispiel Aspirin/ASS) zu sich nehmen. Diese Mittel können den Kreislauf und die Blutgerinnung beeinträchtigen." },
        { typ: "ergaenzung", text: "Ärztlich verordnete Blutverdünner (zum Beispiel Marcumar oder Xarelto) darf der Kunde nicht eigenmächtig absetzen. Wer solche Medikamente nimmt, klärt das Piercing vorher mit seinem Arzt. Im Zweifel wird nicht gestochen." },
        { typ: "praxis", text: "Sag das schon bei der Terminvergabe. So kommt der Kunde vorbereitet und du musst niemanden wieder nach Hause schicken." }
      ],
      fragen: [
        ["Was soll der Kunde 24 Stunden vor dem Piercen meiden?", ["Alkohol, Drogen, Koffein und blutverdünnende Mittel", "Nur Sport", "Nur Duschen"], "Diese Mittel beeinflussen Kreislauf und Blutgerinnung.", "S. 6"],
        ["Welches Mittel zählt zu den Blutverdünnern?", ["Aspirin (ASS)", "Vitamin C", "Magnesium"], "Blutverdünner beeinträchtigen die Gerinnung.", "S. 6"],
        ["Wie lange vor dem Piercen soll der Kunde auf Koffein verzichten?", ["24 Stunden", "1 Stunde", "1 Woche"], "Ebenso auf Alkohol, Drogen und Blutverdünner.", "S. 6"],
        ["Fall: Ein Kunde nimmt täglich ein vom Arzt verordnetes Blutverdünnungsmittel. Was tust du?", ["Er klärt das Piercing vorher mit seinem Arzt; im Zweifel steche ich nicht", "Er soll das Mittel einfach einen Tag weglassen", "Ich steche ohne Rückfrage"], "Verordnete Medikamente nie eigenmächtig absetzen.", "Ergänzung"]
      ]
    }
  ],
  uebung: [
    "Erkläre einer Freundin in zwei Sätzen, was das Wort „Piercing“ bedeutet.",
    "Zähle drei Gründe auf, warum im Studio keine Ohrlochpistole verwendet wird.",
    "Schreibe auf, was ein Kunde 24 Stunden vor dem Termin meiden sollte."
  ]
});
