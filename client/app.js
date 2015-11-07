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
  .run(function ($rootScope, $location, $mdSidenav) {

    $rootScope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    $rootScope.loggedInMenuItems = [
      {
        link: '/',
        title: 'Home',
        icon: 'dashboard'
      },
      {
        link: '/upload',
        title: 'Upload image',
        icon: 'dashboard'
      },
      {
        link: '/clinician',
        title: 'clinican',
        icon: 'group'
      },
      {
        link: '/wolfram',
        title: 'Wolfram API request/response',
        icon: 'message'
      }
    ];

    $rootScope.navigate = function (link) {
      $location.path(link);

      if ($mdSidenav('left').isOpen()) {
        $rootScope.toggleSidenav('left');
      }
    };

    $rootScope.login = function () {
      $location.path('/');
    };

    $rootScope.logout = function () {
      $rootScope.user = {};
      $location.path('/');
    };

    $rootScope.user = {};

  });
