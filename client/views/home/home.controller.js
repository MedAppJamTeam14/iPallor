'use strict';

angular.module('ipallor')
  .controller('HomeCtrl', function ($rootScope, $location) {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl',

      login: function (user) {
        $rootScope.user = user;
        $location.path('/upload');
      },

      signup: function () {
        $location.path('/signup');
      }
    });

  });
