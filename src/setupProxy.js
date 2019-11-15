const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://afternoon-hollows-13666.herokuapp.com/sk',
      changeOrigin: true,
    })
  );
};
