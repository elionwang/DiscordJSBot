module.exports = {
  name: 'userinfo',
  description: 'Geeft info over jezelf over een andere user.',
  execute(message, args, Discord){
    const user = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
    .setTitle('User Info')
    .setColor('#23eee2')
    .setAuthor(message.member.user.tag, message.author.displayAvatarURL({dynamic: 'true'}) || message.author.displayAvatarURL())
    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
    .addFields(
      { name: 'Nickname', value: message.member.nickname || 'None' },
      { name: 'ID', value: message.member.id },
      { name: 'Join Date', value: new Date(message.member.joinedTimestamp).toLocaleDateString() },
      { name: 'Creation Date', value: new Date(message.member.user.createdTimestamp).toLocaleDateString() },
      { name: 'Role Count', value: message.member.roles.cache.size - 1 },
    )
    message.channel.send(embed)
  }
}