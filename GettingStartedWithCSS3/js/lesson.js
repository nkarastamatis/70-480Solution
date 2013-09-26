var slides;
var currentSlide;

 function initLesson (element){
    var elem = element.querySelector('.navBar');
    elem.addEventListener('click', showSlide);
    slides = element.getElementsByClassName('slide');
}

    function showSlide(e) {
        if (e.target.nodeName === 'H3') {
            if (e.target.getAttribute('data-demopage'))
                showDemo(e);

            if (currentSlide)
                currentSlide.style.visibility = 'hidden';

            currentSlide = slides[e.target.id];
            currentSlide.style.visibility = 'visible';
        }
    }

    function showDemo(e) {
        if (e.target.getAttribute('data-demopage')) {
            WinJS.Navigation.navigate(e.target.getAttribute('data-demopage'));
        }
    }


