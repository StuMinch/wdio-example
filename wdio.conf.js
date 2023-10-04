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
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 6 GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:deviceOrientation': 'portrait',
    'appium:app': 'storage:filename=home-depot-app.apk',
    'appium:automationName': 'UIAutomator2',
    'sauce:options': {
      build: '2023-09-26 - Android WebViews',
      appiumVersion: '2.0.0'
    },
  },
  ],
  specs: [
    './test/**/*.js'
  ]
};

