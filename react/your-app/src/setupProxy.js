/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// 这一块是啥来 我忘了 如果复习到重点看一看
const { createProxyMiddleware } = require('http-proxy-middleware');
// 每次修改完需要重启服务器
module.exports = function(app) {
  app.use(
    '/ajax',  // /api/list /api/detail /api/center /api/cart  请求路径
    createProxyMiddleware({
      target: 'https://i.maoyan.com',//目标;会加上请求路径，进行请求
      changeOrigin: true
    })
  );

  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://localhost:3000',//目标;会加上请求路径，进行请求
      changeOrigin: true
    })
  );

//   app.use(
//     '/ajax2',  // /api/list /api/detail /api/center /api/cart
//     createProxyMiddleware({
//       target: 'https://i2.maoyan.com',
//       changeOrigin: true
//     })
//   );

//   app.use(
//     '/ajax3',  // /api/list /api/detail /api/center /api/cart
//     createProxyMiddleware({
//       target: 'https://i3.maoyan.com',
//       changeOrigin: true
//     })
//   );
};

//https://i.maoyan.com/
// ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=B0CC71C096A911EBA609453370FBFE2C59BC3AF5D61A4344A1A7C05FABCF4D21&optimus_risk_level=71&optimus_code=10