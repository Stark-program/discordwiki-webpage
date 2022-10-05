import type { NextPage } from 'next';
import Link from 'next/link';
import { tsParticles } from 'tsparticles-engine';
import { SiDiscord } from 'react-icons/si';
import ParticlesComponent from '../components/messages/particles';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#2C2F33]">
      <div className="z-40 h-2/3 lg:h-1/2">
        <div className="flex flex-row">
          <span className="flex items-center justify-center">
            <SiDiscord
              className="w-10 h-10 mr-2 lg:h-16 lg:w-16"
              color="white"
            />
          </span>
          <h1 className="text-[45px] font-Baskerville text-center lg:text-[100px] text-DW-white ">
            Discord Wiki
          </h1>
        </div>
        <p className="text-center font-WorkSans lg:text-[20px] text-DW-white ">
          Find your community.
        </p>
        <div className="flex justify-center mt-12 lg:mt-24">
          <Link href="/guilds">
            <button className="px-4 py-2 font-bold text-gray-800 border border-gray-400 rounded shadow font-Baskerville bg-DW-white hover:bg-gray-100 transition ease-in-out delay-100">
              Click here to begin browsing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
