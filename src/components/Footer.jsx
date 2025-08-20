import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0D273D] text-[#8AA7BC] text-center py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {currentYear} Vinay Sagar Paruchuri. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;