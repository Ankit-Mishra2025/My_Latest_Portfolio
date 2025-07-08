import React from 'react'
import './Navbar.css'

import git from '../../assets/git.svg'
import Linkedin from '../../assets/linkedin.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Ankit@</h1>
        
        <ul className='nav-menu'>
<li>Home</li>
<li>About Me</li>
<li>Services</li>
<li>Projects</li>

<li>Certifications</li>
        </ul>
        <div>
<div class="nav-connect">
Connect with me 

<button><a href="https://github.com/Ankit-Mishra2025"><img src={git}/></a></button>
    
     <button><a href="https://www.linkedin.com/in/ankit-mishra-7b3393310/"><img src={Linkedin}/></a></button>
    </div>

 
    
    
        </div>
    
    </div>
  )
}

export default Navbar
