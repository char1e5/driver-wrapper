var expect = require('chai').expect,
    driver = require('../../lib/driverwrapper'),
    test = require('../../lib/runner'),
    fs = require('fs');




test.describe('OpenTable Location Search', function() {
  var browser;
  var screenPath = './spec/screenshots/';

  test.before(function(){
    browser = driver.getBrowser('chrome');
  });

  test.after(function() {
    driver.quit(browser);
  });

  test.it('should append query to title', function() {
    browser.get('http://m.opentable.com/#/location');
    browser.resize(320,600);

    var locationInput = browser.id('input-location');
    var searchButton = browser.css('#button-search'); 
    browser.saveScreenshot(screenPath + 'out0.png', fs);

    locationInput.click();
    locationInput.sendKeys('San Francisco, CA, United States');

    browser.resize(768,1024);
    browser.saveScreenshot(screenPath + 'out1.png', fs);
    searchButton.click();

    browser.wait(function() {
      return browser.getTitle().then(function(title) {
        return 'Restaurants and Restaurant Reservations | OpenTable' === title;
      });
    }, 3000, 'Waiting for search results');
  });
});
