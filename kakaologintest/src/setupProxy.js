const proxy = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:8888",
      changeOrigin: true,
    })
  );
};
