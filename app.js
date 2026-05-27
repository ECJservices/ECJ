// =========================
// NAVBAR + SCROLL
// =========================

const header = document.querySelector("header");

const progress =
  document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

  const scrollTop = window.scrollY;

  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const scrollPercent =
    (scrollTop / docHeight) * 100;

  progress.style.width = `${scrollPercent}%`;

});

// =========================
// MOBILE MENU
// =========================

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// =========================
// DARK MODE
// =========================

const darkToggle =
  document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (
    document.body.classList.contains("dark")
  ) {

    darkToggle.textContent = "☀️";

    localStorage.setItem("theme", "dark");

  } else {

    darkToggle.textContent = "🌙";

    localStorage.setItem("theme", "light");

  }

});

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  darkToggle.textContent = "☀️";

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
  ".work-card, .gallery-img, .team-card, .contact-box, .area-box"
);

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },

  {
    threshold: 0.15
  }

);

revealElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});

// =========================
// COUNTER ANIMATION
// =========================

const counters =
  document.querySelectorAll("[data-count]");

let countersStarted = false;

function startCounters() {

  if (countersStarted) return;

  const statsSection =
    document.querySelector(".stats-section");

  const sectionPosition =
    statsSection.getBoundingClientRect().top;

  const screenPosition =
    window.innerHeight - 100;

  if (sectionPosition < screenPosition) {

    countersStarted = true;

    counters.forEach((counter) => {

      const target =
        Number(counter.dataset.count);

      let current = 0;

      const increment =
        Math.ceil(target / 60);

      const updateCounter = () => {

        current += increment;

        if (current >= target) {

          counter.textContent = target + "+";

        } else {

          counter.textContent = current;

          requestAnimationFrame(updateCounter);

        }

      };

      updateCounter();

    });

  }

}

window.addEventListener(
  "scroll",
  startCounters
);

// =========================
// IMAGE MODAL
// =========================

const modal =
  document.getElementById("imageModal");

const modalImg =
  document.getElementById("modalImg");

const closeModal =
  document.querySelector(".close-modal");

document.querySelectorAll(".gallery-img")
.forEach((img) => {

  img.addEventListener("click", () => {

    modal.style.display = "flex";

    modalImg.src = img.src;

  });

});

closeModal.addEventListener("click", () => {

  modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

});

console.log("ECJ Services website loaded");
