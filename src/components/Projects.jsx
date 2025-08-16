import React from 'react';

function Projects() {
  const projects = [
    {
      title: "To-Do List",
      description: "A simple and responsive To-Do list app using HTML, CSS, JavaScript with local storage.",
      image: "/images/To_Do.png",
      link: "https://github.com/LonelyDreamer005/To_do"
    },
    {
      title: "AI-Pokédex",
      description: "Interactive Pokédex using Flask, REST APIs, and JavaScript, with real-time Pokémon data.",
      image: "/images/ai_pokedex.png",
      link: "https://github.com/LonelyDreamer005/Time_Pass"
    },
    {
      title: "Dummy Project 1",
      description: "Placeholder project for layout testing.",
      image: "https://placehold.co/400x250",
      link: "#"
    },
    {
      title: "Dummy Project 2",
      description: "Placeholder project for layout testing.",
      image: "https://placehold.co/400x250",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#F8D794]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#111A19] rounded-lg overflow-hidden shadow-md border border-[#284139]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#809076] mb-2">{project.title}</h3>
                <p className="text-[#DCDEDD] mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#284139] hover:bg-[#1f302a] text-[#F8D794] font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;