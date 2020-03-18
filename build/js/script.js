'use strict';
var openPopup = document.querySelector('.contacts-list__link');
var popup = document.querySelector(".feedback--popup");
var closePopup = document.querySelector(".feedback__close");
var mainPage = document.querySelector(".index-page");
var popupName = document.querySelector(".feedback__name");

openPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add("show");
  mainPage.classList.add("overlay");
  popupName.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show");
  mainPage.classList.remove("overlay");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
    mainPage.classList.remove("overlay");
  }
}
});
