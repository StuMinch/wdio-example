exports.config = {
  // ====================
  // Specify Test Files
  // ====================
  specs: [
    './test/**/*.spec.js' // Change this path to match your test files
  ],

  // ====================
  // Frameworks
  // ====================
  framework: 'mocha', // Can be 'mocha', 'jasmine' or 'cucumber'

  // ====================
  // Capabilities
  // ====================
  capabilities: [{
    // Required capabilities for LambdaTest tunnel and Appium
    user: process.env.LT_USERNAME, // Replace with your LambdaTest username
    key: process.env.LT_ACCESS_KEY, // Replace with your LambdaTest access key
    maxInstances: 1, // Adjust for parallel testing

    'lt:options': {
      build: 'iOS Sims',
      w3c: true,
      //platformName: 'ios',
      platformVersion: '16.0',
      isRealMobile: false,
      'appium:deviceName': 'iPhone 14',
      'appium:app': 'lt://APP10160601541707930812692134',
      'appium:automationName': 'XCUITest'
    },

    // Other desired capabilities like automationName, bundleID, etc.
    // See LambdaTest documentation for available options
  }],


  // ====================
  // Services
  // ====================
  services: [['lambdatest', { // Use lambdatest service
    tunnel: false
  }]],

  // ====================
  // Reporters
  // ====================
  reporters: ['spec'], // Change reporters as needed

  // ====================
  // Additional options
  // ====================
  baseUrl: 'https://www.apple.com/iphone', // Your base URL for testing
  waitTimeout: 10000, // Increase if needed
  logLevel: 'info', // Change log level as needed
  connectionRetryCount: 1, // Retry count for failed connections

  // Additional LambdaTest options (optional)
  lambdatestOpts: {
    visual: false, // Enable visual testing (screenshots)
    video: true, // Enable video recording
    networkLogs: false, // Capture network logs
    max_duration: 600, // Max test duration in seconds
  }
};
