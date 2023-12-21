import React from "react";
import bgvideo from "../../assets/bg-video.webm";

const Hero = () => {
  return (
    <div className="px-16 min-h-screen -my-4 justify-center flex flex-col space-y-4 relative z-0">
      <div className="max-w-4xl">
        <h1 className="text-7xl font-medium">
          Say goodbye to guesswork, take data driven decisions
        </h1>
      </div>
      <div>
        <p className="text-lg max-w-2xl text-gray-200">
          From chaos to clarity, Kulthe crafts bespoke AI/ML and deep learning
          solutions that bring order to your data and drive transformative
          growth.
        </p>
      </div>
      <div>
        <video
          src={bgvideo}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
