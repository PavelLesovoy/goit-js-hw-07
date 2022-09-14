let counterValue = 0;

const counterElement = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


const onDecrementValue = (event) => {
    counterValue -= 1;
    counterElement.textContent = counterValue;
    console.log(`Зменшеня на одиницю, значеня = ${counterValue}`);
}

const onIncrementValue = (event) => {
    counterValue += 1;
    counterElement.textContent = counterValue;
    console.log(`Збільшеня на одиницю, значеня = ${counterValue}`);
}


incrementBtn.addEventListener('click', onIncrementValue);
decrementBtn.addEventListener('click', onDecrementValue);

