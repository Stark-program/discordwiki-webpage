import { SlashCommandBuilder } from "@discordjs/builders";


module.exports = {

  data: new SlashCommandBuilder()
    .setName("getmessages")
    .setDescription("Gives the wiki bot the entire message history of this text channel"),
  async execute(interaction: object) {
    console.log(typeof interaction)
  },
};