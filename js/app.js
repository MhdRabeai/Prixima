$(document).ready(function () {
  // Hero Slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    smartSpeed: 1000,
    nav: true,
    dots: true,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: { nav: false },
      768: { nav: true },
    },
  });
  //project-slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 15,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: { items: 1, nav: false, margin: 0 },
      768: { items: 2 },
      1140: {
        items: 2,
        center: true,
      },
    },
  });
  //reviews
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
  });
});
// counter
let nums = document.querySelectorAll(".nums .num span");
let section = document.querySelector(".milston");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 410) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
