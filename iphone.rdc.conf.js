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
    platformName: 'iOS',
    browserName: 'Safari',
    'appium:deviceName': 'iPhone.*',
    'appium:platformVersion': '16',
    'appium:automationName': 'XCUITest',
    'appium:deviceOrientation': 'portrait',
    'sauce:options': {
      //appiumVersion: 'latest',
      //tunnelName: 'docker-compose-tunnel',
      build: 'Do not specify Appium version'
      },
  },],
  specs: [
    './test/**/winnie.rdc.web.spec.js'
  ]
};