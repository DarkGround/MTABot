const Discord = require('discord.js');
const Bot = new Discord.Client();
const Client = require('discord.js');
const RichEmbed = require('discord.js');
const Message = require('discord.js');
const User = require('discord.js');
const mongoose = require('mongoose');
const ClientID = '487965836041256980'
const Guild = require('discord.js');
///
Data = new Date();
var Year = Data.getFullYear();
var Month = Data.getMonth();
var Day = Data.getDate();
switch (Month) {
    case 0: fMonth = "января"; break;
    case 1: fMonth = "февраля"; break;
    case 2: fMonth = "марта"; break;
    case 3: fMonth = "апреля"; break;
    case 4: fMonth = "мае"; break;
    case 5: fMonth = "июня"; break;
    case 6: fMonth = "июля"; break;
    case 7: fMonth = "августа"; break;
    case 8: fMonth = "сентября"; break;
    case 9: fMonth = "октября"; break;
    case 10: fMonth = "ноября"; break;
    case 11: fMonth = "декабря"; break;
}
var schema = new mongoose.Schema({
    Massiv: [Array]
})
Bot.login(process.env.token);
var mongooselogin = process.env.MONGODB_URI
console.log('=======================================================================================================================')
console.log('[CONSOLE] "ха ржака © Максим 2018"')
console.log('[CONSOLE] "сас © кто-то 2018"')
console.log("[CONSOLE] ::help for help in discord.")
console.log('=======================================================================================================================')
var reportchannel = ["285065576244838400:497738321506729994"];
var warns = [];
performReceive()
var additionalowner;
Bot.on('message', (message) => {
    Data = new Date();
    var Year = Data.getFullYear();
    var Month = Data.getMonth();
    var Day = Data.getDate();
    switch (Month) {
        case 0: fMonth = "января"; break;
        case 1: fMonth = "февраля"; break;
        case 2: fMonth = "марта"; break;
        case 3: fMonth = "апреля"; break;
        case 4: fMonth = "мае"; break;
        case 5: fMonth = "июня"; break;
        case 6: fMonth = "июля"; break;
        case 7: fMonth = "августа"; break;
        case 8: fMonth = "сентября"; break;
        case 9: fMonth = "октября"; break;
        case 10: fMonth = "ноября"; break;
        case 11: fMonth = "декабря"; break;
    }
    var currdate = Day + " " + fMonth + " " + Year + " :: " + Data.toLocaleTimeString()
    ////////
    if (message.content == "::help") {
        console.log(`[DISCORD] ({${message.guild.name} / {message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var integ = 0;
        message.channel.send(`Команды: \n ::me <действие> - действие от первого лица \n ::try <действие> - попытать удачу \n ::do <действие> - действие от третьего лица \n ::todo <выражение>*<действие> - сказать что-то сделавши \n ::s <выражение> - кричать \n ::w <выражение> - шептать \n ::report <кто> <за что> - Пожаловаться на участника администраторам \n ::warn <кто> <причина> - предупреждение [MAdmin] \n ::cwarn <пусто>/<кто> - проверить предупреждения \n ::rwarn <кто> <№предупреждения> - удалить предупреждение [MAdmin] \n cosmocat - этот придурок меня написал`);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 5) == '::me ') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::me ', '')
        message.channel.send(`_${message.author.username}_ **${ttl}**`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 6) == '::try ') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::try ', '')
        var rand = getRandomInt(0, 1)
        var luck = '';
        if (rand == 0) {
            luck = 'Неудачно'
        }
        else {
            luck = 'Удачно'
        }
        message.channel.send(`_${message.author.username}_  **${ttl}** _(${luck})_`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 5) == '::do ') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::do ', '')
        message.channel.send(`**${ttl}** ((_${message.author.username}_))`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 7) == '::todo ') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::todo ', '')
        var ttl2 = message.content.replace('::todo ', '')
        for (var index = 0; index < ttl2.length; index++) {
            if (ttl2.charAt(index) == '*') {
                ttl2 = ttl2.replace(ttl2.slice(index, ttl2.length), '')
                break;
            }
        }
        for (var index = 0; index < ttl.length; index++) {
            if (ttl.charAt(index) == '*') {
                ttl = ttl.replace(ttl.slice(0, index + 1), '')
                break;
            }
        }
        message.channel.send(`**"${ttl2}"**, - сказал(а) _${message.author.username}_, **${ttl}**`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 12) == '::debughelp') {
        if (message.author.id == '297318282724114433' || message.author.id == additionalowner) {
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
            message.channel.send(`Команды отладки: \n ::say <выражение> - сказать от лица бота. \n ::ver - Версия \n ::rchannel - Сменить канал оповещений о репортах \n ::jsonimport - загрузить базу данных`);
        }
        else {
            message.channel.send(`Эта команда доступна только для cosmocat или модератора.`);
            return null;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 6) == '::say ') {
        if (message.author.id == '297318282724114433' || message.author.id == additionalowner) {
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
            var ttl = message.content.replace('::say ', '')
            message.channel.send(`${ttl}`);
            return false;
        }
        else {
            message.channel.send(`Эта команда доступна только для cosmocat или модератора.`);
            return null;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 4) == '::s ') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::s ', '')
        message.channel.send(`_${message.author.username} кричит:_ **${ttl}**`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 4) == '::w ') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::w ', '')
        message.channel.send(`_ ${message.author.username} шепчет:_ **${ttl}**`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 9) == '::report ') {
        if (reportchannel == null) {
            let reportEmbed = new Discord.RichEmbed()
                .setDescription(" :x: Репорт не отправлен.")
                .setColor("#ff0000")
                .addField("Ваша жалоба не была отправлена.", `Причина: не установлен канал репортов.\nПытался отправить ${message.author}`)
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Репорт не отправлен, канала не существует`)
            message.channel.send(reportEmbed);
        }
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var msg = message.content.replace('::report ', '')
        var author = '';
        var report = '';
        switch (msg.replace(' ', '') == msg) {
            case true:
                report = '';
                author = msg
                var readbleauthor = author;
                author = author.replace('<@', '')
                author = author.replace('>', '')
                author = author.replace('!', '')
                author = author.replace('&', '')
                break;
            case false:
                for (var index = 0; index < msg.length; index++) {
                    if (msg.charAt(index) == ' ') {
                        author = msg.replace(msg.slice(index, msg.length), '')
                        break;
                    }
                }
                for (var index = 0; index < msg.length; index++) {
                    if (msg.charAt(index) == ' ') {
                        report = msg.replace(msg.slice(0, index + 1), '')
                        break;
                    }
                }
                var readbleauthor = author;
                break;
        }
        author = author.replace('<@', '')
        author = author.replace('>', '')
        author = author.replace('!', '')
        author = author.replace('&', '')
        ///
        var found = false;
        ///
        for (Count in Bot.users.array()) {
            var User = Bot.users.array()[Count];
            if (User.id == author) {
                found = true;
            }
        }
        if (found == true) {
            var guildid = null;
            for (var i = 0; i < reportchannel.length; i++) {
                if (reportchannel[i].includes(message.guild.id) == true) {
                    guildid = reportchannel[i].replace(`${message.guild.id}:`, '')
                    break;
                }
            }
            if (guildid == null) {
                let reportEmbed = new Discord.RichEmbed()
                    .setDescription(" :x: Репорт не отправлен.")
                    .setColor("#ff0000")
                    .addField("Ваша жалоба не была отправлена.", `Причина: не установлен канал репортов.\nПытался отправить ${message.author}`)
                console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Репорт не отправлен, канала не существует`)
                message.channel.send(reportEmbed);
                return null;
            }
            const channel = Bot.channels.get(guildid)
            if (report == '') {
                report = '<Без причины>'
            }
            let reportEmbed = new Discord.RichEmbed()
                .setDescription(" :heavy_check_mark: Репорт отправлен.")
                .setColor("#ff0000")
                .addField("Ваша жалоба была отправлена.", `Жалоба была отправлена с сообщением:\n**${report}**\nОтправил ${message.author} на ${readbleauthor} в ${currdate}`)
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Отправлен репорт на ${readbleauthor} по причине ${report}`)
            message.channel.send(reportEmbed);
            channel.send(`=> Канал: #${message.channel.name} (${currdate})\n@here Жалоба от ${message.author} на ${readbleauthor} по причине: ${report}`);
        }
        else {
            Guild.Channel
            let reportEmbed = new Discord.RichEmbed()
                .setDescription(" :x: Репорт не отправлен.")
                .setColor("#ff0000")
                .addField("Ваша жалоба не была отправлена.", `Причина: такого пользователя не существует.\nПытался отправить ${message.author}`)
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: Репорт не отправлен, пользователя не существует`)
            message.channel.send(reportEmbed);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 11) == '::rchannel ') {
        if (message.author.id == '297318282724114433' || message.author.id == additionalowner) {
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
            var ttl = message.content.replace('::rchannel ', '')
            for (var el = 0; el < reportchannel.length; el++) {
                if (reportchannel[el].includes(message.guild.id)) {
                    reportchannel[el] = `${message.guild.id}:${ttl}`
                    message.channel.send(`Значение изменено.`);
                    return null;
                }
            }
            reportchannel.push(`${message.guild.id}:${ttl}`)
            message.channel.send(`Значение изменено.`);
            return false;
        }
        else {
            message.channel.send(`Эта команда доступна только для cosmocat или модератора.`);
            return null;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 11) == '::addowner ') {
        if (message.author.id != '297318282724114433') {
            message.channel.send(`Эта команда доступна только для cosmocat`);
            return null;
        }
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::addowner ', '')
        additionalowner = ttl;
        message.channel.send(`Установлен новый модератор. Теперь ему доступны функции ::debughelp`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 11) == '::remowner') {
        if (message.author.id != '297318282724114433') {
            message.channel.send(`Эта команда доступна только для cosmocat`);
            return null;
        }
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var ttl = message.content.replace('::remowner', '')
        additionalowner = null
        message.channel.send(`Модератор снят. Команды для него снова недоступны`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var version = 'Версия InDev v1.6 - discord.js // JavaScript';
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 6) == '::ver') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        message.channel.send(`${version}`);
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 10) == '::basectrl') {
        var sliced = message.content.split(" ")
        switch (sliced[1]) {
            case "remove":
                performRemoval()
                message.reply("удаление завершено.")
                break;
            case "update":
                performUpdate(warns)
                message.reply("обновление завершено.")
                break;
            case "create":
                performCreation(warns)
                message.reply("создание завершено.")
                break;
            case "read":
                performReceive()
                message.reply("значения прочитаны.")
                break;
            default:
                message.reply("недостаточно аргументов.")
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 12) == '::jsonimport') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        if (message.author.id != '297318282724114433') {
            message.channel.send(`Эта команда доступна только для cosmocat`);
            return null;
        }
        const fs = require('fs');
        let rawdata = fs.readFileSync('config.json');
        let jsondata = JSON.parse(rawdata);
        reportchannel = jsondata;
        message.channel.send(`База данных загружена с сервера.`);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Data = new Date();
    var Year = Data.getFullYear();
    var Month = Data.getMonth();
    var Day = Data.getDate();
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 6) == '::warn') {
        var str = message.content.split(" ")
        var rep = "";
        var found = false;
        for (var s = 0; s < str.length; s++) {
            if (s >= 2) {
                rep = rep + str[s] + " "
            }
        }
        var auth = str[1]
        auth = auth.replace('<@', '')
        auth = auth.replace('>', '')
        auth = auth.replace('!', '')
        auth = auth.replace('&', '')
        for (Count in Bot.users.array()) {
            var User = Bot.users.array()[Count];
            if (User.id == auth) {
                found = true;
            }
        }
        if (found == false) {
            message.reply("Такого пользователя не существует!")
            return;
        }
        if (message.member.roles.find("name", "MAdmin")) {
            var massfound = false;
            for (var i = 0; i < warns.length; i++) {
                if (warns[i].startsWith(auth)) {
                    massfound = true;
                }
            }
            if (massfound == false) {
                warns.push(auth)
            }
            if (str[1] == undefined) {
                message.reply("Не указан пользователь.")
                return;
            }
            if (str.length < 3) {
                if (str.length == 2) {
                    rep = "<Без причины>"
                }
                else {
                    message.reply("недостаточно параметров!")
                    return;
                }
            }
            for (var i = 0; i < warns.length; i++) {
                if (warns[i].startsWith(auth)) {
                    warns[i] = warns[i] + `:::(${Day + " " + fMonth + " " + Year + " :: " + Data.toLocaleTimeString()}) ${rep}`
                }
            }
            let embed = new Discord.RichEmbed()
                .setDescription(`Администратор ${message.author.username} выдал предупреждение.`)
                .setColor("#ff0000")
                .addField(`Предупреждение.`, `${message.author} предупредил ${str[1]} по причине: ${rep}`)
            message.channel.send(embed)
            performUpdate(warns)
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        }
        else {
            message.channel.send(`Эта команда доступна только для людей с ролью "MAdmin"`);
            return null;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 7) == '::cwarn') {
        console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        var str = message.content.split(" ")
        var found = false;
        if (str[1] == undefined || str[1] == "") {
            author = message.author.id
            for (Count in Bot.users.array()) {
                var User = Bot.users.array()[Count];
                if (User.id == author) {
                    found = true;
                }
            }
        }
        else {
            author = str[1]
            author = author.replace('<@', '')
            author = author.replace('>', '')
            author = author.replace('!', '')
            author = author.replace('&', '')
            for (Count in Bot.users.array()) {
                var User = Bot.users.array()[Count];
                if (User.id == author) {
                    found = true;
                }
            }
        }
        if (found == false) {
            let embed = new Discord.RichEmbed()
                .setDescription(`Предупреждения для <@${author}>`)
                .setColor("#ff0000")
                .addField(`Ошибка.`, `Аргумент 1 - Пользователя "${str[1]}" не существует на данном сервере.`)
            message.channel.send(embed)
            return;
        }
        var massfound = false;
        for (var i = 0; i < warns.length; i++) {
            if (warns[i].startsWith(author)) {
                massfound = true;
            }
        }
        if (massfound == false) {
            warns.push(author)
        }
        for (var i = 0; i < warns.length; i++) {
            if (warns[i].startsWith(author)) {
                found = true;
                var warn = warns[i].split(":::")
                if (warn.length <= 1) {
                    let embed = new Discord.RichEmbed()
                        .setDescription(`Предупреждения для <@${author}>`)
                        .setColor("#ff0000")
                    embed.addField(`Нет предупреждений.`, `<@${author}> ещё не получал предупреждений.`)
                    message.channel.send(embed)
                }
                else {
                    let embed = new Discord.RichEmbed()
                        .setDescription(`Предупреждения для <@${author}>`)
                        .setColor("#ff0000")
                    for (var x = 0; x < warn.length; x++) {
                        if (warn[x] != author) {
                            embed.addField(`Предупреждение №${x}`, `${warn[x]}`)
                        }
                    }
                    message.channel.send(embed)
                }
                return;
            }
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.slice(0, 7) == '::rwarn') {
        var str = message.content.split(" ")
        var rep = "";
        var found = false;
        author = str[1]
        author = author.replace('<@', '')
        author = author.replace('>', '')
        author = author.replace('!', '')
        author = author.replace('&', '')
        for (Count in Bot.users.array()) {
            var User = Bot.users.array()[Count];
            if (User.id == author) {
                found = true;
            }
        }
        if (found === false) {
            let embed = new Discord.RichEmbed()
                .setDescription(`Удаление предупреждения для ${str[1]}`)
                .setColor("#ff0000")
                .addField(`Ошибка`, `Аргумент 1 - Пользователя "${str[1]}" не существует на данном сервере.`)
            message.channel.send(embed)
            return;
        }
        if (str[2] != "all") {
            if (isNumber(str[2]) === false) {
                let embed = new Discord.RichEmbed()
                    .setDescription(`Удаление предупреждения для ${str[1]}`)
                    .setColor("#ff0000")
                    .addField(`Ошибка`, `Аргумент 2 - "${str[2]}", не число.`)
                message.channel.send(embed)
                return;
            }
        }
        if (message.member.roles.find("name", "MAdmin")) {
            var massfound = false;
            for (var i = 0; i < warns.length; i++) {
                if (warns[i].startsWith(author)) {
                    massfound = true;
                }
            }
            if (massfound == false) {
                let embed = new Discord.RichEmbed()
                    .setDescription(`Удаление предупреждения для ${str[1]}`)
                    .setColor("#ff0000")
                    .addField(`Ошибка`, `Пользователя "${str[1]}" - не существует.`)
                message.channel.send(embed)
            }
            var done = false;
            console.log(str[2])
            if (str[2] === "all") {
                for (var i = 0; i < warns.length; i++) {
                    if (warns[i].startsWith(author)) {
                        warns.splice(i,1)
                        let embed = new Discord.RichEmbed()
                            .setDescription(`Администратор ${message.author.username} удалил предупреждение.`)
                            .setColor("#ff0000")
                            .addField(`Удалены все предупреждения.`, `- У пользователя больше нет предупреждений -`)
                        message.channel.send(embed)
                        performUpdate(warns)
                        done = true;
                        for(var x = 0;x < warns.length;x++){
                            console.log(warns[x] + "-~-~-~")
                        }
                    }
                }
            }
            else{
                for (var i = 0; i < warns.length; i++) {
                    if (warns[i].startsWith(author)) {
                        var sliced = warns[i].split(":::")
                        let embed = new Discord.RichEmbed()
                            .setDescription(`Администратор ${message.author.username} удалил предупреждение.`)
                            .setColor("#ff0000")
                            .addField(`Удалено предупреждение №${str[2]}`, `${sliced[parseInt(str[2])]}`)
                        message.channel.send(embed)
                        performUpdate(warns)
                        done = true;
                        warns[i] = warns[i].replace(":::" + sliced[parseInt(str[2])], "")
                    }
                }
            }
            if (done == false) {
                let embed = new Discord.RichEmbed()
                    .setDescription(`Удаление предупреждения для ${str[1]}`)
                    .setColor("#ff0000")
                    .addField(`Ошибка`, `Предупреждения по номеру №${str[2]} не найдено.`)
                message.channel.send(embed)
            }
            console.log(`[DISCORD] ({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
        }
        else {
            message.channel.send(`Эта команда доступна только для людей с ролью "MAdmin"`);
            return null;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function callback(cb) {
        console.log(`[DISCORD] [Callback: ${cb}]({${message.guild.name} / ${message.channel.name}} ${message.author.username} :: ${message.author.id}) => ${message.content} (${currdate})`)
    }
})
function performReceive() {
    mongoose.connect(mongooselogin);
    var creation = mongoose.model("warn", schema);
    creation.find({}, function (err, wrn) {
        mongoose.disconnect();
        if (err) return console.log(err);
        for (var x = 0; x < warns.length; x++) {
        }
        warns = [];
        for (var x = 0; x < wrn[0].Massiv.length; x++) {
            var string = JSON.stringify(wrn[0].Massiv[x])
            var sliced = string.slice(2)
            var substringed = sliced.substring(0, sliced.length - 2)
            warns.push(substringed)
        }
    });
}
function performUpdate(warnmassive) {
    /*
        let conn = mongoose.connection
        conn.on('open', () => {
            conn.db.stats( (err, stats) => {
              if(stats.objects == 0){
                var creation = mongoose.model("warn", schema);
                var warnsend = new creation({
                    Massiv: warnmassive
                })
                console.log(warnmassive)
                warnsend.save(function (err) {
                    mongoose.disconnect();
                    if (err) return console.log(err);
                });
              }
              */
    mongoose.connect(mongooselogin);
    var creation = mongoose.model("warn", schema);
    creation.update({}, { Massiv: warnmassive }, function (err, result) {
        mongoose.disconnect();
        if (err) return console.log(err);
        console.log(result);
    });
}
function performRemoval() {
    mongoose.connect(mongooselogin);
    var creation = mongoose.model("warn", schema);
    creation.remove({}, function (err, result) {
        mongoose.disconnect();
        if (err) return console.log(err);
        console.log(result);
    });
}
function performCreation(warnmassive) {
    mongoose.connect(mongooselogin);
    var creation = mongoose.model("warn", schema);
    var warnsend = new creation({
        Massiv: warnmassive
    })
    warnsend.save(function (err) {
        mongoose.disconnect();
        if (err) return console.log(err);
    });
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}