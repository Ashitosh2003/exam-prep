

const {Build,By,Key,util}= require('selenium-webdriver');


const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async () => {
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();

    try {
        
        await driver.get('https://www.google.com');
     
        console.log('Test Case 1 Passed: Opened google');

        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
     
        console.log('Test Case 2 Passed: Title contains "Selenium"');

        imageslink=await.getElement(By.id('Images'));
        await imageslink.click();
        console.log('Test cse 3:Clicked on images');

        news=await.getElement(By.id('News'));
        await news.click();
        console.log('Test cse 3:Clicked on news');

    } 
    finally {
        await driver.quit();
    }
})();
