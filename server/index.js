var path = require('path');
var express = require('express');
var http = require('http');
var serveStatic = require('serve-static');
var config = require('./config');

module.exports = function (options) {

  // load bundle information from stats
  var stats = options.devServer ? require("../build/stats-dev.json") : require("../build/stats.json");

  var app = express();

  // serve the static assets
  app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
    maxAge: "200d" // We can cache them as they include hashes
  }));
  app.use("/", express.static(path.join(__dirname, "..", "public"), {}));

  app.use(serveStatic(config.publicPath, {'index': ['index.html']}));

  var server = http.createServer(app);

  server.listen(config.port, function () {
    console.log('listening on http://localhost:' + config.port);
  });
};
