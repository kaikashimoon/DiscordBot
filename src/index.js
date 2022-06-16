const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = "$"

client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in`)
})


client.on('message', async (message)=>{
    if(message.author.bot) return
   console.log(`[${message.author.tag}]: ${message.content}`) 
    if (message.content === 'hello') {
        message.channel.send('hello')
        //  message.reply('Hello there')
    }

    //Receiving the message
    console.log(message.content);
    if(message.content === 'ping'){
         message.reply('pong');
    }

    if (message.author.bot) return;
if (message.content.startsWith(PREFIX)) {
const [CMD_NAME, ...args] = message.content
  .trim()
  .substring(PREFIX.length)
  .split(/\s+/);
if (CMD_NAME === 'kick') {
    if (!message.member.permissions.has('KICK_MEMBERS')) 
    return message.reply('You do not have permissions to use that command');
  if (args.length === 0)
    return message.reply('Please provide an ID');
  const member = await message.guild.members.fetch(args[0]);
  if (member) {
    member
      .kick()
      
  } else {
    message.channel.send('That member was not found');
  }
  console.log(member)
}

}

})



client.login('OTg2NzA5MDY2MTgzMjQ1ODc2.Gy-mlg.9PtAZ6OigwQZSm0ezSPHXwjhKJHphWKSEFI6nA');

