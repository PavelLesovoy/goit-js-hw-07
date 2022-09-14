const input = document.getElementById('validation-input');

input.addEventListener('blur', inputChenger );

function inputChenger (event) {
    const inputValue = Number(event.currentTarget.getAttribute('data-length'));

    if (event.currentTarget.value.length === inputValue) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }

    input.classList.add('invalid');
    input.classList.remove('valid');
}