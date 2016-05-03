module.exports = {
	entry: "./main.js",

	output: {
		path: __dirname,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel?presets[]=react,presets[]=es2015'],
				exclude: /node_modules/
			},

			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: "/src/style"
			}
		],
	}
}