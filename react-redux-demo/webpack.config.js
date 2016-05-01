var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
		{
	        test: /\.js$/,
	        loaders: [ 'babel' ],
	        exclude: /node_modules/,
	        include: __dirname
		},{
	        test: /\.css?$/,
	        loaders: [ 'style', 'raw' ],
	        include: __dirname
      }]
	},
    babel: {
        presets: ['es2015', 'react']
    },
    resolve:{
    	root: [__dirname + '/node_modules'],
        extentions:['','js']//当requrie的模块找不到时，添加这些后缀
    },
	plugins: [
	  new webpack.optimize.OccurenceOrderPlugin(),
	  new webpack.HotModuleReplacementPlugin()
	]
}