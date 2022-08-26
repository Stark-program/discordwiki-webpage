import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chat from "../../../components/messages/chat";
import getMessageData from "../../../components/messages/getMessages";
const axios = require("axios").default;

export default function Guild() {
  const router = useRouter();
  const [guildChannels, setGuildChannels] = useState();
  const [haveData, setHaveData] = useState(false);
  const [guildId, setGuildId] = useState("");
  const [channelId, setChannelId] = useState("");

  //check if the router query is ready to be used, then fetch the data
  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      getGuildData(slug);
    }
  }, [router.isReady]);

  //retrieves specific guild channel information
  async function getGuildData(slug: any) {
    const response = await axios.get(`http://localhost:3000/guilds/${slug}`);
    setGuildChannels(response.data.channels);
    setHaveData(true);
  }

  //renders the channels for the specific guild page
  function renderChannels(channels: Array<object>) {
    const render = channels.map((channel: any) => {
      return (
        <a
          key={channel.Id}
          onClick={() => {
            setChannelId(channel.Id);
            setGuildId(channel.discordGuildId);
          }}
        >
          {channel.channelName}
        </a>
      );
    });
    return <ul>{render}</ul>;
  }

  return (
    <div className="flex flex-row justify-between">
      <h1>
        Guild Channels: {haveData ? renderChannels(guildChannels!) : null}
      </h1>
      <div>
        <h1>2nd column</h1>
        <div>
          <Chat
            getMessages={getMessageData}
            guildId={guildId}
            channelId={channelId}
          />
        </div>
      </div>
      <div>
        <h1>third column</h1>
      </div>
    </div>
  );
}
