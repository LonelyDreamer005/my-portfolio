import React from 'react';

function Skills() {
  const skills = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java'],
    'Web': ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Node.js'],
    'Databases': ['MongoDB', 'SQL Server'],
    'Tools': ['Git', 'GitHub', 'Figma', 'Canva', 'Tableau'],
    'Core Skills': ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Database Management']
  };

  return (
  <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-[#A6BED1]">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
      <div key={category} className="bg-[#0D273D] rounded-lg p-6 shadow-md border border-[#3E6985] transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-[#8AA7BC] mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={`${category}-${skill}`}
          className="bg-[#3E6985] text-[#CDD7DF] px-3 py-1 rounded-full text-sm border border-[#8AA7BC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;