/* Modul 08 – Piercing-Arten. Quelle: Kursbuch Kap. 10 (S. 74–110). Datenblätter wörtlich nach Buch; Intimbereich ohne Bilder. */
window.KURS = window.KURS || { module: [] };
(function () {
  function db(name, beschreibung, ersteinsatz, kanuele, klemme, hinweis, seite) {
    return { typ: "datenblatt", name: name, beschreibung: beschreibung, ersteinsatz: ersteinsatz, kanuele: kanuele, klemme: klemme, hinweis: hinweis || "", seite: seite };
  }
  var NICHT = "NICHT DURCHFÜHREN. Gefahr einer ernsthaften Schädigung.";
  KURS.module.push({
    nr: 8,
    titel: "Piercing-Arten",
    quelle: "Kursbuch Kap. 10, S. 74–110",
    ziel: "Du kennst für jedes Piercing Lage, Ersteinsatz, Kanüle und Klemme, und du weißt, welche Piercings du als Anfänger ablehnst oder grundsätzlich nicht durchführst.",
    lektionen: [
      {
        titel: "So liest du ein Datenblatt",
        inhalt: [
          { typ: "text", text: "Zu jedem Piercing gibt es ein Datenblatt mit vier Angaben: wo es sitzt, welcher Ersteinsatz passt, welche Kanülenstärke (oder Stanze) du nimmst und womit du die Stelle hältst (Klemme, Nadelauffangrohr oder freihand)." },
          { typ: "achtung", text: "Der Ersteinsatz braucht stets eine Überlänge von etwa 4 mm, weil der frische Stichkanal anschwellen kann. Er darf während der Heilung nie durch Kugeln oder Plättchen eingeengt werden." },
          { typ: "merke", text: "Bei Daith und Allergiepiercing gilt: Als Piercer darfst du keine Heilversprechen geben oder damit werben." }
        ]
      },
      {
        titel: "Ohrbereich",
        inhalt: [
          db("Lobe", "Ohrläppchen. Kann zu einem Tunnel gepuncht oder gedehnt werden: mit Gleitgel und Dehnstab bzw. Dehnschnecke den abgeheilten Stichkanal um 1 bis 2 mm pro Monat dehnen.", "Labret", "18G, 16G, 14G, Punch", "Snaptile, Gazeklemme", "", "S. 74"),
          db("Upper Lobe", "Durch das obere Ohrläppchen; oft werden mehrere Upper Lobes in einer Reihe getragen.", "Labret", "18G, 16G", "Snaptile, Gazeklemme", "", "S. 75"),
          db("Tragus", "Knorpelfortsatz am Gehöreingang.", "Labret, BCR, Barbell", "Punch, 18G, 16G", "Traguszange, Nadelauffangrohr", "", "S. 76"),
          db("Anti-Tragus", "Der dem Tragus gegenüberliegende Knorpelfortsatz.", "Hufeisen, Banane, BCR", "18G", "Nadelauffangrohr", "", "S. 77"),
          db("Helix", "Überall an der Ohrkante, von direkt oberhalb des Ohrläppchens bis oberhalb um die Ohrmuschel-Rundung herum.", "Labret, BCR, Hufeisen", "18G", "Snaptile, Gazeklemme, Freihand", "", "S. 78"),
          db("Conch", "Durch die innere oder äußere Ohrmuschel.", "Labret, Barbell, BCR", "18G, 16G, Punch", "Snaptile, Gazeklemme", "", "S. 79"),
          db("Rook", "Senkrecht in der Antihelix, dem Knorpelsteg, der das Cavum conchae rückwärts umrandet.", "Hufeisen, Banane, BCR", "18G", "Nadelauffangrohr", "", "S. 80"),
          db("Daith", "Durch die Auswölbung in der Ohrmuschel. Kann bei Migräne helfen.", "Banane, BCR", "18G (evtl. biegen)", "Nadelauffangrohr", "Keine Heilversprechen geben oder damit werben.", "S. 81"),
          db("Snug", "Durch den Ohrknorpel in der inneren Knorpelauswölbung parallel zur Ohrkante. Nur möglich, wenn der Bereich ausreichend ausgeprägt ist.", "Banane, Barbell, BCR, Hufeisen", "18G", "Freihand, Nadelauffangrohr", "", "S. 82"),
          db("Allergiepiercing", "Oben mittig durch die Wölbung des Helix, am Akupunkturpunkt „Antihistamin“. Durch die dauerhafte Stimulation können Allergien gemildert werden.", "Hufeisen, Banane, BCR", "18G", "Freihand, Nadelauffangrohr", "Keine Heilversprechen geben oder damit werben.", "S. 83"),
          db("Industrial", "Auch Scaffold. Der obere Rand der Ohrmuschel wird nahe dem Kopf und gegenüberliegend am äußeren Rand durchstochen, sodass ein langer Barbell durch beide Stichkanäle geht. Anatomisch sind es zwei Helix-Piercings.", "Barbell 38 mm", "16G", "Freihand, Nadelauffangrohr", "", "S. 84")
        ]
      },
      {
        titel: "Gesichtsbereich",
        inhalt: [
          db("Nase (Nostril)", "Durch den Nasenflügel. In Indien vorzugsweise am linken Nasenflügel getragen.", "Labret", "18G", "Gazeklemme, Snaptile", "", "S. 85"),
          db("Labret", "Im engeren Sinn ein Piercing der Unterlippe; an der Oberlippe heißt es Madonna- bzw. Medusa-Piercing. Mehr als 3 mm Abstand zum Lippenrot.", "Labret, Hufeisen", "18G", "Snaptile, Gazeklemme", "", "S. 86"),
          db("Lippenbändchen (Smiley)", "Durch das Frenulum, das die Oberlippe in der Mitte mit dem Zahnfleisch verbindet; nur beim Lächeln sichtbar.", "Hufeisen, BCR", "18G", "Septum-Zange, Freihand", "", "S. 87"),
          db("Septum", "Durch das Bindegewebe unterhalb des Nasenscheidewandknorpels. Dehnbar für größeren Schmuck.", "Hufeisen", "18G, 16G", "Septum-Zange", "", "S. 88"),
          db("Augenbraue", "Meist vertikal durch die Augenbraue, etwa 8 mm Stichkanal.", "Banane, Hufeisen", "18G", "Snaptile, Gazeklemme", "Nur im äußeren Drittel der Augenbraue stechen: Lähmungsgefahr.", "S. 89"),
          db("Zunge", "Vertikal in der Mitte der Zunge. Von unten nach oben stechen, das Zungenbändchen nicht verletzen, sofort mit Eiswürfel kühlen (Eiswürfel aus Kamillentee empfehlen), kein PTFE verwenden, auf mögliche Zahnschäden hinweisen.", "20 mm Barbell (nach 10 Tagen ggf. kürzer)", "16G", "Snaptile, Gazeklemme, Zungenklemme", "", "S. 90"),
          db("Bridge", "Auch Erl. Am oberen Ende des Nasenrückens, waagerecht auf dem Nasenbein zwischen den Augen. Zu tief kann es auf Nervenbahnen drücken, zu oberflächlich wächst es heraus.", "Barbell, Banane", "18G", "Snaptile, Gazeklemme", "Als Piercing-Anfänger ablehnen.", "S. 91"),
          db("Cheek", "Wangenpiercing, oft an der Stelle eines Grübchens. Hier verlaufen wichtige Arterien und Nerven; es droht eine Verunstaltung, entstandene Grübchen können bleiben.", "Barbell, Labret", "18G", "Snaptile, Gazeklemme", "Nur durch professionelle Piercer. Als Anfänger ablehnen.", "S. 92"),
          db("Eskimo", "Vertikal durch die Lippe bis unterhalb der Lippe. Falsch gestochen kann die Lippe einreißen oder dauerhaft einfallen.", "Barbell, Banane", "18G", "Snaptile, Gazeklemme, Freihand", "Als Anfänger ablehnen. Nicht ins Lippenrot stechen.", "S. 93")
        ]
      },
      {
        titel: "Körperbereich",
        inhalt: [
          db("Bauchnabel", "Vertikal oberhalb oder unterhalb des Nabels, etwa 1 cm Stichkanallänge. Im Liegen stechen, das erleichtert die Arbeit und beugt Kreislaufproblemen vor. Mit sterilem Pflaster abkleben und Pflaster für die nächsten 3 Tage empfehlen.", "Banane, BCR", "16G", "Snaptile, Freihand", "", "S. 94"),
          db("Brustwarze", "Durch die Brustwarze bzw. den Warzenhof, meist horizontal oder vertikal. Zum Anzeichnen den Oberkörper komplett frei machen; mit sterilem Pflaster abkleben und Pflaster für 3 Tage empfehlen.", "Barbell, BCR", "16G", "Snaptile, Gazeklemme", "", "S. 95"),
          db("Surface", "Oberflächenpiercing an Stellen, die weder konvex noch konkav sind; Ein- und Austritt liegen auf einer Ebene. Wird häufiger abgestoßen und wächst heraus, die Heilung dauert deutlich länger. Passender Schmuck und präzise Platzierung senken das Risiko.", "Bar, Banane, Dermal Anchor", "16G, 18G, Punch", "Freihand, Snaptile, Gazeklemme", "", "S. 96")
        ]
      },
      {
        titel: "Intimbereich (nur für Volljährige)",
        inhalt: [
          { typ: "text", text: "Diese Lektion behandelt die Intimpiercings aus dem Kursbuch ohne Abbildungen. Einige Piercings werden ausdrücklich nicht durchgeführt." },
          db("Frenulum (Männer)", "Etwas unterhalb des Vorhautbändchens, damit es nicht ausreißt. Heilt meist in vier bis acht Wochen; bei beschnittenen Männern nur möglich, wenn genug Bändchen vorhanden ist.", "Banane, Barbell", "16G, 18G", "Nadelauffangrohr, Freihand, Gazeklemme", "", "S. 97"),
          db("Prinz Albert", "Von der Harnröhre bis zur Unterseite des Penis. Die Nadel zuerst etwas in die Kanüle zurückziehen, dann durch Vorschieben der Nadel stechen; die Kunststoffkanüle darf nicht abknicken.", "BCR", "14G, 16G", "Freihand", "", "S. 98"),
          db("Dydoe", "Durch den Rand der Eichel, überwiegend bei beschnittenen Männern.", "Banane, Barbell", "16G, 18G", "Freihand", "", "S. 99"),
          db("Pubic", "Am Penisansatz, meist waagerecht genau an der Übergangsstelle. Oberflächenpiercing, neigt zum Herauswachsen; Schambehaarung vorher entfernen.", "BCR, Barbell, Bar, Banane", "16G, 18G", "Freihand, Gazeklemme", "", "S. 100"),
          db("Hafada", "Auch Scrotal. In der Haut des Hodensacks, nicht sehr tief.", "BCR, Banane", "16G, 18G", "Freihand, Snaptile, Gazeklemme", "", "S. 101"),
          db("Guiche", "Durch die Raphe (Damm), quer zur Naht; auch bei Frauen möglich.", "BCR, Barbell", "16G, 18G", "Freihand", "", "S. 102"),
          db("Ampallang", "Horizontal durch die Eichel.", "–", "–", "–", NICHT, "S. 103"),
          db("Apadravya", "Vertikal durch die Eichel.", "–", "–", "–", NICHT + " Nie durch die Schwellkörper stechen: es drohen ernsthafte Schäden bis zum Verbluten.", "S. 104"),
          db("Christina (Frauen)", "Vertikal in die Falte der oben zusammenlaufenden großen Schamlippen, Austritt am Venushügel. Nicht bei jeder Frau anatomisch möglich.", "Banane, Barbell, BCR", "16G, 18G", "Freihand, Snaptile, Gazeklemme", "", "S. 105"),
          db("Klitorisvorhaut", "Durch die Klitorisvorhaut, vertikal oder horizontal; die Klitoris selbst wird nicht durchstochen.", "BCR, Banane, Barbell", "16G, 18G", "Freihand", "", "S. 106"),
          db("Schamlippe", "In den inneren oder äußeren Schamlippen.", "BCR", "16G, 18G", "Freihand, Snaptile, Gazeklemme", "", "S. 107"),
          db("Klitoris direkt", "Durch die Klitoris selbst.", "–", "–", "–", "NICHT DURCHFÜHREN. Gefahr einer Schädigung der Libido.", "S. 108"),
          db("Prinzessin Albertina", "Vertikal von der Harnröhrenöffnung zur Vaginalöffnung.", "–", "–", "–", "NICHT DURCHFÜHREN. Gefahr einer Schädigung.", "S. 109"),
          db("Fourchette", "Vertikal an der unteren Stelle des Zusammentreffens der kleinen Schamlippen; stark anatomieabhängig.", "–", "–", "–", "NICHT DURCHFÜHREN. Gefahr einer Schädigung.", "S. 110")
        ]
      }
    ],
    uebung: [
      "Schreibe für Lobe, Helix, Tragus und Nostril die Datenblätter aus dem Gedächtnis auf.",
      "Übe am Silikon-Ohr: Stelle anzeichnen, Klemme setzen, Kanüle ansetzen (ohne zu stechen).",
      "Liste alle Piercings auf, die du als Anfänger ablehnst, und alle, die du nie durchführst."
    ],
    quiz: [
      { frage: "Welche Kanüle nimmst du für ein Industrial?", antworten: ["18G", "16G", "14G"], richtig: 1, erklaerung: "Ersteinsatz Barbell 38 mm, Kanüle 16G.", seite: "S. 84" },
      { frage: "Was ist der Ersteinsatz beim Nostril?", antworten: ["Labret", "Hufeisen", "Banane"], richtig: 0, erklaerung: "Kanüle 18G, Klemme Gazeklemme oder Snaptile.", seite: "S. 85" },
      { frage: "Womit hältst du beim Rook die Stelle?", antworten: ["Snaptile", "Nadelauffangrohr", "Septum-Zange"], richtig: 1, erklaerung: "Im Innenohr passt keine Zange.", seite: "S. 80" },
      { frage: "Welches Piercing lehnst du als Anfänger ab?", antworten: ["Lobe", "Bridge", "Nostril"], richtig: 1, erklaerung: "Auch Cheek und Eskimo lehnst du als Anfänger ab.", seite: "S. 91" },
      { frage: "Was gilt beim Zungenpiercing?", antworten: ["PTFE als Ersteinsatz", "Von unten nach oben stechen, 20 mm Barbell, kein PTFE", "Das Zungenbändchen durchstechen"], richtig: 1, erklaerung: "Danach mit Eiswürfel kühlen und auf Zahnschäden hinweisen.", seite: "S. 90" },
      { frage: "Wie wird ein Bauchnabelpiercing gestochen?", antworten: ["Im Stehen", "Im Liegen, um Kreislaufproblemen vorzubeugen", "Im Sitzen"], richtig: 1, erklaerung: "Danach steril abkleben, Pflaster für 3 Tage.", seite: "S. 94" },
      { frage: "Welches dieser Piercings führst du grundsätzlich nicht durch?", antworten: ["Christina", "Ampallang", "Frenulum"], richtig: 1, erklaerung: "Ebenso Apadravya, Klitoris direkt, Prinzessin Albertina und Fourchette.", seite: "S. 103" }
    ]
  });
})();
