import React from 'react';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function Skills() {
  const skills = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java'],
    'Web': ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Node.js'],
    'Databases': ['MongoDB', 'SQL Server'],
    'Tools': ['Git', 'GitHub', 'Figma', 'Canva', 'Tableau'],
    'Core Skills': ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Database Management']
  };

  return (
    <section id="skills" className="py-10" style={{ backgroundColor: colors.feldgrau }}>
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: colors.wheat }}>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category} 
              className="rounded-lg p-4 shadow-sm border transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md"
              style={{ backgroundColor: colors.wheat, borderColor: colors.accentGreen }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.darkText }}>{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skillList.map((skill) => (
                  <span
                    key={`${category}-${skill}`}
                    className="px-2 py-0.5 rounded-full text-sm border"
                    style={{ 
                      backgroundColor: colors.feldgrau, 
                      color: colors.wheat,
                      borderColor: colors.accentGreen 
                    }}
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