const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

const client = require("./client.tsx");


client.login(process.env.DISCORD_LOGIN);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  }); 