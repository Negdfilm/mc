const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('PURPLE')
        .setTitle(`${client.user.username} - Ototag Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}ototag** : Yeni Katılan Üyelere Ayarlamış Olduğunuz Tagı Ekler.\n • | **${ayarlar.prefix}ototag-isim** : Otomatik Tagın Koyulacağı Konumu Ayarlarsınız.\n • | **${ayarlar.prefix}ototag-sıfırla** : Otomatik Tag Sistemini Sıfırlarsınız.`)  
.addField(`» Linkler`, `[Bot Davet Linki](BOTUNUZUN DAVET LINKI) **|**`)        .setFooter(`Youtube DuySad | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ototagsistemi','ototag-sistemi','tagsistemi','tag-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'ototagsistemi',
  description: '',
  usage: ''
};