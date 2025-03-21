import React from "react";
import Hero_Banner from "../../public/Hero_Banner.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/Hero_Banner.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-blue-400">Landing Page</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-6 opacity-80">
            Experience the future of web development.
          </p>

          {/* CTA Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
