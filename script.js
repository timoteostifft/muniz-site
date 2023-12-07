document.addEventListener("DOMContentLoaded", function () {
  if (!getCookie("cookieAccepted")) {
    document.getElementById("cookie-modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
});

function acceptCookies() {
  setCookie("cookieAccepted", true, 30);
  document.getElementById("cookie-modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const dropdownHandler = document.getElementById("dropdown-handler");
const dropdown = document.getElementById("dropdown");

dropdownHandler.onclick = function () {
  dropdown.classList.toggle("open");
};
