import React from "react";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Project from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";


function App() {
  return (
    <div className="">
      <Navbar />
      <Homepage />
      <Aboutme />
      <Project />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
