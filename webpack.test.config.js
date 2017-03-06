var path = require('path');


//学习  html-loader

module.exports = {
  entry: "./test/index.js",
  output: {
    publicPath: "http://cdn.example.com/[hash]/"
  },
  module: {
    rules: [
      { test: /\.jpg$/, use: [ "file-loader" ] },
      { test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] }
    ]
  },

}
