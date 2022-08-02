const { Client, GatewayIntentBits } = require("discord.js");

module.exports = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ],
});