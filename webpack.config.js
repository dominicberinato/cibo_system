'use strict'
var webpack = require('webpack');

//enviroment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports  ={
  //webpack reads our raw source from here
  context: __dirname + '/src', //root of our code files
  entry : {
    jquery: 'jquery',
    app: './app.jsx'
  },
  externals: {
    jQuery: 'jQuery'
  },
  //configure global imports
  plugins: [
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
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
          options: {presets: ['react', 'es2015', 'stage-0']}
        }],
        exclude: /(node_modules)/
      },
      {
        test: /\.(sass|scss)$/, //check for all sass files
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  //finding app modules
  resolve: {
    modules: [
      "node_modules",
      "./src/components"
    ],
    alias: {
      src:'src',
      applicationStyles: "src/styles/app.scss",
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  /*only load the source maps if not production*/
 devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
