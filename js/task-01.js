const listOfCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategoriesEl.length}`);

listOfCategoriesEl.forEach((item) => {
  const titleEl = item.firstElementChild;
  const listOfElementsEl = item.querySelectorAll("li");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listOfElementsEl.length}`);
});
