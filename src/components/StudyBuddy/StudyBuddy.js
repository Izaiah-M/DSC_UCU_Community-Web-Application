import { NavBar } from "../Dashboard/NavBar/NavBar";
import { StudyBuddyCard } from "./StudyBuddyCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiRequests from "../../utils/Config";
import { Grid } from "@nextui-org/react";

import "./StudyBuddy.css";

export const StudyBuddy = () => {
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);

  const getYouTube = async () => {
    const query = "Free code camp";
    const results = await apiRequests.getVideos(query);

    // console.log(results);

    setVideos(results);
  };

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }

    getYouTube();
  }, []);

  return (
    <>
      <NavBar />

      <Grid.Container justify="center" gap={3}>
        {videos.map((video, key) => {
          return (
            <Grid xs={12} sm={5} key={key + 1} className="card">
              <StudyBuddyCard
                thumbnail={video.thumbnail}
                videoId={video.videoId}
                title={video.title}
              />
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
};
