'use strict';
var openPopup = document.querySelector('.contacts-list__link');
var popup = document.querySelector(".feedback--popup");
var mainPage = document.querySelector(".index-page");

openPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(popup);
  popup.classList.add("show");
  mainPage.classList.add("overlay");
});
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
