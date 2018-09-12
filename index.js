﻿const Discord = require('discord.js');
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
        console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
        var integ = 0;
            message.channel.send(`Команды: \n ::me <действие> - действие от первого лица \n ::try <действие> - попытать удачу \n ::do <действие> - действие от третьего лица \n ::todo <действие> | <выражение> - сказать что-то сделавши`);

    }
if(message.content.slice(0,5) == '::me ') {
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
    var ttl = message.content.replace('::me ','')
        message.channel.send(`_${message.author.username}_ **${ttl}**`);
    return false;
}
if(message.content.slice(0,6) == '::try ') {
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
    var ttl = message.content.replace('::try ','')
    var rand = getRandomInt(0,1)
    var luck = '';
    if(rand == 0){
        luck = 'Неудачно'
    }
    else {
        luck = 'Удачно'
    }
        message.channel.send(`_${message.author.username}_ **${ttl}** _(${luck})_`);
    return false;
}
if(message.content.slice(0,5) == '::do ') {
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
    var ttl = message.content.replace('::do ','')
        message.channel.send(`**${ttl}** ((_${message.author.username}_))`);
    return false;
}
if(message.content.slice(0,7) == '::todo ') {
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
    var ttl = message.content.replace('::todo ','')
    var ttl2 = message.content.replace('::todo ','')
    for (var index = 0; index < ttl2.length; index++) {
        if(ttl2.charAt(index) == '*'){
            ttl2 = ttl2.replace(ttl2.slice(index - 1,ttl2.length),'')
        }
    }
    for (var index = 0; index < ttl.length; index++) {
        if(ttl.charAt(index) == '*'){
            ttl = ttl.replace(ttl.slice(0,index + 1),'')
        }
    }
    message.channel.send(`**"${ttl}"**, - сказал(а) _${message.author.username}_, **${ttl2}**`);
    return false;
}
if(message.content.slice(0,12) == '::debughelp'){
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
        console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
        message.channel.send(`Команды отладки: \n ::say <выражение> - сказать от лица бота.`);
}
if(message.content.slice(0,6) == '::say ') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
    var ttl = message.content.replace('::say ','')
        message.channel.send(`${ttl}`);
    return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var version = 'Версия InDev v1.22 - discord.js // JavaScript';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.content.slice(0,6) == '::ver') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
    message.channel.send(`${version}`);
    return false;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///    Roll Thread
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var list = {};
var found = '';
if(message.content.replace("::roll")){
for (var index = 0; index < list.length; index++) {
    if(list[index].includes(message.author.id) == true){
        found = list[index]
        break;
    }
}
console.log(list[index] && ' ' && index)
}
})