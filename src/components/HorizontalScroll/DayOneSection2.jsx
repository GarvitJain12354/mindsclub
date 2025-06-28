import React from 'react';

const DayOneSection2 = () => {
  return (
    <div className="w-full h-screen bg-[#FFFE81] relative overflow-hidden">
      {/* Mobile Layout (xs and sm) */}
      <div className="w-full block md:hidden h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-start px-4 pt-24 pb-2">
          {/* Left: Day Title */}
          <div>
            <h1 className="text-xl font-bold text-black mb-1">
              DAY ONE
            </h1>
            <div className="flex items-center gap-2 text-xs text-black font-medium">
              <span className="text-sm font-bold">🧠</span>
              <span>Think & Ideate</span>
            </div>
          </div>
          
          {/* Right: Pagination Circles */}
          <div className="flex gap-2 mt-1">
            <div className="w-2 h-2 rounded-full border border-black bg-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full border border-black bg-transparent"></div>
            <div className="w-2 h-2 rounded-full border border-black bg-transparent"></div>
          </div>
        </div>

        {/* Main Content Area - Single Column */}
        <div className="w-full h-full flex-1 flex flex-row items-center justify-between pb-20">
          
          {/* Left aligned - Brainstorming Session Section */}
          <div className="w-1/2 h-full flex flex-col items-start justify-end pb-7">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
              alt="Brainstorming session"
              className="w-full max-w-[150px] h-[240px] rounded-tr-lg rounded-br-lg object-cover shadow-lg mb-3"
            />
            <p className="max-w-[250px] text-start font-medium text-sm text-black leading-relaxed">
              Collaborative<br />
              brainstorming &<br />
              idea generation.
            </p>
          </div>

          {/* Right aligned - Creative Workshop Section */}
          <div className="w-1/2 h-full flex flex-col items-end justify-start pt-8">
            <img
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=350&fit=crop&crop=center"
              alt="Creative workshop"
              className="w-full max-w-[150px] h-[240px] rounded-tl-lg rounded-bl-lg object-cover shadow-lg mb-3"
            />
            <p className="pr-8 text-start font-medium text-sm text-black leading-relaxed">
              Mind mapping &<br />
              creative exercises.
            </p>
          </div>
        </div>

        {/* Drag Slider Section */}
        <div className="flex flex-col items-center mt-4">
          <div className="text-xs font-medium text-black mb-2 self-end mr-4">
            Drag →
          </div>
          <div className="relative w-[80px] h-2 bg-white/60 rounded-full">
            <div className="absolute left-6 top-0.5 w-5 h-1 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#E55A2B] border-t border-white/30 pt-2 pb-3">
          <div className="flex justify-around px-4">
            <span className="text-xs font-medium text-black/70 tracking-wider">
              ARRIVAL
            </span>
            <div className="relative">
              <span className="text-xs font-bold text-black tracking-wider">
                THINK
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-black/70 tracking-wider">
              SHOOT
            </span>
            <span className="text-xs font-medium text-black/70 tracking-wider">
              CREATE
            </span>
          </div>
        </div>
      </div>


      {/* ------------------------------------------------------------------------------------------------------------- */}

      {/* Desktop Layout (md and above) */}
      <div className="hidden md:block px-8 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16 2xl:px-20 2xl:py-20 h-full">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6 lg:mb-8">
          {/* Left: Day Title */}
          <div className="py-3 lg:py-4 xl:py-5">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2">
              DAY ONE
            </h1>
            <div className="flex items-center gap-2 text-base lg:text-lg text-black font-medium">
              <span className="text-xl lg:text-2xl font-bold">🧠</span>
              <span>Think & Ideate</span>
            </div>
          </div>
          
          {/* Right: Pagination Circles */}
          <div className="flex gap-3 mt-0 py-3 lg:py-4 xl:py-5">
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-black bg-transparent"></div>
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-black bg-transparent"></div>
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-black bg-transparent"></div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex justify-between items-center gap-8 lg:gap-10 xl:gap-12 mb-12 lg:mb-16">
          
          {/* Left: Creative Workshop */}
          <div className="w-1/2 flex flex-col items-start">
            <div className="flex flex-col items-center pl-6 lg:pl-8 xl:pl-16 pb-6 lg:pb-8 xl:pb-16 mt-6 lg:mt-8 xl:mt-14">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=350&fit=crop&crop=center"
                alt="Creative workshop"
                className="w-[150px] h-[170px] lg:w-[170px] lg:h-[190px] xl:w-[200px] xl:h-[220px] 2xl:w-[220px] 2xl:h-[250px] rounded-xl object-cover shadow-lg"
              />
              <p className="text-center font-medium text-base lg:text-lg xl:text-xl text-black max-w-[180px] lg:max-w-[200px] xl:max-w-[240px] mt-4">
                Mind mapping &<br />
                creative exercises.
              </p>
            </div>
          </div>

          {/* Right: Brainstorming Session */}
          <div className="w-1/2 flex flex-col items-end">
            <div className="flex flex-col items-center pr-6 lg:pr-8 xl:pr-16 mt-3 lg:mt-4 xl:mt-8">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
                alt="Brainstorming session"
                className="w-[200px] h-[140px] lg:w-[220px] lg:h-[150px] xl:w-[250px] xl:h-[180px] 2xl:w-[280px] 2xl:h-[200px] rounded-xl object-cover shadow-lg"
              />
              <p className="text-center font-medium text-base lg:text-lg xl:text-xl text-black max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] mt-4">
                Collaborative brainstorming<br />
                & idea generation.
              </p>
            </div>
          </div>
        </div>

        {/* Drag Slider Section */}
        <div className="flex flex-col items-center mb-8 lg:mb-10">
          <div className="text-base lg:text-lg font-medium text-black mb-3 self-end mr-6 lg:mr-8">
            Drag →
          </div>
          <div className="relative w-[100px] lg:w-[120px] xl:w-[140px] h-3 lg:h-3.5 bg-white/60 rounded-full">
            <div className="absolute left-6 lg:left-8 xl:left-10 top-0.5 w-7 lg:w-8 xl:w-9 h-2 lg:h-2.5 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FFFE81] border-t border-white/30 pt-4 pb-6">
          <div className="flex justify-around px-8 lg:px-12 xl:px-16 2xl:px-20">
            <span className="text-base lg:text-lg font-medium text-black/70 tracking-wider">
              ARRIVAL
            </span>
            <div className="relative">
              <span className="text-base lg:text-lg font-bold text-black tracking-wider">
                THINK
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-base lg:text-lg font-medium text-black/70 tracking-wider">
              SHOOT
            </span>
            <span className="text-base lg:text-lg font-medium text-black/70 tracking-wider">
              DESIGN & CREATE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayOneSection2;