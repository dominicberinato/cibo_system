var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  var configuration = {
    browsers: ['Chrome'],
    customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/js/foundation.min.js',
      'src/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'src/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: 30000
      }
    },
    webpack: webpackConfig,
    browserDisconnectTimeout: 20000,
    browserNoActivityTimeout: 60000,
    externals: {
       'jsdom': 'window',
       'cheerio': 'window',
       'react/lib/ExecutionEnvironment': true,
       'react/addons': true,
       'react/lib/ReactContext': 'window',
       'sinon': 'window.sinon'
     },
    webpackServer: {
      noInfo: true
    }
  };
  if(process.env.TRAVIS) {
    configuration.browsers=['Chrome_travis_ci'];
  }
  config.set(configuration);
};
