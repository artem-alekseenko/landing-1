(function () {
    let me = {};
    const form = document.querySelector('.form-container');
    let closeButton = null;

    function onClose(e) {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = () => {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
    };

    me.close = () => {
        form.classList.add('is-hidden');
    };

    me.isValid = () => {
        let requeredFields = document.querySelectorAll('[data-valid = "required"]');
        let emailValue = document.querySelector('[data-email]').value;
        let numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllComleted(requeredFields)) {
            console.log('Заполните, пожалуйста, все поля');
            return false;
        } else if (!crutch.validation.isEMail(emailValue)) {
            console.log('Неверный email');
            return false;
        } else if (!crutch.validation.isNumber(numberValue)) {
            console.log('Неправильно указан телефон');
            return false;
        }
        return true;
    };

    me.isAllComleted = (data) => {
        let result = true;
        for (i = 0; i < data.length; i++) {
            if (!crutch.validation.isNotEmpty(data[i].value)) {
                result = false;
                break
            }
        }
        return result;
    };

    crutch.form = me;

}());