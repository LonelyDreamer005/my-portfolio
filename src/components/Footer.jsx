import React from 'react';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-3 border-t" style={{ backgroundColor: colors.feldgrau, borderColor: colors.accentGreen, color: colors.wheat }}>
      <div className="max-w-7xl mx-auto px-3">
        <p className="text-sm">&copy; {currentYear} Vinay Sagar Paruchuri. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;