var webpack = require('webpack')
var path = require('path')


module.exports = {
		devtool: 'inline-source-map',
		entry: [
				//'webpack-dev-server/client?http://177.0.0.1:8080/',
				'./todosrc'
		],
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		resolve: {
			modulesDirectories: ['node_modules', 'todosrc'],
			extensions: ['', '.js']
		},
		devServer:{
			inline: true,
			//hot: true,
			port: 8080
		},
		module:{
				loaders: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel',
						query: {
							presets: ['es2015', 'react']
						}
					},
					{
						test:/\.css$/,
						loader: 'style-loader!css-loader'
					}
				]
		},
}
