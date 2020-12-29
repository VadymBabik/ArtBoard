"use strict";
document.getElementById("trigger").onclick = function () {
  open();
};

function open() {
  document.getElementById("menu").classList.toggle("show");
  document.querySelector(".fa-times").classList.toggle("show");
  document.querySelector(".fa-bars").classList.toggle("show");
}

$(document).ready(function () {
  $(".instagram__gallery").slick({
    slidesToShow: 4,

    // variableWidth: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
