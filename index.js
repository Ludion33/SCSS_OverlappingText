let button = document.querySelector("button");
let overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  console.log("Button is clicked");
  overlay.style.animation = "moveup 1s ease-in-out";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);
});
