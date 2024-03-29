import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiDiscord } from 'react-icons/si';
import * as dotenv from 'dotenv';
dotenv.config();

const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const axios = require('axios').default;

const Guilds: NextPage = () => {
  const [guilds, setGuilds] = useState([]);

  useEffect(() => {
    const fetchGuilds = async () => {
      const response = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}guilds`);
      setGuilds(response.data);
    };
    fetchGuilds().catch((err) => console.log(err));
  }, []);

  function renderGuilds(guilds: Array<object>) {
    function checkForGuildAvatar(guild: any) {
      if (guild.guildAvatar === '') {
        return (
          <SiDiscord
            className="w-8 h-8 rounded-full md:w-10 md:h-10 lg:w-14 lg:h-14"
            color="white"
          />
        );
      } else {
        return (
          <img
            src={guild.guildAvatar}
            className="w-8 h-8 rounded-full md:w-10 md:h-10 lg:w-14 lg:h-14"
          />
        );
      }
    }
    const renderedNames = guilds.map((guild: any) => {
      return (
        <Link className="" key={guild.id} href={`/guilds/${guild.id}`}>
          <div className="flex flex-row items-center p-4 m-2 rounded-md cursor-pointer bg-DW-lightGray">
            {checkForGuildAvatar(guild)}
            <h1 className="text-[12px] md:text-lg text-DW-white font-bold mx-1">
              {guild.guildName}
            </h1>
          </div>
        </Link>
      );
    });
    return renderedNames;
  }

  return (
    <div className="h-screen bg-DW-gray">
      <div className="container px-6 m-auto space-y-8 md:px-1 lg:px-20 xl:px-52">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:mt-4">
          {renderGuilds(guilds)}
        </div>
      </div>
    </div>
  );
};

export default Guilds;
