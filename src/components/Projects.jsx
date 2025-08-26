import React, { useState } from 'react';
import todoImage from '../assets/images/To_Do.png';
import pokedexImage from '../assets/images/ai_pokedex.png';
import mixDesk from '../assets/images/mixDesk.png'; 
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Feldgrau and Wheat color palette
const colors = {
  feldgrau: '#3A4B41',
  wheat: '#E6CFA7',
  darkText: '#3A4B41',
  lightText: '#E6CFA7',
  accentGreen: '#4A5D4E'
};

function Projects() {
  // State for project details modal
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'todo-app',
      title: "To-Do List",
      description: "Responsive task management app with local storage persistence and clean UI.",
      image: todoImage,
      github: "https://github.com/LonelyDreamer005/To_do",
      demo: "https://lonelydreamer005.github.io/To_do/", // Replace with actual demo when available
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        "Task creation and deletion",
        "Local storage persistence",
        "Responsive design for all devices",
        "Task completion tracking"
      ]
    },
    {
      id: 'pokedex',
      title: "AI-Pokédex",
      description: "Flask-powered Pokémon database with REST API integration and interactive UI.",
      image: pokedexImage,
      github: "https://github.com/LonelyDreamer005/Time_Pass",
      demo: "https://github.com/LonelyDreamer005/Time_Pass", // Replace with actual demo when available
      tech: ['Flask', 'Python', 'JavaScript', 'REST APIs'],
      features: [
        "Pokémon data retrieval via REST API",
        "Search functionality",
        "Detailed Pokémon statistics",
        "Responsive web interface"
      ]
    },
    {
      id: 'all-in-one',
      title: "All-in-One Tool",
      description: "React application integrating calculator, weather, timer and currency tools with a collapsible navigation system.",
      image: mixDesk,
      github: "https://github.com/LonelyDreamer005/calc-weather-currency",
      demo: "https://github.com/LonelyDreamer005/calc-weather-currency", // Replace with actual demo when available
      tech: ['React', 'Tailwind CSS', 'APIs'],
      features: [
        "Multi-functional calculator",
        "Weather forecast integration",
        "Currency converter with live rates",
        "Timer with notifications",
        "Unified sidebar navigation"
      ]
    }
  ];

  const openProjectModal = (project) => {
    setActiveProject(project);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-10" style={{ backgroundColor: colors.feldgrau }}>
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: colors.wheat }}>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden shadow-sm border border-opacity-20 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: colors.wheat, borderColor: colors.feldgrau }}
            >
              <div 
                className="relative overflow-hidden h-44 cursor-pointer" 
                onClick={() => openProjectModal(project)}
              >
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                  <span className="opacity-0 hover:opacity-100 text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50 transition-opacity duration-300">
                    View Details
                  </span>
                </div> */}
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="flex-grow p-3">
                <h3 className="text-lg font-semibold mb-1.5" style={{ color: colors.darkText }}>{project.title}</h3>
                <p className="text-sm mb-2.5" style={{ color: colors.darkText }}>{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: colors.feldgrau, color: colors.wheat }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-3 pb-3 mt-auto pt-3" style={{ borderTop: `1px solid ${colors.feldgrau}`, borderTopOpacity: 0.2 }}>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} code on GitHub`}
                    className="flex items-center justify-center gap-2 flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors"
                    style={{ backgroundColor: colors.accentGreen, color: colors.wheat }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.feldgrau}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(58, 75, 65, 0.8)' }}>
          <div className="rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: colors.wheat }}>
            <div className="sticky top-0 z-10 flex justify-between items-center p-4" style={{ backgroundColor: colors.wheat, borderBottom: `1px solid ${colors.feldgrau}`, borderBottomOpacity: 0.2 }}>
              <h3 className="text-xl font-bold" style={{ color: colors.darkText }}>{activeProject.title}</h3>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-md"
                style={{ color: colors.darkText }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.feldgrau}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-4">
              <img
                src={activeProject.image}
                alt={`${activeProject.title} project screenshot`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              
              <p className="mb-4" style={{ color: colors.darkText }}>{activeProject.description}</p>
              
              <h4 className="font-semibold mb-2" style={{ color: colors.darkText }}>Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tech.map((tech) => (
                  <span
                    key={`modal-${activeProject.id}-${tech}`}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: colors.feldgrau, color: colors.wheat }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2" style={{ color: colors.darkText }}>Key Features</h4>
              <ul className="list-disc pl-5 mb-6" style={{ color: colors.darkText }}>
                {activeProject.features.map((feature, index) => (
                  <li key={`feature-${index}`}>{feature}</li>
                ))}
              </ul>
              
              <div className="flex gap-4 mt-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 font-medium rounded-md transition-colors"
                  style={{ backgroundColor: colors.accentGreen, color: colors.wheat }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.feldgrau}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
                >
                  <FaGithub size={18} />
                  <span>View Source Code</span>
                </a>
                
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 font-medium rounded-md transition-colors border"
                  style={{ backgroundColor: 'transparent', color: colors.darkText, borderColor: colors.darkText }}
                  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.feldgrau; e.currentTarget.style.color = colors.wheat;}}
                  onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.darkText;}}
                >
                  <FiExternalLink size={18} />
                  <span>View Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;