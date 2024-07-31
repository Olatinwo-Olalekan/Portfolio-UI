'use strict';

//hamburger menu
const links = document.getElementById("links");
const hamburger = document.getElementById("hamburger");

// const openMenu = function () {
// //   links.classList.add("links");
// };

hamburger.addEventListener("click", function() {
    hamburger.innerHTML = '&times'
    links.style.display = 'block'  
});
