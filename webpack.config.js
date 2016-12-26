var webpack = require('webpack');


module.exports  ={
  context: __dirname + 'src', //root of our code files
  entry : {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
};
