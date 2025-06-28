import React from 'react';

const BookingBar = () => {
  return (
    <div className="w-full fixed bottom-4 left-0 z-50">
      <div className="w-auto mx-0 sm:mx-4 md:mx-auto">
        <div className="w-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-[#34251F] bg-opacity-80 backdrop-blur-sm rounded-full py-1.5 md:py-1.5 px-1.5 md:px-1.5 shadow-2xl w-auto">
            <div className="flex justify-between items-center">
              {/* Logo - hidden on small devices, visible on md+ */}
              <div className="hidden md:flex items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  {/* Replace this img src with your actual logo path */}
                  <img 
                    src="/images/logo-icon-white.svg"
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex items-center gap-x-1.5 md:gap-x-4 w-auto justify-center md:justify-end">
                <button className="bg-transparent border border-white border-opacity-50 text-white hover:bg-white hover:bg-opacity-20 px-1 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 text-[12px] md:text-sm font-satoshi font-medium">
                  Download Brochure
                </button>
                <button className="bg-transparent border border-white border-opacity-50 text-white hover:bg-white hover:bg-opacity-20 px-1 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 text-[12px] md:text-sm font-satoshi font-medium">
                  Request Callback
                </button>
                <button className="bg-[#FFFE81] hover:bg-yellow-500 text-black px-2 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 text-[12px] md:text-sm font-satoshi font-bold">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;