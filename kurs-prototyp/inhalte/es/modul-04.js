/* Módulo 04 – Dolor y anestesia. Fuente: libro del curso cap. 3 (págs. 7–10) y cap. 4 (págs. 11–15). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 4,
  titel: "Dolor y anestesia",
  quelle: "Libro del curso cap. 3 y 4, págs. 7–15",
  ziel: "Entiendes cómo se origina y se transmite el dolor, qué anestesia puedes usar como piercer y qué debes tener en cuenta al hacerlo.",
  lektionen: [
    {
      titel: "«¿Duele?»",
      seite: "S. 7",
      inhalt: [
        { typ: "text", text: "Esta pregunta te la harán muchas veces en el futuro. No tiene una respuesta clara: cada persona percibe el dolor de forma distinta, y no se sabe con exactitud cómo discurren las vías y terminaciones nerviosas. La experiencia muestra que algunos piercings son más dolorosos que otros, pero no existe una regla general." },
        { typ: "text", text: "El dolor es una percepción sensorial compleja, a menudo con un fuerte componente psicológico. El término técnico es algesia." },
        { typ: "praxis", text: "Responde con sinceridad y calma: «Es un momento breve e intenso, y cada persona lo siente de forma distinta». Quien no escucha falsas promesas confía más en ti." }
      ],
      fragen: [
        ["¿Existe una regla general sobre cuánto duele cada piercing?", ["No, cada persona lo percibe de forma distinta", "Sí: el cartílago siempre duele más", "Sí: cuanto más gruesa la cánula, más duele", "Sí: la mucosa nunca duele"], "La experiencia muestra que algunos son más dolorosos, pero no hay una regla.", "S. 7"],
        ["¿Qué es el dolor según el libro del curso?", ["Una percepción sensorial compleja, a menudo con un fuerte componente psicológico", "Una reacción puramente refleja de la médula espinal", "Una reacción inflamatoria de la piel", "La consecuencia de un trastorno circulatorio"], "Así lo define el cap. 3.", "S. 7"],
        ["¿Cómo se llama el dolor en lenguaje técnico?", ["Algesia", "Anestesia", "Analgesia", "Asepsia"], "La anestesia es la insensibilización.", "S. 7"],
        ["Caso: Un cliente pregunta si le dolerá su piercing de tragus. ¿Qué respuesta es adecuada?", ["Con sinceridad: cada uno lo siente distinto, es un momento breve", "«No vas a sentir nada».", "«El cartílago siempre es lo que más duele».", "«Con lidocaína seguro que no duele»."], "No hay una regla general; nada de falsas promesas.", "S. 7"]
      ]
    },
    {
      titel: "Receptores del dolor y estímulos",
      seite: "S. 7–8",
      inhalt: [
        { typ: "text", text: "Para percibir el dolor se necesitan receptores del dolor (nociceptores) y una transmisión sin alteraciones hacia el cerebro (sistema nervioso central). Los receptores del dolor son, en su mayoría, terminaciones nerviosas libres." },
        { typ: "tabelle", kopf: ["Estímulo", "Ejemplos"], zeilen: [["Térmico", "Calor, frío"], ["Mecánico", "Golpes, cortes, pinchazos, presión intensa"], ["Químico", "Ácidos, álcalis"]] },
        { typ: "merke", text: "Desde 2020, la International Association for the Study of Pain (IASP) define el dolor como «una experiencia sensorial y emocional desagradable asociada o similar a la asociada con un daño tisular real o potencial». El libro del curso cita la versión anterior, según la cual también cuenta como dolor aquel que la persona afectada describe como si su causa fuera un daño tisular." },
        { typ: "text", text: "En casos poco frecuentes, los clientes sienten dolor incluso antes de la perforación propiamente dicha, solo con que se les toque la piel. Por tanto, el dolor también puede sentirse sin daño físico, por ejemplo como dolor anticipatorio causado por el miedo." }
      ],
      fragen: [
        ["¿Cómo se llaman los receptores del dolor?", ["Nociceptores", "Mecanorreceptores", "Termorreceptores", "Mastocitos"], "En su mayoría, terminaciones nerviosas libres.", "S. 7–8"],
        ["¿Qué se necesita para percibir el dolor?", ["Receptores del dolor y una transmisión sin alteraciones al cerebro", "Solo una herida abierta", "Una inflamación en el tejido", "Endorfinas liberadas"], "Nociceptores y sistema nervioso central.", "S. 7"],
        ["¿Qué tipo de estímulo es un pinchazo?", ["Mecánico", "Térmico", "Químico", "Eléctrico"], "Como los golpes, los cortes y la presión intensa.", "S. 8"],
        ["¿Qué organización aporta la definición de dolor citada?", ["International Association for the Study of Pain (IASP)", "Organización Mundial de la Salud (OMS)", "Instituto Robert Koch (RKI)", "Sociedad Alemana del Dolor"], "La definición de la IASP.", "S. 7"],
        ["¿Puede sentirse dolor sin daño físico?", ["Sí, algunos clientes sienten dolor solo con el contacto", "No, el dolor siempre requiere un daño tisular", "Solo en niños", "Solo después de una anestesia"], "Por ejemplo, como dolor anticipatorio causado por el miedo.", "S. 7"]
      ]
    },
    {
      titel: "Cómo se origina el dolor en el tejido",
      seite: "S. 8–9",
      inhalt: [
        { typ: "schritte", punkte: [
          "La lesión del tejido libera ATP, protones, radicales de oxígeno, potasio y ácido araquidónico.",
          "La enzima ciclooxigenasa (COX-1 en las células endoteliales, COX-2 en los leucocitos que migran al tejido) transforma el ácido araquidónico en prostaglandina E2. Las cininas del endotelio lesionado se convierten en bradicinina.",
          "Los mastocitos liberan sus gránulos (desgranulación), entre ellos histamina.",
          "La bradicinina y la serotonina dilatan los vasos sanguíneos. Se forma un edema local que facilita la llegada de los leucocitos al tejido dañado.",
          "Todos los mediadores del dolor excitan los nociceptores. En el reflejo neurógeno, estos liberan factor de crecimiento nervioso (NGF) y péptido relacionado con el gen de la calcitonina (CGRP)."
        ] },
        { typ: "text", text: "Esto tiene dos consecuencias: los nociceptores se vuelven más sensibles y despiertan receptores del dolor «dormidos» de la zona circundante, lo que produce una inflamación neurógena. Además, el NGF hace que crezcan fibras nerviosas hacia el tejido circundante. Así, también el tejido alrededor de la lesión se vuelve sensible al dolor." },
        { typ: "merke", text: "Los receptores del dolor necesitan un estímulo comparativamente fuerte para excitarse." }
      ],
      fragen: [
        ["¿Qué se libera, entre otras cosas, cuando se lesiona un tejido?", ["ATP, protones, potasio y ácido araquidónico", "Insulina y glucosa", "Endorfinas y adrenalina", "Lidocaína e histamina"], "Además, radicales de oxígeno.", "S. 8"],
        ["¿Qué enzima transforma el ácido araquidónico en prostaglandina E2?", ["Ciclooxigenasa (COX)", "Amilasa", "Lipasa", "Acetilcolinesterasa"], "COX-1 y COX-2.", "S. 8"],
        ["¿Qué liberan los mastocitos, entre otras cosas?", ["Histamina", "Insulina", "Adrenalina", "Endorfinas"], "Desgranulación.", "S. 8"],
        ["¿Qué provocan la bradicinina y la serotonina?", ["Una dilatación de los vasos sanguíneos con edema local", "Un estrechamiento de los vasos sanguíneos", "La insensibilización de las terminaciones nerviosas", "La liberación de endorfinas"], "Se forma un edema local.", "S. 8"],
        ["¿Qué sustancias liberan los nociceptores excitados?", ["NGF y CGRP", "Endorfinas y encefalinas", "Histamina y potasio", "Prostaglandina E2 y ATP"], "Reflejo neurógeno.", "S. 9"],
        ["¿Qué provoca la sensibilización de los nociceptores?", ["También el tejido circundante se vuelve sensible al dolor", "El dolor disminuye más rápido", "Se bloquea la transmisión al cerebro", "La herida se cierra más rápido"], "Se despiertan receptores «dormidos».", "S. 9"]
      ]
    },
    {
      titel: "Cómo llega el dolor al cerebro",
      seite: "S. 10",
      inhalt: [
        { typ: "tabelle", kopf: ["Fibras nerviosas", "Velocidad", "Característica"], zeilen: [
          ["Fibras A-delta", "unos 20 m/s", "rápidas, fáciles de localizar"],
          ["Fibras C", "hasta 2,5 m/s", "más antiguas en la evolución, lentas, localización imprecisa («en algún lugar del muslo»)"]
        ] },
        { typ: "grafik", id: "schmerzleitung" },
        { typ: "text", text: "En la médula espinal, los reflejos desencadenan un movimiento de huida antes de que el dolor se perciba de forma consciente, por ejemplo retirar la mano antes de reconocer que la placa de la cocina está caliente." },
        { typ: "text", text: "La información llega al cerebro a través del cordón anterolateral (tracto espinotalámico). En la corteza cerebral el dolor se vuelve consciente; en el sistema límbico se valora emocionalmente. Para cada zona de la piel existe un área correspondiente en la corteza sensitiva (homúnculo sensitivo). La localización precisa es un proceso de aprendizaje." },
        { typ: "praxis", text: "Si un cliente se sobresalta durante la perforación, a menudo se trata del reflejo medular, que es más rápido que cualquier intención. Por eso la pinza sujeta la zona y tú perforas con rapidez." }
      ],
      fragen: [
        ["¿Qué fibras nerviosas conducen el dolor rápidamente (unos 20 m/s)?", ["Fibras A-delta", "Fibras C", "Fibras motoras", "Fibras vegetativas"], "Las fibras C conducen hasta unos 2,5 m/s.", "S. 10"],
        ["¿Qué fibras son responsables de la localización imprecisa?", ["Fibras C", "Fibras A-delta", "Fibras motoras", "Las fibras del cordón anterolateral"], "Son lentas y más antiguas.", "S. 10"],
        ["¿Qué desencadena el reflejo en la médula espinal?", ["Un movimiento de huida antes de que el dolor sea consciente", "La valoración consciente del dolor", "Una anestesia local", "La liberación de histamina"], "Como con la placa de cocina caliente.", "S. 10"],
        ["¿Por qué vía llega la información del dolor al cerebro?", ["Por el cordón anterolateral (tracto espinotalámico)", "Por la vía piramidal", "Por la sangre, como mensajero químico", "Por el nervio óptico"], "Ver cap. 3.2.", "S. 10"],
        ["¿Dónde se valora emocionalmente el dolor?", ["En el sistema límbico", "En la médula espinal", "Solo en el tálamo", "En el cerebelo"], "Se vuelve consciente en la corteza cerebral.", "S. 10"],
        ["¿Qué es el homúnculo sensitivo?", ["La representación de cada zona de la piel en la corteza sensitiva", "Un arco reflejo de la médula espinal", "Un receptor del dolor de la piel", "Una parte del sistema límbico"], "La localización es un proceso de aprendizaje.", "S. 10"],
        ["¿Dónde se retransmite la información del dolor en su camino a la corteza cerebral?", ["En el tálamo", "En el cerebelo", "En el nociceptor", "En la hipófisis"], "Complemento al libro del curso, ver gráfico.", "Ergänzung"]
      ]
    },
    {
      titel: "La anestesia local y sus límites",
      seite: "S. 11–12",
      inhalt: [
        { typ: "text", text: "Durante la transmisión en la médula espinal, el cuerpo puede atenuar la percepción del dolor con sustancias propias (endorfinas). Algunos analgésicos, por ejemplo los opiáceos, actúan en este punto." },
        { typ: "achtung", text: "En el piercing es poco habitual, y en Alemania está prohibido, usar anestésicos que requieren receta médica, por ejemplo a base de opiáceos. La anestesia regional de la médula espinal, de plexos nerviosos o de nervios individuales solo puede realizarla un médico." },
        { typ: "tabelle", kopf: ["Procedimiento", "Efecto", "Quién"], zeilen: [
          ["Anestesia general", "Actúa sobre el cerebro", "Solo un médico especialista (anestesiólogo)"],
          ["Anestesia regional", "Inhibe durante un tiempo limitado partes de la médula espinal, plexos nerviosos o nervios individuales", "Solo un médico"],
          ["Anestesia local en sentido amplio", "Bloquea la transmisión de una pequeña superficie directamente en las terminaciones nerviosas", "Piercer, con productos permitidos"]
        ] },
        { typ: "text", text: "Además de aliviar el dolor, un anestesiólogo se asegura de que se mantengan las funciones vitales y de que el organismo esté protegido de factores de estrés, como el ir y venir de personas, el teléfono o el timbre." },
        { typ: "merke", text: "También por eso, y no solo por la higiene, trabajas exclusivamente en una sala separada y tranquila a la que solo tienen acceso el cliente y tú. En ese momento no hay nada más importante que pueda interrumpir esa calma." }
      ],
      fragen: [
        ["¿Qué sustancias propias del cuerpo atenúan el dolor en la médula espinal?", ["Endorfinas", "Histaminas", "Prostaglandinas", "Bradicininas"], "Aquí actúan los opiáceos.", "S. 11"],
        ["¿Pueden los piercers usar anestésicos con receta a base de opiáceos?", ["No", "Sí, con consentimiento por escrito", "Solo en piercings íntimos", "Sí, si un médico los ha recetado"], "Poco habitual y prohibido en Alemania.", "S. 11"],
        ["¿Qué anestesia solo puede realizar un médico?", ["La anestesia regional de nervios, plexos nerviosos o médula espinal", "El enfriamiento con espray de frío", "La aplicación de una pomada sin receta", "El enfriamiento con cubitos de hielo"], "Ver cap. 4.", "S. 11"],
        ["¿En qué se basa la anestesia local?", ["En actuar sobre el sistema nervioso periférico", "En actuar sobre el cerebro", "En bloquear la médula espinal", "En estrechar los vasos sanguíneos"], "Bloquea la transmisión en las terminaciones nerviosas.", "S. 11–12"],
        ["¿Por qué trabajas en una sala separada y tranquila?", ["Por la higiene y para protegerte de factores de estrés", "Porque lo exige la oficina de comercio", "Para poder trabajar más rápido", "Solo por el ruido del autoclave"], "El teléfono, el timbre y el ir y venir de personas molestan.", "S. 12"],
        ["Caso: Durante la perforación suena el teléfono del estudio. ¿Qué haces?", ["Lo dejo sonar y me quedo con el cliente", "Contesto un momento y después me desinfecto las manos", "Le pido al cliente que espere un momento", "Contesto con los guantes puestos"], "Nada puede interrumpir la calma en ese momento.", "S. 12"]
      ]
    },
    {
      titel: "Espray de frío y pomada de lidocaína",
      seite: "S. 13",
      inhalt: [
        { typ: "text", text: "Ante todo, el piercer con experiencia intenta quitarle el miedo al cliente y crear un ambiente tranquilo y armonioso. En el caso ideal, el cliente pierde el miedo y se le puede perforar sin anestesia." },
        { typ: "tabelle", kopf: ["Producto", "Efecto", "Observación"], zeilen: [
          ["Espray de frío (p. ej., cloruro de etilo)", "El frío intenso y breve insensibiliza las terminaciones nerviosas durante poco tiempo", "Actúa directamente"],
          ["Pomada de lidocaína (Xylocain)", "De farmacia, sin receta o con receta según el preparado; se absorbe bien a través de la mucosa (boca, zona íntima), también disponible en espray", "Permitida según la Academia, pero no recomendada"]
        ] },
        { typ: "achtung", text: "Al usar lidocaína, respeta siempre el tiempo de actuación, informa sobre los efectos secundarios y descarta interacciones con otros medicamentos (por ejemplo, betabloqueantes), sobre todo en la boca. Pregunta obligatoriamente al cliente antes sobre la tolerancia: por escrito y de nuevo de forma oral." }
      ],
      fragen: [
        ["¿Cuál es el caso ideal según el libro del curso?", ["Quitarle el miedo al cliente y perforar sin anestesia", "Enfriar a cada cliente con espray de frío", "Pomada de lidocaína en cada piercing de mucosa", "Perforar lo más despacio posible"], "Ambiente tranquilo y armonioso.", "S. 13"],
        ["¿Cómo actúa el espray de frío?", ["El frío intenso y breve insensibiliza las terminaciones nerviosas", "Insensibiliza la zona durante una hora aproximadamente", "Desinfecta e insensibiliza a la vez", "Estrecha los vasos para que la zona no sangre"], "Actúa de forma directa y breve.", "S. 13"],
        ["¿Qué espray de frío menciona el libro del curso como ejemplo?", ["Cloruro de etilo", "Lidocaína", "Benzocaína", "Mentol"], "Hoy muchos espráis de frío deportivos contienen otros propelentes; el principio es el mismo frío intenso.", "S. 13"],
        ["¿Dónde se consigue la pomada de lidocaína (Xylocain)?", ["En la farmacia", "Solo en mayoristas para médicos", "En la droguería", "En tiendas especializadas en piercing"], "La pomada de lidocaína es un medicamento y solo se vende en farmacias.", "S. 13"],
        ["¿Qué postura tiene la Piercing Akademie sobre la pomada de lidocaína?", ["Permitida, pero no recomendada", "Recomendada en todos los piercings de cartílago", "Prohibida", "Obligatoria en piercings íntimos"], "La Academia apuesta por un ambiente tranquilo en lugar de anestesia, porque la lidocaína conlleva efectos secundarios e interacciones.", "Akademie"],
        ["¿Qué debes hacer antes de usar lidocaína?", ["Preguntar al cliente por escrito y oralmente sobre la tolerancia", "Solo esperar el tiempo de actuación", "Enfriar antes la zona con espray de frío", "Llamar al médico de cabecera del cliente"], "Además, ten en cuenta efectos secundarios e interacciones.", "S. 13"]
      ]
    },
    {
      titel: "Efectos secundarios de la lidocaína",
      seite: "S. 14",
      inhalt: [
        { typ: "tabelle", kopf: ["Situación", "Posibles efectos secundarios"], zeilen: [
          ["Si se ingiere", "Mareo, inquietud, trastornos gastrointestinales, reacciones alérgicas, aumento de la temperatura"],
          ["Sobre la piel", "en casos poco frecuentes, reacciones de hipersensibilidad"],
          ["En las mucosas", "ocasionalmente hinchazón en la zona de la faringe y la laringe, muy rara vez ronquera"],
          ["Sobredosis moderada", "Hormigueo y entumecimiento, sabor metálico, mareo, ligero aturdimiento, mayor sensibilidad al ruido, zumbido en los oídos"],
          ["Sobredosis grave", "Efectos sobre la actividad cerebral y la circulación"]
        ] }
      ],
      fragen: [
        ["¿Qué efectos secundarios aparecen con una sobredosis moderada?", ["Hormigueo, entumecimiento, sabor metálico, mareo, zumbido en los oídos", "Erupción cutánea en todo el cuerpo", "Tensión arterial alta y taquicardia", "Cansancio intenso durante varios días"], "Con una sobredosis grave, efectos sobre el cerebro y la circulación.", "S. 14"],
        ["¿Qué puede provocar ocasionalmente la lidocaína en las mucosas?", ["Hinchazón en la zona de la faringe y la laringe", "Una decoloración de la mucosa", "Un sangrado", "Una alergia al níquel"], "Muy rara vez, ronquera.", "S. 14"],
        ["¿Qué provoca una sobredosis grave?", ["Efectos sobre la actividad cerebral y la circulación", "Solo un ligero hormigueo", "Una anestesia más larga sin riesgo", "Una cicatrización más rápida"], "Por eso hay que dosificar con exactitud.", "S. 14"],
        ["¿Qué reacción es posible, aunque rara, al aplicarla sobre la piel?", ["Reacciones de hipersensibilidad", "Zumbido en los oídos", "Hinchazón de la laringe", "Aumento de la temperatura"], "En casos poco frecuentes.", "S. 14"]
      ]
    },
    {
      titel: "Interacciones de la lidocaína",
      seite: "S. 14",
      inhalt: [
        { typ: "liste", punkte: [
          "Con principios activos que influyen en el ritmo o la frecuencia cardíaca (antiarrítmicos, betabloqueantes, bloqueantes de los canales de calcio), el efecto de la lidocaína sobre el corazón puede aumentar o disminuir.",
          "Otros anestésicos, los betabloqueantes antihipertensivos (propranolol, metoprolol, nadolol), diltiazem, verapamilo, cimetidina, amiodarona, fluvoxamina y sustancias vasoconstrictoras como la adrenalina o la noradrenalina potencian el efecto. Con ello aumenta el riesgo de efectos secundarios.",
          "Junto con alcaloides del cornezuelo o epinefrina, la tensión arterial puede bajar de forma peligrosa.",
          "Los sedantes (benzodiacepinas) y la aprindina potencian los efectos secundarios.",
          "Los antiepilépticos reducen el efecto; la lidocaína potencia los relajantes musculares."
        ] },
        { typ: "praxis", text: "No tienes que saberte esta lista de memoria. Pero sí tienes que saber que existe y, con cada cliente que indique que toma medicamentos, renunciar a la lidocaína si no puedes aclarar con seguridad la tolerancia." }
      ],
      fragen: [
        ["¿Con qué medicamentos puede interactuar peligrosamente la lidocaína?", ["Con fármacos que influyen en el ritmo cardíaco, p. ej. betabloqueantes", "Con antibióticos como la penicilina", "Con suplementos vitamínicos", "Con la píldora anticonceptiva"], "Sobre todo al aplicarla en la boca.", "S. 14"],
        ["¿Qué puede provocar la lidocaína junto con alcaloides del cornezuelo o epinefrina?", ["Una bajada peligrosa de la tensión arterial", "Una anestesia más intensa sin riesgo", "Una reacción alérgica en la piel", "Una alergia al níquel"], "Así lo advierte el libro del curso.", "S. 14"],
        ["¿Qué efecto tienen los antiepilépticos sobre la lidocaína?", ["Reducen el efecto", "Potencian mucho el efecto", "Solo potencian los efectos secundarios", "No influyen"], "En cambio, los relajantes musculares se potencian.", "S. 14"],
        ["¿Qué provocan los sedantes (benzodiacepinas) junto con la lidocaína?", ["Potencian los efectos secundarios", "Reducen el efecto", "Anulan la anestesia", "No influyen"], "Igual que la aprindina.", "S. 14"],
        ["Caso: Una clienta toma betabloqueantes y quiere pomada de lidocaína para un piercing de lengua. ¿Qué es correcto?", ["Renuncio a la lidocaína porque es posible una interacción", "Uso solo la mitad de la cantidad", "La aplico, porque la pomada no se absorbe en la boca", "Los betabloqueantes no importan con las pomadas"], "Hay que descartar interacciones, sobre todo en la boca.", "S. 13–14"]
      ]
    },
    {
      titel: "Usar la lidocaína con seguridad",
      seite: "S. 15",
      inhalt: [
        { typ: "schritte", punkte: [
          "El producto no debe entrar en los ojos ni aplicarse sobre piel lesionada. Si ocurre: enjuagar de inmediato con agua corriente.",
          "Aplicar la pomada con un bastoncillo de algodón antes de la intervención.",
          "Esperar unos minutos hasta que haga pleno efecto.",
          "Al aplicarla en la boca y la garganta, la deglución se ve afectada y aumenta el riesgo de mordeduras. Además, se puede aspirar comida por accidente."
        ] },
        { typ: "achtung", text: "Al aplicarlo en la boca, el producto no debe tragarse." }
      ],
      fragen: [
        ["¿Qué haces si la lidocaína entra en el ojo?", ["Enjuagar de inmediato con agua corriente", "Dar toques con solución salina y esperar", "Neutralizarla con desinfectante", "Tapar el ojo y seguir trabajando"], "Ni en los ojos ni sobre piel lesionada.", "S. 15"],
        ["¿Con qué aplicas la pomada de lidocaína?", ["Con un bastoncillo de algodón", "Con el dedo enguantado", "Con una toallita con alcohol", "Directamente del tubo sobre la zona"], "Después, espera unos minutos.", "S. 15"],
        ["¿Qué peligro hay con la lidocaína en la boca?", ["Mordeduras y aspiración accidental de comida", "Decoloración de los dientes", "Pérdida permanente del sentido del gusto", "Hipergranulación («carne salvaje») en el piercing de lengua"], "La deglución se ve afectada.", "S. 15"],
        ["¿Puede tragarse la lidocaína al aplicarla en la boca?", ["No", "Sí, en pequeñas cantidades", "Sí, si después se bebe agua", "Solo con espráis"], "Así lo dice la advertencia.", "S. 15"]
      ]
    }
  ],
  uebung: [
    "Formula tres frases con las que transmitir calma a un cliente con miedo antes de la perforación.",
    "Escribe las preguntas con las que compruebas la tolerancia antes de usar lidocaína.",
    "Explica con tus propias palabras la diferencia entre las fibras A-delta y las fibras C."
  ]
});
