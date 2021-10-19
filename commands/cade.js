module.exports = {
	name: 'cade',
	description: 'Cade!',
	execute(message) {
        if(!message.mentions.users.size) {
            return message.reply('Eu ? \n Eu to aqui irmao');
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`<@${taggedUser.id}> cade vc ?`);
	},
};