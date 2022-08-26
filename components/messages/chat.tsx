import { useEffect, useState } from "react";

export default function Chat(props: any) {
  const getMessages = props.getMessages;
  const guildId = props.guildId;
  const channelId = props.channelId;
  const [channelMessages, setChannelMessages] = useState();
  const [haveData, setHaveData] = useState(false);

  //retrieves specific guild channel information
  useEffect(() => {
    async function getData() {
      if (guildId !== "" || channelId !== "") {
        const response = await getMessages(guildId, channelId);
        setChannelMessages(response.data);
        setHaveData(true);
      }
    }
    getData();
  }, [guildId, channelId]);

  //renders the channels for the specific guild page
  function renderChannelMessages(messages: Array<object>) {
    const render = messages.map((msg: any) => {
      return <h4 key={msg.Id}>{msg.username}</h4>;
    });
    return <ul>{render}</ul>;
  }

  return <h1>{haveData ? renderChannelMessages(channelMessages!) : null}</h1>;
}
