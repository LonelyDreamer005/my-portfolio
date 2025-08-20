import React from 'react';

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
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#A6BED1]">About Me</h2>
        <div className="bg-[#0D273D] rounded-lg p-8 shadow-md border border-[#3E6985]">
          <p className="text-[#CDD7DF] mb-6 leading-relaxed">
            Detail-oriented and passionate Computer Science undergraduate with strong interest in full-stack web development, machine learning, and competitive programming. Skilled at building scalable applications, solving algorithmic problems, and collaborating in dynamic environments.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#3E6985] p-6 rounded-lg shadow-md border border-[#8AA7BC] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#A6BED1] mb-4">Personal Details</h3>
              <ul className="space-y-2 text-[#CDD7DF]">
                {personalDetails.map((detail) => (
                  <li key={detail.label}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#3E6985] p-6 rounded-lg shadow-md border border-[#8AA7BC] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#A6BED1] mb-4">Education</h3>
              <ul className="space-y-4 text-[#CDD7DF]">
                {education.map((edu) => (
                  <li key={edu.degree}>
                    <div className="mb-1 font-semibold">{edu.degree}</div>
                    <div>{edu.institution}</div>
                    <div className="text-sm text-[#8AA7BC]">{edu.years}</div>
                    <div className="text-sm text-[#CDD7DF]">{edu.score}</div>
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