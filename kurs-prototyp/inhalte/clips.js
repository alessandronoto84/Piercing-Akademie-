/* Kurze Videoclips für die Lektionen (eigene Aufnahmen aus dem Studio).
   Jeder Eintrag beschreibt die Dateien in inhalte/clips/; eingebunden wird ein Clip in einer Lektion über
   { typ: "video", id: "…", text: "…", schleife: true }. Neue Clips erzeugt werkzeuge/clip-umwandeln.sh
   und gibt dabei den passenden Eintrag für diese Liste aus. */
window.KURS = window.KURS || { module: [] };
KURS.clips = {
};
