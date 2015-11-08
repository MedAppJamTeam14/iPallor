'use strict';

describe('upload route', function () {

  beforeEach(function () {
    browser.get('/upload');
  });

  it('should have a basic content', function () {
    expect(1).toBe(1);
  });

});
