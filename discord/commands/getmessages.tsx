import { SlashCommandBuilder } from "@discordjs/builders";
const client = require("../client")


interface interactionType {
  [key: string]: any 
}

module.exports = {

  data: new SlashCommandBuilder()
    .setName("getmessages")
    .setDescription("Gives the wiki bot the entire message history of this text channel"),
  async execute(interaction: interactionType) {
    const guildId = interaction.guildId
    const channelId = interaction.channelId
    const messages: Array<any> = [];
    const channel = client.channels.cache.get(channelId)
    
    //set initial message pointer to the last message sent in the channel
    let message = await channel.messages
      .fetch({ limit: 1 })
      .then((messagePage: interactionType) => {
        if (messagePage.size === 1) {
          return messagePage
        } else return null 
      });
      
    while (message) {
      await channel.messages
        .fetch({ limit: 100, before: message.id })
        .then((messagePage: interactionType) => { 
          messagePage.forEach((msg: interactionType) => messages.push(msg));
        
          //set new message pointer
          message = 0 < messagePage.size ? messagePage.at(messagePage.size - 1) : null;
        })
    } 
  }, 
};

