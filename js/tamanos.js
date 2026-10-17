// =========================================================
// TAMAÑOS Y DISTANCIAS
// Este programa dibuja los planetas del tamaño correcto
// (comparados entre ellos) y los pone en una regla según
// qué tan lejos están del Sol.
// =========================================================

// Datos de la NASA:
//   diametro = qué tan ancho es el planeta, en kilómetros
//   ua       = distancia promedio al Sol, en Unidades Astronómicas
//              (1 UA = la distancia de la Tierra al Sol)
//   color    = los colores con los que lo pinto
const PLANETAS = [
  { nombre: "Mercurio", diametro: 4879,   ua: 0.39,  color: "radial-gradient(circle at 35% 35%, #d9d9d9, #8c8c8c)" },
  { nombre: "Venus",    diametro: 12104,  ua: 0.72,  color: "radial-gradient(circle at 35% 35%, #fff1c1, #e3b866)" },
  { nombre: "Tierra",   diametro: 12756,  ua: 1,     color: "radial-gradient(circle at 35% 35%, #7fd3ff, #1f6fd1 60%, #2e8b57)" },
  { nombre: "Marte",    diametro: 6792,   ua: 1.52,  color: "radial-gradient(circle at 35% 35%, #ff9e6b, #c1440e)" },
  { nombre: "Júpiter",  diametro: 142984, ua: 5.2,   color: "repeating-linear-gradient(180deg, #e8c9a0 0 14px, #c58b56 14px 26px, #f3dfc1 26px 38px)" },
  { nombre: "Saturno",  diametro: 120536, ua: 9.58,  color: "repeating-linear-gradient(180deg, #f6e3a8 0 16px, #d9b86a 16px 28px)" },
  { nombre: "Urano",    diametro: 51118,  ua: 19.2,  color: "radial-gradient(circle at 35% 35%, #d4fbff, #6fd6e0)" },
  { nombre: "Neptuno",  diametro: 49528,  ua: 30.05, color: "radial-gradient(circle at 35% 35%, #8fb4ff, #2a4fd6)" },
];

const DIAMETRO_SOL = 1391400; // kilómetros

// La escala: Júpiter, el más grande, va a medir 200 píxeles.
// Entonces cada kilómetro vale 200 ÷ 142.984 píxeles.
// Todos los planetas se multiplican por el MISMO número: eso es una proporción.
const PIXELES_POR_KM = 200 / 142984;

// Escribe los números como en Colombia: 142.984 (con punto de mil)
function numeroBonito(numero) {
  return numero.toLocaleString("es-CO");
}

// ---------- 1. COMPARADOR DE TAMAÑOS ----------
function dibujarComparador() {
  const caja = document.getElementById("comparador");
  if (!caja) return;

  for (const planeta of PLANETAS) {
    // Tamaño del círculo en píxeles (redondeado a un decimal)
    const tamano = Math.round(planeta.diametro * PIXELES_POR_KM * 10) / 10;

    const figura = document.createElement("figure");

    const bola = document.createElement("div");
    bola.className = "planeta-bola";
    bola.style.width = tamano + "px";
    bola.style.height = tamano + "px";
    bola.style.background = planeta.color;
    // Si el planeta es muy chiquito, la sombra lo tapa todo; se la quito
    if (tamano < 20) bola.style.boxShadow = "none";
    bola.setAttribute("role", "img");
    bola.setAttribute("aria-label", "Círculo que representa a " + planeta.nombre + " a escala");

    const nombre = document.createElement("figcaption");
    nombre.innerHTML = "<strong>" + planeta.nombre + "</strong><br>" +
      numeroBonito(planeta.diametro) + " km";

    figura.appendChild(bola);
    figura.appendChild(nombre);
    caja.appendChild(figura);
  }

  // ¿Y el Sol? Calculo cuánto mediría con la misma escala
  const nota = document.getElementById("nota-sol");
  if (nota) {
    const solEnPixeles = Math.round(DIAMETRO_SOL * PIXELES_POR_KM);
    const vecesJupiter = Math.round(DIAMETRO_SOL / 142984);
    nota.textContent = "☀️ El Sol no cabe en este dibujo: con esta misma escala mediría unos " +
      numeroBonito(solEnPixeles) + " píxeles de ancho, más que la pantalla de casi " +
      "cualquier computador. ¡Es casi " + vecesJupiter + " veces más ancho que Júpiter!";
  }
}

// ---------- 2. REGLA DE DISTANCIAS ----------
// idRegla:    la regla donde pongo las marcas
// uaMaxima:   cuántas UA caben en toda la regla
// lista:      los planetas que quiero poner
// sinNombre:  planetas que están tan pegaditos que su nombre no se ve
function dibujarRegla(idRegla, uaMaxima, lista, sinNombre) {
  const regla = document.getElementById(idRegla);
  if (!regla) return;

  // Primero el Sol, en el cero
  regla.appendChild(crearMarca("Sol", 0, uaMaxima, "#ffcc4d", false, true));

  for (const planeta of lista) {
    const ocultarNombre = sinNombre.includes(planeta.nombre);
    regla.appendChild(crearMarca(planeta.nombre, planeta.ua, uaMaxima, colorDePunto(planeta), ocultarNombre, false));
  }
}

// Saco un solo color (el último del gradiente) para pintar el puntico
function colorDePunto(planeta) {
  const colores = planeta.color.match(/#[0-9a-f]{6}/gi);
  return colores[1] || colores[0];
}

function crearMarca(nombre, ua, uaMaxima, color, ocultarNombre, esSol) {
  const marca = document.createElement("div");
  marca.className = "marca";
  // La posición es proporcional: si está a la mitad de las UA, va a la mitad de la regla
  marca.style.left = (ua / uaMaxima) * 100 + "%";

  const texto = document.createElement("span");
  texto.className = "nombre";
  if (esSol) {
    texto.textContent = "Sol";
  } else {
    texto.textContent = nombre;
    // Esto lo lee el lector de pantalla (para personas que no ven bien)
    const uaTexto = document.createElement("span");
    uaTexto.className = "solo-lector";
    uaTexto.textContent = ": " + numeroBonito(ua) + " UA";
    texto.appendChild(uaTexto);
  }
  if (ocultarNombre) texto.classList.add("nombre-oculto");

  const punto = document.createElement("span");
  punto.className = "punto";
  punto.style.background = color;
  punto.setAttribute("aria-hidden", "true");
  if (esSol) {
    punto.style.width = "18px";
    punto.style.height = "18px";
  }

  marca.appendChild(texto);
  marca.appendChild(punto);
  return marca;
}

// ---------- ¡A dibujar! ----------
dibujarComparador();

// Regla grande: todo el Sistema Solar hasta un poquito después de Neptuno (32 UA)
dibujarRegla("regla-completa", 32, PLANETAS, ["Mercurio", "Venus", "Tierra", "Marte"]);

// Regla con lupa: solo los 4 planetas rocosos (hasta 1,7 UA)
const ROCOSOS = PLANETAS.filter((p) => p.ua < 2);
dibujarRegla("regla-zoom", 1.7, ROCOSOS, []);
