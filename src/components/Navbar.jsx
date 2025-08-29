import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`} 
         style={{ 
           backgroundColor: scrolled ? colors.feldgrau : 'transparent', 
           boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
           padding: scrolled ? '0.75rem 0' : '1.25rem 0'
         }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-xl font-bold transition-colors duration-300"
              style={{ color: scrolled ? colors.wheat : colors.darkText }}
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
                className="font-medium text-sm transition-colors duration-300 outline-none focus:outline-none hover:no-underline"
                style={{ 
                  color: activeSection === link.href 
                    ? (scrolled ? colors.wheat : colors.accentGreen)
                    : (scrolled ? colors.wheat : colors.darkText)
                }}
              >
                <span className="relative">
                  {link.name}
                  {activeSection === link.href && (
                    <span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-all duration-300"
                      style={{ backgroundColor: scrolled ? colors.wheat : colors.accentGreen }}
                    ></span>
                  )}
                </span>
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1L12uBxR223fBKISFUZbw0B45kxe8kQu2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 outline-none focus:outline-none hover:shadow-md"
              style={{ 
                backgroundColor: scrolled ? colors.wheat : colors.feldgrau, 
                color: scrolled ? colors.feldgrau : colors.wheat 
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = scrolled ? colors.accentGreen : colors.accentGreen}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = scrolled ? colors.wheat : colors.feldgrau}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md transition-colors duration-300 outline-none focus:outline-none"
            style={{ 
              color: scrolled ? colors.wheat : colors.darkText 
            }}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ backgroundColor: colors.feldgrau }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            className="p-2 transition-colors duration-300 rounded-full outline-none focus:outline-none"
            style={{ color: colors.wheat }}
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
              className="py-2 px-4 text-left rounded-md transition-all duration-300 outline-none focus:outline-none"
              style={{ 
                color: activeSection === link.href ? colors.wheat : 'rgba(230, 207, 167, 0.7)'
              }}
            >
              <span className="relative inline-block">
                {link.name}
                {activeSection === link.href && (
                  <span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-all duration-300"
                    style={{ backgroundColor: colors.wheat }}
                  ></span>
                )}
              </span>
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1L12uBxR223fBKISFUZbw0B45kxe8kQu2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-2 px-4 rounded-md text-center font-medium transition-all duration-300 shadow-sm hover:shadow-md outline-none focus:outline-none"
            style={{ 
              backgroundColor: colors.wheat,
              color: colors.feldgrau
            }}
          >
            Resume
          </a>
        </div>
      </div>

      {/* Backdrop for mobile menu with fade transition */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-300"
          style={{ 
            backgroundColor: 'rgba(58, 75, 65, 0.5)',
            backdropFilter: 'blur(3px)'
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Add global styles for animations and overrides */}
      <style jsx>{`
        button:focus, button:active {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;