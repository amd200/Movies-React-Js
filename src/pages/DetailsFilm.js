import React from "react";
import Banner from "../components/Banner/Banner";
import VideoFilm from "../components/VideoFilm/VideoFilm";
import myVideo from "../assets/videos/video.mp4";

function DetailsFilm() {
  return (
    <>
      <Banner />
      <div className="container">
        <VideoFilm myVideo={myVideo} />
      </div>
    </>
  );
}

export default DetailsFilm;
