const body = document.body;

const image = body.querySelector(".plan__box");
const formTable = body.querySelector("#table");

image.addEventListener("click", booking);
formTable.addEventListener("blur", bookingViaTheForm);

const tables = body.querySelectorAll(".plan__table").forEach((table) => {
  const tableNumberBox = document.createElement("div");
  const tableNumberText = table.id.slice("1");

  tableNumberBox.innerText = tableNumberText;
  table.append(tableNumberBox);
});

function booking(event) {
  if (!event.target.closest(".plan__table")) return;

  if (event.target.closest(".plan__table").classList.contains("busy")) {
    return;
  } else if (event.target.closest(".plan__table").classList.contains("book")) {
    event.target.closest(".plan__table").classList.toggle("book");
  } else {
    if (body.querySelector(".book")) {
      body.querySelector(".book").classList.toggle("book");
    }

    event.target.closest(".plan__table").classList.toggle("book");
  }

  // Write
  const bookTable = [];

  body.querySelectorAll(".book").forEach((table) => {
    bookTable.push(table.id.slice(1));
  });

  const tablesNumberStr = bookTable.join(",");
  formTable.value = tablesNumberStr;
}

function bookingViaTheForm(event) {
  if (event.target.value.length == "0") {
    body.querySelectorAll(".book").forEach((table) => {
      table.classList.remove("book");
    });

    return;
  }

  body.querySelectorAll(".book").forEach((table) => {
    table.classList.remove("book");
  });

  const tableForBook = event.target.value.split(",").map((number) => {
    const tableId = "t" + number;

    if (body.querySelector(`#${tableId}`)) {
      body.querySelector(`#${tableId}`).classList.add("book");
    }
  });
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
