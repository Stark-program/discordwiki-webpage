import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { SiDiscord } from 'react-icons/si';

export default function MobileSlideMenu(props: any) {
  const mobileMenu = props.mobileMenu;
  const toggleMenuClose = props.toggleMobileMenuClose;
  const guildAvatar = props.guildAvatar;
  const guildName = props.guildName;
  const guildChannels = props.guildChannels;
  const setChannelId = props.setChannelId;
  const setGuildId = props.setGuildId;
  const haveData = props.haveData;

  interface Channel {
    id: string;
    channelName: string;
    discordGuildId: string;
  }

  function checkForGuildAvatar() {
    if (guildAvatar === '') {
      return (
        <SiDiscord
          className="w-12 h-12 rounded-full mx-4 md:w-10 md:h-10 lg:w-14 lg:h-14"
          color="white"
        />
      );
    } else {
      return (
        <img
          src={guildAvatar}
          className="w-12 h-12 rounded-full mx-4 md:w-10 md:h-10 lg:w-14 lg:h-14"
        />
      );
    }
  }

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
                toggleMenuClose();
              }}
              className="underline cursor-pointer my-2 text-DW-white text-xl"
            >
              #{channel.channelName}
            </a>
          );
        });
        return channel;
      }
    };
    return <div className="flex flex-col">{render()}</div>;
  }

  return (
    <Transition.Root show={mobileMenu} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={toggleMenuClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none  fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={toggleMenuClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-DW-gray  py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="flex flex-row items-center text-3xl font-medium text-DW-white">
                        {checkForGuildAvatar()}
                        {guildName}
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="px-4 sm:px-6">
                        {haveData ? renderChannels(guildChannels) : null}
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
