exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 100,
    maxInstancesPerCapability: 100,
    capabilities: [{
      browserName: 'chrome',
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '12.0',
      'appium:automationName': 'UIAutomator2',
      'sauce:options': {
        build: 'Android Emulator',
        name: 'Android Test',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
