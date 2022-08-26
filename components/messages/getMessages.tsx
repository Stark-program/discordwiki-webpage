const axios = require("axios").default;

export default async function getMessageData(
  guildId: string,
  channelId: string
) {
  const response = await axios.get(
    `http://localhost:3000/guilds/${guildId}/${channelId}`
  );
  return response;
}
