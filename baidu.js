const {Builder, By, Key, until} = require('selenium-webdriver');


(async function test(){
  let driver = await new Builder().forBrowser('chrome').build();      
  try {
    await driver.get('http://study.163.com/');
    await driver.findElement(By.className('j-close')).click();
    //await driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
  } finally {
    //await driver.quit();
  }
})();

