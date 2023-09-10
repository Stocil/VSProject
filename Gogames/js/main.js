const body = document.body;
const burgerButton = body.querySelector(".header__menu-btn");
const burgerNav = body.querySelector(".header__nav");
const burgerLines = body.querySelectorAll(".header__menu-line");
const burgerList = body.querySelector(".header__list");
const burgerListButton = body.querySelector(".header_button");

const closeClick = new CustomEvent("click");

burgerButton.addEventListener("click", burgerMenuActive);

function burgerMenuActive(event) {
  body.classList.toggle("scroll-lock");
  burgerNav.classList.toggle("active");
  burgerList.classList.toggle("menu__list");
  burgerListButton.classList.toggle("menu__list-button");

  burgerLines[0].classList.toggle("menu__line-1");
  burgerLines[1].classList.toggle("menu__line-2");
  burgerLines[2].classList.toggle("menu__line-3");

  body.addEventListener("click", clickOutOfNavigation);
  body.addEventListener("keydown", exitKey);
}

function clickOutOfNavigation(event) {
  if (!burgerNav.classList.contains("active")) return;
  if (event.target.closest(".header_nav-list")) return;
  if (event.target.closest(".header__menu-btn") === burgerButton) return;

  burgerButton.dispatchEvent(closeClick);
}

function exitKey(event) {
  if (!burgerNav.classList.contains("active")) return;
  if (event.code !== "Escape") return;

  burgerButton.dispatchEvent(closeClick);
}
