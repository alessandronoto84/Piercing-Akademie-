/* Modul 11 – Studio starten (neu, kein Kapitel im Kursbuch). Entwurf; Quellen und offene Punkte siehe KURS-RECHERCHE.md, Abschnitte 3, 4 und 6. */
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
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "In Deutschland gibt es für Piercer keine geregelte Ausbildung und kein offiziell anerkanntes Gütesiegel. Ob und unter welchen Auflagen du Piercings anbieten darfst, entscheiden die Behörden vor Ort. Dieser Kurs zeigt dir, worauf es ankommt; die Klärung vor Ort ersetzt er nicht." },
        { typ: "schritte", punkte: [
          "Gewerbe beim zuständigen Gewerbeamt anmelden.",
          "Das örtliche Gesundheitsamt kontaktieren: Anforderungen an Räume und Hygiene erfragen und nach dem Rahmenhygieneplan für Piercingstudios fragen (Kursbuch S. 36).",
          "In Niedersachsen gilt für Piercing eine eigene Hygieneverordnung; das Gesundheitsamt überwacht die Studios auf dieser Grundlage. Lies die aktuelle Fassung und lass dir die Anforderungen bestätigen."
        ] }
      ],
      fragen: [
        ["Wo meldest du dein Gewerbe an?", ["Beim zuständigen Gewerbeamt", "Beim Gesundheitsamt", "Bei der Krankenkasse"], "Erster Schritt vor dem Start.", "Entwurf"],
        ["Wen fragst du nach dem Rahmenhygieneplan für dein Studio?", ["Das örtliche Gesundheitsamt", "Das Gewerbeamt", "Die Krankenkasse"], "Empfehlung des Kursbuchs.", "S. 36"],
        ["Gibt es in Deutschland eine staatlich geregelte Piercer-Ausbildung?", ["Nein", "Ja", "Nur in Niedersachsen"], "Das Zertifikat der Akademie ist ein Teilnahme- und Trainingsnachweis.", "Entwurf"],
        ["Wer überwacht Piercingstudios in Niedersachsen auf Grundlage der Hygieneverordnung?", ["Das Gesundheitsamt", "Die Polizei", "Die Handwerkskammer"], "Siehe KURS-RECHERCHE.md.", "Entwurf"]
      ]
    },
    {
      titel: "Räume planen",
      seite: "S. 25–26, 38",
      inhalt: [
        { typ: "liste", punkte: [
          "Arbeitsplatz baulich oder mindestens durch eine Trennwand vom Wartebereich getrennt, am besten ein eigener Raum.",
          "Handwaschbecken mit fließendem Wasser, Spendern für Desinfektion, Waschlotion und Einmalhandtücher, ohne Handkontakt bedienbar und ohne Spritzer am Arbeitsplatz.",
          "Liege und Möbel mit glatter, abwaschbarer Oberfläche.",
          "Separate Toilette mit Handwaschbecken, Spendern, Abwurfbehälter und Hygieneeimer.",
          "Erste-Hilfe-Kasten und Notfallnummern gut sichtbar."
        ] },
        { typ: "praxis", text: "Plane Wege: Vom Aufbereitungsplatz (unrein) zum Sterilgutlager (rein) sollen sich saubere und benutzte Instrumente nicht kreuzen." }
      ],
      fragen: [
        ["Wie wird der Arbeitsplatz vom Wartebereich getrennt?", ["Baulich oder mindestens durch eine Trennwand", "Gar nicht", "Durch eine Pflanze"], "Laut Merkblättern und Kursbuch.", "S. 26"],
        ["Welche Oberfläche brauchen Liege und Möbel?", ["Glatt und abwaschbar", "Aus Stoff", "Aus unbehandeltem Holz"], "Siehe Modul 5.", "S. 26"],
        ["Was gehört an den Handwaschplatz?", ["Spender für Desinfektion, Waschlotion und Einmalhandtücher", "Ein Stück Seife und ein Stoffhandtuch", "Nichts"], "Ohne Handkontakt bedienbar.", "S. 25"]
      ]
    },
    {
      titel: "Hygieneplan und Dokumentation",
      seite: "S. 36–39, 46–47",
      entwurf: true,
      inhalt: [
        { typ: "liste", titel: "Das führst du schriftlich", punkte: [
          "Rahmenhygieneplan mit Reinigungs- und Desinfektionsplan (Beispiele im Kursbuch S. 37–39, mit dem Gesundheitsamt abstimmen)",
          "Sterilgut: jede Charge mit Sterilisierdatum und Chargennummer",
          "Prüfprotokolle des Autoklaven: tägliche Tests, halbjährliche Sporenproben, jährliche Geräteprüfung",
          "Einverständniserklärungen jedes Kunden, sicher aufbewahrt",
          "Foto-Einwilligungen, bevor du Kundenbilder veröffentlichst"
        ] }
      ],
      fragen: [
        ["Was dokumentierst du für jede Sterilgut-Charge?", ["Sterilisierdatum und Chargennummer", "Den Preis", "Nichts"], "So lässt sich jede Charge nachverfolgen.", "S. 46"],
        ["Was gehört in die Dokumentation deines Studios?", ["Hygieneplan, Sterilgut-Chargen, Autoklav-Prüfungen und Einverständniserklärungen", "Nur die Kasse", "Nichts"], "Siehe Lektion.", "Entwurf"],
        ["Wem legst du die Prüfungen des Autoklavs auf Verlangen vor?", ["Den örtlichen Behörden", "Den Kunden", "Niemandem"], "Siehe Modul 5.", "S. 47"]
      ]
    },
    {
      titel: "Versicherung und Preise",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Lass dich zu einer Betriebs- bzw. Berufshaftpflicht für Piercing beraten, bevor du den ersten Kunden stichst." },
        { typ: "liste", titel: "In die Preiskalkulation gehören", punkte: [
          "Material: Schmuck, Kanüle, Einmalmaterial, Pflegemittel",
          "Deine Arbeitszeit, inklusive Beratung, Einverständniserklärung und Aufbereitung",
          "Laufende Kosten: Raum, Geräte, Prüfungen, Versicherung"
        ] }
      ],
      fragen: [
        ["Was solltest du vor dem ersten Kunden klären?", ["Eine Betriebs- bzw. Berufshaftpflicht", "Eine Kfz-Versicherung", "Nichts"], "Lass dich beraten.", "Entwurf"],
        ["Was gehört in die Preiskalkulation?", ["Material, Arbeitszeit inklusive Beratung und Aufbereitung, laufende Kosten", "Nur der Schmuck", "Nur die Miete"], "Siehe Lektion.", "Entwurf"]
      ]
    },
    {
      titel: "Einkauf",
      seite: "S. 34, 56",
      inhalt: [
        { typ: "liste", punkte: [
          "Ersteinsätze nur aus G23-Titan oder PTFE, mit Materialnachweis des Herstellers. Nach EU-Recht darf Schmuck für frische Piercings höchstens 0,2 µg Nickel pro cm² und Woche abgeben.",
          "Desinfektionsmittel aus der VAH-Liste mit nachgewiesener Wirksamkeit.",
          "Kanülen, Klemmen und Verbrauchsmaterial aus dem Fachhandel für medizinischen bzw. Studiobedarf."
        ] },
        { typ: "ergaenzung", text: "Welche Händler sich bewährt haben, ergänzt die Piercing Akademie an dieser Stelle aus eigener Erfahrung." }
      ],
      fragen: [
        ["Welche Ersteinsätze kaufst du ein?", ["G23-Titan oder PTFE mit Materialnachweis", "303er Stahl", "Modeschmuck"], "Siehe Modul 6.", "S. 56"],
        ["Welche Desinfektionsmittel kaufst du?", ["Produkte aus der VAH-Liste mit nachgewiesener Wirksamkeit", "Beliebige Reiniger", "Haushaltsessig"], "Siehe Modul 5.", "S. 34"]
      ]
    },
    {
      titel: "Regeln für dein Studio",
      seite: "Modul 2 und 8",
      inhalt: [
        { typ: "liste", punkte: [
          "Vor jedem Piercing eine schriftliche Einverständniserklärung (Modul 2).",
          "Alter prüfen: unter 18 nur mit Einverständnis der Erziehungsberechtigten, besser gar nicht.",
          "Keine Heilversprechen und keine Werbung damit.",
          "Piercings, die du nicht sicher beherrschst, lehnst du ab; Piercings mit „Nicht durchführen“ stichst du nie (Modul 8).",
          "Bei Komplikationen verweist du den Kunden an einen Arzt."
        ] }
      ],
      fragen: [
        ["Was tust du mit einem Piercing, das du nicht sicher beherrschst?", ["Ich lehne es ab", "Ich probiere es trotzdem", "Ich steche es freihand"], "Sicherheit des Kunden geht vor.", "S. 91–93"],
        ["Was machst du mit Piercings, die mit „Nicht durchführen“ markiert sind?", ["Ich steche sie nie", "Ich steche sie nur bei Stammkunden", "Ich steche sie mit Betäubung"], "Gefahr einer ernsthaften Schädigung.", "S. 103–110"],
        ["Ersetzt das Zertifikat der Akademie eine behördliche Erlaubnis?", ["Nein, es ist ein Teilnahme- und Trainingsnachweis", "Ja", "Ja, in ganz Europa"], "Gewerbeamt und Gesundheitsamt entscheiden.", "Akademie"],
        ["Wann veröffentlichst du Fotos von Kundenpiercings?", ["Erst nach schriftlicher Einwilligung", "Sofort", "Nie"], "Siehe Modul 2.", "S. 1"]
      ]
    }
  ],
  uebung: [
    "Notiere die Kontaktdaten deines Gewerbeamts und deines Gesundheitsamts.",
    "Stelle eine Liste der Unterlagen zusammen, die du dem Gesundheitsamt vorlegen würdest.",
    "Kalkuliere den Preis für ein Helix-Piercing mit allen Kosten."
  ]
});
