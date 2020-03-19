'use strict';
var openPopup = document.querySelector('.contacts-list__link');
var popup = document.querySelector('.feedback--popup');
var closePopup = document.querySelector('.feedback__close');
var mainPage = document.querySelector('.container');
var popupName = document.querySelector('.feedback__name');
var tel = document.querySelector('.feedback__tel');
var telPopup = document.querySelector('.feedback__tel--popup');
var scroll = document.querySelector('.page-header__scroll');
var link = document.querySelector('.page-header__link');


scroll.addEventListener('click', function (evt) {
  evt.preventDefault();
  var blockID = scroll.getAttribute('href');
  document.querySelector('' + blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  var blockID = link.getAttribute('href');
  document.querySelector('' + blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

openPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('feedback-show');
  mainPage.classList.add('overlay');
  mainPage.style.position = 'fixed';
  popupName.focus();
});

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-show');
  mainPage.classList.remove('overlay');
  mainPage.style.position = '';
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('feedback-show')) {
      popup.classList.remove('feedback-show');
      mainPage.classList.remove('overlay');
      mainPage.style.position = '';
    }
  }
});

tel.onfocus = function () {
  if (tel.value.length === 0) {
    tel.value = '+7(';
  }
};

telPopup.onfocus = function () {
  if (telPopup.value.length === 0) {
    telPopup.value = '+7(';
  }
};
