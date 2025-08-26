import React from 'react';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function About() {
  const personalDetails = [
    { label: 'Name', value: 'Vinay Sagar Paruchuri' },
    { label: 'Location', value: 'Hyderabad, Telangana' },
    { label: 'Email', value: 'vinay2020x15.10@gmail.com' },
    { label: 'Phone', value: '+91-9392570591' },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad',
      years: '2023–2027',
      score: 'CGPA: 8.2/10.0',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      years: '2021–2023',
      score: 'Score: 93.7%',
    },
    {
      degree: 'SSC',
      institution: 'Narayana High School',
      years: 'Completed 2021',
      score: 'Score: 10.0/10.0',
    },
  ];

  return (
    <section id="about" className="py-10" style={{ backgroundColor: colors.wheat }}>
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: colors.darkText }}>About Me</h2>
        <div className="rounded-lg p-5 shadow-sm border" style={{ backgroundColor: colors.feldgrau, borderColor: colors.accentGreen, color: colors.lightText }}>
          <p className="mb-6 leading-relaxed" style={{ color: colors.lightText }}>
            Detail-oriented and passionate Computer Science undergraduate with strong interest in full-stack web development, machine learning, and competitive programming. Skilled at building scalable applications, solving algorithmic problems, and collaborating in dynamic environments.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg shadow-sm border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md" style={{ backgroundColor: colors.wheat, borderColor: colors.feldgrau, color: colors.darkText }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.darkText }}>Personal Details</h3>
              <ul className="space-y-2" style={{ color: colors.darkText }}>
                {personalDetails.map((detail) => (
                  <li key={detail.label}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-lg shadow-sm border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md" style={{ backgroundColor: colors.wheat, borderColor: colors.feldgrau, color: colors.darkText }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.darkText }}>Education</h3>
              <ul className="space-y-4" style={{ color: colors.darkText }}>
                {education.map((edu) => (
                  <li key={edu.degree}>
                    <div className="mb-1 font-semibold">{edu.degree}</div>
                    <div>{edu.institution}</div>
                    <div className="text-sm">{edu.years}</div>
                    <div className="text-sm">{edu.score}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;