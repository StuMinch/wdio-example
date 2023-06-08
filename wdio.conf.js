exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    maxInstances: 300,
    maxInstancesPerCapability: 300,
    capabilities: [{
      browserName: 'chrome',
      platformName: 'Android',
      'appium:deviceName': 'Google Pixel 3 GoogleAPI Emulator',
      'appium:platformVersion': '10.0',
      'appium:automationName': 'UIAutomator2',
      'sauce:options': {
        build: 'WDIO & CodeMagic',
        name: 'Android Test',
        appiumVersion: '1.22.3'
      },
    },
    ],
    specs: [
      './test/**/*.js'
    ]
  };
  
