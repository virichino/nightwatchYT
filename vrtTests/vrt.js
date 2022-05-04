module.exports = {
    "My first test case vrt": () => {
        const headerSelector = "td[bgcolor='#ff6600']"
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible(headerSelector)
            .assert.screenshotIdenticalToBaseline(headerSelector, /*optional*/ 'hn-header')
    }
}