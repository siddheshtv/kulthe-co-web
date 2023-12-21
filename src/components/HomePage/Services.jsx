import React from "react";

const Services = () => {
  // Array of service objects
  const services = [
    { name: "Machine Learning", icon: "&#8599;" },
    { name: "Deep Learning", icon: "&#8599;" },
    { name: "Software Development", icon: "&#8599;" },
    { name: "Web Development", icon: "&#8599;" },
  ];

  return (
    <div className="p-8">
      <div className="py-12">
        <h1 className="text-7xl">Services</h1>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col my-5 rounded-3xl mx-5 transition-all duration-300 ${
            index === 1
              ? "bg-blue-600 text-gray-50 hover:bg-gray-900 hover:text-gray-50"
              : "bg-gray-50 text-gray-950 hover:bg-blue-600 hover:text-gray-50"
          }`}
        >
          <div className="p-16 grid grid-cols-12 text-5xl" key={index}>
            <p className="col-span-11">{service.name}</p>
            <div
              className="col-span-1 font-light"
              dangerouslySetInnerHTML={{ __html: service.icon }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
