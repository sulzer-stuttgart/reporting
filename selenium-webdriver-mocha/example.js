const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.RETURN);
    await driver.wait(until.titleIs('sulzer gmbh - Google-Suche'), 5000);
  } finally {
    await driver.quit();
  }
})();