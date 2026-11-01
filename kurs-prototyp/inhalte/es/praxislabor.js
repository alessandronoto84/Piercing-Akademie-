/* Laboratorio de práctica: ejercicios en el modelo de práctica de silicona con autocontrol.
   Base: procedimiento del módulo 09 (pasos 1–26, libro del curso págs. 111–112), listas de control del módulo 05 y el ejercicio del módulo 08
   («Practica en la oreja de silicona: marcar la zona, colocar la pinza, posicionar la cánula (sin perforar)»).
   Aquí nunca se perfora: eso queda reservado para el día de práctica bajo supervisión.
   Formato: { id, titel, modul (referencia), material: [...], schritte: [...], kontrolle: [...] } */
window.KURS = window.KURS || { module: [] };
window.KURS.labor = {
  einleitung: "Aquí practicas los movimientos que necesitarás el día de práctica. La parte 1 son ejercicios en seco sin perforar: en el modelo de práctica de silicona, en papel y en el puesto de trabajo. En la parte 2, unos clips te muestran cómo se perfora; con el paquete Completo, allí perforas tú mismo la oreja de silicona con el kit de práctica. Cada ejercicio tiene un autocontrol. Marca solo lo que de verdad hayas conseguido. Lleva la plantilla de práctica rellenada al día de práctica.",
  sicherheit: [
    "En los ejercicios en seco no se perfora. Solo perforas la oreja de silicona con el kit de práctica del paquete Completo. Nunca perforas a personas ni a animales; eso lo aprendes el día de práctica bajo supervisión.",
    "Usa las cánulas solo como ejercicio en seco, con el capuchón protector puesto. Las cánulas usadas o destapadas van de inmediato al contenedor para objetos punzantes.",
    "El curso online y el laboratorio de práctica no sustituyen la formación práctica supervisada."
  ],
  material: "Modelo de práctica de silicona (por ejemplo, una oreja de silicona o piel de práctica de un proveedor especializado en material de piercing y tatuaje; el paquete Completo incluye un kit de práctica), marcador cutáneo desechable, regla con escala milimétrica, pinza, cánula con capuchón protector, empapador desechable, guantes y la plantilla de práctica para imprimir.",
  aufgaben: [
    {
      id: "arbeitsplatz",
      titel: "Montar el puesto de trabajo",
      modul: 5,
      material: ["Empapador desechable", "Todo lo de la lista de control «Puesto de trabajo antes de cada cliente» (en la medida en que lo tengas; si no, sustitutos con etiqueta)"],
      schritte: [
        "Lavarse las manos y secarlas por completo; quitarse las joyas de manos y antebrazos.",
        "Cubrir la superficie de trabajo con el empapador desechable.",
        "Preparar todo lo de la lista de control «Puesto de trabajo antes de cada cliente» sin mirar la lista.",
        "En cada envase de material estéril, practicar la revisión: envase intacto, indicador virado, plazo de almacenamiento respetado.",
        "Hacer una foto desde arriba y compararla con la lista de control. Repetir tres veces."
      ],
      kontrolle: [
        "En el tercer montaje no faltaba nada de la lista de control.",
        "El contenedor para objetos punzantes está al alcance.",
        "No hay nada sobre una superficie sin proteger.",
        "De cada envase de material estéril puedo decir en qué me he fijado."
      ]
    },
    {
      id: "haende",
      titel: "Preparar las manos y ponerse los guantes",
      modul: 5,
      material: ["Desinfectante de manos", "Guantes desechables de tu talla"],
      schritte: [
        "Uñas cortas, sin esmalte, ninguna joya en manos y antebrazos.",
        "Desinfectar las manos como se describe en el módulo 05; el tiempo de actuación figura en el desinfectante.",
        "Esperar a que las manos estén completamente secas.",
        "Ponerse los guantes sin tocar el exterior con la mano desnuda más de lo necesario.",
        "Quitarse los guantes sin que el exterior toque la piel y desecharlos. Después, desinfectarse las manos."
      ],
      kontrolle: [
        "Tenía las manos secas antes de ponerme los guantes.",
        "He leído el tiempo de actuación en la etiqueta y lo he respetado.",
        "Al quitármelos, el exterior no me ha tocado la piel.",
        "Puedo explicar por qué no basta con cambiar de guantes sin desinfectarse las manos."
      ]
    },
    {
      id: "anzeichnen-papier",
      titel: "Marcar sobre papel",
      modul: 9,
      material: ["Plantilla de práctica (página 1)", "Marcador cutáneo desechable o rotulador fino", "Regla"],
      schritte: [
        "Imprimir la plantilla de práctica a tamaño original (100 %, no «ajustar a la página»). El segmento de control debe medir exactamente 100 mm.",
        "En cada fila, medir el par de puntos indicado y copiarlo a la derecha sobre la línea.",
        "En el ejercicio de simetría, reflejar los puntos de la izquierda en el lado derecho: misma distancia a la línea central, misma altura.",
        "Solo cuando todo esté dibujado, medir y anotar la desviación en milímetros."
      ],
      kontrolle: [
        "Mis puntos son pequeños y nítidos, no una mancha grande.",
        "En todos los pares me desvío como máximo 1 mm.",
        "En el ejercicio de simetría, todos los puntos reflejados se desvían como máximo 1 mm.",
        "He anotado las desviaciones en la plantilla."
      ]
    },
    {
      id: "anzeichnen-modell",
      titel: "Marcar en el modelo de práctica",
      modul: 8,
      material: ["Modelo de práctica de silicona", "Marcador cutáneo desechable", "Fichas técnicas del módulo 08"],
      schritte: [
        "Leer las fichas técnicas de lobe, helix y tragus en el módulo 08.",
        "Marcar en el modelo los puntos de entrada y de salida de cada uno de estos piercings (procedimiento, paso 9).",
        "En lobe en ambos lados: marcar los lóbulos izquierdo y derecho a la misma altura y comprobarlo de frente, por ejemplo con una foto.",
        "Pedir a alguien que mire la marca como si fuera el cliente (paso 10) y corregirla si hace falta."
      ],
      kontrolle: [
        "Cada marca coincide con la ficha técnica del módulo 08.",
        "En lobe en ambos lados, los dos puntos están a la misma altura en la foto de frente.",
        "He mostrado la marca y he explicado por qué está ahí.",
        "Sé qué hacer si al cliente no le gusta la marca."
      ]
    },
    {
      id: "klemme-kanuele",
      titel: "Colocar la pinza y posicionar la cánula, sin perforar",
      modul: 8,
      material: ["Modelo de práctica de silicona con la marca del ejercicio 4", "Pinza o tubo receptor", "Cánula con el capuchón protector puesto"],
      schritte: [
        "Ponerse los guantes (ejercicio 2).",
        "Colocar la pinza en la marca (procedimiento, paso 11) de modo que los puntos de entrada y de salida queden en la abertura.",
        "Posicionar la cánula con capuchón en el punto de entrada, en dirección al punto de salida, desde el lado visible (paso 12). No perforar.",
        "Decir en voz alta lo que vendría a continuación: pasos 13 a 19 del módulo 09.",
        "Soltar la pinza, dejar la cánula con capuchón. Repetir cinco veces, también en otras zonas."
      ],
      kontrolle: [
        "Cada vez, las marcas quedaban en la abertura de la pinza.",
        "La cánula apuntaba en línea recta al punto de salida desde el lado visible.",
        "El capuchón protector se ha quedado puesto en la cánula todo el tiempo.",
        "He podido decir los pasos 13 a 19 en el orden correcto."
      ]
    },
    {
      id: "ablauf",
      titel: "Todo el procedimiento de memoria",
      modul: 9,
      material: ["Plantilla de práctica (página 2) o una hoja en blanco"],
      schritte: [
        "Escribir de memoria los 26 pasos del procedimiento del módulo 09.",
        "Compararlos con el módulo 09 y completar en rojo lo que falte.",
        "Repetirlo al día siguiente hasta que todo esté bien sin rojo.",
        "Explicar en voz alta las instrucciones de cuidado (pasos 24 y 25) a otra persona como si fuera tu cliente."
      ],
      kontrolle: [
        "Los 26 pasos son correctos y están en el orden correcto.",
        "Puedo explicar por qué la joya se empuja a través del canal de la perforación y no se tira de ella (paso 16).",
        "He explicado las instrucciones de cuidado sin chuleta."
      ]
    },
    {
      id: "notfall",
      titel: "Simular una emergencia",
      modul: 9,
      material: ["Lista de control «Tras un pinchazo con aguja»", "Módulo 09, lección «Problemas circulatorios y emergencias»"],
      schritte: [
        "Simularlo con una segunda persona: durante la preparación, el «cliente» se pone pálido y dice que se marea. ¿Qué haces, paso a paso?",
        "Después, compararlo con la lección «Problemas circulatorios y emergencias» del módulo 09.",
        "Recitar de memoria la lista de control «Tras un pinchazo con aguja» y comparar."
      ],
      kontrolle: [
        "He reaccionado correctamente sin consultar nada.",
        "Sé dónde están el botiquín de primeros auxilios y el teléfono en mi sala de práctica, y conozco el número de emergencias 112.",
        "He podido recitar completa la lista de control tras un pinchazo con aguja."
      ]
    }
  ]
};

/* Ejercicios de perforación en la oreja de silicona: solo se perfora uno mismo con el paquete Completo (kit de práctica de la Academia).
   Todos los demás ven los mismos ejercicios en modo «solo mirar»: clip y procedimiento, sin autocontrol.
   Se perfora exclusivamente en silicona. Procedimiento según el libro del curso págs. 111–112 (pasos 9–19), valores de las fichas técnicas (módulo 08).
   clip: id de un clip en inhalte/clips.js. Si el clip todavía falta, los participantes no ven nada; en el modo de revisión aparece un aviso.
   Lista de rodaje de los clips: CLIPS-PRAXISLABOR.md en la carpeta principal. */
window.KURS.labor.stich = {
  pakete: ["komplett"],
  einleitung: "Con tu kit de práctica, ahora perforas tú mismo: en la oreja de silicona, siguiendo el procedimiento del módulo 09 y las fichas técnicas del módulo 08. Mira primero el clip y después practica. Lleva tu oreja de silicona perforada y el registro de práctica al día de práctica: allí revisaremos juntos tus canales de perforación.",
  zuschauen: "En estos clips ves cómo se perfora: en la oreja de silicona, paso a paso, siguiendo el procedimiento del módulo 09 y las fichas técnicas del módulo 08. Fíjate bien y repite los pasos en voz alta. A perforar tú mismo aprendes el día de práctica bajo supervisión; con el paquete Completo practicas antes en casa con el kit de práctica.",
  sicherheit: [
    "Solo se perfora en la oreja de silicona. Nunca en ti, en otras personas ni en animales, ni siquiera «solo para probar».",
    "Nunca vuelvas a meter las cánulas en el capuchón protector. La aguja de acero va directamente al contenedor para objetos punzantes después de retirarla; el contenedor lleno se cierra bien y se desecha con los residuos generales.",
    "Trabaja con guantes sobre un empapador desechable, sin distracciones y fuera del alcance de los niños. Guarda las cánulas y el contenedor bajo llave.",
    "Si a pesar de todo te pinchas, se aplica la lista de control «Tras un pinchazo con aguja» del módulo 05."
  ],
  set: ["Oreja de silicona", "Cánulas intravenosas 18G y 16G", "Contenedor pequeño para objetos punzantes", "Pinza (Snaptile o pinza de gasa)", "Marcador cutáneo desechable", "Guantes desechables y empapador desechable", "Joyas de práctica: labret, BCR (aro de bola cautiva), barbell de 38 mm", "Tijeras para la vaina de plástico"],
  aufgaben: [
    {
      id: "stich-kanuele",
      titel: "Manejar la cánula con seguridad",
      modul: 7,
      clip: "labor-kanuele",
      clipText: "Sacar la cánula del envase, quitar el capuchón protector y, después de perforar, llevar la aguja de acero directamente al contenedor.",
      material: ["Cánula 18G", "Contenedor para objetos punzantes", "Guantes"],
      schritte: [
        "Colocar el contenedor de forma que lo alcances con la mano de trabajo sin cambiar el agarre.",
        "Sacar la cánula del envase sin tocar la aguja. Retirar el capuchón protector en línea recta y dejarlo a un lado.",
        "Sujetar la cánula por el mango y perforar la silicona (en cualquier sitio, solo para practicar el movimiento).",
        "Retirar la aguja de acero por el mango; la vaina de plástico se queda en la silicona. La aguja, de inmediato al contenedor.",
        "Repetir tres veces hasta que el movimiento, del envase al desecho, salga con fluidez."
      ],
      kontrolle: [
        "No he vuelto a poner el capuchón protector ni una sola vez.",
        "Al retirarla, la aguja ha ido de inmediato al contenedor, nunca a la mesa.",
        "La vaina de plástico se ha quedado en la silicona cada vez."
      ]
    },
    {
      id: "stich-lobe",
      titel: "Perforar un lobe y colocar un labret",
      modul: 9,
      clip: "labor-lobe",
      clipText: "Lobe en la oreja de silicona: marcar, pinza, perforar con 18G, retirar la aguja, recortar la vaina, empujar el labret, enroscar la bola.",
      material: ["Oreja de silicona", "Cánula 18G", "Pinza", "Marcador cutáneo", "Tijeras", "Labret", "Pinza de sujeción"],
      schritte: [
        "Marcar los puntos de entrada y de salida en el lóbulo (paso 9) y comprobar la marca (paso 10).",
        "Colocar la pinza; la marca queda en la ventana (paso 11).",
        "Perforar con decisión hacia el lado visible, es decir, desde delante, donde después irá la bola (paso 12).",
        "Retirar la aguja de acero y desecharla; la vaina de plástico se queda en el canal de la perforación (paso 13).",
        "Recortar un poco la vaina con las tijeras e introducir el labret en ella (pasos 14 y 15).",
        "Empujar el labret a través del canal de la perforación, no tirar (paso 16). Retirar con cuidado el tubito (paso 17).",
        "Tomar la bola, sujetar la joya con la pinza de sujeción y enroscar la bola firmemente (pasos 18 y 19).",
        "Repetir tres veces en distintos puntos del lóbulo."
      ],
      kontrolle: [
        "La salida está como máximo a 1 mm de mi marca trasera.",
        "La barra atraviesa el lóbulo en línea recta, no inclinada.",
        "He empujado la joya, no he tirado de ella.",
        "La bola está bien firme y la placa queda plana por detrás."
      ]
    },
    {
      id: "stich-upperlobe",
      titel: "Upper lobe: tres perforaciones en fila",
      modul: 8,
      clip: "labor-upper-lobe",
      clipText: "Marcar tres puntos de upper lobe a la misma distancia, medirlos y perforarlos uno tras otro.",
      material: ["Oreja de silicona", "Tres cánulas 18G", "Pinza", "Marcador cutáneo", "Calibre o regla", "Tres labrets"],
      schritte: [
        "Marcar tres puntos en la parte superior del lóbulo a la misma distancia y comprobarlos con el calibre.",
        "Solo cuando las distancias sean correctas: perforar cada punto siguiendo el procedimiento del ejercicio anterior y colocarle un labret.",
        "Hacer una foto de frente y evaluar la fila."
      ],
      kontrolle: [
        "Las tres distancias difieren entre sí como máximo 1 mm.",
        "La fila sigue una línea uniforme; ninguno de los puntos se sale.",
        "Cada salida está como máximo a 1 mm de la marca trasera."
      ]
    },
    {
      id: "stich-helix",
      titel: "Helix con BCR (aro de bola cautiva)",
      modul: 8,
      clip: "labor-helix",
      clipText: "Perforar un helix en la oreja de silicona, colocar un aro de bola cautiva y cerrarlo.",
      material: ["Oreja de silicona", "Cánula 18G", "Pinza", "Marcador cutáneo", "Tijeras", "BCR (aro de bola cautiva)", "Pinza para abrir aros y pinza para cerrar aros"],
      schritte: [
        "Marcar el punto en el borde de la oreja (ficha técnica Helix, módulo 08) y fijarlo con la pinza.",
        "Perforar, retirar la aguja y desecharla, recortar la vaina.",
        "Abrir el aro con cuidado con la pinza para abrir aros, introducir un extremo en la vaina y empujarlo a través del canal de la perforación.",
        "Retirar el tubito, colocar la bola y cerrar el aro con la pinza para cerrar aros de modo que la bola encaje firmemente."
      ],
      kontrolle: [
        "El aro queda redondo y sin dobleces; no lo he sobreabierto.",
        "La bola encaja firmemente y no se sale al girar el aro.",
        "El canal de la perforación atraviesa en línea recta el cartílago de la oreja de silicona."
      ]
    },
    {
      id: "stich-industrial",
      titel: "Industrial: dos canales de perforación en una línea",
      modul: 8,
      clip: "labor-industrial",
      clipText: "Industrial en la oreja de silicona: marcar los dos puntos de modo que un barbell de 38 mm pase en línea recta y después perforar con 16G.",
      material: ["Oreja de silicona", "Dos cánulas 16G", "Marcador cutáneo", "Barbell de 38 mm"],
      schritte: [
        "Marcar los dos puntos en el borde superior de la oreja (ficha técnica Industrial): cerca de la cabeza y enfrente, en el borde exterior.",
        "Sostener el barbell de prueba sobre las marcas: debe unir ambos puntos en línea recta sin doblar la oreja.",
        "Perforar ambos puntos con la cánula 16G (a mano alzada, como en la ficha técnica). Desechar cada aguja de inmediato.",
        "Pasar el barbell por las dos vainas y enroscar las bolas."
      ],
      kontrolle: [
        "El barbell queda recto y no comprime el pabellón auricular.",
        "Los dos canales de perforación apuntan en la misma dirección; la barra se desliza sin forzar.",
        "He comprobado antes si las marcas encajan con la longitud de la joya."
      ]
    },
    {
      id: "stich-schmuck",
      titel: "Asegurar y cambiar joyas",
      modul: 7,
      clip: "labor-schmuck",
      clipText: "Enroscar una bola con la pinza para bolas y la pinza de sujeción, abrir y cerrar un aro de bola cautiva, cambiar joyas en la oreja de silicona.",
      material: ["Oreja de silicona con canales perforados", "Pinza para bolas", "Pinza de sujeción", "Pinza para abrir aros y pinza para cerrar aros", "Joyas de práctica"],
      schritte: [
        "Tomar una bola con la pinza para bolas y enroscarla en la barra que sujetas con la pinza de sujeción.",
        "Abrir un aro de bola cautiva, sacar la bola, volver a colocarla y cerrar el aro.",
        "En un canal de perforación ya hecho, cambiar el labret por un BCR y viceversa.",
        "Recuerda: con un cliente real, la joya inicial solo se cambia tras la cicatrización completa (módulo 10)."
      ],
      kontrolle: [
        "No se me ha caído ni ha salido disparada ninguna bola.",
        "El aro vuelve a estar redondo después de cerrarlo.",
        "Puedo explicar por qué con un cliente la joya inicial no se cambia pronto."
      ]
    },
    {
      id: "stich-ablauf",
      titel: "Todo el procedimiento en tiempo real",
      modul: 9,
      clip: "labor-ablauf",
      clipText: "El procedimiento completo en la oreja de silicona, desde el puesto de trabajo hasta las instrucciones de cuidado, a velocidad normal.",
      material: ["Kit de práctica completo", "Una segunda persona como «cliente»", "Formulario de consentimiento e instrucciones de cuidado (plantillas)"],
      schritte: [
        "Recorre el procedimiento del módulo 09 del paso 4 al 25: la segunda persona rellena el formulario de consentimiento y tú preparas el puesto de trabajo.",
        "Se perfora en la oreja de silicona colocada junto a la persona; todo lo demás (conversación, mostrar la marca, instrucciones de cuidado) lo haces con ella.",
        "Pide a la persona que controle el reloj y que al final diga qué le ha llamado la atención."
      ],
      kontrolle: [
        "No me he saltado ningún paso y he respetado el orden.",
        "Entre medias he preguntado cómo se encontraba (circulación).",
        "He explicado las instrucciones de cuidado de palabra y las he entregado por escrito."
      ]
    }
  ]
};
