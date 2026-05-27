// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});

// =========================
// FADE IN ON SCROLL
// =========================

const revealElements = document.querySelectorAll(
  ".card, .gallery-grid img, .team-card, .about-content, .quote-box, .contact-box"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// =========================
// GALLERY IMAGE POP EFFECT
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.03)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", function (e) {

    const circle = document.createElement("span");

    circle.classList.add("ripple");

    const rect = button.getBoundingClientRect();

    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);

  });

});

console.log("ECJ Services website loaded");
