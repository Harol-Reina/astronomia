// En computador (pantalla ancha) el menú siempre está abierto.
// En celular empieza cerrado y se abre con el botón ☰ Menú.
const menu = document.querySelector(".menu");
const pantallaAncha = window.matchMedia("(min-width: 901px)");

function ajustarMenu() {
  menu.open = pantallaAncha.matches;
}

ajustarMenu();
pantallaAncha.addEventListener("change", ajustarMenu);
