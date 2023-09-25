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
  }
  if (event.target.id === "dessert") {
    dessertSection.classList.remove("hide");
    coffeeSection.classList.add("hide");

    translate = 102;
    menuBox.style.width = "82px";
  }

  menuBox.style.transform = `translateX(${translate}px)`;
}
