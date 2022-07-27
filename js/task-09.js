const btnEl = document.querySelector("button.change-color");
const colorValueEl = document.querySelector(".color");

btnEl.addEventListener("click", onClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick() {
  if ((document.body.style.backgroundColor = getRandomHexColor())) {
    colorValueEl.textContent = `${document.body.style.backgroundColor}`;
  }
}
