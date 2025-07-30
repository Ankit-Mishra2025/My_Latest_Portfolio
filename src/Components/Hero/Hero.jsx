import React from "react";
import "./Hero.css";
import Pic from "../../assets/pic.png";
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
          <span>I'm Ankit Mishra,</span><br />
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
         I am a passionate Frontend Developer from Ghaziabad with a Diploma in Information Technology. I have recently completed my academic journey and am now actively expanding my skills in full-stack web development. 
        </p>
        <div className="hero_action">
          <div className="hero_connect">
            <AnchorLink offset={50} href="#contact" class="connectLink">
              Connect with me
            </AnchorLink>
          </div>
          

 <div className="hero_resume">
   
<a href="./AMD resume.pdf" target="_blank" > My Resume</a>

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
