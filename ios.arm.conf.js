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
    services: ['sauce'],
    maxInstances: 15,
    maxInstancesPerCapability: 15,
    capabilities: [{
      platformName: 'iOS',
      browserName: 'Safari',
      'appium:deviceName': 'iPhone 15 Simulator',
      'appium:platformVersion': '17.5',
      'appium:deviceOrientation': 'portrait',
      'appium:automationName': 'XCUITest',
      'sauce:options': {
        build: 'iOS Sim on ARM',
        armRequired: true
      },
    },
    ],
    specs: [
      './test/**/test.apple.com.spec.js'
    ]
  };
  
  
