const path = require('path') // 导入node.js 中专门操作路径模块
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//使用node.js 中的导出语法，向外导出 一个 webpack配置对象
module.exports = {

  // entry:'指定要处理哪个文件
  // entry: path.join(__dirname, './src/index.js'),
  // entry: path.join(__dirname, './src/main.js'),
  entry: './src/main.js',
  // 制定生成文件要存放到哪里
  output: {
    // 所有文件存放的目录
    // path: path.join(__dirname, 'dist'),
    path: path.join(__dirname, '../dist_public'), // 绝对路径
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
          MiniCssExtractPlugin.loader, // 提取CSS为单独的文件
          // "style-loader", // 将js中css通过创建style标签添加到html文件中生效
          "css-loader",  // 将css资源编译commonjs的模块js中
          // 给loader写配置项需要写成对象形式
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env', // 可以解决大多数样式兼容性问题
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env', // 可以解决大多数样式兼容性问题
                ]
              }
            }
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env', // 可以解决大多数样式兼容性问题
                ]
              }
            }
          },
          'less-loader',// 将less编译成css
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          MiniCssExtractPlugin.loader,
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env', // 可以解决大多数样式兼容性问题
                ]
              }
            }
          },
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
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 设置哪些目录不需要扫描
        use: [{
          loader: 'babel-loader?cacheDirectory', //开启缓存，可以设置缓存目录
        },
        ]
      },
    ]
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      context: path.join(__dirname, '../src') // 配置eslint检测范围
    }),
    // 使用
    new HtmlWebpackPlugin({
      /**
       *  模板文件目录（相对路径也可以）:以public/index.html文件创建新的html文件
       * 1.结构与之前一致，2.自动引入打包资源
       */
      template: path.join(__dirname, '../public/index.html'),
      filename: 'webpack.html', // 生成的html文件的名字
      inject: 'body' // webpack打包生成的js文件插入的位置（默认插入head标签）
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.css"
    }),
  ],
  // mode: 'development', // 开发模式
  mode: "production" // 生产环境
}
