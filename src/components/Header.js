import React, { useState } from 'react';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
         setIsMenuOpen(false);
      }
   };

   return (
      <header className="bg-black text-white fixed top-0 left-0 w-full shadow-lg shadow-purple-500/20 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
               <div className="flex items-center">
                  <a 
                     href="#Profile" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('Profile'); }} 
                     className="flex-shrink-0 flex items-center"
                  >
                     <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                        Portfolio
                     </span>
                  </a>
               </div>
               
               {/* Desktop Navigation */}
               <nav className="hidden md:flex space-x-8 items-center">
                  <a 
                     href="#Profile" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('Profile'); }} 
                     className="font-medium text-gray-400 hover:text-cyan-400 transition duration-300"
                  >
                     Profile
                  </a>
                  <a 
                     href="#projects" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
                     className="font-medium text-gray-400 hover:text-cyan-400 transition duration-300"
                  >
                     Projects
                  </a>
                  <a 
                     href="#contact" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                     className="font-medium text-gray-400 hover:text-cyan-400 transition duration-300"
                  >
                     Contact
                  </a>
                  <a 
                     href="#contact" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                     className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:from-purple-700 hover:to-cyan-600 transition duration-300 border border-purple-400/30"
                  >
                     Get in Touch
                  </a>
               </nav>
               
               {/* Mobile menu button */}
               <div className="md:hidden flex items-center">
                  <button 
                     onClick={toggleMenu}
                     className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 focus:outline-none"
                  >
                     <svg 
                        className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                     <svg 
                        className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
               </div>
            </div>
               
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border border-purple-500/20 rounded-lg mt-2">
                  <a 
                     href="#Profile" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('Profile'); }} 
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
                  >
                     Profile
                  </a>
                  <a 
                     href="#projects" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
                  >
                     Projects
                  </a>
                  <a 
                     href="#contact" 
                     onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
                  >
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
