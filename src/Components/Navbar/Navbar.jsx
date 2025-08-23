import "./Navbar.css";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import imageLogo from "../../assets/nameLogo.webp";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mode, setMode] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  function handleMode() {
    let body = document.body;
    body.classList.toggle("light");
    body.style.backgroundColor = "Black";

    if (mode === true) {
      body.style.backgroundColor = "Black";
    } else {
      body.style.backgroundColor = "White";
    }
    setMode(!mode);
  }

  return (
    <>
      <div>
        {/* Top Navbar */}
        <motion.div
          className="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="logoName">
            <img src={imageLogo} />
            <h1>Ankit Mishra</h1>
            {/* <h1> <span>Ankit Mishra</span></h1> */}
            <p>
              Web <span> Developer</span>
            </p>
          </div>

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
              <AnchorLink offset={50} href="#contact" className="anchorLink">
                Contact
              </AnchorLink>
            </li>

            <li>
  <a href="./AMD latest resume.pdf" className="navResume">
          <i class="fas fa-file-download"></i>Hire Me / Resume
            </a>
            </li>
          
           
          </ul>

          <button onClick={handleNav} className="menu-btn">
            {!nav ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </button>

          <button onClick={handleMode} className="modeBtn">
            {mode ? (
              <i class="fa-regular fa-moon moon"></i>
            ) : (
              <i class="fa-regular fa-sun sun"></i>
            )}
          </button>
        </motion.div>

        {/* Sidebar Sliding Menu */}
        <div className={`side-menu ${nav ? "show" : ""}`}>
          <ul>
            <li>
              <AnchorLink
                offset={50}
                href="#home"
                onClick={handleNav}
                className="anchorLink"
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={50}
                href="#aboutMe"
                onClick={handleNav}
                className="anchorLink"
              >
                About Me
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={50} href="#skills" className="anchorLink">
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={50}
                href="#projects"
                onClick={handleNav}
                className="anchorLink"
              >
                Projects
              </AnchorLink>
            </li>

            <li>
              <AnchorLink
                offset={50}
                href="#contact"
                onClick={handleNav}
                className="anchorLink"
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
