module.exports = {
  name: 'profile',
  description: 'Laat de profile zien van jezelf of de genoemde persoon.',
  execute(message, args, Discord, bsclient, player) {
    const trophy = '<:BStrophy:801769136296296508>'
    const threevsthree = '<:3v3:837645809645387806>'
    const roborumble = '<:RoboRumble:807318775233380403>'
    const club = '<:club:837649601191739392>'
    const solo = '<:SoloShowdown:807236285097312286>'
    const brawler = '<:brawllogo:837662019128786984>'
    const duo = '<:DuoShowdown:807236327103397899>'
    const level = '<:level:837649678291959818>'
    const embed = new Discord.MessageEmbed()
    .setAuthor(`test`)
    .setTimestamp()
    .setColor('#23eee2')
    .addFields(
      { name: 'Player Name', value: player.name },
    )

    message.channel.send(embed)
  }
}