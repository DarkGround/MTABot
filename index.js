const Discord = require('discord.js');
const Bot = new Discord.Client();
const { Client } = require('discord.js');
const { RichEmbed } = require('discord.js');
const { Message } = require('discord.js');
const { User } = require('discord.js');
const { Presence } = require('discord.js');
const { Guild } = require('discord.js');
const config = require('./config.json')
const rpc = new DiscordRPC.Client({
	transport: 'ipc'
});
var d1 = new Date ();
var d2 = new Date(d1);
d2.setSeconds(d1.getSeconds() + config.Rich_Presence.countdown_start);
////////
rpc.setActivity({
    details: config.Rich_Presence.details,
    state: config.Rich_Presence.state,
    largeImageKey: config.Rich_Presence.file_bannername,
    largeImageText: config.Rich_Presence.bannername,
    smallImageKey: config.Rich_Presence.file_username,
    smallImageText: config.Rich_Presence.username,
    instance: false,
    partySize: 0,
    partyMax: config.Rich_Presence.maxpartysize,
    startTimestamp: d1,
    endTimestamp: d2
}).then(console.clear(), console.log(banner), console.log(`RPC has been set! If it doesn’t set immediately please wait for it to refresh (if set) or just re-node app.js`)).catch(err => { });
if (config.Rich_Presence.Refresh) {
    // Activity can only be set every 15 seconds
    setInterval(() => {
    //Create random party size every update
    var partysize = Math.floor(Math.random() * (config.Rich_Presence.maxpartysize - 0 + 1)) + 0;
    //Resetting the timer
    var t1 = new Date();
    var t2 = new Date ( t1 );
    t2.setSeconds(t1.getSeconds() + config.Rich_Presence.countdown_start);
    //Setting the activity again with updated values	
    rpc.setActivity({
        details: config.Rich_Presence.details,
        state: config.Rich_Presence.state,
        largeImageKey: config.Rich_Presence.file_bannername,
        largeImageText: config.Rich_Presence.bannername,
        smallImageKey: config.Rich_Presence.file_username,
        smallImageText: config.Rich_Presence.username,
        instance: false,
        partySize: partysize,
        partyMax: config.Rich_Presence.maxpartysize,
        startTimestamp: t1,
        endTimestamp: t2
    }).then(console.clear(), console.log(banner), console.log(`Updated the RPC ${++config.Dont_Touch.updatecounter} time(s)!`)).catch(err => {});
  }, (config.Rich_Presence.Refresh_time * 1000));
}
rpc.login(config.Client_Id).catch(console.error);
////////
Bot.login(process.env.token);
console.log('MTAshnik v1.0 Launched.')
console.log('FULL - CONTROL MODE')
console.log('::help for a help in discord.')
Bot.on('message',(message)=>{
    if(message.content == "::help"){
        console.log(`[DISCORD] ({${message.guild.name}} ${message.author.username} :: ${message.author.id}) => ${message.content}`)
        var integ = 0;
            message.channel.send(`Команды: \n ::me <действие> - действие от первого лица \n ::try <действие> - попытать удачу \n ::do <действие> - действие от третьего лица \n ::todo <выражение>*<действие> - сказать что-то сделавши`);

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
            ttl2 = ttl2.replace(ttl2.slice(index,ttl2.length),'')
        }
    }
    for (var index = 0; index < ttl.length; index++) {
        if(ttl.charAt(index) == '*'){
            ttl = ttl.replace(ttl.slice(0,index + 1),'')
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
})