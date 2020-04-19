const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '../build')));

const backendURL = 'https://corona.lmao.ninja/v2/countries?sort=cases';

const options = {
  target: backendURL, // target host
  pathRewrite: {
    '^/api': ''
  },
  changeOrigin: true
};

console.log(backendURL);

const customProxy = createProxyMiddleware(options);

app.use('/api', customProxy);

app.get('/*', function (request, response, next) {
  response.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen({ port }, () =>
  console.log(`🚀  🚀  🚀  🚀 Server ready at http://localhost:${port} `)
);
