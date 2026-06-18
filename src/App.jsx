import React, { useState, useEffect } from "react"; // Added useEffect here
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/data";

function App() {
  const data = portfolioData.personalInfo;
  const [activeSection, setActiveSection] = useState("About");

  // URL Hash (#Contact) aur window view ko refresh par clean karne ka lifecycle hook
  useEffect(() => {
    if (window.location.hash) {
      // 1. Window ko direct top position par initialize karein
      window.scrollTo(0, 0);
      
      // 2. URL bar se hash string (#Contact) ko bina page reload kiye remove karein
      window.history.replaceState(null, null, window.location.pathname);
      
      // 3. Active tab state ko default state ("About") par set karein
      setActiveSection("About");
    }
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setActiveSection(id); // Active tab ko update karne ke liye
    }
  };

  return (
    <div className="bg-[#05050a] text-white min-h-screen overflow-x-hidden selection:bg-purple-600/30">
      
      <Navbar
        NAV={["About", "Experience", "Projects", "Skills", "Contact"]}
        active={activeSection}
        scrollTo={scrollTo}
      />

      <Hero data={data} scrollTo={scrollTo} />

      <About scrollTo={scrollTo} />
      
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;