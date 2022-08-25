import { useRouter } from "next/router";
import { useEffect } from "react";
const axios = require("axios").default;

export default function Guild() {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    async function getGuildData() {
      const response = await axios.get(`http://localhost:3000/guilds/${slug}`);
      console.log(response);
    }
    getGuildData();
  }, []);

  return <h1>Guild Slug: {slug}</h1>;
}
