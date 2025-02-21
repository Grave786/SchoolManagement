import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          alt="Education Background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transform Your School Management
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Streamline administrative tasks, enhance communication, and improve learning outcomes with our comprehensive school management solution.
        </p>
        <div className="mt-10">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
