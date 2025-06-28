import React from "react";
import BookingBar from "./BookingBar";
import Navbar from "./Navbar";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden pb-10">
      {/* Navbar (glassmorphism, scrolls with Hero) */}
      <Navbar />
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div
          className={`w-full absolute  px-8  max-md:left-0 ${
            window.innerWidth > 1500 ? "left-32" : "left-28"
          }`}
        >
          <MaxWidthWrapper className="h-full">
            <div className="max-w-2xl text-center sm:text-left pt-36 md:pt-0">
              <h1 className="text-white text-5xl max-md:text-3xl leading-tight font-satoshi font-black">
                Goa Edition
              </h1>
              <h2 className="text-white text-5xl max-md:text-3xl leading-tight mb-2 md:mb-8 font-satoshi font-bold">
                Branding & Beyond.
              </h2>
              <p className="text-white text-lg  max-md:text-base leading-relaxed mb-5 max-w-xl font-satoshi font-medium">
                One beach, three skincare brands, 25 creative minds
                <br className="hidden lg:block" />
                and four unforgettable days
              </p>
              <div className="flex flex-wrap gap-2 md:gap-6 justify-center sm:justify-start">
                <button className="bg-[#FFFE81] hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 text-base max-md:text-xs">
                  Secure Your Spot
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 text-base max-md:text-xs flex items-center">
                  <span className="mr-3">▶</span>Watch Trailer
                </button>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>

      {/* Booking Bar */}
      <BookingBar />
    </div>
  );
};

export default Hero;
