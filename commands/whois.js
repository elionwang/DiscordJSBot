module.exports = {
  name: 'whois',
  description: 'Geeft info over jezelf over een andere user.',
  execute(message, args, Discord){
    const { guild, channel } = message;

    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    const embed = new Discord.MessageEmbed()
    .setAuthor(`User Info van ${user.tag}`, user.displayAvatarURL({dynamic: true}))
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .setColor('#23eee2')
    .addFields(
      { name: 'Nickname', value: member.nickname || 'None'},
      { name: 'ID', value: user.id },
      { name: 'Is Bot', value: user.bot},
      { name: 'Joined Server At', value:  new Date(member.joinedTimestamp).toLocaleDateString() },
      { name: 'Created Account At', value: new Date(member.user.createdTimestamp).toLocaleDateString() },
      { name: 'Role Count', value: member.roles.cache.size - 1 }
    )

    message.channel.send(embed)

  }
} 