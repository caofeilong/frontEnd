var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.[js|jsx]$/, loader: 'babel?presets[]=es2015'}
        ]
    },
    devServer: {
        hot: true
    }
};