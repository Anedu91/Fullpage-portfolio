/* FULLPAGE SETTINGS */
const navItem = document.querySelectorAll(".nav__item");

const FullPage = new fullpage("#fullpage", {
  css3: true,
  anchors: ["app"],
  slidesNavigation: false,
  loopHorizontal: false,
  fixedElements: ".header, .nav",

  onSlideLeave: function (section, origin, destination, direction) {
    console.log(destination);
  },
});

navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    fullpage_api.moveTo("app", index);
  });
});

/* SKILLS PROGRESS SETTINGS */

const progressButtons = document.querySelectorAll(".skills__btn");
const showingProgress = (percent) => {
  const circle = document.querySelector("#progress");
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
};
const changingNumber = (percent) => {
  const number = document.querySelector("#progressValue");
  number.innerText = percent;
};
const gettingProgress = (button) => {
  const progress = button.dataset.progress;
  console.log(progress);
  showingProgress(progress);
  changingNumber(progress);
};
progressButtons.forEach((button) => {
  button.addEventListener("click", () => gettingProgress(button));
});
