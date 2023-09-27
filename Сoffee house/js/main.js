// const body = document.body;

// // Stock slider

// // Games slider

// const gamesSliderInner = body.querySelector(".games__slider__inner");
// const gamesSlider = body.querySelector(".games__slider__list");
// const gamesSliderGap = +getComputedStyle(gamesSlider).gap.slice(0, -2);
// const gamesSliderItemCount = gamesSlider.querySelectorAll(
//   ".games__slider__item"
// ).length;
// const gamesSliderGapCount = gamesSliderItemCount - 1;
// const gamesSliderItemWidth = body.querySelector(
//   ".games__slider__item"
// ).clientWidth;

// const gamesSliderWidth =
//   gamesSliderItemCount * gamesSliderItemWidth +
//   gamesSliderGap * gamesSliderGapCount;

// gamesSlider.style.width = gamesSliderWidth + "px";

// // Games slider buttons

// let gamesSliderTranslate = 0;

// gamesSlider.addEventListener("click", gamesSlide);

// function gamesSlide(event) {
//   if (event.target.closest(".games__slider__item").classList.contains("active"))
//     return;

//   event.preventDefault();
//   const side = whichButton(event.target.closest(".games__slider__item"));

//   if (side === "left") {
//     gamesSliderTranslate += 430;
//   } else if (side === "right") {
//     gamesSliderTranslate -= 430;
//   }

//   gamesSlider.style.transform = `translateX(${gamesSliderTranslate}px)`;
//   // gamesSlider.querySelector(".active").classList.toggle("active");
//   // event.target.closest(".games__slider__item").classList.toggle("active");
// }

// function whichButton(elem) {
//   // Left
//   if (elem.nextElementSibling) {
//     if (elem.nextElementSibling.classList.contains("active")) return "left";
//   }

//   if (elem.previousElementSibling) {
//     if (elem.previousElementSibling.classList.contains("active"))
//       return "right";
//   }
// }

new Swiper(".swiper.slider__inner", {
  loop: true,
  slidesPerView: 3,
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
