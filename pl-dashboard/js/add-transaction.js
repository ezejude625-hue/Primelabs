tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1142d4",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
      },
      fontFamily: {
        display: ["Public Sans"],
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

/*
async function loadModal() {
  const response = await fetch('modal-folder/modal.html');
  const html = await response.text();
  document.getElementById('modal-placeholder').innerHTML = html;

  // Now that it's loaded, add your event listeners
  setupModalLogic();
}

function setupModalLogic() {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('open-modal-btn');
  
  btn.onclick = () => modal.style.display = "block";
  // Add closing logic here...
}

loadModal();
/*
<!-- Placeholder where the modal will be loaded -->
<div id="modal-placeholder"></div>
<button id="open-modal-btn">Open Modal</button>*/
