let button = document.querySelector("button");
let overlay = document.querySelector(".overlay");

window.addEventListener("load", function() {
  console.log("All assets are loaded");
  setTimeout(() => {
    console.log("test");
    overlay.style.animation = "leaveRight .5s ease-in";
  }, 4000);
  setTimeout(() => {
    overlay.style.display = "none";
  }, 4500);
});
