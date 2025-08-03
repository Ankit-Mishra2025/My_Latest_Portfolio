import React from "react";
import "./About.css";
import pic2 from "../../assets/Ankit.jpg";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
const About = () => {
  return (
    <div className="about" id="aboutMe">
      <motion.div
        className="about-title"
        initial={{ x: 50, y: -80, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <h1>About me</h1>
      </motion.div>

      <div className="about-section">
        <div className="about-left">
          <motion.div
            className="who"
            initial={{ x: -200, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 1, ease: easeIn }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2>👨‍💻Who I Am</h2>
            <p>
              I'm a passionate web developer skilled in Front-end Development
              and i like to enjoy create and build user friendly applications
            </p>
          </motion.div>

          <motion.div
            className="what"
            initial={{ x: -150, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 1, ease: easeIn }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2>💪What I Do</h2>
            <p>
              Currently learning MERN Stack and enhancing my crafting and
              designing skill by developing smooth and silk web applications
            </p>
          </motion.div>

          <motion.div
            className="approach"
            initial={{ x: -150, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 1, ease: easeIn }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2>🤞My Approach</h2>
            <p>
              I belive in writing clean code ,documents my projects and think
              always for mobile apporached applications{" "}
            </p>
          </motion.div>

          <motion.div
            className="coreValue"
            initial={{ x: -140, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 1, ease: easeIn }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2>😊Coding Principles</h2>
            <p>📱Mobile Perfect Design</p>
            <p>📃Code Documenation</p>
            <p>🎨Silk and Smooth Design</p>
          </motion.div>
        </div>

        <div className="about-right">
          <motion.div
            className="aboutAchievment"
            initial={{ x: 140, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 1, ease: easeIn }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="aboutAchievment">
              <h1>🥇Achievments</h1>
              <div className="allAchievments">
                <div className="experience">
                  <h2>0-6+</h2>
                  <p>MONTHS OF EXPERIENCE</p>
                </div>

                <div className="projectsAchievements">
                  <h2>20+</h2>
                  <p>Frontend Projects Created</p>
                </div>

                <div className="starAchievment">
                  <h2>2⭐In Python </h2>
                  <p>on Hackerank</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="certify"
            initial={{ x: 130, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 1, ease: easeIn }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2>↗️Certifications</h2>
            <p>
              {" "}
              (1) Responsive web Design <span>(freeCode Camp)</span>{" "}
              <a
                href="https://www.freecodecamp.org/certification/developerankit2003/responsive-web-design"
                target="_blank"
              >
                <i class="fas fa-external-link-alt"></i> Verify
              </a>
            </p>
            <p>
              (2) Unlocking the power of JavaScript <span>(Scaler)</span>{" "}
              <a href="https://shorturl.at/PwkbD" target="_blank">
                <i class="fas fa-external-link-alt"></i> Verify
              </a>
            </p>
            <p>
              (3) Internship Certificate <span>(CodeAlpha)</span>{" "}
              <a
                href="https://www.codealpha.tech/Certificate/Code-Verification.html"
                target="_blank"
              >
                <i class="fas fa-external-link-alt"></i> Verify
              </a>
            </p>
          </motion.div>

          <motion.div
            className="currentFocus"
            initial={{ x: 130, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            duration={{ transition: 0.5,  }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2>💻Current Learnings</h2>
            <div className="currentLearnings">
              <p class="learning">Backend Development</p>
              <p class="learning">Mobile Perfect Design</p>
              <p class="learning">Clear and Concise Code</p>
              <p class="learning">Performance Optimization</p>
              <p class="learning">Animation Libraries</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
