var webpack = require('webpack');


module.exports  ={
  //webpack reads our raw source from here
  context: __dirname + '/src', //root of our code files
  entry : {
    app: './app.jsx',
  },
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
  //finding app modules
  resolve: {
    modules: [
      "node_modules",
      "./src/components"
    ],
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: __dirname + '/src',
  }
};
