'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8989', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());


//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy: {
    "*": "http://localhost:8989"
  	},
});
app.listen(8989);