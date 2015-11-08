'use strict';

angular.module('ipallor')
  .directive('sidenav', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/sidenav/sidenav.html',
      replace: true,
      link: function (scope, elem, attrs) {
        scope.$watch(attrs.currentUser, function (user) {
          scope.user = user;
        });
      }
    };
  });
