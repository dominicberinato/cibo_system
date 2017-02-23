'use strict'
var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var OfflinePlugin = require('offline-plugin');



//enviroment variable
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test'


//load env file using process.env
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

//check if on production
var entry = PRODUCTION
    ?   {
          app:
           [
             './app.jsx',
           ],
          vendor:
          [
            'react',
            'redux',
            'react-redux',
            'material-ui',
            'react-router',
            'firebase',
            'react-dom',
            'redux-thunk'
          ]
        }
    :   [
          './app.jsx'
        ]

var plugins = PRODUCTION
    ?   [
          new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.[hash:12].min.js'}),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              screw_ie8: true,
              dead_code: true,
              unused: true
            }
          }),
          new HTMLWebpackPlugin({
            template:'index-template.html'
          }),
          new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          }),
          new OfflinePlugin(
            {
              updateStrategy: 'changed',
              responseStrategy: 'network-first'
            }
          )
        ]
    :   [
          new HTMLWebpackPlugin({
            template:'index-template.html'
          })
        ];

//add universal plugins
plugins.push(
  new webpack.DefinePlugin({
   'process.env': {
     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
     API_KEY: JSON.stringify(process.env.API_KEY),
     AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
     DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
     STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
   }
 })
);

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
                      }
                    ],
                    noParse: [
                      /node_modules\/sinon/
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
                          }
                      ],
                      noParse: [
                        /node_modules\/sinon/
                      ]
                    };


module.exports =  {
  //find this file and start from there
  context: __dirname + '/src',
  entry: entry,
  externals: {
    'jquery': 'jQuery'
  },
  plugins: plugins,
  output: {
    publicPath: PRODUCTION ? '/' : '/',
    filename: PRODUCTION ? '[name].[hash:12].min.js' : '[name].bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    modules: [ //Directories where webpack can source modules from
      'node_modules',
      './src/components',
      './src/components/tabs',
      './src/components/sections',
      './src/components/forms',
      './src/reducers',
      './src/actions'
    ],
    alias: {
      src: path.resolve(__dirname, "src/"),
      sinon: 'sinon/pkg/sinon'
    },
    extensions: [" ",".js", ".jsx"]
  },
  module: buildModule,
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true
  },
  /*only load the source maps if not production*/
  devtool: 'source-map'
};
