var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    if(process.env.TRAVIS) {
      configuration.browsers=['Chrome_travis_ci'];
    }
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
      'node_modules/foundation-sites/dist/foundation.min.js',
      'src/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'src/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '10000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
