'use strict';

angular.module('ipallor', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngMaterial'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  })
  .run(function ($rootScope, $mdSidenav) {

    $rootScope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
  });
