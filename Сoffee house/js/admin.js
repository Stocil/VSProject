const body = document.body;

const asideList = body.querySelector(".admin-panel__sidebar__list");
const tables = body.querySelector(".admin-panel__tables");

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

function editRow(event) {
  if (!event.target.closest(".admin-panel__add-button")) return;
  if (!event.target.classList.contains("admin-panel__button-line")) return;

  // Stocks
  if (event.target.closest(".admin-panel__stock-table")) {
    event.target.closest(".admin-panel__stock-table").classList.toggle("show");

    const inputId = body.querySelector("textarea#admin-stock-id");
    const inputHeading = body.querySelector("textarea#admin-stock-heading");
    const inputArticle = body.querySelector("textarea#admin-stock-article");
    const inputDate = body.querySelector("input#admin-stock-date");
    const inputPhoto = body.querySelector("textarea#admin-stock-photo");

    const form = body.querySelector(".admin-panel__stocks-edit-box");
    const formSaveButton = form.querySelector(".admin-panel__form__save");
    const formCancelButton = form.querySelector(".admin-panel__form__cancel");

    const stocksEditBox = body.querySelector(".admin-panel__stocks-edit-box");
    stocksEditBox.classList.toggle("show");

    // Edit
    const currentRow = event.target.closest(".admin-panel__table__row");
    const currentColumns = currentRow.querySelectorAll(
      ".admin-panel__table__item"
    );

    const currentId = currentColumns[0];
    const currentHeading = currentColumns[1];
    const currentArticle = currentColumns[2];
    const currentDate = currentColumns[3];
    const currentPhoto = currentColumns[4];

    inputId.value = currentId.innerText;
    inputHeading.value = currentHeading.innerText;
    inputArticle.value = currentArticle.innerText;
    inputDate.value = currentDate.innerText;
    inputPhoto.value = currentPhoto.innerText;

    formSaveButton.addEventListener("click", saveChanges);
    formCancelButton.addEventListener("click", cancelChanges);

    function saveChanges() {
      currentId.innerText = inputId.value;
      currentHeading.innerText = inputHeading.value;
      currentArticle.innerText = inputArticle.value;
      currentDate.innerText = inputDate.value;
      currentPhoto.innerText = inputPhoto.value;

      event.target.closest(".admin-panel__table").classList.add("show");
      stocksEditBox.classList.remove("show");

      formSaveButton.removeEventListener("click", saveChanges);
    }

    function cancelChanges() {
      event.target.closest(".admin-panel__table").classList.add("show");
      stocksEditBox.classList.remove("show");

      formCancelButton.removeEventListener("click", cancelChanges);
    }
  }

  // Games
  if (event.target.closest(".admin-panel__game-table")) {
    event.target.closest("#admin-table-2").classList.toggle("show");

    const inputId = body.querySelector("textarea#admin-games-id");
    const inputName = body.querySelector("textarea#admin-games-name");
    const inputDescription = body.querySelector(
      "textarea#admin-games-description"
    );
    const inputDesc = body.querySelector("textarea#admin-games-desc");
    const inputAbout = body.querySelector("textarea#admin-games-about");
    const inputRules = body.querySelector("textarea#admin-games-rules");
    const inputPhoto = body.querySelector("textarea#admin-games-photo");

    const form = body.querySelector(".admin-panel__games-edit-box");
    const formSaveButton = form.querySelector(".admin-panel__form__save");
    const formCancelButton = form.querySelector(".admin-panel__form__cancel");

    const gamesEditBox = body.querySelector(".admin-panel__games-edit-box");
    gamesEditBox.classList.toggle("show");

    // Edit
    const currentRow = event.target.closest(".admin-panel__table__row");
    const currentColumns = currentRow.querySelectorAll(
      ".admin-panel__table__item"
    );

    const currentId = currentColumns[0];
    const currentName = currentColumns[1];
    const currentDescription = currentColumns[2];
    const currentDesc = currentColumns[3];
    const currentAbout = currentColumns[4];
    const currentRules = currentColumns[5];
    const currentPhoto = currentColumns[6];

    inputId.value = currentId.innerText;
    inputName.value = currentName.innerText;
    inputDescription.value = currentDescription.innerText;
    inputDesc.value = currentDesc.innerText;
    inputAbout.value = currentAbout.innerText;
    inputRules.value = currentRules.innerText;
    inputPhoto.value = currentPhoto.innerText;

    formSaveButton.addEventListener("click", saveChanges);
    formCancelButton.addEventListener("click", cancelChanges);

    function saveChanges() {
      currentId.innerText = inputId.value;
      currentName.innerText = inputName.value;
      currentDescription.innerText = inputDescription.value;
      currentDesc.innerText = inputDesc.value;
      currentAbout.innerText = inputAbout.value;
      currentRules.innerText = inputRules.value;
      currentPhoto.innerText = inputPhoto.value;

      event.target.closest(".admin-panel__table").classList.add("show");
      gamesEditBox.classList.remove("show");

      formSaveButton.removeEventListener("click", saveChanges);
    }

    function cancelChanges() {
      event.target.closest(".admin-panel__table").classList.add("show");
      gamesEditBox.classList.remove("show");

      formCancelButton.removeEventListener("click", cancelChanges);
    }
  }

  // Menu
  if (event.target.closest(".admin-panel__menu-table")) {
    event.target.closest("#admin-table-3").classList.toggle("show");

    const inputId = body.querySelector("textarea#admin-menu-id");
    const inputType = body.querySelector("textarea#admin-menu-type");
    const inputName = body.querySelector("textarea#admin-menu-name");
    const inputPrice = body.querySelector("textarea#admin-menu-price");

    const form = body.querySelector(".admin-panel__menu-edit-box");
    const formSaveButton = form.querySelector(".admin-panel__form__save");
    const formCancelButton = form.querySelector(".admin-panel__form__cancel");

    const menuEditBox = body.querySelector(".admin-panel__menu-edit-box");
    menuEditBox.classList.toggle("show");

    // Edit
    const currentRow = event.target.closest(".admin-panel__table__row");
    const currentColumns = currentRow.querySelectorAll(
      ".admin-panel__table__item"
    );

    const currentId = currentColumns[0];
    const currentType = currentColumns[1];
    const currentName = currentColumns[2];
    const currentPrice = currentColumns[3];

    inputId.value = currentId.innerText;
    inputType.value = currentType.innerText;
    inputName.value = currentName.innerText;
    inputPrice.value = currentPrice.innerText;

    formSaveButton.addEventListener("click", saveChanges);
    formCancelButton.addEventListener("click", cancelChanges);

    function saveChanges() {
      currentId.innerText = inputId.value;
      currentType.innerText = inputType.value;
      currentName.innerText = inputName.value;
      currentPrice.innerText = inputPrice.value;

      event.target.closest(".admin-panel__table").classList.add("show");
      menuEditBox.classList.remove("show");

      formSaveButton.removeEventListener("click", saveChanges);
    }

    function cancelChanges() {
      event.target.closest(".admin-panel__table").classList.add("show");
      menuEditBox.classList.remove("show");

      formCancelButton.removeEventListener("click", cancelChanges);
    }
  }

  // Card
  if (event.target.closest(".admin-panel__card-table")) {
    event.target.closest("#admin-table-4").classList.toggle("show");

    const inputId = body.querySelector("textarea#admin-card-id");
    const inputGameId = body.querySelector("textarea#admin-card-gameId");
    const inputPhoto = body.querySelector("textarea#admin-card-photo");

    const form = body.querySelector(".admin-panel__card-edit-box");
    const formSaveButton = form.querySelector(".admin-panel__form__save");
    const formCancelButton = form.querySelector(".admin-panel__form__cancel");

    const menuEditBox = body.querySelector(".admin-panel__card-edit-box");
    menuEditBox.classList.toggle("show");

    // Edit
    const currentRow = event.target.closest(".admin-panel__table__row");
    const currentColumns = currentRow.querySelectorAll(
      ".admin-panel__table__item"
    );

    const currentId = currentColumns[0];
    const currentGameId = currentColumns[1];
    const currentPhoto = currentColumns[2];

    inputId.value = currentId.innerText;
    inputGameId.value = currentGameId.innerText;
    inputPhoto.value = currentPhoto.innerText;

    formSaveButton.addEventListener("click", saveChanges);
    formCancelButton.addEventListener("click", cancelChanges);

    function saveChanges() {
      currentId.innerText = inputId.value;
      currentGameId.innerText = inputGameId.value;
      currentPhoto.innerText = inputPhoto.value;

      event.target.closest(".admin-panel__table").classList.add("show");
      menuEditBox.classList.remove("show");

      formSaveButton.removeEventListener("click", saveChanges);
    }

    function cancelChanges() {
      event.target.closest(".admin-panel__table").classList.add("show");
      menuEditBox.classList.remove("show");

      formCancelButton.removeEventListener("click", cancelChanges);
    }
  }

  // Book
  if (event.target.closest(".admin-panel__book-table")) {
    event.target.closest("#admin-table-5").classList.toggle("show");

    const inputId = body.querySelector("textarea#admin-book-id");
    const inputName = body.querySelector("textarea#admin-book-name");
    const inputNumber = body.querySelector("input#admin-book-number");
    const inputDate = body.querySelector("input#admin-book-date");
    const inputTime = body.querySelector("input#admin-book-time");

    const form = body.querySelector(".admin-panel__book-edit-box");
    const formSaveButton = form.querySelector(".admin-panel__form__save");
    const formCancelButton = form.querySelector(".admin-panel__form__cancel");

    const menuEditBox = body.querySelector(".admin-panel__book-edit-box");
    menuEditBox.classList.toggle("show");

    // Edit
    const currentRow = event.target.closest(".admin-panel__table__row");
    const currentColumns = currentRow.querySelectorAll(
      ".admin-panel__table__item"
    );

    const currentId = currentColumns[0];
    const currentName = currentColumns[1];
    const currentNumber = currentColumns[2];
    const currentDate = currentColumns[3];
    const currentTime = currentColumns[4];

    inputId.value = currentId.innerText;
    inputName.value = currentName.innerText;
    inputNumber.value = currentNumber.innerText;
    inputDate.value = currentDate.innerText;
    inputTime.value = currentTime.innerText;

    formSaveButton.addEventListener("click", saveChanges);
    formCancelButton.addEventListener("click", cancelChanges);

    function saveChanges() {
      currentId.innerText = inputId.value;
      currentName.innerText = inputName.value;
      currentNumber.innerText = inputNumber.value;
      currentDate.innerText = inputDate.value;
      currentTime.innerText = inputTime.value;

      event.target.closest(".admin-panel__table").classList.add("show");
      menuEditBox.classList.remove("show");

      formSaveButton.removeEventListener("click", saveChanges);
    }

    function cancelChanges() {
      event.target.closest(".admin-panel__table").classList.add("show");
      menuEditBox.classList.remove("show");

      formCancelButton.removeEventListener("click", cancelChanges);
    }
  }
}

//Create new row

tables.addEventListener("click", createRow);

function createRow(event) {
  if (!event.target.closest(".admin-panel__create-button")) return;

  const currentTable = event.target.closest(".admin-panel__table");

  const newRow = document.createElement("div");
  newRow.classList.add("admin-panel__table__row");

  const tableLength = currentTable.firstElementChild.children.length - 2;

  for (let count = 0; count < tableLength; count++) {
    const newColumn = document.createElement("p");
    newColumn.classList.add("admin-panel__table__item");
    newRow.append(newColumn);
  }

  const newAddButton = document.createElement("div");
  const newAddButtonLine1 = document.createElement("span");
  const newAddButtonLine2 = document.createElement("span");

  newAddButton.classList.add(
    "admin-panel__table__item",
    "admin-panel__add-button"
  );
  newAddButtonLine1.classList.add("admin-panel__button-line");
  newAddButtonLine2.classList.add("admin-panel__button-line");

  const newRemoveButton = document.createElement("div");
  const newRemoveButtonLine = document.createElement("span");

  newRemoveButton.classList.add(
    "admin-panel__table__item",
    "admin-panel__remove-button"
  );
  newRemoveButtonLine.classList.add("admin-panel__button-line");

  newAddButton.append(newAddButtonLine1, newAddButtonLine2);
  newRemoveButton.append(newRemoveButtonLine);

  newRow.append(newAddButton, newRemoveButton);

  if (
    event.target
      .closest(".admin-panel__table")
      .classList.contains("admin-panel__game-table")
  ) {
    newRow.classList.add("admin-panel__game-table");
  }

  if (
    event.target
      .closest(".admin-panel__table")
      .classList.contains("admin-panel__menu-table")
  ) {
    newRow.classList.add("admin-panel__menu-table");
  }

  if (
    event.target
      .closest(".admin-panel__table")
      .classList.contains("admin-panel__card-table")
  ) {
    newRow.classList.add("admin-panel__card-table");
  }

  if (
    event.target
      .closest(".admin-panel__table")
      .classList.contains("admin-panel__book-table")
  ) {
    newRow.classList.add("admin-panel__book-table");
  }

  currentTable.append(newRow);

  // Edit
  const clickEvent = new CustomEvent("click");

  const currentButton =
    currentTable.lastElementChild.children[
      currentTable.lastElementChild.children.length - 2
    ].lastElementChild;

  currentButton.click();

  newAddButton.dispatchEvent(clickEvent);
}
