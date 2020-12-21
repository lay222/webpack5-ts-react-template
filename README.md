# 脚手架

## 使用依赖说明
- webpack5 打包工具
- react react-dom react-router @types/react @types/react-dom 
- webpack-dev-serve 模块热更新
- babel-loader @babel/preset-env @babel/preset-typescript @babel/preset-react 编译
- css-loader style-loader 对css样式转化
- file-loader url-loader 对图片进行处理，url-loader 转换成base64，
- webpack-merge webpack配置，提取webpack配置公共部分，测试环境生产环境剥离
- mini-css-extract-plugin 剥离css代码
- optimize-css-assets-webpack-plugin 压缩css代码  
- eslint 代码校验
- clean-webpack-plugin 清除上次打包代码
- html-webpack-plugin 自动将打包的js代码引入html中
- typescript 
- antd UI框架

## 优化
- tree shaking  sidEffects
- webpack-bundle-analyzer bundle大小分析

## 遇到问题
- webpack-dev-server启动报错Error: Cannot find module ‘webpack-cli/bin/config-yargs‘
    解决方法：由于webpack-cli版本4，删除了webpack-cli/bin/config-yargs文件，安装webpack-cli版本3的依赖解决
- require is not defined 报错     因为在webpack里面配置了target："node"导致的
- 引入项目不以文件后缀tsx结尾提示错误  在tsconfig.json里面配置path，在webpack配置resolver。extensions里面配置后缀文件类型
- CleanWebpackPlugin is not a constructor 因为新版本结构出来CleanWebpackPlugin,与之前使用不一样
- 图片无法显示  使用import导入引用
- 热更新，测试环境路由刷新报错，在devServe里面配置historyApiFallback: true 

## babel问题
- babel.config.json 和 .babelrc.json的区别
- 

    
