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

    $rootScope.loggedInMenuItems = [
      {
        link : '/',
        title: 'Home',
        icon: 'dashboard'
      },
      {
        link : '/upload',
        title: 'Upload image',
        icon: 'dashboard'
      },
      {
        link : '/clinician',
        title: 'clinican',
        icon: 'group'
      },
      {
        link : '/wolfram',
        title: 'Wolfram API request/response',
        icon: 'message'
      }
    ];

  });
