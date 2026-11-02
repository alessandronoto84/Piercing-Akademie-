"""Baut die englische und spanische Website aus den deutschen Seiten.

Aufruf im Hauptordner:  python3 werkzeuge/sprachen/bauen.py
- Quelle sind die deutschen Seiten im Hauptordner; sie werden nie von Hand übersetzt.
- Startseite und Online-Kurs-Seite: Textersetzung nach werkzeuge/sprachen/texte.py.
- Rechtstexte und Danke-Seite: der <article> kommt aus werkzeuge/sprachen/<sprache>/<seite>.html
  (erste Zeilen: <!-- title: … --> und <!-- description: … -->).
- Ergebnis: en/*.html und es/*.html. Dazu bekommen alle Seiten (auch die deutschen) hreflang-Links und die Sprachauswahl.
Der Lauf bricht ab, wenn ein deutscher Text aus texte.py nicht mehr gefunden wird, und listet am Ende Stellen auf,
die noch deutsch aussehen.
"""
import os, re, sys

HIER = os.path.dirname(os.path.abspath(__file__))
WURZEL = os.path.dirname(os.path.dirname(HIER))
sys.path.insert(0, HIER)
import texte  # noqa: E402

DOMAIN = "https://piercingakademie.de/"
SPRACHEN = {"en": ("English", "en_US"), "es": ("Español", "es_ES")}
TABELLEN = {"index.html": texte.INDEX, "online-kurs.html": texte.ONLINE_KURS}
ARTIKEL = ["agb.html", "datenschutz.html", "impressum.html", "danke.html", "widerrufen.html", "bestellen.html"]
SEITEN = list(TABELLEN) + ARTIKEL
LABEL = {"de": "Sprache", "en": "Language", "es": "Idioma"}


def lesen(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def schreiben(p, s):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(s)


def url(sprache, seite):
    pfad = "" if seite == "index.html" else seite
    return DOMAIN + ("" if sprache == "de" else sprache + "/") + pfad


def relativ(von, nach, seite):
    """Link von einer Seite in Sprache `von` zur gleichen Seite in Sprache `nach`."""
    if von == nach:
        return seite
    if von == "de":
        return nach + "/" + seite
    if nach == "de":
        return "../" + seite
    return "../" + nach + "/" + seite


# Flaggen als kleine SVGs (Englisch: US-Flagge, weil die Website amerikanisches Englisch verwendet)
FLAGGE = {
    "de": '<svg viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>',
    "en": '<svg viewBox="0 0 19 10" aria-hidden="true"><rect width="19" height="10" fill="#B22234"/>' + "".join('<rect y="%.4f" width="19" height="%.4f" fill="#fff"/>' % ((2 * i + 1) * 10 / 13, 10 / 13) for i in range(6)) + '<rect width="7.6" height="5.385" fill="#3C3B6E"/>' + "".join('<circle cx="%.2f" cy="%.2f" r=".38" fill="#fff"/>' % (0.95 + 1.27 * x + (0.63 if y % 2 else 0), 0.6 + 0.6 * y * 1.13) for y in range(7) for x in range(6 if y % 2 == 0 else 5)) + '</svg>',
    "es": '<svg viewBox="0 0 4 3" aria-hidden="true"><rect width="4" height="3" fill="#AA151B"/><rect y=".75" width="4" height="1.5" fill="#F1BF00"/></svg>',
}
NAME = {"de": "Deutsch", "en": "English", "es": "Español"}


def sprachwahl(sprache, seite):
    teile = []
    for code in ["de", "en", "es"]:
        aktuell = ' aria-current="true"' if code == sprache else ""
        teile.append('<a href="%s" hreflang="%s" lang="%s" title="%s" aria-label="%s"%s>%s</a>' % (relativ(sprache, code, seite), code, code, NAME[code], NAME[code], aktuell, FLAGGE[code]))
    return '<span class="sprachwahl" role="group" aria-label="%s">%s</span>' % (LABEL[sprache], "".join(teile))


def hreflang(seite):
    z = ['<link rel="alternate" hreflang="%s" href="%s">' % (c, url(c, seite)) for c in ["de", "en", "es"]]
    z.append('<link rel="alternate" hreflang="x-default" href="%s">' % url("de", seite))
    return "\n".join(z)


def mehrsprachig(s, sprache, seite):
    """Sprachauswahl (Flaggen) in die Kopfzeile und hreflang in den Kopf (ersetzt vorhandene)."""
    s = re.sub(r'<span class="sprachwahl"[^>]*>.*?</span>\n[ \t]*', "", s, flags=re.S)
    s = re.sub(r'<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n', "", s)
    # Flaggen stehen außerhalb des Menüs direkt in der Kopfzeile (auch auf dem Handy immer sichtbar)
    s = re.sub(r'\n    <nav aria-label="', lambda m: '\n    ' + sprachwahl(sprache, seite) + m.group(0), s, count=1)
    assert 'class="sprachwahl"' in s, (sprache, seite, "Kopfzeile ohne Navigation")
    s = re.sub(r'(<link rel="canonical" href="[^"]+">)', lambda m: m.group(1) + "\n" + hreflang(seite), s, count=1)
    return s


def ersetzen(s, tabelle, spalte, seite):
    for de, *uebers in sorted(tabelle, key=lambda t: -len(t[0])):
        if de not in s:
            # Gemeinsame Einträge müssen nicht auf jeder Seite vorkommen
            if (de, *uebers) in texte.GEMEINSAM:
                continue
            raise SystemExit("Nicht gefunden in %s: %s" % (seite, de[:90]))
        s = s.replace(de, uebers[spalte])
    return s


def artikel(s, sprache, seite):
    frag = lesen(os.path.join(HIER, sprache, seite))
    titel = re.search(r"<!-- title: (.*?) -->", frag).group(1)
    beschr = re.search(r"<!-- description: (.*?) -->", frag).group(1)
    neu = re.search(r"<article.*</article>", frag, re.S).group(0)
    s = re.sub(r"<article.*</article>", lambda m: neu, s, count=1, flags=re.S)
    s = re.sub(r"<title>.*?</title>", lambda m: "<title>%s</title>" % titel, s, count=1)
    s = re.sub(r'<meta name="description" content="[^"]*">', lambda m: '<meta name="description" content="%s">' % beschr, s, count=1)
    return s


VERDAECHTIG = re.compile(r"[äöüÄÖÜß]|\b(und|der|die|das|mit|für|nicht|ist|Kurs|Seite|Bitte|oder)\b")
ERLAUBT = ["Burgstraße", "Antigüedad", "Die Piercing Akademie – Dein Weg zum Bodypiercer", "Landesbeauftragte für den Datenschutz Niedersachsen", "Prinzenstraße"]


def pruefen(s, sprache, seite):
    text = re.sub(r"<script.*?</script>|<style.*?</style>", " ", s, flags=re.S)
    text = re.sub(r'<link[^>]*>|<meta (?!name="description")[^>]*>', " ", text)
    text = re.sub(r"<[^>]+>", "\n", text)
    for e in ERLAUBT:
        text = text.replace(e, "")
    funde = [z.strip() for z in text.split("\n") if z.strip() and VERDAECHTIG.search(z)]
    return ["%s/%s: %s" % (sprache, seite, f[:110]) for f in funde]


def main():
    hinweise = []
    for seite in SEITEN:
        de_pfad = os.path.join(WURZEL, seite)
        de = mehrsprachig(lesen(de_pfad), "de", seite)
        schreiben(de_pfad, de)
        for spalte, sprache in enumerate(["en", "es"]):
            s = de
            if seite in TABELLEN:
                s = ersetzen(s, texte.GEMEINSAM + TABELLEN[seite], spalte, seite)
            else:
                s = artikel(s, sprache, seite)
                s = ersetzen(s, texte.GEMEINSAM, spalte, seite)
            s = s.replace('<html lang="de">', '<html lang="%s">' % sprache, 1)
            s = re.sub(r'(href|src|poster)="(assets/|kurs-prototyp/)', r'\1="../\2', s)
            s = s.replace('<link rel="canonical" href="%s">' % url("de", seite), '<link rel="canonical" href="%s">' % url(sprache, seite))
            s = s.replace('<meta property="og:url" content="%s">' % url("de", seite), '<meta property="og:url" content="%s">' % url(sprache, seite))
            s = s.replace('content="de_DE"', 'content="%s"' % SPRACHEN[sprache][1])
            s = re.sub(r'\s*<p class="pruefen">.*?</p>', "", s, flags=re.S)  # interne Prüfhinweise nur im deutschen Original
            s = mehrsprachig(s, sprache, seite)
            hinweise += pruefen(s, sprache, seite)
            schreiben(os.path.join(WURZEL, sprache, seite), s)
    print("Gebaut: %d Seiten je Sprache (en, es)." % len(SEITEN))
    if hinweise:
        print("Bitte prüfen, ob noch deutsch:")
        for h in hinweise:
            print("  " + h)


if __name__ == "__main__":
    main()
