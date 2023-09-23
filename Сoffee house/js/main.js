const body = document.body;

// Stock slider

// Games slider

const gamesSliderInner = body.querySelector(".games__slider__inner");
const gamesSlider = body.querySelector(".games__slider__list");
const gamesSliderGap = +getComputedStyle(gamesSlider).gap.slice(0, -2);
const gamesSliderItemCount = gamesSlider.querySelectorAll(
  ".games__slider__item"
).length;
const gamesSliderGapCount = gamesSliderItemCount - 1;
const gamesSliderItemWidth = body.querySelector(
  ".games__slider__item"
).clientWidth;

const gamesSliderWidth =
  gamesSliderItemCount * gamesSliderItemWidth +
  gamesSliderGap * gamesSliderGapCount;

gamesSlider.style.width = gamesSliderWidth + "px";

// Games slider buttons

let gamesSliderTranslate = 0;

gamesSlider.addEventListener("click", gamesSlide);

function gamesSlide(event) {
  if (event.target.closest(".games__slider__item").classList.contains("active"))
    return;

  event.preventDefault();
  const side = whichButton(event.target.closest(".games__slider__item"));

  if (side === "left") {
    gamesSliderTranslate += 430;
  } else if (side === "right") {
    gamesSliderTranslate -= 430;
  }

  gamesSlider.style.transform = `translateX(${gamesSliderTranslate}px)`;
  gamesSlider.querySelector(".active").classList.toggle("active");
  event.target.closest(".games__slider__item").classList.toggle("active");
}

function whichButton(elem) {
  // Left
  if (elem.nextElementSibling) {
    if (elem.nextElementSibling.classList.contains("active")) return "left";
  }

  if (elem.previousElementSibling) {
    if (elem.previousElementSibling.classList.contains("active"))
      return "right";
  }
}
