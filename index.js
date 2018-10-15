const Discord = require('discord.js');
const Bot = new Discord.Client();
const Client = require('discord.js');
const RichEmbed = require('discord.js');
const Message = require('discord.js');
const User = require('discord.js');
const ClientID = '487965836041256980'
const Guild = require('discord.js');
Bot.login(process.env.token);
console.log('=======================================================================================================================')
console.log(' ___      ___  ___________   __        ________  __    __   _____  ___    __     __   ___  ')
console.log("|   \    /   |(      _    ) /  \      /        )/  |  |  \ (\    \|   \  |  \   |/ | /   ) ")
console.log(" \   \  //   | )__/  \\__/ /    \    (:   \___/(:  (__)  :)|.\\   \    | ||  |  (: |/   /  ")
console.log(" /\\  \/.    |    \\_ /   /' /\  \    \___  \   \/      \/ |: \.   \\  | |:  |  |    __/   ")
console.log("|: \.        |    |.  |  //  __'  \    __/  \\  //  __  \\ |.  \    \. | |.  |  (// _  \   ")
console.log("|.  \    /:  |    \:  | /   /  \\  \  /  \   :)(:  (  )  :)|    \    \ | /\  |\ |: | \  \  ")
console.log("|___|\__/|___|     \__|(___/    \___)(_______/  \__|  |__/  \___|\____\)(__\_|_)(__|  \__) ")
console.log("::help for help in discord.")
console.log('=======================================================================================================================')
var reportchannel = ["285065576244838400:497738321506729994"];
Bot.on('message',(message)=>{
    if(message.content == "::help"){
        console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
        var integ = 0;
            message.channel.send(`Команды: \n ::me <действие> - действие от первого лица \n ::try <действие> - попытать удачу \n ::do <действие> - действие от третьего лица \n ::todo <выражение>*<действие> - сказать что-то сделавши \n ::s <выражение> - кричать \n ::w <выражение> - шептать \n ::report <кто> <за что> - Пожаловаться на участника администраторам \n cosmocat - этот придурок меня написал`);

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
        message.channel.send(`_${message.author.username}_  **${ttl}** _(${luck})_`);
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
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
        console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
        message.channel.send(`Команды отладки: \n ::say <выражение> - сказать от лица бота. \n ::ver - Версия \n ::rchannel - Сменить канал оповещений о репортах \n ::jsonimport \n ::jsonexport`);
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
if(message.content.slice(0,4) == '::s ') {
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
    var ttl = message.content.replace('::s ','')
        message.channel.send(`_${message.author.username} кричит:_ **${ttl}**`);
    return false;
}
if(message.content.slice(0,4) == '::w ') {
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
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
        .addField("Ваша жалоба не была отправлена.","Причина: не установлен канал репортов.")
        message.channel.send(reportEmbed);
    }
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
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
                .addField("Ваша жалоба не была отправлена.","Причина: не установлен канал репортов.")
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
            .addField("Ваша жалоба была отправлена.",`Жалоба была отправлена с сообщением:\n**${report}**`) 
            message.channel.send(reportEmbed);
            channel.send(`{Канал: #${message.channel.name}} @here Жалоба от ${message.author} на ${readbleauthor} по причине: ${report}`);
    }
    else{
        Guild.Channel
        let reportEmbed = new Discord.RichEmbed() 
            .setDescription(" :x: Репорт не отправлен.") 
            .setColor("#ff0000") 
            .addField("Ваша жалоба не была отправлена.",`Причина: такого пользователя не существует.`) 
            message.channel.send(reportEmbed);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.content.slice(0,11) == '::rchannel ') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
    console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var version = 'Версия InDev v1.35 - discord.js // JavaScript';
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
if(message.content.slice(0,12) == '::jsonexport') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
    var json = JSON.stringify(reportchannel);
    var fs = require('fs');
    fs.writeFile('config.json',json,'utf8', callback);
    message.channel.send(`База данных загружена на сервер.`);
    return false;
}
if(message.content.slice(0,12) == '::jsonimport') {
    if(message.author.id != '297318282724114433'){
        message.channel.send(`Эта команда доступна только для cosmocat.`);
        return null;
    }
    const fs = require('fs');
    let rawdata = fs.readFileSync('config.json');  
    let jsondata = JSON.parse(rawdata);  
    reportchannel = jsondata;
    message.channel.send(`База данных загружена с сервера.`);
}
function callback(cb){
    console.log(`[DISCORD] [Callback: ${cb}]({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
}
})