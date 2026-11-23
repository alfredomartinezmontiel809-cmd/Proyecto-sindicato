const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

menuBoton.addEventListener("click", function() {
    menu.classList.toggle("abierto");

    const abierto = menu.classList.contains("abierto");
    menuBoton.setAttribute("aria-expanded", abierto);
});

const enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("abierto");
        menuBoton.setAttribute("aria-expanded", "false");
    });
});

// AÑO DEL FOOTER
const anioEl = document.getElementById("anio");
if (anioEl) anioEl.textContent = new Date().getFullYear();

// MODO CLARO / OSCURO - AZULITO CON NARANJA
const btnTema = document.getElementById("btnTema");
const temaGuardado = localStorage.getItem("tema") || "dark";
document.documentElement.setAttribute("data-theme", temaGuardado);
if (btnTema) btnTema.textContent = temaGuardado === "light" ? "☀️" : "🌙";

if (btnTema) {
  btnTema.addEventListener("click", function() {
    const actual = document.documentElement.getAttribute("data-theme");
    const nuevo = actual === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nuevo);
    localStorage.setItem("tema", nuevo);
    btnTema.textContent = nuevo === "light" ? "☀️" : "🌙";
  });
}