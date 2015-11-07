'use strict';

angular.module('ipallor')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/clinician', {
        templateUrl: 'views/clinician/clinician.html',
        controller: 'ClinicianCtrl',
        controllerAs: 'vm'
      });
  });
