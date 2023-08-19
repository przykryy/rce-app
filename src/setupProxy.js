const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
  '/app', 
  createProxyMiddleware({
        target: 'http://api-rce.azurewebsites.net/estimate',
        changeOrigin: true
  }));
};
