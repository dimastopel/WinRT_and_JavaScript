﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();

})();

function calc_fib(form) {

    // let's parse that input
    var index = 0;
    try {
        index = parseInt(form.fibindex.value, 10);
    } catch (err) {
        return;
    }

    // calc fib number (access the external component)
    var fibCalculator = new winrtComponentNS.FibCalculator(123);
    var result = fibCalculator.fib(index);
    var answer_label_text = 'The Fibonacci number with index ' + index + ' is: ' + result;
    document.getElementById('answer_label').innerText = answer_label_text;

    // with jQuery
    //$('#answer_label').text(answer_label_text);
};
