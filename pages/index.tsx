import type { NextPage } from "next";
import Link from "next/link";
import { tsParticles } from "tsparticles-engine";
import { SiDiscord } from "react-icons/si";
import ParticlesComponent from "../components/messages/particles";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col ">
      <div className="h-2/3 lg:h-1/2 z-40">
        <div className="flex flex-row">
          <span className="flex justify-center items-center">
            <SiDiscord
              className="h-10 w-10 mr-4 lg:h-16 lg:w-16"
              color="white"
            />
          </span>
          <h1 className="text-[60px] font-['PT_Sans'] lg:text-[100px] text-[#EAECEE] ">
            Discord Wiki
          </h1>
        </div>
        <p className="text-center font-['PT_Sans'] lg:text-[20px] text-[#EAECEE] ">
          Find your community.
        </p>
        <div className="flex justify-center mt-12 lg:mt-24">
          <Link href="/guilds">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Click here to begin browsing
            </button>
          </Link>
        </div>
      </div>
      <ParticlesComponent />
    </div>
  );
};

export default Home;
