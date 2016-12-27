///import the  webpack config
var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //load chrome browswer laucher for testing
    singleRun: true, //add the continous integhration mode
    frameworks: ['mocha'], //frame works to use to test the app
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'src/tests/**/*.test.jsx'
    ], //this is a list of files to load when testing
    preprocessors: {
      'src/tests/**/*.test.jsx':['webpack', 'sourcemap']
    }, //use this preprocessors on the files before running the tests
    reporters: ['mocha'], //lets use the mocha framework to report
    client: {
      mocha: { //start after 5 seconds
        timeout: '5000'
      },
      webpack: webpackConfig, //use our webpack config file to tell karma about the app
      webpackServer:  {
        noInfo: true
      }
    }
  });
}
