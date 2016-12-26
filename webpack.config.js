var webpack = require('webpack');


module.exports  ={
  //webpack reads our raw source from here
  context: __dirname + '/src', //root of our code files
  entry : {
    app: './app.jsx',
  },
  //the transpiled output is here
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets', // for the dev server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //check for all js files
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015', 'react', 'stage-0']}
        }]
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
  //add resolve clause
  resolve: {
    modules: [
      'node_modules',
      '.src/components',
    ]
  },
  devServer: {
    contentBase: __dirname + '/src',
  }
};
