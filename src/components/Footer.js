import React from 'react';

// filepath: c:\Users\Youcode\portfolio-frontend\src\components\Footer.js

const Footer = () => {
              const currentYear = new Date().getFullYear();
              
              const scrollToSection = (sectionId) => {
                            const section = document.getElementById(sectionId);
                            if (section) {
                                          section.scrollIntoView({ behavior: 'smooth' });
                            }
              };

              return (
                            <footer className="bg-black text-white border-t border-purple-500/20 py-8">
                                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                                      {/* Logo & Description */}
                                                                      <div className="flex flex-col items-center md:items-start">
                                                                                    <a 
                                                                                                  href="#Profile" 
                                                                                                  onClick={(e) => { e.preventDefault(); scrollToSection('Profile'); }}
                                                                                                  className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-3"
                                                                                    >
                                                                                                  Portfolio
                                                                                    </a>
                                                                                    <p className="text-gray-400 text-sm text-center md:text-left">
                                                                                                  Creating innovative solutions through code. Let's build something amazing together.
                                                                                    </p>
                                                                      </div>
                                                                      
                                                                      {/* Navigation Links */}
                                                                      <div className="flex flex-col items-center md:items-start">
                                                                                    <h3 className="text-white font-semibold mb-4">Navigation</h3>
                                                                                    <div className="flex flex-col space-y-2">
                                                                                                  <a 
                                                                                                                href="#Profile" 
                                                                                                                onClick={(e) => { e.preventDefault(); scrollToSection('Profile'); }} 
                                                                                                                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-sm"
                                                                                                  >
                                                                                                                Profile
                                                                                                  </a>
                                                                                                  <a 
                                                                                                                href="#projects" 
                                                                                                                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
                                                                                                                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-sm"
                                                                                                  >
                                                                                                                Projects
                                                                                                  </a>
                                                                                                  <a 
                                                                                                                href="#contact" 
                                                                                                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                                                                                                                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-sm"
                                                                                                  >
                                                                                                                Contact
                                                                                                  </a>
                                                                                    </div>
                                                                      </div>
                                                                      
                                                                      {/* Social Media */}
                                                                      <div className="flex flex-col items-center md:items-start">
                                                                                    <h3 className="text-white font-semibold mb-4">Connect</h3>
                                                                                    <div className="flex space-x-4">
                                                                                                  <a href="https://github.com/9asdaoui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                                                                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                                                                                </svg>
                                                                                                  </a>
                                                                                                  <a href="https://www.linkedin.com/in/oussama-qasdaoui-692164287/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                                                                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                                                                                </svg>
                                                                                                  </a>
                                                                                                  <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                                                                </svg>
                                                                                                  </a>
                                                                                    </div>
                                                                      </div>
                                                        </div>
                                                        
                                                        <div className="mt-8 pt-6 border-t border-gray-800 flex justify-center">
                                                                      <p className="text-gray-500 text-sm">
                                                                                    © {currentYear} Portfolio. All rights reserved.
                                                                      </p>
                                                        </div>
                                          </div>
                            </footer>
              );
};

export default Footer;