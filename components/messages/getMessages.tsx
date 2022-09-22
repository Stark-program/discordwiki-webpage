const axios = require("axios").default;

//function to get the messages for a specific channel
export default async function getMessageData(
  guildId: string,
  channelId: string
) {
  const response = await axios.get(
    `http://localhost:3000/guilds/${guildId}/${channelId}`
  );
  return response;
}
