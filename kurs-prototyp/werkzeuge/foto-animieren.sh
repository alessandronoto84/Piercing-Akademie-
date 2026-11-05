#!/usr/bin/env bash
# Macht aus einem echten Foto einen kurzen, ruhigen Clip: langsame Kamerafahrt (Zoom und leichter Schwenk)
# hin und zurück, dazu ein weicher Lichtschimmer, der einmal über das Bild zieht. Das Foto selbst wird nicht
# verändert (anders als bei KI-Animation), Schmuck und Instrumente bleiben also echt.
#
# Aufruf im Ordner kurs-prototyp:
#   werkzeuge/foto-animieren.sh FOTO NAME [BREITE] [HOEHE] [SEKUNDEN]
#   z. B. werkzeuge/foto-animieren.sh ~/schmuck.jpg schmuck-titan 832 480 8
# Danach wandelt werkzeuge/clip-umwandeln.sh den Clip in MP4, WebM und Standbild um (inhalte/clips/NAME.*)
# und gibt den Eintrag für inhalte/clips.js aus.
set -euo pipefail
foto=$1; name=$2; w=${3:-832}; h=${4:-480}; sek=${5:-8}
hier=$(cd "$(dirname "$0")" && pwd)
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT
fps=30; n=$((sek * fps)); halb=$((n / 2))
# Großes Arbeitsbild (Zoom braucht Reserven), auf das Zielformat zugeschnitten
ffmpeg -loglevel error -y -i "$foto" -vf "scale=$((w*3)):$((h*3)):force_original_aspect_ratio=increase,crop=$((w*3)):$((h*3))" "$tmp/gross.png"
# Kamerafahrt: Zoom 1,00 → 1,08 und zurück (Kosinus, ohne Ruck am Schleifenende), Schwenk leicht nach rechts oben
zoom="1+0.04*(1-cos(2*PI*on/$n))"
x="(iw-iw/zoom)/2+(iw-iw/zoom)*0.25*(1-cos(2*PI*on/$n))/2"
y="(ih-ih/zoom)/2-(ih-ih/zoom)*0.15*(1-cos(2*PI*on/$n))/2"
# Lichtschimmer: schmaler, weicher Streifen, der in der ersten Hälfte schräg über das Bild zieht
schimmer="geq=lum='p(X,Y)':a='if(lt(N,$halb), 38*exp(-pow(((X+Y*0.6)-(N/$halb)*(W+H*0.6)*1.3+W*0.15)/(W*0.07),2)), 0)':cb=128:cr=128"
ffmpeg -loglevel error -y -loop 1 -i "$tmp/gross.png" -filter_complex "
  [0:v]zoompan=z='$zoom':x='$x':y='$y':d=$n:s=${w}x${h}:fps=$fps,format=yuv420p,split[a][b];
  [b]format=yuva420p,lutyuv=y=255,$schimmer[s];
  [a][s]overlay=format=auto,format=yuv420p" -frames:v $n -c:v libx264 -crf 18 -pix_fmt yuv420p "$tmp/clip.mp4"
cd "$hier/.."
bash werkzeuge/clip-umwandeln.sh "$tmp/clip.mp4" "$name" 0 "$sek"
