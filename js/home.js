//slider////
const sliderItems = document.querySelectorAll(".slider-item");
let currentItem = 0;

function showSlide() {
  sliderItems[currentItem].classList.add("active");
}

function hideSlide() {
  sliderItems[currentItem].classList.remove("active");
}

function nextSlide() {
  hideSlide();
  currentItem = (currentItem + 1) % sliderItems.length;
  showSlide();
}

showSlide();
setInterval(nextSlide, 2000);

// filter about category////

const allFilterItems = document.querySelectorAll(".filter-item");
const allFilterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  allFilterBtns[0].classList.add("active-btn");
});

// filter btn
allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

// filter by class
function showFilteredContent(btn) {
  allFilterItems.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      resetActiveBtn();
      btn.classList.add("active-btn");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// remove when click other btn
function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

// footer//////
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// add cart
var count = 0;
function Add() {
  var cart = document.getElementById("cart-count");
  cart.innerHTML = ++count;
  localStorage.setItem("count", count);
}
