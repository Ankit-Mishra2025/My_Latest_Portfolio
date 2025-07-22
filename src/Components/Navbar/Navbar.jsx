import React from "react";
import "./Navbar.css";

import git from "../../assets/git.svg";
import Linkedin from "../../assets/linkedin.svg";
import menu from '../../assets/menu.png'
import closeMenu from '../../assets/closeMenu.png'
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <>
      <motion.div
        className="navbar"
        initial={{ x: 0, y: -100, opacity: 0 }} // right se aaye
        animate={{ x: 0, y: 0, opacity: 1 }} // final position
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>@Ankit</h1>
<img src={menu} className="openMenu"/>

        <ul className="nav-menu">
          <img src={closeMenu} class="closeMenu"/>
          <li>
            <AnchorLink offset={50} href="#home" class="anchorLink">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#aboutMe" class="anchorLink">
              About Me
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href="#projects" class="anchorLink">
              Projects
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href="#certificates" class="anchorLink">
              Certifications
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href="#contact" class="anchorLink">
              Contact
            </AnchorLink>
          </li>
        </ul>

        {/* <div className="nav-connect">
          <button>
            <a href="https://github.com/Ankit-Mishra2025">
              <img src={git} />
            </a>
          </button>

          <button>
            <a href="https://www.linkedin.com/in/ankit-mishra-7b3393310/">
              <img src={Linkedin} />
            </a>
          </button>
        </div> */}
      </motion.div>
    </>
  );
};

export default Navbar;
