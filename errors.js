const Discord = require('discord.js');

// Serve para lançar mensagens de erro para o usuário

class ErrorMessage {

	_msg = '';

	name = '';

	info = '';

	constructor(name="", info="") {

		this.setName(name);
		this.setInfo(info);

		this._msg = new Discord.MessageEmbed()
					.setColor('#ff0000')
					.setTitle(this.name)
					.setDescription(this.info);
	}

	setName(name) {
		this.name = name;
	}

	setInfo(info) {
		this.info = info;
	}

	getMsg() {
		return this._msg;
	}

}

module.exports = ErrorMessage;