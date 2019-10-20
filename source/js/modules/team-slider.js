'use strict';

(function () {
  var teamSwiper = document.querySelector('.team-container__slider');
  var emptyBlock = document.querySelector('.fill-js');
  var teamSlider = document.querySelector('.team-container__slider');
  var teamSlides = document.querySelectorAll('.teacher-card');

  if (!teamSlider) {
    return;
  }

  if (!teamSwiper) {
    return;
  }

  if (emptyBlock && cloneDescription) {
    var cloneDescription = teamSlides[0].querySelector('.teacher-card__description').cloneNode(true);
    cloneDescription.className = 'team__description-wrapper';
    emptyBlock.appendChild(cloneDescription);
  }

  teamSlider.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('teacher-card__info-btn')) {
      var description = evt.path[3].querySelector('.teacher-card__description');
      cloneDescription = description.cloneNode(true);
      cloneDescription.className = 'team__description-wrapper';

      emptyBlock.innerHTML = '';
      emptyBlock.appendChild(cloneDescription);
    }
  });

  (function () {
    return new window.Swiper(teamSwiper, {
      observeParents: true,
      observer: true,
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 20,
      breakpointsInverse: true,

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
          slidesPerColumn: 3,
        }
      }
    });
  })();

})();
