const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const stocks = require('./api/Stock.js');

const port = 3000;
const app = express();

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('/api/stocks/*', function(req, res){
    res.writeHead(200, {"Content-Type": "application/json"});
    stocks.fetchPrice(req).then(result => {
        res.write(result);
        res.end();
    });
});

app.get('*', function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
  res.end();
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Server running on port %s. Open http://0.0.0.0:%s/ in your browser.', port, port);
});
