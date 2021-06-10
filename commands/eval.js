module.exports = {
  name: 'eval',
  description: 'Voert de genoemde code uit.',
  execute(message, args, client){
    const { member, channel, content } = message;
    const ownerID = '428272829553967106';
    
    if (member.id === ownerID) {
      const result = eval(content.replace('js!eval ', ''))
      console.log(result)
      message.channel.send(result)
    }
  }
}