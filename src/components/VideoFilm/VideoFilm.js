import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
function VideoFilm({ myVideo }) {
  const playerRef = useRef(null); // مرجع لمشغل الفيديو

  useEffect(() => {
    const player = new Plyr(playerRef.current); // إنشاء مشغل Plyr باستخدام المرجع
    return () => {
      player.destroy(); // تدمير المشغل عند تدمير المكون
    };
  }, []);
  return (
    <video ref={playerRef} controls>
      <source src={myVideo} type="video/mp4" />
    </video>
  );
}

export default VideoFilm;
