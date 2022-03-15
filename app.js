const hamburger = document.querySelector('.hamburger');
const close_menu = document.querySelector('.close-menu');
const nav_links = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click',show);
close_menu.addEventListener('click',close);

function show() {
  nav_links.style.display = "flex";
  nav_links.style.top = "45px";
}

function close() {
  nav_links.style.top = "-140px";
}

const header = document.querySelector('header');

window.onscroll =  function() {
  var top = window.scrollY;
  if(top >= 200){
    header.classList.add('active');
    logo.classList.add('active');
    nav_links.classList.add('active');
  }
  else {
    header.classList.remove('active');
    logo.classList.remove('active');
    nav_links.classList.remove('active');
  }
}