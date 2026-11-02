const form = document.querySelector(".login-form")

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, name) => {
        data[name] = value.trim();
    });

    const empty = Object.values(data).some(value => value === '');

    if (empty) {
        alert(`All form fields must be filled in`);
        return;
    }

    console.log(data);

    form.reset();
});
