(function() {
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

      window.form = me;

}());