function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('span.color');
const btnColor = document.querySelector('.change-color');

btnColor.addEventListener('click', function colorChange (){
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;
})