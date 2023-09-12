const body = document.body;
const photoSliderInner = body.querySelector(".photo-slider__inner");
const photoSliderList = body.querySelector(".photo-slider__list");

const photoSliderGap = 12;
const photoSliderImageWidth = 251;

const photoSliderLeftButton = body.querySelector(".left-btn");
const photoSliderRightButton = body.querySelector(".right-btn");

const photoSliderListWidth = Math.round(
  photoSliderList.childElementCount * photoSliderImageWidth +
    (photoSliderList.childElementCount - 1) * photoSliderGap -
    photoSliderList.getBoundingClientRect().left
);

photoSliderList.style.width = photoSliderListWidth + "px";

let topTranslate = 0;
let isTopScroll = true;
let topInterval = setInterval(topSliderMove, 100);

photoSliderInner.addEventListener("pointerout", topSliderScroll);
photoSliderInner.addEventListener("pointerover", topSliderStop);

window.addEventListener("resize", checkSliderRightSide);

photoSliderLeftButton.addEventListener("click", topSliderScrollLeft);
photoSliderRightButton.addEventListener("click", topSliderScrollRight);

// Сontinue scrolling after the slider stops, if slider is not over
function topSliderScroll(event) {
  if (topSliderIsOver()) return;

  isTopScroll = true;

  topInterval = setInterval(topSliderMove, 100);
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

// Hover

photoSliderInner.addEventListener("pointerover", showHeart);
photoSliderInner.addEventListener("pointerout", hideHeart);
photoSliderInner.addEventListener("click", likeHeart);

function showHeart(event) {
  if (!event.target.classList.contains("photo-slider__item")) return;

  event.target.firstElementChild.style.filter = "opacity(50%)";
}

function hideHeart(event) {
  if (!event.target.classList.contains("photo-slider__item")) return;

  event.target.firstElementChild.style.filter = "";
}

function likeHeart(event) {
  if (!event.target.classList.contains("photo-slider__item")) return;

  event.target.classList.toggle("like");
}

// Final slider setting
// -10 300ms
