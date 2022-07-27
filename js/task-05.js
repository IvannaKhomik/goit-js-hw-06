const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (inputEl.value !== "") {
    nameEl.innerHTML = event.currentTarget.value;
  }
}
