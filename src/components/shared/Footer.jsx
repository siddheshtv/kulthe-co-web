import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="py-8">
      <div className="mx-16 rounded-3xl bg-gray-900 p-12 flex flex-col space-y-2 relative">
        <div className="flex justify-between">
          <div className="">
            <span className="text-9xl">
              It's <span className="font-bold italic">Easy —</span>
            </span>
          </div>
          <div className="text-gray-500">
            <h1 className="text-xl">
              Built with &hearts; from &nbsp;🇺🇸 &nbsp; /&nbsp; 🇮🇳 &nbsp;/&nbsp;
              🇬🇧
            </h1>
          </div>
        </div>
        <div className="flex justify-start items-start space-x-4">
          <div className="flex items-stretch flex-col space-y-12 w-full">
            <span className="text-9xl pb-12 mt-4">
              to{" "}
              <a href="//">
                <span className="bg-blue-600 hover:text-gray-950 hover:bg-gray-50 px-9 py-2 italic font-bold rounded-full transition-all duration-300">
                  Get Started &rarr;
                </span>
              </a>
            </span>
            <div className="flex space-x-12 items-end pt-6 w-full justify-between">
              <div className="flex flex-col space-y-2 pl-3">
                <h1 className="text-5xl font-medium">Kulthe</h1>
                <p className="">— &nbsp;AI Reimagined</p>
              </div>
              <div className="flex flex-col space-y-2 pl-3">
                <p className="text-gray-500">
                  &copy; {year}, Kulthe Media, Limited
                </p>
                <p className="text-gray-500 max-w-md">
                  The best ever software agency is we,{" "}
                  <span className="font-bold">Kulthe</span>, have served more
                  than 32 years well and certainly makes you comfortable and
                  safe.
                </p>
              </div>
              <div className="flex space-x-2 text-gray-500">
                <a href="/">
                  <p className="hover:underline underline-offset-8">
                    Let's talk
                  </p>
                </a>
                <a href="/">
                  <p className="hover:underline underline-offset-8">Home</p>
                </a>
                <a href="/">
                  <p className="hover:underline underline-offset-8">Work</p>
                </a>
                <a href="/">
                  <p className="hover:underline underline-offset-8">About</p>
                </a>
                <a href="/">
                  <p className="hover:underline underline-offset-8">Privacy</p>
                </a>
                <a href="/">
                  <p className="hover:underline underline-offset-8">Terms</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
