/* Módulo 01 – La profesión y su historia. Fuente: libro del curso cap. 2 (págs. 3–6), Nostril/Septum págs. 85 y 88.
   Estructura de cada lección: inhalt (explicación) y fragen (preguntas obligatorias tras la explicación).
   Formato de pregunta: [pregunta, [respuesta correcta, incorrecta, incorrecta], explicación, página]; la respuesta correcta va primero, el curso las mezcla.
   Tipos de contenido: text, liste, merke, achtung, ergaenzung, praxis, schritte, tabelle, datenblatt (ver kurs.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 1,
  titel: "La profesión y su historia",
  quelle: "Libro del curso cap. 2, págs. 3–6",
  ziel: "Sabes qué es el piercing, de dónde viene, cómo se perfora hoy de forma profesional y por qué la pistola de perforar orejas no tiene cabida en el estudio.",
  lektionen: [
    {
      titel: "Qué es el piercing",
      seite: "S. 3",
      inhalt: [
        { typ: "text", text: "La palabra «piercing» significa simplemente agujero en la piel. Muchas personas la confunden con la joya. Pero lo que designa es la perforación en sí." },
        { typ: "text", text: "El piercing es una forma de body modding o arte corporal. Aros, barras y otras joyas se colocan en distintas partes del cuerpo haciendo pasar la joya a través de la piel y del tejido graso o cartilaginoso que hay debajo." },
        { typ: "merke", text: "Los piercings son tan antiguos como la propia civilización humana." },
        { typ: "praxis", text: "Los clientes a menudo piden «un piercing» y se refieren a una joya concreta. En la conversación aclara siempre ambas cosas: la zona que se va a perforar y la joya que se va a colocar." }
      ],
      fragen: [
        ["Según el libro del curso, ¿qué significa la palabra «piercing»?", ["Agujero en la piel (la perforación en sí)", "La joya que está en el canal de la perforación", "El proceso de cicatrización tras la perforación", "La joya inicial con longitud extra"], "A menudo se confunde erróneamente con la joya.", "S. 3"],
        ["¿A qué forma de arte corporal pertenece el piercing?", ["Al body modding", "A la escarificación", "Al tatuaje", "Al maquillaje permanente"], "El piercing es una forma de body modding o arte corporal.", "S. 3"],
        ["¿A través de qué tejido se pasa la joya en un piercing?", ["A través de la piel y del tejido graso o cartilaginoso subyacente", "Solo a través de la epidermis, sin capas más profundas", "A través de la piel y del tejido muscular", "Solo a través del cartílago, nunca del tejido graso"], "Según la zona, a través de piel y tejido graso (por ejemplo, el lóbulo) o de piel y cartílago (por ejemplo, el helix).", "S. 3"],
        ["Según el libro del curso, ¿qué antigüedad tienen los piercings?", ["Tanta como la civilización humana", "Más o menos la del Imperio romano", "Proceden de la Edad Media", "Surgieron con el movimiento punk de los años 70"], "Frase clave del cap. 2.1.", "S. 3"]
      ]
    },
    {
      titel: "Las primeras huellas: África y Egipto",
      seite: "S. 3",
      inhalt: [
        { typ: "text", text: "Las huellas más antiguas del piercing nos llevan al Neolítico africano. El libro del curso menciona hallazgos neolíticos de Argelia: allí, hace más de 7000 años, las personas ya habrían llevado colgantes de huesos de animales y dientes en los lóbulos de las orejas." },
        { typ: "ergaenzung", text: "La prueba directa más antigua la describe un estudio de 2022 (revista Antiquity): en tumbas de Boncuklu Tarla, en el sureste de Turquía, había joyas de piedra, obsidiana y cobre todavía junto a las orejas y el mentón de los difuntos, aproximadamente entre el 10.000 y el 8.000 a. C. Para el dato del libro del curso sobre Argelia no hemos encontrado ninguna fuente independiente." },
        { typ: "text", text: "También en antiguas representaciones de faraones de Egipto (aproximadamente entre 1400 y 1300 a. C.) se encuentran indicios de joyas en las orejas. La famosa máscara de oro de Tutankamón muestra orificios en las orejas. A ello se suman espléndidos pendientes de oro hallados como ajuar funerario." },
        { typ: "tabelle", kopf: ["Hallazgo", "Antigüedad", "Qué muestra"], zeilen: [
          ["Hallazgos neolíticos en Argelia", "más de 7000 años", "Colgantes para las orejas de huesos de animales y dientes"],
          ["Representaciones de faraones en Egipto", "aprox. 1400–1300 a. C.", "Joyas en las orejas"],
          ["Máscara de oro de Tutankamón", "aprox. 3300 años", "Orificios en las orejas; pendientes de oro como ajuar funerario"]
        ] }
      ],
      fragen: [
        ["¿Qué antigüedad tienen los hallazgos más antiguos de joyas para las orejas que menciona el libro del curso?", ["Más de 7000 años (Argelia)", "Unos 3300 años (Tutankamón)", "Unos 2600 años (cultura de Hallstatt)", "Unos 4000 años (Oriente Medio)"], "Hallazgos neolíticos de Argelia.", "S. 3"],
        ["¿De qué estaban hechos los colgantes para las orejas más antiguos de Argelia?", ["De huesos de animales y dientes", "De oro", "De bronce", "De conchas y madera"], "Los hallazgos neolíticos de Argelia eran de huesos de animales y dientes; las joyas de metal llegaron mucho más tarde.", "S. 3"],
        ["¿De qué época proceden las huellas de piercing más antiguas que se conocen?", ["Del Neolítico (Nueva Edad de Piedra)", "De la Edad del Bronce europea", "De la época de los faraones", "De la Antigüedad griega"], "Neolítico significa Nueva Edad de Piedra.", "S. 3"],
        ["¿Qué famosa máscara muestra orificios en las orejas?", ["La máscara de oro de Tutankamón", "La máscara de oro de Agamenón", "La máscara mortuoria de Napoleón", "La máscara de Pakal de Palenque"], "Además había pendientes de oro como ajuar funerario.", "S. 3"],
        ["¿De qué época son las representaciones egipcias de faraones con joyas en las orejas?", ["Entre 1400 y 1300 a. C., aprox.", "Entre 3000 y 2900 a. C., aprox.", "Entre 500 y 400 a. C., aprox.", "Entre 100 y 200 d. C., aprox."], "Así las fecha el libro del curso.", "S. 3"]
      ]
    },
    {
      titel: "Europa, la Antigüedad y otras culturas",
      seite: "S. 4, 85, 88",
      inhalt: [
        { typ: "text", text: "En Europa no se encuentran tantas huellas del piercing temprano. Como una de las pocas pruebas, el libro del curso menciona la máscara de bronce de la cultura de Hallstatt (Kleinklein, Estiria), de unos 2600 años de antigüedad, que mostraría varios orificios en ambas orejas. En la antigua Grecia y en Roma, en cambio, el ideal era un cuerpo intacto." },
        { typ: "liste", titel: "Historia de algunos piercings", punkte: [
          "Piercing nasal (Nostril): se practicó por primera vez hace unos 4000 años en Oriente Medio y en el siglo XVI se adoptó en la India. Allí se lleva preferentemente en la aleta izquierda de la nariz.",
          "Septum: uno de los piercings más antiguos, presente tradicionalmente en muchas culturas de todo el mundo. El nombre viene del latín «septum nasi»."
        ] },
        { typ: "text", text: "Los piercings son un fenómeno universal y se encuentran en casi todas las culturas, como rito de iniciación o como adorno. Desde los primeros tiempos las personas se han adornado con ellos: querían mostrar su pertenencia a un grupo y, al mismo tiempo, destacar dentro de él. Ya sea con tatuajes, piercings, escarificaciones, peinados o ropa, cada persona tiene su propia forma de expresarse." }
      ],
      fragen: [
        ["¿Qué hallazgo europeo con orificios en las orejas menciona el libro del curso?", ["Una máscara de bronce de la cultura de Hallstatt", "Un busto romano de mármol", "Un relieve funerario romano", "Una pintura en un jarrón griego"], "La máscara tiene unos 2600 años.", "S. 4"],
        ["¿Qué antigüedad aproximada tiene la máscara de bronce de la cultura de Hallstatt?", ["Unos 2600 años", "Unos 7000 años", "Unos 4000 años", "Unos 1200 años"], "Muestra varios orificios en ambas orejas.", "S. 4"],
        ["¿Qué ideal corporal regía en la antigua Grecia y en Roma?", ["El cuerpo intacto", "Un cuerpo lo más adornado posible", "Un cuerpo con signos de pertenencia como pendientes", "Un cuerpo tatuado como signo de valor"], "Por eso allí apenas hay huellas de piercing.", "S. 4"],
        ["¿Dónde se practicó por primera vez el piercing nasal?", ["En Oriente Medio, hace unos 4000 años", "En la India, hace unos 4000 años", "En Egipto, hace unos 7000 años", "En la India, en el siglo XVI"], "En el siglo XVI llegó a la India.", "S. 85"],
        ["¿Qué es cierto sobre el piercing de septum?", ["Es uno de los piercings más antiguos y está extendido en muchas culturas", "No llegó desde la India hasta el siglo XVI", "Se perfora a través del cartílago del tabique nasal", "Solo es tradicional en Europa"], "El nombre viene de «septum nasi».", "S. 88"],
        ["¿Por qué las personas se adornaban ya desde muy pronto?", ["Para mostrar pertenencia y destacar al mismo tiempo", "Sobre todo por motivos médicos", "Principalmente como protección contra enfermedades", "Solo para ocultar su rango social"], "Los piercings eran rito de iniciación o adorno.", "S. 4"]
      ]
    },
    {
      titel: "Cómo se perfora hoy",
      seite: "S. 5",
      inhalt: [
        { typ: "text", text: "Hoy perforamos con una cánula intravenosa (catéter, «Braunüle»). La aguja está dentro de una vaina de plástico." },
        { typ: "schritte", punkte: [
          "La aguja se introduce a través de la piel junto con la vaina de plástico.",
          "La aguja se retira y se desecha de inmediato y correctamente en el contenedor para objetos punzantes.",
          "En el canal de la perforación solo queda la vaina de plástico (el tubito).",
          "La joya se introduce en el tubito y se empuja a través del canal de la perforación."
        ] },
        { typ: "achtung", text: "Empujar, nunca tirar. Si se tira, el riesgo de que la joya se escape durante la inserción es demasiado grande." },
        { typ: "praxis", text: "El tubito protege el canal recién perforado. Si empujas con limpieza, la joya entra deslizándose sin dolor adicional. Pide al cliente que suelte el aire mientras tanto (más sobre esto en el módulo 9)." }
      ],
      fragen: [
        ["¿Con qué se perforan hoy los piercings de forma profesional?", ["Con una cánula intravenosa («Braunüle»)", "Con una pistola de perforar orejas con cartucho desechable", "Con una aguja de piercing maciza sin vaina", "Con un punch de biopsia en cada piercing"], "La aguja está dentro de una vaina de plástico.", "S. 5"],
        ["¿Qué es una «Braunüle»?", ["Una cánula intravenosa: aguja de acero en una vaina de plástico", "Una pinza de piercing con ventana", "Un tubo receptor", "Una jeringa estéril desechable"], "Así llama el libro del curso a la cánula.", "S. 5"],
        ["¿Qué ocurre con la aguja tras la perforación?", ["Se retira y se desecha de inmediato en el contenedor para objetos punzantes", "Se queda en la vaina de plástico hasta que la joya está colocada", "Se vuelve a poner en su capuchón y se desecha más tarde", "Se desinfecta y se usa para la segunda perforación"], "Eliminación correcta en el contenedor para objetos punzantes.", "S. 5"],
        ["¿Qué queda en el canal de la perforación tras perforar?", ["La vaina de plástico (el tubito)", "La aguja de acero", "La aguja junto con la vaina", "El tubo receptor"], "En el tubito se introduce la joya.", "S. 5"],
        ["¿Cómo introduces la joya en el canal de la perforación?", ["La empujo a través del tubito", "La arrastro tirando detrás del tubito", "La enrosco sin tubito", "La introduzco sobre la aguja de acero aún colocada"], "Empujar, no tirar.", "S. 5"],
        ["¿Por qué no se tira de la joya?", ["El riesgo de que se escape sería demasiado grande", "Tirar produce fricción que raya la joya", "Al tirar, el tubito siempre se queda atascado", "Tirar solo está permitido con aros"], "Frase clave del cap. 2.2.", "S. 5"]
      ]
    },
    {
      titel: "Higiene, cuidado y cicatrización",
      seite: "S. 5–6",
      inhalt: [
        { typ: "text", text: "Al perforar y durante el cuidado posterior hay que mantener una higiene suficiente; de lo contrario, el piercing puede inflamarse. La sala de piercing debe mantenerse limpia y estéril como un quirófano de hospital, y los instrumentos deben estar estériles." },
        { typ: "ergaenzung", text: "En sentido estricto, una sala no se puede esterilizar. Lo que se quiere decir es: la sala está limpia y desinfectada de forma higiénicamente impecable, y todo lo que entra en contacto con el canal de la perforación es estéril." },
        { typ: "text", text: "Es obligatorio que informes al cliente sobre el cuidado correcto y los tiempos de cicatrización. Durante unas dos semanas, el propio cliente debe limpiar el piercing nuevo dos o tres veces al día con un producto adecuado, por ejemplo, solución salina, Prontolind u Octenisept." },
        { typ: "achtung", text: "Nunca recomiendes Octenisept en piercings de cartílago. Contiene octenidina, que en estudios de laboratorio daña las células del cartílago. Prontolind (principio activo polihexanida), en cambio, sí puedes recomendarlo también en piercings de cartílago." },
        { typ: "text", text: "La joya no debe cambiarse hasta varios meses después de la perforación. Un cambio demasiado temprano puede alterar la cicatrización y provocar infecciones." }
      ],
      fragen: [
        ["¿Con qué compara el libro del curso la sala de piercing?", ["Con un quirófano de hospital", "Con una consulta dental", "Con un laboratorio", "Con un centro de estética"], "Debe mantenerse limpia y estéril.", "S. 5"],
        ["¿Durante cuánto tiempo aproximado debe limpiarse un piercing nuevo?", ["Unas 2 semanas, 2 o 3 veces al día", "Unas 2 semanas, una vez al día", "Hasta la cicatrización completa, cada hora", "Durante 3 días, 5 veces al día"], "Lo hace el propio cliente, con un producto adecuado.", "S. 6"],
        ["¿Qué producto de cuidado nunca debe recomendarse en piercings de cartílago?", ["Octenisept", "Prontolind", "Solución salina", "Solución salina estéril en espray"], "Octenisept contiene octenidina, que daña las células del cartílago. Prontolind está permitido en cartílago.", "S. 6"],
        ["¿Durante cuánto tiempo no debe cambiarse la joya tras la perforación?", ["Hasta varios meses, hasta la cicatrización completa", "Unas 2 semanas, hasta que termina el cuidado", "Hasta que desaparece el enrojecimiento", "Solo durante los 3 primeros días"], "Un cambio temprano puede provocar infecciones.", "S. 6"],
        ["Caso: Una clienta con un helix recién hecho pregunta si puede usar Octenisept para el cuidado. ¿Qué le respondes?", ["No, en cartílago no; le recomiendo solución salina o Prontolind", "Sí, diluido es adecuado para el cartílago", "Sí, si solo lo usa por la noche", "Sí, pero solo la primera semana"], "El helix es cartílago; la octenidina es tóxica para el cartílago. Prontolind está permitido.", "S. 6"]
      ]
    },
    {
      titel: "Por qué no usar pistola de perforar orejas",
      seite: "S. 6",
      inhalt: [
        { typ: "text", text: "Todavía hoy hay joyerías que ofrecen perforaciones de orejas o de nariz hechas con una pistola de perforar orejas. Por principio, no es recomendable en absoluto." },
        { typ: "liste", titel: "Los motivos", punkte: [
          "Con esta técnica, el tejido cutáneo puede desgarrarse e incluso el cartílago puede astillarse.",
          "Las pistolas no se pueden esterilizar por completo.",
          "Al disparar, los gérmenes salen despedidos por la sala.",
          "Según el material, las joyas iniciales utilizadas van de inadecuadas a peligrosas para el cliente."
        ] },
        { typ: "grafik", id: "pistole", titel: "Pistola o cánula: qué ocurre en el tejido" },
        { typ: "ergaenzung", text: "Nota de la Academia: El pendiente de la pistola es romo y se introduce a presión en el tejido mediante la fuerza de un muelle. El tejido no se corta, sino que se desplaza y se aplasta; esto supone más hinchazón y una cicatrización más lenta. Además, el pendiente es corto y el cierre queda muy ajustado, de modo que no queda espacio para la hinchazón. La cánula corta un canal liso con su bisel afilado, viene en envase estéril y se usa una sola vez." },
        { typ: "praxis", text: "Si llega un cliente con un agujero hecho con pistola que no cicatriza, explícale de forma objetiva por qué el método no es adecuado y asesóralo sobre el cuidado. No hace falta hablar mal de colegas; bastan los hechos." }
      ],
      fragen: [
        ["¿Por qué la pistola de perforar orejas no tiene cabida en el estudio?", ["El tejido puede desgarrarse, no se puede esterilizar del todo y esparce gérmenes", "Está expresamente prohibida en Alemania", "Solo funciona en el lóbulo", "Solo se puede cargar con joyas de acero"], "A esto se suman joyas iniciales inadecuadas.", "S. 6"],
        ["¿Qué puede ocurrirle al cartílago al disparar?", ["Puede astillarse", "Puede deformarse y ablandarse", "Se calcifica en el punto de perforación", "Forma de inmediato hipergranulación"], "El tejido cutáneo puede desgarrarse y el cartílago, astillarse.", "S. 6"],
        ["¿Qué ocurre con los gérmenes al disparar con la pistola?", ["Salen despedidos por la sala", "Mueren por el calor de la fricción", "Se quedan en el cartucho desechable", "Quedan sellados por el pendiente"], "Además, la pistola no se puede esterilizar por completo.", "S. 6"],
        ["¿Qué es cierto sobre las joyas iniciales de la pistola de perforar orejas?", ["Según el material, van de inadecuadas a peligrosas", "Siempre cumplen la norma ASTM F136", "Siempre tienen 4 mm de longitud extra", "Son de PTFE"], "Los pendientes de pistola suelen ser de material inadecuado y no tienen longitud extra; según el material, de inadecuados a peligrosos.", "S. 6"]
      ]
    },
    {
      titel: "Preparación del cliente",
      seite: "S. 6",
      inhalt: [
        { typ: "text", text: "Durante las 24 horas previas a la perforación, el cliente no debe consumir alcohol, drogas, cafeína ni medicamentos anticoagulantes (por ejemplo, aspirina/AAS). Estas sustancias pueden afectar a la circulación y a la coagulación de la sangre." },
        { typ: "ergaenzung", text: "El AAS (aspirina) inhibe las plaquetas de forma permanente: tras una sola pastilla, el efecto dura unos 7 a 10 días, hasta que se forman plaquetas nuevas. Por tanto, una pausa de 24 horas no elimina el efecto. Quien haya tomado AAS en la semana anterior a la cita puede sangrar más." },
        { typ: "ergaenzung", text: "El cliente no debe dejar por su cuenta los anticoagulantes recetados por el médico (por ejemplo, Marcumar o Xarelto). Quien tome estos medicamentos debe consultar antes el piercing con su médico. En caso de duda, no se perfora." },
        { typ: "praxis", text: "Díselo ya al dar la cita. Así el cliente llega preparado y no tienes que mandar a nadie de vuelta a casa." }
      ],
      fragen: [
        ["¿Qué debe evitar el cliente durante las 24 horas previas a la perforación?", ["Alcohol, drogas, cafeína y medicamentos anticoagulantes", "Alcohol y deporte; la cafeína está permitida", "Solo alcohol y drogas", "Alimentos sólidos y bebidas"], "Estas sustancias influyen en la circulación y la coagulación.", "S. 6"],
        ["¿Cuál de estos es un anticoagulante?", ["Aspirina (AAS)", "Paracetamol", "Magnesio", "Vitamina C"], "Los anticoagulantes afectan a la coagulación.", "S. 6"],
        ["¿Cuánto tiempo antes de la perforación debe el cliente renunciar a la cafeína?", ["24 horas", "2 horas", "48 horas", "1 semana"], "Igual que al alcohol, las drogas y los anticoagulantes.", "S. 6"],
        ["Caso: Un cliente toma a diario un anticoagulante recetado por su médico. ¿Qué haces?", ["Que consulte antes el piercing con su médico; en caso de duda, no perforo", "Que deje el medicamento 24 horas antes", "Perforo con una cánula más fina", "Perforo y después presiono durante más tiempo"], "Nunca dejar por cuenta propia un medicamento recetado.", "Ergänzung"]
      ]
    }
  ],
  uebung: [
    "Explica a una amiga en dos frases qué significa la palabra «piercing».",
    "Enumera tres motivos por los que en el estudio no se usa pistola de perforar orejas.",
    "Anota qué debe evitar un cliente durante las 24 horas previas a la cita."
  ]
});
