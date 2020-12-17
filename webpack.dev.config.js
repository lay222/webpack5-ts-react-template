const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.config');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, '/dist'),
    hot: true,
    // port: 9000,
    open: true,
    // compress: true,
    // proxy: {
    //   '*': 'https://127.0.0.1:9000',
    //   source: false,
    //   changeOrigin: true,
    // },
  },
});
