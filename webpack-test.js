module.exports = {
  entry: {   //项目的入口
    index: "./test/index.js",
    index1: "./test/index1.js",
  },
  output: {  //chunkhash  和   compilation 对应的 hash   compilation  某个版本的资源对应的编译进程
    filename: "[name].[chunkhash].bundle-1.js",  //entry 文件的命名规则
    chunkFilename:"[name].[chunkhash].chunk.js",  //不是entry文件的命名规则
    //hotUpdateChunkFilename:"[id].[hash].hot-update.js",
    path: "./test/asset" ,   //打包输出的路径
    sourcePrefix:'cfl'
  },
  devServer: {
    contentBase:  "./test/asset",
    compress: true,
    port: 9000
  }
  //devtool:"eval"   //映射文件的映射方法
}
