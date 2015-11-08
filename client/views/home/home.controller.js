'use strict';

angular.module('ipallor')
  .controller('HomeCtrl', function ($rootScope, $location, UserFactory) {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl',

      users: UserFactory.users,

      login: function (user) {
        UserFactory.login(user);
        $location.path('/upload');
      },

      signup: function () {
        $location.path('/signup');
      }
    });

  });
