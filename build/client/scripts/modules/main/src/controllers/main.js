module.exports = angular.module("app").controller("MainCtrl", function()
{
    "use strict";

    var self = this;

    self.submit = function()
    {
        console.log("User clicked submit with ", self.user);
    };
});
