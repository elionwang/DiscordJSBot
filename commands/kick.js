module.exports = {
  name: 'kick',
  description: 'Kickt de genoemde persoon.',
  execute(message, args, Discord){
    const { member, mentions } = message;
    const user = mentions.users.first()

    if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
      if (!user) return message.channel.send(`<@!${member.id}>, you are missing a argument. Correct usage: \`kick <user>\``)
      const target = message.guild.members.cache.get(user.id)
      target.kick()
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
      .setColor('#23eee2')
      .setDescription(`\`Kicked:\` <@!${user.id}>\n\`By:\` <@!${member.id}>`)

      message.channel.send(embed)
      }
    else {
      message.channel.send(`<@!${member.id}>, you don't have permission to run this command.`)
    }
  }
}