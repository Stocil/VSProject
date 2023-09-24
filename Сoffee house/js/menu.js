const body = document.body;

const menuSelect = body.querySelector(".menu__type__list");
const menuBox = body.querySelector(".menu__type__box");

const coffeeShelf = body.querySelector(".menu__shelf__coffee");
const teaShelf = body.querySelector(".menu__shelf__cup");

menuSelect.addEventListener("click", changeMenuType);

function changeMenuType(event) {
  if (!event.target.classList.contains("menu__type__image")) return;

  let translate = 0;
  if (event.target.id === "coffe") {
    teaShelf.classList.add("hide");
    coffeeShelf.classList.remove("hide");

    menuBox.style.width = "75px";
    translate = 0;
  }
  if (event.target.id === "dessert") {
    teaShelf.classList.remove("hide");
    coffeeShelf.classList.add("hide");

    translate = 102;
    menuBox.style.width = "82px";
  }

  menuBox.style.transform = `translateX(${translate}px)`;
}
