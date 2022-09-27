const axios = require('axios').default;
import * as dotenv from 'dotenv';
dotenv.config();

const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

//function to get the messages for a specific channel
export default async function getMessageData(
  guildId: string,
  channelId: string
) {
  const response = await axios.get(
    `${NEXT_PUBLIC_API_ENDPOINT}guilds/${guildId}/${channelId}`
  );
  return response;
}
