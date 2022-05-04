require('dotenv').config()

module.exports = {
    'src_folders': ['tests'],
    'page_objects_path': ['page-objects'],

    'webdriver': {
        'start_process': true,
        'server_path': 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
        'port': 80
    },
    'desiredCapabilities': {
        "goog:chromeOptions": {
            "excludeSwitches": [
                "enable-logging",
                "enable-automation"
            ], "args": [
                "--lang=en-GB",
            ]
        }
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                "chromeOptions": {
                    "excludeSwitches": [
                        "enable-logging",
                        "enable-automation"
                    ], "args": [
                        "--lang=en-GB",
                        "--headless"
                    ]
                }
            }
        }
    }
};