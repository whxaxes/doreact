const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const http = require("http");
const url = require('url');

const port = 9090;
const webpackPort = port + 1;

const config = require('./webpack.config.js');

Object.keys(config.entry).forEach(key => {
  config.entry[key].unshift(
    "webpack/hot/only-dev-server",
    `webpack-dev-server/client?http://localhost:${webpackPort}`
  )
});

config.output.publicPath = `http://localhost:${webpackPort}/static/`;

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});

http.createServer(function(req, res) {
  const aim = url.parse(req.url).pathname.split('/').pop();

  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8'
  });

  res.end(`
		<!doctype html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <title>Document</title>
		</head>
		<body>
		<div id="app"></div>
		<script src="http://localhost:${webpackPort}/static/${aim}.bundle.js"></script>
		</body>
		</html>
	`);
}).listen(port);

server.listen(webpackPort, 'localhost');

console.log(`server listening in ${port}`);