import React from "react";

const FeaturedWork = () => {
  return (
    <div className="p-8">
      <div className="pb-12">
        <h1 className="text-6xl">Featured</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="flex space-x-4 rounded-3xl bg-gray-200 text-gray-950 hover:bg-blue-600 hover:text-white transition-all duration-300">
          <div className="max-w-3xl  p-4">
            <img
              src="https://dr.savee-cdn.com/things/6/5/3fa6a19f0a0c6653cf5726.webp"
              alt="featured work"
              className="object-fill rounded-3xl"
            />
          </div>
          <div className="flex flex-col w-full p-4">
            <div className="flex justify-end items-start text-9xl font-thin">
              <p className="text-blue-400 px-3">&#8599;</p>
            </div>
            <div className="flex justify-end left-0 bottom-0 h-full items-start flex-col space-y-4 pb-12">
              <h1 className="text-6xl">Analitic app</h1>
              <p className="text-lg max-w-2xl">
                The price is transparent and also competes with other flight
                services. The price is transparent and also competes with other
                flight services. The price is transparent and also competes with
                other flight services The price is transparent and also competes
                with other flight services
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse space-x-4 rounded-3xl bg-gray-200 text-gray-950 hover:bg-blue-600 hover:text-white transition-all duration-300">
          <div className="max-w-3xl  p-4">
            <img
              src="https://dr.savee-cdn.com/things/6/4/cfc7cd9c2c404ad740f1f8.webp"
              alt="featured work"
              className="object-fill rounded-3xl"
            />
          </div>
          <div className="flex flex-col w-full p-4">
            <div className="flex justify-end items-start text-9xl font-thin">
              <p className="text-blue-400 px-3">&#8599;</p>
            </div>
            <div className="flex justify-end left-0 bottom-0 h-full items-start flex-col space-y-4 pb-12">
              <h1 className="text-6xl">Analitic app</h1>
              <p className="text-lg max-w-2xl">
                The price is transparent and also competes with other flight
                services. The price is transparent and also competes with other
                flight services. The price is transparent and also competes with
                other flight services The price is transparent and also competes
                with other flight services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
