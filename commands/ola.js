const Discord = require('discord.js');

const ola = {
		action: (command) => {
			if (command.content == "!ola" || command.content == "!oi") {
				command.reply("Olá!");
			}
		},

		name: "!ola, !oi",

		description: "Um comando que faz o bot dizer oi para você" 
} 

module.exports = ola;