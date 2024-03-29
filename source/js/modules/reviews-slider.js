'use strict';

(function () {
  var reviewsSwiper = document.querySelector('.review-slider');
  if (!reviewsSwiper) {
    return;
  }

    (function () {
      return new window.Swiper(reviewsSwiper, {
        observeParents: true,
        observer: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        breakpointsInverse: true,
        loop: false,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },

        breakpoints: {
          768: {
            slidesPerColumn: 2,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          1024: {
            slidesPerColumn: 1,
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: true,
          }
        }
      });
    })();
})();
