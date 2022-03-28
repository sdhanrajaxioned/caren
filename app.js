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
    $(this).prev().removeClass('hide');
    $(this).addClass('arrow-active').prev().removeClass('arrow-active');

    $('.image-slider').find('li.active').next().addClass('active');
    $('.image-slider').find('li.active').prev().removeClass('active');

    $('.dots').find('li.active').next().addClass('active');
    $('.dots').find('li.active').prev().removeClass('active');

    var last_image = $('.image-slider li').last();
    if (last_image.hasClass('active')) {
      $(this).addClass('hide');
    }
  })

  $('.arrow-left').click(function () {
    $(this).next().removeClass('hide');
    $(this).addClass('arrow-active').next().removeClass('arrow-active');

    $('.image-slider').find('li.active').prev().addClass('active');
    $('.image-slider').find('li.active').next().removeClass('active');

    $('.dots').find('li.active').prev().addClass('active');
    $('.dots').find('li.active').next().removeClass('active');

    var first_image = $('.image-slider li').first();
    if (first_image.hasClass('active')) {
      $(this).addClass('hide');
    }
  })

  var dots = $('.dots li')
  var slides = $('.image-slider li')
  dots.click(function () {
    dots.parent().prevUntil('.image-slider').removeClass('arrow-active');
    var index = $(this).index();
    currentSlide = slides.eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    currentSlide.addClass('active').siblings().removeClass('active');
    
    if ($(this).index() === 0) {
      $(this).parent().siblings('.arrow-left').addClass('hide');
    }
    else {
      $(this).parent().siblings('.arrow-left').removeClass('hide');
    }

    if ($(this).index() === 3) {
      $(this).parent().siblings('.arrow-right').addClass('hide');
    } else {
      $(this).parent().siblings('.arrow-right').removeClass('hide');
    }
  })
})
