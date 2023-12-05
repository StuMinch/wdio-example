exports.config = {
    user: secrets.SAUCE_USERNAME,
    key: secrets.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 100,
    maxInstancesPerCapability: 100,
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '10.0',
      'appium:orientation': 'LANDSCAPE',
      'appium:automationName': 'UIAutomator2',
      'appium:app': 'storage:filename=you-app.apk',
      'sauce:options': {
        prerun: 'storage:filename=adb-prerun.sh',
        build: 'Android Emulator PreRun Test',
        name: 'Android Test',
        appiumVersion: '2.0.0'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
  