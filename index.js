const TOKEN = process.env['TOKEN'];

const keepAlive = require('./server.js');

const prefix = process.env['prefix'];

const Discord = require('discord.js');

const client = new Discord.Client();

const ms = require('pretty-ms');

const fs = require('fs');

const mongoose = require('mongoose');

const MONGODB_SRV = process.env['MONGODB_SRV'];

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}



client.on('ready', () => {
  client.user.setActivity('discord.js')
  console.log(`Client ready on ${client.user.tag}`)
})

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/g)
  const command = args.shift().toLowerCase();
  if (command === 'ping'){
    client.commands.get('ping').execute(message, args)
  }
  else if (command === 'uptime'){
    message.channel.send(`\`Uptime: ${ms(client.uptime)}\``)
  }
  else if (command === 'whois'){
    client.commands.get('whois').execute(message, args, Discord)
  }
  else if (command === 'eval'){
    client.commands.get('eval').execute(message, args, client)
  }
  else if (command === 'avatar'){
    client.commands.get('avatar').execute(message, args, Discord)
  }
  else if (command === 'serverinfo'){
    client.commands.get('serverinfo').execute(message, args, Discord, client)
  }
  else if (command === 'membercount'){
    client.commands.get('membercount').execute(message, args, Discord)
  }
  else if (command === 'emotes'){
    client.commands.get('emotes').execute(message, args, Discord)
  }
})

mongoose.connect(MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to the database!')
})
.catch((err) => {
  console.log(err)
})

keepAlive();

client.login(TOKEN)