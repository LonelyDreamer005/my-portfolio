import React, { useState } from 'react';

function Navbar({ setActiveSection, activeSection }) {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'Home' },
    { name: 'About', href: 'About' },
    { name: 'Skills', href: 'Skills' },
    { name: 'Projects', href: 'Projects' },
    { name: 'Achievements', href: 'Achievements' },
    { name: 'Contact', href: 'Contact' },
  ];

  const getButtonClass = (linkName) => {
    const isActive = activeSection === linkName;
    const baseClasses = 'w-full text-left py-3 px-6 rounded-full text-lg font-semibold border border-white transition-all duration-300';
    const activeClasses = 'bg-white text-[#1F2937] hover:bg-gray-200';
    const inactiveClasses = 'bg-transparent text-white hover:bg-white hover:text-[#1F2937]';
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <div 
      className="fixed left-0 top-0 h-full w-4 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav 
        className={`fixed bg-[#1F2937] h-full w-64 transition-transform duration-300 ease-in-out transform ${
          isHovered ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-white text-3xl font-bold mb-8 p-4 pt-8 text-center">Portfolio</h1>
        <div className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveSection(link.href)}
              className={getButtonClass(link.href)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;