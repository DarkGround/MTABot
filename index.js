const Discord = require('discord.js');
const Bot = new Discord.Client();
const { Client } = require('discord.js');
const { RichEmbed } = require('discord.js');
const { Message } = require('discord.js');
const { User } = require('discord.js');
const { Presence } = require('discord.js');
const { Guild } = require('discord.js');
Bot.login(process.env.token);
console.log('MTAshnik v1.0 Launched.')
console.log('FULL - CONTROL MODE')
console.log('::help for a help in discord.')
Bot.on('message',(message)=>{
    if(message.content == "::help"){
        console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username}) => ${message.content}`)
        message.channel.send(`[Префикс - ::] Команды: \n me <действие> - действие от первого лица \n try <действие> - попытать удачу \n do <действие> - действие от третьего лица \n dot <действие> | <выражение> - сделать что-то сказавши`);
    }
if(message.content.slice(0,5) == '::me ') {
    console.log(`[DISCORD] (${message.author.username}) => ${message.content}`)
    var ttl = message.content.replace('::me ','')
    var integ = 0;
    do {
    integ = 1
    message.channel.send(`_${message.author.username}_ **${ttl}**`);
    } while(integ = 0)
    
    return false;
}
if(message.content.includes('::try ',0) == true) {
    console.log(`[DISCORD] ${message.author.username}  ${message.content}`)
    var ttl = message.content.replace('::try ','')
    var integ = 0;
    var rand = getRandomInt(0,1)
    var luck = '';
    if(rand == 0){
        luck = 'Неудачно'
    }
    else {
        luck = 'Удачно'
    }
    do {
    integ = 1
    message.channel.send(`_${message.author.username}_ **${ttl}** _(${luck})_`);
    } while(integ = 0)
    return false;
}
if(message.content.includes('::do ',0) == true) {
    console.log(`[DISCORD] ${message.author.username}  ${message.content}`)
    var ttl = message.content.replace('::do ','')
    var integ = 0;
    integ = 1
    message.channel.send(`**${ttl}** ((_${message.author.username}_))`);
    return false;
}
if(message.content.includes('::dot ',0) == true) {
    console.log(`[DISCORD] ${message.author.username}  ${message.content}`)
    var ttl = message.content.replace('::dot ','')
    var ttl2 = message.content.replace('::dot ','')
    for (var index = 0; index < ttl2.length; index++) {
        if(ttl2.charAt(index) == '|'){
            ttl2 = ttl2.replace(ttl2.slice(index - 1,ttl2.length),'')
        }
    }
    for (var index = 0; index < ttl.length; index++) {
        if(ttl.charAt(index) == '|'){
            ttl = ttl.replace(ttl.slice(0,index + 1),'')
        }
    }
    var integ = 0;
    integ = 1
    message.channel.send(`_${message.author.username}_ **${ttl2}** _,сказал(а):_ **${ttl}**`);
    return false;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
used = 0;
})