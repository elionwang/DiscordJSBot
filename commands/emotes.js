module.exports = {
 name: 'emotes',
 description: "Gets a guild's emojis",

 execute(client, message, args, Discord) {
  const charactersPerMessage = 2000;
  const emojis = message.guild.emojis.cache.map((e) => `${e} **-** \`:${e.name}:\``).join(', ');
  const numberOfMessages = Math.ceil(emojis.length / charactersPerMessage);
  const embed = new Discord.MessageEmbed().setAuthor(`Emoji List van ${message.guild.name}`, message.guild.iconURL({dynamic:true})).setColor('#23eee2');
  for (i = 0; i < numberOfMessages; i++) {
   message.channel.send(
    embed.setDescription(
     emojis.slice(i * charactersPerMessage, (i + 1) * charactersPerMessage)
    )
   );
  }
 },
};