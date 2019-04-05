(function () {
    const openFormButton = document.querySelector('.arrow-down');
    const form = document.querySelector('.form');
    const nav = document.querySelector('.nav');

    


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

    if(nav) {
        nav.addEventListener('click', (e) => {
            let target = e.target;
            if(target.tagName.toLowerCase() !== 'a') {
                return;
            }
            e.preventDefault();
            crutch.navigation.toggleToActiveLink(target);
        })
    }

}());