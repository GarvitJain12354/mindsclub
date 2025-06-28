import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DayOneSection1 from "./HorizontalScroll/DayOneSection1";
import DayOneSection2 from "./HorizontalScroll/DayOneSection2";
import DayOneSection3 from "./HorizontalScroll/DayOneSection3";
import DayTwoSection1 from "./HorizontalScroll/DayTwoSection1";
import DayTwoSection2 from "./HorizontalScroll/DayTwoSection2";

gsap.registerPlugin(ScrollTrigger);

const WorkshopOverview = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState("lg");

  // Detect screen size and mobile
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);

      if (width < 475) setScreenSize("xs");
      else if (width < 640) setScreenSize("sm");
      else if (width < 768) setScreenSize("md");
      else if (width < 1024) setScreenSize("lg");
      else if (width < 1280) setScreenSize("xl");
      else setScreenSize("2xl");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");
      const firstSection = horizontalSections[0];

      if (!horizontalSections.length) return;

      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: isMobile ? 0.5 : 1,
          anticipatePin: 1,
          snap: {
            snapTo: (progress) => {
              const introProgress = 0.25;
              if (progress < introProgress) return 0;
              const sectionProgress =
                (progress - introProgress) / (1 - introProgress);
              const snapPoint =
                Math.round(sectionProgress * (horizontalSections.length - 1)) /
                (horizontalSections.length - 1);
              return introProgress + snapPoint * (1 - introProgress);
            },
            duration: { min: 0.2, max: isMobile ? 0.4 : 0.6 },
          },
          end: () => {
            const containerWidth =
              containerRef.current?.offsetWidth || window.innerWidth;
            const multiplier = isMobile ? 1.5 : 1.3;
            return "+=" + containerWidth * multiplier;
          },
          invalidateOnRefresh: true,
        },
      });

      // First section expansion animation
      tl.to(firstSection, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0rem",
        marginLeft: "0",
        marginRight: "0",
        duration: 1,
        ease: "power2.out",
      });

      // Horizontal scroll animation
      tl.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        duration: 3,
        ease: "none",
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [isMobile, screenSize]);

  // Refresh ScrollTrigger on window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="bg-white min-h-[5vh] md:min-h-[10vh] flex items-center justify-center md:items-start md:justify-start">
        <div className="max-w-[1200px] w-full px-4 sm:px-6 md:px-8 lg:pl-10">
          <h2 className="text-4xl font-satoshi font-bold text-gray-900 mb-3 tracking-tight">
            Workshop Overview
          </h2>
          <p className="font-satoshi font-medium text-gray-950 text-sm md:text-[clamp(0.8rem,2.5vw,1rem)] leading-[1.6] max-w-[60%] sm:max-w-[400px] md:max-w-[400px] m-0 text-center sm:text-center md:text-left mx-auto md:mx-0">
            Goa gives you the space to think louder, live slower, and create
            deeper.
          </p>
        </div>
      </section>

      <div className="w-screen min-h-screen bg-white overflow-hidden">
        <main id="container" ref={containerRef}>
          <section className="horizontal-section first-section">
            <DayOneSection1 />
          </section>
          <section className="horizontal-section">
            <DayOneSection2 />
          </section>
          <section className="horizontal-section">
            <DayOneSection3 />
          </section>
          <section className="horizontal-section">
            <DayTwoSection1 />
          </section>
          <section className="horizontal-section">
            <DayTwoSection2 />
          </section>
        </main>
      </div>

      <style jsx>{`
        @font-face {
          font-family: "Satoshi";
          src: url("/src/assets/Satoshi-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Satoshi";
          src: url("/src/assets/Satoshi-Bold.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Satoshi";
          src: url("/src/assets/Satoshi-Black.woff2") format("woff2");
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Satoshi";
          src: url("/src/assets/Satoshi-Light.woff2") format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        /* Base styles */
        #container {
          height: 100vh;
          width: 500%;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          will-change: transform;
        }

        .horizontal-section {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          position: relative;
          transition: border-radius 0.1s ease-out;
          will-change: transform;
        }

        .first-section {
          overflow: hidden;
        }

        .content-wrapper {
          text-align: center;
          z-index: 2;
          position: relative;
          padding: 1rem;
        }

        .heading {
          font-family: "Oswald", sans-serif;
          font-size: clamp(2rem, 6vw, 8rem);
          font-weight: 300;
          color: white;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .horizontal-section:not(:first-child)::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        /* Extra small devices (phones, less than 475px) */
        @media (max-width: 474px) {
          #container {
            width: 600%;
          }

          .first-section {
            width: 90vw;
            height: 85vh;
            border-radius: 1rem;
            margin: 0 5vw;
          }

          .content-wrapper {
            padding: 0.5rem;
          }

          .heading {
            font-size: clamp(1.2rem, 9vw, 2.5rem);
            letter-spacing: 0.05em;
          }
        }

        /* Small devices (phones, 475px to 639px) */
        @media (min-width: 475px) and (max-width: 639px) {
          #container {
            width: 600%;
          }

          .first-section {
            width: 88vw;
            height: 82vh;
            border-radius: 1.2rem;
            margin: 0 6vw;
          }

          .heading {
            font-size: clamp(1.4rem, 8vw, 3rem);
            letter-spacing: 0.05em;
          }
        }

        /* Medium devices (tablets, 640px to 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          #container {
            width: 550%;
          }

          .first-section {
            width: 85vw;
            height: 78vh;
            border-radius: 1.4rem;
            margin: 0 7.5vw;
          }

          .heading {
            font-size: clamp(1.6rem, 7vw, 3.5rem);
          }
        }

        /* Medium-large devices (small laptops, 768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          #container {
            width: 500%;
          }

          .first-section {
            width: 92vw;
            height: 75vh;
            border-radius: 1.6rem;
            margin: 0 4vw;
          }

          .heading {
            font-size: clamp(1.8rem, 6vw, 4rem);
          }
        }

        /* Large devices (laptops, 1024px to 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          #container {
            width: 450%;
          }

          .first-section {
            width: 94vw;
            height: 76vh;
            border-radius: 1.8rem;
            margin: 0 3vw;
          }

          .heading {
            font-size: clamp(2rem, 5vw, 5rem);
          }
        }

        /* Extra large devices (large laptops and desktops, 1280px to 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          #container {
            width: 420%;
          }

          .first-section {
            width: 95vw;
            height: 78vh;
            border-radius: 1.9rem;
            margin: 0 2.5vw;
          }

          .heading {
            font-size: clamp(2.2rem, 4.5vw, 6rem);
          }
        }

        /* 2XL devices (large desktops, 1536px and up) */
        @media (min-width: 1536px) {
          #container {
            width: 400%;
          }

          .first-section {
            width: 97vw;
            height: 80vh;
            border-radius: 2rem;
            margin: 0 1.5vw;
          }

          .heading {
            font-size: clamp(2.5rem, 4vw, 8rem);
          }
        }

        /* Prevent body scroll issues */
        body {
          overflow-y: visible;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        /* Touch optimizations for mobile */
        @media (hover: none) and (pointer: coarse) {
          .horizontal-section {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .heading {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </>
  );
};

export default WorkshopOverview;
