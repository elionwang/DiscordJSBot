const TOKEN = process.env['TOKEN'];

const bs_token = process.env['bs_token']

const brawlstars = require('brawlstars.js');



const bsclient = new brawlstars.Client(bs_token)

const db = require('quick.db');

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

client.on('message', async message => {
  // const player = await bsclient.getPlayer((message.content.slice(11)));
  // const brawlers = await bsclient.getBrawlers()


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
    client.commands.get('emotes').execute(client, message, args, Discord)
  }
  else if (command === 'profile'){
    client.commands.get('profile').execute(message, args, Discord, bsclient, player, brawlers)
  }
  else if (command === 'ban'){
    client.commands.get('ban').execute(message, args, Discord)
  }
  else if (command === 'kick'){
    client.commands.get('kick').execute(message, args, Discord)
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