import type { NextPage } from "next";
import { useState, useEffect, MouseEventHandler } from "react";
import Link from "next/link";
const axios = require("axios").default;

const Guilds: NextPage = () => {
  const [guilds, setGuilds] = useState([]);

  useEffect(() => {
    const fetchGuilds = async () => {
      const response = await axios.get("http://localhost:3000/guilds");
      console.log(response);
      setGuilds(response.data);
    };
    fetchGuilds().catch((err) => console.log(err));
  }, []);

  function renderGuilds(guilds: Array<object>) {
    const renderedNames = guilds.map((guild: any) => {
      return (
        <div>
          <img src={guild.guildAvatar} alt="avatar" />
          <Link className="" key={guild.id} href={`/guilds/${guild.id}`}>
            <a>{guild.guildName}</a>
          </Link>
        </div>
      );
    });
    return <div className="flex flex-col">{renderedNames}</div>;
  }

  return (
    <div>
      <h1>This is Guilds page</h1>
      <div className="flex justify-left ">{renderGuilds(guilds)}</div>
    </div>
  );
};

export default Guilds;
