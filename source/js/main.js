(function () {
    const openFormButton = document.querySelector('.arrow-down');
    const form = document.querySelector('.form');


    if (openFormButton) {
        openFormButton.addEventListener('click', (e) => {
            e.preventDefault();
            crutch.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (crutch.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid')
            }
        })
    }

}());