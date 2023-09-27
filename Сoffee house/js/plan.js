const body = document.body;

const image = body.querySelector(".plan__box");

image.addEventListener("click", booking);

function booking(event) {
  if (!event.target.closest(".plan__table")) return;

  const messageBox = document.createElement("div");
  messageBox.classList.add("plan__message-box");
  image.append(messageBox);
  let message;

  if (event.target.closest(".plan__table").classList.contains("busy")) {
    message = "Этот стол уже забронирован";
  } else if (event.target.closest(".plan__table").classList.contains("book")) {
    message = "Вы убрали бронь со стола";
    event.target.closest(".plan__table").classList.toggle("book");
  } else {
    message = "Вы забронировали стол";
    event.target.closest(".plan__table").classList.toggle("book");
  }

  messageBox.innerText = message;
  messageBox.style.top = getMessageCord(event.target, messageBox).top;
  messageBox.style.left = getMessageCord(event.target, messageBox).left;

  messageBox.classList.add("plan__message-box__active");
  setTimeout(() => {
    messageBox.classList.remove("plan__message-box__active");
  }, 1500);
  setTimeout(() => {
    messageBox.remove();
  }, 1800);

  function getMessageCord(targetElem, selfBox) {
    const cord = {};

    cord.left =
      Math.round(
        targetElem.getBoundingClientRect().left -
          image.getBoundingClientRect().left -
          selfBox.offsetWidth / 2
      ) + "px";

    cord.top =
      Math.round(
        targetElem.getBoundingClientRect().top -
          image.getBoundingClientRect().top +
          selfBox.offsetHeight
      ) + "px";
    return cord;
  }
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
