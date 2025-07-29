import React from "react";
import "./Skil.css";
import Frontend from "../../assets/FrontEnd.js";
import Backend from "../../assets/Backend.js";
import Tools from "../../assets/Tools.js";
import { easeOut, motion } from "framer-motion";

const Skil = () => {
  return (
    <>
    <motion.h1
    className="skills"
    initial={{x:-50,y:-50,opacity:0}}
transition={{duration:1,ease:easeOut}}
whileInView={{x:0,y:0,opacity:1}}
viewport={{once:false,amount:0.8}}
    >
My Skills
    </motion.h1>
    
   
   
<motion.div
className="skill_container" id="skills"
// initial={{x:-50,y:-50,opacity:1}}
// transition={{duration:1,ease:easeOut}}
// whileInView={{x:0,y:0,opacity:1}}
// viewport={{once:false,amount:0.8}}


>
 
     
      <div className="frontEnd-container">
        {
        Frontend.map((image, index) => {
          return (
            <div className="frontend-skill" key={index}>
              <img src={image.s_img} />
            </div>
          );
        })}
      </div>
     

     <div className="backend-container">
      {
        Backend.map((image,index)=>{
          return(
 <div className="backend-skill" key={index}>
<img src={image.s_img}/>

          </div>
          )
         
        })
      }
     </div>

     <div className="tools-container">
      {
        Tools.map((image,index)=>{
          return(
            <div className="tools" key={index}>
              <img src={image.s_img} />
            </div>
          )
        })
      }
     </div>
  
</motion.div>
   
     </>
  );
};

export default Skil;
