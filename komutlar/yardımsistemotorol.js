const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('PURPLE')
        .setTitle(`${client.user.username} - Otorol Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}otorol** : Sunucuya Yeni Katılan Kullanıcılara Verilecek Rolü Ayarlarsınız.\n • | **${ayarlar.prefix}otorol-sıfırla** : Ayarlanmış Otorol Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}otorol-mesaj** : Otorol Uygulandığında Gönderilecek Mesajı Oluşturursunuz.\n • | **${ayarlar.prefix}otorol-mesaj-sıfırla** : Otorol Mesajını Sıfırlarsınız.`)  
.addField(`» Linkler`, `[Bot Davet Linki](BOTUNUZUN DAVET LINKI) **)`)        .setFooter(`Youtube DuySad | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otomatikrol','otorol-sistemi','otorolsistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'otorolsistemi',
  description: '',
  usage: ''
};