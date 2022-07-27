const inputEl = document.querySelector("#validation-input");
const validLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (validLength === event.currentTarget.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
