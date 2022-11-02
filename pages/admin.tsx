import { useEffect, useState } from 'react';
const axios = require('axios').default;
import * as dotenv from 'dotenv';
import { PermissionsBitField } from 'discord.js';

dotenv.config();

export default function AdminPage() {
  const [authorized, setIsAuthorized] = useState(false);
  const [guilds, setGuilds] = useState<any[]>([]);
  const [haveGuilds, setHaveGuilds] = useState<boolean>(false);

  function checkForAuthToken() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));

    const [accessToken, tokenType] = [
      fragment.get('access_token'),
      fragment.get('token_type'),
    ];

    if (accessToken) {
      setIsAuthorized(true);
    }

    fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        const { username, discriminator } = response;
      })
      .catch(console.error);

    fetch('https://discord.com/api/users/@me/guilds', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        if (response.message == 'You are being rate limited.') {
          console.log('being rate limited');
        } else {
          const checkPermissions = axios
            .post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}admincheck`, response)
            .then((res: any) => {
              setGuilds(res.data);
              setHaveGuilds(true);
            });

          const { username, discriminator } = response;
        }
      })
      .catch(console.error);
  }
  useEffect(() => {
    checkForAuthToken();
  }, []);

  function userAuthorized() {
    return <div className="">Admin</div>;
  }
  function userUnauthorized() {
    return (
      <div className="h-screen bg-DW-gray text-xl text-white">
        Please Login To View This Page
      </div>
    );
  }
  function renderGuildsWithAdminPerms() {
    console.log(guilds);
    return (
      <div>
        {guilds.map((guild: any) => {
          console.log(guild);
          return <h1 className="text-white text-xl">{guild.name}</h1>;
        })}
      </div>
    );
  }
  console.log('have guild data', haveGuilds);
  return (
    <div className="h-screen bg-DW-gray">
      {authorized ? userAuthorized() : userUnauthorized()}
      {haveGuilds ? renderGuildsWithAdminPerms() : null}
    </div>
  );
}
