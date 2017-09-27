const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '';

bot.on('ready', () => {
	console.log('I am ready!');
	bot.channels.forEach((value, key , map) => {
		if(value.type ==='text' && value.name ==='general'){
			generalChannel = value;
		}
	});
	generalChannel.sendMessage('ボットがオンラインになりました');
});

bot.on('message', message => {
  // if the message is "ping",
  if (message.content === 'ping') {
    // send "pong" to the same channel.
    message.channel.sendMessage('pong');
  }
});

bot.login(token);