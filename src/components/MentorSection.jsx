import React from 'react';

const MentorSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:pl-20 py-16">
      {/* Section Header */}
      <div className="mb-8 lg:mb-12 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
          Your Mentor for This Journey
        </h2>
        <p className="text-gray-600 text-base max-w-md mx-auto lg:mx-0">
          Bringing clarity, creativity, and real experience to the table.
        </p>
      </div>

      {/* Mentor Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        {/* Left Side - Mentor Image */}
        <div className="w-full max-w-md lg:max-w-none lg:w-1/2 lg:pr-24">
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 text-lg">Mentor img</span>
          </div>
        </div>

        {/* Right Side - Content Block */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Rajeev Mehta
          </h3>
          
          <p className="max-w-sm mx-auto lg:mx-0 text-gray-700 text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          <button className="bg-black text-white font-medium px-5 py-2.5 rounded-full text-sm hover:bg-gray-800 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;