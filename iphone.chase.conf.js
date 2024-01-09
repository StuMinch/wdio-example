exports.config = {
    deprecationWarnings: false,
    framework: 'mocha',
      mochaOpts: {
          timeout: 40000
      },
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 5,
    maxInstancesPerCapability: 5,
    capabilities: [{
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 14 Simulator',
      'appium:app': 'storage:filename=Retail_release-4.482-20231204-Minor-1_37_40963_automation-chase.app.zip',
      'appium:platformVersion': '16.2',
      'appium:deviceOrientation': 'portrait',
      'appium:automationName': 'XCUITest',
      'sauce:options': {
        build: 'Simple Chase app test',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  