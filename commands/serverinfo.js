module.exports = {
  name: 'serverinfo',
  description: 'Laat info zien over de server.',
  execute(message, args, Discord, client) {
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const emojis = message.guild.emojis.cache;
    const channels = message.guild.channels.cache;
    const members = message.guild.members.cache;
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
    .setColor('#23eee2')
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setFooter(`ID: ${message.guild.id}`)
    .addFields(
      { name: 'Owner', value: message.guild.owner.user.tag },
      { name: 'Member Count', value: message.guild.memberCount },
      { name: 'Creation Date', value: new Date(message.guild.createdTimestamp).toLocaleDateString()},
      { name: 'Role Count', value: `${roles.length - 1}` },
      { name: 'Emojis', value: `${emojis.size}` },
      { name: 'Text Channels', value: `${channels.filter(channel => channel.type === 'text').size}` },
      { name: 'Voice Channels', value: `${channels.filter(channel => channel.type === 'voice').size}` },
      { name: `Roles [${roles.length - 1}]`, value: roles.join(', ')}
      )

    message.channel.send(embed)
  }
}