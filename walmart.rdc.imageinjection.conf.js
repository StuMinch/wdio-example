exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 3,
    maxInstancesPerCapability: 3,
    framework: 'mocha',
      mochaOpts: {
          timeout: 40000
      },
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Google.*',
      'appium:automationName': 'UIAutomator2',
      'appium:deviceOrientation': 'portrait',
      'appium:app': 'storage:d92ba154-1e5e-4901-bca2-59fe2f75adea',
      'sauce:options': {
        sauceLabsImageInjectionEnabled: true,
        appiumVersion: 'latest',
        build: 'RDC-1514 - Image Injection'
        },
    },],
    specs: [
      './test/**/walmart.imageinjection.test.js'
    ]
  };