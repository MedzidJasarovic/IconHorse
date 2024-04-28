// document.addEventListener("DOMContentLoaded", function () {
//   const toggle = document.getElementById("language-toggle");
//   const elements = document.querySelectorAll("[data-en], [data-sr]");

//   // Check if language preference is stored in localStorage
//   const storedLanguage = localStorage.getItem("language");
//   if (storedLanguage) {
//     toggle.checked = storedLanguage === "sr"; // Set toggle state based on stored language
//     setLanguage(); // Update language based on stored preference
//   }

//   function setLanguage() {
//     elements.forEach((element) => {
//       if (toggle.checked) {
//         element.textContent = element.dataset.sr;
//       } else {
//         element.textContent = element.dataset.en;
//       }
//     });

//     // Store language preference in localStorage
//     const languagePreference = toggle.checked ? "sr" : "en";
//     localStorage.setItem("language", languagePreference);
//   }

//   // Add event listener to language toggle
//   toggle.addEventListener("change", setLanguage);
// });
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("language-toggle");
  const elements = document.querySelectorAll("[data-en], [data-sr]");

  // Check if language preference is stored in localStorage
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    toggle.checked = storedLanguage === "sr"; // Set toggle state based on stored language
    setLanguage(); // Update language based on stored preference
  }

  function setLanguage() {
    elements.forEach((element) => {
      if (toggle.checked) {
        element.innerHTML = element.dataset.sr.replace(/&lt;br&gt;/g, "<br>");
      } else {
        element.innerHTML = element.dataset.en.replace(/&lt;br&gt;/g, "<br>");
      }
    });

    // Store language preference in localStorage
    const languagePreference = toggle.checked ? "sr" : "en";
    localStorage.setItem("language", languagePreference);
  }

  // Add event listener to language toggle
  toggle.addEventListener("change", setLanguage);
});
