'use strict';

describe('Directive: topbar', function () {

  beforeEach(module('ipallor', 'templates'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<topbar></topbar>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  // it('should ...', function () {
  //   expect(1).toBe(1);
  // });
});
