const webpack = require('webpack')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClearWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[hash:4].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: 'babel-loader'
			},
			{				// 这一项对HtmlWebpackPlugin没有影响
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader'
				]
			},
			// {
			// 	test: /\.(png|jpe?g|gif|svg)$/,
			// 	use: 'url-loader'
			// },
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/img/[name].[ext]?[hash:4]'
						}
					},
					// 用来压缩图片
					'image-webpack-loader'
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
				use: 'url-loader'
			},
			{
				test: /\.(woff?2|eot|ttf|otf)$/,
				use:'url-loader'
			}
		]
	},
	devServer: {
		port: 8082,
		historyApiFallback: true,
    noInfo: true,
    overlay: true,
    open: true
	},
	plugins: [
		// new ClearWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.optimize.UglifyJsPlugin({
      sourceMap:true,
      compress:{
          warnings:false
      }
		})
	]
}