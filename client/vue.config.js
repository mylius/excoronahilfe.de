const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  configureWebpack: {

    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|css)$/,
      })
    ]
  }
};
