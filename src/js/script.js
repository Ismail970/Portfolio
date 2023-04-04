'use strict';

const scrollBtn = document.querySelector(".sroller");
const scrollSection = document.getElementById('#first');

const curYear = new Date().getFullYear().toString();
document.getElementById("year").textContent = curYear;

scrollBtn.addEventListener("click", function () {
  // smooth scrolling
  scrollSection.scrollIntoView({ behavior: "smooth" });
});