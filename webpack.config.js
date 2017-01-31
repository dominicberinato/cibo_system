'use strict'
var webpack = require('webpack');
var path = require('path')
//enviroment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  //webpack reads our raw source from here
  context: __dirname + '/src', //root of our code files
  entry: {
    jquery: 'script!jquery/dist/jquery.min.js',
    foundation: 'script!foundation-sites/dist/foundation.min.js',
    app: './app.jsx'
  },
  externals: {
    jQuery: 'jQuery'
  },
  //configure global imports
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new webpack.LoaderOptionsPlugin({
        test: /\.scss$/,
        options: {
          sassLoader: {
            includePaths: [
              path.resolve(__dirname, './node_modules/foundation-sites/scss')
            ]
          }
        }
    })
  ],
  //the transpiled output is here
  output: {
    path: __dirname + '/dist/assets',
    filename: '[name].bundle.js',
    publicPath: '/assets', // for the dev server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //check for all js files
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-0'] }
        }],
        exclude: /(node_modules)/
      },
    ]
  },
  //finding app modules
  resolve: {
    modules: [
      "node_modules",
      "./src/components",
      "./src/components/tabs",
      "./src/components/sections",
      "./src/components/forms",
      "./src/reducers",
      "./src/actions"
    ],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  /*only load the source maps if not production*/
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
