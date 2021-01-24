const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 450) {
    header.style.backgroundColor = "#232526";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
