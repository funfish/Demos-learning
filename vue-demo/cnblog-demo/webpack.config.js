'use strict'

var path = require('path');
var webpack = require("webpack");
var vue = require("vue-loader");



var plugins = [

        new webpack.ProvidePlugin({
          $: 'webpack-zepto'
        })
    ];
var entry = ['./srcs/main'],
    cdnPrefix = "",
    buildPath = "/dist/",
    publishPath = cdnPrefix + buildPath;

module.exports = {
debug: true,
    entry: entry,
    output: {
        path: __dirname +publishPath ,
        publicPath: publishPath,
        filename: 'build.js',
        chunkFilename:"[id].build.js?[chunkhash]"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader!cssnext-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=appli`tion/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
    },
     plugins: plugins,
}