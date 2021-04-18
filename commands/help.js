const Discord = require('discord.js');



const help = {

		 action: (command) => {

			const msg = new Discord.MessageEmbed()
							.setColor('#0349fc');

			if (command.content == "!help") {
				msg.setTitle("Comandos do Matias");

				msg.setDescription("------------------------------------------");

				msg.addFields(  
					{
						name: "!help",
						description: "Lista os comandos do Matias",
					},
					{
						name: "!meme",
						description: "Manda um meme"
					},
					{
						name: "!ola",
						description: "O Matias te responde olá"
					},
					{
						name: "!temp",
						description: "Diz a temperatura de uma cidade do Brasil"
					}

				);

				command.reply(msg);
			}
		},

		name: "!help, !ajuda",

		description: "Um comando que te dá uma lista dos comandos usáveis do Matias"
}

module.exports = help;