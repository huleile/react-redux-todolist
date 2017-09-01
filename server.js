/**
 * @Author: hully
 * @Date:   2017-08-31 12:18:56
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-08-31 17:03:07
 */

"use strict";
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let CONFIG = require('./webpack.config');

const port = 7080;
const host = 'localhost';

new WebpackDevServer(webpack(CONFIG), {
  publicPath: CONFIG.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    timings: false,
    hash: false,
    chunks: false,
    chunkModules: false
  }
}).listen(port, host, (err) => {
  if(err) console.log(err);
  console.log(`Listening at ${host}:${port}`);
});
