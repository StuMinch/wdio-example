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
  services: ['sauce', 'intercept'],
  maxInstances: 50,
  maxInstancesPerCapability: 50,
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 15 Simulator',
    'appium:app': 'storage:filename=Retail_release-4.470-20231102_16_40613_automation-chase.app.zip',
    'appium:platformVersion': '17.0',
    'appium:deviceOrientation': 'portrait',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
      build: 'iOS 17 Start Times',
      appiumVersion: '2.0.0'
    },
  },
  ],
  specs: [
    './test/**/*.js'
  ]
};

