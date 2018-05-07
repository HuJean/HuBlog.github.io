const {Builder, By, Key, until} = require('selenium-webdriver');


(async function test(){
  let driver = await new Builder().forBrowser('chrome').build();      
  try {
    await driver.get('http://study.163.com/');
    await driver.findElement(By.class('j-input')).sendKeys('webdriver');
    await driver.wait(until.titleIs('webdriver_搜索'), 1000);
  } finally {
    //await driver.quit();
  }
})();

