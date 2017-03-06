var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (config) {
  var {devServer, publicPath} = config;
  return {
    entry: "./app/index.js",
    output: {
      path: `${__dirname}/ref/`,
      filename: '[name]' + (devServer ? '.[chunkhash]' : '') + '.js',
      publicPath: publicPath
    },
    resolve: {
      extensions: ['.ts', '.es6', '.js', '.json', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
          }]
        },
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          loaders: ["style-loader", "css-loader?module", "sass-loader"]
        },
        {
          test: /\.gscss$/,
          exclude: [/node_modules/],
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'html-loader!./app/index.html'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      //"react-hot-loader/babel"
    ],
    devServer: {
      hot: true,
      host: "0.0.0.0",
      hotOnly: true,
      proxy: {
        '/api/*': {
          target: 'http://lovesomnus.com:3000',
          secure: false
        }
      }
    }
  };
}
