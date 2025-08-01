import React from "react";
import "./Hero.css";
import Pic from "../../assets/homeImage.jpg";
import { easeIn, easeOut, motion } from "framer-motion";
// import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">

      <motion.div
      className="left_hero"
      initial={{x:-50,y:0,opacity:0}}
      whileInView={{x:0,y:0,opacity:1}}
      transition={{duration:0.5, ease:easeIn}}
      viewport={{once:false,amount:0.2}}
      
      >

 <h1>
         Hey,   <span>I'm Ankit Mishra,</span><br />
          <Typewriter
            words={[
              "  WEB DEVELOPER...",
              "Front-End Developer",
              "FREELANCER...",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
        <p>
           A frontend developer based in Ghaziabad with a passion for building clean and responsive web interfaces. I’m skilled in React.js, Tailwind CSS, JavaScript and currently learning the MERN stack development.
       
        </p>
        <div className="hero_action">
          <div className="hero_connect">
            <AnchorLink offset={50} href="#contact" class="connectLink">
              <i class="fas fa-paper-plane"></i> Get in Touch
            </AnchorLink>
          </div>
          

 <div className="hero_resume">
   
<a href="./AMD resume.pdf" target="_blank" > <i class="fas fa-file-download"></i> My Resume</a>

  </div>
         
         
        </div>
        
         
     

      </motion.div>


      {/* <div className="left_hero">
        <h1>
          <span>I'm Ankit Mishra,</span>
          <br />
          <Typewriter
            words={[
              "  WEB DEVELOPER...",
              "Front-End Developer",
              "FREELANCER...",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
        <p>
          I am a frontend developer from Ghaziabad, just completed my Diploma in
          Information Technology and learning full stack development
        </p>
        <div className="hero_action">
          <div className="hero_connect">
            <AnchorLink offset={50} href="#contact" class="anchorLink">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero_resume">My Resume</div>
        </div>
      </div> */}
      <div className="right_hero">
        <motion.img
          src={Pic}
          alt=""
          initial={{ x: -50, y: -100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
          viewport={{ once: false, amount:0.2 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.8 },
          }}
          whileTap={{ scale: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Hero;
