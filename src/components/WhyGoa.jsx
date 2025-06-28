import React, { useState, useRef, useEffect } from "react";

const WhyGoa = () => {
  const [hoveredCard, setHoveredCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      name: "Natural",
      subtitle: "NATURE'S LIGHT STUDIO",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
    },
    {
      name: "Inspire",
      subtitle: "IGNITE YOUR PASSION",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=center",
    },
    {
      name: "Aesthetic",
      subtitle: "ART IN EVERY FRAME",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    },
    {
      name: "Narrative",
      subtitle: "STORIES UNFOLD",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
    },
  ];

  // Check if scrolling is possible
  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const canScrollL = container.scrollLeft > 0;
      const canScrollR =
        container.scrollLeft < container.scrollWidth - container.clientWidth;
      setCanScrollLeft(canScrollL);
      setCanScrollRight(canScrollR);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const getCardWidth = (index) => {
    if (hoveredCard === null) {
      // First card is pre-expanded by default
      return index === 0 ? "40vw" : "220px";
    }
    return hoveredCard === index ? "40vw" : "220px";
  };

  const getTextColor = (index) => {
    // Adjust text color based on image brightness
    const darkImageIndices = [1, 3]; // Images with darker backgrounds
    return darkImageIndices.includes(index) ? "text-white" : "text-white";
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollability, 300); // Check after scroll animation
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollability, 300); // Check after scroll animation
    }
  };

  // Check if navigation buttons should be visible (only if content overflows)
  const shouldShowNavigation = () => {
    if (!scrollContainerRef.current) return false;
    const container = scrollContainerRef.current;
    return container.scrollWidth > container.clientWidth;
  };

  return (
    <div className="min-h-[42vh] md:min-h-[60vh] md:min-h-screen mb-10">
      {/* Header Section */}
      <div className="pt-0 md:pt-16 pb-6 max-w-2xl text-center md:text-left pl-0 md:pl-10 mb-10">
        <h1 className="text-4xl font-satoshi font-bold text-gray-900 mb-3 tracking-tight">
          Why Goa?
        </h1>
        <p className="max-w-[60%] sm:max-w-[400px] md:max-w-[400px] text-sm sm:text-base md:text-base text-gray-900 leading-relaxed opacity-0 animate-fade-in-delay mx-auto md:mx-0 text-center md:text-left">
          Goa gives you the space to think louder, live slower, and create
          deeper.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative">
        {/* Navigation Arrows - Only show if scrollable */}
        {shouldShowNavigation() && (
          <div className="absolute right-3 -top-10 md:right-8 md:-top-14 z-20 flex gap-2 md:gap-3">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-8 h-8 md:w-12 md:h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white bg-opacity-80 hover:bg-opacity-90 text-gray-800 hover:text-gray-900 shadow-lg hover:shadow-xl hover:scale-110"
                  : "bg-gray-200 bg-opacity-50 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-8 h-8 md:w-12 md:h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-white bg-opacity-80 hover:bg-opacity-90 text-gray-800 hover:text-gray-900 shadow-lg hover:shadow-xl hover:scale-110"
                  : "bg-gray-200 bg-opacity-50 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 pl-4 md:pl-12 pr-4 md:pr-8 overflow-x-auto scrollbar-hide max-md:pl-10"
          style={{
            marginLeft: "-20px", // Less cropping for mobile
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onScroll={checkScrollability}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500   ${
                hoveredCard === index
                  ? "w-[36%] max-md:w-[80%]"
                  : "w-[20%] max-md:w-[40%]"
              }`}
              style={{
                height: window.innerWidth < 768 ? "220px" : "360px",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(0)}
            >
              {/* Clean Background Image - No Overlays */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-left"
                />

                {/* Minimal gradient only at bottom for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content - Bottom Left Aligned */}
              <div
                className="absolute bottom-0 left-0 p-6 z-10"
                style={{
                  transform:
                    hoveredCard === index ? "translateX(8px)" : "translateX(0)",
                  transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 ${getTextColor(
                    index
                  )}`}
                  style={{
                    transform:
                      hoveredCard === index ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {category.name}
                </h3>

                {/* Subtitle - Only show on hover */}
                <p
                  className={`text-xs sm:text-sm md:text-base font-medium tracking-wider ${getTextColor(
                    index
                  )} transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {category.subtitle}
                </p>
              </div>

              {/* Clean Border Effect on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-white/40 transition-opacity duration-500 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .overflow-x-auto {
            overflow-x: scroll;
          }
        }

        @media (max-width: 640px) {
          /* Adjust first card width for mobile */
          .motion-div:first-child {
            width: 70vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyGoa;
