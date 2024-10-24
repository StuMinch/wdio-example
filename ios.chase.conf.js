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
      'appium:deviceName': 'iPhone 14 Simulator',
      'appium:app': 'storage:ed55f6bc-b951-4de7-9bf1-8845fe5a7303',
      'appium:platformVersion': '16.2',
      'appium:deviceOrientation': 'portrait',
      'appium:automationName': 'XCUITest',
      "appium:processArguments": {
        'args': [
          'a',
          'b'
        ],
        'env': {
          'c':'d'
        }
      },
      'sauce:options': {
        build: 'Simple Chase app test',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  
