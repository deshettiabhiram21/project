
const { Builder, Key, until, By } = require('selenium-webdriver');

async function GoogleSearch() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // Open Google
        await driver.get('https://www.google.com');

        // Search Selenium WebDriver
        await driver.findElement(By.name('q'))
            .sendKeys('selenium webdriver', Key.RETURN);

        // Wait for page title
        await driver.wait(until.titleContains('selenium webdriver'), 10000);

        // Get title
        let title = await driver.getTitle();

        console.log("Title is: " + title);

        // Check result
        if (title.includes('selenium webdriver')) {
            console.log("Test Passed");
        } else {
            console.log("Test Failed");
        }

    }
    catch (error) {
        console.log("Error is: " + error);
    }
    finally {
        await driver.quit();
    }
}

GoogleSearch();
