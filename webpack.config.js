// html-webpack-plugin converts the original index.html in /app and puts it in public so it can reference the bundled index.js
// using css modules to make sure styling is local to components so there aren't any screw ups across the project in terms of class naming
// using extract-text-webpack-plugin to extracts css styles from javascript and style loader to place the css in head of index.html to avoid FOUC
// conditionally choosing what goes down in development vs production
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const common = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/docs',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test:  /\.(js|jsx)$/, exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-simple',
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new Dotenv({
      path:'./.env'
    })
  ]
}

const devMode =   {
    devtool: "source-map",
    module: {
      loaders: [
        {
          test: /\.scss$/, loaders:['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader'],
        },
      ]
    }
  }

const prodBuild = {
      module: {
      loaders: [
        {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        }),
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings:false
        }
      }),
      new ExtractTextPlugin({
        filename: '[name].[chunkhash].css',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
    ]
}

module.exports = function(env){
  process.env.BABEL_ENV = env;
  if(env === 'production') {
    return merge(
      common,
      prodBuild
    )
  } else {
    return merge(
      common,
      devMode
    )
  }
}
