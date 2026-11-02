/* Módulo 10 – Cuidados y trastornos de la cicatrización. Fuente: libro del curso cap. 6 (págs. 48–51). Corrección: «Octenisept» en lugar de «Octinesept».
   Las preguntas sobre los tiempos de cicatrización las genera además werkzeuge/fragen-erzeugen.js (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 10,
  titel: "Cuidados y trastornos de la cicatrización",
  quelle: "Libro del curso cap. 6, págs. 48–51",
  ziel: "Das las instrucciones de cuidado correctas, conoces los tiempos de cicatrización y reconoces los trastornos de la cicatrización antes de que se conviertan en un problema.",
  lektionen: [
    {
      titel: "Explicar los cuidados",
      seite: "S. 48",
      inhalt: [
        { typ: "text", text: "Después de perforar, es imprescindible que el propio cliente trate y cuide correctamente el piercing para que la cicatrización transcurra de la mejor manera posible. Por eso, en todos los casos debes explicarle al cliente cómo tratar y cuidar el piercing recién hecho." },
        { typ: "merke", text: "Entrega al cliente en el momento el producto de cuidado adecuado y las instrucciones de cuidado por escrito." }
      ],
      fragen: [
        ["¿Quién cuida el piercing recién hecho después de la perforación?", ["El propio cliente", "El piercer, en citas diarias", "El médico de cabecera", "Nadie, se cura solo"], "Por eso hay que darle instrucciones precisas.", "S. 48"],
        ["¿Cuál es la mejor forma de transmitir las instrucciones de cuidado?", ["Por escrito, junto con el producto de cuidado", "Solo de palabra, para que el cliente escuche", "Por redes sociales", "Solo en la cita de control"], "Muy recomendable.", "S. 48"]
      ]
    },
    {
      titel: "Los productos de cuidado adecuados",
      seite: "S. 48",
      inhalt: [
        { typ: "tabelle", kopf: ["Producto de cuidado", "Uso"], zeilen: [
          ["Prontolind (polihexanida)", "Adecuado para todos los piercings, también para cartílago"],
          ["Octenisept (octenidina)", "No aplicar en cartílago: en estudios de laboratorio, la octenidina daña las células del cartílago"],
          ["Solución salina simple", "Adecuada para todos los piercings"],
          ["Chlorhexamed (clorhexidina)", "Para la zona de la boca; solo unos pocos días hasta unas 2 semanas, un uso más prolongado puede manchar los dientes y la lengua"]
        ] },
        { typ: "praxis", text: "Antes de recomendar algo, pregunta siempre dónde está el piercing. En el cartílago, la solución salina y Prontolind son la opción correcta; Octenisept, nunca." }
      ],
      fragen: [
        ["¿Qué principio activo de Octenisept daña las células del cartílago en estudios de laboratorio?", ["La octenidina", "El cloruro de sodio", "La polihexanida", "La clorhexidina"], "No aplicar en cartílago.", "S. 48"],
        ["¿Qué producto de cuidado recomiendas para la zona de la boca?", ["Chlorhexamed", "Octenisept", "Aceite de árbol de té puro", "Gel Tyrosur"], "Chlorhexamed es un enjuague bucal con clorhexidina y está pensado para la mucosa oral.", "S. 48"],
        ["Caso: un cliente con un piercing conch recién hecho pregunta por Prontolind. ¿Qué le respondes?", ["Sí, Prontolind también puede usarse en el cartílago", "No, en el cartílago solo Octenisept", "No, en el cartílago ningún producto de cuidado", "Solo diluido con agua del grifo"], "Prontolind (polihexanida) está permitido en el cartílago; Octenisept, no.", "S. 48"]
      ]
    },
    {
      titel: "Tiempos de cicatrización",
      seite: "S. 49",
      inhalt: [
        { typ: "text", text: "Cada persona cicatriza de forma distinta, y algunas circunstancias influyen en el tiempo de cicatrización. Los tiempos siguientes son valores orientativos cuando el piercing cicatriza de forma óptima y sin complicaciones." },
        { typ: "tabelle", kopf: ["Piercing", "Tiempo de cicatrización"], zeilen: [
          ["Piercings de cartílago", "al menos 3 meses"], ["Lobe", "aprox. 2 meses"], ["Ombligo", "aprox. 4 a 6 meses"], ["Labret", "aprox. 1 a 2 meses"], ["Frenillo labial", "aprox. 1 mes"], ["Lengua", "aprox. 1 mes"], ["Pezón", "3 a 12 meses"], ["Ceja", "aprox. 1 mes"], ["Genital", "2 a 3 meses"]
        ] },
        { typ: "diagramm", titel: "Comparación de tiempos de cicatrización", einheit: "Meses, valores orientativos con cicatrización sin complicaciones", max: 12, schritt: 1,
          alt: "Gráfico de barras de los tiempos de cicatrización en meses: lengua, frenillo labial y ceja aprox. 1, labret 1 a 2, lobe aprox. 2, genital 2 a 3, cartílago al menos 3, ombligo 4 a 6, pezón 3 a 12 meses.",
          text: "Oscuro: tiempo mínimo seguro; claro: rango. La mucosa cicatriza más rápido; el cartílago, el ombligo y el pezón son los que más tardan.",
          zeilen: [["Lengua", 1, null, false, "aprox. 1"], ["Frenillo labial", 1, null, false, "aprox. 1"], ["Ceja", 1, null, false, "aprox. 1"], ["Labret", 1, 2, false, "1–2"], ["Lobe", 2, null, false, "aprox. 2"], ["Genital", 2, 3, false, "2–3"], ["Cartílago", 3, null, true, "al menos 3"], ["Ombligo", 4, 6, false, "4–6"], ["Pezón", 3, 12, false, "3–12"]] },
        { typ: "ergaenzung", text: "Otras fuentes indican a veces tiempos bastante más largos, por ejemplo cartílago 3 a 12 meses, ombligo 6 a 12 meses, ceja 6 a 8 semanas. Es mejor informar a tus clientes con prudencia: mejor esperar demasiado que cambiar demasiado pronto." },
        { typ: "achtung", text: "La joya solo puede cambiarse cuando el piercing haya cicatrizado por completo; de lo contrario, existe riesgo de complicaciones como una infección." }
      ],
      fragen: [
        ["¿Los tiempos de cicatrización son garantías fijas?", ["No, son valores orientativos con cicatrización óptima", "Sí, para adultos sanos", "Sí, si se siguen los cuidados", "Solo con joyas de PTFE"], "Cada persona cicatriza de forma distinta.", "S. 49"],
        ["¿Cuándo puede cambiarse la joya?", ["Solo tras la cicatrización completa", "A las 2 semanas, cuando terminan los cuidados", "Cuando ha bajado la hinchazón", "A las 4 semanas en todos los piercings"], "De lo contrario, hay riesgo de infección.", "S. 49"],
        ["¿Qué piercing tiene el mayor rango en el tiempo de cicatrización?", ["Pezón, 3 a 12 meses", "Ombligo, 4 a 6 meses", "Genital, 2 a 3 meses", "Labret, 1 a 2 meses"], "Ver gráfico.", "S. 49"],
        ["Caso: una clienta quiere cambiar la joya de su piercing helix de 4 semanas por un aro. ¿Qué le aconsejas?", ["Esperar: el cartílago necesita al menos 3 meses", "Cambiarlo está bien si ya no está rojo", "Cambiarlo, pero solo por titanio", "Cambiarlo a las 6 semanas"], "Cambiar solo tras la cicatrización completa.", "S. 49"]
      ]
    },
    {
      titel: "Falta de epitelización y sangrado posterior",
      seite: "S. 50",
      inhalt: [
        { typ: "tabelle", kopf: ["Trastorno", "Qué hacer"], zeilen: [
          ["Falta de epitelización", "Acudir a un médico pasados entre 10 y 14 días. En la epitelización, las células epiteliales migran desde el borde de la herida y la cubren; debajo, el tejido de granulación madura hasta convertirse en tejido cicatricial firme. La herida se hace más pequeña."],
          ["Sangrado posterior", "Si el sangrado no para, acudir a un médico. Posibles causas según el libro del curso: diabetes, debilidad del tejido conjuntivo, trastorno de la coagulación (hemofilia); además, medicamentos anticoagulantes."]
        ] }
      ],
      fragen: [
        ["¿Qué puede causar un sangrado posterior persistente?", ["Diabetes, debilidad del tejido conjuntivo o un trastorno de la coagulación", "Una alergia al níquel", "El cuidado con solución salina", "Demasiada longitud extra"], "En ese caso, acudir a un médico.", "S. 50"],
        ["¿Qué ocurre en la epitelización?", ["Las células migran desde el borde de la herida y la herida se hace más pequeña", "El tejido de granulación prolifera fuera del canal", "El cartílago se regenera", "Comienza la fase inflamatoria"], "Fase de regeneración.", "S. 50"]
      ]
    },
    {
      titel: "Inflamaciones",
      seite: "S. 50",
      inhalt: [
        { typ: "text", text: "Si un piercing se inflama y supura, hay que actuar. Normalmente han entrado en la herida gérmenes o sustancias extrañas, por ejemplo del pelo." },
        { typ: "foto", id: "frei-staph", text: "Staphylococcus aureus (aquí la cepa resistente MRSA) al microscopio electrónico de barrido, un causante frecuente de infecciones de la piel y de heridas." },
        { typ: "liste", punkte: [
          "El pus debe poder drenar; de lo contrario, existe riesgo de septicemia.",
          "Limpiar a diario.",
          "La manzanilla, el aceite de árbol de té o la miel de manuka pueden ayudar (el aceite de árbol de té, solo diluido: puede provocar alergias de contacto).",
          "La pomada «Tyrosur» de la farmacia puede ayudar mucho; recomiéndale al cliente que la compre."
        ] },
        { typ: "ergaenzung", text: "Si hay fiebre, enrojecimiento que se extiende o dolor intenso o creciente, envía al cliente de inmediato al médico." },
        { typ: "merke", text: "Los fumadores, las personas con alcoholismo y los diabéticos pertenecen a los grupos de riesgo; en ellos las complicaciones aparecen antes." }
      ],
      fragen: [
        ["¿Cuál suele ser la causa de una inflamación?", ["Gérmenes o sustancias extrañas en la herida", "Demasiada longitud extra", "La solución salina", "Una joya inicial de PTFE"], "Por ejemplo, del pelo.", "S. 50"],
        ["¿Qué riesgo hay si el pus no puede drenar?", ["Una septicemia", "Una alergia al níquel", "Hipergranulación", "Una cicatrización más rápida"], "El pus debe poder drenar.", "S. 50"],
        ["¿Qué pomada de farmacia menciona el libro del curso?", ["Tyrosur", "Bepanthen", "Betaisodona", "Fucidine"], "Recomiéndale al cliente que la compre.", "S. 50"],
        ["¿Qué puede ayudar en una inflamación?", ["Manzanilla, aceite de árbol de té diluido o miel de manuka y limpieza diaria", "Quitar la joya de inmediato y tapar el canal", "Cambiar la joya con frecuencia", "Octenisept en el cartílago"], "Son los remedios caseros que el libro del curso menciona para inflamaciones leves. Si hay fiebre o enrojecimiento que se extiende, el cliente va al médico.", "S. 50"],
        ["Caso: un cliente llama; el piercing está muy enrojecido y tiene fiebre. ¿Qué haces?", ["Lo envío de inmediato al médico", "Le recomiendo aceite de árbol de té y esperar 3 días", "Cambio la joya por una de PTFE", "Le recomiendo Tyrosur y reposo"], "La fiebre indica que la inflamación se está extendiendo por el cuerpo. Esto debe ponerse de inmediato en manos de un médico, no tratarse con el botiquín de casa.", "Ergänzung"]
      ]
    },
    {
      titel: "Pericondritis: emergencia en el cartílago de la oreja",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "La pericondritis es una inflamación del pericondrio (la membrana que recubre el cartílago), normalmente en el pabellón auricular. Es la complicación más peligrosa de los piercings de cartílago: el cartílago no tiene vasos sanguíneos propios, se defiende mal de los gérmenes y puede destruirse de forma permanente." },
        { typ: "grafik", id: "perichondritis" },
        { typ: "liste", titel: "Cómo reconocerla", punkte: [
          "El pabellón auricular está enrojecido en una zona amplia, hinchado, caliente y muy doloroso, a menudo entre unos días y unas semanas después de la perforación.",
          "El lóbulo suele quedar respetado porque no contiene cartílago. Esto distingue la pericondritis de una simple inflamación de la piel.",
          "Más tarde pueden aparecer fiebre, pus o una acumulación de pus bajo el pericondrio."
        ] },
        { typ: "achtung", text: "Ante la sospecha, envía al cliente de inmediato al médico, preferiblemente al otorrinolaringólogo. La pericondritis requiere por lo general un antibiótico que también actúe contra Pseudomonas. El médico decide si se retira la joya. Sin tratamiento, puede quedar una deformación permanente, la llamada oreja en coliflor." },
        { typ: "liste", titel: "Contexto", punkte: [
          "El patógeno más frecuente es la bacteria Pseudomonas aeruginosa. Vive en entornos húmedos, por ejemplo en tuberías de agua, lavabos y duchas.",
          "Los casos son más frecuentes en los meses cálidos.",
          "En Inglaterra, en 2023 se atribuyó un brote tras piercings en la oreja a agua contaminada (lavabos, calentador de agua instantáneo) en un estudio; en 2016, un espray de cuidado contaminado provocó más de 100 casos sospechosos en todo el país.",
          "Prevención: trabajar de forma estéril, recomendar solución salina estéril en lugar de agua del grifo para el cuidado, nada de octenidina en el cartílago, evitar presión y roce sobre el piercing recién hecho (por ejemplo, no dormir sobre él)."
        ] },
        { typ: "ergaenzung", text: "Fuente: literatura médica especializada sobre inflamaciones del cartílago tras piercings en la oreja." }
      ],
      fragen: [
        ["¿Qué es la pericondritis?", ["Una inflamación del pericondrio, normalmente en el pabellón auricular", "Una alergia al níquel en el cartílago", "Hipergranulación en un piercing de cartílago", "Una inflamación del lóbulo de la oreja"], "La complicación más peligrosa de los piercings de cartílago.", "Ergänzung"],
        ["¿Qué parte de la oreja suele quedar respetada en una pericondritis?", ["El lóbulo, porque no contiene cartílago", "El helix", "El tragus", "El conch"], "Signo típico para reconocerla.", "Ergänzung"],
        ["¿Qué patógeno causa con más frecuencia una pericondritis tras un piercing en la oreja?", ["Pseudomonas aeruginosa", "Staphylococcus epidermidis de la flora cutánea", "Candida albicans", "Virus del herpes"], "Vive en entornos húmedos.", "Ergänzung"],
        ["¿Qué haces ante la sospecha de una pericondritis?", ["Enviar al cliente de inmediato al médico", "Tratarla con Tyrosur y esperar una semana", "Quitar la joya tú mismo", "Recomendar frío y solución salina"], "Preferiblemente al otorrinolaringólogo.", "Ergänzung"],
        ["¿Qué riesgo hay si una pericondritis no se trata?", ["Una deformación permanente (oreja en coliflor)", "Solo una cicatriz en el canal de la perforación", "Que la joya sea expulsada", "Una alergia al níquel"], "El cartílago puede destruirse.", "Ergänzung"],
        ["¿Por qué recomiendas solución salina estéril en lugar de agua del grifo para el cuidado?", ["Porque Pseudomonas vive en entornos húmedos como las tuberías", "Porque el agua del grifo tiene demasiada cal", "Porque la solución salina regenera el cartílago", "Porque el agua del grifo decolora la joya"], "Prevención de la pericondritis.", "Ergänzung"]
      ]
    },
    {
      titel: "Hipergranulación («carne salvaje»)",
      seite: "S. 51",
      inhalt: [
        { typ: "text", text: "La hipergranulación («carne salvaje») se produce por una irritación continua de la herida, por ejemplo por presión, roce o movimiento de la joya: el tejido de granulación crece más allá del borde de la herida y forma una masa roja con aspecto de carne, de modo que la herida ya no puede cerrarse con piel. (El libro del curso habla de una irritación del tejido subcutáneo.)" },
        { typ: "schritte", titel: "Cómo puedes proceder", punkte: [
          "No hacer nada: puede desaparecer por sí sola; normalmente el cuerpo la elimina.",
          "Deshidratarla: la solución salina, la infusión de manzanilla, el agua oxigenada, el aceite de árbol de té o el aceite de eucalipto ayudan a hacerla retroceder (según el libro del curso; el agua oxigenada también daña el tejido sano y hoy apenas se recomienda para heridas).",
          "Disco para hipergranulación: un disco de plástico que se coloca sobre la joya.",
          "Cambiar la forma o el material de la joya, por ejemplo sustituir un labret de titanio por un barbell de PTFE.",
          "Si nada de esto ayuda: el cliente acude a un médico o dermatólogo, que extirpa la hipergranulación quirúrgicamente."
        ] }
      ],
      fragen: [
        ["¿Qué causa la hipergranulación?", ["Una irritación continua de la herida, por ejemplo por presión o roce", "Una alergia al níquel", "Pseudomonas", "Demasiada longitud extra"], "Masa roja con aspecto de carne.", "S. 51"],
        ["¿Cuál es la primera vía ante la hipergranulación?", ["No hacer nada; a menudo el cuerpo la elimina", "Tratarla de inmediato con el disco para hipergranulación", "Enviar al cliente al dermatólogo", "Quitar la joya"], "Vía 1 de 5.", "S. 51"],
        ["¿Qué es un disco para hipergranulación?", ["Un disco de plástico que se coloca sobre la joya", "Un apósito con iones de plata", "Una pomada", "Una bola especial de titanio"], "Vía 3 de 5.", "S. 51"],
        ["¿Qué cambio de joya puede ayudar?", ["Por ejemplo, sustituir un labret de titanio por un barbell de PTFE", "Una barra más corta sin longitud extra", "Un aro de acero más pesado", "Una joya más fina con rosca externa"], "Vía 4 de 5.", "S. 51"],
        ["¿Quién extirpa la hipergranulación si nada ayuda?", ["Un médico o dermatólogo, quirúrgicamente", "El piercer con tijeras estériles", "El cliente con agua oxigenada", "El propio cliente con unas pinzas"], "Vía 5 de 5.", "S. 51"]
      ]
    }
  ],
  uebung: [
    "Redacta una hoja de cuidados para un piercing helix recién hecho que le darías a un cliente.",
    "Apréndete de memoria la tabla de tiempos de cicatrización y ponte a prueba.",
    "Piensa qué preguntas le harías a un cliente con el punto de perforación enrojecido."
  ]
});
