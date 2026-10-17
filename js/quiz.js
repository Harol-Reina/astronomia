// =========================================================
// QUIZ DEL SISTEMA SOLAR
// Aquí están las 12 preguntas del juego y lo que hace el botón
// "¡Revisar mis respuestas!".
//
// ¿Quieres cambiar una pregunta? Solo edita la lista PREGUNTAS:
//   texto      -> la pregunta
//   opciones   -> las respuestas que se pueden escoger (3 o 4)
//   correcta   -> el número de la respuesta buena. ¡OJO! Se empieza a
//                 contar desde 0: la primera opción es 0, la segunda es 1,
//                 la tercera es 2 y la cuarta es 3.
//   explicacion -> lo que aparece después de revisar
//   repaso     -> la página donde se aprende ese tema
// =========================================================

const PREGUNTAS = [
  {
    texto: "¿Qué es el Sol?",
    opciones: ["Un planeta muy caliente", "Una estrella", "Una bola de fuego que se va a apagar mañana", "Un cometa gigante"],
    correcta: 1,
    explicacion: "El Sol es una estrella, como las que vemos de noche. Se ve más grande y brillante porque es la estrella que está más cerca de nosotros.",
    repaso: { pagina: "sol.html", nombre: "El Sol" },
  },
  {
    texto: "¿Cuál lista tiene los planetas en el orden correcto, del más cercano al Sol al más lejano?",
    opciones: [
      "Mercurio, Tierra, Venus, Marte",
      "Venus, Mercurio, Marte, Tierra",
      "Mercurio, Venus, Tierra, Marte",
    ],
    correcta: 2,
    explicacion: "El orden es Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Truco: «Mi Vieja Tía María Jamás Suele Usar Naranjas».",
    repaso: { pagina: "planetas.html", nombre: "Los planetas" },
  },
  {
    texto: "¿Cuál es el planeta más grande del Sistema Solar?",
    opciones: ["Júpiter", "Saturno", "La Tierra", "Neptuno"],
    correcta: 0,
    explicacion: "Júpiter es el más grande. Dentro de Júpiter cabrían más de 1.000 Tierras. Saturno es el segundo más grande.",
    repaso: { pagina: "tamanos.html", nombre: "Tamaños y distancias" },
  },
  {
    texto: "¿Qué es Plutón?",
    opciones: ["El noveno planeta", "Una luna de Neptuno", "Una estrella pequeña", "Un planeta enano"],
    correcta: 3,
    explicacion: "Desde 2006 Plutón es un planeta enano. Vive en el Cinturón de Kuiper, más allá de Neptuno, con muchos otros objetos helados.",
    repaso: { pagina: "planetas.html", nombre: "Los planetas" },
  },
  {
    texto: "¿Por qué hay día y noche?",
    opciones: [
      "Porque el Sol se apaga en la noche",
      "Porque la Tierra gira sobre sí misma (rotación)",
      "Porque la Luna tapa al Sol todas las noches",
      "Porque la Tierra le da la vuelta al Sol cada día",
    ],
    correcta: 1,
    explicacion: "La Tierra gira como un trompo. Da una vuelta completa en unas 24 horas. El lado que mira al Sol tiene día y el otro lado tiene noche.",
    repaso: { pagina: "tierra-luna.html", nombre: "Tierra y Luna" },
  },
  {
    texto: "¿Cuánto se demora la Tierra en darle una vuelta completa al Sol (traslación)?",
    opciones: ["Unas 24 horas", "Un mes", "Unos 365 días, o sea, un año"],
    correcta: 2,
    explicacion: "La traslación dura unos 365 días (un año). ¡Cada vez que cumples años, la Tierra le dio otra vuelta al Sol!",
    repaso: { pagina: "tierra-luna.html", nombre: "Tierra y Luna" },
  },
  {
    texto: "¿Qué causa las estaciones (verano, otoño, invierno y primavera)?",
    opciones: [
      "Que el eje de la Tierra está inclinado",
      "Que a veces la Tierra está más cerca del Sol y a veces más lejos",
      "Que el Sol a veces brilla más y a veces menos",
    ],
    correcta: 0,
    explicacion: "Las estaciones pasan porque el eje de la Tierra está inclinado, NO por la distancia. Prueba: la Tierra está más cerca del Sol en enero, ¡y en el norte es invierno! En Colombia, cerca del ecuador, más bien tenemos temporadas de lluvias y temporadas secas.",
    repaso: { pagina: "tierra-luna.html", nombre: "Tierra y Luna" },
  },
  {
    texto: "¿Por qué brilla la Luna en la noche?",
    opciones: [
      "Porque tiene su propia luz, como una linterna",
      "Porque tiene fuego por dentro",
      "Porque refleja la luz del Sol",
      "Porque le llegan las luces de las ciudades",
    ],
    correcta: 2,
    explicacion: "La Luna no tiene luz propia. Refleja la luz del Sol, como un espejo. Por eso vemos sus fases: según dónde esté, vemos más o menos de su parte iluminada.",
    repaso: { pagina: "tierra-luna.html", nombre: "Tierra y Luna" },
  },
  {
    texto: "Si viajas a la Luna, ¿qué pasa con tu masa y tu peso?",
    opciones: [
      "Tu masa sigue igual y tu peso es menor",
      "Tu masa y tu peso se vuelven más pequeños",
      "Tu peso sigue igual y tu masa es menor",
      "Los dos quedan exactamente iguales",
    ],
    correcta: 0,
    explicacion: "La masa es cuánta materia tienes y no cambia en ningún lugar. El peso es la fuerza con que la gravedad te jala. En la Luna la gravedad es más débil, así que pesas mucho menos (más o menos la sexta parte).",
    repaso: { pagina: "peso.html", nombre: "¿Cuánto pesarías?" },
  },
  {
    texto: "Los dibujos de los libros casi nunca están a escala, porque las distancias son enormes. Por eso los astrónomos usan la Unidad Astronómica (UA). ¿Cuánto es 1 UA?",
    opciones: [
      "La distancia de la Tierra a la Luna",
      "La distancia de la Tierra al Sol: unos 150 millones de kilómetros",
      "Lo que mide la Tierra de lado a lado",
      "La distancia del Sol a Neptuno",
    ],
    correcta: 1,
    explicacion: "1 UA es la distancia promedio de la Tierra al Sol, unos 150 millones de kilómetros. Neptuno está a unas 30 UA. ¡En un dibujo a escala los planetas serían puntitos casi invisibles!",
    repaso: { pagina: "tamanos.html", nombre: "Tamaños y distancias" },
  },
  {
    texto: "En la leyenda muisca, ¿en qué se convirtió el cacique de Ramiriquí?",
    opciones: ["En la Luna", "En el Sol", "En una estrella fugaz", "En la lluvia"],
    correcta: 1,
    explicacion: "Según una versión que escribió el cronista fray Pedro Simón, el cacique de Ramiriquí subió al cielo y se convirtió en el Sol. Después, el cacique de Sogamoso subió y se convirtió en la Luna.",
    repaso: { pagina: "leyendas.html", nombre: "Leyendas" },
  },
  {
    texto: "¿Qué objeto del espacio lleva el nombre de Juyá, de la leyenda wayuu?",
    opciones: [
      "Una luna de Júpiter",
      "Un cometa que pasa cada año",
      "Un objeto del Cinturón de Kuiper llamado Huya",
      "Una estrella de La Guajira",
    ],
    correcta: 2,
    explicacion: "Huya es un objeto helado del Cinturón de Kuiper, más allá de Neptuno. Su nombre viene de Juyá, la lluvia para el pueblo wayuu (en inglés se escribe «Huya»). Lo descubrieron en el año 2000 desde un observatorio de Venezuela, y su nombre se aprobó en 2003.",
    repaso: { pagina: "leyendas.html", nombre: "Leyendas" },
  },
];

// ---------------------------------------------------------
// FUNCIONES QUE CUENTAN LOS PUNTOS
// (no tocan la página, solo hacen cuentas)
// ---------------------------------------------------------

// Recibe una lista con lo que escogió el jugador en cada pregunta.
// Si no respondió una pregunta, ahí va "null".
// Devuelve cuántas buenas, cuántas malas y cuántas sin responder.
function contarPuntos(respuestas) {
  let buenas = 0;
  let malas = 0;
  let sinResponder = 0;
  PREGUNTAS.forEach(function (pregunta, numero) {
    const escogida = respuestas[numero];
    if (escogida === null || escogida === undefined) {
      sinResponder = sinResponder + 1;
    } else if (escogida === pregunta.correcta) {
      buenas = buenas + 1;
    } else {
      malas = malas + 1;
    }
  });
  return { buenas: buenas, malas: malas, sinResponder: sinResponder };
}

// Escoge el mensaje final según cuántas buenas sacaste.
function mensajeFinal(buenas) {
  const total = PREGUNTAS.length;
  // Los mensajes usan partes del total (80 % y 50 %), así sirven
  // aunque se agreguen o se quiten preguntas.
  if (buenas === total) return "🚀 ¡Eres astronauta! Te sabes todo el Sistema Solar.";
  if (buenas >= Math.ceil(total * 0.8)) return "🛰️ ¡Casi astronauta! Te faltó muy poquito.";
  if (buenas >= Math.ceil(total * 0.5)) return "🔭 ¡Vas muy bien, explorador o exploradora! Repasa las que fallaste.";
  return "🌱 ¡Sigue explorando! Lee otra vez las páginas y vuelve a intentarlo. ¡Tú puedes!";
}

// ---------------------------------------------------------
// PARTE QUE DIBUJA EL QUIZ EN LA PÁGINA
// (solo funciona dentro del navegador)
// ---------------------------------------------------------

// Crea una etiqueta HTML con un texto adentro.
function crear(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);
  if (clase) elemento.className = clase;
  if (texto) elemento.textContent = texto;
  return elemento;
}

// Dibuja todas las preguntas dentro del formulario.
function dibujarPreguntas(contenedor) {
  PREGUNTAS.forEach(function (pregunta, numero) {
    const caja = crear("div", "pregunta");
    const grupo = crear("fieldset");
    grupo.appendChild(crear("legend", "", (numero + 1) + ". " + pregunta.texto));

    pregunta.opciones.forEach(function (opcion, posicion) {
      // Cada opción es un círculo (radio) con su etiqueta.
      // Todas las opciones de una pregunta tienen el mismo "name",
      // así solo se puede escoger una.
      const etiqueta = crear("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "pregunta-" + numero;
      radio.value = String(posicion);
      etiqueta.appendChild(radio);
      etiqueta.appendChild(document.createTextNode(" " + opcion));
      grupo.appendChild(etiqueta);
    });

    // Aquí aparecerá si quedó bien o mal (empieza vacío y escondido).
    const resultado = crear("div", "resultado-pregunta");
    resultado.hidden = true;
    grupo.appendChild(resultado);

    caja.appendChild(grupo);
    contenedor.appendChild(caja);
  });
}

// Mira qué opción escogió el jugador en cada pregunta.
function leerRespuestas(formulario) {
  return PREGUNTAS.map(function (pregunta, numero) {
    const marcada = formulario.querySelector('input[name="pregunta-' + numero + '"]:checked');
    return marcada ? Number(marcada.value) : null;
  });
}

// Quita los colores y mensajes de una revisión anterior.
function limpiarMarcas(formulario) {
  formulario.querySelectorAll(".correcta, .incorrecta").forEach(function (el) {
    el.classList.remove("correcta", "incorrecta");
  });
  formulario.querySelectorAll(".resultado-pregunta").forEach(function (el) {
    el.textContent = "";
    el.hidden = true;
  });
}

// Revisa todo, pinta cada pregunta y muestra el puntaje.
function revisar(formulario, cajaPuntaje) {
  limpiarMarcas(formulario);
  const respuestas = leerRespuestas(formulario);
  const cajas = formulario.querySelectorAll(".pregunta");

  PREGUNTAS.forEach(function (pregunta, numero) {
    const caja = cajas[numero];
    const etiquetas = caja.querySelectorAll("label");
    const resultado = caja.querySelector(".resultado-pregunta");
    const escogida = respuestas[numero];

    // La respuesta buena siempre se pinta de verde.
    etiquetas[pregunta.correcta].classList.add("correcta");

    const titulo = crear("p");
    if (escogida === null) {
      titulo.textContent = "🤔 Esta te faltó. ¡No pasa nada! Mira la respuesta:";
    } else if (escogida === pregunta.correcta) {
      titulo.textContent = "✅ ¡Correcto!";
      titulo.className = "correcta";
    } else {
      titulo.textContent = "❌ Esta no era. La buena está en verde.";
      titulo.className = "incorrecta";
      etiquetas[escogida].classList.add("incorrecta");
    }

    const explicacion = crear("p", "", pregunta.explicacion + " ");
    const enlace = crear("a", "", "Repasa en «" + pregunta.repaso.nombre + "»");
    enlace.href = pregunta.repaso.pagina;
    explicacion.appendChild(enlace);

    resultado.appendChild(titulo);
    resultado.appendChild(explicacion);
    resultado.hidden = false;
  });

  // Puntaje final.
  const puntos = contarPuntos(respuestas);
  let texto = "Sacaste " + puntos.buenas + " de " + PREGUNTAS.length + ". " + mensajeFinal(puntos.buenas);
  if (puntos.sinResponder === 1) {
    texto = texto + " (Te faltó responder 1 pregunta.)";
  } else if (puntos.sinResponder > 1) {
    texto = texto + " (Te faltaron " + puntos.sinResponder + " preguntas por responder.)";
  }
  cajaPuntaje.textContent = texto;
  cajaPuntaje.hidden = false;
  cajaPuntaje.focus();
}

// Borra todo para jugar otra vez.
function reiniciar(formulario, cajaPuntaje) {
  formulario.reset();
  limpiarMarcas(formulario);
  cajaPuntaje.textContent = "";
  cajaPuntaje.hidden = true;
  formulario.querySelector("input").focus();
}

// Arranca el quiz cuando el navegador ya cargó la página.
if (typeof document !== "undefined") {
  const formulario = document.getElementById("quiz");
  const zonaPreguntas = document.getElementById("quiz-preguntas");
  const cajaPuntaje = document.getElementById("quiz-puntaje");
  const botonOtraVez = document.getElementById("quiz-otra-vez");

  if (formulario && zonaPreguntas && cajaPuntaje && botonOtraVez) {
    dibujarPreguntas(zonaPreguntas);
    formulario.hidden = false;

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); // que la página no se recargue
      revisar(formulario, cajaPuntaje);
    });
    botonOtraVez.addEventListener("click", function () {
      reiniciar(formulario, cajaPuntaje);
    });
  }
}

// Esto solo sirve para probar las cuentas en el computador con "node".
// En el navegador no hace nada.
if (typeof module !== "undefined") {
  module.exports = { PREGUNTAS, contarPuntos, mensajeFinal };
}
