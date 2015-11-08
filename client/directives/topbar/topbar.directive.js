'use strict';

angular.module('ipallor')
  .directive('topbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/topbar/topbar.html',
      replace: true
    };
  });
