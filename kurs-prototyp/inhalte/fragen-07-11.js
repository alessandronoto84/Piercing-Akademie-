/* Fragenpool, Module 07–11 (von Hand geschrieben). Format: [Frage, [richtig, falsch, falsch], Erklärung, Seite].
   Weitere Fragen aus Datenblättern und Tabellen stehen in fragen-generiert.js. */
window.KURS = window.KURS || { module: [] };
KURS.fragen = KURS.fragen || {};

KURS.fragen[7] = [
  ["In wie vielen Stärken arbeitet man beim Piercen hauptsächlich mit Kanülen?", ["In drei Stärken", "In einer Stärke", "In zehn Stärken"], "18G, 16G und 14G.", "S. 64"],
  ["Was bedeutet eine größere Gauge-Zahl (z. B. 18G statt 14G)?", ["Eine dünnere Kanüle", "Eine dickere Kanüle", "Eine längere Kanüle"], "18G 1,3 mm, 14G 2,2 mm.", "S. 64"],
  ["Woran erkennst du die Stärke einer Venenverweilkanüle schnell?", ["An der Farbe des Ansatzes", "Am Geruch", "Am Gewicht"], "Grün, grau, orange.", "S. 64"],
  ["Wie wird das Hautgewebe bei einer Biopsiestanze traumatisiert?", ["Nur geringfügig", "Sehr stark", "Gar nicht, sie schneidet nicht"], "So ist eine schnelle Wundheilung möglich.", "S. 65"],
  ["Wofür sind Biopsiestanzen konzipiert?", ["Für die einmalige Stanzung der Haut", "Für die mehrfache Verwendung", "Zum Desinfizieren"], "In verschiedenen Durchmessern erhältlich.", "S. 65"],
  ["Wozu dient eine Piercing-Zange bzw. Klemme?", ["Sie hält die Stelle, damit die Haut beim Stechen in Position bleibt", "Sie schneidet den Schmuck", "Sie desinfiziert"], "Es gibt viele Zangen für verschiedene Piercings.", "S. 65"],
  ["Wie sieht eine Einführhilfe aus?", ["Ein Stäbchen, vorne leicht spitz, langsam breiter werdend", "Ein Ring mit Kugel", "Eine Schere"], "Hinten mit Einführung für den Schmuck.", "S. 66"],
  ["Worauf musst du beim Arbeiten mit der Einführhilfe achten?", ["Sehr vorsichtig vorgehen, um Verletzungen zu vermeiden", "Möglichst schnell drücken", "Nichts"], "Abgeheilte Kanäle vorsichtig dehnen.", "S. 66"],
  ["Was gibt es laut Kursbuch an Werkzeugen und Hilfsmitteln?", ["Unzählige; das Kapitel zeigt nur einen Auszug", "Genau zehn", "Nur Kanülen"], "Schlusssatz von Kap. 9.", "S. 73"],
  ["Wie arbeitest du am Kunden laut Kursbuch?", ["Stets mit desinfizierten Händen und (sterilen) Einmalhandschuhen", "Mit bloßen Händen", "Mit Gartenhandschuhen"], "Einmalhandschuhe.", "S. 71"],
  ["Warum trägst du beim Piercen einen Mund-Nasen-Schutz?", ["Zur eigenen Sicherheit und zur Sicherheit des Kunden", "Wegen des Geruchs", "Aus Mode"], "So steht es bei Mundschutz.", "S. 71"],
  ["Wofür kann eine Instrumentenschale verwendet werden?", ["Um Werkzeuge und Instrumente parat zu legen", "Zum Entsorgen von Nadeln", "Zum Waschen der Hände"], "Instrumentenschale.", "S. 72"],
  ["Wohin kommt eine benutzte Kanülennadel?", ["In den Nadelabwurfbehälter", "In die Instrumentenschale", "In den Papierkorb"], "Direkt nach dem Stich.", "S. 27"]
];

KURS.fragen[8] = [
  ["Welche Information enthält jedes Datenblatt im Kursbuch?", ["Lage, Ersteinsatz, Kanüle und Klemme", "Nur den Preis", "Nur ein Foto"], "So sind alle Datenblätter aufgebaut.", "S. 74"],
  ["Wie viele Helix-Piercings sind ein Industrial anatomisch gesehen?", ["Zwei", "Eins", "Drei"], "Ein langer Barbell geht durch beide Stichkanäle.", "S. 84"],
  ["Welche Intimpiercings werden laut Kursbuch nicht durchgeführt?", ["Ampallang, Apadravya, Klitoris direkt, Prinzessin Albertina und Fourchette", "Frenulum und Christina", "Keine"], "Gefahr einer (ernsthaften) Schädigung.", "S. 103–110"],
  ["Durch welches Gewebe wird das Septum gestochen?", ["Durch das Bindegewebe unterhalb des Nasenscheidewandknorpels", "Durch den Nasenknochen", "Durch den Nasenflügel"], "Dehnbar für größeren Schmuck.", "S. 88"],
  ["Wie viel Abstand hält ein Labret-Piercing zum Lippenrot?", ["Mehr als 3 mm", "Kein Abstand", "Genau 1 mm"], "Datenblatt Labret.", "S. 86"],
  ["Wie heißt ein Piercing der Oberlippe?", ["Madonna- bzw. Medusa-Piercing", "Smiley", "Bridge"], "Labret im engeren Sinn ist die Unterlippe.", "S. 86"],
  ["Warum heißt das Lippenbändchen-Piercing auch Smiley?", ["Weil es nur beim Lächeln sichtbar ist", "Weil es lustig aussieht", "Weil es nicht wehtut"], "Gestochen durch das Frenulum.", "S. 87"],
  ["Wie lang ist der Stichkanal beim Augenbrauenpiercing etwa?", ["8 mm", "2 cm", "2 mm"], "Datenblatt Augenbraue.", "S. 89"],
  ["Womit kühlt der Kunde nach dem Zungenpiercing?", ["Mit Eiswürfeln, am besten aus Kamillentee", "Mit Eisspray", "Gar nicht"], "Sofort nach dem Stechen.", "S. 90"],
  ["Wann kann der Barbell beim Zungenpiercing gekürzt werden?", ["Nach etwa 10 Tagen", "Nach 1 Stunde", "Nach 1 Jahr"], "Ersteinsatz 20 mm Barbell.", "S. 90"],
  ["Wie lang ist der Stichkanal beim Bauchnabelpiercing etwa?", ["1 cm", "5 mm", "3 cm"], "Danach steril abkleben.", "S. 94"],
  ["Wie lange soll der Kunde nach Bauchnabel- oder Brustwarzenpiercing ein Pflaster tragen?", ["Die nächsten 3 Tage", "1 Stunde", "4 Wochen"], "Steriles Pflaster.", "S. 94–95"],
  ["Was muss beim Brustwarzenpiercing zum Anzeichnen geschehen?", ["Den Oberkörper komplett frei machen", "Nichts", "Den Kunden hinlegen"], "Datenblatt Brustwarze.", "S. 95"],
  ["Was ist typisch für Surface-Piercings?", ["Sie werden häufiger abgestoßen und heilen deutlich länger", "Sie heilen in einer Woche", "Sie wachsen nie heraus"], "Ein- und Austritt liegen auf einer Ebene.", "S. 96"],
  ["Was kann ein falsch gestochenes Eskimo-Piercing verursachen?", ["Einreißen oder dauerhaftes Einfallen der Lippe", "Bessere Heilung", "Nichts"], "Als Anfänger ablehnen.", "S. 93"],
  ["Wohin darfst du beim Eskimo nicht stechen?", ["Ins Lippenrot", "In die Unterlippe", "Vertikal"], "Datenblatt Eskimo.", "S. 93"],
  ["Was kann beim Cheek-Piercing dauerhaft bleiben?", ["Durchs Piercen entstandene Grübchen", "Ein Tattoo", "Nichts"], "Dazu die Gefahr einer Verunstaltung.", "S. 92"],
  ["Wie dehnst du einen abgeheilten Lobe?", ["Mit Gleitgel und Dehnstab um 1 bis 2 mm pro Monat", "Sofort um 1 cm", "Gar nicht"], "Oder zu einem Tunnel punchen.", "S. 74"],
  ["Wo sitzt der Rook?", ["Senkrecht in der Antihelix", "Im Ohrläppchen", "Am Tragus"], "Knorpelsteg, der das Cavum conchae umrandet.", "S. 80"],
  ["Wann ist ein Snug möglich?", ["Nur wenn der entsprechende Bereich der Ohrmuschel ausreichend ausgeprägt ist", "Immer", "Nur bei Kindern"], "Datenblatt Snug.", "S. 82"],
  ["Was ist beim Prinz Albert besonders zu beachten?", ["Die Kunststoffkanüle darf beim Vorschieben nicht abknicken", "Er wird mit 18G gestochen", "Er wird mit Zange gestochen"], "Sonst kann die Nadel die Kanüle durchstechen.", "S. 98"],
  ["Was ist bei einem Pubic-Piercing vorher zu tun?", ["Den Intimbereich von Schambehaarung befreien", "Nichts", "Den Kunden betäuben"], "Oberflächenpiercing am Penisansatz.", "S. 100"]
];

KURS.fragen[9] = [
  ["Was passiert in Schritt 2 des Ablaufs?", ["Begrüßung und Small Talk", "Stechen", "Pflegehinweise"], "Ablauf Kap. 11.", "S. 111"],
  ["Wann bereitest du Arbeitsplatz und Instrumente vor?", ["Während der Kunde die Einverständniserklärung ausfüllt", "Nach dem Stich", "Am Vortag"], "Schritt 5.", "S. 111"],
  ["Was achtest du beim Wählen des Ersteinsatzes in Schritt 7?", ["Auf die Überlänge", "Auf die Farbe des Kunden-T-Shirts", "Auf nichts"], "Die Stelle begutachten und passenden Ersteinsatz wählen.", "S. 111"],
  ["Womit desinfizierst du die Stelle in Schritt 8?", ["Mit einem Alkoholtupfer", "Mit Kochsalzlösung", "Mit Wasser"], "Ablauf Schritt 8.", "S. 111"],
  ["Womit markierst du Ein- und Austrittsstelle?", ["Mit dem Einmalstift (Hautmarker)", "Mit Kugelschreiber", "Gar nicht"], "Schritt 9.", "S. 111"],
  ["Warum lässt du den Kunden nach dem Anzeichnen schauen?", ["Damit er prüft, ob es so passt", "Damit er sich ablenkt", "Das ist nicht nötig"], "Schritt 10.", "S. 111"],
  ["Was gilt für die Geschwindigkeit des Stichs?", ["Je schneller gestochen wird, desto weniger Schmerzen", "Langsam sticht es sich sicherer", "Die Geschwindigkeit ist egal"], "Schritt 12.", "S. 112"],
  ["Was bleibt nach dem Herausziehen der Kanüle im Stichkanal?", ["Der Kunststoffüberzug", "Die Nadel", "Nichts"], "Schritt 13.", "S. 112"],
  ["Warum kürzt du den Kunststoffüberzug mit der Schere?", ["Für ein besseres Einsetzen des Schmucks", "Damit er hübscher aussieht", "Das macht man nicht"], "Schritt 14.", "S. 112"],
  ["Was lässt du den Kunden beim Durchdrücken des Schmucks tun?", ["Ausatmen", "Einatmen und anhalten", "Sprechen"], "Schritt 16 ist schmerzhaft.", "S. 112"],
  ["Womit hältst du den Schmuck fest, während du die Kugel aufdrehst?", ["Mit der Klemmzange", "Mit der Schere", "Mit den Fingern des Kunden"], "Schritt 19.", "S. 112"],
  ["Womit wird nach dem Einsetzen nochmals eingesprüht?", ["Mit Kodan", "Mit Parfum", "Mit Eisspray"], "Schritt 20.", "S. 112"],
  ["Bei welchen Piercings wird eventuell mit Pflaster abgeklebt?", ["Zum Beispiel Brustwarze und Bauchnabel", "Bei Lobe immer", "Nie"], "Schritt 22.", "S. 113"],
  ["Was soll der Kunde bei Wundheilstörungen tun?", ["Zur Beratung wiederkommen", "Den Schmuck selbst herausnehmen", "Nichts"], "Schritt 26.", "S. 113"],
  ["Wie solltest du dich bei einem möglichen Kreislaufabfall verhalten?", ["Immer nachfragen, wie es dem Kunden geht", "Schnell weiterarbeiten", "Den Raum verlassen"], "Hinweis am Ende des Ablaufs.", "S. 113"],
  ["Welche Notfallnummern sollten im Studio aushängen?", ["Notarzt, Hausarzt, Feuerwehr", "Nur die Nummer des Lieferanten", "Keine"], "Kap. 5.4.", "S. 26"],
  ["Welche Nummer wählst du bei Bewusstlosigkeit des Kunden?", ["112", "110 nur für Polizei", "Die Nummer des Kunden"], "Ergänzung der Akademie.", "Ergänzung"]
];

KURS.fragen[10] = [
  ["Wer pflegt das frische Piercing nach dem Stechen?", ["Der Kunde selbst", "Nur der Piercer", "Niemand"], "Deshalb muss er genau angeleitet werden.", "S. 48"],
  ["Wie gibst du Pflegehinweise am besten weiter?", ["Mündlich und schriftlich, zusammen mit dem Pflegemittel", "Gar nicht", "Nur per Social Media"], "Sehr zu empfehlen.", "S. 48"],
  ["Welcher Wirkstoff in Prontolind und Octenisept ist für Knorpel toxisch?", ["Octenidin", "Natriumchlorid", "Chlorhexidin"], "Nicht auf Knorpel anwenden.", "S. 48"],
  ["Sind die Abheilzeiten im Kursbuch feste Garantien?", ["Nein, es sind Richtwerte bei optimaler Heilung", "Ja, auf den Tag genau", "Ja, für jeden gleich"], "Jeder Mensch heilt anders.", "S. 49"],
  ["Was kann passieren, wenn der Schmuck vor der Ausheilung gewechselt wird?", ["Komplikationen wie eine Infektion", "Schnellere Heilung", "Nichts"], "Erst nach vollständiger Ausheilung wechseln.", "S. 49"],
  ["Was ist meist die Ursache einer Entzündung?", ["Keime oder Fremdstoffe (z. B. von den Haaren) in der Wunde", "Zu viel Pflege", "Zu dünner Schmuck"], "Wundheilstörungen.", "S. 50"],
  ["Was droht, wenn Eiter nicht abfließen kann?", ["Eine Blutvergiftung", "Schnellere Heilung", "Nichts"], "Eiter muss abfließen können.", "S. 50"],
  ["Was kann bei einer Entzündung helfen?", ["Kamille, Teebaumöl oder Manukahonig, tägliches Reinigen", "Den Schmuck verkleben", "Nichts tun"], "Dazu die Salbe „Tyrosur“.", "S. 50"],
  ["Welche Salbe aus der Apotheke nennt das Kursbuch bei Entzündungen?", ["Tyrosur", "Bepanthen", "Voltaren"], "Lege dem Kunden nahe, sie zu kaufen.", "S. 50"],
  ["Was kann ständiges Nachbluten verursachen?", ["Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit", "Zu wenig Schlaf", "Zu viel Wasser"], "Dann einen Arzt aufsuchen.", "S. 50"],
  ["Wann schickst du einen Kunden mit Entzündung sofort zum Arzt?", ["Bei Fieber, sich ausbreitender Rötung oder zunehmenden Schmerzen", "Nie", "Nur am Wochenende"], "Ergänzung der Akademie.", "Ergänzung"],
  ["Wodurch entsteht wildes Fleisch?", ["Durch dauerhafte Reizung der Unterhaut", "Durch zu viel Pflege", "Durch Kälte"], "Rote, fleischähnliche Masse.", "S. 51"],
  ["Was ist der erste Weg bei wildem Fleisch?", ["Nichts tun, oft stößt der Körper es von selbst ab", "Sofort operieren", "Mit Feuer behandeln"], "Weg 1 von 5.", "S. 51"],
  ["Welche Mittel helfen beim Dehydrieren von wildem Fleisch?", ["Kochsalzlösung, Kamillentee, Wasserstoffperoxid, Teebaumöl, Eukalyptusöl", "Zucker und Salz", "Speiseöl"], "Weg 2 von 5.", "S. 51"],
  ["Was ist eine Wildfleischdisk?", ["Eine Kunststoffscheibe, die auf den Schmuck gestülpt wird", "Ein Pflaster", "Eine Tablette"], "Weg 3 von 5.", "S. 51"],
  ["Welcher Schmuckwechsel kann bei wildem Fleisch helfen?", ["Zum Beispiel ein Titan-Labret gegen einen PTFE-Barbell tauschen", "Größeren Stahlschmuck einsetzen", "Schmuck entfernen und Loch zukleben"], "Weg 4 von 5.", "S. 51"],
  ["Wer entfernt wildes Fleisch, wenn nichts anderes hilft?", ["Ein Arzt bzw. Dermatologe, chirurgisch", "Der Piercer mit der Schere", "Niemand"], "Weg 5 von 5.", "S. 51"],
  ["Welche Gruppen gelten als Risikogruppen bei der Heilung?", ["Raucher, Alkoholiker und Diabetiker", "Sportler", "Kinder"], "Hier treten schneller Komplikationen auf.", "S. 50"]
];

KURS.fragen[11] = [
  ["Wo meldest du dein Gewerbe an?", ["Beim zuständigen Gewerbeamt", "Beim Gesundheitsamt", "Bei der Krankenkasse"], "Erster Schritt vor dem Start.", "Entwurf"],
  ["Wer überwacht Piercingstudios in Niedersachsen auf Grundlage der Hygieneverordnung?", ["Das Gesundheitsamt", "Die Polizei", "Die Handwerkskammer"], "Siehe KURS-RECHERCHE.md.", "Entwurf"],
  ["Gibt es ein offiziell anerkanntes Gütesiegel für Piercingstudios?", ["Nein", "Ja, vom Bund", "Ja, von der EU"], "Laut Gesundheitsamt Oldenburg.", "Entwurf"],
  ["Wie soll der Arbeitsplatz baulich vom Wartebereich getrennt sein?", ["Baulich oder mindestens durch eine Trennwand", "Gar nicht", "Durch einen Vorhang reicht immer"], "Laut Merkblättern der Gesundheitsämter.", "Entwurf"],
  ["Was gehört in die Dokumentation deines Studios?", ["Hygieneplan, Sterilgut-Chargen, Autoklav-Prüfungen und Einverständniserklärungen", "Nur die Kasse", "Nichts"], "Lektion Hygieneplan und Dokumentation.", "Entwurf"],
  ["Was solltest du vor dem ersten Kunden klären?", ["Eine Betriebs- bzw. Berufshaftpflicht", "Eine Kfz-Versicherung", "Nichts"], "Lass dich von einem Versicherer beraten.", "Entwurf"],
  ["Was gehört in eine Preiskalkulation?", ["Material, Arbeitszeit inklusive Beratung und Aufbereitung, laufende Kosten", "Nur der Schmuck", "Nur die Miete"], "Lektion Versicherung, Preise und Einkauf.", "Entwurf"],
  ["Worauf achtest du beim Einkauf von Ersteinsätzen?", ["G23-Titan oder PTFE mit Materialnachweis", "Möglichst billig", "Möglichst schwer"], "Siehe Modul 6.", "Entwurf"],
  ["Welche Desinfektionsmittel kaufst du ein?", ["Produkte aus der VAH-Liste mit nachgewiesener Wirksamkeit", "Beliebige Reiniger", "Haushaltsessig"], "Siehe Modul 5.", "S. 34"],
  ["Wann veröffentlichst du Fotos von Kundenpiercings?", ["Erst nach schriftlicher Einwilligung", "Sofort", "Nie, das ist verboten"], "Siehe Modul 2.", "S. 1"],
  ["Was machst du mit Piercings, die im Kursbuch mit „Nicht durchführen“ markiert sind?", ["Ich steche sie nie", "Ich steche sie nur bei Stammkunden", "Ich steche sie mit Betäubung"], "Gefahr einer ernsthaften Schädigung.", "S. 103–110"],
  ["Wie verweist du Kunden bei Komplikationen?", ["An einen Arzt", "An einen anderen Piercer", "Gar nicht"], "Regeln für dein Studio.", "Entwurf"],
  ["Ist der Beispiel-Hygieneplan aus dem Kursbuch sofort für dein Studio gültig?", ["Nein, er muss mit dem Gesundheitsamt abgestimmt werden", "Ja, unverändert", "Ja, wenn man ihn ausdruckt"], "Nur als Beispiel, nicht blind übernehmen.", "S. 39"],
  ["Ersetzt das Zertifikat der Akademie eine behördliche Erlaubnis?", ["Nein, es ist ein Teilnahme- und Trainingsnachweis", "Ja", "Ja, in ganz Europa"], "Gewerbeamt und Gesundheitsamt entscheiden vor Ort.", "Akademie"],
  ["Wie lange solltest du Einverständniserklärungen aufbewahren?", ["Sicher und nachvollziehbar; die Dauer lässt du rechtlich prüfen", "Gar nicht", "Einen Tag"], "Das Kursbuch nennt 10 Jahre für die Gesundheitsdaten; rechtlich prüfen.", "S. 115"]
];
