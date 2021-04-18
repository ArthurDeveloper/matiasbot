const Discord = require('discord.js');
const bot = new Discord.Client();

const Matias = require('./matias');

const emojis = require('./emojis');

const fs = require('fs');

const key = fs.readFileSync('chave.txt', 'utf8');

bot.login(key);

bot.on('ready', () => {
	console.log("bot tá on B)");
});

bot.on('message', async (msg) => {

	if (msg.content.startsWith('-matias')) {
		msg.content = msg.content.replace("-matias ", '');

		if (msg.content.endsWith('?')) {

			if (msg.content.toLowerCase().indexOf('tu é') != -1) {
				msg.reply('Tu que é, tu que deixa '+ emojis.sunglasses);
				return;
			} else {
				let responses = ['Acho que sim', 'Acho que não', 'Sim', 'Não', 'Não sei', 'Talvez'];

				msg.reply(responses[Math.floor(Math.random() * responses.length)]);
			}
			
		}
	} 

	for (let command of Object.values(Matias.commands)) {
		try { await command.action(msg); } catch (Error) { console.log('erro')}; 
	}

	
})