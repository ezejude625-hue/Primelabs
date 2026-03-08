tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#001f3d",
        accent: "#00d1ff",
        "background-light": "#f5f7f8",
        "background-dark": "#0f1923",
      },
      fontFamily: { display: ["Manrope", "sans-serif"] },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};

// Nav
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-[500px]");
});
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-[500px]");
  }
});

// Ripple
document.querySelectorAll(".btn-ripple").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.remove("ripple-active");
    void btn.offsetWidth;
    btn.classList.add("ripple-active");
  });
  btn.addEventListener("mouseleave", () =>
    btn.classList.remove("ripple-active"),
  );
});

// Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach((card, i) => {
      const match = filter === "all" || card.dataset.category === filter;
      if (match) {
        card.style.display = "flex";
        // Re-trigger AOS stagger
        card.style.transitionDelay = visible * 40 + "ms";
        visible++;
      } else {
        card.style.display = "none";
      }
    });

    emptyState.classList.toggle("hidden", visible > 0);
  });
});

AOS.init({ duration: 1000, once: true, offset: 80, easing: "ease-out-cubic" });
