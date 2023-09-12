const body = document.body;

// Top slider
const photoSliderInner = body.querySelector(".photo-slider__inner");
const photoSliderList = body.querySelector(".photo-slider__list");

const photoSliderGap = 12;
const photoSliderImageWidth = 251;

const photoSliderLeftButton = body.querySelector(
  ".photo-slider__button.left-btn"
);
const photoSliderRightButton = body.querySelector(
  ".photo-slider__button.right-btn"
);

const photoSliderListWidth = Math.round(
  photoSliderList.childElementCount * photoSliderImageWidth +
    (photoSliderList.childElementCount - 1) * photoSliderGap -
    photoSliderList.getBoundingClientRect().left
);

photoSliderList.style.width = photoSliderListWidth + "px";

let topTranslate = 0;
let isTopScroll = true;
let topInterval = setInterval(topSliderMove, 300);

photoSliderInner.addEventListener("pointerout", topSliderScroll);
photoSliderInner.addEventListener("pointerover", topSliderStop);

window.addEventListener("resize", checkSliderRightSide);

photoSliderLeftButton.addEventListener("click", topSliderScrollLeft);
photoSliderRightButton.addEventListener("click", topSliderScrollRight);

// Сontinue scrolling after the slider stops, if slider is not over
function topSliderScroll(event) {
  if (topSliderIsOver()) return;

  isTopScroll = true;

  topInterval = setInterval(topSliderMove, 300);
}

// Move slider, if slider is not over
function topSliderMove() {
  if (topSliderIsOver()) topSliderStop();

  topTranslate -= 10;
  photoSliderList.style.transform = `translateX(${topTranslate}px)`;
}

// Stop slider scroll
function topSliderStop(event) {
  isTopScroll = false;

  clearInterval(topInterval);
}

// Over check || if the current scroll + width of the visible area is greater than
// the maximum length of the slider, then slider is over
function topSliderIsOver() {
  if (-topTranslate + photoSliderInner.offsetWidth >= photoSliderListWidth) {
    photoSliderRightButton.style.opacity = "0";
    return true;
  } else {
    photoSliderRightButton.style.opacity = "1";
    return false;
  }
}

// Pressing the slider to the right side, when changing the width of the window
function checkSliderRightSide(event) {
  topSliderMove();
  if (
    photoSliderInner.offsetWidth -
      photoSliderList.getBoundingClientRect().right >
    photoSliderList.getBoundingClientRect().right - photoSliderInner.offsetWidth
  ) {
    topTranslate -=
      photoSliderList.getBoundingClientRect().right -
      photoSliderInner.offsetWidth;
  }
}

function topSliderScrollLeft(event) {
  if (topTranslate + 252 > 0) {
    topTranslate = 0;
  } else {
    topTranslate += 252;
  }

  topSliderMove();
}

// Limitation of slider buttons
function topSliderScrollRight(event) {
  if (
    -topTranslate + photoSliderInner.offsetWidth + 252 >
    photoSliderListWidth
  ) {
    topTranslate = -photoSliderListWidth + photoSliderInner.offsetWidth;
  } else {
    topTranslate -= 252;
  }

  topSliderMove();
}

// Bottom slider

const gifSliderInner = body.querySelector(".gif-slider__inner");
const gifSliderList = body.querySelector(".gif-slider__list");

const gifSliderGap = 12;
const gifSliderImageWidth = 251;

const gifSliderLeftButton = body.querySelector(".gif-slider__button.left-btn");
const gifSliderRightButton = body.querySelector(
  ".gif-slider__button.right-btn"
);

const gifSliderListWidth = Math.round(
  gifSliderList.childElementCount * gifSliderImageWidth +
    (gifSliderList.childElementCount - 1) * gifSliderGap -
    gifSliderList.getBoundingClientRect().left
);

gifSliderList.style.width = gifSliderListWidth + "px";

let botTranslate = 0;
let isBotScroll = true;
let botInterval = setInterval(botSliderMove, 300);

gifSliderInner.addEventListener("pointerout", botSliderScroll);
gifSliderInner.addEventListener("pointerover", botSliderStop);

window.addEventListener("resize", botCheckSliderRightSide);

gifSliderLeftButton.addEventListener("click", botSliderScrollLeft);
gifSliderRightButton.addEventListener("click", botSliderScrollRight);

// Сontinue scrolling after the slider stops, if slider is not over
function botSliderScroll(event) {
  if (botSliderIsOver()) return;

  isBotScroll = true;

  botInterval = setInterval(botSliderMove, 300);
}

// Move slider, if slider is not over
function botSliderMove() {
  if (botSliderIsOver()) botSliderStop();

  botTranslate -= 10;
  gifSliderList.style.transform = `translateX(${botTranslate}px)`;
}

// Stop slider scroll
function botSliderStop(event) {
  isBotScroll = false;

  clearInterval(botInterval);
}

function botSliderIsOver() {
  if (-botTranslate + gifSliderInner.offsetWidth >= gifSliderListWidth) {
    gifSliderRightButton.style.opacity = "0";
    return true;
  } else {
    gifSliderRightButton.style.opacity = "1";
    return false;
  }
}

function botCheckSliderRightSide(event) {
  botSliderMove();
  if (
    gifSliderInner.offsetWidth - gifSliderList.getBoundingClientRect().right >
    gifSliderList.getBoundingClientRect().right - gifSliderInner.offsetWidth
  ) {
    botTranslate -=
      gifSliderList.getBoundingClientRect().right - gifSliderInner.offsetWidth;
  }
}

function botSliderScrollLeft(event) {
  if (botTranslate + 252 > 0) {
    botTranslate = 0;
  } else {
    botTranslate += 252;
  }

  botSliderMove();
}

// Limitation of slider buttons
function botSliderScrollRight(event) {
  if (-botTranslate + gifSliderInner.offsetWidth + 252 > gifSliderListWidth) {
    botTranslate = -gifSliderListWidth + gifSliderInner.offsetWidth;
  } else {
    botTranslate -= 252;
  }

  botSliderMove();
}

// Hover
photoSliderInner.addEventListener("pointerover", showHeart);
photoSliderInner.addEventListener("pointerout", hideHeart);
photoSliderInner.addEventListener("click", likeHeart);

gifSliderInner.addEventListener("pointerover", showHeart);
gifSliderInner.addEventListener("pointerout", hideHeart);
gifSliderInner.addEventListener("click", likeHeart);

function showHeart(event) {
  if (!event.target.classList.contains("slider__item")) return;

  event.target.firstElementChild.style.filter = "opacity(50%)";
}

function hideHeart(event) {
  if (!event.target.classList.contains("slider__item")) return;

  event.target.firstElementChild.style.filter = "";
}

function likeHeart(event) {
  if (!event.target.classList.contains("slider__item")) return;

  event.target.firstElementChild.classList.toggle("liked");
  event.target.classList.toggle("like");
}

// Full screen -------

const worksInner = body.querySelector(".works__inner");
const fullScreenBox = body.querySelector(".full-screen");
const fullScreenImage = body.querySelector(".full-screen__image");
const fullScreenCloseButton = body.querySelector(".full-screen__close-button");
const fullScreenHeartButton = body.querySelector(".full-screen__heart-button");
let currentImage;

worksInner.addEventListener("click", fullScreen);
fullScreenCloseButton.addEventListener("click", closeFullScreen);
fullScreenHeartButton.addEventListener("click", addToLiked);

// Stop and start scroll sliders
fullScreenBox.addEventListener("pointerover", function (event) {
  topSliderStop();
  botSliderStop();
});

fullScreenBox.addEventListener("pointerout", function (event) {
  topSliderScroll();
  botSliderScroll();
});

// Full-screen open
function fullScreen(event) {
  if (!event.target.classList.contains("slider__images")) return;

  if (event.target.classList.contains("liked")) {
    makeHeartRed();
  } else {
    fullScreenHeartButton.classList.remove("liked");
  }

  event.target.removeEventListener("click", fullScreen);

  fullScreenImage.src = event.target.src;
  currentImage = event.target;
  closeFullScreen();
}

function closeFullScreen(elem) {
  // body.classList.toggle("scroll-lock"); // Mb add

  fullScreenBox.classList.toggle("full-screen__hide");
  fullScreenImage.classList.toggle("full-screen__image__hide");
  fullScreenCloseButton.classList.toggle("full-screen__close-button__hide");
  fullScreenHeartButton.classList.toggle("full-screen__heart-button__hide");
}

function addToLiked() {
  fullScreenHeartButton.classList.toggle("liked");

  body.querySelectorAll(".slider__images").forEach((img) => {
    if (img.src == fullScreenImage.src) {
      img.closest(".slider__item").classList.toggle("like");
      img.classList.toggle("liked");
    }
  });
}

function makeHeartRed() {
  fullScreenHeartButton.classList.add("liked");
}

// Full-sreen left/right button

const fullScreenLeftButton = body.querySelector(
  ".slider__button.full-screen__button.left-btn"
);

const fullScreenRightButton = body.querySelector(
  ".slider__button.full-screen__button.right-btn"
);

fullScreenLeftButton.addEventListener("click", fullScreenScrollLeft);
fullScreenRightButton.addEventListener("click", fullScreenScrollRight);

let rightButtonCooldown = false;
let leftButtonCooldown = false;

function fullScreenScrollLeft(event) {
  if (leftButtonCooldown) return;

  isRightEnd();
  isLeftEnd();

  leftButtonCooldown = true;
  leftCooldownRefresh();

  const click = new CustomEvent("click", function (event) {});

  closeFullScreen();

  if (!currentImage.closest(".slider__item").previousElementSibling) return;

  // Sroll background slider
  scrollBackgroundSliderLeft();

  currentImage
    .closest(".slider__item")
    .previousElementSibling.firstElementChild.addEventListener(
      "click",
      fullScreen
    );

  setTimeout(
    () =>
      currentImage
        .closest(".slider__item")
        .previousElementSibling.firstElementChild.dispatchEvent(click),
    200
  );
}
function fullScreenScrollRight(event) {
  if (rightButtonCooldown) return;

  rightButtonCooldown = true;
  rightCooldownRefresh();

  const click = new CustomEvent("click", function (event) {});

  closeFullScreen();

  if (!currentImage.closest(".slider__item").nextElementSibling) return;
  isRightEnd();
  isLeftEnd();

  // Sroll background slider
  scrollBackgroundSliderRight();

  currentImage
    .closest(".slider__item")
    .nextElementSibling.firstElementChild.addEventListener("click", fullScreen);

  setTimeout(
    () =>
      currentImage
        .closest(".slider__item")
        .nextElementSibling.firstElementChild.dispatchEvent(click),
    200
  );
}

function leftCooldownRefresh() {
  setTimeout(() => (leftButtonCooldown = false), 200);
}

function rightCooldownRefresh() {
  setTimeout(() => (rightButtonCooldown = false), 200);
}

function isLeftEnd() {
  if (!currentImage.closest(".slider__item").previousElementSibling) return;

  // if (
  //   !currentImage.closest(".slider__item").previousElementSibling
  //     .previousElementSibling
  // ) {
  //   fullScreenLeftButton.style.display = "none";
  // } else {
  //   fullScreenLeftButton.style.display = "block";
  // }
}

function isRightEnd() {
  if (!currentImage.closest(".slider__item").nextElementSibling) return;

  // if (
  //   !currentImage.closest(".slider__item").nextElementSibling.nextElementSibling
  // ) {
  //   fullScreenRightButton.style.display = "none";
  // } else {
  //   fullScreenRightButton.style.display = "block";
  // }
}

function scrollBackgroundSliderLeft() {
  if (currentImage.classList.contains("photo-slider__images")) {
    topSliderScrollLeft();
  } else {
    botSliderScrollLeft();
  }
}

function scrollBackgroundSliderRight() {
  if (currentImage.classList.contains("photo-slider__images")) {
    topSliderScrollRight();
  } else {
    botSliderScrollRight();
  }
}

// Final slider setting
// -10 300ms
