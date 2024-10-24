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
    maxInstances: 5,
    maxInstancesPerCapability: 5,
    capabilities: [{
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 14 Simulator',
      'appium:app': 'storage:filename=CrashMe.zip',
      'appium:platformVersion': '16.2',
      'appium:deviceOrientation': 'portrait',
      'appium:automationName': 'XCUITest',
      'sauce:options': {
        build: 'iOS Crash Dummy',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  