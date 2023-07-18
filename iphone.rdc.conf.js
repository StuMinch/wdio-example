exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  logLevel: 'debug',
  logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
  services: ['sauce'],
  maxInstances: 1,
  maxInstancesPerCapability: 1,
  capabilities: [{
    //browserName: 'safari',
    platformName: 'iOS',
    'appium:deviceName': 'iPhone (13|14)',
    'appium:automationName': 'XCUITest',
    'appium:app': 'storage:filename=Scrumdinger.ipa',
    'sauce:options': {
      build: 'iPhone 13-14 Regex',
      name: 'iPhone Test',
    },
  },
  ],
  specs: [
    './test/**/*.js'
  ]
};