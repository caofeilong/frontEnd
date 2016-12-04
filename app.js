var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack({
    // configuration
});
var server = new WebpackDevServer(compiler, {});
var a = "23";