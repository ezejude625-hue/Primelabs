tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1142d4",
        "background-light": "#f6f6f8",
        "background-dark": "#101522",
      },
      fontFamily: {
        display: ["Inter"],
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

const makePayment = document.getElementById("makePayment");

makePayment.addEventListener("click", () => {
  window.location.href = "modals/conform-staff-payement.html";
});
