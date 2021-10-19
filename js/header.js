// Header
let hamMenue = document.querySelector("#hamMenue");
let dropDown = document.querySelector(".dropdown_container");

hamMenue.addEventListener("click", function () {
  dropDown.classList.toggle("hidden");
});
