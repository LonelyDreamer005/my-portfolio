import React from 'react';

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
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#F8D794]">
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#111A19] rounded-lg p-6 shadow-md border border-[#284139] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-[#809076] mb-2">
                {achievement.title}
              </h3>
              <p className="text-[#DCDEDD] mb-4">{achievement.description}</p>
              <p className="text-sm font-semibold text-[#74483F]">
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