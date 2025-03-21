import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern and scalable websites with the latest technologies.",
  },
  {
    title: "UI/UX Design",
    description: "Create visually appealing and user-friendly interfaces.",
  },
  {
    title: "SEO Optimization",
    description: "Improve your website's ranking with advanced SEO strategies.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Develop powerful online stores with seamless user experience.",
  },
  {
    title: "Mobile App Development",
    description: "Create high-performance apps for iOS and Android platforms.",
  },
  {
    title: "Content Writing",
    description: "Craft engaging and high-quality content for your audience.",
  },
];

const Services = () => (
  <div className="bg-[#0E0E37] text-white flex flex-col items-center py-20 px-6 ">
    <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="p-6 bg-[#1A1A50] rounded-xl shadow-lg border border-gray-600 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
          <p className="text-gray-300 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
