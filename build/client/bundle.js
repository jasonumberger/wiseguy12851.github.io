(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('app', [
    'ui.bootstrap',
    'ui.router'
]);

},{}],2:[function(require,module,exports){
angular.module('app').config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider)
{
    // Redirect all unknown paths back to root page
    $urlRouterProvider.otherwise("/glyph");

    // Push States
    $locationProvider.html5Mode(false);

    $stateProvider
        .state('glyph-test',
        {
            url: '/glyph',
            templateUrl: '/build/client/partials/fragments/glyph-test.html'
        });
}]);

},{}],3:[function(require,module,exports){
angular.module('app').controller('MainCtrl', function()
{
    var self = this;

    self.submit = function()
    {
        console.log('User clicked submit with ', self.user);
    };
});

},{}]},{},[1,2,3]);
