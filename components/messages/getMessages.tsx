const axios = require('axios').default;
import * as dotenv from 'dotenv';
dotenv.config();

const API_ENDPOINT = process.env.API_ENDPOINT;

//function to get the messages for a specific channel
export default async function getMessageData(
  guildId: string,
  channelId: string
) {
  const response = await axios.get(
    `${API_ENDPOINT}/guilds/${guildId}/${channelId}`
  );
  return response;
}
