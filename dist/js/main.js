// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); // Takes all elements and place it in a Node list which is similar to an array.

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('showOverlay');
    menuNav.classList.add('showOverlay');
    menuBranding.classList.add('showOverlay');
    navItems.forEach(item => item.classList.add('showOverlay')); // forEach is a high order array method.
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close'); // All the opposite of the code above.
    menu.classList.remove('showOverlay');
    menuNav.classList.remove('showOverlay');
    menuBranding.classList.remove('showOverlay');
    navItems.forEach(item => item.classList.remove('showOverlay'));
    // Set Menu State
    showMenu = false;
  }
}
