import React from "react";
import "./About.css";
import pic2 from "../../assets/Ankit.jpg";
import { easeInOut, easeOut, motion } from "framer-motion";
const About = () => {
  return (
    <div className="about" id="aboutMe">

      <motion.div
      className="about-title"
     initial={{ x: 50, y: -50, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease:easeInOut }}
        viewport={{ once: false, amount: 0.8 }}
      >
<h1>About me</h1>

      </motion.div>
      
      <div className="about-section">
        <div className="about-left">
          <motion.img
            src={pic2}
            alt=""
            initial={{ x: -70, y: 0, opacity: -10 }}
              
             whileInView={{ x: 0, opacity: 1 }}         // jab scroll par visible ho
      transition={{ duration:1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
            
            
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.8 },
            }}
          />
        </div>

        <div className="about-right">
          <motion.div
           className="about-para"
      initial={{ x: 100, opacity: 0 }}           // right se aaye
      whileInView={{ x: 0, opacity: 1 }}         // jab scroll par visible ho
      transition={{ duration:1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} 
          >
            <p>
              I am a fresher frontend developer with skills in HTML, CSS, JS,
              and React.js. I have recently completed my Diploma from Government
              College, Ghaziabad.
            </p>
            <p>
              My passion for development is not only writing code but also
              curating interactive, scalable web applications.
            </p>
          </motion.div>

          <div className="about-skills">
            <motion.div
              className="about-skill"
              initial={{ x: 100, opacity: 0 }} // right se aaye
              
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{x:0, y:0,opacity:1}}
              viewport={{once:false,amount:0.2}}
            >
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </motion.div>

            <motion.div
              className="about-skill"
             initial={{ x: 100, opacity: 0 }} // right se aaye
              
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{x:0, y:0,opacity:1}}
              viewport={{once:false,amount:0.2}}
            >
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }} // right se aaye
            className="about-skill"
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{x:0, y:0,opacity:1}}
              viewport={{once:false,amount:0.2}}
            >
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </motion.div>

            <motion.div
              className="about-skill"
              initial={{ x: 100, opacity: 0 }} // right se aaye
              
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{x:0, y:0,opacity:1}}
              viewport={{once:false,amount:0.2}}
            >
              <p>Python</p>
              <hr style={{ width: "50%" }} />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
      className="about-achievements"
      initial={{x:0,y:-100,opacity:0}}
      transition={{duration:1.2,ease:easeOut}}
      whileInView={{x:0,y:0,opacity:1}}
      viewport={{once:false,amount:0.2}}
      
      >
      <div className="about-achievements">
        <div className="about-achievemnt">
          <h1>0-6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievemnt">
          <h1>2⭐In Python </h1>
          <p>on Hackerank</p>
        </div>
        <hr />
        <div className="about-achievemnt">
          <h1>20+</h1>
          <p>Frontend Projects Created</p>
        </div>
      </div>
      </motion.div>
      {/* <div className="about-achievements">
        <div className="about-achievemnt">
          <h1>0-6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievemnt">
          <h1>2⭐In Python </h1>
          <p>on Hackerank</p>
        </div>
        <hr />
        <div className="about-achievemnt">
          <h1>20+</h1>
          <p>Frontend Projects Created</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
