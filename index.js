const Discord = require('discord.js');
const Bot = new Discord.Client();
const Client = require('discord.js');
const RichEmbed = require('discord.js');
const Message = require('discord.js');
const User = require('discord.js');
const ClientID = '487965836041256980'
const Guild = require('discord.js');
///
Data = new Date();
var Year = Data.getFullYear();
var Month = Data.getMonth();
var Day = Data.getDate();
var Hour = Data.getHours();
var Minutes = Data.getMinutes();
var Seconds = Data.getSeconds();
switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}
var currdate = Day + " " + fMonth + " " + Year + " :: " + Data.toLocaleTimeString()
///
Bot.login(process.env.token);
console.log('=======================================================================================================================')
console.log('[CONSOLE] "ха ржака © Максим 2018"')
console.log('[CONSOLE] "сас © кто-то 2018"')
console.log("[CONSOLE] ::help for help in discord.")
console.log('=======================================================================================================================')
var reportchannel = ["285065576244838400:497738321506729994"];
var additionalowner;
Bot.on('message',(message)=>{
    if(message.content == "::help"){
        console.log(`[DISCORD] ({${message.guild.name} / {message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var integ = 0;
            message.channel.send(`Команды: \n ::me <действие> - действие от первого лица \n ::try <действие> - попытать удачу \n ::do <действие> - действие от третьего лица \n ::todo <выражение>*<действие> - сказать что-то сделавши \n ::s <выражение> - кричать \n ::w <выражение> - шептать \n ::report <кто> <за что> - Пожаловаться на участника администраторам \n cosmocat - этот придурок меня написал`);

    }
if(message.content.slice(0,5) == '::me ') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::me ','')
        message.channel.send(`_${message.author.username}_ **${ttl}**`);
    return false;
}
if(message.content.slice(0,6) == '::try ') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::try ','')
    var rand = getRandomInt(0,1)
    var luck = '';
    if(rand == 0){
        luck = 'Неудачно'
    }
    else {
        luck = 'Удачно'
    }
        message.channel.send(`_${message.author.username}_  **${ttl}** _(${luck})_`);
    return false;
}
if(message.content.slice(0,5) == '::do ') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::do ','')
        message.channel.send(`**${ttl}** ((_${message.author.username}_))`);
    return false;
}
if(message.content.slice(0,7) == '::todo ') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::todo ','')
    var ttl2 = message.content.replace('::todo ','')
    for (var index = 0; index < ttl2.length; index++) {
        if(ttl2.charAt(index) == '*'){
            ttl2 = ttl2.replace(ttl2.slice(index,ttl2.length),'')
            break;
        }
    }
    for (var index = 0; index < ttl.length; index++) {
        if(ttl.charAt(index) == '*'){
            ttl = ttl.replace(ttl.slice(0,index + 1),'')
            break;
        }
    }
    message.channel.send(`**"${ttl2}"**, - сказал(а) _${message.author.username}_, **${ttl}**`);
    return false;
}
if(message.content.slice(0,12) == '::debughelp'){
    if(message.author.id == '297318282724114433' || message.author.id == additionalowner){
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        message.channel.send(`Команды отладки: \n ::say <выражение> - сказать от лица бота. \n ::ver - Версия \n ::rchannel - Сменить канал оповещений о репортах \n ::jsonimport - загрузить базу данных`);
    }
    else{
        message.channel.send(`Эта команда доступна только для cosmocat или модератора.`);
        return null;
    }
}
if(message.content.slice(0,6) == '::say ') {
    if(message.author.id == '297318282724114433' || message.author.id == additionalowner){
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::say ','')
        message.channel.send(`${ttl}`);
        return false;
    }
    else{
        message.channel.send(`Эта команда доступна только для cosmocat или модератора.`);
        return null;
    }
}
if(message.content.slice(0,4) == '::s ') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::s ','')
    message.channel.send(`_${message.author.username} кричит:_ **${ttl}**`);
    return false;
}
if(message.content.slice(0,4) == '::w ') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::w ','')
    message.channel.send(`_ ${message.author.username} шепчет:_ **${ttl}**`);
    return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.content.slice(0,9) == '::report '){
    if(reportchannel == null){
        let reportEmbed = new Discord.RichEmbed() 
        .setDescription(" :x: Репорт не отправлен.") 
        .setColor("#ff0000") 
        .addField("Ваша жалоба не была отправлена.",`Причина: не установлен канал репортов.\nПытался отправить ${message.author}`)
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Репорт не отправлен, канала не существует`)
        message.channel.send(reportEmbed);
    }
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var msg = message.content.replace('::report ','')
    var author = '';
    var report = '';
    switch(msg.replace(' ','') == msg){
        case true:
        report = '';
        author = msg
        var readbleauthor = author;
        author = author.replace('<@','')
        author = author.replace('>','')
        author = author.replace('!','')
        author = author.replace('&','')
        break;
        case false:
        for (var index = 0; index < msg.length; index++) {
            if(msg.charAt(index) == ' '){
                author = msg.replace(msg.slice(index,msg.length),'')
                break;
            }
        }
        for (var index = 0; index < msg.length; index++) {
            if(msg.charAt(index) == ' '){
                report = msg.replace(msg.slice(0,index + 1),'')
                break;
            }
        }
        var readbleauthor = author;
        break;
    }
    author = author.replace('<@','')
    author = author.replace('>','')
    author = author.replace('!','')
    author = author.replace('&','')
    ///
    var found = false;
    ///
    for(Count in Bot.users.array()){
        var User = Bot.users.array()[Count];
        if(User.id == author){
          found = true;
        }
    }
    if(found == true){
            var guildid = null;
            for(var i = 0; i < reportchannel.length; i++){
                if(reportchannel[i].includes(message.guild.id) == true){
                    guildid = reportchannel[i].replace(`${message.guild.id}:`,'')
                    break;
                }
            }
            if(guildid == null){
                let reportEmbed = new Discord.RichEmbed() 
                .setDescription(" :x: Репорт не отправлен.") 
                .setColor("#ff0000") 
                .addField("Ваша жалоба не была отправлена.",`Причина: не установлен канал репортов.\nПытался отправить ${message.author}`)
                console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Репорт не отправлен, канала не существует`)
                message.channel.send(reportEmbed); 
                return null;
            }
            const channel = Bot.channels.get(guildid)
            if(report == ''){
                report = '<Без причины>'
            }
            let reportEmbed = new Discord.RichEmbed() 
            .setDescription(" :heavy_check_mark: Репорт отправлен.") 
            .setColor("#ff0000") 
            .addField("Ваша жалоба была отправлена.",`Жалоба была отправлена с сообщением:\n**${report}**\nОтправил ${message.author} на ${readbleauthor} в ${currdate}`) 
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Отправлен репорт на ${readbleauthor} по причине ${report}`)
            message.channel.send(reportEmbed);
            channel.send(`=> Канал: #${message.channel.name} (${currdate})\n@here Жалоба от ${message.author} на ${readbleauthor} по причине: ${report}`);
    }
    else{
        Guild.Channel
        let reportEmbed = new Discord.RichEmbed() 
            .setDescription(" :x: Репорт не отправлен.") 
            .setColor("#ff0000") 
            .addField("Ваша жалоба не была отправлена.",`Причина: такого пользователя не существует.\nПытался отправить ${message.author}`) 
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Репорт не отправлен, пользователя не существует`)
            message.channel.send(reportEmbed);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.content.slice(0,11) == '::rchannel ') {
    if(message.author.id == '297318282724114433' || message.author.id == additionalowner){
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::rchannel ','')
        for(var el = 0;el < reportchannel.length;el++){
            if(reportchannel[el].includes(message.guild.id)){
                reportchannel[el] = `${message.guild.id}:${ttl}`
                message.channel.send(`Значение изменено.`);
                return null;
            }
        }
        reportchannel.push(`${message.guild.id}:${ttl}`)
        message.channel.send(`Значение изменено.`);
        return false;
    }
    else{
        message.channel.send(`Эта команда доступна только для cosmocat или модератора.`);
        return null;
    }
}
if(message.content.slice(0,11) == '::addowner ') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat`);
        return null;
    }
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::addowner ','')
    additionalowner = ttl;
    message.channel.send(`Установлен новый модератор. Теперь ему доступны функции ::debughelp`);
    return false;
}
if(message.content.slice(0,11) == '::remowner') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat`);
        return null;
    }
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    var ttl = message.content.replace('::remowner','')
    additionalowner = null
    message.channel.send(`Модератор снят. Команды для него снова недоступны`);
    return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var version = 'Версия InDev v1.6 - discord.js // JavaScript';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.content.slice(0,6) == '::ver') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    message.channel.send(`${version}`);
    return false;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
if(message.content.slice(0,12) == '::jsonimport') {
    console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat`);
        return null;
    }
    const fs = require('fs');
    let rawdata = fs.readFileSync('config.json');  
    let jsondata = JSON.parse(rawdata);  
    reportchannel = jsondata;
    message.channel.send(`База данных загружена с сервера.`);
}
function callback(cb){
    console.log(`[DISCORD] [Callback: ${cb}]({${message.guild.name} / {message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
}
})