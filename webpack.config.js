const webpack =require('webpack')
const {resolve} = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const ExtractTextPlugin= require('extract-text-webpack-plugin')

module.exports ={
    // 配置入口文件
    entry: {
        app: './src/index.tsx',
    },
    // 打包📦之后的出口
    output: {
        // 如果不加哈希值，浏览器会有缓存，可能你部署了，但是用户看到的还是老页面
        // 8是hash的长度，如果不设置，webpack会设置默认值为20。
        filename: 'js/[hash:8].bundle.js',
        path: resolve(__dirname, 'dist')
    },
    // dev环境下开启 source-map可以展示我们代码的错误位置
    // devtool: 'cheap-module-eval-source-map',
    // loader转换
    module: {
        rules: [
            // {test:/\.css$/, use: ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})},
            {test:/\.css$/, use: [{loader:'style-loader'},{loader:'css-loader'}], exclude: /node_modules/},
            {test: /\.(js|jsx|ts|tsx)$/,use:'babel-loader', exclude: /node_modules/},
            {test:/\.(png|jpg|gif)$/, loader: "url-loader", options:{limit:8*1024,esModule:false} },
            // {test:/\.(png|jpg|gif)$/, loader: "file-loader", options: {name:'[hash:10].[ext]',outputPath:resolve(__dirname,'/images')}},
            {test: /\.html$/, loader: 'html-loader'}
        ]
    },
    // mode:'production'
    // mode:'development'
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: "public/index.html"}),
        // 模块热更新
        new webpack.HotModuleReplacementPlugin(),
        // 每次构建前清理dist目录
        new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
        // 剥离css文件，单独打包
        // new ExtractTextPlugin('style.css'),
    ]
}
