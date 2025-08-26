import React from 'react';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function Achievements() {
  const achievements = [
    {
      title: "Machine Learning Specialization — Coursera (Andrew Ng)",
      description: "Completed ML specialization covering supervised learning, neural networks, and advanced ML techniques.",
      date: "2024",
    },
    {
      title: "SQL (Basic) — HackerRank",
      description: "Earned SQL (Basic) certificate validating knowledge of queries, joins, and database operations.",
      date: "2024",
    },
    {
      title: "Data Analytics Virtual Internship — Deloitte (Forage)",
      description: "Completed Deloitte’s virtual internship, applying analytics to business scenarios and dashboards.",
      date: "2024",
    },
    {
      title: "500+ Coding Problems Solved",
      description: "Solved problems across LeetCode, Codeforces, CodeChef, and HackerRank, sharpening DSA and problem-solving.",
      date: "2023 – Present",
    },
    {
      title: "Hackathon Participation",
      description: "Participated in Convergence 2023 and GDSC Hackathons (2024–25), developing real-world solutions.",
      date: "2023 – 2025",
    },
    {
      title: "Community Contributions",
      description: "Actively collaborate in coding communities, sharing knowledge on problem-solving and system design.",
      date: "Ongoing",
    },
  ];

  return (
    <section id="achievements" className="py-10" style={{ backgroundColor: colors.wheat }}>
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: colors.darkText }}>
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="rounded-lg p-4 shadow-sm border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md"
              style={{ backgroundColor: colors.feldgrau, borderColor: colors.accentGreen }}
            >
              <h3 className="text-lg font-semibold mb-1.5" style={{ color: colors.wheat }}>
                {achievement.title}
              </h3>
              <p className="mb-2 text-sm" style={{ color: colors.wheat }}>{achievement.description}</p>
              <p className="text-xs font-semibold" style={{ color: 'rgba(230, 207, 167, 0.8)' }}>
                {achievement.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
