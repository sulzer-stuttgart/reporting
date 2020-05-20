const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const chromedriver = require('chromedriver');
const chrome = require('selenium-webdriver/chrome')

describe('Search sulzer gmbh on google', () => {
    const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();

    it('should search for "sulzer gmbh" and click on link with a name "Standorte"', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Standorte')).click();
        await driver.sleep(2000);
        const title = await driver.getTitle();

        expect(title).to.equal('Unsere Standorte - Wir sind weltweit für Sie da');
    });

    it('should search for "sulzer gmbh kontakt stuttgart" and click on link with a name "Kontakt"', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Kontakt')).click();
        await driver.sleep(2000);
        const currentUrl = await (await driver).getCurrentUrl();

        expect(currentUrl).to.equal('https://www.sulzer.de/de/kontakt/muenchen/');
    });

    it('should search for "sulzer gmbh" and click on link with a name "Karriere"', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Karriere')).click();
        await driver.sleep(2000);
        const currentUrl = await (await driver).getCurrentUrl();

        expect(currentUrl).to.equal('https://www.sulzer.de/de/karriere/');
    });

    it.skip('should search for "sulzer gmbh" and click on link with a name "Stuttgart"', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Stuttgart')).click();
        await driver.sleep(2000);
        const title = await driver.getTitle();

        expect(title).to.equal('Stuttgart');
    });

    it('should search for "sulzer gmbh" and click on link with a name "Unternehmen"', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Unternehmen')).click();
        await driver.sleep(2000);
        const title = await driver.getTitle();

        expect(title).to.equal('Sulzer GmbH - Ihr Full-Service-IT-Unternehmen');
    });

    after(async () => driver.quit());
});
