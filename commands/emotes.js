module.exports = {
  name: 'emotes',
  descrtiption: 'Laat de emotes van de server zien.',
  execute(message, args, Discord) {
    const emotes = message.guild.emojis.cache.map((e) => `${e} **-** \`:${e.name}:\``).join(', ');
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Emotes van ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
    .setColor('#23eee2')
    .setDescription(emotes)

    message.channel.send(embed)
  }
}