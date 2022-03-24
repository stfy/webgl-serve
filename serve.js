const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

console.log('[Serve static at path]' , path.join(__dirname, '/', 'webgl'))

app.use(express.static(path.join(__dirname, '/', 'webgl')))

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://gravity-dev.easychain.dev/',
    changeOrigin: true,
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log('[Serve static started] port=', port)
})