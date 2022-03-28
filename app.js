const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');
const lang = document.querySelector('.lang');

hamburger.addEventListener('click', show);

function show() {
  hamburger.classList.toggle("active");
  nav_links.classList.toggle("active");
  document.body.classList.toggle("hidden")
}

const header = document.querySelector('header');

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 200) {
    header.classList.add('active');
    lang.classList.add('active');
    logo.classList.add('active');
    nav_links.classList.add('active');
  }
  else {
    header.classList.remove('active');
    lang.classList.remove('active');
    logo.classList.remove('active');
    nav_links.classList.remove('active');
  }
}

$(document).ready(function () {
  $('.arrow-right').click(function () {
    $('.image-slider').find('li.active').next().addClass('active');
    $('.image-slider').find('li.active').prev().removeClass('active');
    $('.dots').find('li.active').next().addClass('active');
    $('.dots').find('li.active').prev().removeClass('active');
  })
  $('.arrow-left').click(function () {
    $('.image-slider').find('li.active').prev().addClass('active');
    $('.image-slider').find('li.active').next().removeClass('active');
    $('.dots').find('li.active').prev().addClass('active');
    $('.dots').find('li.active').next().removeClass('active');
  })
})
