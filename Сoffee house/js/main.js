let slidesPerView;

if (document.documentElement.offsetWidth > 1350) {
  slidesPerView = 3;
} else if (
  document.documentElement.offsetWidth <= 1350 &&
  document.documentElement.offsetWidth > 900
) {
  slidesPerView = 2;
} else if (
  document.documentElement.offsetWidth <= 900 &&
  document.documentElement.offsetWidth > 750
) {
  slidesPerView = 1.5;
} else if (document.documentElement.offsetWidth <= 750) {
  slidesPerView = 1;
}

new Swiper(".swiper.slider__inner", {
  loop: true,
  slidesPerView: slidesPerView,
  spaceBetween: 30,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Burger

const body = document.body;
const burgerButton = body.querySelector(".header__menu-btn");
const burgerNav = body.querySelector(".header__navigation");
const burgerLines = body.querySelectorAll(".header__menu-line");
const burgerList = body.querySelector(".header__list");

const closeClick = new CustomEvent("click");

burgerButton.addEventListener("click", burgerMenuActive);

function burgerMenuActive(event) {
  body.classList.toggle("scroll-lock");
  burgerNav.classList.toggle("active");
  burgerList.classList.toggle("menu__list");

  burgerLines[0].classList.toggle("menu__line-1");
  burgerLines[1].classList.toggle("menu__line-2");
  burgerLines[2].classList.toggle("menu__line-3");

  body.addEventListener("click", clickOutOfNavigation);
  body.addEventListener("keydown", exitKey);
}

function clickOutOfNavigation(event) {
  if (!burgerNav.classList.contains("active")) return;
  if (event.target.closest(".header__list")) return;
  if (event.target.closest(".header__navigation")) return;
  if (event.target.closest(".header__menu-btn") === burgerButton) return;

  burgerButton.dispatchEvent(closeClick);
}

function exitKey(event) {
  if (!burgerNav.classList.contains("active")) return;
  if (event.code !== "Escape") return;

  burgerButton.dispatchEvent(closeClick);
}
