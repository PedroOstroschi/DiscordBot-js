module.exports = {
	name: 'args-info',
	description: 'Args-info!',
	execute(message) {
        if(!args.length){
            return message.reply('O que que tu disse?');
        }
        message.channel.send(`Nome do comando: ${command} \n Argumentos: ${args}`);
	},
};