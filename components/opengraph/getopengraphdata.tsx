import axios from 'axios';
import { useState, useEffect } from 'react';

export default function OpenGraph(props: { link: string }) {
  const link = props.link;
  const [openGraphData, setOpenGraphData] = useState({
    title: '',
    description: '',
    image: '',
    url: '',
  });

  useEffect(() => {
    async function getOgData() {
      const response = await axios.post('http://localhost:3000/opengraph', {
        url: link,
      });
      setOpenGraphData({
        title: response.data?.ogTitle
          ? response.data.ogTitle
          : response.data.ogSiteName,
        description: response.data?.ogDescription,
        image: response.data.ogImage?.url,
        url: response.data.ogUrl
          ? response.data.ogUrl
          : response.data.requestUrl,
      });
    }
    getOgData();
  }, [link]);

  function checkToRenderOpenGraphCard() {
    if (openGraphData.title === undefined) {
      return (
        <div className="flex flex-col max-w-2/3 lg:max-w-full ml-9 lg:ml-14 sm:w-1/2 md:w-1/3 ">
          <p className="text-sky-500 truncate">{openGraphData.url}</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col max-w-2/3 lg:max-w-full ml-9 lg:ml-14 sm:w-1/2 md:w-1/3 ">
          <p className="text-sky-500 truncate">{openGraphData.url}</p>
          <div className=" bg-DW-gray max-h-[600px] rounded">
            <div className="flex flex-col mx-4 h-full">
              <h1 className="text-sky-500 mt-2 font-Baskerville">
                {openGraphData.title}
              </h1>
              <p className="h-1/3 break-words text-DW-white mr-4 mt-2">
                {openGraphData.description}
              </p>
              <img
                src={openGraphData.image}
                className="max-h-[400px] w-full mt-2 mb-4 rounded"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  return <div>{checkToRenderOpenGraphCard()}</div>;
}
