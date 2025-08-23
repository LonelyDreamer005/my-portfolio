import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-[#6B7280] text-center py-6 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {currentYear} Vinay Sagar Paruchuri. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;