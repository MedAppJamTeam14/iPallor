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
        title: 'Login',
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

    $rootScope.users = [
      {
        firstName: 'Van',
        lastName: 'Nguyen',
        email: 'vnguyen94@gmail.com',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Max',
        lastName: 'Paulus',
        email: 'paulusm@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'John',
        lastName: 'Collins',
        email: 'jfcollin@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Matin',
        lastName: 'Khoshnevis',
        email: 'ge0matin@gmail.com',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Pasha',
        lastName: 'Khosravi',
        email: 'Pashak@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Lewis',
        lastName: 'Liu',
        email: 'yuxuanl3@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
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
