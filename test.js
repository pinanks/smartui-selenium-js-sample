import  { Builder, By, Key, until } from 'selenium-webdriver';
import { smartuiSnapshot } from '@lambdatest/selenium-driver';

(async function example() {
    try {
        var driver = await new Builder()
            .forBrowser('chrome')
            .build();
        console.log('driver started');

        await driver.get('https://www.pinterest.com/pin/16958936087791895/');
        await smartuiSnapshot(driver, 'Kashmir');
    } catch (error) {
        console.error(error);
    }

    await driver.quit();
})();
