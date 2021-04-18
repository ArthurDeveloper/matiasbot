'use strict';

const Discord = require('discord.js');

const ErrorMessage = require('../errors');

const axios = require('axios');

const temp = {
		action: (command) => {

			if (command.content.indexOf("!temp") != -1) {

				command.content = command.content.replace('!temp ', '');
				const key = '6112da02';

				const request = async (key, catchCb) => {

					let sucess = false; 

					await axios.get('https://api.hgbrasil.com/weather?key='+key+'&city_name='+command.content)
						.then((res) => {
							let msg = new Discord.MessageEmbed()
											.setTitle("Temperatura de "+command.content)
											.setDescription(`${res.data.results.temp}°C`);

							command.reply(msg);

						}).catch((res) => { catchCb() });

					return sucess;

				};

				request(key, () => {console.log("erro")});
				
			}
				 
		},

		name: "!temp",

		description: "Retorna a temperatura e o clima atual da cidade que você quiser"
}

module.exports = temp;