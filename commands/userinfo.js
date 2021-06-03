module.exports = {
  name: 'userinfo',
  description: 'Geeft info over jezelf over een andere user.',
  execute(message, args, Discord){
    const embed = new Discord.MessageEmbed()
    .setTitle('User Info')
    .setColor('#23eee2')
    .setThumbnail(`${message.author.displayAvatarURL()}`)
    .addFields(
      { name: 'Username', value: `${message.member.user.tag}` },
      { name: 'Nickname', value: message.member.nickname || 'None' },
      { name: 'ID', value: `${message.member.id}` },
      { name: 'Join Date', value: new Date(message.member.joinedTimestamp).toLocaleDateString() },
      { name: 'Creation Date', value: new Date(message.member.user.createdTimestamp).toLocaleDateString() },
    )
    message.channel.send(embed)
  }
}