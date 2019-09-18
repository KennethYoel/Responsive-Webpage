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
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show')); // forEach is a high order array method.
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close'); // All the opposite of the code above.
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    // Set Menu State
    showMenu = false;
  }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('navbar').style.width = '100%';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById('navbar').style.width = '0%';
}

//Transition from a transparent background to a beluga colored background

$(function() {
  var header = $('.menu');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  });
});

//Get the container element
var btnContainer = document.getElementById('nav-header');

//Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('target');

//Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    // Add the active class to the current/clicked button
    this.className += ' active';
  });
}
