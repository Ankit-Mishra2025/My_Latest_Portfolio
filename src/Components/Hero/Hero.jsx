import React from "react";
import "./Hero.css";
import Pic from "../../assets/pic.png";
import { motion } from "framer-motion";  // ✅ Correct import

const Hero = () => {
  return (
    <div className="hero">
      <div className="left_hero">
        <h1>
          <span>I'm Ankit Mishra,</span> Frontend developer
        </h1>
        <p>
          I am a frontend developer from Ghaziabad, just completed my Diploma in
          Information Technology and learning full stack development
        </p>
        <div className="hero_action">
          <div className="hero_connect">Connect with me</div>
          <div className="hero_resume">My Resume</div>
        </div>
      </div>
      <div className="right_hero">
        
        <motion.img
          src={Pic}
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5}}
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
