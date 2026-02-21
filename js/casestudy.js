tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
          colors: {
            "primary": "#001f3d",
            "accent-blue": "#00d1ff",
            "background-light": "#f5f7f8",
            "background-dark": "#0f1923",
          },
          fontFamily: {
            "display": ["Manrope", "sans-serif"]
          },
          borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
}

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0", "opacity-0");
    menu.classList.add("max-h-[500px]", "opacity-100");
  } else {
    menu.classList.add("max-h-0", "opacity-0");
    menu.classList.remove("max-h-[500px]", "opacity-100");
  }
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

AOS.init();