import React from "react";

const Work = () => {
  return (
    <div className="px-16 py-32">
      <div className="flex flex-col space-y-3 pb-16">
        <h1 className="text-6xl capitalize font-medium">Work</h1>
        <p className="max-w-lg text-lg">
          Driven by innovation and human behaviour, our web design agency is
          changing the way brands connect with audiences in a digital world
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col  transition-all duration-300 hover:scale-100 scale-95">
          <a href="/" className=" ">
            <div className="bg-blue-600 text-gray-50 h-[270px] py-10 flex flex-col space-y-4 px-8 rounded-t-3xl shadow-2xl">
              <h2 className="text-4xl">Urban Oasis</h2>
              <p className="text-lg leading-tight max-w-sm">
                Driven by innovation and human behaviour. Talking about the
                various tech around.
              </p>
              <ul className="flex space-x-2">
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Random Forests
                </li>
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Machine Learning
                </li>
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Google Cloud
                </li>
              </ul>
            </div>
            <div className="h-[270px] overflow-hidden relative rounded-b-3xl">
              <img
                src="https://dr.savee-cdn.com/things/6/1/04064168dad963d80cc815.webp"
                alt="architecture"
                className="object-fill opacity-50 absolute"
              />

              <h2 className="absolute inset-0 flex justify-center items-center text-gray-50 text-2xl transition-all duration-300 bg-transparent">
                View Project
              </h2>
            </div>
          </a>
        </div>
        <div className="flex flex-col  transition-all duration-300 scale-105 hover:scale-110">
          <a href="/" className=" ">
            <div className="h-[270px] overflow-hidden rounded-t-3xl shadow-2xl relative">
              <img
                src="https://dr.savee-cdn.com/things/6/5/6ddbd35fb5af739be81568.webp"
                alt="architecture"
                className="object-fill opacity-50 absolute"
              />

              <h2 className="absolute inset-0 flex justify-center items-center text-gray-50 text-2xl transition-all duration-300 bg-transparent">
                View Project
              </h2>
            </div>
            <div className="bg-blue-600 text-gray-50 h-[270px] py-10 flex flex-col space-y-4 px-8 rounded-b-3xl">
              <h2 className="text-4xl">Urban Oasis</h2>
              <p className="text-lg leading-tight max-w-sm ">
                Driven by innovation and human behaviour. Talking about the
                various tech around.
              </p>
              <ul className="flex space-x-2">
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Random Forests
                </li>
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Machine Learning
                </li>
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Google Cloud
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div className="flex flex-col  transition-all duration-300 hover:scale-100 scale-95">
          <a href="/" className=" ">
            <div className="bg-blue-600 text-gray-50 h-[270px] py-10 flex flex-col space-y-4 px-8 rounded-t-3xl shadow-2xl">
              <h2 className="text-4xl">Urban Oasis</h2>
              <p className="text-lg leading-tight max-w-sm">
                Driven by innovation and human behaviour. Talking about the
                various tech around.
              </p>
              <ul className="flex space-x-2 ">
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Random Forests
                </li>
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Machine Learning
                </li>
                <li className="border border-gray-50 px-2 py-0.5 rounded-full">
                  Google Cloud
                </li>
              </ul>
            </div>
            <div className="h-[270px] overflow-hidden rounded-b-3xl relative">
              <img
                src="https://dr.savee-cdn.com/things/5/e/6a1aaf3197bc0473dc8297.webp"
                alt="architecture"
                className="object-fill opacity-50 absolute"
              />

              <h2 className="absolute inset-0 flex justify-center items-center text-gray-50 text-2xl transition-all duration-300 bg-transparent">
                View Project
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
