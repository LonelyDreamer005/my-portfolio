import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111A19] text-[#809076] text-center py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {currentYear} Vinay Sagar Paruchuri. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;