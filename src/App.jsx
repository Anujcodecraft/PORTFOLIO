import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import SocialLink from "./components/SocialLink";
import Leetcode from "./pages/Leetcode";
import Gfg from "./pages/GFG";
import Github from "./pages/Github";
import LinkedIn from "./pages/LinkedIN";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SocialLink />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
               
              </>
            } 
          />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/gfg" element={<Gfg />} />
          <Route path="/github" element={<Github />} />
          <Route path="/linkedin" element={<LinkedIn />} />
          <Route 
            path="/projects" 
            element={
              <div className="min-h-screen pt-20">
                <Project />
              </div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <div className="min-h-screen pt-20">
                <Contact />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;