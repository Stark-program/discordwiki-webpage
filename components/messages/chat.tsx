import { useEffect, useState, useRef } from 'react';
import { SiDiscord } from 'react-icons/si';

interface ResponseData {
  attachmentContent: Array<string>;
  timestamp: string;
  content: string;
  guildChannelId: string;
  id: string;
  isBot: boolean;
  userAvatar: string;
  username: string;
}

export default function Chat(props: any) {
  const getMessages = props.getMessages;
  const guildId = props.guildId;
  const channelId = props.channelId;
  const [channelMessages, setChannelMessages] = useState<ResponseData[]>([]);
  const [haveData, setHaveData] = useState(false);
  const scrollBottom = useRef<null | HTMLDivElement>(null);

  //retrieves specific messages for a channel
  useEffect(() => {
    async function getData() {
      if (guildId !== '' && channelId !== '') {
        const response = await getMessages(guildId, channelId);
        const messages: ResponseData[] = response.data.sort(
          (a: any, b: any) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return dateA.getTime() - dateB.getTime();
          }
        );
        console.log(messages);
        // const reversedMessages = [...messages].reverse(); //if i can figure out how to have scrollbar start at bottom
        setChannelMessages(messages);
        setHaveData(true);
      }
    }
    getData().catch((err) => console.log(err));
  }, [guildId, channelId]);

  useEffect(() => {
    scrollBottom.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }, [channelMessages]);

  //renders the messages for the specific channel
  function renderChannelMessages(messages: Array<ResponseData>) {
    const render = messages.map((msg: ResponseData) => {
      function addRefDiv(msg: any) {
        if (msg.id === messages[messages.length - 1].id) {
          return <div ref={scrollBottom}></div>;
        }
      }
      function checkForUserAvatar() {
        if (msg.userAvatar === '') {
          return (
            <SiDiscord className="w-8 h-8 rounded-full md:w-10 md:h-10 lg:w-10 lg:h-10" />
          );
        } else {
          return (
            <img
              src={msg.userAvatar}
              className="w-8 h-8 rounded-full md:w-10 md:h-10 lg:w-10 lg:h-10"
            />
          );
        }
      }

      function checkIfBot() {
        if (msg.isBot) {
          return <span>Bot</span>;
        }
      }

      return (
        <div className="mx-2 my-4">
          <div className="flex flex-row lg:justify-start">
            {checkForUserAvatar()}
            <h4 key={msg.id} className="text-green-100 lg:px-2">
              {msg.username}
              {checkIfBot()}
              <span className="text-[10px] px-3 text-slate-300">
                {msg.timestamp}
              </span>
            </h4>
          </div>
          <div className="flex mx-14">
            <p className="text-white lg:px-2">{msg.content}</p>
            {addRefDiv(msg)}
          </div>
        </div>
      );
    });
    return <>{render}</>;
  }

  return (
    <div className="flex flex-col flex-grow h-full overflow-auto bg-DW-lightGray lg:w-full rounded-xl">
      {haveData ? renderChannelMessages(channelMessages!) : null}
    </div>
  );
}
