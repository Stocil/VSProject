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
