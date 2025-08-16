// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' }, // <-- Add the new link
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111A19] shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-[#809076]">Vinay Sagar</a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[#809076] hover:text-[#284139] transition duration-300">
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#809076] focus:outline-none hover:text-[#284139] transition-colors duration-300"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#111A19] py-2 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={handleLinkClick} className="block px-4 py-2 text-[#809076] hover:bg-gray-800 hover:text-[#284139]">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;