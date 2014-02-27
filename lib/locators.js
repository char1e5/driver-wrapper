var util = require('util');
var webdriver = require('selenium-webdriver');

/**
 * The DriverWrapper Locators. These provide ways of finding elements.
 *
 * @augments webdriver.Locator.Strategy
 */
var DriverWrapperBy = function() {};
var WebdriverBy = function() {};

/**
 * Usage:
  * @DEPRECATED - use 'model' instead.
 *   <select ng-model="user" ng-options="user.name for user in users"></select>
 *   element(by.select("user"));
 */
DriverWrapperBy.prototype.id = function(id) {
  return {
    findElementsOverride: function(driver, using) {
      return driver.findElements(
          webdriver.By.id(id), id, using);
    },
    message: 'by.id("' + id + '")'
  };
};

exports.DriverWrapperBy = DriverWrapperBy;
