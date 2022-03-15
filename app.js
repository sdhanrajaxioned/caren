const hamburger = document.querySelector('.hamburger');
const close_menu = document.querySelector('.close-menu');
const nav_links = document.querySelector('.nav-links');

hamburger.addEventListener('click',show);
close_menu.addEventListener('click',close);

function show() {
  nav_links.style.display = "flex";
  nav_links.style.top = "45px";
}

function close() {
  nav_links.style.top = "-140px";
}