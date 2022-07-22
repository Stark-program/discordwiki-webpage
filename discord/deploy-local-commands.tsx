import  fs from "node:fs";
import  path from "node:path";
import  { REST } from "@discordjs/rest";
import  { Routes } from "discord-api-types/v9";
require("dotenv").config();

const guildId = process.env.DISCORD_GUILD_ID;
const clientId = process.env.DISCORD_APPLICATION_ID;
const applicationToken = process.env.DISCORD_LOGIN;

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file: string) => file.endsWith(".tsx"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(applicationToken);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() =>
    console.log(
      "Successfully registered application commands to guild for development."
    )
  )
  .catch(console.error);

 