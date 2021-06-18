let sliderImages = document.querySelectorAll(".slide");
let buttonLeft = document.getElementById("button-left");
let buttonRight = document.getElementById("button-right");
let current = 0;

// Clear all images
const reset = () => {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Start slider
const startSlide = () => {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
const slideLeft = () => {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
  scale();
}

// Show next
const slideRight = () => {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
  scale();
}

// Left button click
buttonLeft.addEventListener("click", ()=> {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right button click
buttonRight.addEventListener("click", ()=> {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// Carousel

let sliderCarousel = document.querySelectorAll(".image-carousel");

const resetScale = ()=>{
    for(let i = 0; i < sliderCarousel.length; i++ ){
        sliderCarousel[i].style.transition = "all .5s";
        sliderCarousel[i].style.transform = "scale(1)";
        sliderCarousel[i].style.zIndex = "0";
    }
}

const scale = () =>{
    resetScale();
    sliderCarousel[current].style.transform = "scale(1.2)";
    sliderCarousel[current].style.zIndex = "999";
}

