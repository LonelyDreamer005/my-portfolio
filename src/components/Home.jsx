import React from 'react';

import profileImage from '../assets/images/profile.png';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function Home({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center py-10" style={{ backgroundColor: colors.wheat }}>
      <div 
        className="text-center p-6 sm:p-7 md:p-8 rounded-xl shadow-md max-w-3xl mx-auto border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
        style={{ backgroundColor: colors.feldgrau, borderColor: colors.accentGreen }}
      >
        <div className="mb-5">
          <img
            src={profileImage}
            alt="Vinay Sagar Paruchuri"
            className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-5 object-cover transform transition duration-500 hover:scale-105 shadow"
            style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: colors.accentGreen }}
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4" style={{ color: colors.wheat }}>
          Vinay Sagar Paruchuri
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6" style={{ color: colors.wheat }}>
          Aspiring Full-Stack Developer | Machine Learning Enthusiast | Competitive Programmer
        </h2>

        <p className="max-w-2xl mx-auto mb-10 px-2 leading-relaxed" style={{ color: colors.wheat }}>
          Detail-oriented and passionate Computer Science undergraduate with strong interest in full-stack web development, machine learning, and competitive programming. Skilled at building scalable applications, solving algorithmic problems, and collaborating in dynamic environments.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <button
            onClick={() => scrollToSection('Contact')}
            className="w-full sm:w-auto font-bold py-2 px-6 rounded-md transition duration-300 shadow-sm hover:shadow-md text-center cursor-pointer"
            style={{ backgroundColor: colors.wheat, color: colors.feldgrau }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.wheat}
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/1boDXiZvDRJPN1aKXIgsEm1d8Y8rk8pUy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-bold py-2 px-6 rounded-md transition duration-300 border shadow-sm hover:shadow-md text-center"
            style={{ backgroundColor: 'transparent', color: colors.wheat, borderColor: colors.wheat }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.wheat;
              e.currentTarget.style.color = colors.feldgrau;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = colors.wheat;
            }}
          >
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;