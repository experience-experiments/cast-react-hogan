/* eslint-disable */

var path = require('path'),
	processCwd = process.cwd(),
	clientPath = path.resolve(processCwd, 'client'),
	serverPath = path.resolve(processCwd, 'server'),
	configPath = path.resolve(serverPath, 'src/config');

module.exports =  {
	jshint: {
		all: [
			path.resolve(clientPath, 'app/**/*.js'),
			path.resolve(clientPath, 'src/app.js'),
			path.resolve(clientPath, 'lib/**/*.js')
		]
	},
	webpack: {
		run: require(path.resolve(configPath, 'webpack'))
	}
};