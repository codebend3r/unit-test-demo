var webdriver = require('browserstack-webdriver');

// Input capabilities
//var capabilities = {
//  'browserName': 'firefox',
//  'browserstack.local' : 'true',
//  'browserstack.user': 'chesterrivas',
//  'browserstack.key': 'mgEOHl05T18rzgl2CItL'
//};

var capabilities = {
  'browser' : 'Chrome',
  'browser_version' : '39.0',
  'os' : 'Windows',
  'os_version' : '8.1',
  'resolution' : '1280x1024'
};

var driver = new webdriver.Builder().
  usingServer('http://hub.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function (title) {
  console.log(title);
});

driver.quit();