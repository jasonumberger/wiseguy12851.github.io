module.exports = angular.module("app").controller(
    "MainCtrl",
    function ctrlCb()
    {
        "use strict";

        var self = this;

        self.submit = function submitCb()
        {
            console.log(
                "User clicked submit with ",
                self.user
            );
        };
    }
);
