import React from "react";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Project from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import Aboutmeimg from "./images/Aboutmeimg.jpg";


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
      <Aboutmeimg/>
      
    </div>
  );
}

export default App;
