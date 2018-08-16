const button_add = document.querySelector('.js-add');
const btnSend = document.querySelector('.js-send');

button_add.addEventListener('click', () => {
    const formAdded = document.querySelector('.form-added');
    const form = document.querySelector('.template-form').cloneNode(true);
    const select = form.querySelector('.js-select');

    for (let i = 5; i <= 90; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        select.appendChild(option);
    }

    form.classList.remove('template-form');
    formAdded.appendChild(form);
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('js-remove')) {
        const form = target.closest('.form-user');
        form.parentNode.removeChild(form);
    }
});

btnSend.addEventListener('click', () => {
    const formUser = document.querySelectorAll('.form-added .form-user');
    const dataForms = [];

    formUser.forEach(form => {
        dataForms.push({
            name: form.elements.name.value,
            age: form.elements.age.value
        });
    });

    console.log(dataForms);
});