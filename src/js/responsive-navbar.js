/* ========= NAVBAR RESPONSIVE ========= */
// query select
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// listener add
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
