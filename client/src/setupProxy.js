const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
 app.use(
  createProxyMiddleware('/api/contact', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/newsletter', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/session', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/users', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/checkout', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/checkout/:userId', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/confirmation', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/products', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/products/:id', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/message', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/message/:userId', {
   target: 'http://[::1]:5000/',
  }),
 )
 app.use(
  createProxyMiddleware('/api/user-review/:productID', {
   target: 'http://[::1]:5000/',
  }),
 )
}
