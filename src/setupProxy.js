const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const target = process.env.REACT_APP_BACKEND_HOST;
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      pathRewrite: {
        '^/api': '/'
      },
      changeOrigin: true
    })
  );
};
