const changeSrcBtn = document.getElementById("changeSrcBtn");
const image = document.querySelector(".ikone img");

changeSrcBtn.addEventListener("click", function () {
  const noviUrl = document.getElementById("linksajta").value.toLowerCase(); // Uzima value iz inputa
  if (noviUrl == "") {
    image.src = "https://icon.horse/icon/wikipedia.org"; //Ukoliko korisnik unese prazno polje vrati se
  } // img.src na placeholder value
  else {
    image.src = "https://icon.horse/icon/" + noviUrl; // Podesavanje img.src na novi value
  }
});
