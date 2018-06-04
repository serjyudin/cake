	// Custom JS
$(document).ready(function(){
  $('.single-slide').slick({
    dots: true,
  });
  $('.multiple-slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // dots: true,
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
