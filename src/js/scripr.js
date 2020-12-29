"use strict";
document.getElementById("trigger").onclick = function() {
    open()
};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.querySelector(".fa-times").classList.toggle("show");
    document.querySelector(".fa-bars").classList.toggle("show");
}

