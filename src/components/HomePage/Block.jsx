import React from "react";

const Block = () => {
  return (
    <div className="w-full -mt-24 relative z-0">
      <div className="grid grid-cols-4 bg-blue-600 rounded-3xl m-8 items-center justify-center">
        <div className="col-span-1 flex justify-center items-center">
          <ul className="flex flex-col space-y-6 ">
            <li className="flex flex-col space-y-1 italic ">
              <h1 className="text-8xl font-bold tracking-tight">116+</h1>
              <h1 className="text-lg">Enterprise Projects</h1>
            </li>
            <li className="flex flex-col space-y-1 italic">
              <h1 className="text-8xl font-bold tracking-tight">87+</h1>
              <h1 className="text-lg">Clients Served</h1>
            </li>
            <li className="flex flex-col space-y-1 italic">
              <h1 className="text-8xl font-bold tracking-tight">$114K</h1>
              <h1 className="text-lg">Saved By Clients</h1>
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex flex-col justify-end items-end p-24 text-right space-y-12">
          <div className="">
            <h2 className="text-8xl opacity-60">
              <span className="font-bold">Kulthe</span> has been at the
              forefront of AI, helping many companies achieve achieve atleast{" "}
              <span className="font-bold">21.8% ROI</span> through their
              solutions
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
