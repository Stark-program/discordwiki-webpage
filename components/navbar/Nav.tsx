import React from 'react';
import Link from 'next/link';
import MobileMenuButton from '../mobile/mobilemenubutton';

export default function Nav(props: any) {
  const toggleMobileMenu = props.toggleMobileMenu;
  return (
    <div className="sticky top-0 z-10 flex justify-between py-4 text-xl lg:px-4 lg:py-6 md:text-2xl lg:text-4xl font-Baskerville text-DW-white bg-DW-darkGray">
      <div className="flex flex-row pl-1">
        {/* <MobileMenuButton toggleMobileMenu={toggleMobileMenu} /> */}
        <Link href="/">
          <p className="px-2 transition ease-in-out delay-100 md:ml-4 hover:text-slate-300 hover:cursor-pointer">
            Discord Wiki
          </p>
        </Link>
      </div>
      <div className="flex justify-end">
        <Link href="/guilds">
          <button className="px-4 text-sm transition ease-in-out delay-100 md:text-lg lg:text-2xl font-WorkSans hover:cursor-pointer hover:text-slate-300">
            Guilds
          </button>
        </Link>
        <Link href="/download">
          <button className="px-4 text-sm transition ease-in-out delay-100 md:text-lg lg:text-2xl font-WorkSans hover:cursor-pointer hover:text-slate-300">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
}
