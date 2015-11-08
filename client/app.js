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
  .run(function ($rootScope, $location, $mdSidenav, UserFactory) {

    angular.extend($rootScope, {
      toggleSidenav: function (menuId) {
        $mdSidenav(menuId).toggle();
      },

      isActive: function (route) {
        return route === $location.path();
      },

      navigate: function (link) {
        $location.path(link);

        if ($mdSidenav('left').isOpen()) {
          $rootScope.toggleSidenav('left');
        }
      },

      getCurrentUser: function () {
        return UserFactory.getUser();
      },

      logout: function () {
        UserFactory.logout();
        $location.path('/');
      },

      menuItems: [
        {
          link: '/',
          title: 'Login',
          icon: 'dashboard',
          disabledIfLoggedOut: false
        },
        {
          link: '/upload',
          title: 'Upload image',
          icon: 'dashboard',
          disabledIfLoggedOut: true
        },
        {
          link: '/clinician',
          title: 'Clinician',
          icon: 'group',
          disabledIfLoggedOut: true
        },
        {
          link: '/wolfram',
          title: 'Wolfram API request/response',
          icon: 'message',
          disabledIfLoggedOut: true
        }
      ]
    });

  });
