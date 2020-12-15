# 脚手架

## 使用依赖说明
- webpack5 打包工具
- react react-dom @types/react @types/react-dom 
- webpack-dev-serve 热更新
- babel-loader @babel/preset-env @babel/preset-typescript @babel/preset-react 编译
- css-loader style-loader 对css样式转化
- speed-measure-webpack-plugin 进行速度分析
- file-loader url-loader 对图片进行处理，url-loader 转换成base64，
## 遇到问题
- webpack-dev-server启动报错Error: Cannot find module ‘webpack-cli/bin/config-yargs‘
    解决方法：由于webpack-cli版本4，删除了webpack-cli/bin/config-yargs文件，安装webpack-cli版本3的依赖解决
- require is not defined 报错     因为在webpack里面配置了target："node"导致的
- 引入项目不以文件后缀tsx结尾提示错误
- CleanWebpackPlugin is not a constructor 因为新版本结构出来CleanWebpackPlugin,与之前使用不一样
    
