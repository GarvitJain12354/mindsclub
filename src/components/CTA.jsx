import React from 'react';

const CTA = () => {
  const audienceTags = [
    'Graphic Designer',
    'UI/UX Designers',
    'Brand Owners',
    'Branding Students',
    'Creative Directors',
    'Brand Owners',
    'Anyone interested in learning branding'
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-20 md:pt-28 pb-16 md:py-16">
      {/* Part 1: Callback CTA Section */}
      <div className="text-center mb-10 sm:mb-16 md:mb-28 max-w-full sm:max-w-[30vw] mx-auto">
        <h2 className="text-xl sm:text-xl md:text-3xl text-black mb-6 max-w-xs sm:max-w-lg mx-auto leading-tight">
          Confused about the workshop details? We've got you.
        </h2>
        <button
          className="text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
          style={{
            background: "linear-gradient(to right, #FF8C21, #FFE040)"
          }}
        >
          Request Callback
        </button>
      </div>

      {/* Part 2: Audience Category Section */}
      <div className="max-w-full md:max-w-4xl mx-auto bg-[#FFFE81] rounded-xl sm:rounded-3xl p-5 md:p-10">
        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black text-center mb-6 sm:mb-8">
          Who can join this workshop?
        </h3>

        {/* Audience Tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 sm:mb-8">
          {audienceTags.map((tag, index) => (
            <span
              key={index}
              className="bg-transparent border-2 border-black text-black px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-sm md:text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Join Workshop Button */}
      <div className="text-center mt-8">
        <button className="bg-black text-white font-medium w-auto md:w-auto px-8 py-2 rounded-full hover:bg-gray-800 transition-colors text-base">
          Join the workshop
        </button>
      </div>
    </div>
  );
};

export default CTA;