
const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {

    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {

        // Open registration form
        await driver.get('http://localhost:3000');

        // Enter username
        await driver.findElement(By.id('username'))
            .sendKeys('testuser');

        // Enter email
        await driver.findElement(By.id('email'))
            .sendKeys('testuser@example.com');

        // Enter password
        await driver.findElement(By.id('password'))
            .sendKeys('password123');

        // Click Register
        await driver.findElement(By.tagName('button')).click();

        // Wait for response
        await driver.wait(
            until.elementLocated(By.tagName('body')),
            5000
        );

        // Verify result
        let bodyText = await driver.findElement(By.tagName('body')).getText();

        if (bodyText.includes('Registration successful!')) {
            console.log('Test Passed: Registration was successful.');
        } else {
            console.log('Test Failed: Registration was not successful.');
        }

    } finally {
        await driver.quit();
    }
}

runTest();
