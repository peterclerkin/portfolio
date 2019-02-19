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
        menuNav.classList.add('show');
        menu.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        // Set Menu State
        showMenu = true;
    } else {
        mobileNav.classList.remove('close');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        // Set Menu State
        showMenu = false;
    }

}