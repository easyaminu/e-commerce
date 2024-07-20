const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-list');


menu.addEventListener('click', () => {
    nav.classList.toggle('menu-show');
})