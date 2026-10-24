/* Modul 11 – Studio starten (neu, nicht als Kapitel im Kursbuch). Entwurf; Quellen und offene Punkte siehe KURS-RECHERCHE.md, Abschnitte 3, 4 und 6. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 11,
  titel: "Studio starten",
  quelle: "Neu. Grundlage: Kursbuch S. 36–39 und Recherche (KURS-RECHERCHE.md); Entwurf",
  entwurf: true,
  ziel: "Du weißt, welche Schritte vor dem Start deines eigenen Piercing-Angebots anstehen: Gewerbe, Gesundheitsamt, Hygieneplan, Dokumentation, Versicherung, Preise und Einkauf.",
  lektionen: [
    {
      titel: "Gewerbe und Behörden",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "In Deutschland gibt es für Piercer keine geregelte Ausbildung und kein offiziell anerkanntes Gütesiegel. Ob und unter welchen Auflagen du Piercings anbieten darfst, entscheiden die Behörden vor Ort. Der Kurs zeigt dir, worauf es ankommt; die Klärung vor Ort ersetzt er nicht." },
        { typ: "schritte", punkte: [
          "Gewerbe beim zuständigen Gewerbeamt anmelden.",
          "Das örtliche Gesundheitsamt kontaktieren: Anforderungen an Räume und Hygiene erfragen und nach dem Rahmenhygieneplan für Piercingstudios fragen (Kursbuch S. 36).",
          "In Niedersachsen gilt für Piercing eine eigene Hygieneverordnung; das Gesundheitsamt überwacht die Studios auf dieser Grundlage. Lies die aktuelle Fassung und lass dir die Anforderungen bestätigen.",
          "Räume so planen, dass der Arbeitsplatz baulich oder mindestens durch eine Trennwand vom Wartebereich getrennt ist, mit Handwaschbecken und Spendern in der Nähe."
        ] }
      ]
    },
    {
      titel: "Hygieneplan und Dokumentation",
      entwurf: true,
      inhalt: [
        { typ: "liste", titel: "Das solltest du schriftlich führen", punkte: [
          "Rahmenhygieneplan mit Reinigungs- und Desinfektionsplan (Beispiele im Kursbuch S. 37–39, mit dem Gesundheitsamt abstimmen)",
          "Sterilgut: jede Charge mindestens mit Sterilisierdatum und Chargennummer",
          "Prüfprotokolle des Autoklaven: tägliche Tests, halbjährliche Sporenproben, jährliche Geräteprüfung",
          "Einverständniserklärungen jedes Kunden, sicher aufbewahrt",
          "Foto-Einwilligungen, bevor du Kundenbilder veröffentlichst"
        ] }
      ]
    },
    {
      titel: "Versicherung, Preise und Einkauf",
      entwurf: true,
      inhalt: [
        { typ: "liste", titel: "Wichtige Punkte", punkte: [
          "Versicherung: Lass dich zu einer Betriebs- bzw. Berufshaftpflicht für Piercing beraten, bevor du den ersten Kunden stichst.",
          "Preise: Kalkuliere Material (Schmuck, Kanüle, Einmalmaterial, Pflegemittel), deine Arbeitszeit inklusive Beratung und Aufbereitung sowie die laufenden Kosten für Raum und Geräte.",
          "Schmuck: nur Ersteinsätze aus G23-Titan oder PTFE mit Materialnachweis des Herstellers; nach EU-Recht darf Schmuck für frische Piercings höchstens 0,2 µg Nickel pro cm² und Woche abgeben.",
          "Desinfektionsmittel: Produkte aus der VAH-Liste mit nachgewiesener Wirksamkeit.",
          "Kanülen, Klemmen und Verbrauchsmaterial aus dem Fachhandel für medizinischen bzw. Studiobedarf."
        ] },
        { typ: "ergaenzung", text: "Welche Händler sich bewährt haben, ergänzt die Piercing Akademie an dieser Stelle aus eigener Erfahrung." }
      ]
    },
    {
      titel: "Regeln für dein Studio",
      inhalt: [
        { typ: "liste", punkte: [
          "Vor jedem Piercing eine schriftliche Einverständniserklärung (Modul 2).",
          "Alter prüfen: unter 18 nur mit Einverständnis der Erziehungsberechtigten, besser gar nicht.",
          "Keine Heilversprechen und keine Werbung damit.",
          "Piercings, die du nicht sicher beherrschst, lehnst du ab; Piercings mit „Nicht durchführen“ stichst du nie (Modul 8).",
          "Bei Komplikationen den Kunden an einen Arzt verweisen."
        ] }
      ]
    }
  ],
  uebung: [
    "Notiere die Kontaktdaten deines Gewerbeamts und deines Gesundheitsamts.",
    "Stelle eine Liste der Unterlagen zusammen, die du dem Gesundheitsamt vorlegen würdest.",
    "Kalkuliere den Preis für ein Helix-Piercing mit allen Kosten."
  ],
  quiz: [
    { frage: "Wen fragst du nach dem Rahmenhygieneplan für dein Studio?", antworten: ["Das Gewerbeamt", "Das örtliche Gesundheitsamt", "Die Krankenkasse"], richtig: 1, erklaerung: "Das Kursbuch empfiehlt ausdrücklich das zuständige Gesundheitsamt.", seite: "S. 36" },
    { frage: "Gibt es in Deutschland eine staatlich geregelte Piercer-Ausbildung?", antworten: ["Ja", "Nein", "Nur in Niedersachsen"], richtig: 1, erklaerung: "Deshalb ist das Zertifikat der Akademie ein Teilnahme- und Trainingsnachweis, kein staatlicher Abschluss.", seite: "Entwurf" },
    { frage: "Was dokumentierst du für jede Sterilgut-Charge mindestens?", antworten: ["Den Preis", "Sterilisierdatum und Chargennummer", "Nichts"], richtig: 1, erklaerung: "So lässt sich jede Charge nachverfolgen.", seite: "S. 46" },
    { frage: "Welche Ersteinsätze kaufst du ein?", antworten: ["303er Stahl", "G23-Titan oder PTFE mit Materialnachweis", "Modeschmuck"], richtig: 1, erklaerung: "Siehe Modul 6.", seite: "S. 56" },
    { frage: "Was tust du mit einem Piercing, das du nicht sicher beherrschst?", antworten: ["Ich probiere es trotzdem.", "Ich lehne es ab.", "Ich steche es freihand."], richtig: 1, erklaerung: "Sicherheit des Kunden geht vor.", seite: "S. 91–93" }
  ]
});
