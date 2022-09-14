const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = "56px";

const textChange = (event) => {
    let imputValue = event.currentTarget.value;
    textEl.style.fontSize = imputValue + "px";
};

inputEl.addEventListener("input", textChange);