// BEFORE & AFTER SLIDER

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {

  slider.addEventListener("input", function () {

    const afterImage = this.previousElementSibling;

    afterImage.style.clipPath =
      `inset(0 ${100 - this.value}% 0 0)`;

  });

});
