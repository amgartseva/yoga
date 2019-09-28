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

var team = document.querySelector('.team');
var teamSlider = team.querySelector('.teachers-list');
var teamSliderLeftBtn = team.querySelector('.controls__left-btn');
var teamSliderRightBtn = team.querySelector('.controls__right-btn');
var teamActivePage = team.querySelector('.controls__active-page');
var teamLastPage = team.querySelector('.controls__last-page');
var teamSlides = Array.from(teamSlider.querySelectorAll('.teachers-list__item'));

if (screenWidth <= MOBILE) {
  reviewsSlides[0].classList.add('review-slider__item--active');
  teamSlides[0].classList.add('teachers-list__item--active');
  reviewsSliderRightBtn.addEventListener('click', onSliderRightBtnMobile);
  reviewsSliderLeftBtn.addEventListener('click', onSliderLeftBtnMobile);
  teamSliderRightBtn.addEventListener('click', onTeamSliderRightBtnMobile);
  teamSliderLeftBtn.addEventListener('click', onTeamSliderLeftBtnMobile);
} else {
  reviewsSlides[0].classList.add('review-slider__item--active');
  teamSlides[0].classList.add('teachers-list__item--active');
  if (reviewsSlides.length >= 2) {
    reviewsSlides[1].classList.add('review-slider__item--active');
    teamSlides[1].classList.add('teachers-list__item--active');
  }
  if (reviewsSlides.length >= 3) {
    teamSlides[2].classList.add('teachers-list__item--active');
  }
  reviewsSliderRightBtn.addEventListener('click', onSliderRightBtn);
  reviewsSliderLeftBtn.addEventListener('click', onSliderLeftBtn);
  teamSliderRightBtn.addEventListener('click', onTeamSliderRightBtn);
  teamSliderLeftBtn.addEventListener('click', onTeamSliderLeftBtn);
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
  var maxIndex = reviewsSlides.length - 1;
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

function onTeamSliderRightBtn () {
  var curSlideIndex = teamSlides.indexOf(teamSlider.querySelector('.teachers-list__item--active'));
  var nextSlideIndex = 0;
  var maxIndex = teamSlides.length - 3;
  var nextPage = 1;

  teamSlides[curSlideIndex].classList.remove('teachers-list__item--active');
  teamSlides[curSlideIndex + 1].classList.remove('teachers-list__item--active');
  teamSlides[curSlideIndex + 2].classList.remove('teachers-list__item--active');
  if (curSlideIndex !== maxIndex) {
    nextSlideIndex = curSlideIndex + 3;
    nextPage = +reviewsActivePage.textContent + 1;
  }
  teamSlides[nextSlideIndex].classList.add('teachers-list__item--active');
  teamSlides[nextSlideIndex + 1].classList.add('teachers-list__item--active');
  teamSlides[nextSlideIndex + 2].classList.add('teachers-list__item--active');
  teamActivePage.innerHTML = nextPage;
}

function onTeamSliderLeftBtn () {
  var curSlideIndex = teamSlides.indexOf(teamSlider.querySelector('.teachers-list__item--active'));
  var nextSlideIndex = teamSlides.length - 3;
  var nextPage = +teamLastPage.textContent;

  teamSlides[curSlideIndex].classList.remove('teachers-list__item--active');
  teamSlides[curSlideIndex + 1].classList.remove('teachers-list__item--active');
  teamSlides[curSlideIndex + 2].classList.remove('teachers-list__item--active');
  if (curSlideIndex !== 0) {
    nextSlideIndex = curSlideIndex - 3;
    nextPage = +teamActivePage.textContent - 1;
  }
  teamSlides[nextSlideIndex].classList.add('teachers-list__item--active');
  teamSlides[nextSlideIndex + 1].classList.add('teachers-list__item--active');
  teamSlides[nextSlideIndex + 2].classList.add('teachers-list__item--active');
  teamActivePage.innerHTML = nextPage;
}

function onTeamSliderRightBtnMobile () {
  var curSlideIndex = teamSlides.indexOf(teamSlider.querySelector('.teachers-list__item--active'));
  var nextSlideIndex = 0;
  var maxIndex = teamSlides.length - 1;

  teamSlides[curSlideIndex].classList.remove('teachers-list__item--active');
  if (curSlideIndex !== maxIndex) {
    nextSlideIndex = curSlideIndex + 1;
  }
  teamSlides[nextSlideIndex].classList.add('teachers-list__item--active');
}

function onTeamSliderLeftBtnMobile () {
  var curSlideIndex = teamSlides.indexOf(teamSlider.querySelector('.teachers-list__item--active'));
  var nextSlideIndex = teamSlides.length - 1;

  teamSlides[curSlideIndex].classList.remove('teachers-list__item--active');
  if (curSlideIndex !== 0) {
    nextSlideIndex = curSlideIndex - 1;
  }
  teamSlides[nextSlideIndex].classList.add('teachers-list__item--active');
}
