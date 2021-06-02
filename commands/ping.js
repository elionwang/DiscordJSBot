module.exports = {
  name: 'ping',
  description: 'Geeft de delay van de bot in ms.',
  execute(message, args){
    message.channel.send('Ping aan het berekenen...').then(msg => {
      const ping = msg.createdTimestamp - message.createdTimestamp
      msg.edit(`Pong! 🏓 Bot Latency: \`${ping} ms\``)
    })
  }
}