(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var elem = element.querySelector('.homepage section[role=main]');
            elem.addEventListener('click', this.nextPage.bind(this));
        },

        nextPage: function (e) {
            if (e.target.nodeName === 'BUTTON') {
                var lesson = e.target.id;
                var page = "/lessons/" + lesson + "/" + lesson + ".html";
                WinJS.Navigation.navigate(page);
            }
        }
    });
})();
