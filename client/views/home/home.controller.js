'use strict';

angular.module('ipallor')
  .controller('HomeCtrl', function ($rootScope, $location) {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl',

      users: [
        {
          name: 'Van Nguyen',
          email: 'vnguyen94@gmail.com'
        },
        {
          name: 'Max Paulus',
          email: 'paulusm@uci.edu'
        },
        {
          name: 'John Collins',
          email: 'jfcollin@uci.edu'
        },
        {
          name: 'Matin Khoshnevis',
          email: 'ge0matin@gmail.com'
        },
        {
          name: 'Pasha Khosravi',
          email: 'Pashak@uci.edu'
        },
        {
          name: 'Lewis Liu',
          email: 'yuxuanl3@uci.edu'
        }
      ],

      login: function(user) {
        $rootScope.user = user;
        $location.path('/upload');
      }
    });

  });
