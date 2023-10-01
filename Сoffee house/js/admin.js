const body = document.body;

const asideList = body.querySelector(".admin-panel__sidebar__list");
const tables = body.querySelector(".admin-panel__tables");
const editBox = body.querySelector(".admin-panel__edit-box");

asideList.addEventListener("click", makeActive);
tables.addEventListener("click", removeRow);
tables.addEventListener("click", editRow);

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

// Table

function removeRow(event) {
  if (!event.target.closest(".admin-panel__remove-button")) return;
  if (!event.target.classList.contains("admin-panel__button-line")) return;

  event.target.closest(".admin-panel__table__row").remove();
}

// Edit button

const editForm = body.querySelector(".admin-panel__form");

const inputId = body.querySelector("textarea#admin-id");
const inputHeading = body.querySelector("textarea#admin-heading");
const inputArticle = body.querySelector("textarea#admin-article");
const inputDate = body.querySelector("input#admin-date");

const formSaveButton = body.querySelector(".admin-panel__form__save");
const formCancelButton = body.querySelector(".admin-panel__form__cancel");

function editRow(event) {
  if (!event.target.closest(".admin-panel__add-button")) return;
  if (!event.target.classList.contains("admin-panel__button-line")) return;

  event.target.closest(".admin-panel__table").classList.toggle("show");
  editBox.classList.toggle("show");

  // Edit
  const currentRow = event.target.closest(".admin-panel__table__row");
  const currentColumns = currentRow.querySelectorAll(
    ".admin-panel__table__item"
  );

  const currentId = currentColumns[0];
  const currentHeading = currentColumns[1];
  const currentArticle = currentColumns[2];
  const currentDate = currentColumns[3];

  inputId.value = currentId.innerText;
  inputHeading.value = currentHeading.innerText;
  inputArticle.value = currentArticle.innerText;
  inputDate.value = currentDate.innerText;

  formSaveButton.addEventListener("click", saveChanges);
  formCancelButton.addEventListener("click", cancelChanges);

  function saveChanges() {
    currentId.innerText = inputId.value;
    currentHeading.innerText = inputHeading.value;
    currentArticle.innerText = inputArticle.value;
    currentDate.innerText = inputDate.value;

    event.target.closest(".admin-panel__table").classList.add("show");
    editBox.classList.remove("show");
  }

  function cancelChanges() {
    event.target.closest(".admin-panel__table").classList.add("show");
    editBox.classList.remove("show");
  }
}
