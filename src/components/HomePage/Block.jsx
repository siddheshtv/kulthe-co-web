import React from "react";

const Block = () => {
  return (
    <div className="w-full -mt-16">
      <div className="grid grid-cols-4 bg-blue-600 rounded-3xl m-8 items-center justify-center">
        <div className="col-span-1 flex justify-center items-center">
          <ul className="flex flex-col space-y-6 ">
            <li className="flex flex-col space-y-1 italic ">
              <p className="text-8xl font-bold tracking-tighter">136+</p>
              <p className="text-lg">Projects</p>
            </li>
            <li className="flex flex-col space-y-1 italic">
              <p className="text-8xl font-bold tracking-tighter">74+</p>
              <p className="text-lg">Clients Served</p>
            </li>
            <li className="flex flex-col space-y-1 italic">
              <p className="text-8xl font-bold tracking-tighter">18</p>
              <p className="text-lg">Outstanding Employees</p>
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex flex-col justify-end items-end p-24 text-right space-y-12">
          <div className="">
            <h2 className="text-8xl opacity-60">
              The best ever software agency is we,{" "}
              <span className="font-bold">Kulthe</span>, have served more than
              32 years well and certainly makes you comfortable and safe.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
