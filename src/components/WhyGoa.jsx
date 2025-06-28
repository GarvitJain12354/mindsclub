import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [activeStep, setActiveStep] = useState(0); // Start with "Think" active
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imgRefs = useRef([]);

  const handleStepChange = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setActiveStep(index);
    slide(index); // 👈 This will animate the Pimg elements

    // Optional delay to prevent spamming navigation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // matches the duration in GSAP
  };
  console.log(activeStep, 134);

  const [ind, setind] = useState(0);

  const slide = (i) => {
    imgRefs.current.forEach((el, index) => {
      gsap.to(el, {
        xPercent: -i * 100,
        height: index === i ? "100%" : "80%",
        // scale: index === i ? 1 : 0.75,
        duration: 0.7,
        ease: "Expo.ease",
      });
    });
  };
  useEffect(() => {
    slide(activeStep);
  }, []);

  const handlePrevious = () => {
    const prevIndex = activeStep > 0 ? activeStep - 1 : categories.length - 1;
    handleStepChange(prevIndex); // This internally calls slide(prevIndex)
  };

  const handleNext = () => {
    const nextIndex = activeStep < categories.length - 1 ? activeStep + 1 : 0;
    handleStepChange(nextIndex); // This internally calls slide(nextIndex)
  };

  // Calculate transforms for each slide similar to first code
  // const getSlideTransform = (index) => {
  //   const diff = index - activeStep;
  //   const width = typeof window !== "undefined" ? window.innerWidth : 1200;

  //   // Default values (desktop)
  //   let baseTranslate = diff * 100;
  //   let activeWidth = "50vw",
  //     activeHeight = "70vh",
  //     activeRadius = "2rem";
  //   let inactiveWidth = "25vw",
  //     inactiveHeight = "50vh",
  //     inactiveRadius = "1.5rem";
  //   let inactiveTranslateY = "22vh";

  //   // xs: 0-425px
  //   if (width < 426) {
  //     // baseTranslate = diff * 230;
  //     activeWidth = "68vw";
  //     activeHeight = "40vh";
  //     activeRadius = "0.6rem";
  //     inactiveWidth = "40vw";
  //     inactiveHeight = "28vh";
  //     inactiveRadius = "0.3rem";
  //     inactiveTranslateY = "13vh";
  //   }
  //   // sm: 426-767px
  //   else if (width >= 426 && width < 768) {
  //     // baseTranslate = diff * 300;
  //     activeWidth = "68vw";
  //     activeHeight = "45vh";
  //     activeRadius = "0.6rem";
  //     inactiveWidth = "50vw";
  //     inactiveHeight = "35vh";
  //     inactiveRadius = "0.3rem";
  //     inactiveTranslateY = "12vh";
  //   }
  //   // md: 768-1023px
  //   else if (width >= 768 && width < 1024) {
  //     // baseTranslate = diff * 350;
  //     activeWidth = "48vw";
  //     activeHeight = "45vh";
  //     activeRadius = "1.2rem";
  //     inactiveWidth = "28vw";
  //     inactiveHeight = "36vh";
  //     inactiveRadius = "0.7rem";
  //     inactiveTranslateY = "12vh";
  //   }
  //   // lg: 1024-1279px
  //   else if (width >= 1024 && width < 1280) {
  //     // baseTranslate = diff * 360;
  //     activeWidth = "50vw";
  //     activeHeight = "55vh";
  //     activeRadius = "1.5rem";
  //     inactiveWidth = "22vw";
  //     inactiveHeight = "45vh";
  //     inactiveRadius = "1rem";
  //     inactiveTranslateY = "14vh";
  //   }
  //   // xl: 1280-1535px
  //   else if (width >= 1280 && width < 1536) {
  //     // baseTranslate = diff * 570;
  //     activeWidth = "52vw";
  //     activeHeight = "70vh";
  //     activeRadius = "1.7rem";
  //     inactiveWidth = "25vw";
  //     inactiveHeight = "50vh";
  //     inactiveRadius = "1.2rem";
  //     inactiveTranslateY = "21vh";
  //   }
  //   // 2xl: 1536px+
  //   else if (width >= 1536) {
  //     // baseTranslate = diff * 580;
  //     activeWidth = "36vw";
  //     activeHeight = "70vh";
  //     activeRadius = "2rem";
  //     inactiveWidth = "14vw";
  //     inactiveHeight = "50vh";
  //     inactiveRadius = "1.5rem";
  //     inactiveTranslateY = "22vh";
  //   }

  //   if (index === activeStep) {
  //     return {
  //       transform: `translateX(${baseTranslate}%) scale(1)`,
  //       opacity: 1,
  //       zIndex: 10,
  //       width: activeWidth,
  //       height: activeHeight,
  //       borderRadius: activeRadius,
  //       transition: isTransitioning
  //         ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  //         : "all 0.3s ease",
  //     };
  //   }
  //   return {
  //     transform: `translateX(${baseTranslate}px) scale(0.75) translateY(${inactiveTranslateY})`,
  //     opacity: 0.8,
  //     zIndex: 5,
  //     width: inactiveWidth,
  //     height: inactiveHeight,
  //     borderRadius: inactiveRadius,
  //     transition: isTransitioning
  //       ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  //       : "all 0.3s ease",
  //   };
  // };
  const getSlideTransform = (index) => {
    const diff = index - activeStep;
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;

    // Default values (desktop)
    let baseTranslate = diff * 580;
    let activeWidth = "10vw",
      activeHeight = "70vh",
      activeRadius = "2rem";
    let inactiveWidth = "25vw",
      inactiveHeight = "50vh",
      inactiveRadius = "1.5rem";
    let inactiveTranslateY = "22vh";

    // xs: 0-425px
    if (width < 426) {
      baseTranslate = diff * 230;
      activeWidth = "68vw";
      activeHeight = "40vh";
      activeRadius = "0.6rem";
      inactiveWidth = "40vw";
      inactiveHeight = "28vh";
      inactiveRadius = "0.3rem";
      inactiveTranslateY = "13vh";
    }
    // sm: 426-767px
    else if (width >= 426 && width < 768) {
      baseTranslate = diff * 300;
      activeWidth = "68vw";
      activeHeight = "45vh";
      activeRadius = "0.6rem";
      inactiveWidth = "50vw";
      inactiveHeight = "35vh";
      inactiveRadius = "0.3rem";
      inactiveTranslateY = "12vh";
    }
    // md: 768-1023px
    else if (width >= 768 && width < 1024) {
      baseTranslate = diff * 350;
      activeWidth = "48vw";
      activeHeight = "45vh";
      activeRadius = "1.2rem";
      inactiveWidth = "28vw";
      inactiveHeight = "36vh";
      inactiveRadius = "0.7rem";
      inactiveTranslateY = "12vh";
    }
    // lg: 1024-1279px
    else if (width >= 1024 && width < 1280) {
      baseTranslate = diff * 360;
      activeWidth = "50vw";
      activeHeight = "55vh";
      activeRadius = "1.5rem";
      inactiveWidth = "22vw";
      inactiveHeight = "45vh";
      inactiveRadius = "1rem";
      inactiveTranslateY = "14vh";
    }
    // xl: 1280-1535px
    else if (width >= 1280 && width < 1536) {
      baseTranslate = diff * 570;
      activeWidth = "52vw";
      activeHeight = "70vh";
      activeRadius = "1.7rem";
      inactiveWidth = "25vw";
      inactiveHeight = "50vh";
      inactiveRadius = "1.2rem";
      inactiveTranslateY = "21vh";
    }
    // 2xl: 1536px+
    else if (width >= 1536) {
      baseTranslate = diff * 580;
      activeWidth = "36vw";
      activeHeight = "70vh";
      activeRadius = "2rem";
      inactiveWidth = "14vw";
      inactiveHeight = "50vh";
      inactiveRadius = "1.5rem";
      inactiveTranslateY = "22vh";
    }

    if (index === activeStep) {
      return {
        transform: `translateX(${baseTranslate}px) scale(1)`,
        opacity: 1,
        zIndex: 10,
        width: activeWidth,
        height: activeHeight,
        borderRadius: activeRadius,
        transition: isTransitioning
          ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          : "all 0.3s ease",
      };
    }
    return {
      transform: `translateX(-${
        index * 100
      }%) scale(0.75) translateY(${inactiveTranslateY})`,
      opacity: 0.8,
      zIndex: 5,
      width: inactiveWidth,
      height: inactiveHeight,
      borderRadius: inactiveRadius,
      transition: isTransitioning
        ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "all 0.3s ease",
    };
  };
  return (
    <div className="min-h-[42vh] md:min-h-[60vh] md:min-h-screen mb-10">
      {/* Header Section */}
      <div className="pt-10 md:pt-16 pb-6 max-w-2xl  text-center md:text-left pl-0 md:pl-10 mb-10">
        <h1 className="text-4xl font-satoshi font-bold text-gray-900 mb-3 tracking-tight">
          Why Goa?
        </h1>
        <p className="max-w-full max-md:w-[80%] max-md:text-center font-semibold  mx-auto md:mx-0 text-gray-800  font-satoshi text-xl w-[70%]">
          Goa gives you the space to think louder, live slower, and create
          deeper.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative">
        {/* Navigation Arrows - Only show if scrollable */}
        {shouldShowNavigation() && (
          <div className="absolute right-3 -top-10 md:right-8 md:-top-14 z-20 flex gap-2 md:gap-3 max-md:hidden">
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
          className="
                absolute
                top-5 right-12
                w-fit
                z-30
                max-md:top-0
                max-md:right-0
                max-md:px-2
                flex gap-2 sm:gap-3 lg:gap-4
              
                md:hidden
              "
        >
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="
                  w-7 h-7 md:w-12 md:h-12 lg:w-12 lg:h-12
                  rounded-full border border-gray-200 bg-white
                  hover:bg-gray-50 shadow-sm disabled:opacity-50
                  flex items-center justify-center transition-colors
                "
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="
                  w-7 h-7 md:w-12 md:h-12 lg:w-12 lg:h-12
                  rounded-full border border-gray-200 bg-white
                  hover:bg-gray-50 shadow-sm disabled:opacity-50
                  flex items-center justify-center transition-colors
                "
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-600" />
          </button>
        </div>
        {/* Right Content Area */}
        <div className="flex-1 flex-col relative pl-10 max-md:pl-0 w-full  justify-center items-center md:hidden">
          {/* Navigation Arrows */}

          {/* Slider Container */}
          <div
            className="
                relative
                /* xs: 0-425px (default) */
                h-fit
              
                overflow-hidden 
                z-10
              "
          >
            {/* Centered Container */}
            <div className="w-full">
              {/* All Slides Container */}
              <div className="relative flex w-full flex-nowrap items-end h-[70vh] max-md:h-[50vh]">
                {categories.map((step, index) => {
                  const slideStyle = getSlideTransform(index);
                  const isActive = index === activeStep;
                  return (
                    <div
                      key={step.id}
                      ref={(el) => (imgRefs.current[index] = el)}
                      className={`h-[100%] Pimg shrink-0 w-[50vw] max-md:w-[80%] max-md:p-2  cursor-pointer transform p-5`}
                      // style={slideStyle}

                      onClick={() => handleStepChange(index)}
                    >
                      {/* Card */}
                      <div
                        className={`relative bg-gray-200 shadow-lg overflow-hidden transition-all duration-300 w-full h-full ${
                          isActive ? "shadow-2xl" : "shadow-md hover:shadow-lg"
                        }`}
                        style={{ borderRadius: isActive ? "2rem" : "1.5rem" }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                            style={{
                              borderRadius: isActive ? "2rem" : "1.5rem",
                            }}
                          />
                          <div
                            className={`absolute inset-0 transition-all duration-300 ${
                              isActive
                                ? "bg-black bg-opacity-20"
                                : "bg-black bg-opacity-30"
                            }`}
                            style={{
                              borderRadius: isActive ? "2rem" : "1.5rem",
                            }}
                          ></div>
                        </div>

                        {/* Card Labels */}
                        <div
                          className={`absolute flex justify-between items-start z-10 ${
                            isActive
                              ? "top-3 left-3 right-3"
                              : "top-4 left-4 right-4"
                          }`}
                        >
                          <span
                            className={`text-white font-medium ${
                              isActive
                                ? "text-sm px-3 py-1"
                                : "text-xs px-2 py-1"
                            }`}
                          >
                            {step.day}
                          </span>
                          <span
                            className={`text-white font-medium ${
                              isActive
                                ? "text-sm px-3 py-1"
                                : "text-xs px-2 py-1"
                            }`}
                          >
                            {step.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 pl-4 max-md:hidden md:pl-12 pr-4 md:pr-8 overflow-x-auto scrollbar-hide max-md:pl-10"
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
                className="absolute bottom-0 left-0 p-6 z-10 flex flex-col items-start"
                style={{
                
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
