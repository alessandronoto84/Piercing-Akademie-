/* Módulo 09 – Procedimiento, conversación con el cliente, emergencias. Fuente: libro del curso cap. 11 (págs. 111–113), primeros auxilios pág. 26, sangrado posterior pág. 50.
   Las preguntas sobre el orden de los pasos las genera además werkzeuge/fragen-erzeugen.js (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 9,
  titel: "Procedimiento, conversación con el cliente, emergencias",
  quelle: "Libro del curso cap. 11, págs. 111–113",
  ziel: "Conoces el procedimiento en 26 pasos, desde que el cliente entra al estudio hasta los cuidados posteriores, y sabes qué hacer si tiene problemas circulatorios.",
  lektionen: [
    {
      titel: "Recepción y conversación con el cliente",
      seite: "S. 111",
      inhalt: [
        { typ: "schritte", start: 1, punkte: [
          "El cliente entra al estudio de piercing.",
          "Saludo, conversación informal.",
          "Preguntar qué piercings desea y, si hace falta, quitarle el miedo.",
          "Pedirle que rellene el formulario de consentimiento."
        ] },
        { typ: "praxis", text: "La conversación es más que cortesía. Aquí descubres lo que el cliente realmente quiere y detectas inseguridad, miedo o riesgos como medicamentos antes de que alguien esté tumbado en la camilla." }
      ],
      fragen: [
        ["¿Qué ocurre en el paso 2 del procedimiento?", ["Saludo y conversación informal", "Rellenar el formulario de consentimiento", "Preparar el puesto de trabajo", "Aclarar el piercing deseado"], "Procedimiento, cap. 11.", "S. 111"],
        ["¿Qué aclaras en el paso 3?", ["Qué piercings desea y, si hace falta, quitarle el miedo", "Qué cánula vas a usar", "Cuánto tiempo tiene disponible", "Qué producto de cuidado tiene"], "Procedimiento, cap. 11.", "S. 111"],
        ["¿Cuándo pides que rellene el formulario de consentimiento?", ["Antes de perforar, en el paso 4", "Después de marcar, justo antes de perforar", "Después de perforar, junto con las instrucciones de cuidado", "Al reservar la cita por teléfono"], "Al mismo tiempo preparas el puesto de trabajo.", "S. 111"]
      ]
    },
    {
      titel: "Preparación y marcado",
      seite: "S. 111",
      inhalt: [
        { typ: "schritte", start: 5, punkte: [
          "Mientras tanto, preparar el puesto de trabajo y dejar todos los instrumentos a mano.",
          "El cliente entra a la sala de piercing: crear un ambiente agradable y quitarle el miedo.",
          "Examinar la zona y elegir la joya inicial adecuada (¡longitud extra!).",
          "Desinfectar la zona (toallita con alcohol).",
          "Marcar los puntos de entrada y de salida de la cánula con el marcador desechable.",
          "Dejar que el cliente compruebe si le parece bien."
        ] },
        { typ: "merke", text: "El paso 10 es tu red de seguridad: el cliente ve la marca antes de que se perfore. Lo que ahora no encaje todavía se puede cambiar." }
      ],
      fragen: [
        ["¿Cuándo preparas el puesto de trabajo y los instrumentos?", ["Mientras el cliente rellena el formulario de consentimiento", "Antes de que el cliente entre al estudio, para todo el día", "Después de marcar", "Cuando el cliente ya está tumbado en la camilla"], "Paso 5.", "S. 111"],
        ["¿En qué te fijas al elegir la joya inicial?", ["En la longitud extra", "En una bola lo más grande posible", "En un modelo lo más corto posible", "En una rosca externa"], "Paso 7.", "S. 111"],
        ["¿Con qué desinfectas la zona en el paso 8?", ["Con una toallita con alcohol", "Con solución salina", "Con Kodan, solo después de perforar", "Con Chlorhexamed"], "Procedimiento, paso 8.", "S. 111"],
        ["¿Con qué marcas los puntos de entrada y de salida?", ["Con el marcador desechable", "Con un bolígrafo desinfectado", "Con la punta de la cánula", "Con un lápiz kohl"], "Paso 9.", "S. 111"],
        ["¿Por qué dejas que el cliente mire después de marcar?", ["Para que compruebe si le parece bien", "Para que se acostumbre a la aguja", "Para que el desinfectante haga efecto", "Para que vea las instrucciones de cuidado"], "Paso 10.", "S. 111"]
      ]
    },
    {
      titel: "La perforación",
      seite: "S. 112",
      inhalt: [
        { typ: "foto", id: "stechen", text: "Perforación en la oreja con guantes y cánula. Libro del curso pág. 111." },
        { typ: "schritte", start: 11, punkte: [
          "Colocar la pinza o el tubo receptor.",
          "Perforar, idealmente siempre hacia el lado visible; en el labret, por ejemplo, donde va la bola. Cuanto más rápido se perfora, menos dolor.",
          "Retirar la cánula; la vaina de plástico se queda en el canal de la perforación.",
          "Recortar un poco la vaina de plástico con tijeras para que la joya entre mejor.",
          "Introducir la joya inicial en la vaina de plástico.",
          "Empujarla a través del canal de la perforación, no tirar de ella; si no, la joya puede salirse. Es doloroso: pide al cliente que exhale mientras tanto."
        ] },
        { typ: "grafik", id: "stich" }
      ],
      fragen: [
        ["¿Hacia dónde perforas idealmente?", ["Hacia el lado visible; en el labret, donde va la bola", "Siempre de dentro hacia fuera", "Siempre de atrás hacia delante", "Hacia donde va la placa"], "Paso 12.", "S. 112"],
        ["¿Qué es cierto sobre la velocidad de la perforación?", ["Cuanto más rápido se perfora, menos dolor", "Perforar despacio para que el tejido ceda", "La velocidad no influye", "Rápido solo en cartílago, si no, despacio"], "Paso 12.", "S. 112"],
        ["¿Por qué recortas la vaina de plástico?", ["Para que la joya entre mejor", "Para que no se quede en el canal", "Para que la aguja salga más fácilmente", "Para que salga menos sangre"], "Paso 14.", "S. 112"],
        ["¿Qué le pides al cliente mientras empujas la joya?", ["Que exhale", "Que inhale y aguante la respiración", "Que cuente en voz alta", "Que cierre los ojos y trague"], "Paso 16.", "S. 112"]
      ]
    },
    {
      titel: "Asegurar la joya",
      seite: "S. 112",
      inhalt: [
        { typ: "schritte", start: 17, punkte: [
          "Retirar con cuidado el tubito de la joya.",
          "Tomar la bola.",
          "Sujetar la joya con la pinza de sujeción y enroscar la bola firmemente.",
          "Rociar de nuevo con Kodan.",
          "Mostrar al cliente el piercing en el espejo."
        ] }
      ],
      fragen: [
        ["¿Con qué sujetas la joya mientras enroscas la bola?", ["Con la pinza de sujeción", "Con la pinza para bolas", "Con la pinza con ventana", "Con el calibre"], "Paso 19.", "S. 112"],
        ["¿Con qué se rocía de nuevo después de colocar la joya?", ["Con Kodan", "Con Octenisept", "Con espray de frío", "Con solución salina"], "Paso 20.", "S. 112"],
        ["¿Qué ocurre en el paso 21?", ["Mostrar al cliente el piercing en el espejo", "Rociar con Kodan", "Enroscar la bola firmemente", "Cubrir con un apósito"], "Procedimiento, cap. 11.", "S. 112"]
      ]
    },
    {
      titel: "Cuidados posteriores y cierre",
      seite: "S. 113",
      inhalt: [
        { typ: "schritte", start: 22, punkte: [
          "Si procede, cubrir con un apósito (pezón, ombligo).",
          "En los piercings de lengua, dar un cubito de hielo.",
          "Entregar el producto de cuidado y explicar las instrucciones de cuidado de palabra.",
          "Lo ideal es entregar las instrucciones de cuidado también por escrito.",
          "Si hay trastornos de la cicatrización, el cliente debe volver para recibir asesoramiento (ver módulo 10)."
        ] }
      ],
      fragen: [
        ["¿En qué piercings se cubre eventualmente con un apósito?", ["Por ejemplo, pezón y ombligo", "Por ejemplo, lobe y helix", "Por ejemplo, lengua y labio", "En todos los piercings de cartílago"], "Paso 22.", "S. 113"],
        ["¿Qué recibe el cliente después de un piercing de lengua?", ["Un cubito de hielo", "Un apósito estéril", "Una pastilla de lidocaína para chupar", "Un vaso de té caliente"], "Paso 23.", "S. 113"],
        ["¿Cómo transmites las instrucciones de cuidado?", ["De palabra y, idealmente, también por escrito", "Solo de palabra", "Solo con un enlace a la web", "Solo si el cliente lo pide"], "Pasos 24 y 25.", "S. 113"],
        ["¿Qué debe hacer el cliente si hay trastornos de la cicatrización?", ["Volver para recibir asesoramiento", "Quitarse la joya él mismo", "Tratarlo con aceite de árbol de té puro", "Cambiar la joya por una de acero"], "Paso 26.", "S. 113"]
      ]
    },
    {
      titel: "Problemas circulatorios y emergencias",
      seite: "S. 26, 50, 113",
      inhalt: [
        { typ: "achtung", text: "Si al cliente le baja la tensión durante el procedimiento (¡pregunta siempre!), dale glucosa (por ejemplo, Dextro Energy) y algo de beber. Si es necesario, túmbalo y déjalo descansar." },
        { typ: "ergaenzung", text: "Lo que da buen resultado en un colapso circulatorio: tumbar a la persona en horizontal y elevarle las piernas para que la sangre vuelva a la cabeza. La glucosa y la bebida, solo cuando el cliente vuelva a tragar con seguridad." },
        { typ: "liste", titel: "Estar preparado", punkte: [
          "En el estudio hay un botiquín de primeros auxilios actualizado, bien visible y de acceso rápido.",
          "Los números de emergencia (médico de urgencias, médico de cabecera, bomberos) están expuestos.",
          "Los piercings de ombligo se realizan con el cliente tumbado, también para prevenir problemas circulatorios.",
          "Si el sangrado no para, el cliente debe acudir a un médico. Como posibles causas, el libro del curso menciona diabetes, debilidad del tejido conjuntivo o un trastorno de la coagulación (hemofilia); con frecuencia también hay detrás medicamentos anticoagulantes (ver módulo 3)."
        ] },
        { typ: "ergaenzung", text: "En caso de pérdida de conciencia, dificultad para respirar o una reacción alérgica grave, llama de inmediato al número de emergencias 112. Un curso de primeros auxilios, renovado con regularidad, forma parte del equipo básico de todo piercer." }
      ],
      fragen: [
        ["¿Qué ayuda cuando baja la tensión?", ["Tumbarse, piernas en alto, descansar; luego glucosa y algo de beber", "Sentarlo erguido y darle café", "Seguir perforando para que acabe rápido", "Agua fría en la cara y hacer que se levante"], "Ver pág. 113.", "S. 113"],
        ["¿Cómo detectas a tiempo una bajada de tensión?", ["Pregunto siempre durante el procedimiento", "Mido la tensión antes", "Solo me fijo en el sudor", "No lo hago, el cliente ya avisará"], "«¡Pregunta siempre!»", "S. 113"],
        ["¿Qué números de emergencia deben estar expuestos?", ["Médico de urgencias, médico de cabecera, bomberos", "Policía y oficina local de salud pública", "Solo la policía (110)", "Oficina local de salud pública y oficina de comercio"], "Cap. 5.4.", "S. 26"],
        ["¿Qué número marcas en caso de pérdida de conciencia?", ["112", "110", "116 117", "El número del médico de cabecera"], "El 112 comunica en toda Europa con los servicios de emergencias y los bomberos. El 110 es la policía y el 116 117 el servicio médico de guardia (en Alemania).", "Ergänzung"],
        ["Caso: mientras perforas, la clienta se pone pálida y se marea. ¿Qué haces?", ["Interrumpir, tumbarla, piernas en alto, después glucosa y bebida", "Terminar de perforar rápido", "Hacer que se levante y camine", "Rociar espray de frío en la zona"], "Bajada de tensión, ver pág. 113.", "S. 113"]
      ]
    }
  ],
  uebung: [
    "Repasa el procedimiento con una persona de práctica hasta el paso 10, sin perforar.",
    "Formula cómo le quitarías el miedo a un cliente nervioso en el paso 3.",
    "Ten glucosa, bebida y un botiquín de primeros auxilios preparados en tu puesto de trabajo."
  ]
});
