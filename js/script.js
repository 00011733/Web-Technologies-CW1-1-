// ELEMENTS
const menuEl = document.getElementById("menu");
const navbarEl = document.querySelector(".navbar");
const loginEl = document.querySelector("#login");
const loginFormEl = document.querySelector(".login-form");
const xEl = document.querySelector('.login-form form .fa-times');

// Menu navbar
menuEl.addEventListener('click', () => {
    menuEl.classList.toggle('fa-times');
    navbarEl.classList.toggle("nav-toggle");
})

// LOGIN form
loginEl.addEventListener('click', function() {
    loginFormEl.classList.add('popup');
});

xEl.addEventListener('click', function () {
    loginFormEl.classList.remove('popup');
});

// WINDOW
window.onscroll = function(){
    menuEl.classList.remove('fa-times');
    navbarEl.classList.remove('nav-toggle');
    loginFormEl.classList.remove('popup');
}





