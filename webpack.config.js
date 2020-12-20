const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  // webpack5可以省略入口和出口，会自动配置
  // 配置入口文件
  entry: {
    app: './src/index.tsx',
    b: './src/app.tsx',
  },
  // 打包📦之后的出口
  output: {
    // 如果不加哈希值，浏览器会有缓存，可能你部署了，但是用户看到的还是老页面
    // 8是hash的长度，如果不设置，webpack会设置默认值为20。
    filename: 'js/[chunkhash:10].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  // 开启webpack5自带的缓存
  cache: {
    type: 'filesystem',
    version: 'youVersion',
  },

  optimization: {
    // 代码分割
    splitChunks: {
      chunks: 'initial',
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          minSize: 200 * 1024,
          maxSize: 0,
        },
        default: {
          priority: -10,
          minSize: 200 * 1024,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    // tree shaking
    sideEffects: false,
    // minimizer: [new ParallelUglifyPlugin({
    //   uglifyJS: {
    //     output: { comments: false },
    //     compress: {
    //       waring: false,
    //       drop_console: true,
    //       reduce_vars: true,
    //     },
    //   },
    // })],
    minimizer: [
      new TerserPlugin({
        // 开启缓存
        // cache: true,
        // 开启多线程打包
        parallel: true,
      }),
    ],
  },

  // 配置别名
  resolve: {
    // 导出语句不带后缀时查找
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    // 别名配置
    alias: {
      '@': resolve(__dirname, 'src'),
      Component: resolve(__dirname, 'src/component'),
    },
  },

  // loader转换
  module: {
    rules: [
      {
        // 剥离css代码，配置了MinCssExtractPlugin.loader，就不需要style-loader
        test: /\.css$/,
        use: [{ loader: MinCssExtractPlugin.loader }, { loader: 'css-loader' }],
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: { limit: 8 * 1024, esModule: false },
      },
      // {test:/\.(png|jpg|gif)$/, loader: "file-loader",
      // options: {name:'[hash:10].[ext]',outputPath:resolve(__dirname,'/images')}},
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    // 模块热更新
    new webpack.HotModuleReplacementPlugin(),
    // 每次构建前清理dist目录
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // 剥离css代码
    new MinCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}
