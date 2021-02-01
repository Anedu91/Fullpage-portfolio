/* FULLPAGE SETTINGS */
const navItem = document.querySelectorAll(".nav__item");
const contactButton = document.querySelector("#contact");
const FullPage = new fullpage("#fullpage", {
  css3: true,
  anchors: ["app"],
  slidesNavigation: false,
  loopHorizontal: false,
  fixedElements: ".header, .nav, #circle",
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,

  onSlideLeave: function (section, origin, destination, direction) {
    const nextContainer = document
      .getElementsByClassName(destination.anchor)[0]
      .getElementsByClassName("container")[0];
    nextContainer.classList.remove("animation-right");
    nextContainer.classList.remove("animation-left");

    window.requestAnimationFrame(() => {
      direction === "right"
        ? nextContainer.classList.add("animation-right")
        : nextContainer.classList.add("animation-left");
    });
  },
  afterSlideLoad: function (anchorLink, index, sliderAnchor, slideIndex) {
    navItem.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    navItem[sliderAnchor.index].classList.add("active");
  },
});

navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    fullpage_api.moveTo("app", index);
  });
});
contactButton.addEventListener("click", () => {
  fullpage_api.moveTo("app", 3);
});

/* SKILLS PROGRESS SETTINGS */

const progressButtons = document.querySelectorAll(".skills__btn");
const actualButton = document.querySelector(".skills__btn.active");
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
const gettingActive = (button) => {
  progressButtons.forEach((navItem) => {
    navItem.classList.remove("active");
    button.classList.add("active");
  });
};
const gettingProgress = (button) => {
  const progress = button.dataset.progress;
  showingProgress(progress);
  changingNumber(progress);
  gettingActive(button);
};

/* Cursor follow */
const circle = document.querySelector("#circle");

const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};

/*HANDLE FORM */
const $form = document.querySelector("#form");

const handleSubmit = (e) => {
  e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);
  Email.send({
    Host: "smtp.gmail.com",
    Username: "contact003399@gmail.com",
    Password: "wao.com.pk",
    To: "angel.e.diaz.b@gmail.com",
    From: "angel.e.diaz.b@gmail.com.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
};

document.addEventListener("DOMContentLoaded", function () {
  gettingProgress(actualButton);

  document.addEventListener("mousemove", onMouseMove);

  progressButtons.forEach((button) => {
    button.addEventListener("click", () => gettingProgress(button));
  });
  document.addEventListener("click", () => {
    circle.classList.remove("animation");
    window.requestAnimationFrame(() => {
      circle.classList.add("animation");
    });
  });
  $form.addEventListener("submit", handleSubmit);
});
