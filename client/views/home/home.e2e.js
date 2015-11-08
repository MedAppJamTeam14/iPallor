'use strict';

describe('home route', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a basic content', function () {
    expect(1).toBe(1);
  });

});
