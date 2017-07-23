var proxyMiddleware = require('http-proxy-middleware');

var proxy = proxyMiddleware('/api', {target: 'http://localhost:8080'});

module.exports = {
  'server': {
      'baseDir': 'dist',
      'middleware': [proxy],
      'routes': {
        '/node_modules': 'node_modules'
      }
  }
};