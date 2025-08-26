import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  // Add scroll spy functionality to highlight the current section
  useEffect(() => {
    const handleScroll = () => {
      // Track if page is scrolled for navbar styling
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.charAt(0).toUpperCase() + section.slice(1);
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, scrolled]);

  const navLinks = [
    { name: 'Home', href: 'Home' },
    { name: 'About', href: 'About' },
    { name: 'Skills', href: 'Skills' },
    { name: 'Projects', href: 'Projects' },
    { name: 'Achievements', href: 'Achievements' },
    { name: 'Contact', href: 'Contact' },
  ];

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className={`text-xl font-bold ${scrolled ? 'text-[#1F2937]' : 'text-[#1F2937]'} transition-colors duration-300`}
              onClick={(e) => {
                e.preventDefault();
                handleClick('Home');
              }}
            >
              Vinay Sagar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className={`font-medium text-sm transition-colors duration-300 outline-none focus:outline-none hover:no-underline ${
                  activeSection === link.href 
                    ? 'text-[#16A34A] font-semibold'
                    : scrolled 
                      ? 'text-[#4B5563] hover:text-[#16A34A]' 
                      : 'text-[#4B5563] hover:text-[#16A34A]'
                }`}
              >
                <span className="relative">
                  {link.name}
                  {activeSection === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#16A34A] transform origin-left transition-all duration-300"></span>
                  )}
                </span>
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1boDXiZvDRJPN1aKXIgsEm1d8Y8rk8pUy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 outline-none focus:outline-none bg-[#16A34A] text-white hover:bg-[#15803D] hover:shadow-md"
              style={{ color: 'white !important' }} /* Force color override */
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-300 outline-none focus:outline-none ${
              scrolled 
                ? 'text-[#1F2937] hover:text-[#16A34A]' 
                : 'text-[#1F2937] hover:text-[#16A34A]'
            }`}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            className="text-gray-600 p-2 transition-colors duration-300 rounded-full hover:bg-gray-100 outline-none focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className={`py-2 px-4 text-left rounded-md transition-all duration-300 outline-none focus:outline-none ${
                activeSection === link.href 
                  ? 'text-[#16A34A] font-medium' 
                  : 'text-gray-700 hover:text-[#16A34A]'
              }`}
            >
              <span className="relative inline-block">
                {link.name}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#16A34A] transform origin-left transition-all duration-300"></span>
                )}
              </span>
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1boDXiZvDRJPN1aKXIgsEm1d8Y8rk8pUy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-2 px-4 bg-[#16A34A] text-white rounded-md text-center font-medium hover:bg-[#15803D] transition-all duration-300 shadow-sm hover:shadow-md outline-none focus:outline-none"
            style={{ color: 'white !important' }} /* Force color override */
          >
            Resume
          </a>
        </div>
      </div>

      {/* Backdrop for mobile menu with fade transition */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-40 transition-opacity duration-300"
          style={{ 
            animation: 'fadeInBackdrop 0.3s forwards',
            backdropFilter: 'blur(2px)'
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Add global styles for animations and overrides */}
      <style jsx>{`
        @keyframes fadeInBackdrop {
          from { background-opacity: 0; }
          to { background-opacity: 0.3; }
        }
        
        button:focus, button:active {
          outline: none !important;
          box-shadow: none !important;
        }
        
        a[href*="drive.google.com"] {
          color: white !important;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;