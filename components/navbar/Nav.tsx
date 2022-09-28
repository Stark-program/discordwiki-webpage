import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MobileSlideMenu from './mobileslidemenu';
import MobileMenuButton from './mobilemenubutton';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="flex justify-between py-4 lg:px-4 lg:py-6 text-2xl lg:text-4xl font-Baskerville text-DW-white bg-DW-darkGray">
      <div className="flex flex-row pl-1">
        <MobileMenuButton toggleMenu={toggleMobileMenu} />
        {menuOpen ? (
          <MobileSlideMenu menuOpen={menuOpen} toggleMenu={toggleMobileMenu} />
        ) : null}
        <p>Discord Wiki</p>
      </div>
      <div className="flex justify-end">
        <Link href="/guilds">
          <button className="px-4 text-base lg:text-2xl font-WorkSans hover:cursor-pointer">
            Guilds
          </button>
        </Link>
        <Link href="/download">
          <button className="px-4 text-base lg:text-2xl font-WorkSans hover:cursor-pointer">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
}