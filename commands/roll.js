const {prefix} = require('../config.json');

module.exports = {
	name: 'roll',
	description: 'Roll!',
	execute(message, command) {
          // variaveis 
          const dado = message.content.slice(6).trim().split('d');
          const quantidade = parseInt(dado[0]);
          const max = Math.floor(parseInt(dado[1]) + 1);
          const min = Math.ceil(1);
          let i = 0;
          let rand = 0;
          let valores = [];
          let soma = 0;
          let resposta_valores = [] ;  

          //verifica se e numero
          if(isNaN(quantidade)){
             return message.reply(`nao eh um numero. ${dado[0]}`);
          }
          //calcula aleatorio
          for(i ; i < quantidade; i++){
              rand = Math.floor(Math.random() * (max - min) + min);
              valores.push(rand);
              soma = soma + rand;

              
              if( i == 0){
                  resposta_valores = `${valores[i]}` ;
              }else{
                   resposta_valores = resposta_valores  +  `+ ${valores[i]}`;
              }
          }

          //printa 
          message.channel.send(` resultado: ${soma} \n soma: ${resposta_valores}`);

	    },
};