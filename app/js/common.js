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

// Добавляем элементу класс слайдера
// $(window).resize(function() {
//   if ($(window).width() <= 768) {
//     $('.step__single-size').addClass('single-size');
//   } else {
//     $('.step__single-size').addClass('single-size');
//   };
// });

// Управление слайдерами
filling = $('.single-filling').bxSlider();
multi = $('.multiple-slide').bxSlider();
review = $('.single-review').bxSlider();
size = $('.single-size').bxSlider();

function bxslider() {
  var width = window.innerWidth;
  if (width > 1220) {
    size.destroySlider();
    filling.reloadSlider({
      slideWidth: 750,
      moveSlides: 1,
      // touchEnabled: true,
    });
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
  } else if (768 < width < 1220) {
    size.destroySlider();
    // size.reloadSlider({
    //   // slideWidth: 158,
    //   controls: false,
    //   // moveSlides: 1,
    //   minSlides: 4,
    //   maxSlides: 4,
    //   // touchEnabled: true,
    // });
    filling.reloadSlider({
      slideWidth: 470,
      controls: false,
      moveSlides: 1,
      touchEnabled: true,
    });
    multi.reloadSlider({
      // controls: false,
      randomStart: true,
      minSlides: 2,
      maxSlides: 2,
      moveSlides: 1,
      slideWidth: 230,
      touchEnabled: true,
    });
    review.reloadSlider({
      // controls: false,
      slideWidth: 470,
      moveSlides: 1,
      touchEnabled: true,
    });
  } else if (width < 768) {
    filling.reloadSlider({
      controls: false,
      touchEnabled: true,
    });
    multi.reloadSlider({
      controls: false,
      randomStart: true,
      // minSlides: 1,
      // maxSlides: 1,
      // moveSlides: 1,
      slideWidth: 195,
      touchEnabled: true,
    });
    review.reloadSlider({
      controls: false,
      touchEnabled: true,
    });
    size.reloadSlider({
      controls: false,
      randomStart: true,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      // slideWidth: 195,
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



    // --------------------------------------------------------------------------------------

    // var slider1 = $('.single-slide').bxSlider();
    // var slider2 = $('.multiple-slide').bxSlider();
    // var slider3 = $('.-slide').bxSlider();
    //
    // var widthMatch = matchMedia("all and (max-width: 767px)");
    // var widthHandler = function(matchList) {
    //     if (matchList.matches) {
    //         slider2.reloadSlider({
    //           controls: false,
    //         });
    //     } else {
    //         slider2.reloadSlider({
    //           randomStart: true,
    //           minSlides: 2,
    //           maxSlides: 2,
    //           moveSlides: 1,
    //           slideWidth: 320,
    //         });
    //     }
    // };
    //
    // widthMatch.addListener(widthHandler);
    // widthHandler(widthMatch);


    // $(document).ready(function(){
    //   $('.single-slide').slick({
    //     dots: true,
    //     // responsive: [{
    //     //
    //     //     breakpoint: 768,
    //     //     settings: {
    //     //       dots: false,
    //     //       arrows: false,
    //     //     }
    //     //   }]
    //   });
    //   $('.multiple-slide').slick({
    //     infinite: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     responsive: [{
    //
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 1,
    //           dots: false,
    //           arrows: false,
    //         }
    //       }]
    //   });
    //   $('.lolka').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //
    //   });
    // });

    // $(window).on("load resize", function(){
    //   var width = $(document).width();
    //
    //   if (width <= 768) {
    //     $('.single-slide').slick({
    //       dots: false,
    //       arrows: false,
    //     });
    //     $('.multiple-slide').slick({
    //       slidesToShow: 1,
    //       dots: false,
    //       arrows: false,
    //     });
    //   } else {
    //     $('.single-slide').slick({
    //       dots: true,
    //       arrows: true,
    //     });
    //     $('.multiple-slide').slick({
    //       infinite: true,
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     });
    //   }
    // });
