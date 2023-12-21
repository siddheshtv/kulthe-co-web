import React from "react";
import bgvideo from "../../assets/bg-video.webm";

const Hero = () => {
  return (
    <div className="px-8 min-h-screen -my-4 justify-center flex flex-col space-y-4 relative z-0">
      <div className="max-w-3xl">
        <h1 className="text-7xl font-medium">
          Designing the future of brand identity.
        </h1>
      </div>
      <div>
        <p className="text-lg max-w-2xl text-gray-300">
          Doozy is a tiny design studio located in Aarhus, Denmark, dedicated to
          redefining brand identity for the new digital age. We design for the
          companies of today to build the vision of tomorrow.
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
