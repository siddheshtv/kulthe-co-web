import React from "react";

const Hero = () => {
  return (
    <div className="px-8 min-h-screen -my-4 justify-center flex flex-col space-y-4">
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
    </div>
  );
};

export default Hero;
