function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

controls.btnCreate.addEventListener('click', createBox);
controls.btnDestroy.addEventListener('click', destroyBox);

function createBox(amount) {
  amount = Number(controls.input.value);

  const elem = [];
  const size = 30;
  let addValue = 0;

  for (let i = 0; i < amount; i += 1){
    const divElements = document.createElement("div");
    divElements.style.width = size + addValue + "px";
    divElements.style.height = size + addValue + "px";
    addValue += 10;
    divElements.style.backgroundColor = getRandomHexColor();

    elem.push(divElements);
    controls.divBoxes.append(divElements);
  }

}

function destroyBox() {
  controls.divBoxes.innerHTML = '';
  controls.input.innerHTML = '';
}


