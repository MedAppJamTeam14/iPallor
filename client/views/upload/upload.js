'use strict';

angular.module('ipallor')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/upload', {
        templateUrl: 'views/upload/upload.html',
        controller: 'UploadCtrl',
        controllerAs: 'vm'
      });
  });
