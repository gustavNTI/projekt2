const nav=document.querySelector('nav');
const menu=document.querySelector('.menu');

function toggleMenu() {
    nav.classList.toggle('mainActive');
    menu.classList.toggle('toggle');
}

menu.addEventListener('click', toggleMenu);