exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  services: ['sauce'],
  maxInstances: 100,
  capabilities: [{
    browserName: 'edge',
    platform: 'Windows 11',
    version: 'latest',
    'sauce:options': {
      build: 'Windows 11 Testing - 85 vs Latest',
    },
  }],
  specs: [
    './test/**/*.js'
  ]
};
