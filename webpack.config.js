'use strict'
var webpack = require('webpack')
var path = require('path')
var envFile = require('node-env-file')
//enviroment variable
PRODUCTION =  process.env.NODE_ENV === 'production';
DEVELOPMENT = process.env.NODE_ENV === 'development';
TEST = process.env.NODE_ENV === 'test';

// set enviroment
try{
  if(DEVELOPMENT || TEST) {
      envFile(path.join(__dirname, 'config/'+process.env.NODE_ENV + '.env'));
  } else {
    console.log('on server no need for env file')
  }
} catch(e) {
  console.log(e);
}

module.exports = {
  //webpack reads our raw source from here
  context: __dirname + '/src', //root of our code files
  entry: {
    jquery: 'script-loader!jquery/dist/jquery.min.js',
    foundation: 'script-loader!foundation-sites/dist/foundation.min.js',
    app: './app.jsx'
  },
  externals: {
    jQuery: 'jQuery',
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
  //configure global imports
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN:JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL:JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET:JSON.stringify(process.env.STORAGE_BUCKET),
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
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/', // for the dev server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //check for all js files
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-0', {PR}] }
        }],
        exclude: /(node_modules)/
      },
    ],
    noParse: [
      /node_modules\/sinon/
    ],
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json',
      }
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
      sinon: 'sinon/pkg/sinon'
    },
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  /*only load the source maps if not production*/
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map'
};
