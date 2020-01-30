const main=document.querySelector('.links');
const menu=document.querySelector('.menu');

function toggleMenu() {
    main.classList.toggle('mainActive');
    menu.classList.toggle('toggle');
}

menu.addEventListener('click', toggleMenu);