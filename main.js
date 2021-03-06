const menuBtn = document.querySelector('.menu-btn');
const menuBtnText = document.querySelector('.menu-btn-text');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuNavContainer = document.querySelector('.menu-nav-container');
const menuItems = document.querySelectorAll('.menu-item');

let showMenu = false;

const toggleMenu = () => {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menuBtnText.classList.add('show');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuNavContainer.classList.add('show');
    menuItems.forEach(item => item.classList.add('show'));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuBtnText.classList.remove('show');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuNavContainer.classList.remove('show');
    menuItems.forEach(item => item.classList.remove('show'));

    //set menu state
    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

hoverOnCoffee = () => {
  document.getElementById('menu-vid').src = "/media/vid/our-coffee.mp4";
}

hoverOnContact = () => {
  document.getElementById('menu-vid').src = "/media/vid/contact.mp4";
}
 
resetSrc = () => {
  document.getElementById('menu-vid').src = "/media/vid/welcome.mp4";
}