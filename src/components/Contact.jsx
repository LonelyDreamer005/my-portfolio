import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

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
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#A6BED1]">Contact Me</h2>
        <div className="bg-[#0D273D] rounded-lg p-8 shadow-md border border-[#3E6985]">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#3E6985] p-6 rounded-lg shadow-md border border-[#8AA7BC] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#A6BED1] mb-4">Get In Touch</h3>
              <p className="text-[#CDD7DF] mb-4">
                Feel free to reach out to me for collaborations, questions, or just to say hi!
              </p>
              <ul className="space-y-2 text-[#CDD7DF]">
                <li><strong>Email:</strong> vinay2020x15.10@gmail.com</li>
                <li><strong>Phone:</strong> +91-9392570591</li>
              </ul>
            </div>
            <div className="bg-[#3E6985] p-6 rounded-lg shadow-md border border-[#8AA7BC] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#A6BED1] mb-4">Connect on Social</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0D273D] hover:bg-[#3E6985] p-3 rounded-lg transition-all duration-300 hover:shadow-md border border-[#3E6985] hover:border-[#8AA7BC] group transform transition-transform duration-300 hover:scale-[1.1]"
                    title={link.name}
                  >
                    <span className="text-[#CDD7DF] group-hover:text-[#A6BED1] transition duration-300 text-2xl">
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