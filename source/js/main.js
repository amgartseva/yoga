'use strict';

var MOBILE = 767;
var TABLET = 1023;

var screenWidth = screen.width;
var reviews = document.querySelector('.reviews');
var reviewsSlider = reviews.querySelector('.review-slider');
var reviewsSliderLeftBtn = reviewsSlider.querySelector('.review-slider__btn-left');
var reviewsSliderRightBtn = reviewsSlider.querySelector('.review-slider__btn-right');
var reviewsActivePage = reviewsSlider.querySelector('.review-slider__active-page');
var reviewsLastPage = reviewsSlider.querySelector('.review-slider__last-page');
var reviewsSlides = Array.from(reviewsSlider.querySelectorAll('.review-slider__item'));

if (screenWidth <= MOBILE) {
  reviewsSlides[0].classList.add('review-slider__item--active');
  reviewsSliderRightBtn.addEventListener('click', onSliderRightBtnMobile);
  reviewsSliderLeftBtn.addEventListener('click', onSliderLeftBtnMobile);
} else {
  reviewsSlides[0].classList.add('review-slider__item--active');
  if (reviewsSlides.length >= 1) {
    reviewsSlides[1].classList.add('review-slider__item--active');
    reviewsSliderRightBtn.addEventListener('click', onSliderRightBtn);
    reviewsSliderLeftBtn.addEventListener('click', onSliderLeftBtn);
  }
}

function onSliderRightBtn () {
  var curSlideIndex = reviewsSlides.indexOf(reviewsSlider.querySelector('.review-slider__item--active'));
  var nextSlideIndex = 0;
  var maxIndex = reviewsSlides.length - 2;
  var nextPage = 1;

  reviewsSlides[curSlideIndex].classList.remove('review-slider__item--active');
  reviewsSlides[curSlideIndex + 1].classList.remove('review-slider__item--active');
  if (curSlideIndex !== maxIndex) {
    nextSlideIndex = curSlideIndex + 2;
    nextPage = +reviewsActivePage.textContent + 1;
  }
  reviewsSlides[nextSlideIndex].classList.add('review-slider__item--active');
  reviewsSlides[nextSlideIndex + 1].classList.add('review-slider__item--active');
  reviewsActivePage.innerHTML = nextPage;
}

function onSliderLeftBtn () {
  var curSlideIndex = reviewsSlides.indexOf(reviewsSlider.querySelector('.review-slider__item--active'));
  var nextSlideIndex = reviewsSlides.length - 2;
  var nextPage = +reviewsLastPage.textContent;

  reviewsSlides[curSlideIndex].classList.remove('review-slider__item--active');
  reviewsSlides[curSlideIndex + 1].classList.remove('review-slider__item--active');
  if (curSlideIndex !== 0) {
    nextSlideIndex = curSlideIndex - 2;
    nextPage = +reviewsActivePage.textContent - 1;
  }
  reviewsSlides[nextSlideIndex].classList.add('review-slider__item--active');
  reviewsSlides[nextSlideIndex + 1].classList.add('review-slider__item--active');
  reviewsActivePage.innerHTML = nextPage;
}

function onSliderRightBtnMobile () {
  var curSlideIndex = reviewsSlides.indexOf(reviewsSlider.querySelector('.review-slider__item--active'));
  var nextSlideIndex = 0;
  var maxIndex = reviewsSlides.length - 2;
  var nextPage = 1;

  reviewsSlides[curSlideIndex].classList.remove('review-slider__item--active');
  if (curSlideIndex !== maxIndex) {
    nextSlideIndex = curSlideIndex + 1;
    nextPage = reviewsActivePage.textContent + 1;
  }
  reviewsSlides[nextSlideIndex].classList.add('review-slider__item--active');
  reviewsActivePage.innerHTML = nextPage;
}

function onSliderLeftBtnMobile () {
  var curSlideIndex = reviewsSlides.indexOf(reviewsSlider.querySelector('.review-slider__item--active'));
  var nextSlideIndex = reviewsSlides.length - 1;

  reviewsSlides[curSlideIndex].classList.remove('review-slider__item--active');
  if (curSlideIndex !== 0) {
    nextSlideIndex = curSlideIndex - 1;
  }
  reviewsSlides[nextSlideIndex].classList.add('review-slider__item--active');
}
