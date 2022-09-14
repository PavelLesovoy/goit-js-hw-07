const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayLi = ingredients.map((element) => {
  const itemElement = document.createElement("li");
  itemElement.textContent = element;
  itemElement.classList.add("item");
  return itemElement;
});

const listIngredients = document.querySelector("#ingredients");
listIngredients.append(...arrayLi);