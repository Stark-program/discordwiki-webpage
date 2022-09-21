import React from 'react';

export default function Nav() {
  return (
    <div className="flex justify-between px-4 py-6 text-4xl font-Baskerville text-DW-white bg-DW-darkGray">
      <div>
        <p>Discord Wiki</p>
      </div>
      <div>
        <p className="px-4 text-2xl font-WorkSans hover:cursor-pointer">
          Guilds
        </p>
      </div>
    </div>
  );
}
