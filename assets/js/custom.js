window.addEventListener("DOMContentLoaded", (event) => {
const el2 = document.getElementById("closebtn");

el2.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
});
});