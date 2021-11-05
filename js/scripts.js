// ELEMENTS
const menuEl = document.getElementById("menu");
const navbarEl = document.querySelector(".navbar");

// Menu navbar
menuEl.addEventListener('click', () => {
    menuEl.classList.toggle('fa-times');
    navbarEl.classList.toggle("nav-toggle");
})



