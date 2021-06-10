module.exports = {
  name: 'avatar',
  description: 'Laat de avatar zien van jezelf of de genoemde persoon.',
  execute(message, args, Discord) {
    const { guild, channel } = message;

    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
    .setColor('#23eee2')
    .setTitle('Avatar')
    .setImage(user.displayAvatarURL({dynamic: true}))

    message.channel.send(embed)
  }

}