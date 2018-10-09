//	Custom JS

// Кнопка вызова меню (переключатель)
$(document).ready(function() {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
});

// Управление слайдерами
filling = $('.single-filling').bxSlider();
multi = $('.multiple-slide').bxSlider();
review = $('.single-review').bxSlider();
// size = $('.single-size').bxSlider();

function bxslider() {
  var width = window.innerWidth;
  if (width > 1220) {
    filling.reloadSlider({
      slideWidth: 750,
      moveSlides: 1,
      // touchEnabled: true,
    });
    // size.destroySlider();
    multi.reloadSlider({
      randomStart: true,
      minSlides: 2,
      maxSlides: 2,
      moveSlides: 1,
      slideWidth: 320,
      touchEnabled: true,
    });
    review.reloadSlider({
      slideWidth: 750,
      moveSlides: 1,
      touchEnabled: true,
    });
  } else if (width > 768 && width < 1220) {
    filling.reloadSlider({
      slideWidth: 470,
      controls: false,
      moveSlides: 1,
      touchEnabled: true,
    });
    // size.destroySlider();
    multi.reloadSlider({
      controls: false,
      randomStart: true,
      minSlides: 2,
      maxSlides: 2,
      moveSlides: 1,
      slideWidth: 230,
      touchEnabled: true,
    });
    review.reloadSlider({
      controls: false,
      slideWidth: 470,
      moveSlides: 1,
      touchEnabled: true,
    });
  } else if (width < 768) {
    filling.reloadSlider({
      slideWidth: 240,
      controls: false,
      touchEnabled: true,
    });
    // size.reloadSlider({
    //   slideWidth: 170,
    //   controls: false,
    //   moveSlides: 1,
    //   minSlides: 1,
    //   maxSlides: 1,
    //   touchEnabled: true,
    // });
    multi.reloadSlider({
      controls: false,
      randomStart: true,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideWidth: 240,
      touchEnabled: true,
    });
    review.reloadSlider({
      slideWidth: 240,
      controls: false,
      touchEnabled: true,
    });
  }
}
bxslider();
var resizeId; $(window).resize(function() {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 300);
});

function doneResizing() {
  clearTimeout(resizeId);
  bxslider();
}
