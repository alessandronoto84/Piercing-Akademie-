/* Modul 09 – Ablauf, Kundengespräch, Notfälle. Quelle: Kursbuch Kap. 11 (S. 111–113), Erste Hilfe S. 26, Nachbluten S. 50. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 9,
  titel: "Ablauf, Kundengespräch, Notfälle",
  quelle: "Kursbuch Kap. 11, S. 111–113",
  ziel: "Du kennst den Ablauf vom Betreten des Studios bis zur Nachsorge in 26 Schritten und weißt, was du bei Kreislaufproblemen tust.",
  lektionen: [
    {
      titel: "Vor dem Stich: Gespräch und Vorbereitung",
      inhalt: [
        { typ: "schritte", start: 1, punkte: [
          "Der Kunde betritt das Piercingstudio.",
          "Begrüßung, Small Talk.",
          "Fragen, welche Piercings gewünscht sind, eventuell Angst nehmen.",
          "Einverständniserklärung ausfüllen lassen.",
          "Währenddessen den Arbeitsplatz vorbereiten und alle Instrumente parat legen.",
          "Der Kunde betritt den Piercingraum: für eine angenehme Atmosphäre sorgen, dem Kunden die Angst nehmen.",
          "Die Stelle begutachten und den passenden Ersteinsatz wählen (Überlänge!).",
          "Die Stelle desinfizieren (Alkoholtupfer).",
          "Ein- und Austrittsstelle der Kanüle mit dem Einmalstift markieren.",
          "Den Kunden schauen lassen, ob es so passt."
        ] }
      ]
    },
    {
      titel: "Der Stich",
      inhalt: [
        { typ: "schritte", start: 11, punkte: [
          "Klemme bzw. Nadelauffangrohr anlegen.",
          "Stechen, im Idealfall immer in die sichtbare Seite, beim Labret zum Beispiel dort, wo die Kugel sitzt. Je schneller gestochen wird, desto weniger Schmerzen.",
          "Kanüle herausziehen; der Kunststoffüberzug bleibt im Stichkanal.",
          "Kunststoffüberzug mit der Schere leicht kürzen, damit der Schmuck besser hineingeht.",
          "Ersteinsatz in den Kunststoffüberzug stecken.",
          "Durch den Stichkanal drücken, nicht ziehen, sonst kann der Schmuck abrutschen. Das ist schmerzhaft: den Kunden dabei ausatmen lassen.",
          "Röhrchen vorsichtig vom Schmuck abziehen.",
          "Kugel greifen.",
          "Schmuck mit der Klemmzange festhalten und die Kugel fest aufdrehen.",
          "Nochmals mit Kodan einsprühen.",
          "Dem Kunden das Piercing im Spiegel zeigen."
        ] }
      ]
    },
    {
      titel: "Nach dem Stich: Nachsorge",
      inhalt: [
        { typ: "schritte", start: 22, punkte: [
          "Eventuell mit Pflaster abkleben (Brustwarze, Bauchnabel).",
          "Bei Zungenpiercings einen Eiswürfel geben.",
          "Pflegemittel mitgeben und Pflegehinweise mündlich erklären.",
          "Pflegehinweise am besten auch schriftlich aushändigen.",
          "Bei Wundheilstörungen soll der Kunde zur Beratung wiederkommen (siehe Modul 10)."
        ] }
      ]
    },
    {
      titel: "Notfälle",
      inhalt: [
        { typ: "achtung", text: "Bekommt der Kunde während des Vorgangs einen Kreislaufabfall (immer nachfragen!), gib ihm Traubenzucker (zum Beispiel Dextro Energy) und etwas zu trinken. Lege ihn gegebenenfalls hin und lass ihn ruhen." },
        { typ: "liste", titel: "Vorbereitet sein", punkte: [
          "Ein aktueller Erste-Hilfe-Kasten hängt gut sichtbar und schnell erreichbar im Studio (S. 26).",
          "Notfallnummern (Notarzt, Hausarzt, Feuerwehr) sind ausgehängt (S. 26).",
          "Bauchnabelpiercings werden im Liegen gestochen, auch um Kreislaufproblemen vorzubeugen (S. 94).",
          "Bei ständigem Nachbluten soll ein Arzt aufgesucht werden; mögliche Ursachen sind Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit (S. 50)."
        ] },
        { typ: "ergaenzung", text: "Bei Bewusstlosigkeit, Atemnot oder einer starken allergischen Reaktion sofort den Notruf 112 wählen. Ein Erste-Hilfe-Kurs, der regelmäßig aufgefrischt wird, gehört zur Grundausstattung jedes Piercers." }
      ]
    }
  ],
  uebung: [
    "Spiele den Ablauf mit einer Übungsperson bis Schritt 10 durch, ohne zu stechen.",
    "Formuliere, wie du in Schritt 3 einem ängstlichen Kunden die Angst nimmst.",
    "Lege Traubenzucker, Getränk und Erste-Hilfe-Kasten an deinem Arbeitsplatz bereit."
  ],
  quiz: [
    { frage: "In wie vielen Schritten beschreibt das Kursbuch den Ablauf?", antworten: ["12", "26", "40"], richtig: 1, erklaerung: "Vom Betreten des Studios bis zur Nachsorge.", seite: "S. 111–113" },
    { frage: "Wann lässt du die Einverständniserklärung ausfüllen?", antworten: ["Nach dem Stich", "Vor dem Stich, während du den Arbeitsplatz vorbereitest", "Gar nicht"], richtig: 1, erklaerung: "Schritt 4, parallel zu Schritt 5.", seite: "S. 111" },
    { frage: "Wohin stichst du im Idealfall?", antworten: ["In die sichtbare Seite, beim Labret dort, wo die Kugel sitzt", "Immer von hinten", "Egal"], richtig: 0, erklaerung: "Je schneller gestochen wird, desto weniger Schmerzen.", seite: "S. 112" },
    { frage: "Was tust du, während der Schmuck durch den Stichkanal geht?", antworten: ["Ziehen", "Drücken und den Kunden ausatmen lassen", "Pause machen"], richtig: 1, erklaerung: "Nicht ziehen, sonst kann der Schmuck abrutschen.", seite: "S. 112" },
    { frage: "Was hilft bei einem Kreislaufabfall?", antworten: ["Traubenzucker, etwas trinken, hinlegen und ruhen lassen", "Weiterstechen", "Kaffee"], richtig: 0, erklaerung: "Frag während des Vorgangs immer nach.", seite: "S. 113" },
    { frage: "Was gibst du dem Kunden zum Schluss mit?", antworten: ["Nichts", "Pflegemittel sowie mündliche und schriftliche Pflegehinweise", "Nur eine Rechnung"], richtig: 1, erklaerung: "Schritte 24 und 25.", seite: "S. 113" }
  ]
});
