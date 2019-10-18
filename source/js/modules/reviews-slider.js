'use strict';

(function () {
  var reviewsSwiper = document.querySelector('.review-slider');
  if (!reviewsSwiper) {
    return;
  }

    (function () {
      swiper = new window.Swiper(reviewsSwiper, {
        observeParents: true,
        observer: true,
        slidesPerView: generateSlidesPerView(),
        slidesPerGroup: generateSlidesPerGroup (),
        slidesPerColumn: generateSlidesPerColumn(),
        spaceBetween: 20,
        breakpointsInverse: true,

        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    })();

    function generateSlidesPerColumn () {
      var number
      if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 767px)').matches) {
        number = 2;
      } else {
        number = 1;
      }

      return number
    }

    function generateSlidesPerView () {
      var number
      if (window.matchMedia('(min-width: 1024px)').matches) {
        number = 2;
      } else {
        number = 1;
      }

      return number
    }

    function generateSlidesPerGroup () {
      var number
      if (window.matchMedia('(min-width: 1024px)').matches) {
        number = 2;
      } else {
        number = 1;
      }

      return number
    }

})();
