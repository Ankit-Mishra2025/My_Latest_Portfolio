import React from "react";
import "./Project.css";
import Project_Data from "../../assets/ProjectData";
import Gemini from "../../assets/Gemini.png";
import { easeInOut, motion } from "framer-motion";
import git from "../../assets/git.jpg";
const Project = () => {
  return (
    <>
      <div className="projects" id="projects">
        <motion.div
          className="projects-title"
          initial={{ x: 50, y: -50, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1>My Latest Projects</h1>
        </motion.div>

        <div className="projects-container">
          {Project_Data.map((project, index) => {
            return (
<motion.div className="coverProjects"

initial={{x:0,y:0,opacity:1}}
// whileTap={{x:20,y:-40}}
whileFocus={{x:30,y:50}}
duration={{duration:0.8}}

>


              <div className="hoverProject">

 <div className="project-format" key={index}>
                  <img src={project.s_img} />
                  <h2>{project.s_name}</h2>
                  <p>{project.s_desc}</p>
               
                <div className="explore-btn">
                  <div className="getCodeBtn">
                    <button>
                      <a href={project.s_git} target="_blank">
                        <i class="fa-brands fa-github "></i> Get Code
                      </a>
                    </button>
                  </div>
                  <div className="demo-btn">
  <button >
                    <i class="fas fa-external-link-alt"></i> <a>View Demo</a>
                  </button>
                  </div>
                
                </div>
                 </div>

               
              </div>
             
</motion.div>
              
           
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
