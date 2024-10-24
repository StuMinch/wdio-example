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
    platformName: 'iOS',
    browserName: 'Safari',
    'appium:deviceName': 'iPad Air 2022 5th Gen',
    'appium:automationName': 'XCUITest',
    'appium:deviceOrientation': 'portrait',
    'appium:autoAcceptAlerts': 'true',
    'sauce:options': {
      appiumVersion: 'latest',
      build: 'Alaska Airlines'
      },
    },
    {
    platformName: 'iOS',
    browserName: 'Safari',
    'appium:deviceName': 'iPad Air 2022 5th Gen',
    'appium:automationName': 'XCUITest',
    'appium:deviceOrientation': 'portrait',
    'appium:autoAcceptAlerts': 'true',
    'sauce:options': {
      appiumVersion: 'latest',
      build: 'Alaska Airlines'
    },
  },],
  specs: [
    './test/**/alaska.rdc.web.spec.js'
  ]
};