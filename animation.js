const animatedTags = document.querySelectorAll("h3, p, div");

//fade out on load
animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  let delay = 0.25;

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.15;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};
//onload
fadeIn();

//onscroll
document.addEventListener("scroll", function () {
  fadeIn();
});

//on browser resize
window.addEventListener("scroll", function () {
  fadeIn();
});
