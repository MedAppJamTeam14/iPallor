'use strict';

describe('wolfram route', function () {

  beforeEach(function () {
    browser.get('/wolfram');
  });

  it('should have a basic content', function () {
    expect(1).toBe(1);
  });

});
