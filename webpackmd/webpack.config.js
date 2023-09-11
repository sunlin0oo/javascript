const path = require('path') // 导入node.js 中专门操作路径模块
 
//使用node.js 中的导出语法，向外导出 一个 webpack配置对象
module.exports = {
 
    // entry:'指定要处理哪个文件
    // entry: path.join(__dirname, './src/index.js'),
    entry: path.join(__dirname, './src/main.js'),
    // 制定生成文件要存放到哪里
    output: {
        // 存放的目录
        // path: path.join(__dirname, 'dist'),
        path: path.join(__dirname, 'dist_public'),
        // 生成的文件名
        filename: 'dist.js'
    },
     module:{
    rules: [
      // loader的配置
      {
        test: /\.css$/i,  //只检测.css文件
        // 执行顺序，从右往左(从下到上)
        use: [
          "style-loader", // 将js中css通过创建style标签添加到html文件中生效
          "css-loader"  // 将css资源编译commonjs的模块js中
        ],
      }
    ]
  },
  // 插件
  plugins: [],
  mode: 'development' , // 开发模式
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