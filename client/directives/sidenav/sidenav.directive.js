'use strict';

angular.module('ipallor')
  .directive('sidenav', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/sidenav/sidenav.html'
    };
  });
