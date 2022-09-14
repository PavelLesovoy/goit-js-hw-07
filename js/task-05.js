const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const newInput = (event) => {
    const inputValue = event.currentTarget.value;
    output.textContent = inputValue;

    if (inputValue === "") {
        output.textContent = 'Anonymous';
    }
}

input.addEventListener('input', newInput);