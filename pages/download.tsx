import DownloadButton from '../components/DownloadButton';

const Download = () => {
  return (
    <div className="flex flex-1 h-auto min-w-full px-8 m-auto lg:justify-center flex-col-full bg-DW-gray text-DW-white font-Montserrat">
      <div className="flex flex-col items-center justify-center text-center 2xl:gap-20 2xl:flex-row lg:my-24 lg:rounded-lg lg:px-28 lg:bg-DW-darkGray 2xl:3/4 lg:w-11/12">
        <div>
          <h1 className="my-4 text-2xl font-bold lg:text-6xl min-w-max ">
            About Discord Wiki
          </h1>
          <p className="w-auto text-center 2xl:text-3xl lg:text-2xl">
            {' '}
            Discord Wiki is a community driven server browser aimed to give
            users an ability to see what communities are like, and what they
            have to offer. You can checkout text channels and browse the content
            posted by that server.
          </p>
        </div>

        <div className="hidden my-20 border 2xl:inline h-3/4 border-DW-lightGray"></div>
        <div>
          <h1 className="text-2xl font-bold min-w-max mt-14 lg:text-6xl">
            {' '}
            Add your server
          </h1>
          <ol className="">
            <div className="flex flex-col gap-2 py-6 m-auto mx-4 border-DW-lightGray">
              <div className="text-2xl font-bold text-center lg">
                Download the bot
              </div>
              <DownloadButton />
            </div>
            <li className="py-4 text-left">
              Invite the bot to your server by clicking the button above.
            </li>
            <li className="w-3/4 py-4 text-left lg:w-full ">
              {' '}
              Use the command "/getmessages" in the text channels you would like
              to be featured. (This will add the last 50 messages to your wiki)
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Download;
