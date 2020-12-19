const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // bundle 大小分析
    new BundleAnalyzerPlugin(),
  ],
})
