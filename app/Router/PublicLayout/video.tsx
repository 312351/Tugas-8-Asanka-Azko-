"use client";
import { useState } from "react";
import { FiPlay } from "react-icons/fi";

const Video = () => {
  const [isFullPlay, setIsFullPlay] = useState(false); 
  const [videoKey, setVideoKey] = useState(0); 

  const handlePlayFull = () => {
    setIsFullPlay(true);
    setVideoKey(prev => prev + 1);
  };

  return (
    <section className="w-full h-screen  relative ">
      {isFullPlay ? (
        <iframe
          key={videoKey}
          className="w-full h-full"
          src="https://www.youtube.com/embed/ZGA4yS91MXY?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-full relative flex justify-center items-center bg-black">
          <iframe
            key={videoKey}
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZGA4yS91MXY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 flex flex-col justify-end pb-8 items-center text-white text-center bg-black bg-opacity-30">
            <button
              onClick={handlePlayFull}
              className="py-2 px-6 text-[15px] font-bold flex flex-row gap-x-2 justify-center items-center rounded-full btn-background"
            >
              <FiPlay /> Putar Video
            </button>
            <div className="mt-4">
              <p className="text-[25px]">Kami hadir untuk</p>
              <h3 className="text-[35px] font-bold">
                membuka kemungkinan <br /> hidup yang lebih baik
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
