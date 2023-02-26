const { createProxyMiddleware } = require('http-proxy-middleware');

//https://gutendex.com/books/?search=Pride%20and%20Prejudice&format=json
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://gutenberg.org',
      changeOrigin: true,
    })
  );
};
