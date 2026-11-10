
const { Builder, By, until } = require('selenium-webdriver');

async function testRegistrationForm() {

    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {

        // Open registration form
        await driver.get('http://localhost:8080');

        // Enter username
        await driver.findElement(By.id('username'))
            .sendKeys('student1');

        // Enter email
        await driver.findElement(By.id('email'))
            .sendKeys('student1@example.com');

        // Enter password
        await driver.findElement(By.id('password'))
            .sendKeys('password123');

        // Click Register button
        await driver.findElement(
            By.css('button[type="submit"]')
        ).click();

        // Wait for success message
        await driver.wait(
            until.elementLocated(By.id('message')),
            5000
        );

        // Get message
        let message = await driver.findElement(
            By.id('message')
        ).getText();

        console.log('Test Result:', message);

        // Check registration
        if (message === 'Registration Successful!') {
            console.log('Test Passed');
        } else {
            console.log('Test Failed');
        }

    } finally {

        // Close browser
        await driver.quit();

    }
}

testRegistrationForm();


//Part 3: Running the Web Application
//Open the VS Code terminal inside the project folder.

//Install HTTP server:
//npm install -g http-server


//Start the server:
//npx http-server