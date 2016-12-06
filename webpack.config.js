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
        module: {
            loaders: [
                {
                    test: /\.js|jsx$/, loader: 'babel',
                    exclude: /(node_modules|bower_components)/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./app/index.html"
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })

        ]
    };
}