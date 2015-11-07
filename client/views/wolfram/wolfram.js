'use strict';

angular.module('ipallor')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wolfram', {
        templateUrl: 'views/wolfram/wolfram.html',
        controller: 'WolframCtrl',
        controllerAs: 'vm'
      });
  });
