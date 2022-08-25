import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const axios = require("axios").default;

export default function Guild() {
  const router = useRouter();

  const [guildChannels, setGuildChannels] = useState();
  const [haveData, setHaveData] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;

      getGuildData(slug);
    }
  }, [router.isReady]);

  async function getGuildData(slug: any) {
    const response = await axios.get(`http://localhost:3000/guilds/${slug}`);
    setGuildChannels(response.data.channels);
    setHaveData(true);
  }

  function renderChannels(channels: Array<object>) {
    console.log(channels);
    const render = channels.map((channel: any) => {
      return <a key={channel.Id}>{channel.channelName}</a>;
    });
    return <ul>{render}</ul>;
  }
  return (
    <div>
      <h1>
        Guild Channels: {haveData ? renderChannels(guildChannels!) : null}
      </h1>
    </div>
  );
}
