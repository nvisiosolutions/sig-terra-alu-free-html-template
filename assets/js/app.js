// Temp

console.log(window.innerHeight)

// Temp


const slides = document.querySelectorAll(".page");
const allPage = document.getElementById('all-page')
const currentPage = document.getElementById('current-page')
// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
// select next slide button
const nextSlide = document.querySelector("#next");
// select prev slide button
const prevSlide = document.querySelector("#prev");

// Set all page number
allPage.innerHTML = slides.length
// Set current page number
currentPage.innerHTML = curSlide + 1

slides.forEach((slide, indx) => {
    slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
});

prevSlide.disabled = true
nextSlide.disabled = false

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    currentPage.innerHTML = curSlide + 1
    
    prevSlide.disabled = false
    if (curSlide + 1 === 4) {
        nextSlide.disabled = true
    } else {
        nextSlide.disabled = false;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
        slide.style.transition = `all 0.5s`;
    });
});

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    currentPage.innerHTML = curSlide + 1

    nextSlide.disabled = false
    if (curSlide + 1 === 1) {
        prevSlide.disabled = true;
    } else {
        prevSlide.disabled = false;
    }
  
    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
        slide.style.transition = `all 0.5s`;
    });
});