"use strict";

//making button functional
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
  console.log("button clicked");
});

//hamburger menu
const links = document.getElementById("links");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeButton");

const openMenu = function () {
  links.classList.remove("hidden");
};

const closeMenu = function () {
  links.classList.add("hidden");
};

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
