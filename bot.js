const fs = require(`fs`);                         //modulo do node 
const Discord = require('discord.js');            //pegar os arquivos do discord
const {prefix, token} = require('./config.json'); // puxa o prefixo e o token  das configuracoes

const client = new Discord.Client();           //cria um cliente
client.commands = new Discord.Collection();   //cria a colecao onde fico os comandos

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));        //filtra os js

//setta os comandos no arquivo commando files
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//ativa
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('Eaaaiii');
}

client.on('message', message=>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
    }
    

})


client.login(token);