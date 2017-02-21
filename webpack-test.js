module.exports = {
  entry: {
    index: "./test/index.js",
    index1: "./test/index1.js",
  },
  output: {
    filename: "[name].bundle-1.js",
    chunkFilename:"[name].chunk.js",
    path: "./test/asset"
  },
  devtool:"eval-source-map"
}
