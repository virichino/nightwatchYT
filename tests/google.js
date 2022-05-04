module.exports = {
    '@tags': ['google'],
    '@disable': true,
    "Google advanced search Elon musk": () => {
        const mainQuery = "Elon Musk"

        const page = browser.page.googleAdvancedSearch();

        const resultPageQuerySelector = `#searchform input[name= 'q'][value= '${mainQuery}']`
        const resultPageLanguajeSelector = '//div[contains(@class,"hdtb")]/div[contains(text(),"Search Italian pages")]'
        const resultPageLastUpdateSelector = '//div[contains(@class,"hdtb")]/div[contains(text(),"Past month")]'

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()
        browser
            .verify.urlContains('as_q=Elon+Musk', "Params: Query is Elon Musk")
            .verify.urlContains('lr=lang_it', 'Params: Languaje is italian')
            .verify.urlContains('as_qdr=m', 'Params: Time period is last month')
        browser.expect.element(resultPageQuerySelector).to.be.visible
        browser.verify.visible(resultPageQuerySelector)
        browser.useXpath()
        browser.assert.textContains(resultPageLanguajeSelector, 'Search Italian pages', 'UI: Language is set to Italian')
        browser.verify.textContains(resultPageLastUpdateSelector, 'Past month', 'UI: Language is set to Past Month')
        browser.saveScreenshot('test_output/google.png')
    }
}