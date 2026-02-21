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
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("max-h-[500px]");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add("max-h-0");
        mobileMenu.classList.remove("max-h-[500px]");
    }
});

AOS.init();