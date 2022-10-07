import { channelLink } from 'discord.js';
import React from 'react';
import MobileMenuButton from './mobilemenubutton';

export default function ChannelBar(props: any) {
  const channelName = props.channelName;
  const toggleMobileMenu = props.toggleMobileMenu;
  const guildName = props.guildName;

  return (
    <div className="flex gap-2 py-2 bg-DW-gray text-DW-white h-9">
      <MobileMenuButton toggleMobileMenu={toggleMobileMenu} />
      <div># {channelName}</div>
    </div>
  );
}
