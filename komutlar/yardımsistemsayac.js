const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('PURPLE')
        .setTitle(`${client.user.username} - Sayaç Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}sayaç** : Belirlediğiniz Hedefe Ulaşma Yolunda Üyelerinizi Sayar.\n • | **${ayarlar.prefix}sayaç-sıfırla** : Ayarlanmış Sayaç Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}sayaç-mesaj-hg** : Sunucuya Bir Üye Katıldığında Gönderilecek Sayaç Mesajını Düzenlersiniz.\n • | **${ayarlar.prefix}sayaç-mesaj-bb** : Sunucudan Bir Üye Ayrıldığında Gönderilecek Sayaç Mesajını Düzenlersiniz.\n • | **${ayarlar.prefix}sayaç-mesaj-sıfırla** : Belirttiğiniz Sayaç Mesajını Sıfırlarsınız.`)  
.addField(`» Linkler`, `[Bot Davet Linki](BOTUNUZUN DAVET LINKI) **)`)        .setFooter(`Youtube DuySad | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayacsistemi','sayac-sistemi','sayaçsistemi','sayaç-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'sayacsistemi',
  description: '',
  usage: ''
};