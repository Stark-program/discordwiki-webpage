import fs from "node:fs";
import path from "node:path";
import { Collection, PermissionsBitField, InteractionType } from "discord.js";
import * as dotenv from 'dotenv'
dotenv.config()

const client = require("./client.tsx");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  /* ################# COMMANDS ##############################*/
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");

const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file: string) => file.endsWith(".tsx"));

for (const file of commandFiles) {
 
  const filePath = path.join(commandsPath, file);
  
  const command = require(filePath);
 
 
  client.commands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction: any) => {
  const adminPerm = PermissionsBitField.Flags.Administrator;
  const bitPermissions = new PermissionsBitField(
    interaction.memberPermissions.bitfield
  );
  const checkUserPerms = bitPermissions.has(adminPerm);
  if (checkUserPerms) {
    if (interaction.type !== InteractionType.ApplicationCommand) return;
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  } else
    interaction.reply({
      content:
        "You do not have permission to use this command. Admin permissions required.",
      ephemeral: true,
    });
});

/*#################### EVENTS #####################*/
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file: string) => file.endsWith(".tsx"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args:Array<string> ) => event.execute(...args));
  } else {
    client.on(event.name, (...args:Array<string>) => event.execute(...args));
  }
}

client.login(process.env.DISCORD_LOGIN);


