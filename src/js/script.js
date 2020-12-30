"use strict";
document.getElementById("trigger").onclick = function () {
  open();
};

function open() {
  document.getElementById("menu").classList.toggle("show");
  document.querySelector(".fa-times").classList.toggle("show");
  document.querySelector(".fa-bars").classList.toggle("show");
}

let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 9,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});