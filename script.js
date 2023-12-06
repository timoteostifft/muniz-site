const dropdownHandler = document.getElementById("dropdown-handler");
const dropdown = document.getElementById("dropdown");

dropdownHandler.onclick = function () {
  dropdown.classList.toggle("open");
};
