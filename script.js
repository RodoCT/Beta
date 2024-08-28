const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".navbar__open");
const closeMenuBtn = document.querySelector(".navbar__close");

function toggleMenu() {
  menu.classList.toggle("navbar__opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// Text - animation
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
    })
    .add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
