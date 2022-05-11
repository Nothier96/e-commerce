//selecting elemtents for responsive navbar and slide function
const navSlide = () => {
  const mobile = document.querySelector(".mobile");
  const nav = document.querySelector(".navlink");
  const navli = document.querySelectorAll(".navlink li");

  mobile.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");
    //animate links
    navli.forEach((link, index) => {
      // use the if to animate anytime we click the mobile button(burger)
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    // mobile animation
    mobile.classList.toggle("toggle");
  });
};
navSlide();
// selecting elements for the slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const interval = 5000;
let slideInterval;

function nextSlide() {
  //getting current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for prev slide
  if (current.nextElementSibling) {
    //add prev
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 200);
}
function previouSlide() {
  //getting current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for prev slide
  if (current.previousElementSibling) {
    //add prev
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 200);
}

// button events
next.addEventListener("click", (e) => {
  nextSlide();
  // resetting the interval when we use the arrow to slide
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});
prev.addEventListener("click", (e) => {
  previouSlide();
  // resetting the interval when we use the arrow to slide
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});
// auto slide
if (auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, interval);
}
