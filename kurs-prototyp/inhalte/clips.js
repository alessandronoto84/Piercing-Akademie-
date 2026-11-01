/* Kurze Videoclips für die Lektionen. Die ersten fünf (01.11.2026) sind sanft animierte Modul-Titelbilder
   (Wan 2.2 über Hugging Face, als Vor-und-zurück-Schleife); eigene Studioaufnahmen kommen dazu.
   Jeder Eintrag beschreibt die Dateien in inhalte/clips/; eingebunden wird ein Clip in einer Lektion über
   { typ: "video", id: "…", text: "…", schleife: true }. Neue Clips erzeugt werkzeuge/clip-umwandeln.sh
   und gibt dabei den passenden Eintrag für diese Liste aus. */
window.KURS = window.KURS || { module: [] };
KURS.clips = {
"anatomie-modelle": { w: 832, h: 480, hoch: false, webm: true, standbild: true, dauer: "0:07" },
"autoklav": { w: 832, h: 480, hoch: false, webm: true, standbild: true, dauer: "0:07" },
"instrumente": { w: 832, h: 480, hoch: false, webm: true, standbild: true, dauer: "0:07" },
"schmuck-titan": { w: 832, h: 480, hoch: false, webm: true, standbild: true, dauer: "0:07" },
"studio-raum": { w: 832, h: 480, hoch: false, webm: true, standbild: true, dauer: "0:04" }
};
