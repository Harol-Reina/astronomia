// CALCULADORA: ¿CUÁNTO PESARÍAS EN OTROS PLANETAS?
// Cada lugar tiene un "factor": cuántas veces jala su gravedad comparada con la Tierra.
// Si el factor es 1, jala igual que la Tierra. Si es menos de 1, jala menos.
// Si es más de 1, jala más. Los números vienen de la NASA (Planetary Fact Sheet).

const LUGARES = [
  { nombre: "Mercurio", emoji: "🪨", factor: 0.38, color: "radial-gradient(circle at 35% 35%, #d9d4cc, #8c8680)",
    frase: "Te sentirías liviano, ¡pero de día hace un calor terrible!" },
  { nombre: "Venus", emoji: "🌋", factor: 0.91, color: "radial-gradient(circle at 35% 35%, #fff1c2, #e3b45f)",
    frase: "Casi igual que en la Tierra, pero sus nubes son de ácido. ¡Mejor no ir!" },
  { nombre: "La Tierra", emoji: "🌍", factor: 1, color: "radial-gradient(circle at 35% 35%, #8fd3ff, #2a6fdb 60%, #2e9e5b)",
    frase: "Aquí estás tú. Esto es lo que marca tu báscula en la casa." },
  { nombre: "La Luna", emoji: "🌕", factor: 0.17, color: "radial-gradient(circle at 35% 35%, #f4f4f4, #a5a5a5)",
    frase: "¡Podrías saltar muchísimo más alto, como un canguro espacial!" },
  { nombre: "Marte", emoji: "🔴", factor: 0.38, color: "radial-gradient(circle at 35% 35%, #ffb08a, #c1440e)",
    frase: "Igual que en Mercurio. ¡Podrías lanzar un balón lejísimos!" },
  { nombre: "Júpiter", emoji: "🌀", factor: 2.53, color: "radial-gradient(circle at 35% 35%, #f3dcb6, #c58b55)",
    frase: "¡Más del doble! Sentirías que cargas a otra persona en la espalda." },
  { nombre: "Saturno", emoji: "🪐", factor: 1.07, color: "radial-gradient(circle at 35% 35%, #fbefc4, #d6b36a)",
    frase: "Casi como en la Tierra, aunque Saturno es gigantesco. ¡Qué sorpresa!" },
  { nombre: "Urano", emoji: "🧊", factor: 0.90, color: "radial-gradient(circle at 35% 35%, #d8fbff, #6fd0dc)",
    frase: "Un poquito menos que en la Tierra. ¡Y el planeta gira acostado!" },
  { nombre: "Neptuno", emoji: "💨", factor: 1.14, color: "radial-gradient(circle at 35% 35%, #9ab8ff, #3355cc)",
    frase: "Pesarías un poquito más. ¡Además, ahí soplan los vientos más fuertes del Sistema Solar!" },
];

// Revisa lo que escribió la persona.
// Devuelve un mensaje amable si algo está mal, o null si todo está bien.
function revisarNumero(texto, noEsNumero) {
  if (noEsNumero) return "Ups, ahí hay letras o símbolos. Escribe solo números, por ejemplo, 35.";
  if (texto === "" || texto === null || texto === undefined) return "Primero escribe cuánto marca tu báscula; por ejemplo, 35.";
  const numero = Number(texto);
  if (Number.isNaN(numero)) return "Ups, ahí hay letras o símbolos. Escribe solo números, por ejemplo, 35.";
  if (numero <= 0) return "El número tiene que ser mayor que cero. ¡Nadie tiene masa negativa!";
  if (numero < 1 || numero > 200) return "Escribe un número entre 1 y 200, por favor.";
  return null;
}

// Multiplica lo que marca la báscula en la Tierra por el factor de cada lugar.
function calcularPesos(kilosTierra) {
  return LUGARES.map((lugar) => ({
    nombre: lugar.nombre,
    emoji: lugar.emoji,
    color: lugar.color,
    frase: lugar.frase,
    kilos: Math.round(kilosTierra * lugar.factor * 10) / 10, // redondeamos a 1 decimal
  }));
}

// Escribe el número como en Colombia: con coma decimal (35,5) y siempre 1 decimal.
function formatoColombia(numero) {
  return numero.toLocaleString("es-CO", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

// Esta parte solo funciona en el navegador (donde hay una página web).
if (typeof document !== "undefined") {
  const formulario = document.getElementById("form-peso");
  const cajita = document.getElementById("kilos");
  const resultado = document.getElementById("resultado-peso");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // para que la página no se recargue

    const problema = revisarNumero(cajita.value, cajita.validity.badInput);
    resultado.innerHTML = "";

    if (problema) {
      const aviso = document.createElement("p");
      aviso.className = "mito";
      aviso.textContent = "🙈 " + problema;
      resultado.appendChild(aviso);
      cajita.setAttribute("aria-invalid", "true");
      cajita.focus();
      return;
    }
    cajita.removeAttribute("aria-invalid");

    const kilos = Number(cajita.value);
    const filas = calcularPesos(kilos);

    // Armamos la tabla con los resultados
    const titulo = document.createElement("p");
    titulo.innerHTML = "Si tu báscula marca <strong>" + formatoColombia(kilos) +
      " kg</strong> en la Tierra, en cada lugar marcaría:";
    resultado.appendChild(titulo);

    const contenedor = document.createElement("div");
    contenedor.className = "tabla-contenedor";
    const tabla = document.createElement("table");
    tabla.innerHTML =
      "<caption class=\"solo-lector\">Lo que marcaría tu báscula en cada lugar</caption>" +
      "<thead><tr><th scope=\"col\">Lugar</th><th scope=\"col\">La báscula marcaría</th>" +
      "<th scope=\"col\">¿Cómo te sentirías?</th></tr></thead>";
    const cuerpo = document.createElement("tbody");

    filas.forEach((fila) => {
      const tr = document.createElement("tr");

      const celdaLugar = document.createElement("th");
      celdaLugar.scope = "row";
      const bola = document.createElement("span");
      bola.className = "planeta-bola";
      bola.style.width = "28px";
      bola.style.height = "28px";
      bola.style.background = fila.color;
      bola.style.marginRight = "0.5rem";
      bola.setAttribute("aria-hidden", "true");
      celdaLugar.appendChild(bola);
      celdaLugar.appendChild(document.createTextNode(fila.nombre));

      const celdaKilos = document.createElement("td");
      celdaKilos.innerHTML = "<strong>" + formatoColombia(fila.kilos) + " kg</strong>";

      const celdaFrase = document.createElement("td");
      celdaFrase.textContent = fila.emoji + " " + fila.frase;

      tr.append(celdaLugar, celdaKilos, celdaFrase);
      cuerpo.appendChild(tr);
    });

    tabla.appendChild(cuerpo);
    contenedor.appendChild(tabla);
    resultado.appendChild(contenedor);
  });
}

// Esto es solo para poder probar las cuentas por fuera de la página.
if (typeof module !== "undefined") {
  module.exports = { LUGARES, revisarNumero, calcularPesos, formatoColombia };
}
