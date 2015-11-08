'use strict';

describe('signup route', function () {

  beforeEach(function () {
    browser.get('/signup');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('SignupCtrl');
  });

});
