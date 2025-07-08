import React from 'react'
import './About.css'
import pic2 from '../../assets/Ankit.jpg'
const About = () => {
  return (
    <div className='about'>
<div className="about-title">
    <h1>About me</h1>
    
</div>
 <div className="about-section">
    <div className="about-left">
<img src={pic2} alt=""/>
    </div>

    <div className="about-right">
<div className="about-para">
    <p>I am  a fresher frontend developer with skilled of HTML,CSS,JS,and React J.S and i have recently completed my Diploma from Government College ,Ghaziabad</p>
    <p>My Passion for development is not only writing code but also curated a interactive scalable web applications</p>
</div>
<div className="about-skills">
<div className="about-skill">
    <p>HTML & CSS</p>
    <hr style={{width:"50%"}}/>
</div>

<div className="about-skill">
    <p>React JS</p>
    <hr style={{width:"70%"}}/>
</div>

<div className="about-skill">
    <p>Javascript</p>
    <hr style={{width:"60%"}}/>
</div>

<div className="about-skill">
    <p>Python</p>
    <hr style={{width:"50%"}}/>
</div>
</div>
    </div>
</div>
<div className="about-achievements">
    <div className="about-achievemnt">
        <h1>0-6+</h1>
        <p>MONTHS OF EXPERIENCE</p>
    </div>
    <hr/>
    <div className="about-achievemnt">
        <h1>2⭐In Python </h1>
        <p>on Hackerank</p>
    </div>
    <hr/>
     <div className="about-achievemnt">
        <h1>20+ 

        </h1>
        <p>Frontend Projects Created</p>
    </div>
    
</div> 
    </div>
  )
}

export default About
