const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

menuBoton.addEventListener("click", () => {
  menu.classList.toggle("abierto");

  // Para que el lector de pantalla sepa si está abierto o cerrado
  const abierto = menu.classList.contains("abierto");
  menuBoton.setAttribute("aria-expanded", abierto);
});

// Que se cierre solo cuando le picas a un enlace
menu.querySelectorAll("a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    menuBoton.setAttribute("aria-expanded", "false");
  });
});