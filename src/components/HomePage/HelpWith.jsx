import React from "react";
import Marquee from "react-fast-marquee";

const HelpWith = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="bg-[#222] flex justify-center items-center text-gray-50 col-span-2 py-3">
        <h1 className="text-4xl px-4">Things we can help with</h1>
      </div>
      <div className="bg-gray-200 text-gray-950 lowercase col-span-4 py-5">
        <Marquee autoFill={true} pauseOnHover={true} className="py-3">
          <code className="text-6xl tracking-tighter font-normal mx-4">
            Machine Learning
          </code>
          <p className="text-4xl mx-4">•</p>
          <code className="text-6xl tracking-tighter font-normal mx-4">
            Deep Learning
          </code>
          <p className="text-4xl mx-4">•</p>
          <code className="text-6xl tracking-tighter font-normal mx-4">
            Artificial Intelligence
          </code>
          <p className="text-4xl mx-4">•</p>
          <code className="text-6xl tracking-tighter font-normal mx-4">
            Transfer Learning
          </code>
          <p className="text-4xl mx-4">•</p>
          <code className="text-6xl tracking-tighter font-normal mx-4">
            NLP
          </code>
          <p className="text-4xl mx-4">•</p>
          <code className="text-6xl tracking-tighter font-normal mx-4">
            Computer Vision
          </code>
          <p className="text-4xl mx-4">•</p>
        </Marquee>
      </div>
    </div>
  );
};

export default HelpWith;
