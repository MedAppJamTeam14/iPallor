'use strict';

describe('about route', function () {

  beforeEach(function () {
    browser.get('/about');
  });

  it('should have a basic content', function () {
    expect(1).toBe(1);
  });

});
