import { useEffect, useState, useRef } from 'react';
import { SiDiscord } from 'react-icons/si';
import { animateScroll as scroll } from 'react-scroll';
import OpenGraph from '../opengraph/getopengraphdata';
import { format } from 'date-fns';
import ChannelBar from '../mobile/ChannelBar';

interface ResponseData {
  attachmentContent: Array<string>;
  timestamp: number;
  content: string;
  guildChannelId: string;
  id: string;
  isBot: boolean;
  userAvatar: string;
  username: string;
}

function scrollMessages() {
  scroll.scrollToBottom({
    duration: 0,
    delay: 0,
    smooth: 'easeInOutQuart',
    containerId: 'message-container',
  });
}

export default function Chat(props: any) {
  const getMessages = props.getMessages;
  const guildId = props.guildId;
  const channelId = props.channelId;
  const channelName = props.channelName;
  const toggleMobileMenu = props.toggleMobileMenu;
  const [channelMessages, setChannelMessages] = useState<ResponseData[]>([]);
  const [haveData, setHaveData] = useState(false);

  //retrieves specific messages for a channel
  useEffect(() => {
    async function getData() {
      if (guildId !== '' && channelId !== '') {
        const response = await getMessages(guildId, channelId);
        const messages: ResponseData[] = response.data.sort(
          (a: any, b: any) => {
            return a.timestamp - b.timestamp;
          }
        );
        setChannelMessages(messages);
        setHaveData(true);
      }
    }
    getData().catch((err) => console.log(err));
  }, [guildId, channelId]);

  useEffect(() => {
    scrollMessages();
  }, [channelMessages]);

  //renders the messages for the specific channel
  function renderChannelMessages(messages: Array<ResponseData>) {
    const render = messages.map((msg: ResponseData) => {
      function checkForUserAvatar() {
        if (msg.userAvatar === '') {
          return <SiDiscord className="w-8 h-8 rounded-full md:w-10 md:h-10" />;
        } else {
          return (
            <img
              src={msg.userAvatar}
              className="w-8 h-8 rounded-full md:w-10 md:h-10"
            />
          );
        }
      }

      function checkIfBot() {
        if (msg.isBot) {
          return <span>Bot</span>;
        }
      }

      function checkAttachmentType(attachment: string) {
        if (attachment.includes('.png') || attachment.includes('.jpg')) {
          return (
            <div className="flex ml-9 md:ml-14">
              <img
                src={msg.attachmentContent[0]}
                className="w-96 h-96 rounded-xl"
              />
            </div>
          );
        } else if (attachment.includes('.mp4') || attachment.includes('.mov')) {
          return (
            <div className="flex ml-9 lg:ml-14">
              <video
                src={msg.attachmentContent[0]}
                className="w-96 h-96 "
                controls
              />
            </div>
          );
        } else {
          return (
            <div className="flex lg:ml-14">
              <h1 className="text-orange-500">
                Sorry, this is an attachment, but the attachment isnt available.
              </h1>
            </div>
          );
        }
      }

      function checkForAttachmentOrImage() {
        try {
          if (msg.attachmentContent.length > 0) {
            {
              return checkAttachmentType(msg.attachmentContent[0]);
            }
          } else if (
            msg.content.includes('.gif') ||
            msg.content.includes('.png') ||
            msg.content.includes('.jpg')
          ) {
            return (
              <div className="flex ml-9 lg:ml-14">
                <img src={msg.content} className="w-96 h-96 rounded-xl" />
              </div>
            );
          } else if (msg.content.includes('.mp4')) {
            return (
              <div className="flex ml-9 lg:ml-14">
                <video src={msg.content} className="w-96 h-96" controls />
              </div>
            );
          } else if (msg.content.includes('https://')) {
            return <OpenGraph link={msg.content} />;
          } else {
            return (
              <div className="flex break-normal ml-9 lg:ml-14">
                <p className="text-white">{msg.content}</p>
              </div>
            );
          }
        } catch (err) {
          console.log('i errored', err);
        }
      }

      return (
        <div className="flex flex-col mx-2 my-4 " key={msg.id}>
          <div className="flex flex-row md:items-center md:justify-start">
            {checkForUserAvatar()}
            <h4 className="ml-1 font-bold font-Montserrat lg:ml-0 text-DW-white lg:px-4">
              {msg.username}
              {checkIfBot()}
              <span className="text-[10px] font-normal px-3 text-DW-white">
                {format(new Date(msg.timestamp), 'MM/dd/yyyy')}
              </span>
            </h4>
          </div>
          {checkForAttachmentOrImage()}
        </div>
      );
    });
    return <>{render}</>;
  }

  return (
    <div className="md:w-3/4 h-full md:h-[calc(100vh-120px)]">
      <div className="sticky top-0">
        <ChannelBar
          channelName={channelName}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
      <div
        className="flex flex-col flex-grow h-full bg-DW-lightGray scrollbar-thin scrollbar-thumb-DW-darkGray md:w-full"
        id="message-container"
      >
        {haveData ? renderChannelMessages(channelMessages!) : null}
      </div>
    </div>
  );
}
