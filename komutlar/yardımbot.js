const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('PURPLE')
        .setTitle(`${client.user.username} - Bot Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}bot-bilgi** : Botun Bilgilerini Listelersiniz.\n • | **!talep** : Sunucudaki Yetkili Ekibiyle Özel Olarak Oda Oluşturursunuz.\n • | **${ayarlar.prefix}yapımcım** : Kodlayan Yapımcıyı ve YouTube Kanalını Görürsünüz.\n • | **${ayarlar.prefix}satınal** : Bot Satın Almak İçin Paneli Görüntülersiniz.\n`)  
        .addField(`» Linkler`, `[Bot Davet Linki](BOTUNUZUN DAVET LINKI)**`)
        .setFooter(`Youtube DuySad | Bot Sürümü : v0.1 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot'],
  permLevel: 0,
};

exports.help = {
  name: 'bot',
  description: '',
  usage: ''
};