const nav = document.querySelector(".dropdown");
const link = document.querySelector(".header .link");
const links = document.querySelectorAll(".link li");

nav.addEventListener("click", () => {
  //   console.log(link);
  link.classList.toggle("open");
});

// const slide = document.querySelector('.slidex');
// const slideimg = document.querySelectorAll('.slidex img');
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('.nextBtn');

// let counter = 1;
// let size = slideimg[0].clientWidth;

// slide.style.transform='translate('+ (-size * counter) + 'px)';

let sliderImages = document.querySelectorAll(".slide");

let arrowleft = document.querySelector("#arrow-left");
let arrowright = document.querySelector("#arrow-right");

let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideright() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

arrowleft.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowright.addEventListener("click", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  slideright();
});

startSlide();
