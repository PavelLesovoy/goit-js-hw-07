const form = document.querySelector(".login-form");

const formSubmit = (event) => {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const emailEl = formEl.email.value;
    const passwordEl = formEl.password.value;

    if (passwordEl === ''){
        return alert(`Поле Password має бути заповнене`);
    } else if (emailEl === ''){
        return alert(`Поле Email має бути заповнене`);
    }

    console.log(`{email: ${emailEl}, password: ${passwordEl} }`);
    form.reset();
};

    form.addEventListener('submit', formSubmit);

