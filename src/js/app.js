const menuButton = document.querySelector('#menu-button');
const closeMenuButton = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    menu.classList.remove('navbar__menu--hidden')
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.add('navbar__menu--hidden')
});