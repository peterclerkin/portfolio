// Select DOM Items

const mobileNav = document.querySelector('.mobile-nav');
const menuNav = document.querySelector('.menu-nav');
const menu = document.querySelector('.desktop-nav');
const menuItems = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

mobileNav.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        mobileNav.classList.add('close');
    } else {

    }

}