exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    maxInstances: 300,
    maxInstancesPerCapability: 300,
    capabilities: [{
      browserName: 'chrome',
      platform: 'Windows 10',
      version: 'latest',
    }],
    specs: [
      './test/**/*.js'
    ]
  };
  
