const valueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;
decrementBtnEl.addEventListener(
  "click",
  () => (valueEl.textContent = counterValue -= 1)
);
incrementBtnEl.addEventListener(
  "click",
  () => (valueEl.textContent = counterValue += 1)
);
