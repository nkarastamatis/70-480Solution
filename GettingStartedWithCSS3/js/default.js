// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));
        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    app.start();
})();

var q = Ocho.Utilities.query;
var format = Ocho.Utilities.format;
var launch = Ocho.Navigation.launch;
String.prototype.startsWith = Ocho.String.startsWith;
String.prototype.endsWith = Ocho.String.endsWith;
String.prototype.contains = Ocho.String.contains;
String.prototype.trim = Ocho.String.trim;
Array.prototype.contains = Ocho.Array.contains;
Array.prototype.distinct = Ocho.Array.distinct;
Array.prototype.first = Ocho.Array.first;
Array.prototype.take = Ocho.Array.take;
Array.prototype.takeRandom = Ocho.Array.random;
StyleSheetList.prototype.toArray = Ocho.Array.toArray;
MSCSSRuleList.prototype.toArray = Ocho.Array.toArray;