var expect = require('chai').expect,
test = require('selenium-webdriver/testing'),
driver = require('../lib/driverwrapper');


test.describe('OpenTable Location Search', function() {
  var browser;

  test.before(function(){
    browser = driver.getBrowser('chrome');
  });

  test.after(function() {
    driver.quit(browser);
  });

  test.it('should get restaurant search results', function() {
    browser.get('http://m.opentable.com');
    browser.getTitle().then(function(title) {
      expect(title).to.equal('Restaurants and Restaurant Reservations | OpenTable');
    });
  });


  test.it('should append query to title', function() {
    browser.get('http://m.opentable.com/#/location');

    
    // browser.findElement(driver.By.id('input-location')).click();
    // browser.findElement(driver.By.id('input-location')).sendKeys('San Francisco, CA, United States');
    // browser.findElement(driver.By.id('button-search')).click();


    var locationInput = browser.ById('input-location');
    var searchButton = browser.ById('button-search');
    locationInput.click();
    locationInput.sendKeys('San Francisco, CA, United States');
    searchButton.click();

    browser.wait(function() {
      return browser.getTitle().then(function(title) {
        return 'Restaurants and Restaurant Reservations | OpenTable' === title;
      });
    }, 3000, 'Waiting for search results');
  });
});
