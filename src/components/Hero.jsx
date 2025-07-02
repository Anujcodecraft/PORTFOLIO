// import { useState } from "react";
// import MyImage from "../assets/MyImage.jpg"; // 👈 correct import
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const [imageError, setImageError] = useState(false);

//   return (
//     <section className="min-h-screen flex items-center justify-center pt-20">
//       <div className="container mx-auto px-4 py-16 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//             Hi, I'm <span className="animate-float inline-block">Anuj Gautam</span>
//           </h1>
//           <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
//             Full Stack Developer | Problem Solver | Tech Enthusiast
//           </h2>

//           <p className="text-lg text-black mb-12 leading-relaxed">
//             I love turning ideas into real-world solutions through code. Whether it's building web apps or solving complex problems, I enjoy crafting clean and impactful software.
//           </p>

//           <div className="flex justify-center space-x-4 ">
//             <Link
//              to="/projects" 
//               className="px-6 py-3 bg-accent bg-purple-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-purple-500/30"
//             >
//               View Projects
//             </Link>
            
         
//             <Link
//               to="/contact" 
//               className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-medium rounded-full transition-all"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         <div className="mt-20 flex justify-center">
//           {/* <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-lg">
//             {!imageError ? (
//               <img
//                 src={MyImage}
//                 alt="Anuj Gautam"
//                 onError={() => setImageError(true)}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
//                 DP
//               </div>
//             )}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['React', 'Node.js', 'Python', 'MongoDB', 'JavaScript'];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Floating orbs with mouse interaction */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${10 + mousePosition.x * 0.1}%`,
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            bottom: `${10 + mousePosition.y * 0.05}%`,
            right: `${10 + mousePosition.x * 0.05}%`,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-500/15 to-blue-500/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: `${60 + mousePosition.y * 0.08}%`,
            right: `${30 + mousePosition.x * 0.08}%`,
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced main heading with advanced animations */}
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="block text-gray-300 mb-2 text-2xl md:text-3xl font-light">
                Hi, I'm
              </span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient-x">
                  Anuj Gautam
                </span>
                {/* Text glow effect */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 blur-2xl opacity-50 animate-pulse">
                  Anuj Gautam
                </span>
              </span>
              
              {/* Floating accent elements around name */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce"></div>
            </h1>
          </div>

          {/* Enhanced subtitle with typewriter effect */}
          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-xl md:text-3xl font-medium text-gray-300 mb-8 relative">
              <span className="inline-block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
                  Full Stack Developer | Problem Solver | Tech Enthusiast
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </span>
            </h2>
          </div>

          {/* Enhanced description with subtle animations */}
          <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
              I love turning ideas into 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> real-world solutions </span>
              through code. Whether it's building web apps or solving complex problems, I enjoy crafting 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> clean and impactful </span>
              software.
            </p>
          </div>

          {/* Floating skills tags */}
          <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="relative group cursor-default"
                  style={{
                    animationDelay: `${index * 200 + 1000}ms`,
                    animation: 'fadeInScale 0.8s ease-out forwards'
                  }}
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
                    {skill}
                  </span>
                  {/* Skill tag glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="/projects"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            </a>
            
            <a
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 border-2 border-purple-500/50 text-purple-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Contact Me
                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              {/* Button border glow */}
              <div className="absolute inset-0 border-2 border-purple-400/0 group-hover:border-purple-400/50 rounded-full transition-all duration-300 blur-sm"></div>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className={`mt-20 flex justify-center transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group cursor-pointer">
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1 hover:border-purple-400 transition-colors duration-300">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full animate-bounce mx-auto"></div>
              </div>
              <p className="text-gray-500 text-sm mt-2 group-hover:text-purple-400 transition-colors duration-300">
                Scroll to explore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Custom scrollbar for modern look */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </section>
  );
};

export default Hero;
