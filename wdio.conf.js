exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  logLevel: 'debug',
  logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
  services: ['sauce'],
  maxInstances: 100,
  maxInstancesPerCapability: 100,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'storage:filename=cart-release_v23.104.302-20001_arm64-v8a.apk',
    'sauce:options': {
      prerun: {
        'executable': 'storage:filename=adb-prerun.sh',
        'background': true,
        'timeout': 120
      },
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

