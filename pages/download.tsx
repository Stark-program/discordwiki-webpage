const Download = () => {
  function openDownload() {
    window.open(
      'https://discord.com/api/oauth2/authorize?client_id=999534997046308914&permissions=2147559424&scope=bot'
    );
  }
  return (
    <div className="flex flex-row h-1/2">
      <div className="flex justify-center items-center lg:w-1/2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center lg:h-1/5 lg:w-1/4"
          onClick={openDownload}
        >
          <svg
            className="fill-current w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span className="lg:text-[20px]">Download</span>
        </button>
      </div>
      <div className="flex flex-col lg:w-1/2 ">
        <h1 className="font-Baskerville">
          Have Your Bot Featured On Discord Wiki!
        </h1>
        <p>
          {' '}
          Discord Wiki is a community driven server browser aimed to give users
          an ability to see what communities are like inside servers. <br></br>
          You can checkout text channels and browse the content posted by that
          server!
        </p>
        <h1 className="font-Baskerville">
          {' '}
          Want to have your server added? Just download the bot and add it to
          your respected server
        </h1>
        <ol>
          <li>1. Download the bot</li>
          <li>
            2. When the bot is in the server you want, all you need to do is
            type the slash command "/getmessages" (this requires administrator
            permissions) and the bot will fetch the last 50 messages in that
            text channel.
          </li>
          <li>
            {' '}
            3. Lastly, to update a channel on your Discord Wiki page, just type
            the command again. The bot will fetch the last 50 messages, and add
            them to your Discord Wiki preview. These messages will add up and,
            overtime, will give a comprehensive preview of your server.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Download;
