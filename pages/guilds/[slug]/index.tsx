import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Chat from '../../../components/messages/chat';
import getMessageData from '../../../components/messages/getMessages';
import { SiDiscord } from 'react-icons/si';
import MobileSlideMenu from '../../../components/mobile/mobileslidemenu';
import * as dotenv from 'dotenv';
dotenv.config();

const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const axios = require('axios').default;

interface Channel {
  id: string;
  channelName: string;
  discordGuildId: string;
}

export default function Guild(props: any) {
  const [guildChannels, setGuildChannels] = useState();
  const [haveData, setHaveData] = useState(false);
  const [guildId, setGuildId] = useState('');
  const [channelId, setChannelId] = useState('');
  const [guildName, setGuildName] = useState('');
  const [guildAvatar, setGuildAvatar] = useState('');
  const router = useRouter();
  const toggleMobileMenu = props.toggleMobileMenu;
  const mobileMenu = props.mobileMenu;

  // check if the router query is ready to be used, then fetch the data
  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      getGuildData(slug).catch((err) => console.log(err));
    }
  }, [router.isReady]);

  //retrieves specific guild channel information
  async function getGuildData(slug: any) {
    const response = await axios.get(
      `${NEXT_PUBLIC_API_ENDPOINT}guilds/${slug}`
    );
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
  function renderChannels(channels: Array<Channel>) {
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
              className="underline cursor-pointer md:my-2 "
            >
              #{channel.channelName}
            </a>
          );
        });
        return channel;
      }
    };
    return <div className="flex flex-col cursor-pointer">{render()}</div>;
  }

  function checkForGuildAvatar() {
    if (guildAvatar === '') {
      return (
        <SiDiscord
          className="w-8 h-8 rounded-full md:w-12 md:h-12 lg:w-14 lg:h-14"
          color="white"
        />
      );
    } else {
      return (
        <img
          src={guildAvatar}
          className="w-8 h-8 rounded-full md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
      );
    }
  }

  function renderNonMobileSideBar() {
    return (
      <div className="hidden md:flex md:flex-col my-2 md:w-1/3 text-DW-white ">
        <div className="flex justify-center py-2 border-2 border-t-0 border-black border-x-0 md:justify-start md:px-2 md:py-4 md:items-center">
          {checkForGuildAvatar()}
          <h1 className="md:px-4 md:text-lg">{guildName} Channels:</h1>
        </div>
        <div className="flex justify-center mt-1 md:mb-4 md:justify-start md:mx-6 md:my-4">
          {haveData ? renderChannels(guildChannels!) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden md:overflow-y-hidden ">
      <div className="flex flex-col h-full justify-center bg-DW-gray md:flex-row md:h-full font-Montserrat">
        {renderNonMobileSideBar()}
        <MobileSlideMenu
          toggleMobileMenu={toggleMobileMenu}
          mobileMenu={mobileMenu}
          toggleMobileMenuClose={props.toggleMobileMenuClose}
          guildAvatar={guildAvatar}
          guildName={guildName}
          guildChannels={guildChannels}
          setChannelId={setChannelId}
          setGuildId={setGuildId}
          haveData={haveData}
        />
        <Chat
          getMessages={getMessageData}
          guildId={guildId}
          channelId={channelId}
        />
      </div>
    </div>
  );
}
