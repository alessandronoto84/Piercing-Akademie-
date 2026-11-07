# Wissensbasis für den Chat-Assistenten (assets/chatbot.js) aus den Seiteninhalten erzeugen.
# Aufruf im Repo-Ordner:  python3 werkzeuge/chatbot-wissen.py
# Liest index.html und online-kurs.html und schreibt assets/chatbot-wissen.js (setzt window.ChatbotWissen).
# Nur Inhalte der Webseite übernehmen. Keine medizinischen oder rechtlichen Ratschläge:
# Gesundheitsfragen beantwortet der Assistent nicht, sondern verweist an Fachpersonal.
# Nach Änderungen an Paketen, Preisen, Modulen oder FAQ erneut ausführen.
import html, json, os, re

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def lies(name):
    s = open(os.path.join(WURZEL, name), encoding='utf-8').read()
    return re.sub(r'data:[^"]{50,}"', '"', s)


def txt(s):
    s = re.sub(r'<[^>]+>', ' ', s or '')
    return html.unescape(re.sub(r'\s+', ' ', s)).strip()


def eins(muster, s):
    m = re.search(muster, s, re.S)
    return txt(m.group(1)) if m else ''


def abschnitt(s, ident):
    m = re.search(r'<section id="' + ident + r'"[^>]*>(.*?)</section>', s, re.S)
    return m.group(1) if m else ''


idx = lies('index.html')
kurs = lies('online-kurs.html')

# ---------- Pakete und Einzelprodukte ----------
pakete = []
for art in re.findall(r'<article class="card[^"]*"[^>]*>(.*?)</article>', abschnitt(idx, 'pakete'), re.S):
    pakete.append({
        'art': eins(r'<p class="label">(.*?)</p>', art),
        'name': eins(r'<h3[^>]*>(.*?)</h3>', art),
        'preis': eins(r'<p class="price">(.*?)<small>', art),
        'mwst': eins(r'<small>(.*?)</small>', art),
        'fuer': eins(r'<p class="for">(.*?)</p>', art),
        'punkte': [txt(x) for x in re.findall(r'<li>(.*?)</li>', art, re.S)],
        'empfehlung': 'Unsere Empfehlung' in art,
        'amazon': (re.search(r'href="(https://www\.amazon\.[^"]+)"', art) or [None, None])[1] if re.search(r'href="(https://www\.amazon\.[^"]+)"', art) else None,
    })
kurspakete = [p for p in pakete if p['name'] in ('Basis', 'Praxis', 'Komplett')]
produkte = [p for p in pakete if p not in kurspakete]
preis_hinweis = eins(r'<p class="fine pk-note">(.*?)</p>', abschnitt(idx, 'pakete'))
preis_kurz = preis_hinweis.split(' Der Online-Kurs')[0]

# ---------- Praxistag ----------
pt = abschnitt(idx, 'praxistag')
pt_text = eins(r'<p class="day-text">(.*?)</p>', pt)
pt_termin = eins(r'<p class="termin">(.*?)</p>', pt).lstrip('● ').strip()
pt_notes = [txt(n) for n in re.findall(r'<div class="note">(.*?)</div>', pt, re.S)]
pt_schritte = [f'{txt(a)}: {txt(b)}' for a, b in re.findall(r'<li><b>\d+</b><span><strong>(.*?)</strong>(.*?)</span></li>', pt, re.S)]

# ---------- Ausbilder, Zielgruppe, Zertifikat ----------
ueber = abschnitt(idx, 'ueber')
ausbilder = eins(r'<p class="intro">(.*?)</p>', ueber)
fakten = [f'{txt(dt)}: {txt(dd)}' for dt, dd in re.findall(r'<dt>(.*?)</dt><dd[^>]*>(.*?)</dd>', ueber, re.S)]
wer = [f'{txt(h)}: {txt(p)}' for h, p in re.findall(r'<h3>(.*?)</h3>\s*<p>(.*?)</p>', abschnitt(idx, 'zielgruppe'), re.S)]
wer_tipp = eins(r'<span class="tipp">(.*?)</span>', abschnitt(idx, 'zielgruppe'))
zert = re.search(r'<h3 class="sec-title">Zertifikat und Kursbuch</h3>(.*?)</div>', idx, re.S)
zert_p = [txt(p) for p in re.findall(r'<p>(.*?)</p>', zert.group(1), re.S)] if zert else []
klartext = [txt(x) for x in re.findall(r'<li>(.*?)</li>', abschnitt(idx, 'klartext'), re.S)]

# ---------- Häufige Fragen ----------
faq_seite = [(txt(q), txt(a)) for q, a in re.findall(r'<summary><span>(.*?)</span>.*?</summary>\s*<div class="body">(.*?)</div>', abschnitt(idx, 'faq'), re.S)]

# ---------- Kontakt ----------
kt = abschnitt(idx, 'kontakt')
tel = re.search(r'href="tel:([^"]+)"><b>Telefon</b>(.*?)</a>', kt, re.S)
mail = re.search(r'href="mailto:([^"]+)"><b>E-Mail</b>', kt)
insta = re.search(r'href="(https://www\.instagram\.com/[^"]+)"[^>]*><b>Instagram</b>(.*?)</a>', kt, re.S)
adresse = eins(r'<address>(.*?)</address>', kt)
anmeldung = eins(r'<h2[^>]*id="kontakt-titel"[^>]*>.*?</h2>\s*<p>(.*?)</p>', kt)
tel_h, tel_t = (tel.group(1), txt(tel.group(2))) if tel else ('', '')
mail_t = mail.group(1) if mail else ''

# ---------- Online-Kurs ----------
kurs_fakten = [f'{txt(dt)}: {txt(dd)}' for dt, dd in re.findall(r'<dt>(.*?)</dt>\s*<dd[^>]*>(.*?)</dd>', kurs, re.S)]
module = []
for n, titel, body in re.findall(r'<summary><span class="n">(\d+)</span><span>(.*?)</span>.*?</summary>\s*<div class="body">(.*?)</div>\s*</details>', abschnitt(kurs, 'module'), re.S):
    module.append({
        'n': n, 't': re.sub(r'\s+neu$', '', txt(titel)), 'neu': txt(titel).endswith(' neu'),
        'ziel': eins(r'<p>(.*?)</p>', body),
        'lektionen': [txt(x) for x in re.findall(r'<li>(.*?)</li>', body, re.S)],
        'umfang': eins(r'<p class="fine">(.*?)</p>', body),
    })
ablauf_kurs = [f'{txt(a)}: {txt(b)}' for a, b in re.findall(r'<li><b>[^<]*</b><span><strong>(.*?)</strong>(.*?)</span></li>', abschnitt(kurs, 'lernprinzip'), re.S)]
ablauf_wo = [f'{txt(a)}: {txt(b)}' for a, b in re.findall(r'<h3>(.*?)</h3>\s*<p>(.*?)</p>', abschnitt(kurs, 'ablauf'), re.S)]
ersetzt = 'Der Online-Kurs ersetzt keine praktische Anleitung. Er vermittelt das Wissen. Gestochen wird erst am Praxistag, unter Aufsicht. Steche nach dem Online-Kurs niemanden allein.'
assert ersetzt in txt(kurs), 'Hinweistext auf online-kurs.html geändert: Skript anpassen'

kontakt_links = [{'t': 'Anfrage senden', 'h': 'index.html#kontakt'}]
if mail_t:
    kontakt_links.append({'t': 'E-Mail schreiben', 'h': f'mailto:{mail_t}'})
if tel_h:
    kontakt_links.append({'t': 'Anrufen', 'h': f'tel:{tel_h}'})

faq = []


def F(id, q, a, k, links=None, nxt=None, prio=False):
    e = {'id': id, 'q': q, 'a': a, 'k': k}
    if links: e['links'] = links
    if nxt: e['next'] = nxt
    if prio: e['prio'] = True
    faq.append(e)


def liste(z):
    return '\n'.join(f'- {x}' for x in z)


# Gesundheit: immer zuerst, keine Auskunft, Verweis an Fachpersonal
F('gesundheit', 'Gesundheitsfragen',
  'Zu gesundheitlichen Fragen, etwa zu einem eigenen Piercing, zu Beschwerden, Entzündungen, Allergien oder zur Heilung, gebe ich keine Auskunft. Bitte wende dich an eine Ärztin oder einen Arzt oder an ein professionelles Piercingstudio. Bei akuten Beschwerden such bitte ärztliche Hilfe.\nWas der Kurs zu Pflege und Wundheilung behandelt, siehst du im Kursinhalt (Module 03 und 10).',
  ['entzündung', 'entzündet', 'eitert', 'eiter', 'geschwollen', 'schwellung', 'rötung', 'gerötet', 'schmerzt', 'schmerzen', 'tut weh', 'blutet', 'blutung', 'allergie', 'allergisch', 'nickelallergie', 'infektion', 'infiziert', 'krank', 'krankheit', 'arzt', 'ärztin', 'medizinisch', 'medikament', 'antibiotikum', 'salbe', 'schwanger', 'schwangerschaft', 'stillen', 'diabetes', 'blutverdünner', 'wildes fleisch', 'keloid', 'narbe', 'verheilt', 'heilt', 'abheilen', 'mein piercing', 'meinem piercing', 'notfall', 'fieber'],
  [{'t': 'Kursinhalt', 'h': 'online-kurs.html#module'}], ['Welche Pakete gibt es?', 'Kontakt'], prio=True)

F('pakete', 'Welche Pakete gibt es?',
  'Es gibt drei Pakete:\n' + liste(f'{p["name"]} ({p["art"]}): {p["preis"]} {p["mwst"].rstrip(".")}. {p["fuer"]}' + (' Unsere Empfehlung.' if p['empfehlung'] else '') for p in kurspakete) + '\n' + preis_kurz,
  ['paket', 'pakete', 'preis', 'preise', 'kosten', 'kostet', 'euro', 'angebot', 'angebote', 'tarif', 'buchen', 'teuer', 'günstig', 'unterschied'],
  [{'t': 'Pakete ansehen', 'h': 'index.html#pakete'}], [p['name'] for p in kurspakete] + ['Kursbuch'])
for p in kurspakete:
    F('p-' + p['name'].lower(), f'Paket {p["name"]}',
      f'Paket {p["name"]} ({p["art"]}): {p["preis"]} {p["mwst"]}\n{p["fuer"]}\n' + liste(p['punkte']),
      [p['name'], 'paket ' + p['name'], 'kostet', 'kosten', 'preis'] + (['nur online', 'nur theorie', 'einsteiger'] if p['name'] == 'Basis' else ['coaching', '1 1 coaching', 'support', 'übungsmaterial'] if p['name'] == 'Komplett' else ['empfehlung']),
      [{'t': f'{p["name"]} anfragen', 'h': f'index.html?paket={p["name"].lower()}#kontakt'}, {'t': 'Alle Pakete', 'h': 'index.html#pakete'}],
      ['Welche Pakete gibt es?', 'Was ist der Praxistag?', 'Wie melde ich mich an?'])
if produkte:
    F('kursbuch', 'Kursbuch',
      'Das Kursbuch gibt es auch einzeln:\n' + liste(f'{p["name"]}: {p["preis"]} {p["mwst"].rstrip(".")}. {p["fuer"]} ' + ', '.join(p['punkte']) + '.' for p in produkte) + ('\n' + zert_p[1] if len(zert_p) > 1 else ''),
      ['kursbuch', 'buch', 'bücher', 'fachbuch', 'softcover', 'taschenbuch', 'digital', 'ebook', 'e book', 'amazon', 'isbn', 'lesen', 'bodypiercer', 'dein weg zum bodypiercer'],
      [{'t': 'Kursbuch digital anfragen', 'h': 'index.html?paket=buch#kontakt'}] + ([{'t': 'Softcover bei Amazon', 'h': produkte[-1]['amazon']}] if produkte[-1].get('amazon') else []),
      ['Welche Pakete gibt es?', 'Kontakt'])
F('praxistag', 'Was ist der Praxistag?',
  f'Der Praxistag ist ein Tag im Studio in Lingen (Ems). {pt_text}\nTermine: {pt_termin}.\n' + '\n'.join(pt_notes) + '\nAblauf:\n' + liste(pt_schritte) + '\nPraxistage gibt es in den Paketen Praxis (1 Praxistag) und Komplett (2 Praxistage).',
  ['praxistag', 'praxistage', 'praxis tag', 'praxis', 'studio', 'lingen', 'vor ort', 'präsenz', 'live', 'echte modelle', 'modell', 'modelle', 'stechen', 'üben', 'termin', 'termine', 'wann', 'datum', 'ort', 'wo', 'allein', 'alleine', 'aufsicht', 'anleitung'],
  [{'t': 'Zum Praxistag', 'h': 'index.html#praxistag'}, {'t': 'Termin anfragen', 'h': 'index.html#kontakt'}],
  ['Kann ich ein eigenes Modell mitbringen?', 'Welche Pakete gibt es?', 'Kontakt'])
F('onlinekurs', 'Wie funktioniert der Online-Kurs?',
  'Der Online-Kurs: ' + ', '.join(kurs_fakten) + '.\nSo lernst du:\n' + liste(ablauf_kurs) + '\n' + liste(ablauf_wo) + '\n' + ersetzt,
  ['online kurs', 'onlinekurs', 'online', 'kurs', 'lernen', 'lektionen', 'fragen', 'prüfung', 'prüfungen', 'modulprüfung', 'abschlusstest', 'test', 'zugang', 'handy', 'tablet', 'computer', 'eigenes tempo', 'fahrschule', 'wie lange', 'dauer'],
  [{'t': 'Zum Online-Kurs', 'h': 'online-kurs.html'}],
  ['Welche Module gibt es?', 'Welche Pakete gibt es?'])
F('module', 'Welche Module gibt es?',
  f'Der Kurs hat {len(module)} Module:\n' + liste(f'{m["n"]} {m["t"]}' for m in module) + '\nNenn mir ein Thema oder eine Modulnummer, dann sage ich dir mehr.',
  ['module', 'modul', 'kursinhalt', 'inhalt', 'inhalte', 'themen', 'thema', 'lehrplan'],
  [{'t': 'Alle Module', 'h': 'online-kurs.html#module'}], ['Hygiene', 'Piercing-Arten', 'Studio starten'])
for m in module:
    F('m-' + m['n'], f'Modul {m["n"]}: {m["t"]}',
      f'Modul {m["n"]}: {m["t"]}' + (' (neu, geht über das Kursbuch hinaus)' if m['neu'] else '') + f'\n{m["ziel"]}\nLektionen:\n' + liste(m['lektionen']) + f'\n{m["umfang"]}',
      ['modul ' + m['n'], 'modul ' + str(int(m['n'])), m['t']] + re.split(r',\s*|\s+und\s+', m['t']),
      [{'t': 'Kursinhalt', 'h': 'online-kurs.html#module'}], ['Welche Module gibt es?', 'Welche Pakete gibt es?'])
F('zertifikat', 'Bekomme ich ein Zertifikat?',
  '\n'.join(zert_p[:1]) + '\nNach dem Abschlusstest des Online-Kurses bekommst du eine Teilnahmebescheinigung der Akademie.',
  ['zertifikat', 'bescheinigung', 'teilnahmebescheinigung', 'abschluss', 'nachweis', 'urkunde', 'anerkannt', 'staatlich', 'ausbildung', 'qualifikation', 'zeugnis'],
  None, ['Welche Pakete gibt es?', 'Darf ich nach dem Kurs ein Studio eröffnen?'])
F('zielgruppe', 'Für wen ist der Kurs?',
  'Für alle, die professionell piercen wollen:\n' + liste(wer) + (f'\nFür ein eigenes Studio passt am besten: {wer_tipp.split(":")[-1].strip()}.' if wer_tipp else ''),
  ['für wen', 'zielgruppe', 'kosmetikstudio', 'kosmetik', 'tattoostudio', 'tattoo', 'tätowierer', 'quereinsteiger', 'anfänger', 'geeignet', 'passt'],
  None, ['Brauche ich Vorkenntnisse?', 'Welche Pakete gibt es?'])
F('ausbilder', 'Wer ist der Ausbilder?',
  f'Dein Ausbilder ist Alessandro Noto. „{ausbilder}“\n' + ', '.join(fakten) + '.',
  ['ausbilder', 'trainer', 'lehrer', 'dozent', 'wer', 'alessandro', 'noto', '740 piercing', 'erfahrung', 'über euch', 'über dich'],
  [{'t': 'Instagram @740_piercing', 'h': 'https://www.instagram.com/740_piercing/'}], ['Kontakt'])
F('leistung', 'Was bekomme ich?', 'Das bekommst du:\n' + liste(klartext),
  ['bekomme', 'bekommt', 'enthalten', 'inklusive', 'leistung', 'leistungen', 'mehrwert', 'lohnt'],
  None, ['Welche Pakete gibt es?'])
for i, (q, a) in enumerate(faq_seite):
    kw = {
        0: ['vorkenntnisse', 'vorwissen', 'ohne erfahrung', 'anfänger', 'neuling'],
        1: ['zugang', 'zugangsdaten', 'login', 'einloggen', 'freischaltung'],
        2: ['eigenes modell', 'modell mitbringen', 'mitbringen', 'freundin', 'freund', 'modelle'],
        3: ['wann', 'termine', 'praxistage stattfinden', 'datum', 'zeitraum'],
        4: ['studio eröffnen', 'eröffnen', 'gewerbe', 'gesundheitsamt', 'gewerbeamt', 'selbstständig', 'erlaubnis', 'genehmigung'],
        5: ['unterschied', 'praxis oder komplett', 'praxis komplett', 'vergleich'],
    }.get(i, [])
    F(f'faq-{i}', q, a, kw, [{'t': 'Häufige Fragen', 'h': 'index.html#faq'}], ['Welche Pakete gibt es?', 'Kontakt'])
F('alter', 'Ab welchem Alter?', 'Die Teilnahme ist ab 18 Jahren möglich. Auch jedes Modell am Praxistag ist volljährig und unterschreibt vorab.',
  ['alter', 'alt', 'jahre', 'minderjährig', 'volljährig', '16', '17', '18', 'jugendlich'], None, ['Welche Pakete gibt es?'])
F('anmeldung', 'Wie melde ich mich an?',
  f'{anmeldung}\nÜber das Formular unter „Anmeldung“ wählst du dein Paket und schickst uns deine Anfrage. Du erreichst uns auch per Telefon ({tel_t}) oder E-Mail ({mail_t}).\n{preis_kurz}',
  ['anmelden', 'anmeldung', 'melde', 'melden', 'einschreiben', 'buchen', 'buchung', 'bestellen', 'bestellung', 'platz', 'platz sichern', 'anfrage', 'registrieren', 'mitmachen', 'teilnehmen', 'bezahlen', 'zahlung', 'zahlen'],
  kontakt_links, ['Welche Pakete gibt es?', 'Kontakt'])
F('widerruf', 'Widerruf und AGB',
  'Die Regeln zu Vertrag und Widerruf stehen in den AGB mit Widerrufsbelehrung. Auf der Seite heißt es dazu: „' + re.sub(r'\s*\(\s*AGB und Widerruf\s*\)', '', preis_hinweis.split('Teilnahme ab 18 Jahren. ')[-1]) + '“\nEine rechtliche Beratung kann ich nicht geben. Bei Fragen wende dich bitte direkt an uns.',
  ['widerruf', 'widerrufen', 'widerrufsrecht', 'stornieren', 'storno', 'kündigen', 'kündigung', 'rücktritt', 'geld zurück', 'erstattung', 'agb', 'vertrag'],
  [{'t': 'AGB und Widerruf', 'h': 'agb.html#widerruf'}, {'t': 'Vertrag widerrufen', 'h': 'widerrufen.html'}], ['Kontakt'])
F('kontakt', 'Kontakt',
  f'Die Piercing Akademie\n{adresse}\nTelefon: {tel_t}\nE-Mail: {mail_t}' + (f'\nInstagram: {txt(insta.group(2))}' if insta else ''),
  ['kontakt', 'kontaktieren', 'erreichen', 'telefon', 'telefonnummer', 'anrufen', 'nummer', 'email', 'e mail', 'mail', 'adresse', 'anschrift', 'instagram', 'nachricht', 'schreiben', 'whatsapp', 'standort'],
  kontakt_links + ([{'t': 'Instagram', 'h': insta.group(1)}] if insta else []), ['Wie melde ich mich an?', 'Welche Pakete gibt es?'])
F('recht', 'Impressum und Datenschutz', 'Alle Pflichtangaben stehen im Impressum, alles zum Umgang mit deinen Daten in der Datenschutzerklärung.',
  ['impressum', 'datenschutz', 'datenschutzerklärung', 'dsgvo', 'inhaber', 'betreiber', 'rechtliches'],
  [{'t': 'Impressum', 'h': 'impressum.html'}, {'t': 'Datenschutz', 'h': 'datenschutz.html'}, {'t': 'AGB', 'h': 'agb.html'}], ['Kontakt'])
F('bot', 'Wer bist du?',
  'Ich bin ein automatischer Assistent. Ich laufe nur in deinem Browser, nutze keine Cookies und speichere oder versende deine Eingaben nicht. Ich antworte ausschließlich mit Informationen von dieser Webseite und bin keine Beratung, auch keine medizinische oder rechtliche.',
  ['wer bist du', 'bot', 'chatbot', 'assistent', 'ki', 'künstliche intelligenz', 'mensch', 'speichern', 'gespeichert', 'cookies'], None, ['Welche Pakete gibt es?', 'Kontakt'])
F('danke', 'Danke', 'Gern! Wenn du noch etwas wissen möchtest, frag einfach.',
  ['danke', 'dankeschön', 'super', 'perfekt', 'tschüss', 'ciao', 'bye'])

kb = {
    'titel': 'Piercing Akademie · Assistent',
    'begruessung': 'Hallo! Ich bin der automatische Assistent der Piercing Akademie. Frag mich zu Paketen und Preisen, zum Online-Kurs, zu den Praxistagen in Lingen oder wie du uns erreichst.',
    'vorschlaege': ['Welche Pakete gibt es?', 'Was ist der Praxistag?', 'Wie melde ich mich an?', 'Kontakt'],
    'fallback': {
        'a': f'Dazu habe ich auf dieser Webseite leider nichts gefunden. Schreib uns gern direkt: {mail_t}' + (f' oder ruf an: {tel_t}' if tel_t else '') + '.',
        'links': kontakt_links,
        'next': ['Welche Pakete gibt es?', 'Welche Module gibt es?', 'Kontakt'],
    },
    'faq': faq,
}
ziel = os.path.join(WURZEL, 'assets', 'chatbot-wissen.js')
with open(ziel, 'w', encoding='utf-8') as fh:
    fh.write('/* Automatisch erzeugt von werkzeuge/chatbot-wissen.py aus index.html und online-kurs.html. Nicht von Hand ändern. */\n')
    fh.write('window.ChatbotWissen=' + json.dumps(kb, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('chatbot-wissen.js:', len(kurspakete), 'Pakete,', len(produkte), 'Produkte,', len(module), 'Module,', len(faq_seite), 'FAQ der Seite,', len(faq), 'Einträge,', os.path.getsize(ziel), 'Bytes')
