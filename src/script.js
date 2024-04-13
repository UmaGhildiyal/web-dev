const buttons = Array.from(document.querySelectorAll(".button"));
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    body.style.backgroundColor = event.target.dataset.color;
  });
});
