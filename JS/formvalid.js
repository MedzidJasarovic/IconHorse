const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
var lang = localStorage.getItem("language");
// const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    if (lang === "en") {
      setError(username, "Username is required");
    } else {
      setError(username, "Korisnicko ime ne sme biti prazno");
    }
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    if (lang === "en") {
      setError(email, "Email is required");
    } else {
      setError(email, "Email ne sme biti prazan");
    }
  } else if (!isValidEmail(emailValue)) {
    if (lang === "en") {
      setError(email, "Provide a valid email address");
    } else {
      setError(email, "Unesite validnu email adresu");
    }
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    if (lang === "en") {
      setError(password, "Password is required");
    } else {
      setError(password, "Sifra ne sme biti prazna");
    }
  } else {
    setSuccess(password);
    localStorage.setItem("loggedIn", true);
  }

  //-----------------------------------za naloge------------------------
  // https://github.com/MedzidJasarovic/IconHorse/blob/main/accounts.json
  //--------------------------------------------------------------------

  if (usernameValue && passwordValue && emailValue) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/MedzidJasarovic/IconHorse/main/accounts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const unetiPass = hex_md5(passwordValue);
        var users = data.users;
        users = users.filter((el) => {
          return el.username == usernameValue;
        });
        if (users.lenght >= 1) {
          let flag = true;
          for (let i = 0; i < users.lenght; i++) {
            if (users[i].password == unetiPass) {
              location.href = "index.html";
              flag = !flag;
              localStorage.setItem("loggedIn", true);
              break;
            }
          }
          if (flag) {
            if (lang === "en") {
              setError(password, "Wrong password");
            } else {
              setError(password, "Pogresna sifra");
            }
          } else {
            if (lang === "en") {
              setError(username, "Wrong username");
            } else {
              setError(username, "Pogresno korisnicko ime");
            }
          }
        }
      });
  }
};
