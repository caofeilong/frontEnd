var webpack = require('webpack');
var path = require('path');


module.exports = function (config) {
    return {
        entry: "./app/index.js",
        output: {
            path: `${__dirname}/ref/`,
            filename: '[name].[chunkhash:8].js',
            publicPath: config.publicPath
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
        devServer: {
            contentBase: "ref/"
        }
    };
}