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
