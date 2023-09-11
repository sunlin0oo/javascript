const path = require('path') // 导入node.js 中专门操作路径模块
const ESLintPlugin = require('eslint-webpack-plugin');
//使用node.js 中的导出语法，向外导出 一个 webpack配置对象
module.exports = {

  // entry:'指定要处理哪个文件
  // entry: path.join(__dirname, './src/index.js'),
  entry: path.join(__dirname, './src/main.js'),
  // 制定生成文件要存放到哪里
  output: {
    // 所有文件存放的目录
    // path: path.join(__dirname, 'dist'),
    path: path.join(__dirname, 'dist_public'),
    // 生成的文件名
    filename: 'js/dist.js',
    /** 
     * 自动清空上次打包内容
     * 原理：在打包之前将path清空，再进行打包
    */
    clean: true
  },
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/i,  //只检测.css文件
        // 执行顺序，从右往左(从下到上)
        use: [
          "style-loader", // 将js中css通过创建style标签添加到html文件中生效
          "css-loader"  // 将css资源编译commonjs的模块js中
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',// 将less编译成css
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/,
        loader: "stylus-loader", // 将 Stylus 文件编译为 CSS
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            /**
             * 小于10kb会转base64
             * 优点：减少请求数量 缺:体积会更大
             */
            maxSize: 10 * 1024 // 4kb
          }
        },
        // 指定打包图片输出目录 
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      }
    ]
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      context: path.join(__dirname, 'src') // 配置eslint检测范围
    })
  ],
  mode: 'development', // 开发模式
  // mode:production // 生产环境
  devServer: {
    static: './dist', //设置Http服务器的文件根目录
    // port:8088, //端口
    // open:true, //是否打开浏览器
    // proxy: { //配置代理
    //   "/api": {
    //         target: "http://localhost:3000",
    //         pathRewrite: {"^/api" : ""}
    //   }
    // }
  },
}