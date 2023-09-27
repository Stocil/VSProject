const body = document.body;

const menuSelect = body.querySelector(".menu__type__list");
const menuBox = body.querySelector(".menu__type__box");

const coffeeSection = body.querySelector(".menu__first-section");
const dessertSection = body.querySelector(".menu__second-section");

menuSelect.addEventListener("click", changeMenuType);

function changeMenuType(event) {
  if (!event.target.classList.contains("menu__type__image")) return;

  let translate = 0;
  if (event.target.id === "coffe") {
    dessertSection.classList.add("hide");
    coffeeSection.classList.remove("hide");

    menuBox.style.width = "75px";
    translate = 0;

    coffeeSection.classList.remove("menu__first-section__hide");
    dessertSection.classList.add("menu__second-section__hide");
  }
  if (event.target.id === "dessert") {
    dessertSection.classList.remove("hide");
    coffeeSection.classList.add("hide");

    translate = 102;
    menuBox.style.width = "82px";

    coffeeSection.classList.add("menu__first-section__hide");
    dessertSection.classList.remove("menu__second-section__hide");
  }

  menuBox.style.transform = `translateX(${translate}px)`;
}

// Burger

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
