const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env','react']
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{ loader: 'style-loader'},
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => [require('autoprefixer')()]
						}
					}
				]
			},
			{
				test: /\.less$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{ loader: 'style-loader'},
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => [require('autoprefixer')()]
						}
					},
					{ loader: 'less-loader'}
				]
			},
			{
				test:/\.(png|gif|jpg|jpeg|bmp|svg)$/i,
				exclude: /(node_modules|bower_components)/,
				use: [
						{
							loader: 'url-loader',
							options: {
								limit: 5000
							}
						},
						{loader: 'image-webpack-loader'}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /(node_modules|bower_components)/,
				use: ['file-loader']
      },
			{
				test: /\.html$/,
				exclude: /(node_modules|bower_components)/,
				use:['html-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.tpl.html',
			inject: 'body'
		}),

		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),

		new webpack.optimize.UglifyJsPlugin({
			comments: false
		}),

		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('prod')
		})
	]

}
