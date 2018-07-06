	// Custom JS
$(document).ready(function(){
  $('.single-slide').slick({
    dots: true,
    responsive: [{

        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
        }
      }]
  });
  $('.multiple-slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{

        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        }
      }]
  });
  $('.lolka').slick({
    slidesToShow: 1,
    slidesToScroll: 1,

  });
});

$(document).ready(function () {
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
