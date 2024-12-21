import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getVideoMovie } from "../../redux/actions/MovieAction";
import { useParams } from "react-router-dom";
function VideoFilm({ myVideo }) {
  const { id } = useParams();
  const playerRef = useRef(null);
  const videoMovie = useSelector((state) => state.video);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const [video, setVideo] = useState(null);
  useEffect(() => {
    dispatch(getVideoMovie(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (videoMovie && videoMovie.results && loading === false) {
      setVideo(videoMovie.results);
    }
  }, [videoMovie]);

  return <></>;
}

export default VideoFilm;
