angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider)
{
    // Redirect all unknown paths back to root page
    $urlRouterProvider.otherwise("/glyph");
    
    // Push States
    $locationProvider.html5Mode(false);
    
    $stateProvider
        .state('glyph-test',
        {
            url: '/glyph',
            templateUrl: '/partials/fragments/glyph-test.html'
        });
});
