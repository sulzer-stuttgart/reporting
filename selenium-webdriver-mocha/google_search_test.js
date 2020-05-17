const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const chromedriver = require('chromedriver');

describe('Search sulzer gmbh on google', () => {
    const driver = new Builder()
    .forBrowser('chrome').build();

    it('should search for "sulzer gmbh" and click on link with a name "Standorte"', async () => {
        allure.severity(allure.SEVERITY.BLOCKER);
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Standorte')).click();
        const title = await driver.getTitle();

        expect(title).to.equal('Unsere Standorte - Wir sind weltweit für Sie da');
    });

    it('should search for "sulzer gmbh kontakt stuttgart" and click on link with a name "Kontakt"', async () => {
        allure.severity(allure.SEVERITY.TRIVIAL);
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Kontakt')).click();
        const currentUrl = await (await driver).getCurrentUrl();

        expect(currentUrl).to.equal('https://www.sulzer.de/de/kontakt/muenchen/');
    });

    it('should search for "sulzer gmbh" and click on link with a name "Karriere"', async () => {
        allure.severity(allure.SEVERITY.CRITICAL);
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Karriere')).click();
        const currentUrl = await (await driver).getCurrentUrl();

        expect(currentUrl).to.equal('https://www.sulzer.de/de/karriere/');
    });

    it('should search for "sulzer gmbh" and click on link with a name "Stuttgart"', async () => {
        allure.severity(allure.SEVERITY.BLOCKER);
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Stuttgart')).click();
        const title = await driver.getTitle();

        expect(title).to.equal('Stuttgart');
    });

    it('should search for "sulzer gmbh" and click on link with a name "Unternehmen"', async () => {
        allure.severity(allure.SEVERITY.MINOR);
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Unternehmen')).click();
        const title = await driver.getTitle();

        expect(title).to.equal('Sulzer GmbH - Ihr Full-Service-IT-Unternehmen');
    });

    after(async () => driver.quit());
});