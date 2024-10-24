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
      'appium:platformVersion': '10.0',
      'appium:automationName': 'UIAutomator2',
      'appium:orientation': 'LANDSCAPE',
      'sauce:options': {
        build: 'Android Orientation Testing',
        orientation: 'LANDSCAPE',
        appiumVersion: '2.0.0'
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UIAutomator2',
      'appium:orientation': 'LANDSCAPE',
      'sauce:options': {
        build: 'Android Orientation Testing',
        orientation: 'LANDSCAPE',
        appiumVersion: '2.0.0'
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '12.0',
      'appium:automationName': 'UIAutomator2',
      'appium:orientation': 'LANDSCAPE',
      'sauce:options': {
        build: 'Android Orientation Testing',
        orientation: 'LANDSCAPE',
        appiumVersion: '2.0.0'
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '13.0',
      'appium:automationName': 'UIAutomator2',
      'appium:orientation': 'LANDSCAPE',
      'sauce:options': {
        build: 'Android Orientation Testing',
        orientation: 'LANDSCAPE',
        appiumVersion: '2.0.0'
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UIAutomator2',
      'appium:orientation': 'LANDSCAPE',
      'sauce:options': {
        build: 'Android Orientation Testing',
        appiumVersion: '2.0.0'
      },
    }
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
