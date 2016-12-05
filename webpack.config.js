var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');

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
        devServer: {
            contentBase: "ref/"
        }, plugins: [
            function () {
                this.plugin('done', stats => {
                    fs.readFile('./app/index.html', (err, data) => {
                        const $ = cheerio.load(data.toString());
                        $('script[src*=dest]').attr('src', ".." + publicPath + 'main' + (devServer ? '.' + stats.hash : '') + '.js');
                        fs.writeFile('./ref/index.html', $.html(), err => {
                            !err && console.log('Set has success: ' + stats.hash)
                        })
                    })
                })
            }
        ]
    };
}