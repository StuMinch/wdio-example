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
  maxInstances: 1,
  maxInstancesPerCapability: 1,
  capabilities: [{
    //browserName: 'chrome',
    platformName: 'Android',
    'appium:deviceName': 'Google_Pixel_5_sltech_us',
    //'appium:deviceName': 'Google Pixel 6 GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:deviceOrientation': 'portrait',
    'appium:app': 'storage:filename=home-depot-app.apk',
    'appium:automationName': 'UIAutomator2',
    'sauce:options': {
      build: 'Guest Checkout WebView Troubleshooting'
      //appiumVersion: '2.0.0-beta66'
    },
  },
  ],
  specs: [
    './test/**/*.js'
  ]
};

