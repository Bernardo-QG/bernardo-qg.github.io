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
        ul.classList.toggle("show");
    }
);

// Close burger menu when a link is clicked.
// Select nav link

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
    link.addEventListener(
        "click", () => { ul.classList.remove("show"); }
    );
});