const body = document.body;

const asideList = body.querySelector(".admin-panel__sidebar__list");
const tables = body.querySelector(".admin-panel__tables");

asideList.addEventListener("click", makeActive);

function makeActive(event) {
  if (!event.target.classList.contains("admin-panel__sidebar__item")) return;

  if (body.querySelector(".active")) {
    body.querySelector(".active").classList.toggle("active");
  }

  event.target.classList.add("active");
  showTable(event.target);
}

function showTable(elem) {
  const listNumber = +elem.id.split("-")[elem.id.split("-").length - 1];

  if (tables.querySelector(".show")) {
    tables.querySelector(".show").classList.remove("show");
  }

  tables
    .querySelectorAll(".admin-panel__table")
    [listNumber - 1].classList.add("show");
}
