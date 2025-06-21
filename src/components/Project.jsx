




import React from 'react';
import EV from '../assets/EV.jpg'
import notes from '../assets/notes.jpg'
import test from '../assets/test.jpg'

// Mock images for demonstration



const projects = [
  {
    id: 1,
    title: "EV-Station",
    description: "Built a MERN-based web app integrating machine learning and Google Maps API for intelligent EV station planning and real-time monitoring.",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API", "Python", "K-Mean"],
    link: "https://evmgmnt.netlify.app/",
    image: EV
  },
  {
    id: 2,
    title: "ManitStudyPortal",
    description: "Built a study portal for MANIT students to upload, browse, and upvote notes, PYQs, and assignments with authentication and cloud-based file storage.",
    tags: ["React", "Tailwind CSS", "MongoDb", "Express", "FireBase", "Cloudinary"],
    link: "https://manitstudyportal.netlify.app/",
    image: notes
  },
  {
    id: 3,
    title: "Online-Test",
    description: "Developed an online test platform with admin-controlled test creation, student registration via codes, auto-evaluation for MCQs and coding, and real-time leaderboards.",
    tags: ["React", "MongoDb", "Judge Api", "Express", "NOdeJs", "Cloudinary"],
    link: "https://onilnetest.netlify.app/",
    image: test
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with animated elements */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient-x">
              My Projects
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border border-gray-700/50 flex flex-col h-full"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Project Image Container with enhanced effects */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center text-white font-medium text-sm bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full shadow-lg">
                      View Project
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Project Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Glowing accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                
                {/* Enhanced Tags with glow effect */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="relative px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${tagIndex * 100}ms`
                      }}
                    >
                      {tag}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </span>
                  ))}
                </div>
                
                {/* Enhanced Action Buttons */}
                <div className="flex justify-between items-center">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10">Visit Live</span>
                    <svg className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </a>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2.5 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:bg-purple-500/10 rounded-full border border-transparent hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 group/icon"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <svg className="h-5 w-5 transform group-hover/icon:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 blur-md"></div>
                    </a>
                    
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2.5 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:bg-pink-500/10 rounded-full border border-transparent hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 group/icon"
                      aria-label="Source Code"
                      title="Source Code"
                    >
                      <svg className="h-5 w-5 transform group-hover/icon:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <div className="absolute inset-0 bg-pink-400/20 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 blur-md"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;