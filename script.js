const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".navbar__open");
const closeMenuBtn = document.querySelector(".navbar__close");

function toggleMenu() {
  menu.classList.toggle("navbar__opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider .card').length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}