import React from 'react'
import './Project.css'
import Project_Data from '../../assets/ProjectData'


const Service = () => {
  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>My Latest Projects</h1>
        
      </div>
      <div className="projects-container">
{
    Project_Data.map((project,index)=>{
        return <div className="project-format" key={index}>
            <h3>{project.s_no}</h3>
            <h2>{project.s_name}</h2>
            <p>{project.s_img}</p>

            <div className="projects-readmore">
                <p>Read More..</p>
                
            </div>
        </div>
    })
}
      </div>
    </div>
  )
}

export default Service
