const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './app/index',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2017'],
						plugins: ['transform-es2015-modules-commonjs']
					}
				}
			}
		]
	},
	externals: [nodeExternals()]
};
