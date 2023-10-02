const body = document.body;

const menuSelect = body.querySelector(".menu__type__list");
const menuBox = body.querySelector(".menu__type__box");

const coffeeSection = body.querySelector(".menu__first-section");
const dessertSection = body.querySelector(".menu__second-section");

let buttonCooldown = false;

menuSelect.addEventListener("click", changeMenuType);

function changeMenuType(event) {
  if (!event.target.classList.contains("menu__type__image")) return;
  if (buttonCooldown === true) return;

  resetCooldown();

  let translate = 0;

  if (event.target.id === "coffe") {
    coffeeSection.classList.remove("hide");
    coffeeSection.classList.remove("shelfRemove");

    dessertSection.classList.add("hide");
    removeShelf(dessertSection);

    if (document.documentElement.offsetWidth <= 650) {
      menuBox.style.width = "65px";
    } else {
      menuBox.style.width = "75px";
    }

    translate = 0;

    coffeeSection.classList.remove("menu__first-section__hide");
    dessertSection.classList.add("menu__second-section__hide");
  }
  if (event.target.id === "dessert") {
    dessertSection.classList.remove("hide");
    dessertSection.classList.remove("shelfRemove");

    coffeeSection.classList.add("hide");
    removeShelf(coffeeSection);

    if (document.documentElement.offsetWidth <= 650) {
      menuBox.style.width = "70px";
      translate = 95;
    } else {
      menuBox.style.width = "82px";
      translate = 102;
    }

    coffeeSection.classList.add("menu__first-section__hide");
    dessertSection.classList.remove("menu__second-section__hide");
  }

  menuBox.style.transform = `translateX(${translate}px)`;

  function resetCooldown() {
    buttonCooldown = true;

    setTimeout(() => {
      buttonCooldown = false;
    }, 1000);
  }
}

function removeShelf(elem) {
  setTimeout(() => {
    elem.classList.toggle("shelfRemove");
  }, 1000);
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

// Fade animation
const options = {
  threshold: 0.4,
};

const reveal = function (entries, scrollObserver) {
  entries.forEach((entry) => {
    let side = wichSide(entry.target);

    if (entry.isIntersecting) {
      entry.target.classList.remove(side);
      entry.target.classList.add(side + "-show");
    } else {
      entry.target.classList.remove(side + "-show");
      entry.target.classList.add(side);
    }
  });
};

const scrollObserver = new IntersectionObserver(reveal, options);

const hidedElementsLeft = body.querySelectorAll(".fadeInLeft");
const hidedElementsRight = body.querySelectorAll(".fadeInRight");
const hidedElementsDown = body.querySelectorAll(".fadeInDown");
const hidedElementsCenter = body.querySelectorAll(".fadeInCenter");

hidedElementsLeft.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsRight.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsDown.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsCenter.forEach((element) => {
  scrollObserver.observe(element);
});

function wichSide(element) {
  if (
    element.classList.contains("fadeInLeft") ||
    element.classList.contains("fadeInLeft-show")
  )
    return "fadeInLeft";

  if (
    element.classList.contains("fadeInRight") ||
    element.classList.contains("fadeInRight-show")
  )
    return "fadeInRight";

  if (
    element.classList.contains("fadeInDown") ||
    element.classList.contains("fadeInDown-show")
  )
    return "fadeInDown";

  if (
    element.classList.contains("fadeInCenter") ||
    element.classList.contains("fadeInCenter-show")
  )
    return "fadeInCenter";
}
