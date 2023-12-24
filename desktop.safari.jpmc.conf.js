const date = new Date();

exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    maxInstances: 15,
    maxInstancesPerCapability: 15,
    mochaOpts: {
        timeout: 40000
    },
    capabilities: [{
      browserName: 'Safari',
      platformName: 'macOS 13',
      browserVersion: '16',
      'sauce:options': {
        build: `Fixed capacity - 15 CCY`,
        commandTimeout: 480,
        idleTimeout: 600,
        maxDuration: 1800,
        recordScreenshots: false,
        extendedDebugging: true,
        timezone: "",
        screenResolution: "1600x1200",
        appiumVersion: "",
        capturePerformance: false,
        seleniumVersion: "4.1.4"
      },
    }],
    specs: [
      './test/**/*.js'
    ]
  };
