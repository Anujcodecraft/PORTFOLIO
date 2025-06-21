// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-md z-50 shadow-lg">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold text-accent">Portfolio</div>
//           <div className="hidden md:flex space-x-6">
//             <NavLink 
//               to="/" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink 
//               to="/projects" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               Projects
//             </NavLink>
//             <NavLink 
//               to="https://leetcode.com/u/ag083519/" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               LeetCode
//             </NavLink>
//             <NavLink 
//               to="https://www.geeksforgeeks.org/user/ag083dc0n/" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               GFG
//             </NavLink>
//             <NavLink 
//               to="https://github.com/Anujcodecraft" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               GitHub
//             </NavLink>
//             <NavLink 
//               to="https://www.linkedin.com/in/anuj-gautam-277a64257/" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               LinkedIn
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               className={({ isActive }) => 
//                 `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
//               }
//             >
//               Contact
//             </NavLink>
//           </div>
//           {/* Mobile menu button */}
//           <button className="md:hidden text-gray-300 focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'Projects', href: '/projects', isExternal: false },
    { name: 'LeetCode', href: 'https://leetcode.com/u/ag083519/', isExternal: true },
    { name: 'GFG', href: 'https://www.geeksforgeeks.org/user/ag083dc0n/', isExternal: true },
    { name: 'GitHub', href: 'https://github.com/Anujcodecraft', isExternal: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anuj-gautam-277a64257/', isExternal: true },
    { name: 'Contact', href: '/contact', isExternal: false }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}>
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
        
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <div className="relative group cursor-pointer">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-400 hover:to-blue-500 transition-all duration-300">
                Portfolio
              </div>
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="relative group px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Text with hover effect */}
                  <span className="relative z-10 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {item.name}
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 rounded-lg transition-all duration-300"></div>
                  
                  {/* Bottom highlight */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transform -translate-x-1/2 transition-all duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button 
              className="md:hidden relative group p-2 text-gray-300 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10">
                <svg 
                  className={`w-6 h-6 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 text-purple-400' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-lg border-b border-purple-500/20 transform transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="relative group px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-lg"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* Mobile item background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                  
                  {/* Mobile item border */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/20 rounded-lg transition-all duration-300"></div>
                  
                  {/* Mobile item text */}
                  <span className="relative z-10 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 flex items-center">
                    {item.name}
                    {item.isExternal && (
                      <svg className="ml-2 w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </span>
                  
                  {/* Mobile item left accent */}
                  <div className="absolute left-0 top-1/2 w-0 h-1/2 bg-gradient-to-b from-purple-500 to-pink-500 group-hover:w-1 transform -translate-y-1/2 transition-all duration-300 rounded-r"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-item {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;