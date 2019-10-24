
// Keepit-Clean - a simple Discord bot created by Alex P. (@acryllect)

const Discord = require("discord.js");
const bot = new Discord.Client
const client = new Discord.Client();

// Setup

const prefix = "!"; // The prefix of the bot's commands you want to delete
const chatChannelID = "PASTE-HERE"; // Right-click the channel (usually #general) and click "Copy ID" on Discord then paste it in the brackets
const botChannelID = "PASTE-HERE"; // Right-click the channel (usually #bot-commands) and click "Copy ID" on Discord then paste it in the brackets
const botID = "PASTE-HERE"; // Right-click the bot (for example: Rythm) and click "Copy ID" on Discord then paste it in the brackets

client.login("token"); // Paste your bot token, *NOT* the botID, in the brackets (check README.md for details on this)

client.once('ready', () => {
	console.log('Ready!');
});

// This is the code that manages the channel you *DON'T*  want people to use the bot in. If a message is by or for the bot, it gets deleted.

client.on('message', message => {
  if (message.channel.id === "chatChannelID"){
    if (message.content.startsWith(prefix)) message.delete();
    else if (message.author.id === "botID") message.delete();
    else return;
  };
});

// This is the code that manages the channel *ONLY* for bot commands. Other messages will be deleted.

  client.on('message', message => {
    if (message.channel.id === "channelID"){
      if (message.content.startsWith(prefix)) return;
      else if (message.author.id === "botID") return;
      else message.delete();
    };
  });
