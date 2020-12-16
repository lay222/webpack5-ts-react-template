const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, '/dist'),
    hot: true,
    port: 9000,
    open: true,
    compress: true,
  },
});
