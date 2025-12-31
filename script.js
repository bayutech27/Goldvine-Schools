const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});



/* ================= IMAGE SLIDER ================= */

const sliderTrack = document.getElementById("sliderTrack");
const slides = sliderTrack.querySelectorAll("img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateSlider() {
  sliderTrack.style.transform =
    "translateX(-" + currentIndex * 100 + "%)";
}

nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlider();
});
