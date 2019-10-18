'use strict';

(function () {
  var reviewsSwiper = document.querySelector('.review-slider');
  if (!reviewsSwiper) {
    return;
  }

  /*if (window.matchMedia('(min-width: 1024px)').matches) {
    (function () {
      swiper = new window.Swiper(reviewsSwiper, {
        observeParents: true,
        observer: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
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
  } else*/
    (function () {
      return new window.Swiper(reviewsSwiper, {
        observeParents: true,
        observer: true,
        slidesPerView: 1,
        slidesPerColumn: 2,
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
})();
