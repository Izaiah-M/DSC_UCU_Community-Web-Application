import { useEffect, useState } from "react";
import apiRequests from "../../../utils/Config";
import { RandomYoutubeCard } from "./RandomYoutubeCard";

export const RandonYoutube = () => {
  const [randomVid, setRandomVid] = useState([]);

  const getRand = async () => {
    const results = await apiRequests.getRandomvideo();

    console.log(results);
    setRandomVid(results);
  };

  useEffect(() => {
    getRand();
  }, []);

  return (
    <div>
      <p style={{ fontWeight: "bolder" }}>Quick learn</p>
      {randomVid.map((vid, key) => {
        return (
          <RandomYoutubeCard
            key={key + 1}
            thumbnail={vid.thumbnail}
            title={vid.title}
            videoId={vid.videoId}
          />
        );
      })}
    </div>
  );
};
