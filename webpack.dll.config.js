const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const common = require('./babel.config.json')

module.exports = merge(common, {
  mode: 'production',

  optimization: {

  },
  plugins: [
    // new webpack.DllPlugin({
    //   name: '__dll_[name]',
    //   path: path.join(__dirname, 'dist/dll', '[name].manifest.json'),
    // }),
  ],

})
