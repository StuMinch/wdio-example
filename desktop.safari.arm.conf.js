const date = new Date();

exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    maxInstances: 100,
    maxInstancesPerCapability: 100,
    mochaOpts: {
        timeout: 40000
    },
    capabilities: [{
      browserName: 'Safari',
      platformName: 'macOS 14.0',
      browserVersion: '17.5',
      'sauce:options': {
        build: `Desktop Safari ARM Testing - ${date}`,
        armRequired: true
      },
    }],
    specs: [
      './test/**/test.apple.com.spec.js'
    ]
  };