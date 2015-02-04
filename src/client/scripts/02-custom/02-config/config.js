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
            templateUrl: '/src/partials/fragments/glyph-test.html'
        });
}]);
