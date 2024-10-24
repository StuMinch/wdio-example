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
      'appium:automationName': 'UIAutomator2',
      'appium:platformVersion': '14.0',
      'appium:app': 'storage:c1d98123-a117-40a4-96d0-886ee5b4bb1c',
      'sauce:options': {
        build: 'Home Depot',
        name: 'Guest Checkout',
        appiumVersion: '2.0.0',
        tunnelName: 'mac-os-tunnel',
        cacheId: 'gco-1'
      },
    },
    ],
    specs: [
      './test/**/guestCheckout.test.1.js'
    ]
  };
  
  