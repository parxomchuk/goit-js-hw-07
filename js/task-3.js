const jsInput = document.querySelector("#name-input")
const jsOutput = document.querySelector("#name-output")

jsInput.addEventListener('input', () => {
    const name = jsInput.value.trim();

    jsOutput.textContent = name === "" ? "Anonymous" : name;
})