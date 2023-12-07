// header

const burger = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-xmark");
  nav.classList.toggle("active");
});
