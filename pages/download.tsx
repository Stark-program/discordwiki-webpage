import DownloadButton from '../components/DownloadButton';

const Download = () => {
  return (
    <div className="flex h-full p-8 overflow-hidden lg:justify-center flex-col-full bg-DW-gray text-DW-white font-Montserrat">
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <h1 className="my-4 text-2xl font-bold">About Discord Wiki</h1>
        <p className="text-center">
          {' '}
          Discord Wiki is a community driven server browser aimed to give users
          an ability to see what communities are like, and what they have to
          offer. You can checkout text channels and browse the content posted by
          that server.
        </p>
        <h1 className="text-2xl font-bold mt-14"> Add your server</h1>
        <ol className="">
          <div className="flex flex-col gap-2 py-6 m-auto mx-4 border-DW-lightGray">
            <div className="font-bold text-center bg-DW-gray">
              Download the bot
            </div>
            <DownloadButton />
          </div>
          <li className="py-4">
            1. When the bot is assigned to the server, all you need to do is
            type the slash command "/getmessages" inside the text-channels you
            would like to be featured (this requires administrator permissions,
            so if you are not an admin of your discord server, sorry but it wont
            work) and the bot will fetch the last 50 messages in that text
            channel.
          </li>
          <li className="py-4">
            {' '}
            2. Lastly, to update a channel on your Discord Wiki page, just type
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
