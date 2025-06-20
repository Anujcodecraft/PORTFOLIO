const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag-and-drop functionality.",
    tags: ["React", "Firebase", "DnD"],
    link: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather information with forecast data visualization.",
    tags: ["API", "Chart.js", "React"],
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-primary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-2 border border-gray-800"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 text-sm font-medium text-accent hover:text-white hover:bg-accent rounded-full border border-accent transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;