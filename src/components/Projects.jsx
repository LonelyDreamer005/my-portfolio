import React, { useState } from 'react';
import todoImage from '../assets/images/To_Do.png';
import pokedexImage from '../assets/images/ai_pokedex.png';
import mixDesk from '../assets/images/mixDesk.png'; 
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

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
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#1F2937]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
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
              
              <div className="flex-grow p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-5 pb-5 mt-auto border-t border-gray-100 pt-4">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} code on GitHub`}
                    className="flex items-center justify-center gap-2 flex-1 py-2 px-3 !bg-[#16A34A] hover:bg-[#15803D] !text-white text-sm font-medium rounded-md transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <FiExternalLink size={16} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-100 flex justify-between items-center p-4">
              <h3 className="text-xl font-bold text-gray-800">{activeProject.title}</h3>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
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
              
              <p className="text-gray-700 mb-4">{activeProject.description}</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tech.map((tech) => (
                  <span
                    key={`modal-${activeProject.id}-${tech}`}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                {activeProject.features.map((feature, index) => (
                  <li key={`feature-${index}`}>{feature}</li>
                ))}
              </ul>
              
              <div className="flex gap-4 mt-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-[#16A34A] hover:bg-[#15803D] text-white font-medium rounded-md transition-colors"
                >
                  <FaGithub size={18} />
                  <span>View Source Code</span>
                </a>
                
                {/* <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FiExternalLink size={18} />
                  <span>View Live Demo</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;