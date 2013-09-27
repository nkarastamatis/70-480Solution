var slides;
var currentSlide;
var slideDisplay;

 function initLesson (element){
    var elem = element.querySelector('.navBar');
    elem.addEventListener('click', showSlide);
    slides = element.getElementsByClassName('slide');
    slideDisplay = document.getElementById('slideDisplay');
}

    function showSlide(e) {
        if (e.target.nodeName === 'H3') {
            if (e.target.getAttribute('data-demopage')) {
                showDemo(e);
                return;
            }

            if (currentSlide)
                currentSlide.style.visibility = 'hidden';

            currentSlide = slides[e.target.id];
            currentSlide.style.visibility = 'visible';

            slideDisplay.innerHTML = currentSlide.innerHTML;
        }
    }

    function showDemo(e) {
        if (e.target.getAttribute('data-demopage')) {
            WinJS.Navigation.navigate(e.target.getAttribute('data-demopage'));
        }
    }


