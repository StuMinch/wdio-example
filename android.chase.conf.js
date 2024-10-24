exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 100,
    maxInstancesPerCapability: 100,
    framework: 'mocha',
    mochaOpts: {
        timeout: 40000
    },
    capabilities: [{
      platformName: 'Android',
      'appium:autoGrantPermissions': true,
      'appium:deviceName': 'Google.*',
      'appium:automationName': 'UIAutomator2',
      'appium:app': 'storage:filename=Retail_chaseUat_release-2024.07-Minor1_4.542_5358_g30e1b6b6cbe_4_arm64-v8a.apk',
      'sauce:options': {
        build: 'Android Gestures Testing',
        name: 'Guest Checkout',
        appiumVersion: 'appium2-20240801'
      },
    },
    ],
    specs: [
      './test/**/longpress.android.test.js'
    ]
  };
  
  