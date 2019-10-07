'use strict';

(function () {
  var morningPrice = document.querySelector('.options__price-morning');
  var eveningPrice = document.querySelector('.options__price-evening');
  var noLimitPrice = document.querySelector('.options__price-nolimit');
  var buttonsBlock = document.querySelector('.length');
  var buttons = document.querySelectorAll('.length__item');

  if (buttonsBlock) {
    buttonsBlock.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('length__item')) {
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('length__item--active');
        }

        evt.target.classList.add('length__item--active');
        morningPrice.textContent = evt.target.dataset.morning;
        eveningPrice.textContent = evt.target.dataset.evening;
        noLimitPrice.textContent = evt.target.dataset.nolimit;
      }
    });
  }

})();
