const body = document.body;

const options = {
  threshold: 0,
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

const hidedElements = body.querySelectorAll(".fadeIn");
const hidedElementsDown = body.querySelectorAll(".fadeInDown");

hidedElements.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsDown.forEach((element) => {
  scrollObserver.observe(element);
});

function wichSide(element) {
  if (
    element.classList.contains("fadeIn") ||
    element.classList.contains("fadeIn-show")
  )
    return "fadeIn";

  if (
    element.classList.contains("fadeInDown") ||
    element.classList.contains("fadeInDown-show")
  )
    return "fadeInDown";
}
