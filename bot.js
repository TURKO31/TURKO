const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`TURKO BOT ${client.user.tag}!`);
  client.user.setActivity('Roblox', {type: 'PLAYING'})
});

client.on('guildMemberRemove', member => {
  const girişçıkış = member.guild.channels.cache.get('1126968430256463986');
  girişçıkış.send(`${member} Has left`);
});

client.on('guildMemberAdd', member => {
  const girişçıkış = member.guild.channels.cache.get('1126968430256463986');
  girişçıkış.send(`${member} Welcome To JAMP`);
});

client.on("guildMemberAdd", member => {
  try {
  let role = member.guild.roles.cache.get('1190412735981289502')
  member.roles.add(role);
} catch(e) {
  console.log(e)
}   
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hi') {
    msg.reply('hello How Can i help you?:face_with_monocle:');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'are you legit?') {
    msg.reply('yes,we are legit');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'you cant help me') {
    msg.reply('ok :(');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tell me a joke') {
    msg.reply('joke');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'why should i trust you?') {
    msg.reply('why? Because We Have Many proofs.');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'scam') {
    msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'this server is scam') {
      msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'owner is scammer') {
      msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'admin is scammed me') {
      msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'owner is scammed me') {
      msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'admin is scammed me') {
      msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'admin is scammer') {
      msg.delete()
    msg.reply('Stop Lying.You little shit 🤬');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'i want mm service') {
    msg.reply('Sure Why not? #🎫・ticket-buy-sell-mm');
  }
});
client.login('MTEwMDA0NDcxNjM5NDk1ODg5MA.GZNjb2.hWHmAwqEiDJN72_47clRCZZZXwCI3D43Lv9RMc');