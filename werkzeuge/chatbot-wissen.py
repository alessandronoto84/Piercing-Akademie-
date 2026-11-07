# Wissensbasis für den Chat-Assistenten (assets/chatbot.js) erzeugen: Deutsch, Englisch, Spanisch.
# Aufruf im Repo-Ordner:  python3 werkzeuge/chatbot-wissen.py
# Liest index.html und online-kurs.html (sowie en/ und es/) und schreibt assets/chatbot-wissen.js.
#
# Quellen:
#  1) Alles, was auf der jeweiligen Seite steht (Pakete, Preise, Praxistag, Module, FAQ, Kontakt).
#  2) Ergänzend allgemeines Wissen aus seriösen Quellen (beim Bau recherchiert, 07.11.2026), als feste
#     Antworten in ALLG unten, jeweils mit Quelle im Kommentar. Keine Preise, Termine oder Garantien,
#     die nicht auf der Seite stehen. Bei akuten Beschwerden gibt der Assistent die Information und
#     hängt an, dass man es im Zweifel ärztlich abklären lassen soll.
# Nach Änderungen an Paketen, Preisen, Modulen oder FAQ erneut ausführen.
import html, json, os, re

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def lies(name):
    s = open(os.path.join(WURZEL, name), encoding='utf-8').read()
    return re.sub(r'data:[^"]{50,}"', '"', s)


def txt(s):
    s = re.sub(r'<[^>]+>', ' ', s or '')
    s = html.unescape(re.sub(r'\s+', ' ', s)).strip()
    return re.sub(r'\s+([.,:;!?)])', r'\1', s).replace('( ', '(')


def eins(muster, s):
    m = re.search(muster, s, re.S)
    return txt(m.group(1)) if m else ''


def abschnitt(s, ident):
    m = re.search(r'<section id="' + ident + r'"[^>]*>(.*?)</section>', s, re.S)
    return m.group(1) if m else ''


def liste(z):
    return '\n'.join(f'- {x}' for x in z if x)


def saetze(s):
    return [x.strip() for x in re.split(r'(?<=[.!?])\s+', s) if x.strip()]


# ---------- Feste Texte je Sprache (eigene Formulierungen) ----------
TX = {
    'de': dict(
        titel='Piercing Akademie · Assistent',
        gruss='Hallo! Ich bin der automatische Assistent der Piercing Akademie. Frag mich zu Paketen und Preisen, zum Online-Kurs, zu den Praxistagen in Lingen, zu Pflege und Heilung oder wie du uns erreichst.',
        q_pakete='Welche Pakete gibt es?', q_praxistag='Was ist der Praxistag?', q_anmelden='Wie melde ich mich an?', q_kontakt='Kontakt',
        q_module='Welche Module gibt es?', q_kurs='Wie funktioniert der Online-Kurs?', q_pflege='Wie pflege ich ein frisches Piercing?', q_heil='Wie lange heilt ein Piercing?',
        q_zert='Bekomme ich ein Zertifikat?', q_wer='Für wen ist der Kurs?', q_ausb='Wer ist der Ausbilder?', q_bekomme='Was bekomme ich?', q_alter='Ab welchem Alter?',
        q_buch='Kursbuch', q_widerruf='Widerruf und AGB', q_recht='Impressum und Datenschutz', q_bot='Wer bist du?', q_danke='Danke',
        q_entz='Ist mein Piercing entzündet?', q_schmerz='Tut Piercen weh?', q_material='Welcher Schmuck, welches Material?',
        paket='Paket', drei='Es gibt drei Pakete:', einzeln='Das Kursbuch gibt es auch einzeln:', empf='Unsere Empfehlung.',
        anfragen='anfragen', alle_pakete='Alle Pakete', pakete_ansehen='Pakete ansehen', anfrage_senden='Anfrage senden', mail='E-Mail schreiben', anrufen='Anrufen',
        pt_intro='Der Praxistag ist ein Tag im Studio in Lingen (Ems).', termine='Termine', ablauf='Ablauf', pt_pakete='Praxistage gibt es in den Paketen Praxis (1 Praxistag) und Komplett (2 Praxistage).',
        zum_pt='Zum Praxistag', termin_anfragen='Termin anfragen', kurs='Der Online-Kurs', so_lernst='So lernst du:', zum_kurs='Zum Online-Kurs',
        modul='Modul', module_n='Der Kurs hat {n} Module:', module_tipp='Nenn mir ein Thema oder eine Modulnummer, dann sage ich dir mehr.', neu=' (neu, geht über das Kursbuch hinaus)', lektionen='Lektionen', kursinhalt='Kursinhalt', alle_module='Alle Module',
        zert_extra='Nach dem Abschlusstest des Online-Kurses bekommst du eine Teilnahmebescheinigung der Akademie.',
        wer_intro='Für alle, die professionell piercen wollen:', wer_tipp='Für ein eigenes Studio passt am besten:', ausb='Dein Ausbilder ist Alessandro Noto.', bekomme='Das bekommst du:',
        alter='Die Teilnahme ist ab 18 Jahren möglich. Auch jedes Modell am Praxistag ist volljährig und unterschreibt vorab.',
        anm_form='Über das Formular unter „Anmeldung“ wählst du dein Paket und schickst uns deine Anfrage. Du erreichst uns auch per Telefon ({tel}) oder E-Mail ({mail}).',
        widerruf='Die Regeln zu Vertrag und Widerruf stehen in den AGB mit Widerrufsbelehrung. Auf der Seite heißt es dazu: „{zitat}“\nEine rechtliche Beratung kann ich nicht geben. Bei Fragen wende dich bitte direkt an uns.',
        agb='AGB und Widerruf', widerrufen='Vertrag widerrufen', recht='Alle Pflichtangaben stehen im Impressum, alles zum Umgang mit deinen Daten in der Datenschutzerklärung.', impressum='Impressum', datenschutz='Datenschutz',
        kontakt_name='Die Piercing Akademie', tel='Telefon', faq='Häufige Fragen', softcover='Softcover bei Amazon', buch_anfragen='Kursbuch digital anfragen',
        bot='Ich bin ein automatischer Assistent. Ich laufe nur in deinem Browser, nutze keine Cookies und speichere oder versende deine Eingaben nicht. Ich antworte mit den Informationen dieser Webseite und allgemeinem Wissen, ersetze aber keine persönliche oder ärztliche Beratung und keine Rechtsberatung.',
        danke='Gern! Wenn du noch etwas wissen möchtest, frag einfach.',
        fallback='Dazu habe ich leider keine Antwort. Schreib uns gern direkt: {mail} oder ruf an: {tel}.',
        zweifel='Im Zweifel bitte ärztlich abklären lassen.',
        # Allgemeinwissen (Quellen siehe ALLG-Kommentare)
        pflege='Allgemeine Pflegeempfehlungen für ein frisches Piercing:\n- vor dem Anfassen die Hände waschen, sonst das Piercing möglichst in Ruhe lassen\n- bei Bedarf mit steriler Kochsalzlösung (Wundspüllösung aus der Apotheke) spülen und mit Einmal-Papier trocken tupfen\n- keinen Alkohol, kein Wasserstoffperoxid, keine antibakterielle Seife, kein Jod und keine Salben verwenden\n- Krusten nicht abkratzen, Schmuck nicht unnötig drehen oder damit spielen\n- während der Heilung Schwimmbad, Seen und Whirlpools meiden\n- Bettwäsche sauber halten; bei Ohrknorpel hilft ein Reisekissen oder ein frisches T-Shirt über dem Kissen\nIm Kurs geht es darum ausführlich in Modul 10 (Pflege und Wundheilstörungen).',
        normal='In den ersten Tagen sind leichte Blutung, Schwellung, Druckempfindlichkeit und blaue Flecken normal. Später können Juckreiz, eine leichte Verfärbung und eine weißlich-gelbe Flüssigkeit auftreten, die am Schmuck verkrustet. Das ist kein Eiter, sondern gehört zur Heilung. Ein Piercing heilt von außen nach innen: Auch wenn es sich gut anfühlt, ist das Gewebe innen noch empfindlich.',
        heil='Übliche Heilungszeiten (Richtwerte, individuell verschieden):\n- Ohrläppchen, Augenbraue, Lippe: 6 bis 8 Wochen\n- Ohrknorpel: 2 bis 4 Monate\n- Nase (Nasenflügel): 2 bis 8 Monate\n- Zunge und Mundinnenraum: 3 bis 6 Wochen\n- Bauchnabel: bis zu 9 Monate\n- Brustwarze und Intimbereich: 6 bis 12 Monate\nWährend der ganzen Heilungszeit weiter pflegen. Abheilzeiten sind auch Thema in Modul 10 des Kurses.',
        entz='Mögliche Anzeichen einer Entzündung oder Infektion sind zunehmende Schwellung, Schmerzen, Wärme, starke oder dunkle Rötung, Eiter (weiß, grün oder gelb) sowie Fieber, Schüttelfrost oder Krankheitsgefühl. Den Schmuck dann nicht selbst herausnehmen: Sonst kann sich die Öffnung schließen und die Entzündung einschließen. Rausnehmen nur, wenn eine Ärztin oder ein Arzt es sagt. Eine Infektion sollte zügig ärztlich behandelt werden. Juckreiz, Ausschlag oder Schwellung können auch auf eine allergische Reaktion hindeuten.',
        schmerz='Wie stark ein Stich wehtut, ist von Person und Körperstelle abhängig. Im Kurs geht es darum in Modul 04 „Schmerz und Betäubung“: wie Schmerz entsteht und weitergeleitet wird, Lokalanästhesie und ihre Grenzen, Eisspray und Lidocainsalbe mit Nebenwirkungen und Wechselwirkungen.',
        material='Laut Seite gilt: Ersteinsatz nur aus Titan G23 oder PTFE. Im Kurs behandelt Modul 06 „Material und Schmuck“ unter anderem Titan G23, Blackline und Zirkon, Gold, Chirurgenstahl, Nickelallergie erkennen, PTFE, Schmuckformen und Überlänge beim Ersteinsatz.',
    ),
    'en': dict(
        titel='Piercing Academy · Assistant',
        gruss='Hi! I am the automated assistant of the Piercing Academy. Ask me about packages and prices, the online course, the practice days in Lingen, aftercare and healing, or how to reach us.',
        q_pakete='Which packages are there?', q_praxistag='What is the practice day?', q_anmelden='How do I sign up?', q_kontakt='Contact',
        q_module='Which modules are there?', q_kurs='How does the online course work?', q_pflege='How do I care for a new piercing?', q_heil='How long does a piercing take to heal?',
        q_zert='Do I get a certificate?', q_wer='Who is the course for?', q_ausb='Who is the trainer?', q_bekomme='What do I get?', q_alter='What is the minimum age?',
        q_buch='Course book', q_widerruf='Withdrawal and terms', q_recht='Legal notice and privacy', q_bot='Who are you?', q_danke='Thanks',
        q_entz='Is my piercing infected?', q_schmerz='Does piercing hurt?', q_material='Which jewellery, which material?',
        paket='Package', drei='There are three packages:', einzeln='The course book is also available on its own:', empf='Our recommendation.',
        anfragen='enquire', alle_pakete='All packages', pakete_ansehen='See packages', anfrage_senden='Send enquiry', mail='Send email', anrufen='Call',
        pt_intro='The practice day is a day in the studio in Lingen (Ems), Germany.', termine='Dates', ablauf='Steps', pt_pakete='Practice days are included in the Practice (1 day) and Complete (2 days) packages.',
        zum_pt='Practice day', termin_anfragen='Ask for a date', kurs='The online course', so_lernst='How you learn:', zum_kurs='Online course',
        modul='Module', module_n='The course has {n} modules:', module_tipp='Name a topic or a module number and I will tell you more.', neu=' (new, goes beyond the course book)', lektionen='Lessons', kursinhalt='Course content', alle_module='All modules',
        zert_extra='After the final test of the online course you receive a certificate of participation from the academy.',
        wer_intro='For everyone who wants to pierce professionally:', wer_tipp='For your own studio the best fit is:', ausb='Your trainer is Alessandro Noto.', bekomme='What you get:',
        alter='You must be 18 or older to take part. Every model on the practice day is also an adult and signs in advance.',
        anm_form='Use the form under “Sign up” to choose your package and send us your enquiry. You can also reach us by phone ({tel}) or email ({mail}).',
        widerruf='The rules on the contract and withdrawal are in the terms and conditions with the withdrawal policy. The site says: “{zitat}”\nI cannot give legal advice. If you have questions, please contact us directly.',
        agb='Terms and withdrawal', widerrufen='Withdraw from contract', recht='All legal details are in the legal notice, and everything about your data is in the privacy policy.', impressum='Legal notice', datenschutz='Privacy',
        kontakt_name='The Piercing Academy', tel='Phone', faq='FAQ', softcover='Softcover on Amazon', buch_anfragen='Enquire about the digital course book',
        bot='I am an automated assistant. I run only in your browser, use no cookies and do not store or send what you type. I answer with information from this website and general knowledge, but I do not replace personal, medical or legal advice.',
        danke='You are welcome! Feel free to ask more.',
        fallback='Sorry, I have no answer to that. Feel free to write to us: {mail} or call: {tel}.',
        zweifel='If in doubt, please have it checked by a doctor.',
        pflege='General aftercare recommendations for a new piercing:\n- wash your hands before touching it; otherwise leave it alone as much as possible\n- rinse with sterile saline (wound wash) as needed and pat dry with disposable paper\n- do not use alcohol, hydrogen peroxide, antibacterial soap, iodine or ointments\n- do not pick at crusts, do not twist or play with the jewellery\n- avoid pools, lakes and hot tubs while healing\n- keep bedding clean; for ear cartilage a travel pillow or a clean T-shirt over the pillow helps\nThe course covers this in detail in module 10 (Aftercare and wound healing problems).',
        normal='In the first days, slight bleeding, swelling, tenderness and bruising are normal. Later, itching, slight discolouration and a whitish-yellow fluid that crusts on the jewellery can appear. That is not pus but part of healing. A piercing heals from the outside in: even when it feels fine, the tissue inside is still fragile.',
        heil='Typical healing times (guide values, they vary):\n- earlobe, eyebrow, lip: 6 to 8 weeks\n- ear cartilage: 2 to 4 months\n- nostril: 2 to 8 months\n- tongue and inside the mouth: 3 to 6 weeks\n- navel: up to 9 months\n- nipple and genitals: 6 to 12 months\nKeep up the aftercare for the whole healing period. Healing times are also covered in module 10 of the course.',
        entz='Possible signs of inflammation or infection are increasing swelling, pain, warmth, strong or dark redness, pus (white, green or yellow), and fever, chills or feeling unwell. Do not take the jewellery out yourself: the hole can close and trap the infection. Only remove it if a doctor tells you to. An infection should be treated by a doctor promptly. Itching, a rash or swelling can also point to an allergic reaction.',
        schmerz='How much it hurts depends on the person and the body part. The course covers this in module 04 “Pain and anaesthesia”: how pain arises and is transmitted, local anaesthesia and its limits, cooling spray and lidocaine cream with side effects and interactions.',
        material='The site says: initial jewellery only in titanium G23 or PTFE. In the course, module 06 “Materials and jewellery” covers titanium G23, blackline and zircon, gold, surgical steel, recognising a nickel allergy, PTFE, jewellery shapes and extra length for initial jewellery.',
    ),
    'es': dict(
        titel='Academia de Piercing · Asistente',
        gruss='¡Hola! Soy el asistente automático de la Academia de Piercing. Pregúntame por los paquetes y precios, el curso online, los días de práctica en Lingen, el cuidado y la cicatrización o cómo contactarnos.',
        q_pakete='¿Qué paquetes hay?', q_praxistag='¿Qué es el día de práctica?', q_anmelden='¿Cómo me inscribo?', q_kontakt='Contacto',
        q_module='¿Qué módulos hay?', q_kurs='¿Cómo funciona el curso online?', q_pflege='¿Cómo cuido un piercing nuevo?', q_heil='¿Cuánto tarda en cicatrizar un piercing?',
        q_zert='¿Recibo un certificado?', q_wer='¿Para quién es el curso?', q_ausb='¿Quién es el formador?', q_bekomme='¿Qué recibo?', q_alter='¿A partir de qué edad?',
        q_buch='Libro del curso', q_widerruf='Desistimiento y condiciones', q_recht='Aviso legal y privacidad', q_bot='¿Quién eres?', q_danke='Gracias',
        q_entz='¿Está infectado mi piercing?', q_schmerz='¿Duele hacerse un piercing?', q_material='¿Qué joya, qué material?',
        paket='Paquete', drei='Hay tres paquetes:', einzeln='El libro del curso también se vende por separado:', empf='Nuestra recomendación.',
        anfragen='solicitar', alle_pakete='Todos los paquetes', pakete_ansehen='Ver paquetes', anfrage_senden='Enviar solicitud', mail='Escribir correo', anrufen='Llamar',
        pt_intro='El día de práctica es un día en el estudio de Lingen (Ems), Alemania.', termine='Fechas', ablauf='Pasos', pt_pakete='Los días de práctica están en los paquetes Práctica (1 día) y Completo (2 días).',
        zum_pt='Día de práctica', termin_anfragen='Pedir fecha', kurs='El curso online', so_lernst='Así aprendes:', zum_kurs='Curso online',
        modul='Módulo', module_n='El curso tiene {n} módulos:', module_tipp='Dime un tema o un número de módulo y te cuento más.', neu=' (nuevo, va más allá del libro)', lektionen='Lecciones', kursinhalt='Contenido del curso', alle_module='Todos los módulos',
        zert_extra='Tras el examen final del curso online recibes un certificado de participación de la academia.',
        wer_intro='Para todas las personas que quieren perforar de forma profesional:', wer_tipp='Para un estudio propio lo mejor es:', ausb='Tu formador es Alessandro Noto.', bekomme='Esto recibes:',
        alter='Se puede participar a partir de 18 años. Cada modelo del día de práctica también es mayor de edad y firma antes.',
        anm_form='En el formulario de “Inscripción” eliges tu paquete y nos envías tu solicitud. También puedes llamarnos ({tel}) o escribirnos ({mail}).',
        widerruf='Las reglas sobre el contrato y el desistimiento están en las condiciones generales. En la página se dice: «{zitat}»\nNo puedo dar asesoramiento jurídico. Si tienes dudas, contáctanos directamente.',
        agb='Condiciones y desistimiento', widerrufen='Desistir del contrato', recht='Todos los datos legales están en el aviso legal y todo sobre tus datos en la política de privacidad.', impressum='Aviso legal', datenschutz='Privacidad',
        kontakt_name='La Academia de Piercing', tel='Teléfono', faq='Preguntas frecuentes', softcover='Tapa blanda en Amazon', buch_anfragen='Solicitar libro digital',
        bot='Soy un asistente automático. Funciono solo en tu navegador, no uso cookies y no guardo ni envío lo que escribes. Respondo con la información de esta web y conocimientos generales, pero no sustituyo el asesoramiento personal, médico ni jurídico.',
        danke='¡De nada! Si quieres saber algo más, pregunta.',
        fallback='Lo siento, no tengo respuesta para eso. Escríbenos: {mail} o llama: {tel}.',
        zweifel='Ante la duda, consulta a un médico.',
        pflege='Recomendaciones generales para cuidar un piercing nuevo:\n- lávate las manos antes de tocarlo; por lo demás, déjalo tranquilo\n- enjuágalo cuando haga falta con suero fisiológico estéril (solución para lavar heridas) y sécalo con papel desechable\n- no uses alcohol, agua oxigenada, jabón antibacteriano, yodo ni pomadas\n- no arranques las costras ni gires o juegues con la joya\n- evita piscinas, lagos y jacuzzis mientras cicatriza\n- mantén limpia la ropa de cama; para el cartílago de la oreja ayuda una almohada de viaje o una camiseta limpia sobre la almohada\nEl curso lo trata en detalle en el módulo 10.',
        normal='En los primeros días es normal un ligero sangrado, hinchazón, sensibilidad y algún moratón. Después pueden aparecer picor, una ligera decoloración y un líquido blanco-amarillento que forma costra en la joya. No es pus, forma parte de la cicatrización. Un piercing cicatriza de fuera hacia dentro: aunque parezca curado, el tejido interior sigue siendo frágil.',
        heil='Tiempos de cicatrización habituales (orientativos, varían):\n- lóbulo, ceja, labio: 6 a 8 semanas\n- cartílago de la oreja: 2 a 4 meses\n- aleta de la nariz: 2 a 8 meses\n- lengua e interior de la boca: 3 a 6 semanas\n- ombligo: hasta 9 meses\n- pezón y zona íntima: 6 a 12 meses\nSigue con los cuidados durante toda la cicatrización. El módulo 10 del curso también trata los tiempos de cicatrización.',
        entz='Posibles signos de inflamación o infección son hinchazón creciente, dolor, calor, enrojecimiento fuerte u oscuro, pus (blanco, verde o amarillo) y fiebre, escalofríos o malestar. No te quites la joya por tu cuenta: el orificio puede cerrarse y encerrar la infección. Quítala solo si te lo indica un médico. Una infección debe tratarla un médico con rapidez. Picor, sarpullido o hinchazón también pueden indicar una reacción alérgica.',
        schmerz='Cuánto duele depende de la persona y de la zona. El curso lo trata en el módulo 04 «Dolor y anestesia»: cómo surge y se transmite el dolor, la anestesia local y sus límites, el spray frío y la crema de lidocaína con efectos secundarios e interacciones.',
        material='Según la página: joya inicial solo de titanio G23 o PTFE. En el curso, el módulo 06 «Material y joyas» trata, entre otros, el titanio G23, blackline y circonio, oro, acero quirúrgico, cómo reconocer una alergia al níquel, PTFE, formas de joyas y largo extra en la joya inicial.',
    ),
}

# Stichwörter je Sprache und Eintrag
KW = {
    'de': dict(
        pakete=['paket', 'pakete', 'preis', 'preise', 'kosten', 'kostet', 'euro', 'angebot', 'angebote', 'tarif', 'teuer', 'günstig'],
        paket_extra={'basis': ['nur online', 'nur theorie', 'einsteiger'], 'praxis': ['empfehlung'], 'komplett': ['coaching', '1 1 coaching', 'support', 'übungsmaterial']},
        paket_preis=['kostet', 'kosten', 'preis'],
        buch=['kursbuch', 'buch', 'bücher', 'fachbuch', 'softcover', 'taschenbuch', 'digital', 'ebook', 'e book', 'amazon', 'isbn', 'lesen', 'bodypiercer'],
        praxistag=['praxistag', 'praxistage', 'praxis tag', 'studio', 'lingen', 'vor ort', 'präsenz', 'echte modelle', 'modell', 'modelle', 'stechen', 'üben', 'termin', 'termine', 'wann', 'datum', 'ort', 'allein', 'alleine', 'aufsicht', 'anleitung'],
        kurs=['online kurs', 'onlinekurs', 'online', 'kurs', 'lernen', 'lektionen', 'prüfung', 'prüfungen', 'modulprüfung', 'abschlusstest', 'test', 'zugang', 'handy', 'tablet', 'computer', 'eigenes tempo', 'fahrschule', 'dauer'],
        module=['module', 'modul', 'kursinhalt', 'inhalt', 'inhalte', 'themen', 'thema', 'lehrplan'],
        zert=['zertifikat', 'bescheinigung', 'teilnahmebescheinigung', 'abschluss', 'nachweis', 'urkunde', 'anerkannt', 'staatlich', 'ausbildung', 'qualifikation', 'zeugnis'],
        wer=['für wen', 'zielgruppe', 'kosmetikstudio', 'kosmetik', 'tattoostudio', 'tattoo', 'tätowierer', 'quereinsteiger', 'geeignet', 'passt'],
        ausb=['ausbilder', 'trainer', 'lehrer', 'dozent', 'alessandro', 'noto', '740 piercing', 'erfahrung', 'über euch', 'über dich'],
        bekomme=['bekomme', 'bekommt', 'enthalten', 'inklusive', 'leistung', 'leistungen', 'mehrwert', 'lohnt'],
        faq=[['vorkenntnisse', 'vorwissen', 'ohne erfahrung', 'anfänger', 'neuling'], ['zugang', 'zugangsdaten', 'login', 'einloggen', 'freischaltung'],
             ['eigenes modell', 'modell mitbringen', 'mitbringen', 'freundin', 'freund', 'modelle'], ['wann', 'termine', 'praxistage stattfinden', 'datum', 'zeitraum'],
             ['studio eröffnen', 'eröffnen', 'gewerbe', 'gesundheitsamt', 'gewerbeamt', 'selbstständig', 'erlaubnis', 'genehmigung'], ['unterschied', 'praxis oder komplett', 'praxis komplett', 'vergleich']],
        alter=['alter', 'alt', 'jahre', 'minderjährig', 'volljährig', '16', '17', '18', 'jugendlich'],
        anmelden=['anmelden', 'anmeldung', 'melde', 'melden', 'einschreiben', 'buchen', 'buchung', 'bestellen', 'bestellung', 'platz', 'platz sichern', 'anfrage', 'registrieren', 'mitmachen', 'teilnehmen'],
        widerruf=['widerruf', 'widerrufen', 'widerrufsrecht', 'stornieren', 'storno', 'kündigen', 'kündigung', 'rücktritt', 'geld zurück', 'erstattung', 'agb', 'vertrag'],
        kontakt=['kontakt', 'kontaktieren', 'erreichen', 'telefon', 'telefonnummer', 'anrufen', 'nummer', 'email', 'e mail', 'mail', 'adresse', 'anschrift', 'instagram', 'nachricht', 'schreiben', 'whatsapp', 'standort'],
        recht=['impressum', 'datenschutz', 'datenschutzerklärung', 'dsgvo', 'inhaber', 'betreiber', 'rechtliches'],
        bot=['wer bist du', 'bot', 'chatbot', 'assistent', 'ki', 'künstliche intelligenz', 'mensch', 'speichern', 'gespeichert', 'cookies'],
        danke=['danke', 'dankeschön', 'super', 'perfekt', 'tschüss', 'ciao', 'bye'],
        pflege=['pflege', 'pflegen', 'pflegehinweise', 'reinigen', 'reinigung', 'säubern', 'sauber machen', 'kochsalz', 'kochsalzlösung', 'salzwasser', 'desinfizieren', 'desinfektion', 'alkohol', 'salbe', 'schwimmen', 'schwimmbad', 'sauna', 'nachsorge', 'frisches piercing', 'neues piercing', 'schlafen', 'drehen'],
        normal=['normal', 'normal so', 'kruste', 'krusten', 'flüssigkeit', 'sekret', 'nässt', 'blau', 'bluterguss', 'geschwollen normal', 'heilung normal', 'wundsekret', 'gelb'],
        heil=['heilt', 'heilen', 'heilung', 'abheilen', 'abgeheilt', 'abheilzeit', 'abheilzeiten', 'heilungszeit', 'wie lange', 'dauert', 'verheilt', 'schmuck wechseln', 'wechseln'],
        entz=['entzündung', 'entzündet', 'infektion', 'infiziert', 'eiter', 'eitert', 'rötung', 'gerötet', 'heiß', 'warm', 'fieber', 'schüttelfrost', 'starke schmerzen', 'allergie', 'allergisch', 'allergische reaktion', 'ausschlag', 'juckt', 'juckreiz', 'wildes fleisch', 'beule', 'knubbel'],
        schmerz=['weh', 'tut weh', 'schmerz', 'schmerzen', 'schmerzhaft', 'betäubung', 'betäuben', 'lidocain', 'eisspray', 'emla'],
        material=['schmuck', 'material', 'titan', 'chirurgenstahl', 'stahl', 'gold', 'nickel', 'nickelallergie', 'ptfe', 'ersteinsatz', 'ring', 'stecker', 'labret', 'barbell'],
    ),
    'en': dict(
        pakete=['package', 'packages', 'price', 'prices', 'cost', 'costs', 'euro', 'offer', 'expensive', 'cheap', 'fee'],
        paket_extra={'basis': ['only online', 'theory only', 'beginner'], 'praxis': ['recommendation'], 'komplett': ['coaching', '1 1 coaching', 'support', 'practice material']},
        paket_preis=['cost', 'costs', 'price'],
        buch=['course book', 'book', 'books', 'softcover', 'paperback', 'digital', 'ebook', 'e book', 'amazon', 'isbn', 'read'],
        praxistag=['practice day', 'practice days', 'studio', 'lingen', 'in person', 'real models', 'model', 'models', 'pierce', 'practise', 'practice', 'date', 'dates', 'when', 'where', 'alone', 'supervision'],
        kurs=['online course', 'online', 'course', 'learn', 'lessons', 'exam', 'exams', 'module exam', 'final test', 'test', 'access', 'phone', 'tablet', 'computer', 'own pace', 'duration'],
        module=['modules', 'module', 'course content', 'content', 'topics', 'topic', 'curriculum', 'syllabus'],
        zert=['certificate', 'certification', 'diploma', 'qualification', 'recognised', 'recognized', 'state', 'accredited', 'proof'],
        wer=['who is it for', 'target', 'beauty salon', 'cosmetic', 'tattoo studio', 'tattoo', 'tattoo artist', 'career change', 'suitable'],
        ausb=['trainer', 'teacher', 'instructor', 'alessandro', 'noto', '740 piercing', 'experience', 'about you'],
        bekomme=['get', 'included', 'include', 'includes', 'worth'],
        faq=[['previous knowledge', 'experience needed', 'prior experience', 'beginner', 'no experience'], ['access', 'login', 'log in', 'credentials'],
             ['own model', 'bring a model', 'bring', 'friend', 'models'], ['when', 'dates', 'take place', 'schedule'],
             ['open a studio', 'own studio', 'business', 'health department', 'permit', 'licence', 'license'], ['difference', 'practice or complete', 'compare']],
        alter=['age', 'old', 'years', 'minor', 'adult', '16', '17', '18'],
        anmelden=['sign up', 'register', 'enrol', 'enroll', 'book', 'booking', 'order', 'buy', 'join', 'enquiry', 'apply'],
        widerruf=['withdrawal', 'withdraw', 'cancel', 'cancellation', 'refund', 'money back', 'terms', 'contract'],
        kontakt=['contact', 'reach', 'phone', 'call', 'number', 'email', 'e mail', 'mail', 'address', 'instagram', 'message', 'write', 'whatsapp', 'location'],
        recht=['legal notice', 'imprint', 'privacy', 'gdpr', 'owner', 'legal'],
        bot=['who are you', 'bot', 'chatbot', 'assistant', 'ai', 'human', 'stored', 'cookies'],
        danke=['thanks', 'thank', 'great', 'perfect', 'bye'],
        pflege=['aftercare', 'care', 'clean', 'cleaning', 'saline', 'salt water', 'disinfect', 'alcohol', 'ointment', 'swimming', 'pool', 'sauna', 'new piercing', 'fresh piercing', 'sleep', 'twist'],
        normal=['normal', 'crust', 'crusty', 'fluid', 'discharge', 'bruise', 'bruising', 'is this normal', 'yellow'],
        heil=['heal', 'heals', 'healing', 'healed', 'healing time', 'how long', 'change jewellery', 'change jewelry'],
        entz=['infection', 'infected', 'inflamed', 'inflammation', 'pus', 'redness', 'red', 'hot', 'warm', 'fever', 'chills', 'severe pain', 'allergy', 'allergic', 'allergic reaction', 'rash', 'itch', 'itchy', 'bump', 'lump'],
        schmerz=['hurt', 'hurts', 'pain', 'painful', 'anaesthesia', 'anesthesia', 'numbing', 'lidocaine', 'cooling spray', 'emla'],
        material=['jewellery', 'jewelry', 'material', 'titanium', 'surgical steel', 'steel', 'gold', 'nickel', 'nickel allergy', 'ptfe', 'initial jewellery', 'ring', 'stud', 'labret', 'barbell'],
    ),
    'es': dict(
        pakete=['paquete', 'paquetes', 'precio', 'precios', 'coste', 'cuesta', 'cuestan', 'euro', 'euros', 'oferta', 'caro', 'barato', 'tarifa'],
        paket_extra={'basis': ['solo online', 'solo teoria', 'principiante'], 'praxis': ['recomendacion'], 'komplett': ['coaching', '1 1 coaching', 'soporte', 'material de practica']},
        paket_preis=['cuesta', 'precio', 'coste'],
        buch=['libro', 'libro del curso', 'libros', 'tapa blanda', 'digital', 'ebook', 'amazon', 'isbn', 'leer'],
        praxistag=['dia de practica', 'dias de practica', 'practica', 'estudio', 'lingen', 'presencial', 'modelos reales', 'modelo', 'modelos', 'perforar', 'fecha', 'fechas', 'cuando', 'donde', 'solo', 'sola', 'supervision'],
        kurs=['curso online', 'online', 'curso', 'aprender', 'lecciones', 'examen', 'examenes', 'prueba', 'acceso', 'movil', 'tableta', 'ordenador', 'propio ritmo', 'duracion'],
        module=['modulos', 'modulo', 'contenido', 'contenidos', 'temas', 'tema', 'temario', 'programa'],
        zert=['certificado', 'titulo', 'diploma', 'acreditado', 'oficial', 'reconocido', 'cualificacion'],
        wer=['para quien', 'centro de estetica', 'estetica', 'estudio de tatuajes', 'tatuaje', 'tatuador', 'adecuado'],
        ausb=['formador', 'profesor', 'instructor', 'alessandro', 'noto', '740 piercing', 'experiencia', 'sobre ti'],
        bekomme=['recibo', 'incluye', 'incluido', 'incluidos', 'merece'],
        faq=[['conocimientos previos', 'experiencia previa', 'sin experiencia', 'principiante'], ['acceso', 'datos de acceso', 'login', 'entrar'],
             ['propio modelo', 'traer modelo', 'traer', 'amiga', 'amigo', 'modelos'], ['cuando', 'fechas', 'tienen lugar', 'calendario'],
             ['abrir estudio', 'estudio propio', 'negocio', 'licencia', 'permiso', 'sanidad'], ['diferencia', 'practica o completo', 'comparar']],
        alter=['edad', 'anos', 'menor', 'mayor de edad', '16', '17', '18'],
        anmelden=['inscribirme', 'inscribir', 'inscripcion', 'apuntarme', 'reservar', 'reserva', 'comprar', 'pedido', 'solicitud', 'registrar'],
        widerruf=['desistimiento', 'desistir', 'cancelar', 'cancelacion', 'devolucion', 'reembolso', 'condiciones', 'contrato'],
        kontakt=['contacto', 'contactar', 'telefono', 'llamar', 'numero', 'correo', 'email', 'e mail', 'direccion', 'instagram', 'mensaje', 'escribir', 'whatsapp', 'ubicacion'],
        recht=['aviso legal', 'privacidad', 'proteccion de datos', 'rgpd', 'titular', 'legal'],
        bot=['quien eres', 'bot', 'chatbot', 'asistente', 'ia', 'humano', 'guardas', 'cookies'],
        danke=['gracias', 'genial', 'perfecto', 'adios'],
        pflege=['cuidado', 'cuidados', 'cuidar', 'limpiar', 'limpieza', 'suero', 'suero fisiologico', 'agua con sal', 'desinfectar', 'alcohol', 'pomada', 'nadar', 'piscina', 'sauna', 'piercing nuevo', 'dormir', 'girar'],
        normal=['normal', 'costra', 'costras', 'liquido', 'secrecion', 'moraton', 'es normal', 'amarillo'],
        heil=['cicatriza', 'cicatrizar', 'cicatrizacion', 'curar', 'curado', 'tarda', 'tardar', 'cambiar joya'],
        entz=['infeccion', 'infectado', 'inflamado', 'inflamacion', 'pus', 'enrojecimiento', 'rojo', 'caliente', 'fiebre', 'escalofrios', 'dolor fuerte', 'alergia', 'alergico', 'reaccion alergica', 'sarpullido', 'pica', 'picor', 'bulto'],
        schmerz=['duele', 'dolor', 'doloroso', 'anestesia', 'anestesiar', 'lidocaina', 'spray frio', 'emla'],
        material=['joya', 'joyas', 'material', 'titanio', 'acero quirurgico', 'acero', 'oro', 'niquel', 'alergia al niquel', 'ptfe', 'joya inicial', 'aro', 'labret', 'barbell'],
    ),
}

# ---------- Allgemeinwissen: Quellen (recherchiert am 07.11.2026) ----------
# pflege/normal: APP – Association of Professional Piercers, „Body Piercing Aftercare“ (2021):
#   sterile Kochsalzlösung (Wundspüllösung) bei Bedarf; Hände waschen; mit Einmal-Papier trocknen; Schmuck nicht
#   drehen; kein Alkohol, Wasserstoffperoxid, antibakterielle Seife, Jod, Salben; Schwimmbäder, Seen, Whirlpools meiden;
#   saubere Bettwäsche, „T-Shirt-Trick“/Reisekissen bei Knorpel; normal: Blutung, Schwellung, Empfindlichkeit, blaue
#   Flecken, später Juckreiz, Verfärbung, weißlich-gelbe Flüssigkeit („not pus“); heilt von außen nach innen.
#   https://cdn.shopify.com/s/files/1/0568/3750/5208/files/APP_Body-Aftercare_2021-edit-1.pdf
# heil: HealthLinkBC (Gesundheitsdienst British Columbia), „Body Piercing Healing Times“:
#   Ohrknorpel 2–4 Monate, Nasenflügel 2–8 Monate, Gesicht inkl. Ohrläppchen/Augenbraue/Lippe 6–8 Wochen,
#   Mund/Zunge 3–6 Wochen, Brustwarze 6–12 Monate, Genitalbereich 6–12 Monate, Bauchnabel bis 9 Monate.
#   https://www.healthlinkbc.ca/healthwise/body-piercing-healing-times
# entz: NHS, „Infected piercings“: Anzeichen (Schwellung, Schmerz, Wärme, Rötung, Blut/Eiter weiß-grün-gelb, Fieber/
#   Schüttelfrost/Krankheitsgefühl); Schmuck drinlassen, außer ein Arzt sagt etwas anderes; zügig ärztliche Hilfe.
#   APP: zu frühes Entfernen kann die Infektion einschließen (Abszess). https://www.nhs.uk/conditions/infected-piercings/
# schmerz/material: Inhalte der Seite (Module 04 und 06, Hinweis Ersteinsatz Titan G23/PTFE).


def bau(L):
    pre = '' if L == 'de' else L + '/'
    X, K = TX[L], KW[L]
    idx = lies(pre + 'index.html')
    kurs = lies(pre + 'online-kurs.html')

    # Pakete und Produkte
    pk = abschnitt(idx, 'pakete')
    pakete, produkte = [], []
    for art in re.findall(r'<article class="card[^"]*"[^>]*>(.*?)</article>', pk, re.S):
        hid = re.search(r'<h3 id="([\w-]+)"', art).group(1)
        amazon = re.search(r'href="(https://www\.amazon\.[^"]+)"', art)
        e = {'id': hid.split('-', 1)[1], 'art': eins(r'<p class="label">(.*?)</p>', art), 'name': eins(r'<h3[^>]*>(.*?)</h3>', art),
             'preis': eins(r'<p class="price">(.*?)<small>', art), 'mwst': eins(r'<small>(.*?)</small>', art).rstrip('.'),
             'fuer': eins(r'<p class="for">(.*?)</p>', art), 'punkte': [txt(x) for x in re.findall(r'<li>(.*?)</li>', art, re.S)],
             'empf': 'class="badge"' in art, 'amazon': amazon.group(1) if amazon else None}
        (pakete if hid.startswith('paket-') else produkte).append(e)
    note = saetze(eins(r'<p class="fine pk-note">(.*?)</p>', pk))
    preis_kurz, zitat = ' '.join(note[:2]), re.sub(r'\s*\([^)]*\)', '', ' '.join(note[2:]))
    # Praxistag
    pt = abschnitt(idx, 'praxistag')
    pt_text = eins(r'<p class="day-text">(.*?)</p>', pt)
    pt_termin = eins(r'<p class="termin">(.*?)</p>', pt).lstrip('● ').strip()
    pt_notes = [txt(n) for n in re.findall(r'<div class="note">(.*?)</div>', pt, re.S)]
    pt_schritte = [f'{txt(a)}: {txt(b)}' for a, b in re.findall(r'<li><b>\d+</b><span><strong>(.*?)</strong>(.*?)</span></li>', pt, re.S)]
    # Ausbilder, Zielgruppe, Zertifikat, Klartext
    ueber = abschnitt(idx, 'ueber')
    ausbilder = eins(r'<p class="intro">(.*?)</p>', ueber)
    fakten = [f'{txt(dt)}: {txt(dd)}' for dt, dd in re.findall(r'<dt>(.*?)</dt><dd[^>]*>(.*?)</dd>', ueber, re.S)]
    zg = abschnitt(idx, 'zielgruppe')
    wer = [f'{txt(h)}: {txt(p)}' for h, p in re.findall(r'<h3>(.*?)</h3>\s*<p>(.*?)</p>', zg, re.S)]
    wer_tipp = eins(r'<span class="tipp">(.*?)</span>', zg).split(':')[-1].strip()
    zert = re.search(r'<h3 class="sec-title">.*?</h3>(.*?)</div>', idx, re.S)
    zert_p = [txt(p) for p in re.findall(r'<p>(.*?)</p>', zert.group(1), re.S)] if zert else []
    klartext = [txt(x) for x in re.findall(r'<li>(.*?)</li>', abschnitt(idx, 'klartext'), re.S)]
    faq_seite = [(txt(q), txt(a)) for q, a in re.findall(r'<summary><span>(.*?)</span>.*?</summary>\s*<div class="body">(.*?)</div>', abschnitt(idx, 'faq'), re.S)]
    # Kontakt
    kt = abschnitt(idx, 'kontakt')
    tel = re.search(r'href="tel:([^"]+)"><b>[^<]*</b>(.*?)</a>', kt, re.S)
    mail = re.search(r'href="mailto:([^"]+)"', kt).group(1)
    insta = re.search(r'href="(https://www\.instagram\.com/[^"]+)"[^>]*><b>Instagram</b>(.*?)</a>', kt, re.S)
    adresse = eins(r'<address>(.*?)</address>', kt)
    anmeldung = eins(r'<h2[^>]*id="kontakt-titel"[^>]*>.*?</h2>\s*<p>(.*?)</p>', kt)
    tel_h, tel_t = tel.group(1), txt(tel.group(2))
    # Online-Kurs
    kurs_fakten = [f'{txt(dt)}: {txt(dd)}' for dt, dd in re.findall(r'<dt>(.*?)</dt>\s*<dd[^>]*>(.*?)</dd>', kurs, re.S)]
    module = []
    for n, titel, body in re.findall(r'<summary><span class="n">(\d+)</span><span>(.*?)</span>.*?</summary>\s*<div class="body">(.*?)</div>\s*</details>', abschnitt(kurs, 'module'), re.S):
        module.append({'n': n, 't': txt(re.sub(r'<span class="tag">.*', '', titel)), 'neu': 'class="tag"' in titel,
                       'ziel': eins(r'<p>(.*?)</p>', body), 'lektionen': [txt(x) for x in re.findall(r'<li>(.*?)</li>', body, re.S)],
                       'umfang': eins(r'<p class="fine">(.*?)</p>', body)})
    ablauf_kurs = [f'{txt(a)}: {txt(b)}' for a, b in re.findall(r'<li><b>[^<]*</b><span><strong>(.*?)</strong>(.*?)</span></li>', abschnitt(kurs, 'lernprinzip'), re.S)]
    ablauf_wo = [f'{txt(a)}: {txt(b)}' for a, b in re.findall(r'<h3>(.*?)</h3>\s*<p>(.*?)</p>', abschnitt(kurs, 'ablauf'), re.S)]
    vor_module = kurs[:kurs.find('<section id="module"')]
    warnung = [txt(m) for m in re.findall(r'<p><strong>(.*?)</p>', vor_module, re.S)]
    warnung = warnung[-1] if warnung else ''
    assert len(pakete) == 3 and len(module) == 11 and len(faq_seite) == 6 and tel and warnung, f'{L}: Seitenaufbau geändert, Skript anpassen'

    kontakt_links = [{'t': X['anfrage_senden'], 'h': 'index.html#kontakt'}, {'t': X['mail'], 'h': f'mailto:{mail}'}, {'t': X['anrufen'], 'h': f'tel:{tel_h}'}]
    faq = []

    def F(id, q, a, k, links=None, nxt=None, prio=False):
        e = {'id': id, 'q': q, 'a': a, 'k': k}
        if links: e['links'] = links
        if nxt: e['next'] = nxt
        if prio: e['prio'] = True
        faq.append(e)

    # Akute Beschwerden: Information + Hinweis auf ärztliche Abklärung (Vorrang vor allem anderen)
    F('entzuendung', X['q_entz'], X['entz'] + '\n' + X['zweifel'], K['entz'], [{'t': X['kontakt_name'], 'h': 'index.html#kontakt'}], [X['q_pflege'], X['q_heil']], prio=True)
    F('pflege', X['q_pflege'], X['pflege'], K['pflege'], [{'t': X['kursinhalt'], 'h': 'online-kurs.html#module'}], [X['q_heil'], X['q_entz']])
    F('normal', 'Normal?' if L != 'es' else '¿Es normal?', X['normal'], K['normal'], None, [X['q_pflege'], X['q_entz']])
    F('heilung', X['q_heil'], X['heil'], K['heil'], [{'t': X['kursinhalt'], 'h': 'online-kurs.html#module'}], [X['q_pflege'], X['q_entz']])
    F('schmerz', X['q_schmerz'], X['schmerz'], K['schmerz'], [{'t': X['kursinhalt'], 'h': 'online-kurs.html#module'}], [X['q_module'], X['q_pakete']])
    F('material', X['q_material'], X['material'], K['material'], [{'t': X['kursinhalt'], 'h': 'online-kurs.html#module'}], [X['q_pflege'], X['q_module']])

    F('pakete', X['q_pakete'],
      X['drei'] + '\n' + liste(f"{p['name']} ({p['art']}): {p['preis']} {p['mwst']}. {p['fuer']}" + (' ' + X['empf'] if p['empf'] else '') for p in pakete) + '\n' + preis_kurz,
      K['pakete'], [{'t': X['pakete_ansehen'], 'h': 'index.html#pakete'}], [p['name'] for p in pakete] + [X['q_buch']])
    for p in pakete:
        F('p-' + p['id'], f"{X['paket']} {p['name']}", f"{X['paket']} {p['name']} ({p['art']}): {p['preis']} {p['mwst']}\n{p['fuer']}\n" + liste(p['punkte']),
          [p['name'], f"{X['paket'].lower()} {p['name']}"] + K['paket_preis'] + K['paket_extra'][p['id']],
          [{'t': f"{p['name']} {X['anfragen']}", 'h': f"index.html?paket={p['id']}#kontakt"}, {'t': X['alle_pakete'], 'h': 'index.html#pakete'}],
          [X['q_pakete'], X['q_praxistag'], X['q_anmelden']])
    F('kursbuch', X['q_buch'],
      X['einzeln'] + '\n' + liste(f"{p['name']}: {p['preis']} {p['mwst']}. {p['fuer']} " + ', '.join(p['punkte']) + '.' for p in produkte) + ('\n' + zert_p[1] if len(zert_p) > 1 else ''),
      K['buch'], [{'t': X['buch_anfragen'], 'h': 'index.html?paket=buch#kontakt'}] + [{'t': X['softcover'], 'h': p['amazon']} for p in produkte if p['amazon']][:1],
      [X['q_pakete'], X['q_kontakt']])
    F('praxistag', X['q_praxistag'],
      f"{X['pt_intro']} {pt_text}\n{X['termine']}: {pt_termin}.\n" + '\n'.join(pt_notes) + f"\n{X['ablauf']}:\n" + liste(pt_schritte) + '\n' + X['pt_pakete'],
      K['praxistag'], [{'t': X['zum_pt'], 'h': 'index.html#praxistag'}, {'t': X['termin_anfragen'], 'h': 'index.html#kontakt'}],
      [faq_seite[2][0], X['q_pakete'], X['q_kontakt']])
    F('onlinekurs', X['q_kurs'],
      f"{X['kurs']}: " + ', '.join(kurs_fakten) + f".\n{X['so_lernst']}\n" + liste(ablauf_kurs) + '\n' + liste(ablauf_wo) + '\n' + warnung,
      K['kurs'], [{'t': X['zum_kurs'], 'h': 'online-kurs.html'}], [X['q_module'], X['q_pakete']])
    F('module', X['q_module'],
      X['module_n'].format(n=len(module)) + '\n' + liste(f"{m['n']} {m['t']}" for m in module) + '\n' + X['module_tipp'],
      K['module'], [{'t': X['alle_module'], 'h': 'online-kurs.html#module'}], [module[4]['t'], module[7]['t'], module[10]['t']])
    for m in module:
        F('m-' + m['n'], f"{X['modul']} {m['n']}: {m['t']}",
          f"{X['modul']} {m['n']}: {m['t']}" + (X['neu'] if m['neu'] else '') + f"\n{m['ziel']}\n{X['lektionen']}:\n" + liste(m['lektionen']) + f"\n{m['umfang']}",
          [f"{X['modul'].lower()} {m['n']}", f"{X['modul'].lower()} {int(m['n'])}", m['t']] + re.split(r',\s*|\s+(?:und|and|y)\s+', m['t']),
          [{'t': X['kursinhalt'], 'h': 'online-kurs.html#module'}], [X['q_module'], X['q_pakete']])
    F('zertifikat', X['q_zert'], (zert_p[0] if zert_p else '') + '\n' + X['zert_extra'], K['zert'], None, [X['q_pakete'], faq_seite[4][0]])
    F('zielgruppe', X['q_wer'], X['wer_intro'] + '\n' + liste(wer) + (f"\n{X['wer_tipp']} {wer_tipp}." if wer_tipp else ''), K['wer'], None, [faq_seite[0][0], X['q_pakete']])
    F('ausbilder', X['q_ausb'], f"{X['ausb']} „{ausbilder}“\n" + ', '.join(fakten) + '.' if L == 'de' else f"{X['ausb']} “{ausbilder}”\n" + ', '.join(fakten) + '.',
      K['ausb'], [{'t': 'Instagram @740_piercing', 'h': 'https://www.instagram.com/740_piercing/'}], [X['q_kontakt']])
    F('leistung', X['q_bekomme'], X['bekomme'] + '\n' + liste(klartext), K['bekomme'], None, [X['q_pakete']])
    for i, (q, a) in enumerate(faq_seite):
        F(f'faq-{i}', q, a, K['faq'][i], [{'t': X['faq'], 'h': 'index.html#faq'}], [X['q_pakete'], X['q_kontakt']])
    F('alter', X['q_alter'], X['alter'], K['alter'], None, [X['q_pakete']])
    F('anmeldung', X['q_anmelden'], anmeldung + '\n' + X['anm_form'].format(tel=tel_t, mail=mail) + '\n' + preis_kurz, K['anmelden'], kontakt_links, [X['q_pakete'], X['q_kontakt']])
    F('widerruf', X['q_widerruf'], X['widerruf'].format(zitat=zitat), K['widerruf'], [{'t': X['agb'], 'h': 'agb.html#widerruf'}, {'t': X['widerrufen'], 'h': 'widerrufen.html'}], [X['q_kontakt']])
    F('kontakt', X['q_kontakt'], f"{X['kontakt_name']}\n{adresse}\n{X['tel']}: {tel_t}\nE-Mail: {mail}" + (f"\nInstagram: {txt(insta.group(2))}" if insta else ''),
      K['kontakt'], kontakt_links + ([{'t': 'Instagram', 'h': insta.group(1)}] if insta else []), [X['q_anmelden'], X['q_pakete']])
    F('recht', X['q_recht'], X['recht'], K['recht'], [{'t': X['impressum'], 'h': 'impressum.html'}, {'t': X['datenschutz'], 'h': 'datenschutz.html'}, {'t': X['agb'], 'h': 'agb.html'}], [X['q_kontakt']])
    F('bot', X['q_bot'], X['bot'], K['bot'], None, [X['q_pakete'], X['q_kontakt']])
    F('danke', X['q_danke'], X['danke'], K['danke'])

    return {
        'titel': X['titel'], 'begruessung': X['gruss'], 'relativZu': 'seite',
        'vorschlaege': [X['q_pakete'], X['q_praxistag'], X['q_pflege'], X['q_anmelden'], X['q_kontakt']],
        'fallback': {'a': X['fallback'].format(mail=mail, tel=tel_t), 'links': kontakt_links, 'next': [X['q_pakete'], X['q_module'], X['q_kontakt']]},
        'faq': faq,
    }


kb = {'sprachen': {L: bau(L) for L in ('de', 'en', 'es')}}
ziel = os.path.join(WURZEL, 'assets', 'chatbot-wissen.js')
with open(ziel, 'w', encoding='utf-8') as fh:
    fh.write('/* Automatisch erzeugt von werkzeuge/chatbot-wissen.py (Seiteninhalte DE/EN/ES + recherchiertes Allgemeinwissen, Quellen im Skript). Nicht von Hand ändern. */\n')
    fh.write('window.ChatbotWissen=' + json.dumps(kb, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('chatbot-wissen.js:', {L: len(v['faq']) for L, v in kb['sprachen'].items()}, 'Einträge,', os.path.getsize(ziel), 'Bytes')
