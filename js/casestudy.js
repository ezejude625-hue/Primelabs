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
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-[500px]");
});

// Prevent inside clicks from closing
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close when clicking outside
document.addEventListener("click", () => {
  menu.classList.add("max-h-0", "opacity-0");
  menu.classList.remove("max-h-[500px]", "opacity-100");
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("border-primary", "text-primary", "font-bold");
        b.classList.add("border-transparent");
      });

      btn.classList.add("border-primary", "text-primary", "font-bold");

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

AOS.init({
  duration: 1000,
  once: true,
  offset: 80,
  easing: "ease-out-cubic",
});
