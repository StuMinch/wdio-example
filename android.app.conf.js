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
      'appium:deviceName': 'Samsung_Galaxy_S21_13_real_us',
      'appium:automationName': 'UIAutomator2',
      'appium:app': 'storage:36223bbd-c738-400e-81c2-8dcd40e1ff9e',
      'sauce:options': {
        build: 'Macrobenchmark Performance Testing',
        name: 'ListView',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  