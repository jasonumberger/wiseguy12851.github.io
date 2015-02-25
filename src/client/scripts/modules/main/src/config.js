module.exports = angular.module("app").config(["$stateProvider", "$urlRouterProvider",
                              "$locationProvider",
                              function($stateProvider, $urlRouterProvider,
                                       $locationProvider)
                              {
                                  "use strict";

                                  // Redirect all unknown paths back to root
                                  // page
                                  $urlRouterProvider.otherwise("/glyph");

                                  // Push States
                                  $locationProvider.html5Mode(false);

                                  $stateProvider.state("glyph-test", {
                                      url: "/glyph",
                                      templateUrl: "/build/client/partials/fragments/glyph-test.html"
                                  });
                              }]);
