import "./Navbar.css";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import logo from '../../assets/Ankit logol.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);
const[mode,setMode]=useState(false)

  function handleNav() {
    setNav(!nav);
  }

  function handleMode(){

    let body=document.body;
    body.classList.toggle("light")
    body.style.backgroundColor="Black"


    if (mode===true) {
      body.style.backgroundColor="Black"

    }
    else{
       body.style.backgroundColor="White"
      

    }
    setMode(!mode)
  }

  return (
    <>
      {/* Top Navbar */}
      <motion.div
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <h1>@Ankit</h1>

        <ul className="nav-menu desktop">
          <li>
            <AnchorLink offset={50} href="#home" className="anchorLink">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#aboutMe" className="anchorLink">
              About Me
            </AnchorLink>
          </li>

 <li>
            <AnchorLink offset={50} href="#skills" className="anchorLink">
              Skills
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href="#projects" className="anchorLink">
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#certificates" className="anchorLink">
              Certifications
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#contact" className="anchorLink">
              Contact
            </AnchorLink>
          </li>
         
        </ul>

<button onClick={handleMode} className="modeBtn">
            {
              mode?<i class="fa-regular fa-moon moon"></i>:<i class="fa-regular fa-sun sun"></i>
            }

</button>
      
        <button onClick={handleNav} className="menu-btn">
          {!nav ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </motion.div>


      {/* Sidebar Sliding Menu */}
      <div className={`side-menu ${nav ? "show" : ""}`}>
        <ul>
          <li>
            <AnchorLink offset={50} href="#home" onClick={handleNav} className="anchorLink">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#aboutMe" onClick={handleNav} className="anchorLink">
              About Me
            </AnchorLink>
          </li>
           <li>
            <AnchorLink offset={50} href="#skills" className="anchorLink">
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#projects" onClick={handleNav} className="anchorLink">
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#certificates" onClick={handleNav} className="anchorLink">
              Certifications
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#contact" onClick={handleNav} className="anchorLink">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
