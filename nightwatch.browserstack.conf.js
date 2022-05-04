const baseConfig = require('./nightwatch.conf.js');

const config = {
    baseConfig,
    webdriver: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },
};

config.baseConfig.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.baseConfig.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
config.baseConfig.test_settings.default.desiredCapabilities.chromeOptions.args = [];

config.baseConfig.test_settings.firefox = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: 'XP',
        browserName: 'Firefox',
        browser_version: '47.0',
        ['browserstack.local']: false
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in config.baseConfig.test_settings) {
    var test_setting = config.baseConfig.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config.baseConfig;
