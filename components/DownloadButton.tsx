import React from 'react';

export default function DownloadButton() {
  function openDownload() {
    window.open(
      'https://discord.com/api/oauth2/authorize?client_id=999534997046308914&permissions=2147559424&scope=bot'
    );
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="inline-flex items-center justify-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-400"
        onClick={openDownload}
      >
        <svg
          className="w-6 h-6 mr-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span className="lg:text-[20px]">Download</span>
      </button>
    </div>
  );
}
