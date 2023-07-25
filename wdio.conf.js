exports.config = {
  framework: 'mocha',
    mochaOpts: {
        timeout: 40000
    },
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  logLevel: 'debug',
  logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
  services: ['sauce'],
  maxInstances: 50,
  maxInstancesPerCapability: 50,
  capabilities: [{
    //browserName: 'chrome',
    platformName: 'Android',
    //'appium:deviceName': 'Google_Pixel_5_sltech_us',
    //autoWebview: true,
    'appium:deviceName': 'Google Pixel 6 GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:deviceOrientation': 'portrait',
    'appium:app': 'storage:filename=app-qa-firebase.apk',
    'appium:automationName': 'UIAutomator2',
    'sauce:options': {
      build: '2023-07-24 - Individual Test Runs',
      appiumVersion: '2.0.0'
    },
  },
  ],
  specs: [
    './test/**/*.js'
  ]
};

