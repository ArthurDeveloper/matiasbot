const Discord = require('discord.js');

const matias = {
	
	prefixes: ["-matias", "!"],

	commands: {

		ola: require('./commands/ola'),

		temp: require('./commands/temp'),

		meme: require('./commands/meme'),

		lyrc: require('./commands/lyrcs'),
	
		// help: require('./commands/help')
	}
};

module.exports = matias;
