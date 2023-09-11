module.exports = {
    // 解析器选项
    parserOptions: {
      ecmaVersion: 6, //支持的es语法版本
      sourceType: 'module', // es模块化
      ecmaFeatures: { // 支持的其他特性
        jsx: true, // 如果是react项目打开这个
      }
    },
    // eslint.bootcss.com/docs/rules/
    rules: {
      // key: value
      /**
       * key: 规则名
       * value: 规则的控制
       *  off/0 关闭该规则
       *  warn/1 警告级别
       *  error/2 错误级别
       */
      'no-var': 2,
      'no-unused-vars': 0
    },
    // 继承规则，比如: eslint 官方推荐规则
    extends: ['eslint:recommended'],
    env: {
      node: true, // node的全局内置api变量可用
      browser: true, // bom模型的内置api变量可用
      es6: true // es6 新特性，比如：promise
    }
  }