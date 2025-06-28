import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const workshopSteps = [
  {
    id: 0,
    name: "Think",
    day: "Day - 1",
    title: "THINK",
    content: "Conceptualize your brand identity and vision",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
  },
  {
    id: 1,
    name: "Shoot",
    day: "Day - 2",
    title: "SHOOT",
    content: "Create stunning product photography",
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Design",
    day: "Day - 3",
    title: "DESIGN",
    content: "Craft your visual brand elements",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Create",
    day: "Day - 4",
    title: "CREATE",
    content: "Build your complete skincare brand",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop",
  },
];

export default function SkincareWorkshop() {
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
    const prevIndex =
      activeStep > 0 ? activeStep - 1 : workshopSteps.length - 1;
    handleStepChange(prevIndex); // This internally calls slide(prevIndex)
  };

  const handleNext = () => {
    const nextIndex =
      activeStep < workshopSteps.length - 1 ? activeStep + 1 : 0;
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
    <div
      className="
        /* xs: 0-425px (default) */
        min-h-[40vh] pt-0
        /* sm: 426-767px */
        sm:min-h-[50vh] sm:pt-4
        /* md: 768-1023px */
        md:min-h-[70vh] md:pt-10
        /* lg: 1024-1279px */
        lg:min-h-[80vh] lg:pt-20
        /* xl: 1280-1535px */
        xl:min-h-screen xl:pt-28
        /* 2xl: 1536px+ */
        2xl:min-h-screen 2xl:pt-32
        font-sans
      "
    >
      {/* Top Section */}
      <div className="pl-0 md:pl-10 py-12 w-full">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl font-satoshi font-bold text-gray-900 mb-3 tracking-tight">
            About the workshop
          </h1>
          <p className="max-w-full md:max-w-[250px] mx-auto md:mx-0 text-gray-800 text-sm font-satoshi font-normal">
            A 4-day creative sprint to craft your own skincare brand
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex gap-0 md:gap-10 flex-col md:flex-row  relative">
          {/* Left Sidebar Navigation */}
          <div
            className="
               max-md:hidden
               flex flex-col
             
              flex-shrink-0 relative z-30 w-[20%] items-end justify-center
            "
          >
            <nav className="space-y-1">
              {workshopSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepChange(index)}
                  disabled={isTransitioning}
                  className={`
                    block w-full text-left px-0 py-4 text-2xl md:text-3xl font-satoshi font-medium transition-all duration-300
                    ${
                      index === activeStep
                        ? "text-gray-900 font-bold"
                        : "text-gray-400 hover:text-gray-600"
                    }
                    ${isTransitioning ? "pointer-events-none" : ""}
                  `}
                >
                  {step.name}
                </button>
              ))}
            </nav>
          </div>
          <div
            className="
                absolute
                top-0 right-0
                w-40
                
                z-50
                
                flex gap-2 sm:gap-3 lg:gap-4
                
              "
          >
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="
                  w-9 h-9 md:w-12 md:h-12 lg:w-12 lg:h-12
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
                  w-9 h-9 md:w-12 md:h-12 lg:w-12 lg:h-12
                  rounded-full border border-gray-200 bg-white
                  hover:bg-gray-50 shadow-sm disabled:opacity-50
                  flex items-center justify-center transition-colors
                "
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-600" />
            </button>
          </div>
          {/* Right Content Area */}
          <div className="flex-1 flex-col relative pl-0 w-full  justify-center items-center">
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
                <div className="relative flex w-full flex-nowrap items-end h-[75vh] gap-10">
                  {workshopSteps.map((step, index) => {
                    const slideStyle = getSlideTransform(index);
                    const isActive = index === activeStep;
                    return (
                      <div
                        key={step.id}
                        ref={(el) => (imgRefs.current[index] = el)}
                        className={`h-[100%] Pimg shrink-0 w-[50vw]  cursor-pointer transform`}
                        // style={slideStyle}

                        onClick={() => handleStepChange(index)}
                      >
                        {/* Card */}
                        <div
                          className={`relative bg-gray-200 shadow-lg overflow-hidden transition-all duration-300 w-full h-full ${
                            isActive
                              ? "shadow-2xl"
                              : "shadow-md hover:shadow-lg"
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
        </div>
      </div>
    </div>
  );
}
