/* Módulo 08 – Tipos de piercing. Fuente: libro del curso cap. 10 (págs. 74–110). Fichas técnicas según el libro; zona íntima sin imágenes.
   Para cada ficha técnica, werkzeuge/fragen-erzeugen.js genera además preguntas sobre joya inicial, cánula y pinza (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
(function () {
  function db(name, beschreibung, ersteinsatz, kanuele, klemme, hinweis, seite) {
    return { typ: "datenblatt", name: name, beschreibung: beschreibung, ersteinsatz: ersteinsatz, kanuele: kanuele, klemme: klemme, hinweis: hinweis || "", seite: seite };
  }
  var NICHT = "NO REALIZAR. Riesgo de daños graves.";
  KURS.module.push({
    nr: 8,
    titel: "Tipos de piercing",
    quelle: "Libro del curso cap. 10, págs. 74–110",
    ziel: "Conoces para cada piercing su ubicación, joya inicial, cánula y pinza, y sabes qué piercings rechazas como principiante o no realizas nunca.",
    lektionen: [
      {
        titel: "Cómo leer una ficha técnica",
        seite: "S. 74",
        inhalt: [
          { typ: "text", text: "Cada piercing tiene una ficha técnica con cuatro datos: dónde se ubica, qué joya inicial corresponde, qué calibre de cánula (o punch) usas y con qué sujetas la zona (pinza, tubo receptor o a mano alzada)." },
          { typ: "achtung", text: "La joya inicial necesita siempre una longitud extra de unos 4 mm, porque el canal de la perforación recién hecho puede hincharse. Durante la cicatrización nunca debe quedar oprimido por bolas o discos." },
          { typ: "merke", text: "En las siguientes lecciones aprendes cada piercing por separado. Después de cada lección, el curso te pregunta por las fichas técnicas: joya inicial, cánula y pinza." }
        ],
        fragen: [
          ["¿Qué información contiene cada ficha técnica?", ["Ubicación, joya inicial, cánula y pinza", "Ubicación, precio y tiempo de cicatrización", "Joya inicial, producto de cuidado y precio", "Solo cánula y pinza"], "Así están estructuradas todas las fichas técnicas.", "S. 74"],
          ["¿Cuánta longitud extra necesita la joya inicial?", ["Unos 4 mm", "Unos 2 mm", "Unos 6 mm", "Aproximadamente 1 cm"], "El canal recién hecho puede hincharse.", "S. 74"],
          ["¿Qué significa «a mano alzada» en la ficha técnica?", ["Se perfora sin pinza ni tubo receptor", "El cliente sujeta la zona él mismo", "Se perfora sin guantes", "Se perfora sin marcar"], "En lugar de pinza o tubo receptor.", "S. 74–110"]
        ]
      },
      {
        titel: "Lobe y Upper Lobe",
        seite: "S. 74–75",
        inhalt: [
          { typ: "grafik", id: "ohr" },
          db("Lobe", "Lóbulo de la oreja. Puede convertirse en túnel con punch o dilatarse: con gel lubricante y un dilatador recto o en espiral, dilatar el canal ya cicatrizado de 1 a 2 mm al mes.", "labret", "18G", "Snaptile, pinza de gasa", "Estándar de la Academia: 18G. Solo si se desea un túnel: 14G o punch de biopsia (en el libro del curso: 18G, 16G, 14G, punch).", "S. 74"),
          db("Upper Lobe", "En la parte superior del lóbulo. Además del agujero tradicional, a menudo se llevan varios Upper Lobes en fila.", "labret", "18G, 16G", "Snaptile, pinza de gasa", "", "S. 75")
        ],
        fragen: [
          ["¿Cómo dilatas un Lobe ya cicatrizado?", ["Con gel lubricante y dilatador, de 1 a 2 mm al mes", "Con dilatador, de 1 a 2 mm a la semana", "Justo después de perforar, con 14G", "5 mm al mes"], "O convertirlo en túnel con punch.", "S. 74"],
          ["¿Dónde se ubica el Upper Lobe?", ["En la parte superior del lóbulo", "En la transición al Helix", "En el Anti-Tragus", "En el cartílago sobre el lóbulo"], "A menudo varios en fila.", "S. 75"]
        ]
      },
      {
        titel: "Tragus y Anti-Tragus",
        seite: "S. 76–77",
        inhalt: [
          db("Tragus", "Saliente de cartílago a la entrada del conducto auditivo.", "labret, BCR, barbell", "punch de biopsia, 18G, 16G", "pinza para tragus, tubo receptor", "", "S. 76"),
          db("Anti-Tragus", "El saliente de cartílago opuesto al Tragus.", "herradura (circular barbell), barbell curvo (banana), BCR", "18G", "tubo receptor", "", "S. 77")
        ],
        fragen: [
          ["¿Qué es el Tragus?", ["El saliente de cartílago a la entrada del oído", "El saliente de cartílago frente a la entrada del oído", "La concha interna", "La raíz del hélix"], "Ficha técnica del Tragus.", "S. 76"],
          ["¿Dónde está el Anti-Tragus?", ["Frente al Tragus, por encima del lóbulo", "En el borde superior de la oreja", "Delante de la entrada del oído", "En la concha interna"], "También es un saliente de cartílago.", "S. 77"]
        ]
      },
      {
        titel: "Helix, Industrial y piercing antialergia",
        seite: "S. 78, 83–84",
        inhalt: [
          db("Helix", "Posible en cualquier punto del borde de la oreja, desde justo encima del lóbulo hasta rodear la curva superior del pabellón.", "labret, BCR, herradura (circular barbell)", "18G", "Snaptile, pinza de gasa, a mano alzada", "", "S. 78"),
          db("Industrial", "También llamado Scaffold. Se perfora el borde superior del pabellón cerca de la cabeza y, enfrente, en el borde exterior, de modo que un barbell largo atraviesa ambos canales. Anatómicamente son dos piercings Helix.", "barbell 38 mm", "16G", "a mano alzada, tubo receptor", "", "S. 84"),
          db("Piercing antialergia", "Arriba, en el centro de la curva del Helix, en el punto de acupuntura «antihistamínico». La estimulación permanente supuestamente alivia las alergias.", "herradura (circular barbell), barbell curvo (banana), BCR", "18G", "a mano alzada, tubo receptor", "No hagas promesas de curación ni las uses como publicidad.", "S. 83")
        ],
        fragen: [
          ["¿Dónde se puede perforar un Helix?", ["En cualquier punto del borde de la oreja", "Solo en el borde superior de la oreja", "Solo en el antihélix", "Solo en la raíz del hélix"], "Desde encima del lóbulo hasta rodear la curva.", "S. 78"],
          ["Anatómicamente, ¿cuántos piercings Helix es un Industrial?", ["Dos", "Uno", "Tres", "Un Helix y un Rook"], "Un barbell largo atraviesa ambos.", "S. 84"],
        ]
      },
      {
        titel: "Conch y Snug",
        seite: "S. 79, 82",
        inhalt: [
          db("Conch", "A través de la concha interna o externa.", "labret, barbell, BCR", "18G, 16G, punch de biopsia", "Snaptile, pinza de gasa", "", "S. 79"),
          db("Snug", "A través del cartílago en el pliegue interno, paralelo al borde de la oreja. Solo es posible si esa zona del pabellón está suficientemente pronunciada.", "barbell curvo (banana), barbell, BCR, herradura (circular barbell)", "18G", "a mano alzada, tubo receptor", "", "S. 82")
        ],
        fragen: [
          ["¿Dónde se ubica el Conch?", ["En la concha interna o externa", "En la raíz del hélix", "En el pliegue de cartílago del antihélix", "En la entrada del oído"], "Ficha técnica del Conch.", "S. 79"],
          ["¿Cuándo es posible un Snug?", ["Solo si esa zona del pabellón está suficientemente pronunciada", "En cualquier oreja", "Solo en clientes sin piercing Helix", "Solo con punch de biopsia"], "Ficha técnica del Snug.", "S. 82"]
        ]
      },
      {
        titel: "Rook y Daith",
        seite: "S. 80–81",
        inhalt: [
          db("Rook", "En vertical en el antihélix, el pliegue de cartílago que bordea por detrás la cavidad de la concha (cavum conchae).", "herradura (circular barbell), barbell curvo (banana), BCR", "18G", "tubo receptor", "", "S. 80"),
          db("Daith", "A través de la raíz del hélix (crus helicis), el pliegue de cartílago justo encima del conducto auditivo. Su efecto contra la migraña no está demostrado científicamente.", "barbell curvo (banana), BCR", "18G (doblar si es necesario)", "tubo receptor", "No hagas promesas de curación ni las uses como publicidad.", "S. 81")
        ],
        fragen: [
          ["¿Dónde se ubica el Rook?", ["En vertical en el antihélix", "En horizontal en la raíz del hélix", "En el Tragus", "En la concha interna"], "Pliegue de cartílago alrededor del cavum conchae.", "S. 80"],
          ["¿Por qué Rook y Daith se perforan con tubo receptor?", ["En el interior de la oreja no cabe una pinza", "Porque sangran especialmente mucho", "Porque se perforan con punch", "Porque necesitan cánulas muy gruesas"], "El tubo protege el tejido circundante.", "S. 68"],
          ["¿Puedes anunciar el Daith como remedio contra la migraña?", ["No", "Sí, con «puede ayudar»", "Sí, si se citan estudios", "Solo de palabra, no por escrito"], "Sin promesas de curación.", "S. 81"]
        ]
      },
      {
        titel: "Nariz: Nostril y Septum",
        seite: "S. 85, 88",
        inhalt: [
          db("Nariz (Nostril)", "A través del ala de la nariz. Se practicó por primera vez hace unos 4000 años en Oriente Medio; en la India se lleva preferentemente en el ala izquierda.", "labret", "18G", "pinza de gasa, Snaptile", "", "S. 85"),
          db("Septum", "A través del tejido conjuntivo situado bajo el cartílago del tabique nasal (lat. septum nasi). Uno de los piercings más antiguos. Se puede dilatar para joyas más grandes.", "herradura (circular barbell)", "18G, 16G", "pinza para septum", "", "S. 88")
        ],
        fragen: [
          ["¿Por dónde se perfora el Nostril?", ["Por el ala de la nariz", "Por el tabique nasal", "Por el dorso de la nariz", "Por la punta de la nariz"], "Ficha técnica del Nostril.", "S. 85"],
          ["¿Por qué tejido se perfora el Septum?", ["Por el tejido conjuntivo bajo el cartílago del tabique", "Por el cartílago del tabique", "Por el hueso nasal", "Por el ala de la nariz"], "Se puede dilatar para joyas más grandes.", "S. 88"]
        ]
      },
      {
        titel: "Ceja y Bridge",
        seite: "S. 89, 91",
        inhalt: [
          { typ: "grafik", id: "augenbraue" },
          db("Ceja", "Normalmente en vertical a través de la ceja, canal de unos 8 mm.", "barbell curvo (banana), herradura (circular barbell)", "18G", "Snaptile, pinza de gasa", "Perfora solo en el tercio externo de la ceja: en la parte interna emergen nervios y vasos (ver módulo 3).", "S. 89"),
          db("Bridge", "También llamado Erl. En la parte alta del dorso de la nariz, en horizontal sobre el hueso nasal entre los ojos. Si es demasiado profundo puede presionar vías nerviosas; si es demasiado superficial, se sale.", "barbell, barbell curvo (banana)", "18G", "Snaptile, pinza de gasa", "Recházalo si eres principiante.", "S. 91")
        ],
        fragen: [
          ["¿Cuánto mide aproximadamente el canal en el piercing de ceja?", ["8 mm", "4 mm", "12 mm", "2 cm"], "Ficha técnica de la ceja.", "S. 89"],
          ["¿Dónde se puede perforar la ceja?", ["Solo en el tercio externo", "En el tercio interno", "En el tercio medio", "En cualquier punto si es superficial"], "En la parte interna emergen nervios y vasos; lesionarlos puede causar insensibilidad en la frente y el párpado superior.", "S. 89"],
          ["Como principiante, ¿qué haces si te piden un Bridge?", ["Lo rechazo", "Lo perforo de forma muy superficial", "Lo perforo a mucha profundidad", "Lo perforo con 14G"], "Rechazarlo como principiante.", "S. 91"]
        ]
      },
      {
        titel: "Labio: Labret, Medusa y Eskimo",
        seite: "S. 86, 93",
        inhalt: [
          db("Labret", "En sentido estricto, un piercing del labio inferior; en el labio superior se llama Medusa (en el centro del filtrum, el surco bajo la nariz) o Madonna o Monroe (desplazado hacia un lado). A más de 3 mm del borde bermellón.", "labret, herradura (circular barbell)", "18G", "Snaptile, pinza de gasa", "", "S. 86"),
          db("Eskimo", "En vertical a través del labio hasta debajo del labio. Si se perfora mal, el labio puede desgarrarse o hundirse de forma permanente.", "barbell, barbell curvo (banana)", "18G", "Snaptile, pinza de gasa, a mano alzada", "Recházalo si eres principiante. No perfores el bermellón.", "S. 93")
        ],
        fragen: [
          ["¿A qué distancia del borde bermellón se coloca un Labret?", ["A más de 3 mm", "Exactamente a 1 mm", "Sin distancia, en el mismo bermellón", "A más de 1 cm"], "Ficha técnica del Labret.", "S. 86"],
          ["¿Cómo se llama un piercing en el centro del labio superior, en el filtrum?", ["Medusa", "Monroe", "Smiley", "Eskimo"], "En sentido estricto, el Labret se hace en el labio inferior.", "S. 86"],
          ["¿Qué puede causar un Eskimo mal perforado?", ["Desgarro o hundimiento permanente del labio", "Presión sobre vías nerviosas de la frente", "Daños en el frenillo lingual", "Una pericondritis"], "Rechazarlo como principiante.", "S. 93"]
        ]
      },
      {
        titel: "Frenillo labial y lengua",
        seite: "S. 87, 90",
        inhalt: [
          db("Frenillo labial (Smiley)", "A través del frenillo que une el centro del labio superior con la encía; solo se ve al sonreír.", "herradura (circular barbell), BCR", "18G", "pinza para septum, a mano alzada", "", "S. 87"),
          db("Lengua", "En vertical en el centro de la lengua. No lesionar el frenillo lingual, perforar de abajo hacia arriba, enfriar de inmediato con cubitos de hielo (recomendar cubitos de manzanilla), no usar PTFE, advertir de posibles daños dentales.", "barbell de 20 mm (más corto tras 10 días si es necesario)", "16G", "Snaptile, pinza de gasa, pinza para lengua", "", "S. 90")
        ],
        fragen: [
          ["¿Por qué el piercing del frenillo labial se llama también Smiley?", ["Porque solo se ve al sonreír", "Porque forma una sonrisa", "Porque pasa por las comisuras", "Porque es un labret con bola sonriente"], "A través del frenillo.", "S. 87"],
          ["¿En qué dirección se perfora la lengua?", ["De abajo hacia arriba", "De arriba hacia abajo", "De lado, desde la izquierda", "En diagonal desde delante"], "Ficha técnica de la lengua.", "S. 90"],
          ["¿Con qué se enfría el cliente tras el piercing de lengua?", ["Con cubitos de hielo, mejor de manzanilla", "Con espray de frío", "Con leche fría", "Con espray de lidocaína"], "Justo después de perforar.", "S. 90"],
          ["¿Cuándo se puede acortar el barbell del piercing de lengua?", ["Tras unos 10 días", "Tras 2 días", "Tras 3 meses", "Nunca, la longitud se mantiene"], "Joya inicial: barbell de 20 mm.", "S. 90"]
        ]
      },
      {
        titel: "Cheek",
        seite: "S. 92",
        inhalt: [
          { typ: "grafik", id: "wange" },
          db("Cheek", "Piercing de mejilla, a menudo en el lugar de un hoyuelo. Por aquí pasan arterias y nervios importantes; existe riesgo de desfiguración, y los hoyuelos causados por la perforación pueden quedar para siempre.", "barbell, labret", "18G", "Snaptile, pinza de gasa", "Solo para piercers profesionales. Recházalo si eres principiante.", "S. 92")
        ],
        fragen: [
          ["¿Por qué los principiantes rechazan el Cheek?", ["Por ahí pasan arterias y nervios importantes", "Porque solo se puede hacer con punch", "Porque se perfora con 14G", "Porque no existe pinza para él"], "Riesgo de desfiguración.", "S. 92"],
          ["¿Qué puede quedar para siempre tras un Cheek?", ["Hoyuelos causados por la perforación", "Un hundimiento del labio", "Insensibilidad en la lengua", "Que el labret se salga"], "Ficha técnica del Cheek.", "S. 92"]
        ]
      },
      {
        titel: "Ombligo",
        seite: "S. 94",
        inhalt: [
          db("Ombligo", "En vertical por encima o por debajo del ombligo, canal de aproximadamente 1 cm de longitud. Perforar con el cliente tumbado: facilita el trabajo y previene problemas circulatorios. Cubrir con un apósito estéril y recomendar apósitos durante los 3 días siguientes.", "barbell curvo (banana), BCR", "16G", "Snaptile, a mano alzada", "", "S. 94")
        ],
        fragen: [
          ["¿Cómo se perfora un piercing de ombligo?", ["Tumbado, para prevenir problemas circulatorios", "De pie, para que el ombligo quede bien", "Sentado", "De pie y luego se revisa tumbado"], "También facilita el trabajo.", "S. 94"],
          ["¿Cuánto mide aproximadamente el canal en el ombligo?", ["1 cm", "5 mm", "2 cm", "3 cm"], "Ficha técnica del ombligo.", "S. 94"],
          ["¿Cuánto tiempo debe llevar el cliente un apósito?", ["Los 3 días siguientes", "Solo el primer día", "2 semanas", "Hasta la cicatrización completa"], "Apósito estéril.", "S. 94"]
        ]
      },
      {
        titel: "Pezón",
        seite: "S. 95",
        inhalt: [
          db("Pezón", "A través del pezón o de la areola, normalmente en horizontal o en vertical, en mujeres y hombres. Se pueden hacer varios piercings uno encima de otro. Para marcar, el torso debe estar completamente descubierto; cubrir con un apósito estéril y recomendar apósitos durante 3 días.", "barbell, BCR", "16G", "Snaptile, pinza de gasa", "", "S. 95")
        ],
        fragen: [
          ["¿Qué hay que hacer para marcar un piercing de pezón?", ["Descubrir el torso por completo", "Descubrir solo un lado", "Tumbar al cliente", "Enfriar antes el pezón"], "Ficha técnica del pezón.", "S. 95"],
          ["Según el libro del curso, ¿cuánto tarda en cicatrizar un piercing de pezón?", ["De 3 a 12 meses", "De 1 a 2 meses", "De 4 a 6 meses", "Al menos 3 meses, como el cartílago"], "Ver tiempos de cicatrización.", "S. 49"]
        ]
      },
      {
        titel: "Surface",
        seite: "S. 96",
        inhalt: [
          db("Surface", "Piercing de superficie en zonas que no son ni convexas ni cóncavas; los puntos de entrada y salida están en un mismo plano. Se rechaza con más frecuencia y se sale; la cicatrización tarda bastante más. Una joya adecuada y una colocación precisa reducen el riesgo.", "barra de superficie, barbell curvo (banana), Dermal Anchor", "16G, 18G, punch de biopsia", "a mano alzada, Snaptile, pinza de gasa", "", "S. 96")
        ],
        fragen: [
          ["¿Qué es típico de los piercings Surface?", ["Se rechazan más a menudo y tardan bastante más en cicatrizar", "Cicatrizan más rápido que un Lobe", "Siempre están en zonas curvas", "Solo se perforan con tubo receptor"], "Entrada y salida en un mismo plano.", "S. 96"],
          ["¿Qué reduce el riesgo de que un Surface se salga?", ["Una joya adecuada y una colocación precisa", "Un aro especialmente fino", "Un cambio de joya temprano", "Una barra especialmente corta"], "Ficha técnica del Surface.", "S. 96"]
        ]
      },
      {
        titel: "Zona íntima masculina (solo para mayores de edad)",
        seite: "S. 97–102",
        inhalt: [
          { typ: "text", text: "Esta lección trata los piercings íntimos masculinos del libro del curso, sin imágenes." },
          db("Frenulum", "Un poco por debajo del frenillo del prepucio, para que el frenillo no se desgarre. Suele cicatrizar en un plazo de cuatro a ocho semanas; en hombres circuncidados solo es posible si queda suficiente frenillo.", "barbell curvo (banana), barbell", "16G, 18G", "tubo receptor, a mano alzada, pinza de gasa", "", "S. 97"),
          db("Príncipe Alberto", "Desde la uretra hasta la parte inferior del pene. Primero retirar un poco la aguja dentro de la cánula, colocarla correctamente y perforar empujando la aguja hacia delante. La cánula de plástico no debe doblarse.", "BCR", "14G", "a mano alzada", "Estándar de la Academia: cánula 14G (en el libro del curso: 14G o 16G).", "S. 98"),
          db("Dydoe", "A través del borde del glande, principalmente en hombres circuncidados.", "barbell curvo (banana), barbell", "16G, 18G", "a mano alzada", "", "S. 99"),
          db("Pubic", "En la base del pene, normalmente en horizontal, justo en la zona de transición. Piercing de superficie, tiende a salirse; eliminar antes el vello púbico.", "BCR, barbell, barra de superficie, barbell curvo (banana)", "16G, 18G", "a mano alzada, pinza de gasa", "", "S. 100"),
          db("Hafada", "También llamado escrotal. En la piel del escroto, no muy profundo; bajo riesgo de que se salga.", "BCR, barbell curvo (banana)", "16G, 18G", "a mano alzada, Snaptile, pinza de gasa", "", "S. 101"),
          db("Guiche", "A través del rafe (perineo), transversal a la línea; también es posible en mujeres.", "BCR, barbell", "16G, 18G", "a mano alzada", "", "S. 102")
        ],
        fragen: [
          ["¿A qué hay que prestar especial atención en el Príncipe Alberto?", ["La cánula de plástico no debe doblarse al empujar", "Se perfora con 18G y pinza", "Se perfora con barbell", "Se perfora a través de los cuerpos cavernosos"], "Si no, la aguja puede atravesar la cánula.", "S. 98"],
          ["¿Qué hay que hacer antes de un piercing Pubic?", ["Eliminar el vello púbico de la zona", "Enfriar la zona con espray de frío", "Aplicar lidocaína", "Preparar un punch de biopsia"], "Piercing de superficie en la base del pene.", "S. 100"],
          ["¿En cuánto tiempo suele cicatrizar un piercing Frenulum?", ["Entre cuatro y ocho semanas", "Entre 3 y 6 meses", "En una semana", "Entre 6 y 12 meses"], "Ficha técnica del Frenulum.", "S. 97"]
        ]
      },
      {
        titel: "Zona íntima femenina (solo para mayores de edad)",
        seite: "S. 105–107",
        inhalt: [
          { typ: "text", text: "Esta lección trata los piercings íntimos femeninos del libro del curso, sin imágenes." },
          db("Christina", "En vertical en el pliegue donde se unen por arriba los labios mayores, con salida en el monte de Venus. No es anatómicamente posible en todas las mujeres.", "barbell curvo (banana), barbell, BCR", "16G, 18G", "a mano alzada, Snaptile, pinza de gasa", "", "S. 105"),
          db("Capuchón del clítoris", "A través del capuchón del clítoris, en vertical u horizontal; el clítoris en sí no se perfora.", "BCR, barbell curvo (banana), barbell", "16G, 18G", "a mano alzada", "", "S. 106"),
          db("Labios vulvares", "En los labios menores o mayores.", "BCR", "16G, 18G", "a mano alzada, Snaptile, pinza de gasa", "", "S. 107")
        ],
        fragen: [
          ["¿Qué ocurre con el piercing Christina?", ["No es anatómicamente posible en todas las mujeres", "Se perfora a través del capuchón del clítoris", "Está marcado con «No realizar»", "Cicatriza en 2 semanas"], "Ficha técnica del Christina.", "S. 105"],
          ["¿Se perfora el clítoris en el piercing del capuchón del clítoris?", ["No, solo el capuchón", "Sí, en vertical", "Sí, en horizontal", "Sí, si se desea"], "Solo el capuchón.", "S. 106"]
        ]
      },
      {
        titel: "Piercings que no realizas",
        seite: "S. 103–110",
        inhalt: [
          { typ: "text", text: "Algunos piercings íntimos están marcados expresamente en el libro del curso con «No realizar». No los perforas nunca, ni siquiera si el cliente lo pide expresamente." },
          db("Ampallang", "En horizontal a través del glande.", "–", "–", "–", NICHT, "S. 103"),
          db("Apadravya", "En vertical a través del glande.", "–", "–", "–", NICHT + " Nunca perfores a través de los cuerpos cavernosos: hay riesgo de daños graves, incluso de morir desangrado.", "S. 104"),
          db("Clítoris directo", "A través del propio clítoris.", "–", "–", "–", "NO REALIZAR. Riesgo de dañar la libido.", "S. 108"),
          db("Princesa Albertina", "En vertical desde el orificio uretral hasta el orificio vaginal.", "–", "–", "–", "NO REALIZAR. Riesgo de daños.", "S. 109"),
          db("Fourchette", "En vertical en el punto inferior donde se unen los labios menores; depende mucho de la anatomía.", "–", "–", "–", "NO REALIZAR. Riesgo de daños.", "S. 110")
        ],
        fragen: [
          ["¿Qué piercing no realizas nunca?", ["Ampallang", "Christina", "Frenulum", "Hafada"], "Riesgo de daños graves.", "S. 103"],
          ["¿Por qué nunca perforas a través de los cuerpos cavernosos del pene?", ["Hay riesgo de daños graves, incluso de morir desangrado", "Solo cicatriza más despacio", "Provoca una alergia al níquel", "Se sale de inmediato"], "Indicación en el Apadravya.", "S. 104"],
          ["Según el libro del curso, ¿qué riesgo tiene perforar directamente el clítoris?", ["Dañar la libido", "Que se salga", "Una pericondritis", "Solo una cicatrización más larga"], "No realizar.", "S. 108"],
          ["Caso: un cliente te ofrece mucho dinero por un Ampallang. ¿Qué haces?", ["Lo rechazo", "Lo perforo con anestesia", "Lo perforo si firma una exención de responsabilidad", "Lo perforo con una cánula más fina"], "No realizar, ni siquiera a petición.", "S. 103"]
        ]
      }
    ],
    uebung: [
      "Escribe de memoria las fichas técnicas de Lobe, Helix, Tragus y Nostril.",
      "Practica con la oreja de silicona: marcar la zona, colocar la pinza, apoyar la cánula (sin perforar).",
      "Haz una lista de todos los piercings que rechazas como principiante y de todos los que no realizas nunca."
    ]
  });
})();
