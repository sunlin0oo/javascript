import { defineConfig } from 'umi';
// 核心==>开启约定式路由还是配置使路由==>反向代理==>dva继承等等均在这里进行
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式==>注释掉之后便是符合Umi规则的约定式的路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],

  fastRefresh: {},

  // 修改路由模式
  // history: {
  //   // type:'browser'//默认情况==>路由不带#
  //   // type: 'hash'//带#
  // }

  // 反向代理
  proxy: {
    "/api": {
      target: "https://i.maoyan.com",
      changeOrigin: true
    }
  },
  // 关闭umi中自带的antd格式
  antd: {
    mobile: false
  }
});
