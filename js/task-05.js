const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

const defaultValue = "Anonymous";
inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : defaultValue;
}
