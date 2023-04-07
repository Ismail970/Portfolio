'use strict';

const scrollBtn = document.querySelector(".intro__scroll-btn");
const scrollSection = document.getElementById('#first');

const year = new Date().getFullYear().toString();

scrollBtn.addEventListener("click", () => {
  scrollSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("load", () => {
  document.getElementById("year").textContent = year;
})