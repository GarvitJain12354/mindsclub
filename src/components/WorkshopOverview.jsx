// import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import DayOneSection1 from "./HorizontalScroll/DayOneSection1";
// import DayOneSection2 from "./HorizontalScroll/DayOneSection2";
// import DayOneSection3 from "./HorizontalScroll/DayOneSection3";
// import DayTwoSection1 from "./HorizontalScroll/DayTwoSection1";
// import DayTwoSection2 from "./HorizontalScroll/DayTwoSection2";

// gsap.registerPlugin(ScrollTrigger);

// const WorkshopOverview = () => {
//   const containerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [screenSize, setScreenSize] = useState("lg");

//   // Detect screen size and mobile
//   useEffect(() => {
//     const checkScreenSize = () => {
//       const width = window.innerWidth;
//       const mobile = width < 768;
//       setIsMobile(mobile);

//       if (width < 475) setScreenSize("xs");
//       else if (width < 640) setScreenSize("sm");
//       else if (width < 768) setScreenSize("md");
//       else if (width < 1024) setScreenSize("lg");
//       else if (width < 1280) setScreenSize("xl");
//       else setScreenSize("2xl");
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // useLayoutEffect(() => {
//   //   if (!containerRef.current) return;

//   //   const ctx = gsap.context(() => {
//   //     const horizontalSections = gsap.utils.toArray(".horizontal-section");
//   //     const hor = gsap.utils.toArray(".hori");
//   //     const firstSection = horizontalSections[0];
//   //     console.log("====================================");
//   //     console.log(hor);
//   //     console.log("====================================");
//   //     if (!horizontalSections.length) return;

//   //     // Clear any existing ScrollTriggers
//   //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: containerRef.current,
//   //         pin: true,
//   //         scrub: isMobile ? 0.5 : 1,
//   //         anticipatePin: 1,

//   //         end: () => {
//   //           const containerWidth =
//   //             containerRef.current?.offsetWidth || window.innerWidth;
//   //           const multiplier = isMobile ? 1.5 : 1.3;
//   //           return "+=" + containerWidth * multiplier;
//   //         },
//   //         invalidateOnRefresh: true,
//   //       },
//   //     });

//   //     // First section expansion animation
//   //     tl.to(firstSection, {
//   //       width: "100vw",
//   //       height: "100vh",
//   //       borderRadius: "0rem",
//   //       marginLeft: "0",
//   //       marginRight: "0",
//   //       duration: 1,
//   //       ease: "power2.out",
//   //     });
//   //     hor.forEach((el, index) => {
//   //       tl.to(
//   //         el,
//   //         {
//   //           xPercent: -100 * index,
//   //           ease: "none",
//   //           duration: 1,
//   //         },
//   //         "+=0"
//   //       ); // use "+=0" to sequence them, remove for overlapping
//   //     });
//   //     // Horizontal scroll animation
//   //     tl.to(horizontalSections, {
//   //       xPercent: -100 * (horizontalSections.length - 1),
//   //       duration: 3,
//   //       ease: "none",
//   //     });
//   //   }, containerRef);

//   //   return () => {
//   //     ctx.revert();
//   //     ScrollTrigger.refresh();
//   //   };
//   // }, [isMobile, screenSize]);

//   // Refresh ScrollTrigger on window resize
//   // useLayoutEffect(() => {
//   //   if (!containerRef.current) return;

//   //   const ctx = gsap.context(() => {
//   //     const horizontalSections = gsap.utils.toArray(".horizontal-section");
//   //     const hor = gsap.utils.toArray(".hori");
//   //     const firstSection = horizontalSections[0];
//   //     console.log("====================================");
//   //     console.log(hor);
//   //     console.log("====================================");
//   //     if (!horizontalSections.length) return;

//   //     // Clear any existing ScrollTriggers
//   //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: "#work",
//   //         pin: true,
//   //         scrub: isMobile ? 0.5 : 1,
//   //         anticipatePin: 1,

//   //         end: () => {
//   //           const containerWidth =
//   //             containerRef.current?.offsetWidth || window.innerWidth;
//   //           const multiplier = isMobile ? 1.5 : 1.3;
//   //           return "+=" + containerWidth * multiplier;
//   //         },
//   //         invalidateOnRefresh: true,
//   //       },
//   //     });
//   //   });
//   //   return () => {
//   //     ctx.revert();
//   //     ScrollTrigger.refresh();
//   //   };
//   // }, []);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=100%",
//           scrub: true,
//           pin: true,
//           markers: true,
//         },
//       });

//       tl.to("#inner", {
//         xPercent: -50, // moves by half (100vw to the left if width = 200vw)
//         ease: "none",
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   // const containerRef = useRef(null);
//   const horizontalWrapperRef = useRef(null);

//   // useEffect(() => {
//   //   const container = containerRef.current;
//   //   const scrollContent = horizontalWrapperRef.current;

//   //   if (!container || !scrollContent) return;

//   //   const scrollWidth = scrollContent.scrollWidth;
//   //   const viewportWidth = container.offsetWidth;
//   //   const scrollDistance = scrollWidth - viewportWidth;

//   //   const ctx = gsap.context(() => {
//   //     gsap.to(".inner", {
//   //       x: -scrollDistance,
//   //       ease: "none",
//   //       scrollTrigger: {
//   //         trigger: "#wor", // or "#work" if that's your section
//   //         start: "top top",
//   //         end: () => `+=${scrollDistance}`,
//   //         scrub: true,
//   //         pin: true,
//   //         anticipatePin: 1,
//   //         markers: true,
//   //       },
//   //     });
//   //   }, container);

//   //   return () => ctx.revert();
//   // }, []);

//   return (
//     <>
//       <section className="bg-white min-h-[5vh] md:min-h-[10vh] flex items-center justify-center md:items-start md:justify-start">
//         <div className="max-w-[1200px] w-full px-4 sm:px-6 md:px-8 lg:pl-10">
//           <h2 className="text-4xl font-satoshi font-bold text-gray-900 mb-3 tracking-tight">
//             Workshop Overview
//           </h2>
//           <p className="font-satoshi font-medium text-gray-950 text-sm md:text-[clamp(0.8rem,2.5vw,1rem)] leading-[1.6] max-w-[60%] sm:max-w-[400px] md:max-w-[400px] m-0 text-center sm:text-center md:text-left mx-auto md:mx-0">
//             Goa gives you the space to think louder, live slower, and create
//             deeper.
//           </p>
//         </div>
//       </section>

//       <div
//         id="work"
//         ref={containerRef}
//         className="w-full h-[90vh] flex flex-col bg-[#FFFE81] relative mt-10  "
//       >
//         {/* <div className="flex w-fit h-full">
//           <div className="horizontal-section w-screen h-full shrink-0 flex flex-col">
//             <div className="flex justify-between w-full items-start px-10 pb-2">
//               <div>
//                 <h1 className="text-4xl font-bold text-black mb-1">DAY ONE</h1>
//                 <div className="flex items-center gap-2 text-xl text-black font-medium">
//                   <span className="rotate-[-45deg] text-sm font-bold">✈</span>
//                   <span>The Arrival</span>
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-1">
//                 <div className="w-5 h-5 rounded-full bg-black"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//               </div>
//             </div>
//             <div
//               id="inner"
//               ref={horizontalWrapperRef}
//               className="w-full  flex h-full items-start overflow-x-auto overflow-y-hidden relative mt-10"
//             >
//               <div className="w-1/2 hori hori  h-full shrink-0 flex gap-2 items-start justify-end ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[200px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-start font-semibold text-xl text-black">
//                   Be Greeted with a<br />
//                   Refreshing Welcome
//                   <br />
//                   drink.
//                 </p>
//               </div>
//               <div className="w-1/2 hori  h-full shrink-0 flex flex-col items-end justify-end">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-left font-semibold text-xl text-black">
//                   Settle into your room.
//                 </p>
//               </div>
//               <div className="w-1/2 hori  h-full mt-20 shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[280px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Intro Session on the beach.
//                 </p>
//               </div>
//               <div className="w-1/2 hori  h-full shrink-0 flex flex-col items-center justify-start">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[10vw] h-[15vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[10vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full  shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[250px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Enjoy your delicious dinner.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-center mt-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[30vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="horizontal-section w-screen h-full shrink-0 flex flex-col">
//             <div className="flex justify-between w-full items-start px-10 pb-2">
//               <div>
//                 <h1 className="text-4xl font-bold text-black mb-1">DAY TWO</h1>
//                 <div className="flex items-center gap-2 text-xl text-black font-medium">
//                   <span className="rotate-[-45deg] text-sm font-bold">🧠</span>
//                   <span>Think & Plan</span>
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-1">
//                 <div className="w-5 h-5 rounded-full bg-black"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//               </div>
//             </div>
//             <div
//               id="inner"
//               ref={horizontalWrapperRef}
//               className="w-full  flex h-full items-start overflow-x-auto overflow-y-hidden relative mt-10"
//             >
//               <div className="w-1/2 hori  h-full shrink-0 flex gap-2 items-start justify-end ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[200px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-start font-semibold text-xl text-black">
//                   Be Greeted with a<br />
//                   Refreshing Welcome
//                   <br />
//                   drink.
//                 </p>
//               </div>
//               <div className="w-1/2 hori  h-full shrink-0 flex flex-col items-end justify-end">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-left font-semibold text-xl text-black">
//                   Settle into your room.
//                 </p>
//               </div>
//               <div className="w-1/2 hori  h-full mt-20 shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[280px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Intro Session on the beach.
//                 </p>
//               </div>
//               <div className="w-1/2 hori  h-full shrink-0 flex flex-col items-center justify-start">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[10vw] h-[15vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[10vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full  shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[250px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Enjoy your delicious dinner.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-center mt-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[30vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         <div className="flex w-full h-full overflow-x-auto">
//           <div className="w-full flex flex-col px-10 pt-10 h-full shrink-0">
//             <div className="flex justify-between items-start px-4 pb-2">
//               <div>
//                 <h1 className="text-4xl font-bold text-black mb-1">DAY ONE</h1>
//                 <div className="flex items-center gap-2 text-xl text-black font-medium">
//                   <span className="rotate-[-45deg] text-sm font-bold">✈</span>
//                   <span>The Arrival</span>
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-1">
//                 <div className="w-5 h-5 rounded-full bg-black"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//               </div>
//             </div>
//             <div
//               id="inner"
//               ref={horizontalWrapperRef}
//               className="w-full flex h-full items-start overflow-x-auto overflow-y-hidden relative mt-10"
//             >
//               <div className="w-1/2 hori h-full shrink-0 flex gap-2 items-start justify-end ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[200px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-start font-semibold text-xl text-black">
//                   Be Greeted with a<br />
//                   Refreshing Welcome
//                   <br />
//                   drink.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-end justify-end">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-left font-semibold text-xl text-black">
//                   Settle into your room.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full mt-20 shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[280px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Intro Session on the beach.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-start">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[10vw] h-[15vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[10vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full  shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[250px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Enjoy your delicious dinner.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-center mt-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[30vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full flex flex-col px-10 pt-10 h-full shrink-0">
//             <div className="flex justify-between items-start px-4 pb-2">
//               <div>
//                 <h1 className="text-4xl font-bold text-black mb-1">DAY TWO</h1>
//                 <div className="flex items-center gap-2 text-xl text-black font-medium">
//                   <span className="rotate-[-45deg] text-sm font-bold">🧠</span>
//                   <span>Think & Plan</span>
//                 </div>
//               </div>

//               <div className="flex gap-2 mt-1">
//                 <div className="w-5 h-5 rounded-full bg-black"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//                 <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
//               </div>
//             </div>
//             <div
//               id="inner"
//               ref={horizontalWrapperRef}
//               className="w-full flex h-full items-start overflow-x-auto overflow-y-hidden relative mt-10"
//             >
//               <div className="w-1/2 hori h-full shrink-0 flex gap-2 items-start justify-end ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[200px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-start font-semibold text-xl text-black">
//                   Be Greeted with a<br />
//                   Refreshing Welcome
//                   <br />
//                   drink.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-end justify-end">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="max-w-[200px] text-left font-semibold text-xl text-black">
//                   Settle into your room.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full mt-20 shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[280px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Intro Session on the beach.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-start">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[10vw] h-[15vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[10vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full  shrink-0 flex flex-col gap-2 items-center justify-center ">
//                 <img
//                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
//                   alt="Welcome drink"
//                   className="w-full max-w-[250px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className="text-start font-semibold text-xl text-black">
//                   Enjoy your delicious dinner.
//                 </p>
//               </div>
//               <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-center mt-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
//                   alt="Hotel room"
//                   className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
//                 />
//                 <p className=" max-w-[30vw] text-left font-semibold text-xl text-black">
//                   Eve chit-chat with new friends.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#FFFE81] w-full border-t border-black/30  pb-3">
//           <div className="flex justify-around px-4 items-center h-full py-5">
//             <div className="relative">
//               <span className="text-xs font-bold text-black tracking-wider">
//                 ARRIVAL
//               </span>
//               <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
//             </div>
//             <span className="text-xs font-medium text-black/70 tracking-wider">
//               THINK
//             </span>
//             <span className="text-xs font-medium text-black/70 tracking-wider">
//               SHOOT
//             </span>
//             <span className="text-xs font-medium text-black/70 tracking-wider">
//               CREATE
//             </span>
//           </div>
//         </div>

//         {/* <main id="container" ref={containerRef}>
//           <section className="horizontal-section first-section">
//             <DayOneSection1 />
//           </section>
//           <section className="horizontal-section">
//             <DayOneSection2 />
//           </section>
//           <section className="horizontal-section">
//             <DayOneSection3 />
//           </section>
//           <section className="horizontal-section">
//             <DayTwoSection1 />
//           </section>
//           <section className="horizontal-section">
//             <DayTwoSection2 />
//           </section>
//         </main> */}
//       </div>

//       <style jsx>{`
//         @font-face {
//           font-family: "Satoshi";
//           src: url("/src/assets/Satoshi-Regular.woff2") format("woff2");
//           font-weight: 400;
//           font-style: normal;
//           font-display: swap;
//         }
//         @font-face {
//           font-family: "Satoshi";
//           src: url("/src/assets/Satoshi-Bold.woff2") format("woff2");
//           font-weight: 700;
//           font-style: normal;
//           font-display: swap;
//         }
//         @font-face {
//           font-family: "Satoshi";
//           src: url("/src/assets/Satoshi-Black.woff2") format("woff2");
//           font-weight: 900;
//           font-style: normal;
//           font-display: swap;
//         }
//         @font-face {
//           font-family: "Satoshi";
//           src: url("/src/assets/Satoshi-Light.woff2") format("woff2");
//           font-weight: 300;
//           font-style: normal;
//           font-display: swap;
//         }

//         /* Base styles */
//         #container {
//           height: 100vh;
//           width: 500%;
//           display: flex;
//           flex-wrap: nowrap;
//           align-items: center;
//           will-change: transform;
//         }

//         .horizontal-section {
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           height: 100vh;
//           width: 100vw;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-shrink: 0;
//           position: relative;
//           transition: border-radius 0.1s ease-out;
//           will-change: transform;
//         }

//         .first-section {
//           overflow: hidden;
//         }

//         .content-wrapper {
//           text-align: center;
//           z-index: 2;
//           position: relative;
//           padding: 1rem;
//         }

//         .heading {
//           font-family: "Oswald", sans-serif;
//           font-size: clamp(2rem, 6vw, 8rem);
//           font-weight: 300;
//           color: white;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           margin: 0;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//         }

//         .horizontal-section:not(:first-child)::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           z-index: 1;
//         }

//         /* Extra small devices (phones, less than 475px) */
//         @media (max-width: 474px) {
//           #container {
//             width: 600%;
//           }

//           .first-section {
//             width: 90vw;
//             height: 85vh;
//             border-radius: 1rem;
//             margin: 0 5vw;
//           }

//           .content-wrapper {
//             padding: 0.5rem;
//           }

//           .heading {
//             font-size: clamp(1.2rem, 9vw, 2.5rem);
//             letter-spacing: 0.05em;
//           }
//         }

//         /* Small devices (phones, 475px to 639px) */
//         @media (min-width: 475px) and (max-width: 639px) {
//           #container {
//             width: 600%;
//           }

//           .first-section {
//             width: 88vw;
//             height: 82vh;
//             border-radius: 1.2rem;
//             margin: 0 6vw;
//           }

//           .heading {
//             font-size: clamp(1.4rem, 8vw, 3rem);
//             letter-spacing: 0.05em;
//           }
//         }

//         /* Medium devices (tablets, 640px to 767px) */
//         @media (min-width: 640px) and (max-width: 767px) {
//           #container {
//             width: 550%;
//           }

//           .first-section {
//             width: 85vw;
//             height: 78vh;
//             border-radius: 1.4rem;
//             margin: 0 7.5vw;
//           }

//           .heading {
//             font-size: clamp(1.6rem, 7vw, 3.5rem);
//           }
//         }

//         /* Medium-large devices (small laptops, 768px to 1023px) */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           #container {
//             width: 500%;
//           }

//           .first-section {
//             width: 92vw;
//             height: 75vh;
//             border-radius: 1.6rem;
//             margin: 0 4vw;
//           }

//           .heading {
//             font-size: clamp(1.8rem, 6vw, 4rem);
//           }
//         }

//         /* Large devices (laptops, 1024px to 1279px) */
//         @media (min-width: 1024px) and (max-width: 1279px) {
//           #container {
//             width: 450%;
//           }

//           .first-section {
//             width: 94vw;
//             height: 76vh;
//             border-radius: 1.8rem;
//             margin: 0 3vw;
//           }

//           .heading {
//             font-size: clamp(2rem, 5vw, 5rem);
//           }
//         }

//         /* Extra large devices (large laptops and desktops, 1280px to 1535px) */
//         @media (min-width: 1280px) and (max-width: 1535px) {
//           #container {
//             width: 420%;
//           }

//           .first-section {
//             width: 95vw;
//             height: 78vh;
//             border-radius: 1.9rem;
//             margin: 0 2.5vw;
//           }

//           .heading {
//             font-size: clamp(2.2rem, 4.5vw, 6rem);
//           }
//         }

//         /* 2XL devices (large desktops, 1536px and up) */
//         @media (min-width: 1536px) {
//           #container {
//             width: 400%;
//           }

//           .first-section {
//             width: 97vw;
//             height: 80vh;
//             border-radius: 2rem;
//             margin: 0 1.5vw;
//           }

//           .heading {
//             font-size: clamp(2.5rem, 4vw, 8rem);
//           }
//         }

//         /* Prevent body scroll issues */
//         body {
//           overflow-y: visible;
//           overflow-x: hidden;
//           margin: 0;
//           padding: 0;
//         }

//         /* Touch optimizations for mobile */
//         @media (hover: none) and (pointer: coarse) {
//           .horizontal-section {
//             -webkit-overflow-scrolling: touch;
//           }
//         }

//         /* High DPI displays */
//         @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//           .heading {
//             text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default WorkshopOverview;
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
      const hori = gsap.utils.toArray(".hori");
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
          <h2 className="font-satoshi font-bold text-gray-900 text-2xl sm:text-3xl md:text-[clamp(1.2rem,4vw,2.2rem)] mb-2 tracking-[.02em] text-center md:text-left">
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
          <section className="horizontal-section first-section bg-[#FFFE81]">
            {/* <DayOneSection1 /> */}
            <div className="w-full flex flex-col px-10 pt-10 h-full shrink-0">
              <div className="flex justify-between items-start px-4 pb-2">
                <div>
                  <h1 className="text-4xl font-bold text-black mb-1">
                    DAY ONE
                  </h1>
                  <div className="flex items-center gap-2 text-xl text-black font-medium">
                    <span className="rotate-[-45deg] text-sm font-bold">✈</span>
                    <span>The Arrival</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-1">
                  <div className="w-5 h-5 rounded-full bg-black"></div>
                  <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
                  <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
                  <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
                </div>
              </div>
              <div
                id="inner"
                className="w-full flex h-full items-start overflow-x-auto overflow-y-hidden relative mt-10"
              >
                <div className="w-1/2 hori h-full shrink-0 flex gap-2 items-start justify-end ">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
                    alt="Welcome drink"
                    className="w-full max-w-[200px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
                  />
                  <p className="max-w-[200px] text-start font-semibold text-xl text-black">
                    Be Greeted with a<br />
                    Refreshing Welcome
                    <br />
                    drink.
                  </p>
                </div>
                <div className="w-1/2 hori h-full shrink-0 flex flex-col items-end justify-end">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
                    alt="Hotel room"
                    className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
                  />
                  <p className="max-w-[200px] text-left font-semibold text-xl text-black">
                    Settle into your room.
                  </p>
                </div>
                <div className="w-1/2 hori h-full mt-20 shrink-0 flex flex-col gap-2 items-center justify-center ">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
                    alt="Welcome drink"
                    className="w-full max-w-[280px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
                  />
                  <p className="text-start font-semibold text-xl text-black">
                    Intro Session on the beach.
                  </p>
                </div>
                <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
                    alt="Hotel room"
                    className="w-full max-w-[10vw] h-[15vw] rounded-lg object-cover shadow-lg mb-3"
                  />
                  <p className=" max-w-[10vw] text-left font-semibold text-xl text-black">
                    Eve chit-chat with new friends.
                  </p>
                </div>
                <div className="w-1/2 hori h-full  shrink-0 flex flex-col gap-2 items-center justify-center ">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
                    alt="Welcome drink"
                    className="w-full max-w-[250px] h-[280px] rounded-lg object-cover shadow-lg mb-3"
                  />
                  <p className="text-start font-semibold text-xl text-black">
                    Enjoy your delicious dinner.
                  </p>
                </div>
                <div className="w-1/2 hori h-full shrink-0 flex flex-col items-center justify-center mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop&crop=center"
                    alt="Hotel room"
                    className="w-full max-w-[25vw] h-[25vw] rounded-lg object-cover shadow-lg mb-3"
                  />
                  <p className=" max-w-[30vw] text-left font-semibold text-xl text-black">
                    Eve chit-chat with new friends.
                  </p>
                </div>
              </div>
            </div>
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
