import React from "react";
import "./Hero.css";
import Pic from "../../assets/homeImage.jpg";
import { easeIn, easeOut, motion } from "framer-motion";
// import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pic from '../../assets/Ankit.jpg'
const Hero = () => {
  return (
   
<>
      <motion.div
      className="left_hero"
      id="home"
      initial={{x:0,y:-100,opacity:1}}
      whileInView={{x:0,y:0,opacity:1}}
      
      viewport={{once:false,amount:0.8}}
      
      >

 <h1>
 
  I'm Ankit Mishra
          <br />
          
   
        </h1>
        <h2 className="typeSkill">
 <Typewriter
            words={[
              "Web Developer",
              "Front-End Developer",
              "Freelancer..",
              "Content-Writer"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={1000}
            
          />
        </h2>
               <div className="heroPara">
<p>
          I'm a <span style= {{"textIndent": "60px","padding":"20px 0px"}}> Web developer</span> 
           I completed my Diploma <span >in Computer Science</span>  and graduated, I am a web developer with expertise in <span style={{"textIndent": "20px","padding":"20px 0px"}}> React,JavaScript and Tailwind Css</span> currently Learning <span> backend development with MERN</span>.Passionate about <span>creating a better user experience</span> and quick learner
          
       
        </p>
        </div>
        
           <div className="hero_action">
          <div className="hero_connect">
            <button className="connectLink">
 <AnchorLink offset={50} href="#contact" >
              <a><i class="fas fa-paper-plane"></i> Get in Touch</a>
              
            </AnchorLink>
            </button>
           
            <button className="heroResume">
<a href="./AMD resume.pdf" target="_blank" > <i class="fas fa-file-download"></i> </a>
           My Resume </button>
            
            <button className="viewProject">
 <AnchorLink offset={50} href="#projects">
 <a href="#projects"> <i class="fas fa-external-link-alt"></i> View Project</a>
            </AnchorLink>
            </button>
             
          </div>
          


           
        </div>
      
        </motion.div>
        
    
     


   </>
  );
};

export default Hero;
