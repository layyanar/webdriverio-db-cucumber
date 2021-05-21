exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: "local",
  user: "lrajaeng_mynpew",
  key: "VDNzAsRhpnWJRxmJfGhp",
  host: "hub.browserstack.com",

  specs: ["./features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,
  commonCapabilities: {
    name: "parallel_test",
    build: "browserstack-build-1",
  },
  // capabilities: [{
  //     maxInstances: 5,
  //     browserName: 'chrome',
  //     acceptInsecureCerts: true
  // }],
  capabilities: [
    {
      browser: "chrome",
      browser_version: "90.0",
      os: "OS X",
      os_version: "Big Sur",
    },
    {
      device: "Samsung Galaxy S21",
      os_version: "11.0",
      browserName: "android",
      realMobile: "true",
    },
    {
      device: "iPhone XS",
      os_version: "14",
      browserName: "ios",
      realMobile: "true",
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  bail: 0,
  baseUrl: "http://localhost",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "cucumber",
  reporters: [
    [
      "allure",
      {
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./features/step-definitions/steps.js"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (passed) {
      browser.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}'
      );
    } else {
      browser.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}'
      );
    }
  },
};
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

//
// =====
// Hooks
// =====
// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
// it and to build services around it. You can either apply a single function or an array of
// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
// resolved to continue.
/**
 * Gets executed once before all workers get launched.
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 */
// onPrepare: function (config, capabilities) {
// },
/**
 * Gets executed before a worker process is spawned and can be used to initialise specific service
 * for that worker as well as modify runtime environments in an async fashion.
 * @param  {String} cid      capability id (e.g 0-0)
 * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
 * @param  {[type]} specs    specs to be run in the worker process
 * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
 * @param  {[type]} execArgv list of string arguments passed to the worker process
 */
// onWorkerStart: function (cid, caps, specs, args, execArgv) {
// },
/**
 * Gets executed just before initialising the webdriver session and test framework. It allows you
 * to manipulate configurations depending on the capability or spec.
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that are to be run
 */
// beforeSession: function (config, capabilities, specs) {
// },
/**
 * Gets executed before test execution begins. At this point you can access to all global
 * variables like `browser`. It is the perfect place to define custom commands.
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs        List of spec file paths that are to be run
 * @param {Object}         browser      instance of created browser/device session
 */
// before: function (capabilities, specs) {
// },
/**
 * Runs before a WebdriverIO command gets executed.
 * @param {String} commandName hook command name
 * @param {Array} args arguments that command would receive
 */
// beforeCommand: function (commandName, args) {
// },
/**
 * Runs before a Cucumber feature
 */
// beforeFeature: function (uri, feature) {
// },
/**
 * Runs before a Cucumber scenario
 */
// beforeScenario: function (world) {
// },
/**
 * Runs before a Cucumber step
 */
// beforeStep: function (step, context) {
// },
/**
 * Runs after a Cucumber step
 */
// afterStep: function (step, context) {
// },
/**
 * Runs after a Cucumber scenario
 */
// afterScenario: function (world) {
// },
/**
 * Runs after a Cucumber feature
 */
// afterFeature: function (uri, feature) {
// },

/**
 * Runs after a WebdriverIO command gets executed
 * @param {String} commandName hook command name
 * @param {Array} args arguments that command would receive
 * @param {Number} result 0 - command success, 1 - command error
 * @param {Object} error error object if any
 */
// afterCommand: function (commandName, args, result, error) {
// },
/**
 * Gets executed after all tests are done. You still have access to all global variables from
 * the test.
 * @param {Number} result 0 - test pass, 1 - test fail
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that ran
 */
// after: function (result, capabilities, specs) {
// },
/**
 * Gets executed right after terminating the webdriver session.
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that ran
 */
// afterSession: function (config, capabilities, specs) {
// },
/**
 * Gets executed after all workers got shut down and the process is about to exit. An error
 * thrown in the onComplete hook will result in the test run failing.
 * @param {Object} exitCode 0 - success, 1 - fail
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {<Object>} results object containing test results
 */
// onComplete: function(exitCode, config, capabilities, results) {
// },
/**
 * Gets executed when a refresh happens.
 * @param {String} oldSessionId session ID of the old session
 * @param {String} newSessionId session ID of the new session
 */
//onReload: function(oldSessionId, newSessionId) {
//}
