import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Service from "./Components/Projects/Project";
import Certificate from "./Components/Certifications/Certificate";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import Skil from "./Components/Skills/Skil";
import FilterSkill from "./Components/FilteredSkill/FilterSkill";


const App = () => {
  return (
    <div>
    
      <Navbar />
      <Hero />
      <About />
      {/* <FilterSkill/> */}
      <Skil />
      <Service />
      {/* <Certificate /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
