import { useEffect, useState } from "react";

export default function Chat(props: any) {
  const getMessages = props.getMessages;
  const guildId = props.guildId;
  const channelId = props.channelId;
  const [channelMessages, setChannelMessages] = useState();
  const [haveData, setHaveData] = useState(false);

  //retrieves specific messages for a channel
  useEffect(() => {
    async function getData() {
      if (guildId !== "" || channelId !== "") {
        const response = await getMessages(guildId, channelId);
        setChannelMessages(response.data);

        setHaveData(true);
      }
    }
    getData().catch((err) => console.log(err));
  }, [guildId, channelId]);

  //renders the messages for the specific channel
  function renderChannelMessages(messages: Array<object>) {
    const render = messages.map((msg: any) => {
      console.log(msg.userAvatar);
      return (
        <div>
          <img src={msg.userAvatar} alt="avatar" />
          <h4 key={msg.id}>{msg.username}</h4>
        </div>
      );
    });
    return <ul>{render}</ul>;
  }

  return <h1>{haveData ? renderChannelMessages(channelMessages!) : null}</h1>;
}
