const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// multiple extract instances
const extractCSS = new ExtractTextPlugin('styles/app.css');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/app/index.js'
	],
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					"presets": ["react", "es2015", "stage-1"]
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'url-loader?limit=10000',
			},
			{
				test: /\.css$/,
				loader: extractCSS.extract("style-loader", "css-loader!sass-loader")
			},
			{
				test: /\.scss$/,
				loader: extractCSS.extract("style-loader", "css-loader!sass-loader")
			},
		]
	},
	node: {
		fs: 'empty',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			api: path.resolve(__dirname, 'src/app/api'),
			actions: path.resolve(__dirname, 'src/app/actions'),
			components: path.resolve(__dirname, 'src/app/components'),
			containers: path.resolve(__dirname, 'src/app/containers'),
			assets: path.resolve(__dirname, 'src/assets'),
			styles: path.resolve(__dirname, 'src/styles'),
      themes: path.resolve(__dirname, 'themes'),
		}
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: './build'
	},
	plugins: [
		new CleanWebpackPlugin('build'),
		new HtmlWebpackPlugin({
			template: 'src/template.hbs',
			inject: 'body',
		}),
		extractCSS,
		new CopyWebpackPlugin([
			{from: 'src/assets', to: 'assets'}
		])
	]
};



