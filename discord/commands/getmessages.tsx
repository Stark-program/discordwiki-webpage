import { SlashCommandBuilder } from "@discordjs/builders";
const client = require("../client")

module.exports = {

  data: new SlashCommandBuilder()
    .setName("getmessages")
    .setDescription("Gives the wiki bot the entire message history of this text channel"),
  async execute(interaction: object) {
    console.log(interaction)
    const channel = client.channels.cache.get(/* Channel Id goes here */)
    const result = await channel.messages.fetch({limit: 3}).then((messages: any) => {
      messages.forEach((message: any) => {
        if (message.attachments.size > 0) {
          console.log(message.attachments)
        }
        console.log(message.content)
      });
    })
   
  },
};