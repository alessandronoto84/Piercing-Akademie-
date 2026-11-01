#!/usr/bin/env bash
# Wandelt ein Handyvideo in einen kurzen Kursclip um.
# Aufruf im Ordner kurs-prototyp:  werkzeuge/clip-umwandeln.sh VIDEO NAME [START] [DAUER] [mit-ton]
#   VIDEO  Originaldatei vom Handy (mp4, mov …)
#   NAME   Kurzname ohne Leerzeichen, z. B. haende-desinfizieren
#   START  Startzeit, z. B. 00:00:03 (Standard: Anfang)
#   DAUER  Länge in Sekunden (Standard: 12)
#   mit-ton  Ton behalten (für erklärende Clips); sonst stumm (für Schleifen)
# Ergebnis: inhalte/clips/NAME.mp4, .webm und .jpg (Standbild), höchstens 720 px an der kurzen Seite.
set -euo pipefail
quelle=$1; name=$2; start=${3:-0}; dauer=${4:-12}; ton=${5:-}
ziel=inhalte/clips/$name
mkdir -p inhalte/clips
skal="scale='if(gt(iw,ih),-2,min(720,iw))':'if(gt(iw,ih),min(720,ih),-2)',fps=30"
if [ "$ton" = "mit-ton" ]; then a_mp4=(-c:a aac -b:a 96k); a_webm=(-c:a libopus -b:a 64k); else a_mp4=(-an); a_webm=(-an); fi
ffmpeg -loglevel error -y -ss "$start" -t "$dauer" -i "$quelle" -vf "$skal" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart "${a_mp4[@]}" "$ziel.mp4"
ffmpeg -loglevel error -y -i "$ziel.mp4" -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 "${a_webm[@]}" "$ziel.webm"
ffmpeg -loglevel error -y -ss 1 -i "$ziel.mp4" -frames:v 1 -q:v 4 "$ziel.jpg"
IFS=x read -r w h < <(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$ziel.mp4")
sek=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ziel.mp4" | cut -d. -f1)
hoch=false; [ "$h" -gt "$w" ] && hoch=true
du -h "$ziel".* | sed 's/^/  /'
echo "Eintrag für inhalte/clips.js:"
echo "\"$name\": { w: $w, h: $h, hoch: $hoch, webm: true, standbild: true, dauer: \"0:$(printf %02d "$sek")\" },"
