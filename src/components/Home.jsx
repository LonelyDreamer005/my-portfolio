import React from 'react';

const profileImage = '/profile.jpg';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16">
      <div className="text-center bg-[#111A19] p-8 sm:p-10 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto border border-[#284139] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Vinay Sagar Paruchuri"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-8 object-cover transform transition duration-500 hover:scale-105 border-4 border-[#284139] shadow-lg"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8D794] mb-4">
          Vinay Sagar Paruchuri
        </h1>
        
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#809076] font-semibold mb-6">
          Aspiring Full-Stack Developer | Machine Learning Enthusiast | Competitive Programmer
        </h2>
        
        <p className="max-w-2xl mx-auto text-[#DCDEDD] mb-10 px-2 leading-relaxed">
          Detail-oriented and passionate Computer Science undergraduate with strong interest in full-stack web development, machine learning, and competitive programming. Skilled at building scalable applications, solving algorithmic problems, and collaborating in dynamic environments.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#284139] hover:bg-[#1f302a] text-[#F8D794] font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-center"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1boDXiZvDRJPN1aKXIgsEm1d8Y8rk8pUy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#111A19] hover:bg-[#1B1B1B] text-[#809076] font-bold py-3 px-8 rounded-lg transition duration-300 border border-[#284139] shadow-md hover:shadow-lg text-center"
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