module.exports = {
  name: 'membercount',
  description: 'Laat het aantal members in de server zien.',
  execute(message, args, Discord) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Member Count in ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
    .setColor('#23eee2')
    .setTimestamp()
    .addFields(
      { name: 'Members', value: message.guild.memberCount }
    )
    .setFooter(`ID: ${message.guild.id}`)

    message.channel.send(embed)
  }
}