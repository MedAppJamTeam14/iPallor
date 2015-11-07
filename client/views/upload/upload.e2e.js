'use strict';

describe('upload route', function () {

  beforeEach(function () {
    browser.get('/upload');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('UploadCtrl');
  });

});
