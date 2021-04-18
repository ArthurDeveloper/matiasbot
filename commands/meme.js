const Discord = require('discord.js');

const meme = {

	action: (command) => {

		if (command.content == "!meme") {

			const memes = ['iguana-artica.jpg', 'mensagem.jpg', 'pai-ta-on.jpg', 'pc-casas-bahia.jpg', 
							'atendente-casas-bahia.jpg'];

			const msg = new Discord.MessageEmbed();

			msg.attachFiles(['./memes/' + memes[Math.floor(Math.random() * memes.length)]]);

			msg.setImage('attachment://mensagem.jpg');

			command.reply(msg);
		}

	},

	name: "!meme",

	description: "Manda um meme"

}

module.exports = meme;

