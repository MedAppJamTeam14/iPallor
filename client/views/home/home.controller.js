'use strict';

angular.module('ipallor')
  .controller('HomeCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl',

      activity: [
        'Van Nguyen',
        'Max Paulus',
        'John Collins',
        'Matin Khoshnevis',
        'Pasha Khosravi',
        'Lewis Liu'
      ]
    });

  });
