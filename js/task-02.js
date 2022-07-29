const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const listEl = document.querySelector("#ingredients");
// ingredients.forEach((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   listEl.append(itemEl);
// });
// console.log(listEl);

const listEl = document.querySelector("#ingredients");

const el = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  listEl.append(itemEl);
});

console.log(listEl);
