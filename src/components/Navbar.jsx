import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">Portfolio</div>
          <div className="hidden md:flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="https://leetcode.com/u/ag083519/" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              LeetCode
            </NavLink>
            <NavLink 
              to="https://www.geeksforgeeks.org/user/ag083dc0n/" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              GFG
            </NavLink>
            <NavLink 
              to="https://github.com/Anujcodecraft" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              GitHub
            </NavLink>
            <NavLink 
              to="https://www.linkedin.com/in/anuj-gautam-277a64257/" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              LinkedIn
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `hover:text-accent transition-colors ${isActive ? 'text-accent font-medium' : 'text-gray-300'}`
              }
            >
              Contact
            </NavLink>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

