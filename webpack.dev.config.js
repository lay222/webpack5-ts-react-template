const { merge } = require('webpack-merge')
const { resolve } = require('path')
const common = require('./webpack.config')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, '/dist'),
    hot: true,
    // port: 9000,
    open: true,
    // 二级路由，刷新get 404
    historyApiFallback: true,
    // compress: true,
    // proxy: {
    //   '*': 'https://127.0.0.1:9000',
    //   source: false,
    //   changeOrigin: true,
    // },
  },
})
