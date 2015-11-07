'use strict';

describe('wolfram route', function () {

  beforeEach(function () {
    browser.get('/wolfram');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('WolframCtrl');
  });

});
