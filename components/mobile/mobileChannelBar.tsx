import React from 'react';
import MobileMenuButton from './mobilemenubutton';

export default function MobileChannelBar(props: any) {
  const toggleMobileMenu = props.toggleMobileMenu;

  const guildName = props.guildName;

  return (
    <div className="flex gap-2 py-2 bg-DW-gray text-DW-white">
      <MobileMenuButton toggleMobileMenu={toggleMobileMenu} />
      <div># Channel</div>
    </div>
  );
}
