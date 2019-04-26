// Select DOM Items

const mobileNav = document.querySelector('.mobile-nav');
const menuNav = document.querySelector('.menu-nav');
const menu = document.querySelector('.desktop-nav');
const menuItems = document.querySelectorAll('.nav-item');
const menuLinks = document.querySelector(".nav-item").querySelectorAll("a");

//Set Initial State of Menu
let showMenu = false;


//Menu Toggle
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

// Close Menu Function
function closeMenu() {
let i;
for (i = 0; i < menuLinks.length; i++) {
    mobileNav.classList.remove('close');
    menuNav.classList.remove('show');
    menu.classList.remove('show');
    menuItems.forEach(item => item.classList.remove('show'));
}
}

//Smooth Scrolling Script

const scroll = new SmoothScroll('.nav-item a[href*="#"]', {
    speed: 800
});

//Shrink Nav Bar Effect
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100) {
        menu.classList += ' small'
    } else {
        menu.classList = 'desktop-nav';
    }
})