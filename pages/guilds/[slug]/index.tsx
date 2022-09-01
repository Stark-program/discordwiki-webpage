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
  const [guildName, setGuildName] = useState("");
  const [guildAvatar, setGuildAvatar] = useState("");

  interface Channel {
    id: string;
    channelName: string;
    discordGuildId: string;
  }

  //check if the router query is ready to be used, then fetch the data
  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      getGuildData(slug).catch((err) => console.log(err));
    }
  }, [router.isReady]);

  //retrieves specific guild channel information
  async function getGuildData(slug: any) {
    const response = await axios.get(`http://localhost:3000/guilds/${slug}`);
    if (response.data.length > 0) {
      setGuildChannels(response.data[0].channels);
      setGuildName(response.data[0].guildName);
      setGuildAvatar(response.data[0].guildAvatar);
      setHaveData(true);
    } else {
      setGuildChannels(response.data);
      setHaveData(true);
    }
  }

  //renders the channels for the specific guild page
  function renderChannels(channels: Array<object>) {
    const render = () => {
      if (channels.length === 0) {
        return <h1>Guild not found</h1>;
      } else {
        let channel = channels.map((channel: Channel) => {
          return (
            <a
              key={channel.id}
              onClick={() => {
                setChannelId(channel.id);
                setGuildId(channel.discordGuildId);
              }}
            >
              {channel.channelName}
            </a>
          );
        });
        return channel;
      }
    };
    return <div className="flex flex-col cursor-pointer">{render()}</div>;
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="flex justify-left">
        <div className="">
          <img src={guildAvatar} alt="guild avatar" />{" "}
          <h1>{guildName} Channels:</h1>
          {haveData ? renderChannels(guildChannels!) : null}
        </div>
      </div>
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
