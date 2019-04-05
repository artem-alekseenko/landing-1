(function () {
    let me = {};

    me.toggleToActiveLink = (target) => {
        let links = document.querySelectorAll('.nav__link');
        let showedSection = target.dataset.link;

        for (i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active')
            }
        }

        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection);

    };

    function scrollToActiveSection(showedSection) {
        var section = document.querySelector('.' + showedSection);
        var coords = section.getBoundingClientRect().top;

        let scroller = setInterval(function () {
            let scrollBy = coords / 30;
            if (scrollBy > window.pageYOffset - coords && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coords);
                clearInterval(scroller);
            }
        }, 10);
    }

    crutch.navigation = me;
}());