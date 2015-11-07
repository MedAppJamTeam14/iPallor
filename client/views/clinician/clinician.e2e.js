'use strict';

describe('clinician route', function () {

  beforeEach(function () {
    browser.get('/clinician');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ClinicianCtrl');
  });

});
