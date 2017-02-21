'use strict'
var webpack = require('webpack')
var path = require('path')
var envFile = require('node-env-file')
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var OfflinePlugin =  require('offline-plugin');
//enviroment variable
var PRODUCTION =  process.env.NODE_ENV === 'production';
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV === 'test';

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

//separate production plugins and developement plugins
var plugins = PRODUCTION
    ?   [

            new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.[hash:12].min.js'}),
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              }
            }),
            new CompressionPlugin({
              asset: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.js$/,
              threshold: 10240,
              minRatio: 0.8
            }),
            new HTMLWebpackPlugin({
              template: 'index-template.html'
            }),
            new OfflinePlugin()
        ]
    : [

      ];

//push universal plugins
plugins.push(

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
      minimize: true,
      debug: false,
      test: /\.scss$/,
      options: {
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
          ]
        }
      }
  })
)

//different entries for production and developement
var entry =  PRODUCTION
    ?   {
          app: ['./app.jsx'],
          vendor:
          [
            'script-loader!jquery/dist/jquery.min.js',
            'script-loader!foundation-sites/dist/foundation.min.js',
            'react',
            'react-redux',
            'firebase',
            'material-ui',
            'react-dom',
            'react-router',
            'redux',
          ]
        }
    :   {
          jquery: 'script-loader!jquery/dist/jquery.min.js',
          foundation: 'script-loader!foundation-sites/dist/foundation.min.js',
          app: './app.jsx'
        };

//enable or disable hot module replace
var buildModule = PRODUCTION || TEST
    ?             {
                    rules: [
                      {
                        test: /\.(js|jsx)$/, //check for all js files
                        use: [{
                          loader: 'babel-loader',
                          options: { presets: ['react', 'es2015', 'stage-0']}
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
                  }
      :           {
                      rules: [
                        {
                          test: /\.(js|jsx)$/, //check for all js files
                          use: [{
                            loader: 'babel-loader',
                            options: { presets: ['react', 'es2015', 'stage-0', 'react-hmre']}
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
                    };



module.exports = {
  //webpack reads our raw source from here
  context: __dirname + '/src', //root of our code files
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  //fix for can't find 'fs'
  target: 'node',
  entry: entry,
  externals: {
    jQuery: 'jQuery',
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
  //configure global imports
  plugins: plugins,
  //the transpiled output is here
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist', //for the dev server
    filename: PRODUCTION ? '[name].[hash:12].min.js' : '[name].bundle.js'
  },
  module: buildModule,
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
  /*only load the source maps if not production*/
  devtool: 'source-map'
};
