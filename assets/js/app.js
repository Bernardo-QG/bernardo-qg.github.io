const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener(
    "click",
    ()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth",});
    }
);

// Nav burger menu selection

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener(
    "click",
    ()=>{
        const abierto = ul.classList.toggle("show");
        burger.setAttribute("aria-expanded", String(abierto));
        burger.setAttribute("aria-label", abierto ? "Close menu" : "Open menu");
    }
);

// Close burger menu when a link is clicked.
// Select nav link

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
    link.addEventListener(
        "click", () => {
            ul.classList.remove("show");
            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Open menu");
        }
    );
});

// Current year in the footer
document.querySelector("#year").textContent = new Date().getFullYear();

// Highlight the nav link of the section in view
const secciones = [...navLink].map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

function marcarSeccion(id) {
    navLink.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
}

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) marcarSeccion(entrada.target.id);
        });
    },
    { rootMargin: "-45% 0px -50% 0px" }
);
secciones.forEach((seccion) => observador.observe(seccion));

// At the very bottom the last section may never reach the middle of the screen
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        marcarSeccion(secciones.at(-1).id);
    }
}, { passive: true });
