const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".navbar__open");
const closeMenuBtn = document.querySelector(".navbar__close");

function toggleMenu() {
  menu.classList.toggle("navbar__opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);