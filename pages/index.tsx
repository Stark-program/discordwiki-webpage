import type { NextPage } from "next";
import Link from "next/link";
import { tsParticles } from "tsparticles-engine";
import { SiDiscord } from "react-icons/si";

// tsParticles.load("tsparticles", {
//   background: {
//     color: "#0d47a1",
//   },
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       resize: true,
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         duration: 2,
//         opacity: 0.8,
//         size: 40,
//       },
//       push: {
//         quantity: 4,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#ffffff",
//     },
//     links: {
//       color: "#ffffff",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     collisions: {
//       enable: true,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outMode: "bounce",
//       random: false,
//       speed: 6,
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//       value: 80,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       random: true,
//       value: 5,
//     },
//   },
// });

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      <div className="h-2/3 lg:h-1/2">
        <div className="flex flex-row">
          <span className="flex justify-center items-center">
            <SiDiscord className="h-10 w-10 lg:h-16 lg:w-16" />
          </span>
          <h1 className="text-[60px] font-['PT_Sans'] lg:text-[100px]">
            Discord Wiki
          </h1>
        </div>
        <p className="text-center font-['PT_Sans'] lg:text-[20px]">
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
    </div>
  );
};

export default Home;
