const {merge} =require('webpack-merge')
const common =require('./webpack.config')
const {resolve} = require('path')

module.exports=merge(common, {
    mode:'development',
    devServer: {
        contentBase: resolve(__dirname, '/dist'),
        hot:true,
        port:9000,
        open:true,
        compress:true,
    },
})