import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>This is Wiki homepage</h1>
      <div>
        <Link href="/guilds">Click here for guilds</Link>
      </div>
    </div>
  );
};

export default Home;
