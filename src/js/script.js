'use strict';

const scrollBtn = document.querySelector(".intro__scroll-btn");
const scrollSection = document.getElementById('#first');

const year = new Date().getFullYear().toString();

scrollBtn.addEventListener("click", () => {
  scrollSection.scrollIntoView(true);
});

window.addEventListener("load", () => {
  document.getElementById("year").textContent = year;
})