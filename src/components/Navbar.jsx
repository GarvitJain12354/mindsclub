// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { href: '#home', label: 'Home' },
//     { href: '#about', label: 'About Us' },
//     { href: '#contact', label: 'Contact Us' }
//   ];

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   return (
//     <>
//       <header
//         className={`z-50 transition-all duration-300 ease-out fixed w-full
//           ${isScrolled
//             ? "top-0"
//             : "top-2 sm:top-3 md:top-4 lg:top-6"
//           }
//           ${isScrolled
//             ? "px-0"
//             : "px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32"
//           }
//         `}
//       >
//         <nav
//           className={`px-3 py-2 md:py-2 shadow-lg transition-all duration-300 ease-out ${
//             isScrolled
//               ? "rounded-none bg-black/60 backdrop-blur-lg border-none"
//               : "rounded-full bg-white/20 backdrop-blur-md border border-white/20"
//           }`}
//           style={{
//             backdropFilter: 'blur(16px)',
//             WebkitBackdropFilter: 'blur(16px)'
//           }}
//         >
//           <div className="container w-full max-w-[1440px] mx-auto flex justify-between items-center">
//             {/* Logo Section */}
//             <div className="text-white text-lg font-bold z-10">
//               <a href="#home" className="block md:hidden">
//                 <img src="/images/logo-icon-white.svg" alt="Logo" className="w-12 transition-transform duration-300 hover:scale-105" />
//               </a>
//               <a href="#home" className="hidden md:block">
//                 <img src="/images/logo-white.svg" alt="Logo Label" className="w-36 transition-transform duration-300 hover:scale-105" />
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden z-50">
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-300 focus:outline-none active:scale-95"
//                 aria-label="Toggle menu"
//               >
//                 <div className="w-6 h-6 relative flex flex-col justify-center">
//                   <span className={`absolute block w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-out ${
//                     isMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
//                   }`}></span>
//                   <span className={`absolute block w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-out ${
//                     isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
//                   }`}></span>
//                   <span className={`absolute block w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-out ${
//                     isMenuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'
//                   }`}></span>
//                 </div>
//               </button>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden space-x-5 md:flex gap-3 items-center justify-center font-medium text-white">
//               {navItems.map((item, index) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="flex gap-3 items-center justify-start group w-fit font-medium transition-all duration-300 hover:scale-105"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
//                     {item.label}
//                   </p>
//                 </a>
//               ))}
//               <button className="bg-yellow-300 text-black font-bold px-6 py-2.5 rounded-full hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl">
//                 Join Us
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu Extension */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
//             isScrolled
//               ? "mx-0"
//               : "px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32"
//           } ${
//             isMenuOpen
//               ? 'max-h-96 opacity-100'
//               : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div
//             className={`bg-white/20 backdrop-blur-md border border-white/20 border-t-0 shadow-lg transition-all duration-300 ease-out mt-1 ${
//               isScrolled
//                 ? "rounded-none mx-0"
//                 : "rounded-b-3xl mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32"
//             }`}
//             style={{
//               backdropFilter: 'blur(16px)',
//               WebkitBackdropFilter: 'blur(16px)'
//             }}
//           >
//             <div className="px-3 py-6">
//               <div className="space-y-4">
//                 {navItems.map((item, index) => (
//                   <div
//                     key={item.href}
//                     className={`transform transition-all duration-300 ease-out ${
//                       isMenuOpen
//                         ? 'translate-y-0 opacity-100'
//                         : 'translate-y-4 opacity-0'
//                     }`}
//                     style={{
//                       transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : '0ms'
//                     }}
//                   >
//                     <a
//                       href={item.href}
//                       onClick={closeMenu}
//                       className="block py-3 px-4 text-white text-lg font-medium hover:bg-white/20 rounded-xl transition-all duration-300 group"
//                     >
//                       <span className="relative inline-block">
//                         {item.label}
//                         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
//                       </span>
//                     </a>
//                   </div>
//                 ))}

//                 {/* Join Us Button */}
//                 <div
//                   className={`transform transition-all duration-300 ease-out pt-2 ${
//                     isMenuOpen
//                       ? 'translate-y-0 opacity-100'
//                       : 'translate-y-4 opacity-0'
//                   }`}
//                   style={{
//                     transitionDelay: isMenuOpen ? `${(navItems.length + 1) * 50}ms` : '0ms'
//                   }}
//                 >
//                   <button
//                     onClick={closeMenu}
//                     className="w-full py-3 px-4 bg-yellow-300 text-black font-bold text-lg rounded-full hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
//                   >
//                     Join Us
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu Backdrop */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
//           onClick={closeMenu}
//           style={{ top: '0' }}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@store/slices/authSlice";
import { HiMenuAlt3 } from "react-icons/hi";

import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleLogout = async () => {
  //   try {
  //     await dispatch(logout()).unwrap();
  //     navigate("/login");
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };

  return (
    <header
      className={`z-50 h-20 transition-all duration-300 ease-in-out ${
        isScrolled ? "top-0 px-0 md:px-0 fixed" : "top-10 px-2 md:px-60 fixed"
      } w-full`}
    >
      <nav
        className={`px-5 py-2 md:py-2 h-full shadow-md  ${
          isScrolled
            ? "rounded-none bg-black/50 backdrop-blur-md border-none"
            : "rounded-full bg-white/20 backdrop-blur-md border border-white/20"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="container w-full max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/" className="block md:hidden">
              <img
                src={"/images/logo-icon-white.svg"}
                alt="Logo"
                className="w-16 "
              />
            </Link>
            <Link to="/" className="hidden md:block">
              <img
                src={"/images/logo-white.svg"}
                alt="Logo Label"
                className="w-36 h-16"
              />
            </Link>
          </div>
          <div className="md:hidden text-white text-3xl">
            <HiMenuAlt3 />
          </div>
          <div className="hidden space-x-5 md:flex gap-3 items-center justify-center font-medium text-white">
            <Link
              to={`/`}
              className="flex gap-3 items-center justify-start group w-fit"
            >
              <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Home
              </p>
            </Link>

            <Link
              to={`/about`}
              className="flex gap-3 items-center justify-start group w-fit"
            >
              <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                About Us
              </p>
            </Link>

            <Link
              to={`/contact`}
              className="flex gap-3 items-center justify-start group w-fit"
            >
              <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Contact Us
              </p>
            </Link>
            <Button title="Join Us" onClick={() => {}} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
