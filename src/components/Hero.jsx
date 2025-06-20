import { useState } from "react";
import MyImage from "../assets/MyImage.jpg"; // 👈 correct import
import { Link } from "react-router-dom";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hi, I'm <span className="animate-float inline-block">Anuj Gautam</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </h2>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            I love turning ideas into real-world solutions through code. Whether it's building web apps or solving complex problems, I enjoy crafting clean and impactful software.
          </p>

          <div className="flex justify-center space-x-4 ">
            <Link
             to="/projects" 
              className="px-6 py-3 bg-accent bg-purple-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-purple-500/30"
            >
              View Projects
            </Link>
            
         
            <Link
              to="/contact" 
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-medium rounded-full transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          {/* <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-lg">
            {!imageError ? (
              <img
                src={MyImage}
                alt="Anuj Gautam"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
                DP
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
