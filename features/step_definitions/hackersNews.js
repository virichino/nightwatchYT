const { Given, Then } = require('@cucumber/cucumber');

Given(/^I open Hacker News's home page$/, () => {
    return browser
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('body', 1000);
});

/*Then(/^the title is "([^"]*)"$/, (title) => {
    return browser.assert.titleEquals(title);
});*/

Then(/^the Hacker News search form exists$/, () => {
    return browser.assert.visible('input[name="q"]');
});
