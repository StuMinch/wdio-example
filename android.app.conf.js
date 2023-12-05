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
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UIAutomator2',
      'appium:app': 'storage:filename=home-depot-app.apk',
      'sauce:options': {
        build: 'GitHub Actions',
        name: 'Guest Checkout',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  