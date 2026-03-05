tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#001f3d",
        accent: "#00d1ff",
        "bg-light": "#f5f7f8",
      },
      fontFamily: { display: ["Manrope", "sans-serif"] },
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
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-[500px]");
  }
});
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
AOS.init({
  duration: 900,
  once: true,
  offset: 60,
  easing: "ease-out-cubic",
});
