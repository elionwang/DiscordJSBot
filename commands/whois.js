module.exports = {
  name: 'whois',
  description: 'Geeft info over jezelf over een andere user.',
  execute(message, args, Discord){
    const userMention = message.mentions.users.first() || msg.author;
    const memberMention = message.mentions.members.first() || msg.member;
    const embed = new Discord.MessageEmbed()
    .setTitle('User Info')
    .setColor('#23eee2')
    .setAuthor(userMention.username + "#" + userMention.discriminator, userMention.displayAvatarURL({dynamic: 'true'}) || message.author.displayAvatarURL())
    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
    .addFields(
      { name: 'Nickname', value: member.nickname || 'None' },
      { name: 'ID', value: memberMention.id },
      { name: 'Join Date', value: new Date(memberMention.joinedTimestamp).toLocaleDateString() },
      { name: 'Creation Date', value: new Date(userMention.createdAt).toLocaleDateString() },
      { name: 'Role Count', value: member.roles.cache.size - 1 },
    )
    message.channel.send(embed)
  }
}