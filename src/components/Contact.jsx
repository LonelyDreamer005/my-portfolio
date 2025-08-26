import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function Contact() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vinay-sagar-paruchuri', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/LonelyDreamer005', icon: <FaGithub /> },
    { name: 'LeetCode', url: 'https://leetcode.com/u/vinay_sagar_005/', icon: <SiLeetcode /> },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/daydreamer005', icon: <SiCodechef /> },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/vinay2020x15_10', icon: <FaHackerrank /> },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/lonely_soul005', icon: <FaCode /> },
  ];

  return (
    <section id="contact" className="py-10" style={{ backgroundColor: colors.feldgrau }}>
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: colors.wheat }}>Contact Me</h2>
        <div className="rounded-lg p-5 shadow-sm border" style={{ backgroundColor: colors.wheat, borderColor: colors.accentGreen }}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-lg shadow-sm border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md" 
                style={{ backgroundColor: colors.feldgrau, borderColor: colors.accentGreen }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.wheat }}>Get In Touch</h3>
              <p className="mb-2 text-sm" style={{ color: colors.wheat }}>
                Feel free to reach out to me for collaborations, questions, or just to say hi!
              </p>
              <ul className="space-y-1 text-sm" style={{ color: colors.wheat }}>
                <li><strong>Email:</strong> vinay2020x15.10@gmail.com</li>
                <li><strong>Phone:</strong> +91-9392570591</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg shadow-sm border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md"
                style={{ backgroundColor: colors.feldgrau, borderColor: colors.accentGreen }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.wheat }}>Connect on Social</h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-300 hover:shadow-md border group transform transition-transform duration-300 hover:scale-[1.1]"
                    title={link.name}
                    style={{ 
                      backgroundColor: colors.wheat,
                      borderColor: colors.accentGreen
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.wheat}
                  >
                    <span className="transition duration-300 text-xl" style={{ color: colors.feldgrau }}>
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Contact;