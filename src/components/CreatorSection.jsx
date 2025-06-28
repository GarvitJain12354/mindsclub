import React, { useRef, useState, useEffect } from 'react';

const CreatorSection = () => {
  // Sample video URLs - only 4 videos
  const videoSources = [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  ];

  // For horizontal scroll and navigation
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollBy = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="px-4 md:px-20 py-10 md:py-16 relative">
      {/* Section Header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Hear It From The Creators
        </h2>
        <p className="text-gray-900 text-sm md:text-base max-w-sm mx-auto md:mx-0">
          Unfiltered feedback from real participants who've been there.
        </p>
      </div>

      {/* Video Cards */}
      <div>
        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex md:grid gap-4 md:gap-6 overflow-x-auto md:overflow-visible md:grid-cols-2 lg:grid-cols-4 pb-2 md:pb-0 scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {videoSources.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:flex-shrink md:w-full w-[260px] h-[50vh] md:h-[70vh] bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows for mobile only if scrollable */}
      {(canScrollLeft || canScrollRight) && (
        <div className="md:hidden flex gap-3 absolute bottom-0 right-4 z-20">
          <button
            onClick={() => scrollBy(-260)}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scrollBy(260)}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CreatorSection;