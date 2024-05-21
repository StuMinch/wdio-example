exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 3,
    maxInstancesPerCapability: 3,
    framework: 'mocha',
      mochaOpts: {
          timeout: 40000
      },
    capabilities: [{
      //browserName: 'safari',
      platformName: 'iOS',
      'appium:deviceName': 'iPhone.*',
      'appium:platformVersion': '15',
      'appium:automationName': 'XCUITest',
      'appium:deviceOrientation': 'portrait',
      'appium:autoAcceptAlerts': 'true',
      'appium:app': 'storage:d8ade97b-8327-4de9-a0eb-40a3c0d987f8',
      'sauce:options': {
        resigningEnabled: 'true',
        appiumVersion: '2.0.0',
        build: 'Best Buy - Fifth Pass',
        name: 'iOS 15'
        },
      },
      {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone.*',
      'appium:platformVersion': '16',
      'appium:automationName': 'XCUITest',
      'appium:deviceOrientation': 'portrait',
      'appium:autoAcceptAlerts': 'true',
      'appium:app': 'storage:d8ade97b-8327-4de9-a0eb-40a3c0d987f8',
      'sauce:options': {
        resigningEnabled: 'true',
        appiumVersion: '2.0.0',
        build: 'Best Buy - Fifth Pass',
        name: 'iOS 16'
        },
      },
      {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone.*',
      'appium:platformVersion': '17',
      'appium:automationName': 'XCUITest',
      'appium:deviceOrientation': 'portrait',
      'appium:autoAcceptAlerts': 'true',
      'appium:app': 'storage:d8ade97b-8327-4de9-a0eb-40a3c0d987f8',
      'sauce:options': {
        resigningEnabled: 'true',
        appiumVersion: '2.0.0',
        build: 'Best Buy - Fifth Pass',
        name: 'iOS 17'
      },
    },],
    specs: [
      './test/**/*.js'
    ]
  };