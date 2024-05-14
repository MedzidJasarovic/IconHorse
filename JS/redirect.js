document.addEventListener("DOMContentLoaded", (event) => {
  const btns = document.getElementsByClassName("hbtn");

  // Debugging to check if buttons are correctly selected
  console.log("Buttons found:", btns.length);

  if (btns.length >= 3) {
    // Ensure the buttons exist and add event listeners

    // Icons button
    btns[0].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to icons.");
        location.href = "../pages/icons.html";
        localStorage.setItem("page", "icons");
      }
    });

    // About us button
    btns[1].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to about.");
        location.href = "../pages/about.html";
        localStorage.setItem("page", "about");
      }
    });

    // Contact us button
    btns[2].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to contact.");
        location.href = "../pages/contact.html";
        localStorage.setItem("page", "contact");
      }
    });
  } else {
    console.error("Not enough buttons with class 'hbtn' found.");
  }
});
