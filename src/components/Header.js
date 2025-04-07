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
                            <header className="bg-white shadow-md fixed w-full z-10">
                                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                        <div className="flex justify-between h-16">
                                                                      <div className="flex items-center">
                                                                                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex-shrink-0 flex items-center">
                                                                                                  <span className="text-2xl font-bold text-indigo-600">Portfolio</span>
                                                                                    </a>
                                                                      </div>
                                                                      
                                                                      {/* Desktop Navigation */}
                                                                      <nav className="hidden md:flex space-x-10 items-center">
                                                                                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-700 hover:text-indigo-600 transition duration-300">Home</a>
                                                                                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-indigo-600 transition duration-300">About</a>
                                                                                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-gray-700 hover:text-indigo-600 transition duration-300">Projects</a>
                                                                                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-gray-700 hover:text-indigo-600 transition duration-300">Skills</a>
                                                                                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-700 hover:text-indigo-600 transition duration-300">Contact</a>
                                                                      </nav>
                                                                      
                                                                      {/* Mobile menu button */}
                                                                      <div className="md:hidden flex items-center">
                                                                                    <button 
                                                                                                  onClick={toggleMenu}
                                                                                                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
                                                                                    >
                                                                                                  <svg 
                                                                                                                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                                                                                                xmlns="http://www.w3.org/2000/svg" 
                                                                                                                fill="none" 
                                                                                                                viewBox="0 0 24 24" 
                                                                                                                stroke="currentColor" 
                                                                                                                aria-hidden="true"
                                                                                                  >
                                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                                                                                  </svg>
                                                                                                  <svg 
                                                                                                                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                                                                                                xmlns="http://www.w3.org/2000/svg" 
                                                                                                                fill="none" 
                                                                                                                viewBox="0 0 24 24" 
                                                                                                                stroke="currentColor" 
                                                                                                                aria-hidden="true"
                                                                                                  >
                                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                                                  </svg>
                                                                                    </button>
                                                                      </div>
                                                        </div>
                                          </div>
                                          
                                          {/* Mobile Navigation */}
                                          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                                                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                                                                      <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Home</a>
                                                                      <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">About</a>
                                                                      <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Projects</a>
                                                                      <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Skills</a>
                                                                      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Contact</a>
                                                        </div>
                                          </div>
                            </header>
              );
};

export default Header;