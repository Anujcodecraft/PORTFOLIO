import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import SocialLink from "./components/SocialLink";


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