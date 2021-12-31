// Carousel container
const track = document.querySelector(".carousel-track");
// store all tracks in  the carousel in an array 
const slides = Array.from(track.children);
// Bring in next and previous buttons
const nextButton = document.querySelector(".carousel--button-right");
const prevButton = document.querySelector(".carousel--button-left");
 const currentSlide = track.querySelector(".current-slide");


//  Storing the size of the carousel width in a variable
const slideWidth = slides[0].getBoundingClientRect().width;


//  Setting the initial position of each slide
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
// Setting the position for each slide in the carousel woth forEach method 
slides.forEach(setSlidePosition);


//  When i click the prevButton, the current slide will move to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
});

// When i click the nextButton, the current slide will move to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
});

// 
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
