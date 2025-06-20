const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hi, I'm <span className="animate-float inline-block">Your Name</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            I build exceptional digital experiences with modern technologies. 
            Passionate about creating efficient, scalable solutions and solving 
            complex problems. Currently focused on React, Node.js, and cloud technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-accent hover:bg-purple-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-purple-500/30"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-medium rounded-full transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-lg">
            {/* Replace with your image */}
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-4xl">
              DP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;