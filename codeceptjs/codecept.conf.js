const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './tests/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    "allure": {
      "enabled": true,
      "outputDir": './allure-results',
      "enableScreenshotDiffPlugin": true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}