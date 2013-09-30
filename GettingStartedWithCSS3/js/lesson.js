var slides;
var currentSlide;
var currentNavBarID;
var slideDisplay;

 function initLesson (element){
    var elem = element.querySelector('.navBar');
    elem.addEventListener('click', showSlide);
    slides = element.getElementsByClassName('slide');
    slideDisplay = document.getElementById('slideDisplay');
    currentNavBarID = null;
 }

    function showSlide(e) {
        if (e.target.nodeName === 'DIV') {
            if (e.target.getAttribute('data-demopage')) {
                showDemo(e);
                return;
            }

            if (currentNavBarID) {
                document.getElementById(currentNavBarID).style.borderColor = 'transparent';
                document.getElementById(currentNavBarID).style.backgroundColor = 'lightblue';
                document.getElementById(currentNavBarID).style.color = 'black';
            }

            currentNavBarID = e.target.id;
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';

            if (currentSlide)
                currentSlide.style.visibility = 'hidden';

            currentSlide = slides[currentNavBarID];
            currentSlide.style.visibility = 'visible';

            slideDisplay.innerHTML = currentSlide.innerHTML;
        }
    }

    function showDemo(e) {
        if (e.target.getAttribute('data-demopage')) {
            WinJS.Navigation.navigate(e.target.getAttribute('data-demopage'));
        }
    }


