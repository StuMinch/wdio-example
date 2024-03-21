exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    maxInstances: 100,
    capabilities: [{
      browserName: 'Chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        build: 'Solera',
        extendedDebugging: true
      },
    }],
    specs: [
      './test/**/solera.spec.js'
    ]
  };
  