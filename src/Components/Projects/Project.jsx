import React from 'react'
import './Project.css'
import Project_Data from '../../assets/ProjectData'
import Gemini from "../../assets/Gemini.png"

const Project = () => {
  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>My Latest Projects</h1>
        
      </div>
      <div className="projects-container">
{
    Project_Data.map((project,index)=>{
        return <div className="project-format" key={index}>
          {/* <h3>{project.s_no}</h3> */}
           <img src={project.s_img}/>
            
            <h2>{project.s_name}</h2>
           
            <p>{project.s_desc}</p>
           
            

            <div className="projects-readmore">
              
                <p>Read More..</p>
                
            </div>
            <div className='explore-btn'>
<button><a href={project.s_git}>Get Code</a></button>
<button><a>View Demo</a></button>
            </div>
        </div>
    })
}
      </div>
    </div>
  )
}

export default Project
