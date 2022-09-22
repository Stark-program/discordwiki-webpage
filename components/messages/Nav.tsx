import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="flex justify-between px-4 py-6 text-4xl font-Baskerville text-DW-white bg-DW-darkGray">
      <div>
        <p>Discord Wiki</p>
      </div>
      <div>
        <Link href="/guilds">
          <button className="px-4 text-2xl font-WorkSans hover:cursor-pointer">
            Guilds
          </button>
        </Link>
        <Link href="/download">
          <button className="px-4 text-2xl font-WorkSans hover:cursor-pointer">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
}
