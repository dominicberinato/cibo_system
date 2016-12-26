var webpack = require('webpack');


module.exports  ={
  context: __dirname + '/src', //root of our code files
  entry : {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
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
  devServer: {
    contentBase: __dirname + '/src',
  }
};
