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
      //'appium:deviceName': 'Google_Pixel_5_sltech_us',
      'appium:platformVersion': '12.0',
      'appium:automationName': 'UIAutomator2',
      'appium:app': 'storage:filename=glomo-co-dev-signed.apk',
      'sauce:options': {
        build: 'BBVA',
        name: 'Reproduce Emulator Crash',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  